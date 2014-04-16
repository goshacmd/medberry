class Consultation < ActiveRecord::Base
  include Statesman::Adapters::ActiveRecordModel
  include PusherChannels
  include Enum

  STATUSES = { in_progress: 0, over: 1, finished: 2 }
  FINISHING_CAUSES = { manual: 0, out_of_time: 1, doctor_offline: 2, patient_offline: 3 }
  FINISHERS = { system: 0, patient: 1, doctor: 2 }

  has_many :consultation_transitions

  belongs_to :patient
  belongs_to :doctor
  belongs_to :request, class_name: 'ConsultationRequest'
  has_many :sessions, class_name: 'ConsultationSession'
  has_many :messages

  enum :status, STATUSES
  enum :finishing_cause, FINISHING_CAUSES
  enum :finished_by, FINISHERS

  scope :created_before, -> time { where('created_at <= :time', time: time) }

  class << self
    def create_from_request(request)
      create(status: :in_progress, patient: request.patient, doctor: request.doctor, request: request, cause: request.cause)
    end
  end

  delegate :tokbox_token_patient, :tokbox_token_doctor, :expires_at, to: :latest_session
  delegate :can_transition_to?, :transition_to!, :transition_to, :current_state, to: :state_machine

  def latest_session
    sessions.order(created_at: :desc).first || ConsultationSession.new
  end

  def parties
    [doctor, patient]
  end

  def tokbox_token_for_role(role)
    role == 'doctor' ? tokbox_token_doctor : tokbox_token_patient
  end

  def in_progress?
    status == :in_progress
  end

  def over?
    status == :over
  end

  def finished?
    status == :finished
  end

  # Get the role of a user in the consultation.
  #
  # @param user_or_identity [User, Patient, Doctor]
  #
  # @return [:patient, :doctor]
  def role_of(user_or_identity)
    identity = User === user_or_identity ? user_or_identity.identity : user_or_identity

    patient == identity ? :patient : doctor == identity ? :doctor : nil
  end

  def state_machine
    @state_machine ||= ConsultationStateMachine.new(self, transition_class: self.class.transition_class)
  end

  private

  def self.transition_class
    ConsultationTransition
  end
end

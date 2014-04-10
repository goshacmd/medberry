class Consultation < ActiveRecord::Base
  include PusherChannels
  include Enum

  STATUSES = { new: 0, finished: 1 }
  FINISHING_CAUSES = { manual: 0, out_of_time: 1, doctor_offline: 2, patient_offline: 3 }
  FINISHERS = { system: 0, patient: 1, doctor: 2 }

  belongs_to :patient
  belongs_to :doctor
  belongs_to :request, class_name: 'ConsultationRequest'
  has_many :sessions, class_name: 'ConsultationSession'

  enum :status, STATUSES
  enum :finishing_cause, FINISHING_CAUSES
  enum :finished_by, FINISHERS

  class << self
    def create_from_request(request)
      create(patient: request.patient, doctor: request.doctor, request: request, cause: request.cause)
    end
  end

  delegate :tokbox_token_patient, :tokbox_token_doctor, :expires_at, to: :latest_session

  def latest_session
    sessions.first || ConsultationSession.new
  end

  def parties
    [doctor, patient]
  end

  def tokbox_token_for_role(role)
    role == 'doctor' ? tokbox_token_doctor : tokbox_token_patient
  end

  def new_consultation?
    status == :new
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
end

class Consultation < ActiveRecord::Base
  include PusherChannels
  include Enum

  STATUSES = { new: 0, finished: 1 }
  FINISHERS = { system: 0, patient: 1, doctor: 2 }

  belongs_to :patient
  belongs_to :doctor
  belongs_to :request, class_name: 'ConsultationRequest'

  enum :status, STATUSES
  enum :finished_by, FINISHERS

  class << self
    def create_from_request(request)
      create(patient: request.patient, doctor: request.doctor, request: request, cause: request.cause)
    end
  end

  after_create :create_tokbox_session

  def create_tokbox_session
    session = $open_tok.create_session.session_id
    self.expiry = 20.minutes.from_now # tokens expire 20 mins after creation
    patient_data = { consultation: id, role: 'patient' }.to_json
    doctor_data = { consultation: id, role: 'doctor' }.to_json

    self.tokbox_session = session
    self.tokbox_token_patient = $open_tok.generate_token session_id: tokbox_session, connection_data: patient_data, expire_time: expiry.to_i
    self.tokbox_token_doctor = $open_tok.generate_token session_id: tokbox_session, connection_data: doctor_data, expire_time: expiry.to_i

    save
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

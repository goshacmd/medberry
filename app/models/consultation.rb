class Consultation < ActiveRecord::Base
  include PusherChannels

  belongs_to :patient
  belongs_to :doctor
  belongs_to :request, class_name: 'ConsultationRequest'

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
end

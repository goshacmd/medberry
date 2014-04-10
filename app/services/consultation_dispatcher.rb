class ConsultationDispatcher
  attr_reader :request, :open_tok

  # @param request [ConsultationRequest]
  # @param open_tok [OpenTokSDK]
  def initialize(request, open_tok: $open_tok)
    @request = request
    @open_tok = open_tok
  end

  # Create a consultation from a consultation request.
  def perform
    return unless QueueService.new(request.doctor).next_request == request

    consultation = Consultation.create_from_request(request)
    consultation.update(tokbox_session: open_tok.create_session.session_id)

    request.update(status: :accepted)
    create_session_for consultation
  end

  def create_session_for(consultation)
    session = consultation.sessions.new

    expiry = 20.minutes.from_now
    cid = consultation.id
    sid = consultation.tokbox_session

    patient_data = { consultation: cid, role: 'patient' }.to_json
    doctor_data = { consultation: cid, role: 'doctor' }.to_json

    token_patient = open_tok.generate_token session_id: sid,
      connection_data: patient_data, expire_time: expiry.to_i
    token_doctor = open_tok.generate_token session_id: sid,
      connection_data: doctor_data, expire_time: expiry.to_i

    session.update(expires_at: expiry, tokbox_token_patient: token_patient,
                   tokbox_token_doctor: token_doctor)
  end
end

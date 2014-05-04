# Creator of consultation sessions.
class SessionCreator
  attr_reader :consultation, :open_tok

  # Initialize a +SessionCreator+.
  #
  # @param consultation [Consultation]
  # @param open_tok [OpenTokSDK]
  def initialize(consultation, open_tok: $open_tok)
    @consultation = consultation
    @open_tok = open_tok
  end

  # Create a consultation session.
  #
  # @param duration [Integer] number of seconds the session expires in
  def perform(duration: 20.minutes)
    session = consultation.sessions.new

    expiry = duration.from_now
    cid = consultation.id
    sid = consultation.tokbox_session

    token_patient = generate_token sid, cid, :patient, expiry
    token_doctor = generate_token sid, cid, :doctor, expiry

    session.update(expires_at: expiry, tokbox_token_patient: token_patient,
                   tokbox_token_doctor: token_doctor)
  end

  # Generate a token.
  #
  # @param session_id [String]
  # @param consultation_id [String]
  # @param role [String]
  # @param expiry [Integer]
  def generate_token(session_id, consultation_id, role, expiry)
    data = { consultation: consultation_id, role: role }.to_json

    open_tok.generate_token session_id: session_id, connection_data: data,
      expire_time: expiry.to_i
  end
end

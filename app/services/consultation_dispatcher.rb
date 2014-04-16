class ConsultationDispatcher
  attr_reader :request, :open_tok

  # Initialize a +ConsultationDispatcher+.
  #
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

    ConsultationRequestStatusChanger.new(request).accept

    initial_span = consultation.doctor.consultation_policy.initial_span
    SessionCreator.new(consultation).perform duration: initial_span
  end
end

class ConsultationDispatcher
  attr_reader :request

  # @param request [ConsultationRequest]
  def initialize(request)
    @request = request
  end

  # Create a consultation from a consultation request.
  def perform
    consultation = Consultation.create_from_request(request)

    return unless consultation.valid?

    Pusher.trigger(consultation.channels, "requests:#{request.id}", consultation: consultation.id)
  end
end

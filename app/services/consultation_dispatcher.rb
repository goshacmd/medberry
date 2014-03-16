class ConsultationDispatcher
  attr_reader :request

  # @param request [ConsultationRequest]
  def initialize(request)
    @request = request
  end

  # Create a consultation from a consultation request.
  def perform
    Consultation.create_from_request(request)
  end
end

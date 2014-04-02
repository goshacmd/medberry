class ConsultationDispatcher
  attr_reader :request

  # @param request [ConsultationRequest]
  def initialize(request)
    @request = request
  end

  # Create a consultation from a consultation request.
  def perform
    if QueueService.new(request.doctor).next_request == request
      Consultation.create_from_request(request)
      request.update(status: :accepted)
    end
  end
end

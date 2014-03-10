class ConsultationDispatcher
  attr_reader :request

  def initialize(request)
    @request = request
  end

  def perform
    consultation = Consultation.create_from_request(request)

    return unless consultation.valid?

    Pusher.trigger(consultation.channels, "requests:#{request.id}", consultation: consultation.id)
  end
end

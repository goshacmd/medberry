class ConsultationDispatcher
  attr_reader :request

  def initialize(request)
    @request = request
  end

  def perform
    consultation = Consultation.create_from_request(request)

    return unless consultation.valid?

    request.update(status: :accepted)

    channels = [consultation.patient, consultation.doctor].map { |i| i.user.try(:pusher_channel_name) }
    Pusher.trigger(channels, "requests:#{request.id}", consultation: consultation.id)
  end
end

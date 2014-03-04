class ConsultationDispatcher
  attr_reader :request

  def initialize(request)
    @request = request
  end

  def push(channels, data)
    Pusher.trigger(channels, 'consultation_started', data)
  end

  def perform
    consultation = Consultation.create_from_request(request)
    channels = [consultation.patient, consultation.doctor].map { |i| i.user.try(:pusher_channel_name) }

    push channels, request: request.id, consultation: consultation.id
  end
end

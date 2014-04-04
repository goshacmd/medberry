class QueueStatsPusher
  include BatchProcessor

  attr_reader :queue_service, :pusher

  # @param queue_service [Class]
  # @param pusher [Pusher]
  def initialize(queue_service: QueueService, pusher: Pusher)
    @queue_service = queue_service
    @pusher = pusher
  end

  def selector
    ConsultationRequest.unfilled
  end

  def process(request)
    stats = queue_service.new(request.doctor).stats(request).merge(id: request.id, updated_at: Time.now)

    meta = ConsultationRequestQueueMeta.new(stats)

    pusher.trigger request.patient_channel, 'consultation_request_queue_metas',
      ConsultationRequestQueueMetaSerializer.new(meta).as_json
  end
end

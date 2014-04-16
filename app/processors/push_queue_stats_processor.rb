class PushQueueStatsProcessor
  include BatchProcessor

  attr_reader :queue_service, :update_pusher, :pusher

  # @param queue_service [Class]
  # @param update_pusher [UpdatePusher]
  # @param pusher [Pusher]
  def initialize(queue_service: QueueService, update_pusher: nil, pusher: Pusher)
    @queue_service = queue_service
    @update_pusher = update_pusher || UpdatePusher.new(pusher: pusher)
    @pusher = pusher
  end

  def selector
    ConsultationRequest.in_status(:new)
  end

  def process(request)
    stats = queue_service.new(request.doctor).stats(request).merge(id: request.id, updated_at: Time.now)

    meta = ConsultationRequestQueueMeta.new(stats)

    update_pusher.push request.patient_channel, meta
  end
end

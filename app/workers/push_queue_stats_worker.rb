class PushQueueStatsWorker
  include BatchProcessor
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  sidekiq_options retry: false
  recurrence { secondly(30) }

  attr_reader :queue_service, :update_pusher

  # @param queue_service [Class]
  # @param update_pusher [UpdatePusherService]
  def initialize(queue_service: QueueService, update_pusher: Services.update_pusher)
    @queue_service = queue_service
    @update_pusher = update_pusher
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

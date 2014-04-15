task scheduler: [:environment] do
  Rails.application.eager_load!

  scheduler = Rufus::Scheduler.new

  marker = MarkOnlineStatusProcessor.new
  status_pusher = PushOnlineStatusProcessor.new
  queue_pusher = PushQueueStatsProcessor.new
  finisher = FinishConsultationProcessor.new
  canceler = CancelConsultationRequestProcessor.new

  scheduler.every '10s' do
    marker.perform
  end

  scheduler.every '10s' do
    status_pusher.perform
  end

  scheduler.every '30s' do
    queue_pusher.perform
  end

  scheduler.every '30s' do
    finisher.perform
  end

  scheduler.every '30s' do
    canceler.perform
  end

  scheduler.join
end

task scheduler: [:environment] do
  scheduler = Rufus::Scheduler.new
  pusher = OnlineStatusPusher.new
  finisher = AutoConsultationFinisher.new
  ConsultationStatusUpdater

  scheduler.every '10s' do
    pusher.trigger
  end

  scheduler.every '30s' do
    finisher.perform
  end

  scheduler.join
end

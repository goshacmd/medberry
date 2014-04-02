task scheduler: [:environment] do
  Rails.application.eager_load!

  scheduler = Rufus::Scheduler.new

  marker = OnlineStatusMarker.new
  pusher = OnlineStatusPusher.new
  finisher = ConsultationFinisher.new

  scheduler.every '10s' do
    marker.perform
  end

  scheduler.every '10s' do
    pusher.trigger
  end

  scheduler.every '30s' do
    finisher.perform
  end

  scheduler.join
end

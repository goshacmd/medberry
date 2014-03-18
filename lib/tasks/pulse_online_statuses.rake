task pulse_online_statuses: [:environment] do
  scheduler = Rufus::Scheduler.new
  pusher = OnlineStatusPusher.new

  scheduler.every '10s' do
    pusher.trigger
  end

  scheduler.join
end

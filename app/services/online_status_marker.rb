class OnlineStatusMarker
  def perform
    status_service = OnlineStatusService.new

    User.all.each do |user|
      status_service.mark(user)
    end
  end
end

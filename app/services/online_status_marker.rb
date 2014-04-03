class OnlineStatusMarker
  attr_reader :status_service

  def initialize(status_service: OnlineStatusService.new)
    @status_service = status_service
  end

  def perform
    User.all.each do |user|
      status_service.mark(user)
    end
  end
end

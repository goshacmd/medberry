class OnlineStatusMarker
  include BatchProcessor

  attr_reader :status_service

  def initialize(status_service: OnlineStatusService.new)
    @status_service = status_service
  end

  def selector
    User.all
  end

  def process(user)
    status_service.mark(user)
  end
end

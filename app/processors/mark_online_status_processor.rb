class MarkOnlineStatusProcessor
  include BatchProcessor

  attr_reader :status_service

  def initialize(status_service: OnlineStatusService.new)
    @status_service = status_service
  end

  def selector
    User.pluck(:identity_id, :identity_type)
  end

  def process(user)
    id, role = user
    status_service.mark([role.downcase, id])
  end
end

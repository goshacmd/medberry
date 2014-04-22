class MarkOnlineStatusWorker
  include BatchProcessor
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  sidekiq_options retry: false
  recurrence { secondly(30) }

  attr_reader :status_service

  def initialize(status_service: OnlineStatusService.new)
    @status_service = status_service
  end

  def selector
    User.pluck(:identity_id, :identity_type)
  end

  def process(user)
    id, role = user

    return unless id && role # in case identity_id and identity_type are missing for some reason

    status_service.mark([role.downcase, id])
  end
end

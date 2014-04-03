# Cancels the consultation requests when either doctor or patient has been
# offline for more than 5 minutes.
class ConsultationRequestCanceler
  attr_reader :status_service

  def initialize
    @status_service = OnlineStatusService.new
  end

  def selector
    ConsultationRequest.unfilled
  end

  def perform
    selector.each do |request|
      process request
    end
  end

  def process(request)
    return unless should_be_canceled?(request)
  end

  def should_be_canceled?(request)
    return false unless request.new_request?

    request.parties.none? do |party|
      status_service.was_recently_online?(party.user, window: 5.minutes)
    end
  end
end

# Cancels the consultation requests when:
#
# 1. the doctor has been offline for more than 5 minutes
# 2. the patient has been offline for more than 5 minutes AND the request is
#    the first in the queue to that doctor
class ConsultationRequestCanceler
  include BatchProcessor

  attr_reader :status_service

  def initialize(status_service: OnlineStatusService.new)
    @status_service = status_service
  end

  def selector
    ConsultationRequest.unfilled
  end

  def process(request)
    return unless should_be_canceled?(request)

    request.update(status: :declined)
  end

  def should_be_canceled?(request)
    return false unless request.new_request?

    doctor = request.doctor
    patient = request.patient

    queue = QueueService.new(doctor)

    not_recently_online?(doctor) ||
      (not_recently_online?(patient) && queue.next_request == request)
  end

  def not_recently_online?(identity)
    !status_service.was_recently_online?(identity.user, window: 5.minutes)
  end
end

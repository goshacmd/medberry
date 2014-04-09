# Updates the status of the consultation. Consultation is considered to be
# finished if it wasn't manually finished but:
#
# 1. it has already expired
# 2. either doctor or patient was offline for more than 2 mins
class ConsultationFinisher
  include BatchProcessor

  attr_reader :status_service

  def initialize(status_service: OnlineStatusService.new)
    @status_service = status_service
  end

  def selector
    Consultation.where('finished_at IS NULL and created_at <= :now', now: Time.now)
  end

  def process(consultation)
    cause = finishing_cause(consultation)
    return unless cause

    consultation.update status: :finished, finished_at: Time.now,
      finished_by: :system, finishing_cause: cause
  end

  def should_be_finished?(consultation)
    return false if consultation.finished_at
    return :out_of_time if consultation.expires_at > Time.now
    return :doctor_offline if not_recently_online?(consultation.doctor)
    return :patient_offline if not_recently_online?(consultation.patient)
  end

  def not_recently_online?(identity)
    !status_service.was_recently_online?(identity.user, window: 2.minutes)
  end
end

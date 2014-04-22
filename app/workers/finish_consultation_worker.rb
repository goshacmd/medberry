# Updates the status of the consultation. Consultation is considered to be
# finished if it wasn't manually finished but:
#
# 1. it has already expired and already past extension window (1 min)
# 2. either doctor or patient was offline for more than 2 mins
class FinishConsultationWorker
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
    Consultation.created_before(Time.now).in_status(:in_progress, :over)
  end

  def process(consultation)
    if over?(consultation)
      consultation.transition_to :over
    elsif cause = finishing_cause(consultation)
      ConsultationFinisher.new(consultation, :system, cause).perform
    end
  end

  def over?(consultation)
    consultation.in_progress? && Time.now > consultation.expires_at
  end

  def finishing_cause(consultation)
    return false if consultation.finished_at || consultation.expires_at == nil
    return :out_of_time if Time.now > (consultation.expires_at + ConsultationExtender::EXTENSION_WINDOW)
    return :doctor_offline if not_recently_online?(consultation.doctor)
    return :patient_offline if not_recently_online?(consultation.patient)
  end

  def not_recently_online?(identity)
    !status_service.was_recently_online?(identity.user, window: 2.minutes)
  end
end

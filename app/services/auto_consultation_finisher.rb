# Finish all consultations that are expired.
class AutoConsultationFinisher
  def selector
    Consultation.where('finished_at IS NULL and expiry <= :now', now: Time.now)
  end

  def perform
    selector.each do |consultation|
      ConsultationStatusUpdater.new(consultation).perform
    end
  end
end

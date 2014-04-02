# Updates the status of the consultation. Consultation is considered to be
# finished if it wasn't manually finished, but if it's expired.
class ConsultationStatsuUpdater
  attr_reader :consultation

  # @param consultation [Consultation]
  def initialize(consultation)
    @consultation = consultation
  end

  def perform
    return if consultation.finished_at || consultation.expiry < Time.now

    consultation.update(status: :finished, finished_at: Time.now, finished_by_role: :system)
  end
end

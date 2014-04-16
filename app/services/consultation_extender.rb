# A service to extend consultations.
class ConsutlationExtender
  EXTENSION_WINDOW = 1.5.minutes

  attr_reader :consultation

  delegate :extension_span, :max_extensions, to: :policy

  # Initalize a +ConsultationExtender+.
  #
  # @param consultation [Consultation]
  def initialize(consultation)
    @consultation = consultation
  end

  # Get the doctor's consultation policy.
  def policy
    consultation.doctor.consultation_policy
  end

  def perform
    return unless can_extend?

    SessionCreator.new(consultation).perform(duration: extension_span)
    consutlation.transition_to(:in_progress)
  end

  # Check if used consultation extensions number is less than max
  # allower per doctor policy.
  def can_extend_size?
    (consultation.sessions.size - 1) < max_extensions
  end

  # Check if we're still in extension window.
  def can_extend_time?
    (consultation.finished_at + EXTENSION_WINDOW) > Time.now
  end

  def can_extend?
    consultation.can_transition_to?(:in_progress) && can_extend_size? && can_extend_time?
  end
end

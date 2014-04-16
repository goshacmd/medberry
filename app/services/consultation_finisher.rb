class ConsultationFinisher
  attr_reader :consultation, :actor, :cause

  # Initialize a +ConsultationFinisher+.
  #
  # @param consultation [Consultation]
  # @param actor [User, Symbol] user object or +:system+
  # @param cause [Symbol]
  def initialize(consultation, actor, cause)
    @consultation = consultation
    @actor = actor
    @cause = cause
  end

  def role
    actor === User ? consultation.role_of(actor) : actor
  end

  def perform
    return unless can_finish?

    consultation.transition_to(:finished)
    consultation.update finished_at: Time.now, finished_by: role,
      finishing_cause: cause
  end

  def can_finish?
    consultation.can_transition_to?(:finished)
  end
end

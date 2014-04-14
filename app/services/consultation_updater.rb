class ConsultationUpdater
  attr_reader :consultation, :status, :extension, :current_user

  # @param consultation [Consultation]
  # @param params [Hash]
  # @param current_user [User]
  def initialize(consultation, params, current_user)
    @consultation = consultation
    @status = params[:status]
    @extension = params[:extension]
    @current_user = current_user
  end

  # Change the status of a consultation.
  def perform
    if can_finish?
      finish
    elsif can_extend?
      add_session
    end
  end

  def can_finish?
    status == 'finished' && consultation.can_transition_to?(:finished) &&
      consultation.role_of(current_user)
  end

  def finish
    role = consultation.role_of(current_user)

    consultation.transition_to :finished
    consultation.update finished_at: Time.now, finished_by: role,
      finishing_cause: :manual
  end

  # Consultation can only be extended one time within 1 minute of finishing.
  def can_extend?
    extension && consultation.can_transition_to?(:in_progress) &&
      (consultation.sessions.size == 1 && (consultation.finished_at + 1.minute) > Time.now)
  end

  def add_session
    ConsultationDispatcher.new(nil).create_session_for(consultation, duration: 10.minutes)
    consultation.transition_to :in_progress
  end
end

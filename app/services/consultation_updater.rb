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
    if consultation.new_consultation? && status == 'finished' && role = consultation.role_of(current_user)
      finish(role)
    elsif consultation.finished? && extension && can_extend?
      add_session
    end
  end

  def finish(role)
    consultation.update status: :finished, finished_at: Time.now,
      finished_by: role, finishing_cause: :manual
  end

  # Consultation can only be extended one time within 1 minute of finishing.
  def can_extend?
    consultation.sessions.size == 1 && (consultation.finished_at + 1.minute) > Time.now
  end

  def add_session
    ConsultationDispatcher.new(nil).create_session_for(consultation, duration: 10.minutes)
    consultation.update status: :new
  end
end

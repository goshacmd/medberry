class ConsultationUpdater
  attr_reader :consultation, :status, :current_user

  # @param consultation [Consultation]
  # @param new_status [String]
  # @param current_user [User]
  def initialize(consultation, new_status, current_user)
    @consultation = consultation
    @status = new_status
    @current_user = current_user
  end

  # Change the status of a consultation.
  def perform
    if consultation.new_consultation? && status == 'finished' &&
      role = consultation.role_of(current_user)

      consultation.update(status: status, finished_at: Time.now, finished_by: role)
    end
  end
end

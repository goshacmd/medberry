class ConsultationRequestUpdater
  attr_reader :request, :status, :current_user

  # @param request [ConsultationRequest]
  # @param new_status [String]
  # @param current_user [User]
  def initialize(request, new_status, current_user)
    @request = request
    @status = new_status
    @current_user = current_user
  end

  # Change the status of a request.
  def perform
    if can_update? && request.new_request? && status == 'accepted'
      ConsultationDispatcher.new(request).perform
    end
  end

  def can_update?
    last_request = request.doctor.consultations.order(created_at: :desc).first
    last_request ? last_request.finished? : true
  end
end

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
    if request.new_request? && status == 'accepted'
      ConsultationDispatcher.new(request).perform
    end
  end
end

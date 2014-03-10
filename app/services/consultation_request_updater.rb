class ConsultationRequestUpdater
  attr_reader :request, :status, :current_user

  def initialize(request, new_status, current_user)
    @request = request
    @status = new_status
    @current_user = current_user
  end

  def perform
    if request.new_request? && ConsultationRequest::STATUSES[status]
      request.update(status: status)

      ConsultationDispatcher.new(request).perform if request.accepted?
    end
  end
end

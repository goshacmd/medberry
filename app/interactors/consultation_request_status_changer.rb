class ConsultationRequestStatusChanger
  attr_reader :request

  def initialize(request)
    @request = request
  end

  def cancel(cause)
    request.update(status: :canceled, cancelation_cause: cause, canceled_at: Time.now)

    Services.analytics.track_canceled_request request
  end

  def accept
    request.update(status: :accepted)
  end
end

class ConsultationRequestUpdater
  include UseCase

  model ConsultationRequest

  def request
    model
  end

  def status
    attrs[:status]
  end

  # Change the status of a request.
  def perform
    if can_update? && request.new_request? && status == 'accepted'
      ConsultationDispatcher.new(request).perform
    end
  end

  def can_update?
    return false unless can?(:update)

    last_request = request.doctor.consultations.order(created_at: :desc).first
    last_request ? last_request.finished? : true
  end
end

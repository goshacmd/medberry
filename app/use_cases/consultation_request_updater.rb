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
    not_authorized unless can_update?

    ConsultationDispatcher.new(request).perform
  end

  def can_update?
    return false unless can?(:update)
    return false unless request.new_request?
    return false unless status == 'accepted'

    last_request = request.doctor.consultations.order(created_at: :desc).first
    last_request ? last_request.finished? : true
  end
end

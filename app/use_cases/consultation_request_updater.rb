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

    BusinessService.no_active_consultation?(request.doctor)
  end
end

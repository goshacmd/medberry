class ConsultationRequestCreator
  include UseCase

  model ConsultationRequest

  def attrs
    params.require(:consultation_request).permit(:doctor_id, :cause_category_id)
  end

  # Create a consultation request, checking the online status of the doctor.
  def perform
    not_authorized unless can_create?

    @model = consultation_request = ConsultationRequest.new attrs
    consultation_request.patient = current_user.identity
    online = OnlineStatusService.new.online?(consultation_request.doctor.user)

    if online && consultation_request.save
      AnalyticsService.new.track_new_request consultation_request

      consultation_request
    else
      validation_error
    end
  end

  def can_create?
    BusinessService.nothing_active?(current_user.identity)
  end
end

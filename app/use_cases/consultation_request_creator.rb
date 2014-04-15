class ConsultationRequestCreator
  include UseCase

  model ConsultationRequest

  def attrs
    params.require(:consultation_request).permit(:doctor_id, :cause)
  end

  # Create a consultation request, checking the online status of the doctor.
  def perform
    not_authorized unless can_create?

    @model = consultation_request = ConsultationRequest.new attrs
    consultation_request.patient = current_user.identity
    online = OnlineStatusService.new.online?(consultation_request.doctor.user)

    if online && consultation_request.save
      consultation_request
    else
      validation_error
    end
  end

  def can_create?
    has_no_active_consultation?(current_user.identity) &&
      has_no_active_request?(current_user.identity)
  end

  def has_no_active_consultation?(patient)
    last_consultation = patient.consultations.order(created_at: :desc).first
    last_consultation ? last_consultation.finished? : true
  end

  def has_no_active_request?(patient)
    last_request = patient.consultation_requests.order(created_at: :desc).first
    last_request ? !last_request.new_request? : true
  end
end

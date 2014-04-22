class ConsultationRequestCreator
  include UseCase

  model ConsultationRequest

  def attrs
    params.require(:consultation_request).permit(:doctor_id, :cause_category_id)
  end

  def doctor_id
    attrs[:doctor_id]
  end

  def patient
    current_user.identity
  end

  def available_doctors
    patient.available_doctors
  end

  def available_doctors_include_doctor?
    available_doctors.where(doctor_id: doctor_id).count > 0
  end

  # Create a consultation request, checking the online status of the doctor.
  def perform
    not_authorized unless can_create?

    @model = consultation_request = ConsultationRequest.new attrs
    consultation_request.patient = patient
    online = OnlineStatusService.new.online?(consultation_request.doctor.user)

    if online && consultation_request.save
      AnalyticsService.new.track_new_request consultation_request

      consultation_request
    else
      validation_error
    end
  end

  def can_create?
    return false unless BusinessService.nothing_active?(current_user.identity)

    available_doctors_include_doctor?
  end
end

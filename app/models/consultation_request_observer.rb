class ConsultationRequestObserver < ApplicationObserver
  def after_save(request)
    push request.patient_channel, request, scope: request.patient.user
    push request.doctor_channel, request, scope: request.doctor.user

    push request.patient_channel, request.patient.me, scope: request.patient.user
    push request.doctor_channel, request.doctor.me, scope: request.doctor.user
  end
end

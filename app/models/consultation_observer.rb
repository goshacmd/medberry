class ConsultationObserver < ApplicationObserver
  def after_create(consultation)
    Pusher.trigger consultation.channels, 'consultation_started',
      consultation: consultation.id
  end

  def after_save(consultation)
    push consultation.patient_channel, consultation, scope: consultation.patient.user
    push consultation.doctor_channel, consultation, scope: consultation.doctor.user
  end
end

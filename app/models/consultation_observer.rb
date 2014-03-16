class ConsultationObserver < ActiveRecord::Observer
  def after_create(consultation)
    Pusher.trigger consultation.channels, "requests:#{consultation.request.id}",
      consultation: consultation.id
  end

  def after_save(consultation)
    Pusher.trigger consultation.patient_channel, 'consultations',
      ConsultationSerializer.new(consultation, scope: consultation.patient.user).as_json

    Pusher.trigger consultation.doctor_channel, 'consultations',
      ConsultationSerializer.new(consultation, scope: consultation.doctor.user).as_json
  end
end

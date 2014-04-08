class ConsultationObserver < ActiveRecord::Observer
  def after_create(consultation)
    Pusher.trigger consultation.channels, 'consultation_started',
      consultation: consultation.id
  end

  def after_save(consultation)
    update_pusher = UpdatePusher.new

    update_pusher.push consultation.patient_channel, consultation, scope: consultation.patient.user
    update_pusher.push consultation.doctor_channel, consultation, scope: consultation.doctor.user
  end
end

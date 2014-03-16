class ConsultationRequestObserver < ActiveRecord::Observer
  def after_save(request)
    Pusher.trigger request.patient_channel, 'requests',
      ConsultationRequestSerializer.new(request, scope: request.patient.user).as_json

    Pusher.trigger request.doctor_channel, 'requests',
      ConsultationRequestSerializer.new(request, scope: request.doctor.user).as_json
  end
end

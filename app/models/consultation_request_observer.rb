class ConsultationRequestObserver < ActiveRecord::Observer
  def after_save(request)
    update_pusher = UpdatePusher.new

    update_pusher.push request.patient_channel, request, scope: request.patient.user
    update_pusher.push request.doctor_channel, request, scope: request.doctor.user
  end
end

class AnalyticsService
  attr_reader :mixpanel

  def initialize(mixpanel: $mixpanel)
    @mixpanel = mixpanel
  end

  def track_new_request(request)
    track 'New Consultation Request', {
    }.merge(doctor_data(request.doctor)).merge(patient_data(request.patient))
  end

  def track_canceled_request(request)
    track 'Canceled Consultation Request', {
      canceled_because: request.cancelation_cause
    }.merge(doctor_data(request.doctor)).merge(patient_data(request.patient))
  end

  def track_finished_consultation(consultation)
    track 'Finished Consutlation', consultation_params(consultation)
  end

  def track_diagnosed_consultation(consultation)
    track 'Diagnosed Consultation', {
      diagnosis: consultation.diagnosis_category_id
    }.merge(consultation_params(consultation))
  end

  def track(name, data)
    mixpanel.track name, data
  end

  def consultation_params(consultation)
    {
      finished_because: consultation.finishing_cause,
      finished_by: consultation.finished_by,
      duration_minutes: (consultation.duration / 60).to_i,
      messages: consultation.messages.size,
      extended_times: consultation.sessions.size - 1
    }.merge(doctor_data(consultation.doctor)).merge(patient_data(consultation.patient))
  end

  def patient_data(patient)
    age = ((Date.today - patient.dob) / 365).to_i

    { patient_age: age, patient_gender: patient.gender }
  end

  def doctor_data(doctor)
    { doctor_practice: doctor.practice }
  end
end

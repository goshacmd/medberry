class Admin::DashboardController < AdminController
  def index
    @patient_count = Patient.count
    @doctor_count = Doctor.count
    @consultation_count = Consultation.count
    @request_count = ConsultationRequest.count
  end
end

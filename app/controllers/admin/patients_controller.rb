class Admin::PatientsController < AdminController
  def index
    @patients = Patient.all
  end
end

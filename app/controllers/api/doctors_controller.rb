class Api::DoctorsController < ApiController
  before_action :ensure_patient

  def index
    @doctors = Doctor.all

    render json: @doctors
  end

  def update
    use_case DoctorUpdater
  end
end

class Api::DoctorsController < ApiController
  before_action :ensure_patient

  def index
    @doctors = current_user.identity.available_doctors

    render json: @doctors
  end

  def update
    use_case DoctorUpdater
  end
end

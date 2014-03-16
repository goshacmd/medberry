class Api::DoctorsController < ApiController
  before_action :ensure_patient

  def index
    @doctors = Doctor.all

    render json: @doctors
  end
end

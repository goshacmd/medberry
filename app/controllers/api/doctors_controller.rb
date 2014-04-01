class Api::DoctorsController < ApiController
  before_action :ensure_patient

  def index
    @doctors = Doctor.all

    render json: @doctors
  end

  def update
    @doctor = Doctor.find(params[:id])

    if params[:doctor][:favorite]
      current_user.identity.fav_doctors << @doctor
    else
      current_user.identity.fav_doctors.delete @doctor
    end

    render json: @doctor
  end
end

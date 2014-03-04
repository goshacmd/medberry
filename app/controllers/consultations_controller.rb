class ConsultationsController < ApiController
  before_action :check_sign_in

  def show
    @consultation = Consultation.find(params[:id])

    if [@consultation.doctor, @consultation.patient].map(&:user).include? current_user
      render json: @consultation
    else
      not_authorized
    end
  end
end

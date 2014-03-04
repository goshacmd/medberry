class ConsultationsController < ApiController
  before_action :check_sign_in

  def show
    @consultation = Consultation.find(params[:id])

    authorize! :read, @consultation

    render json: @consultation
  end
end

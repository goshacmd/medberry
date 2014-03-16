class ConsultationsController < ApiController
  def show
    @consultation = Consultation.find(params[:id])

    authorize! :read, @consultation

    render json: @consultation
  end

  def update
    @consultation = Consultation.find(params[:id])

    authorize! :update, @consultation

    ConsultationUpdater.new(@consultation, params[:consultation][:status], current_user).perform

    render json: @consultation
  end
end

class Api::MessagesController < ApiController
  def create
    @message = MessageCreator.new(message_params, current_user).create

    render json: @message
  rescue MessageCreator::NotAuthorized
    return not_authorized
  rescue MessageCreator::ValidationError => e
    render json: { errors: e.data.errors }, status: :unprocessable_entity
  end

  private

  def message_params
    params.require(:message).permit(:consultation_id, :text)
  end
end

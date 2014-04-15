class MessageCreator
  include UseCase

  model Message

  def attrs
    params.require(:message).permit(:text, :consultation_id)
  end

  def perform
    @model = message = Message.new attrs
    message.sender = current_user

    not_authorized unless can_create?(message)

    if message.save
      message
    else
      validation_error
    end
  end

  def can_create?(message)
    return false unless can?(:create, message)

    message.consultation.parties.include?(current_user.identity)
  end
end

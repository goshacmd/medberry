class MessageCreator
  class ValidationError < ErrorWithData; end
  class NotAuthorized < RuntimeError; end

  attr_reader :params, :current_user

  # @param params [Hash]
  # @param current_user [User]
  def initialize(params, current_user)
    @params = params
    @current_user = current_user
  end

  def create
    message = Message.new params
    message.sender = current_user

    raise NotAuthorized unless can_create?(message)

    if message.save
      message
    else
      raise ValidationError.new(nil, message)
    end
  end

  def can_create?(message)
    message.consultation.parties.include?(current_user.identity)
  end
end

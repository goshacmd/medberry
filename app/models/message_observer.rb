class MessageObserver < ApplicationObserver
  def after_create(message)
    channels = message.consultation.channels
    push channels, message
  end
end

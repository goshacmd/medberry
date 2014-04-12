class MessageObserver < ActiveRecord::Observer
  def after_create(message)
    channels = message.consultation.channels
    UpdatePusher.new.push channels, message
  end
end

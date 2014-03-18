class ChannelAuthenticator
  attr_reader :name, :socket_id, :current_user

  # @param name [String]
  # @param socket_id [String]
  # @param current_user [User]
  def initialize(name, socket_id, current_user)
    @name = name
    @socket_id = socket_id
    @current_user = current_user
  end

  def can_authenticate?
    current_user && (current_user.pusher_channel_name == name || (current_user.patient? && name == 'online_pulser'))
  end

  def authenticate
    Pusher[name].authenticate(socket_id) if can_authenticate?
  end
end

class ChannelAuthenticator
  attr_reader :name, :socket_id, :current_user, :pusher

  # @param name [String]
  # @param socket_id [String]
  # @param current_user [User]
  # @param pusher [Pusher]
  def initialize(name, socket_id, current_user, pusher: Pusher)
    @name = name
    @socket_id = socket_id
    @current_user = current_user
    @pusher = pusher
  end

  def should_authenticate?
    case name
    when 'private-patient-online-pulser' then current_user.patient?
    when 'private-doctor-online-pulser' then current_user.doctor?
    else
      current_user.try(:pusher_channel_name) == name
    end
  end

  def authenticate
    pusher[name].authenticate(socket_id) if should_authenticate?
  end
end

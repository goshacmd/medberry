class UserStatusChecker
  attr_reader :user

  # @param doctor [User]
  def initialize(user)
    @user = user
  end

  # Check the online status of user.
  #
  # @return [:online, :offline]
  def check
    # user is online if they have a pusher connection tp their private channel
    channel = Pusher[user.pusher_channel_name]
    channel.info[:occupied] ? :online : :offline
  end
end

class OnlineStatusService
  attr_reader :redis, :pusher

  # Initialize a status service.
  #
  # @param redis [Redis] redis connection
  # @param pusher [Pusher] pusher connection
  def initialize(redis: $redis, pusher: Pusher)
    @redis = redis
    @pusher = pusher
  end

  # Check if the user is online.
  #
  # @param user [User]
  def online?(user)
    # user is online if they have a pusher connection to their private channel
    pusher[user.pusher_channel_name].info[:occupied]
  end

  # Check the status of the user.
  #
  # @param user [User]
  # @return [:online, :offline]
  def status(user)
    online?(user) ? :online : :offline
  end

  # Record current timestamp as the last time seen online for user.
  #
  # @param user [User]
  def mark(user)
    redis.set last_seen_key_for(user), Time.now.to_i if online?(user)
  end

  # Get the timestamp of the user's last appearance.
  #
  # @param user [User]
  # @return [Time, nil]
  def last_seen(user)
    last = redis.get(last_seen_key_for(user))
    Time.at(last.to_i) if last
  end

  # Check if the user was online within some window.
  #
  # @param user [User]
  # @param window [Integer] number of seconds
  def was_recently_online?(user, window:)
    last = last_seen(user)
    (last + window) >= Time.now if last
  end

  # Get a redis key to store last seen timestamp.
  def last_seen_key_for(user)
    "last_seen:#{user.id_string}"
  end
end

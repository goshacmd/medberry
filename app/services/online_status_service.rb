class OnlineStatusService
  def key_for(user)
    "last_seen:#{user.id_string}"
  end

  # Record current timestamp as the last time seen online for user.
  #
  # @param user [User]
  def mark(user)
    if UserStatusChecker.new(user).check == :online
      $redis.set key_for(user), Time.now.to_i
    end
  end

  # Get the timestamp of the user's last appearance.
  #
  # @param user [User]
  # @return [Time]
  def query(user)
    last = $redis.get(key_for(user))
    Time.at(last.to_i) if last
  end

  # Check if the user was online within some window.
  #
  # @param user [User]
  # @param window [Integer] number of seconds
  def was_recently_online?(user, window:)
    if last = query(user)
      last + window >= Time.now
    end
  end
end

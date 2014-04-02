class OnlineStatusService
  def key_for(user)
    "last_seen:#{user.id_string}"
  end

  def mark(user)
    if UserStatusChecker.new(user).check == :online
      $redis.set key_for(user), Time.now.to_i
    end
  end

  def query(user)
    last = $redis.get(key_for(user))
    Time.at(last.to_i) if last
  end
end

module Identity
  def full_name
    [first_name, last_name].join(' ')
  end

  def me
    Me.new(identity: self)
  end

  def patient?
    Patient === self
  end

  def doctor?
    Doctor === self
  end
end

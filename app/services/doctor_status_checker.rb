class DoctorStatusChecker
  attr_reader :doctor

  def initialize(doctor)
    @doctor = doctor
  end

  # Check the status of doctor.
  #
  # @return [:online, :offline]
  def check
    channel = Pusher[doctor.user.pusher_channel_name]
    channel.info[:occupied] ? :online : :offline
  end
end

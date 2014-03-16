class DoctorStatusChecker
  attr_reader :doctor

  # @param doctor [Doctor]
  def initialize(doctor)
    @doctor = doctor
  end

  # Check the online status of doctor.
  #
  # @return [:online, :offline]
  def check
    # doctor is online if they have a pusher connection tp their private channel
    channel = Pusher[doctor.user.pusher_channel_name]
    channel.info[:occupied] ? :online : :offline
  end
end

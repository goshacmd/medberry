class DoctorConsultationPolicy < Struct.new(:initial_span, :max_extensions, :extension_span)
  POLICIES = {
    family: [20.minutes, 1, 10.minutes],
    pharmacist: [20.minutes, 1, 10.minutes]
  }

  def self.for_practice(type)
    new(*POLICIES[type])
  end
end

class DoctorConsultationPolicy < Struct.new(:initial_span, :max_extensions, :extension_span)
  POLICIES = {
    family: [20, 1, 10],
    pharmacist: [20, 1, 10]
  }

  def self.for_practice(type)
    new(*POLICIES[type])
  end
end

class ConsultationRequest < ActiveRecord::Base
  STATUSES = { new: 0, accepted: 1, canceled: 2 }

  belongs_to :patient
  belongs_to :doctor

  def status
    STATUSES.invert[read_attribute(:status)]
  end

  def status=(value)
    write_attribute(:status, STATUSES[value])
  end
end

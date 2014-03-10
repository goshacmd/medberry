class ConsultationRequest < ActiveRecord::Base
  include PusherChannels

  STATUSES = HashWithIndifferentAccess.new new: 0, accepted: 1, declined: 2

  belongs_to :patient
  belongs_to :doctor
  has_one :consultation, inverse_of: :request, foreign_key: :request_id

  def status
    STATUSES.invert[read_attribute(:status)].try(:to_sym)
  end

  def status=(value)
    write_attribute(:status, STATUSES[value])
  end

  def new_request?
    status == :new
  end

  def accepted?
    status == :accepted
  end
end

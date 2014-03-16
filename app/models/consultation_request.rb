class ConsultationRequest < ActiveRecord::Base
  include PusherChannels
  include Enum

  STATUSES = HashWithIndifferentAccess.new new: 0, accepted: 1, declined: 2

  belongs_to :patient
  belongs_to :doctor
  has_one :consultation, inverse_of: :request, foreign_key: :request_id

  validates :patient, presence: true
  validates :doctor, presence: true

  enum :status, STATUSES

  def new_request?
    status == :new
  end

  def accepted?
    status == :accepted
  end
end

class ConsultationRequest < ActiveRecord::Base
  include PusherChannels
  include Enum

  STATUSES = { new: 0, accepted: 1, declined: 2, canceled: 3 }
  CANCELATION_CAUSES = { doctor_offline: 1, patient_offline: 2 }

  belongs_to :patient
  belongs_to :doctor
  has_one :consultation, inverse_of: :request, foreign_key: :request_id

  validates :patient, presence: true
  validates :doctor, presence: true

  enum :status, STATUSES
  enum :cancelation_cause, CANCELATION_CAUSES

  scope :unfilled, -> { where(status: STATUSES[:new]) }

  def new_request?
    status == :new
  end

  def accepted?
    status == :accepted
  end

  def parties
    [doctor, patient]
  end
end

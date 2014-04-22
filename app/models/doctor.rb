class Doctor < ActiveRecord::Base
  include Identity
  include Enum

  PRACTICES = { family: 0, pharmacist: 1 }

  has_one :user, as: :identity
  has_many :consultation_requests
  has_many :consultations
  has_many :doctor_patient_connections

  enum :practice, PRACTICES

  validates :first_name, presence: true
  validates :last_name, presence: true

  def consultation_policy
    DoctorConsultationPolicy.for_practice(practice)
  end
end

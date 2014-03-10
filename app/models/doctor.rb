class Doctor < ActiveRecord::Base
  has_one :user, as: :identity
  has_many :consultation_requests

  validates :first_name, presence: true
  validates :last_name, presence: true
end

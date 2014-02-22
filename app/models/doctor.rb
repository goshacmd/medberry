class Doctor < ActiveRecord::Base
  has_one :user, as: :identity

  validates :first_name, presence: true
  validates :last_name, presence: true
end

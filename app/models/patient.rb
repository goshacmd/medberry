class Patient < ActiveRecord::Base
  has_one :user, as: :identity

  validates :bsn, presence: true, length: { is: 9 }, format: { with: /\A[0-9]+\z/ }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :dob, presence: true
  validates :gender, presence: true, inclusion: { in: %w(male female) }
  validates :zip, presence: true
  validates :address, presence: true
  validates :city, presence: true
end

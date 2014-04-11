class Patient < ActiveRecord::Base
  has_one :user, as: :identity
  belongs_to :insurance_policy, autosave: true
  has_many :consultations
  has_many :consultation_requests
  has_many :favorite_doctors
  has_many :fav_doctors, through: :favorite_doctors, source: :doctor

  validates :bsn, presence: true, length: { is: 9 }, format: { with: /\A[0-9]+\z/ }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :dob, presence: true
  validates :gender, presence: true, inclusion: { in: %w(male female) }
  validates :zip, presence: true
  validates :address, presence: true
  validates :city, presence: true

  accepts_nested_attributes_for :insurance_policy

  after_initialize :try_build_insurance_policy

  def try_build_insurance_policy
    build_insurance_policy unless insurance_policy
  end
end

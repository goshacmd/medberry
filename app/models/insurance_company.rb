class InsuranceCompany < ActiveRecord::Base
  has_many :insurance_policies

  validates :name, presence: true
end

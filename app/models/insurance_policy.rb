class InsurancePolicy < ActiveRecord::Base
  belongs_to :insurance_company

  validates :insurance_company, presence: true
  validates :number, presence: true
end

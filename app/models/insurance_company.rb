class InsuranceCompany < ActiveRecord::Base
  has_many :insurance_policies
end

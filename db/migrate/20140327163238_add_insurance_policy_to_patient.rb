class AddInsurancePolicyToPatient < ActiveRecord::Migration
  def change
    add_column :patients, :insurance_policy_id, :uuid
  end
end

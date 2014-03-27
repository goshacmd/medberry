class CreateInsurancePolicies < ActiveRecord::Migration
  def change
    create_table :insurance_policies, id: :uuid do |t|
      t.uuid :insurance_company_id
      t.index :insurance_company_id
      t.string :number
    end
  end
end

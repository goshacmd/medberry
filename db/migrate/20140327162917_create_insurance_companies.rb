class CreateInsuranceCompanies < ActiveRecord::Migration
  def change
    create_table :insurance_companies, id: :uuid do |t|
      t.string :name
    end
  end
end

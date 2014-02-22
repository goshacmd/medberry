class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors, id: :uuid do |t|
      t.string :first_name
      t.string :last_name
    end
  end
end

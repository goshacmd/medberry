class AddPersonalInfoToUser < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :bsn
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.date :dob
      t.string :zip
      t.string :address
      t.string :city
    end
  end
end

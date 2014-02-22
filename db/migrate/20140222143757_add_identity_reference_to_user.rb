class AddIdentityReferenceToUser < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.uuid :identity_id
      t.string :identity_type
    end
  end
end

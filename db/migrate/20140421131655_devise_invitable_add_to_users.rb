class DeviseInvitableAddToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string   :invitation_token
      t.datetime :invitation_created_at
      t.datetime :invitation_sent_at
      t.datetime :invitation_accepted_at
      t.integer  :invitation_limit
      t.uuid     :invited_by_id
      t.string   :invited_by_type
      t.integer  :invitations_count, default: 0
      t.index    :invitations_count
      t.index    :invitation_token, unique: true
      t.index    :invited_by_id
    end

    # And allow null encrypted_password and password_salt:
    change_column_null :users, :encrypted_password, true
  end
end

class RenameExpiryToExpiresAt < ActiveRecord::Migration
  def change
    rename_column :consultations, :expiry, :expires_at
  end
end

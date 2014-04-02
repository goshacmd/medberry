class ChangeDataTypeForFinishedBy < ActiveRecord::Migration
  def change
    change_table :consultations do |t|
      t.remove :finished_by_role
      t.integer :finished_by
    end
  end
end

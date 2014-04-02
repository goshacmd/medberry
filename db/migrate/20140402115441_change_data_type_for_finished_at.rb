class ChangeDataTypeForFinishedAt < ActiveRecord::Migration
  def change
    change_column :consultations, :finished_at, :datetime
  end
end

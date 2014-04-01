class AddPracticeToDoctor < ActiveRecord::Migration
  def change
    add_column :doctors, :practice, :integer, default: 0
  end
end

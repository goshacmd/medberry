class AddCauseCategoryToConsultation < ActiveRecord::Migration
  def change
    add_column :consultations, :cause_category_id, :string
    add_column :consultation_requests, :cause_category_id, :string
    remove_column :consultations, :cause
    remove_column :consultation_requests, :cause
  end
end

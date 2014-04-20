class AddDiagnosisAndAdviceToConsultation < ActiveRecord::Migration
  def change
    add_column :consultations, :diagnosis_category_id, :string
    add_column :consultations, :advice, :text
  end
end

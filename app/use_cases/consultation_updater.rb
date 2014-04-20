class ConsultationUpdater
  include UseCase

  model Consultation

  def consultation
    model
  end

  def status
    attrs[:status]
  end

  def extension
    attrs[:extension]
  end

  def mode
    attrs[:mode]
  end

  def diagnosis
    attrs[:diagnosis_category_id]
  end

  def advice
    attrs[:advice]
  end

  # Change the status of a consultation.
  def perform
    not_authorized unless can?(:update)

    if status == 'finished' && !consultation.finished?
      ConsultationFinisher.new(consultation, current_user, :manual).perform
    elsif extension
      ConsultationExtender.new(consultation).perform
    else
      consultation.update(mode: mode)

      if current_user.doctor?
        consultation.update(diagnosis_category_id: diagnosis, advice: advice)
      end
    end
  end
end

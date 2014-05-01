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
      consultation.mode = mode

      if current_user.doctor?
        consultation.diagnosis_category_id = diagnosis
        consultation.advice = advice
      end

      report = consultation.diagnosis_category_id_changed?

      consultation.save

      Services.analytics.track_diagnosed_consultation(consultation) if report
    end
  end
end

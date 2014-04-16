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

  # Change the status of a consultation.
  def perform
    not_authorized unless can?(:update)

    if status == 'finished'
      ConsultationFinisher.new(consultation, current_user, :manual).perform
    elsif extension
      ConsultationExtender.new(consultation).perform
    else
      consultation.update(mode: mode)
    end
  end
end

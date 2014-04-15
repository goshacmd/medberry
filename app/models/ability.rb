class Ability
  include CanCan::Ability

  def initialize(user)
    can [:read, :update], Consultation do |consultation|
      consultation.doctor.user == user || consultation.patient.user == user
    end

    can [:read, :update], ConsultationRequest do |request|
      request.doctor.user == user || request.patient.user == user
    end

    can :create, Message do |message|
      can?(:read, message.consultation) && message.consultation.in_progress?
    end
  end
end

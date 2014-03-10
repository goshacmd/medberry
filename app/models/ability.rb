class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, Consultation do |consultation|
      consultation.doctor.user == user || consultation.patient.user == user
    end

    can [:read, :update], ConsultationRequest do |request|
      request.doctor.user == user || request.patient.user == user
    end
  end
end

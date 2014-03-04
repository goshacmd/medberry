class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, Consultation do |consultation|
      consultation.doctor.user == user || consultation.patient.user == user
    end

    can :read, ConsultationRequest, patient_id: user.identity.id
  end
end

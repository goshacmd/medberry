# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :message do
    consultation_id ""
    sender_id ""
    text "MyText"
  end
end

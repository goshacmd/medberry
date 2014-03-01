# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :consultation_request do
    patient nil
    doctor nil
    cause "MyString"
  end
end

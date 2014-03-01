# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :consultation do
    patient nil
    doctor nil
    request nil
    cause "MyString"
    tokbox_session "MyString"
    tokbox_token_patient "MyString"
    tokbox_token_doctor "MyString"
  end
end

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :patient do
    bsn "MyString"
    gender "MyString"
    dob "2014-02-22"
    zip "MyString"
    address "MyString"
    city "MyString"
  end
end

# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140403123707) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "consultation_requests", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "patient_id"
    t.uuid     "doctor_id"
    t.string   "cause"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "status",     default: 0
  end

  add_index "consultation_requests", ["doctor_id"], name: "index_consultation_requests_on_doctor_id", using: :btree
  add_index "consultation_requests", ["patient_id"], name: "index_consultation_requests_on_patient_id", using: :btree

  create_table "consultations", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "patient_id"
    t.uuid     "doctor_id"
    t.uuid     "request_id"
    t.string   "cause"
    t.string   "tokbox_session"
    t.text     "tokbox_token_patient"
    t.text     "tokbox_token_doctor"
    t.datetime "expires_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "status",               default: 0
    t.datetime "finished_at"
    t.integer  "finished_by"
  end

  add_index "consultations", ["doctor_id"], name: "index_consultations_on_doctor_id", using: :btree
  add_index "consultations", ["patient_id"], name: "index_consultations_on_patient_id", using: :btree
  add_index "consultations", ["request_id"], name: "index_consultations_on_request_id", using: :btree

  create_table "doctors", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string  "first_name"
    t.string  "last_name"
    t.integer "practice",   default: 0
  end

  create_table "favorite_doctors", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid     "patient_id"
    t.uuid     "doctor_id"
    t.datetime "created_at"
  end

  add_index "favorite_doctors", ["doctor_id"], name: "index_favorite_doctors_on_doctor_id", using: :btree
  add_index "favorite_doctors", ["patient_id"], name: "index_favorite_doctors_on_patient_id", using: :btree

  create_table "insurance_companies", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string "name"
  end

  create_table "insurance_policies", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.uuid   "insurance_company_id"
    t.string "number"
  end

  add_index "insurance_policies", ["insurance_company_id"], name: "index_insurance_policies_on_insurance_company_id", using: :btree

  create_table "patients", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string "bsn"
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.date   "dob"
    t.string "zip"
    t.string "address"
    t.string "city"
    t.uuid   "insurance_policy_id"
  end

  create_table "users", id: :uuid, default: "uuid_generate_v4()", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.uuid     "identity_id"
    t.string   "identity_type"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end

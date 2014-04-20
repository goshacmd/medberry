class DiagnosisCategory
  GP_CATEGORIES = {
    general: {
      symptoms: %w(fever weakness allergy other),
      diseases: %w(drug_reaction other)
    },

    blood: {
      symptoms: %w(lymph other),
      diseases: %w(lymphadenitis anemia other)
    },

    digestive: {
      symptoms: %w(cramps stomach other_pain diarrhea constipation other),
      diseases: %w(infect_diarrhea stomach_disorder IBS other)
    },

    eye: {
      symptoms: %w(),
      diseases: %w(infection cataract other)
    },

    ear: {
      symptoms: %w(earache hearing other),
      diseases: %w(otitis_externa otitis_media cerumen vertigo deafness other)
    },

    cardio: {
      symptoms: %w(),
      diseases: %w(angina infraction chronic failure arrhythmia inc_pressure CVA peripheral varices hemorrhoids other)
    },

    muscul: {
      symptoms: %w(neck back low_back_wo_r chest shoulder knee foot other),
      diseases: %w(sprain low_back_w_r arthritis osteoarthritis PHS osteoporosis other)
    },

    nervous: {
      symptoms: %w(headache tension_headache dizziness other),
      diseases: %w(m_sclerosis epilepsy migraine other)
    },

    psycho: {
      symptoms: %w(nervous_feeling feeling_depressed insomnia hyperkinetic other),
      diseases: %w(dementia anxiety depression surmenage other)
    },

    respiratory: {
      symptoms: %w(cough other),
      diseases: %w(upper_resp_inf sinusitis abses bronchiolitis influenza pneumonia COPD asthma hay_fever other)
    },

    skin: {
      symptoms: %w(warts tear_wound other),
      diseases: %w(dermatomycosis nevus impetigo atopic_eczema other_eczema psoriasis other)
    },

    nutrition: {
      symptoms: %w(),
      diseases: %w(myxedema diabetes metabolism),
    },

    urinary: {
      symptoms: %w(micturition incontinence other),
      diseases: %w(tract_infection other)
    },

    pregnancy: {
      symptoms: %w(contraception other),
      diseases: %w()
    },

    gen_female: {
      symptoms: %w(menstruation climacteric breasts other),
      diseases: %w(candidiasis vaginitis other)
    },

    gen_male: {
      symptoms: %w(prostate other),
      diseases: %w(hypertrophy other)
    },

    social: {
      workspace: %w(),
      relationship: %w(),
      loss: %w(),
      other: %w()
    }
  }

  def self.for_practice(practice)
    if practice == :family
      CATS[:GP]
    else
      []
    end
  end

  def self.make_categories(description, prefix:)
    deep_map = -> path, obj {
      sub = obj ? obj.map { |(k, v)| deep_map.([path, k].join('.'), v) } : []
      [path].concat sub
    }

    deep_map.(prefix, description).flatten
  end

  CATS = {
    GP: make_categories(GP_CATEGORIES, prefix: :gp)
  }
end

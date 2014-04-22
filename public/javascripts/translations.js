I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","already_confirmed":"was already confirmed, please try signing in","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","expired":"has expired, please request a new one","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"}}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"devise":{"confirmations":{"confirmed":"Your account was successfully confirmed.","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid email or password.","locked":"Your account is locked.","last_attempt":"You have one more attempt before your account will be locked.","not_found_in_database":"Invalid email or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"},"invitation_instructions":{"subject":"Invitation instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions about how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.","updated":"You updated your account successfully."},"sessions":{"signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."},"invitations":{"send_instructions":"An invitation email has been sent to %{email}.","invitation_token_invalid":"The invitation token provided is not valid!","updated":"Your password was set successfully. You are now signed in.","no_invitations_remaining":"No invitations remaining","invitation_removed":"Your invitation was removed.","new":{"header":"Send invitation","submit_button":"Send an invitation"},"edit":{"header":"Set your password","submit_button":"Set my password"}}},"hello":"Hello world","js":{"camera":{"denied_header":"Access to camera denied","denied_body":"It looks like you have denied medberry access to your camera. If you denied access to camera accidentaly, try reloading the page.","needs_access_header":"Please, allow medberry to access your camera","needs_access_body":"In order to be able to have a video chat on medberry, you need to allow medberry to access your camera. A pop-up like this should have just apperared. Click 'Allow'."},"nav":{"queue":"Queue","dashboard":"Dashboard","history":"History","doctors":"Talk to a doctor","invite_button":"Invite a patient"},"patient_dashboard":{"wait_header":"Please wait for your consultation with Dr. {{name}} to begin","cause_p":"The stated cause for the consultation was: {{cause}}","queue_first":"You are first in the queue. Dr. {{name}} will get to you as soon as they finish their current consultation","queue_other":"There are \u003Cb\u003E{{people}}\u003C/b\u003E people in the queue before you. The estimated waiting time is \u003Cb\u003E{{waiting}}\u003C/b\u003E minutes.","updating_estimates":"Updating waiting estimates...","canceled_header":"Consultation with Dr. {{name}} canceled","canceled_p":"You have requested a consultation with Dr. {{name}} on {{time}} to talk about '{{cause}}'.","canceled_doctor_offline":"However, the doctor has gone offline, so your request was canceled.","canceled_patient_offline":"However, you went offline, and your request was canceled.","favorite_doctors":"Favorite doctors"},"history":{"header":"History","sel_all":"All","sel_con":"consulted","sel_can":"canceled","date":"Date","doctor":"Doctor","patient":"Patient","status":"Status","cause":"Reason","duration":"Duration","consulted":"Consulted","canceled":"Request canceled","archive_button":"View archive","nothing":"Nothing to show."},"consultation":{"remaining":"remaining time:","top_p":"Live consultation with","end_button":"End","video_button":"Video","over_header":"The consultation is over","dob":"Date of birth","city":"City of residence","duration":"Duration","practice":"Practice","cause":"Consultation reason","diagnosis":"Diagnosis","advice":"Advice","save_advice_button":"Save advice","extend_button":"Extend consultation","queue_button":"Go to queue","next_button":"Proceed to the next patient","dashboard_button":"Go to dashboard","history_button":"Go to history"},"doctor_card":{"call":"Call now"},"doctors":{"header":"Doctors","sel_all":"All","sel_gp":"family doctors","sel_ph":"pharmacists","check_online":"only show available doctors","nothing":"There are no doctors matching the specified criteria."},"messages":{"sending":"Sending...","nothing":"No messages.","send_button":"Send"},"new_request":{"header":"Request a consultation","provider_label":"Provider","cause_label":"Cause","place_button":"Place a request","place_button_progress":"Placing a request...","error_p":"You already have an active request or are in the middle of a consultation."},"new_connection":{"header":"Invite a patient","email_label":"Patient's email","invite_button":"Invite","invite_button_progress":"Inviting...","success_p":"Invite successfully sent.","error_p":"The user you are inviting is a doctor."},"queue":{"header":"Queue","next_button":"Talk to next patient ({{name}})","nothing":"The queue is empty."},"diagnosis_categories":{"gp":{"general":"General and unspecified","general_list":{"symptoms":"Symptoms and complaints","symptoms_list":{"fever":"Fever","weakness":"Fatigue, weakness","allergy":"Allergy / allergic reaction","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"drug_reaction":"Adverse drug reaction","other":"Other diseases"}},"blood":"Blood and blood forming organs","blood_list":{"symptoms":"Symptoms and complaints","symptoms_list":{"lymph":"Enlarged lymph node","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"lymphadenitis":"Acute lymphadenitis","anemia":"Anemia","other":"Other diseases"}},"digestive":"Digestive organs","digestive_list":{"symptoms":"Symptoms and complaints","symptoms_list":{"cramps":"Generalized abdominal pain / cramps","stomach":"Stomach ache","other_pain":"Other localized abdominal pain","diarrhea":"Diarrhea","constipation":"Constipation","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"infect_diarrhea":"Infectious diarrhea and suspected gastrointestinal infection.","stomach_disorder":"Disorders of the esophagus and stomach","IBS":"Spastic colon / IBS","other":"Other diseases"}},"eye":"Eye","eye_list":{"symptoms":"Symptoms","diseases":"Diseases","diseases_list":{"infection":"Infection / inflammation of eye / adnexa","cataract":"Cataract","other":"Other diseases"}},"ear":"Ear","ear_list":{"symptoms":"Symptoms","symptoms_list":{"earache":"Earache","hearing":"Hearing compltaints","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"otitis_externa":"Otitis externa","otitis_media":"Otitis media","cerumen":"Excessive cerumen","vertigo":"Vertigo Syndrome / labyrinthitis","deafness":"Deafness","other":"Other diseases"}},"cardio":"Cardiovascular system","cardio_list":{"symptoms":"Symptoms","diseases":"Diseases","diseases_list":{"angina":"Angina pectoris","infraction":"Acute myocardial infarction","chronic":"Other / chronic ischemic heart disease","failure":"Congestive heart failure","arrhythmia":"Cardiac arrhythmias","inc_pressure":"Increased blood pressure","CVA":"Cerebrovascular accident (CVA)","peripheral":"Diseases of the peripheral arteries","varices":"Varices legs","hemorrhoids":"Hemorrhoids","other":"Other diseases"}},"muscul":"Musculoskeletal","muscul_list":{"symptoms":"Symptoms","symptoms_list":{"neck":"Symptoms or neck complaints","back":"Symptoms or back complaints","low_back_wo_r":"Low back pain without radiation","chest":"Symptoms or chest complaints","shoulder":"Symptoms or shoulder complaints","knee":"Symptoms or knee compltaints","foot":"Symptoms or foot/toe compltaints","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"sprain":"Sprain, distortion","low_back_w_r":"Low back pain with radiation","arthritis":"Rheumatoid arthritis","osteoarthritis":"Osteoarthritis","PHS":"Shoulder Syndrome / PHS","osteoporosis":"Osteoporosis","other":"Other diseases"}},"nervous":"Nervous system","nervous_list":{"symptoms":"Symptoms","symptoms_list":{"headache":"Headache","tension_headache":"Tension headaches","dizziness":"Dizziness","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"m_sclerosis":"Multiple sclerosis","epilepsy":"Epilepsy","migraine":"Migraine","other":"Other diseases"}},"psycho":"Psychological issues","psycho_list":{"symptoms":"Symptoms","symptoms_list":{"nervous_feeling":"Anxious, nervous, tense feeling","feeling_depressed":"Down / feeling depressed","insomnia":"Insomnia, other sleep disorder","hyperkinetic":"Hyperactive child / hyperkinetic syndrome","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"dementia":"Dementia / Alzheimers","anxiety":"Anxiety disorder / anxiety state and other neuroses","depression":"Depression","surmenage":"Neurasthenia / surmenage","other":"Other diseases"}},"respiratory":"Respiratory","respiratory_list":{"symptoms":"Symptoms","symptoms_list":{"cough":"Cough","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"upper_resp_inf":"Acute upper respiratory infection","sinusitis":"Acute / chronic sinusitis","abses":"Acute tonsillitis / peritonsillar abses","bronchiolitis":"Acute bronchitis / bronchiolitis","influenza":"Influenza","pneumonia":"Pneumonia","COPD":"Chronic bronchitis, emphysema, COPD","asthma":"Asthma","hay_fever":"Hay fever / allergic rhinitis","other":"Other diseases"}},"skin":"Skin and subcutaneous tissue","skin_list":{"symptoms":"Symptoms","symptoms_list":{"warts":"Warts","tear_wound":"Tear wound, cut","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"dermatomycosis":"Dermatomycosis","nevus":"Nevus / mole","impetigo":"Impetigo / Impertignisation","atopic_eczema":"Atopic eczema","other_eczema":"Contact dermatitis / other eczema","psoriasis":"Psoriasis","other":"Other diseases"}},"nutrition":"Endocrine / metabolic / nutritional","nutrition_list":{"symptoms":"Symptoms","diseases":"Diseases","diseases_list":{"myxedema":"Hypothyroidism / myxedema","diabetes":"Diabetes mellitus","metabolism":"Lipid metabolism disorder","other":"Other diseases"}},"urinary":"Urinary","urinary_list":{"symptoms":"Symptoms","symptoms_list":{"micturition":"Micturition problems","incontinence":"Urinary incontience","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"tract_infection":"Cystitis / urinary tract infection","other":"Other diseases"}},"pregnancy":"Pregnancy, childbirth, childbirth and contraception","pregnancy_list":{"symptoms":"Symptoms","symptoms_list":{"contraception":"Contraception","other":"Other signs and symptoms"},"diseases":"Diseases"},"gen_female":"Reproductive system and breast woman","gen_female_list":{"symptoms":"Symptoms","symptoms_list":{"menstruation":"Menstruation compltaints","climacteric":"Climacteric symptoms / compltaints","breasts":"Nodule / swelling breasts wife","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"candidiasis":"Urogenital candidiasis","vaginitis":"Vaginitis / vulvitis nao","other":"Other diseases"}},"gen_male":"Reproductive system and breast men","gen_male_list":{"symptoms":"Symptoms","symptoms_list":{"prostate":"Prostatic problems","other":"Other signs and symptoms"},"diseases":"Diseases","diseases_list":{"hypertrophy":"Benign prostatic hypertrophy","other":"Other diseases"}},"social":"Social problems","social_list":{"workspace":"Problems with workspace","relationship":"Relationship problems with partner","loss":"Loss or illness of partner","other":"Other social problems"}}}},"simple_form":{"yes":"Yes","no":"No","required":{"text":"required","mark":"*"},"error_notification":{"default_message":"Please review the problems below:"}}},"nl":{"js":{"camera":{"denied_header":"Toegang tot de camera is geweigerd","denied_body":"Het lijkt erop dat je medberry geen toegang hebt gegeven tot je camera. Mocht dit per ongeluk zijn gegeaan, probeer de pagina te herladen.","needs_access_helper":"Toegang tot uw camera","needs_access_body":"Om een video consult te houden hebben wij toegang nodig tot uw camera. Een pop-up zoals hieronder moet zijn verscheven, klik op 'Toestaan'."},"nav":{"queue":"Wachtrij","dashboard":"Dashboard","history":"Geschiedenis","doctors":"Praat met een arts","invite_button":"Patient uitnodigen"},"patient_dashboard":{"wait_header":"Nog even geduld, het consult met {{name}} gaat zo beginnen","cause_p":"De reden voor het consult is: {{cause}}","queue_first":"U bent de eerst wachtende voor een gesprek met {{name}}. Nog even geduld alstublieft.","queue_other":"Er zijn nog \u003Cb\u003E{{people}}\u003C/b\u003E wachtenden voor u. De verwachte wachttijd is \u003Cb\u003E{{waiting}}\u003C/b\u003E minuten.","updating_estimates":"Verversen van de verwachte wachttijd...","canceled_header":"Het consult met {{name}} is geannuleerd.","canceled_p":"U heeft een consult aangevraagd met {{name}} op {{time}} met als reden '{{cause}}'.","canceled_doctor_offline":"Helaas is de arts op dit moment offline, uw aanvraag is geannuleerd.","canceled_patient_offline":"Helaas bent u offline gegaan, uw aanvraag is geannuleerd.","favorite_doctors":"Favoriete artsen"},"history":{"header":"Geschiedenis","sel_all":"Alles","sel_con":"geraadpleegd","sel_can":"geannuleerd","date":"Datum","doctor":"Arts","patient":"Patient","status":"Status","cause":"Reden","duration":"Duur","consulted":"Geraadpleegd","canceled":"Aanvraag geannuleerd","archive_button":"Bekijk archief","nothing":"Niets te zien."},"consultation":{"remaining":"resterende tijd:","top_p":"Live consult met","end_button":"Beëindig","video_button":"Video","over_header":"Het consult is voorbij","dob":"Geboortedatum","city":"Woonplaats","duration":"Duur","practice":"Praktijk","cause":"Reden van consult","diagnosis":"Diagnose","advice":"Advies","save_advice_button":"Advies opslaan","extend_button":"Consult verlengen","queue_button":"Wachtrij","next_button":"Volgende patient","dashboard_button":"Dashboard","history_button":"Geschiedenis"},"doctor_card":{"call":"Spreek nu"},"doctors":{"header":"Artsen","sel_all":"Alles","sel_gp":"Huisartsen","sel_ph":"Apothekers","check_online":"Toon alleen beschikbare artsen","nothing":"Er zijn geen artsen die voldoen aan de door u gestelde criteria."},"messages":{"sending":"Versturen...","nothing":"Geen berichten.","send_button":"Verstuur"},"new_request":{"header":"Verzoek een consult","provider_label":"Zorgverlener","cause_label":"Reden","place_button":"Plaats een verzoek","place_button_progress":"Verzoek plaatsen...","error_p":"U heeft al een actief verzoek of bent op dit moment in consult."},"new_connection":{"header":"Patient uitnodigen","email_label":"E-mail patient","invite_button":"Uitnodigen","invite_button_progress":"Uitnodigen wordt verzonden...","success_p":"De uitnodigen is verzonden.","error_p":"The user you are inviting is a doctor."},"queue":{"header":"Wachtrij","next_button":"Praat met de eerstvolgende patient ({{name}})","nothing":"Er zijn geen wachtenden in de wachtrij."},"diagnosis_categories":{"gp":{"general":"Algemeen en niet gespecificeerd","general_list":{"symptoms":"Symptomen en klachten","symptoms_list":{"fever":"Koorts","weakness":"Moeheid, zwakte","allergy":"Allergie / allergische reactie","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"drug_reaction":"Geneesmiddelbijwerking","other":"Overige ziekten"}},"blood":"Bloed en bloedvormende organen","blood_list":{"symptoms":"Symptomen en klachten","symptoms_list":{"lymph":"Vergrote lymfeklier","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"lymphadenitis":"Acute lymphadenitis","anemia":"Anemie","other":"Overige ziekten"}},"digestive":"Spijsverteringsorganen","digestive_list":{"symptoms":"Symptomen en klachten","symptoms_list":{"cramps":"Gegeneraliseerde buikpijn/ buikkrampen","stomach":"Maagpijn","other_pain":"Andere gelokaliseerde buikpijn","diarrhea":"Diarree","constipation":"Obstipatie","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"infect_diarrhea":"Infectieuze diarree en veronderstelde gastro-intestinale infectie","stomach_disorder":"Aandoeningen van slokdarm en maag","IBS":"Spastisch Colon / IBS","other":"Overige ziekten"}},"eye":"Oog","eye_list":{"symptoms":"Symptomen","diseases":"Ziekten","diseases_list":{"infection":"Infectie/ ontsteking van oog / adnexen","cataract":"Staar","other":"Overige ziekten"}},"ear":"Oor","ear_list":{"symptoms":"Symptomen","symptoms_list":{"earache":"Oorpijn","hearing":"Gehoorklachten","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"otitis_externa":"Otitis externa","otitis_media":"Otitis media","cerumen":"Overmatig cerumen","vertigo":"Vertigosyndroom / labyrinthitis","deafness":"Doofheid","other":"Overige ziekten"}},"cardio":"Hartvaatstelsel","cardio_list":{"symptoms":"Symptomen","diseases":"Ziekten","diseases_list":{"angina":"Angina Pectoris","infraction":"Acuut myocardinfarct","chronic":"Andere/chronische ischemische hartziekte","failure":"Decompensatio cordis","arrhythmia":"Hartritmestoornissen","inc_pressure":"Verhoogde bloeddruk","CVA":"Cerebrovasculair accident (CVA)","peripheral":"Perifere ziekten van de slagaderen","varices":"Varices benen","hemorrhoids":"Hemorroïden","other":"Overige ziekten"}},"muscul":"Bewegingsapparaat","muscul_list":{"symptoms":"Symptomen","symptoms_list":{"neck":"Symptomen of klachten nek","back":"Symptomen of klachten rug","low_back_wo_r":"Lage rugpijn zonder uitstraling","chest":"Symptomen of klachten borstkas","shoulder":"Symptomen of klachten schouder","knee":"Symptomen of klachten knie","foot":"Symptomen of klachten voet of teen","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"sprain":"Verstuiking, distorsie","low_back_w_r":"Lage rugpijn met uitstraling","arthritis":"Reumatoïde artritis","osteoarthritis":"Artrose","PHS":"Schoudersyndroom / PHS","osteoporosis":"Osteoporose","other":"Overige ziekten"}},"nervous":"Zenuwstelsel","nervous_list":{"symptoms":"Symptomen","symptoms_list":{"headache":"Hoofdpijn","tension_headache":"Spanningshoofdpijn","dizziness":"Duizeligheid","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"m_sclerosis":"Multiple sclerose","epilepsy":"Epilepsie","migraine":"Migraine","other":"Overige ziekten"}},"psycho":"Psychische problemen","psycho_list":{"symptoms":"Symptomen","symptoms_list":{"nervous_feeling":"Angstig, nerveus, gespannen gevoel","feeling_depressed":"Down / depressief gevoel","insomnia":"Slapeloosheid, andere slaapstoornis","hyperkinetic":"Overactief kind / hyperkinetisch syndr.","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"dementia":"Dementie / alzheimer","anxiety":"Angststoornis / angsttoestand en overige neurosen","depression":"Depressie","surmenage":"Neurasthenie / surmenage","other":"Overige ziekten"}},"respiratory":"Luchtwegen","respiratory_list":{"symptoms":"Symptomen","symptoms_list":{"cough":"Hoesten","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"upper_resp_inf":"Acute infectie bovenste luchtwegen","sinusitis":"Acute / chronic sinusitis","abses":"Acute tonsillitis / peritonsillair abses","bronchiolitis":"Acute bronchitis / bronchiolitis","influenza":"Influenza","pneumonia":"Pneumonie","COPD":"Chronische bronchitis, emfyseem, COPD","asthma":"Astma","hay_fever":"Hooikoorts / allergische rhinitis","other":"Overige ziekten"}},"skin":"Huid en subcutis","skin_list":{"symptoms":"Symptomen","symptoms_list":{"warts":"Wratten","tear_wound":"Scheurwond, snijwond","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"dermatomycosis":"Dermatomycose","nevus":"Naevus / moedervlek","impetigo":"Impetigo / Impertignisatie","atopic_eczema":"Constitutioneel eczeem","other_eczema":"Contact eczeem / ander eczeem","psoriasis":"Psoriasis","other":"Overige ziekten"}},"nutrition":"Endocriene klieren / metabolisme / voeding","nutrition_list":{"symptoms":"Symptomen","diseases":"Ziekten","diseases_list":{"myxedema":"Hypothyreoïdie / myxoedeem","diabetes":"Diabetes mellitus","metabolism":"Vetstofwisselingsstoornis","other":"Overige ziekten"}},"urinary":"Urinewegen","urinary_list":{"symptoms":"Symptomen","symptoms_list":{"micturition":"Mictie-problemen","incontinence":"Urine-incontinentie","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"tract_infection":"Cystitis / urineweginfectie","other":"Overige ziekten"}},"pregnancy":"Zwangerschap, bevalling, kraambed en anticonceptie","pregnancy_list":{"symptoms":"Symptomen","symptoms_list":{"contraception":"Anticonceptie","other":"Overige symptomen en klachten"},"diseases":"Ziekten"},"gen_female":"Geslachtsorganen en borsten vrouw","gen_female_list":{"symptoms":"Symptomen","symptoms_list":{"menstruation":"Menstruatieklachten","climacteric":"Climacteriële symptomen / klachten","breasts":"Knobbel / zwelling borsten vrouw","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"candidiasis":"Urogenitale candidiasis","vaginitis":"Vaginitis / vulvitis nao","other":"Overige ziekten"}},"gen_male":"Geslachtsorganen en borsten mannen","gen_male_list":{"symptoms":"Symptomen","symptoms_list":{"prostate":"Prostaatklachten","other":"Overige symptomen en klachten"},"diseases":"Ziekten","diseases_list":{"hypertrophy":"Benigne prostaathypertrofie","other":"Overige ziekten"}},"social":"Sociale problemen","social_list":{"workspace":"Probleem met werksituatie","relationship":"Relatieproblemen met partner","loss":"Verlies / overlijden partner of probleem met ziekte partner","other":"Overige sociale problemen"}}}},"hello":"Hallo"}};
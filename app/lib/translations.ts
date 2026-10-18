export type Language = "mr" | "hi" | "en";

export interface TranslationDictionary {
  // Navigation
  nav_home: string;
  nav_products: string;
  nav_gallery: string;
  nav_about: string;
  nav_benefits: string;
  nav_faq: string;
  nav_contact: string;
  nav_enquire_now: string;

  // Hero Section
  hero_tag: string;
  hero_title_prefix: string;
  hero_title_highlight: string;
  hero_subtitle: string;
  hero_cta_whatsapp: string;
  hero_cta_explore: string;
  hero_badge_organic: string;
  hero_badge_direct: string;
  hero_badge_delivery: string;
  hero_location_badge: string;

  // Products Section
  products_title: string;
  products_subtitle: string;
  products_price_label: string;
  products_enquire_button: string;
  products_delivery_note: string;

  // Product 1: Live earthworms
  prod_worms_name: string;
  prod_worms_desc: string;
  prod_worms_features: string[];
  prod_worms_badge: string;

  // Product 2: Vermicompost
  prod_compost_name: string;
  prod_compost_desc: string;
  prod_compost_features: string[];
  prod_compost_badge: string;

  // Product 3: Starter culture
  prod_culture_name: string;
  prod_culture_desc: string;
  prod_culture_features: string[];
  prod_culture_badge: string;

  // Product 4: Bulk agricultural orders
  prod_bulk_name: string;
  prod_bulk_desc: string;
  prod_bulk_features: string[];
  prod_bulk_badge: string;

  // Gallery
  gallery_title: string;
  gallery_subtitle: string;
  gallery_note: string;
  gallery_hands_title: string;
  gallery_hands_desc: string;
  gallery_hands_tag: string;
  gallery_handling_title: string;
  gallery_handling_desc: string;
  gallery_handling_tag: string;
  gallery_beds_title: string;
  gallery_beds_desc: string;
  gallery_beds_tag: string;
  gallery_setup_title: string;
  gallery_setup_desc: string;
  gallery_setup_tag: string;

  // About Section
  about_title: string;
  about_subtitle: string;
  about_owner_title: string;
  about_owner_name: string;
  about_location_label: string;
  about_p1: string;
  about_p2: string;
  about_process_title: string;
  about_step1_title: string;
  about_step1_desc: string;
  about_step2_title: string;
  about_step2_desc: string;
  about_step3_title: string;
  about_step3_desc: string;
  about_step4_title: string;
  about_step4_desc: string;

  // Benefits Section
  benefits_title: string;
  benefits_subtitle: string;
  benefit1_title: string;
  benefit1_desc: string;
  benefit2_title: string;
  benefit2_desc: string;
  benefit3_title: string;
  benefit3_desc: string;
  benefit4_title: string;
  benefit4_desc: string;

  // FAQ Section
  faq_title: string;
  faq_subtitle: string;
  faq1_q: string;
  faq1_a: string;
  faq2_q: string;
  faq2_a: string;
  faq3_q: string;
  faq3_a: string;
  faq4_q: string;
  faq4_a: string;
  faq5_q: string;
  faq5_a: string;

  // Enquiry Form
  form_title: string;
  form_subtitle: string;
  form_name_label: string;
  form_name_placeholder: string;
  form_mobile_label: string;
  form_mobile_placeholder: string;
  form_product_label: string;
  form_product_placeholder: string;
  form_quantity_label: string;
  form_quantity_placeholder: string;
  form_location_label: string;
  form_location_placeholder: string;
  form_message_label: string;
  form_message_placeholder: string;
  form_submit_button: string;
  form_direct_whatsapp_note: string;
  form_validation_name: string;
  form_validation_mobile: string;
  form_validation_product: string;
  form_validation_quantity: string;
  form_validation_location: string;
  form_success_modal_title: string;
  form_success_modal_body: string;

  // Contact Section
  contact_title: string;
  contact_subtitle: string;
  contact_whatsapp_label: string;
  contact_email_label: string;
  contact_location_label: string;
  contact_instagram_label: string;
  contact_delivery_info: string;
  contact_action_whatsapp: string;
  contact_action_email: string;
  contact_action_instagram: string;

  // Footer & Floating
  footer_tagline: string;
  footer_quick_links: string;
  footer_contact_info: string;
  footer_legal: string;
  floating_whatsapp_label: string;
  lang_select_label: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  mr: {
    nav_home: "मुख्यपृष्ठ",
    nav_products: "उत्पादने",
    nav_gallery: "फार्म गॅलरी",
    nav_about: "आमच्याबद्दल",
    nav_benefits: "खताचे फायदे",
    nav_faq: "नेहमी विचारले जाणारे प्रश्न",
    nav_contact: "संपर्क",
    nav_enquire_now: "चौकशी करा",

    hero_tag: "१००% नैसर्गिक व सेंद्रिय शेती उत्पादन",
    hero_title_prefix: "जमिनीचे आरोग्य व सुपीकता वाढवणारे",
    hero_title_highlight: "अस्सल गांडूळ खत व जिवंत गांडूळ",
    hero_subtitle:
      "नवा दिशा बायो फर्टिलायझर्स, जत (सांगली). स्थानिक शेतकरी व बागायतदारांसाठी उत्तम दर्जाचे गांडूळ खत, स्टार्टर कल्चर व जिवंत गांडूळ थेट फार्मवरून उपलब्ध.",
    hero_cta_whatsapp: "व्हॉट्सॲपवर चौकशी करा",
    hero_cta_explore: "उत्पादने पहा",
    hero_badge_organic: "नैसर्गिक जैविक उत्पादन",
    hero_badge_direct: "थेट फार्ममधून पुरवठा",
    hero_badge_delivery: "स्थानिक व कुरिअर वितरण",
    hero_location_badge: "जत, जि. सांगली, महाराष्ट्र",

    products_title: "आमची प्रमुख उत्पादने",
    products_subtitle:
      "शेती, फळबागा, रोपवाटिका व परसबागेसाठी नैसर्गिक व उत्तम दर्जाची उत्पादने. किमतीसाठी थेट व्हॉट्सॲपवर संपर्क साधा.",
    products_price_label: "किमतीसाठी संपर्क करा",
    products_enquire_button: "व्हॉट्सॲपवर दर विचारा",
    products_delivery_note: "स्थानिक व कुरिअर वितरण (उपलब्धतेनुसार)",

    prod_worms_name: "जिवंत गांडूळ (Live Earthworms)",
    prod_worms_desc:
      "गांडूळ खत निर्मिती युनिट व बागेच्या मातीतील सेंद्रिय कर्ब सुधारण्यासाठी निरोगी व सक्रिय जिवंत गांडूळ.",
    prod_worms_features: [
      "सक्रिय व निरोगी गांडूळ संच",
      "खत निर्मितीसाठी योग्य प्रजाती",
      "योग्य पॅकिंगसह सुरक्षित वाहतूक"
    ],
    prod_worms_badge: "सक्रिय जैविक संच",

    prod_compost_name: "गांडूळ खत (Vermicompost / Gandul Khat)",
    prod_compost_desc:
      "शास्त्रीय पद्धतीने तयार केलेले, उत्तम कुजलेले, दुर्गंधीरहित व चहाच्या भुकटीसारखे बारीक चाळलेले अस्सल सेंद्रिय खत.",
    prod_compost_features: [
      "उच्च सेंद्रिय कर्ब व सूक्ष्मजीव घटक",
      "मातीची जलधारण क्षमता वाढवते",
      "रासायनिक खतांवरचा भार कमी करते"
    ],
    prod_compost_badge: "१००% शुद्ध खत",

    prod_culture_name: "गांडूळ स्टार्टर कल्चर (Earthworm Starter Culture)",
    prod_culture_desc:
      "नवीन गांडूळ खत प्रकल्प सुरू करणाऱ्या शेतकऱ्यांसाठी अंडी (कोकून्स), लहान-मोठे गांडूळ व पोषक घटकांचा परिपूर्ण स्टार्टर संच.",
    prod_culture_features: [
      "कोकून्स व जिवंत गांडूळांचे संतुलित प्रमाण",
      "नवीन प्रकल्प उभारणीसाठी आदर्श",
      "वाहतुकीदरम्यान सुरक्षित राहणारे पॅकिंग"
    ],
    prod_culture_badge: "प्रकल्प उभारणीसाठी",

    prod_bulk_name: "घाऊक शेती ऑर्डर्स (Bulk Agricultural Orders)",
    prod_bulk_desc:
      "द्राक्षबागा, डाळिंब, ऊस, केळी, भाजीपाला व मोठ्या शेती प्रकल्पांसाठी घाऊक प्रमाणात दर्जेदार गांडूळ खताचा पुरवठा.",
    prod_bulk_features: [
      "मोठ्या क्षेत्रासाठी थेट फार्मवरून लोडिंग",
      "घाऊक प्रमाणानुसार वाहतूक नियोजन",
      "नियमित व खात्रीशीर गुणवत्ता पुरवठा"
    ],
    prod_bulk_badge: "मोठ्या शेतीसाठी",

    gallery_title: "प्रत्यक्ष फार्म छायाचित्रे",
    gallery_subtitle:
      "जत येथील आमच्या फार्म युनिटमधील प्रत्यक्ष उत्पादन, शेडनेट रचना व खत हाताळणीची दृश्ये.",
    gallery_note: "मूळ फार्म छायाचित्रे लवकरच येथे थेट पाहता येतील.",
    gallery_hands_title: "हातात घेतलेले अस्सल गांडूळ खत",
    gallery_hands_desc: "काळा-तपकिरी रंग, भुसभुशीत पोत आणि चहाच्या भुकटीसारखी बारीक चाळलेली शुद्ध प्रत.",
    gallery_hands_tag: "खत गुणवत्ता नमुना",
    gallery_handling_title: "खत चाळणी व प्रतवारी प्रक्रिया",
    gallery_handling_desc: "उत्पादनानंतर खताची योग्य चाळणी करून अशुद्ध घटक वेगळे करण्याची पद्धत.",
    gallery_handling_tag: "प्रक्रिया युनिट",
    gallery_beds_title: "शास्त्रीय गांडूळ खत उत्पादन बेड",
    gallery_beds_desc: "योग्य लांबी-रुंदी व सावलीत तयार केलेले सिमेंट किंवा ताडपत्री उत्पादन बेड.",
    gallery_beds_tag: "उत्पादन बेड",
    gallery_setup_title: "शेडनेट अंतर्गत फार्म युनिट",
    gallery_setup_desc: "गांडुळांच्या संरक्षणासाठी व आर्द्रता टिकवण्यासाठी उभारलेली शेडनेट रचना.",
    gallery_setup_tag: "शेडनेट व्यवस्था",

    about_title: "आमच्याबद्दल व उत्पादन पद्धत",
    about_subtitle:
      "सेंद्रिय शेतीला बळकटी देण्यासाठी गुणवत्तेवर आधारित गांडूळ खत निर्मिती.",
    about_owner_title: "संचालक",
    about_owner_name: "भीमाशंकर बिरादार",
    about_location_label: "स्थान: जत, जि. सांगली, महाराष्ट्र",
    about_p1:
      "नवा दिशा बायो फर्टिलायझर्स हे जत (जि. सांगली) येथील शेतकरी भीमाशंकर बिरादार यांच्या पुढाकाराने चालवले जाणारे नैसर्गिक सेंद्रिय खत उत्पादन केंद्र आहे. जमिनीची ढासळत चाललेली सुपीकता पुनरुज्जीवित करणे आणि शेतकऱ्यांना अस्सल, भेसळमुक्त सेंद्रिय खत उपलब्ध करून देणे हे आमचे ध्येय आहे.",
    about_p2:
      "आमच्याकडे कोणत्याही रासायनिक घटकांचा वापर न करता, पूर्णपणे नैसर्गिक सेंद्रिय कचरा व शेणखताचा वापर करून गांडूळांच्या साहाय्याने उच्च दर्जाचे खत तयार केले जाते.",
    about_process_title: "आमची उत्पादन प्रक्रिया",
    about_step1_title: "१. कच्चा माल संकलन व प्राथमिक कुजवणी",
    about_step1_desc: "गोठ्यातील शेणखत व सेंद्रिय घटकांचे प्राथमिक विघटन करून गांडुळांसाठी पोषक वातावरण तयार करणे.",
    about_step2_title: "२. नियंत्रित बेड्सची उभारणी",
    about_step2_desc: "सावलीत योग्य तापमान व ६०-७०% आर्द्रता राखत शास्त्रीय पद्धतीने बेड्स तयार करणे.",
    about_step3_title: "३. गांडूळ प्रक्रिया कालावधी",
    about_step3_desc: "गांडुळांद्वारे सेंद्रिय घटकांचे संथ व नैसर्गिक पचन होऊन उच्च पोषक घटकांची निर्मिती.",
    about_step4_title: "४. संकलन, चाळणी व पॅकिंग",
    about_step4_desc: "वरचा थर काळजीपूर्वक संकलित करून चाळणी केली जाते आणि आर्द्रता टिकवून पॅक केले जाते.",

    benefits_title: "गांडूळ खताचे शास्त्रीय फायदे",
    benefits_subtitle:
      "कोणत्याही अतिशयोक्तीशिवाय, कृषी विज्ञानावर आधारित गांडूळ खताचे प्रत्यक्ष फायदे.",
    benefit1_title: "जमिनीची रचना व हवा खेळती राहणे",
    benefit1_desc:
      "गांडूळ खतामुळे जमिनीतील कणांची रचना सुधारते, जमीन भुसभुशीत होते आणि मुळांना पुरेशी हवा मिळते.",
    benefit2_title: "सेंद्रिय कर्ब व सूक्ष्मजीव वाढ",
    benefit2_desc:
      "जमिनीतील उपयुक्त जिवाणू व मित्र बुरशींची संख्या वाढण्यास मदत होते, ज्यामुळे जमिनीचे नैसर्गिक आरोग्य सुधारते.",
    benefit3_title: "पाणी धरून ठेवण्याची क्षमता",
    benefit3_desc:
      "मातीची ओलावा टिकवून ठेवण्याची शक्ती वाढते, ज्यामुळे कमी पाण्यात पिकांना ओलावा मिळण्यास साहाय्य होते.",
    benefit4_title: "अन्नद्रव्यांची सुलभ उपलब्धता",
    benefit4_desc:
      "नत्र, स्फुरद, पालाश व सूक्ष्म अन्नद्रव्ये वनस्पतींना सहज शोषून घेता येतील अशा सेंद्रिय रूपात उपलब्ध होतात.",

    faq_title: "वारंवार विचारले जाणारे प्रश्न (FAQ)",
    faq_subtitle: "खरेदी, किंमत, प्रमाण आणि वितरणाबद्दल सामान्य प्रश्न व उत्तरे.",
    faq1_q: "गांडूळ खत व गांडुळांचे दर काय आहेत?",
    faq1_a:
      "आम्ही दर ठरवण्यासाठी परिमाण (किलो/टन) आणि वाहतूक अंतराचा विचार करतो. अचूक व चालू दर जाणून घेण्यासाठी कृपया थेट व्हॉट्सॲपवर संपर्क साधा.",
    faq2_q: "किमान किती प्रमाणात ऑर्डर करता येते?",
    faq2_a:
      "स्थानिक गरजेनुसार लहान बागायतदारांसाठी किलो स्वरूपात तसेच मोठ्या शेतीसाठी ट्रॅक्टर/गाडी स्वरूपात घाऊक ऑर्डर्स स्वीकारल्या जातात.",
    faq3_q: "डिलिव्हरी कशी केली जाते?",
    faq3_a:
      "जत व सांगली परिसरासाठी स्थानिक वाहतूक तसेच दूरच्या भागांसाठी कुरिअर किंवा खाजगी ट्रान्सपोर्ट सुविधेने माल पाठवला जातो (पुष्टीकरणानुसार).",
    faq4_q: "नवीन गांडूळ खत युनिट सुरू करण्यासाठी कल्चर मिळते का?",
    faq4_a:
      "होय, नवीन प्रकल्प सुरू करण्यासाठी आम्ही आवश्यक ते स्टार्टर कल्चर (गांडूळ + कोकून्स) आणि प्राथमिक तांत्रिक मार्गदर्शन देतो.",
    faq5_q: "ऑर्डर देण्यासाठी काय करावे लागेल?",
    faq5_a:
      "खाली दिलेल्या फॉर्ममध्ये तुमची माहिती भरा किंवा थेट आमच्या व्हॉट्सॲप क्रमांकावर (+91 87676 53352) मेसेज पाठवून ऑर्डर नोंदवा.",

    form_title: "थेट व्हॉट्सॲप चौकशी फॉर्म",
    form_subtitle:
      "खालील माहिती भरा. सबमिट केल्यानंतर ही माहिती थेट व्हॉट्सॲपवर उघडेल, जिथून तुम्ही मेसेज पाठवू शकता.",
    form_name_label: "तुमचे नाव *",
    form_name_placeholder: "उदा. रमेश पाटील",
    form_mobile_label: "मोबाईल नंबर *",
    form_mobile_placeholder: "१० अंकी मोबाईल नंबर",
    form_product_label: "उत्पादन निवडा *",
    form_product_placeholder: "-- उत्पादन निवडा --",
    form_quantity_label: "अंदाजे प्रमाण / वजन *",
    form_quantity_placeholder: "उदा. ५० किलो / १ टन / ५ किलो गांडूळ",
    form_location_label: "डिलिव्हरी ठिकाण / गाव / तालुका *",
    form_location_placeholder: "उदा. जत, कवठेमहांकाळ, मिरज इ.",
    form_message_label: "काही प्रश्न किंवा विशेष सूचना (ऐच्छिक)",
    form_message_placeholder: "पिकाचा प्रकार, डिलिव्हरीची वेळ किंवा इतर प्रश्न लिहा...",
    form_submit_button: "व्हॉट्सॲपवर चौकशी पाठवा",
    form_direct_whatsapp_note:
      "सूचना: 'चौकशी पाठवा' बटणावर क्लिक केल्यावर तुमचा व्हॉट्सॲप मेसेंजर उघडेल. कृपया तेथील 'Send' बटण दाबून मेसेज पाठवा.",
    form_validation_name: "कृपया आपले नाव प्रविष्ट करा.",
    form_validation_mobile: "कृपया वैध १० अंकी मोबाईल नंबर प्रविष्ट करा.",
    form_validation_product: "कृपया उत्पादनाचा प्रकार निवडा.",
    form_validation_quantity: "कृपया अंदाजे प्रमाण नमूद करा.",
    form_validation_location: "कृपया डिलिव्हरी ठिकाण नमूद करा.",
    form_success_modal_title: "व्हॉट्सॲप उघडत आहे...",
    form_success_modal_body:
      "तुमचा मेसेज तयार झाला आहे. व्हॉट्सॲप विंडोमध्ये 'Send' वर क्लिक करून थेट नवा दिशा बायो फर्टिलायझर्सशी संपर्क साधा.",

    contact_title: "संपर्क माहिती",
    contact_subtitle: "उत्पादने, उपलब्धता आणि माहितीसाठी आमच्याशी थेट संवाद साधा.",
    contact_whatsapp_label: "व्हॉट्सॲप बिझनेस",
    contact_email_label: "ईमेल पत्ता",
    contact_location_label: "पत्ता व उत्पादन केंद्र",
    contact_instagram_label: "इन्स्टाग्राम प्रोफाइल",
    contact_delivery_info: "स्थानिक व कुरिअर वाहतूक उपलब्ध (ठिकाण व पुष्टीकरणानुसार)",
    contact_action_whatsapp: "व्हॉट्सॲपवर चॅट सुरू करा",
    contact_action_email: "ईमेल पाठवा",
    contact_action_instagram: "इन्स्टाग्रामवर भेट द्या",

    footer_tagline:
      "नवा दिशा बायो फर्टिलायझर्स - सेंद्रिय शेतीसाठी अस्सल गांडूळ खत व जिवंत गांडूळ. जत, सांगली.",
    footer_quick_links: "महत्त्वाचे दुवे",
    footer_contact_info: "संपर्क केंद्र",
    footer_legal: "सर्व हक्क राखीव © " + new Date().getFullYear() + " नवा दिशा बायो फर्टिलायझर्स.",
    floating_whatsapp_label: "व्हॉट्सॲपवर विचारा",
    lang_select_label: "भाषा निवडा"
  },
  hi: {
    nav_home: "होम",
    nav_products: "उत्पाद",
    nav_gallery: "फार्म गैलरी",
    nav_about: "हमारे बारे में",
    nav_benefits: "खाद के लाभ",
    nav_faq: "अक्सर पूछे जाने वाले सवाल",
    nav_contact: "संपर्क",
    nav_enquire_now: "पूछताछ करें",

    hero_tag: "१००% प्राकृतिक और जैविक कृषि उत्पाद",
    hero_title_prefix: "मिट्टी का स्वास्थ्य और उर्वरता बढ़ाने वाला",
    hero_title_highlight: "शुद्ध वर्मीकम्पोस्ट और जीवित केंचुआ",
    hero_subtitle:
      "नवा दिशा बायो फर्टिलाइजर्स, जत (सांगली)। किसानों और बागवानों के लिए उच्च गुणवत्ता वाला केंचुआ खाद, स्टार्टर कल्चर और जीवित केंचुए सीधे फार्म से उपलब्ध।",
    hero_cta_whatsapp: "व्हाट्सएप पर पूछताछ करें",
    hero_cta_explore: "उत्पाद देखें",
    hero_badge_organic: "प्राकृतिक जैविक उत्पाद",
    hero_badge_direct: "सीधे फार्म से आपूर्ति",
    hero_badge_delivery: "स्थानीय व कूरियर डिलीवरी",
    hero_location_badge: "जत, जिला सांगली, महाराष्ट्र",

    products_title: "हमारे प्रमुख उत्पाद",
    products_subtitle:
      "खेती, बागवानी और नर्सरी के लिए उत्तम जैविक उत्पाद। मूल्य और उपलब्धता के लिए सीधे व्हाट्सएप पर संपर्क करें।",
    products_price_label: "मूल्य के लिए संपर्क करें",
    products_enquire_button: "व्हाट्सएप पर रेट पूछें",
    products_delivery_note: "स्थानीय व कूरियर डिलीवरी (पुष्टि के अधीन)",

    prod_worms_name: "जीवित केंचुआ (Live Earthworms)",
    prod_worms_desc:
      "वर्मीकम्पोस्ट उत्पादन इकाई और मिट्टी के सुधार के लिए सक्रिय और स्वस्थ जीवित केंचुए।",
    prod_worms_features: [
      "सक्रिय और स्वस्थ केंचुआ समूह",
      "खाद निर्माण के लिए उपयुक्त प्रजाति",
      "सुरक्षित पैकिंग के साथ परिवहन"
    ],
    prod_worms_badge: "सक्रिय जैविक समूह",

    prod_compost_name: "वर्मीकम्पोस्ट (Gandul Khat / Vermicompost)",
    prod_compost_desc:
      "वैज्ञानिक तरीके से तैयार, बदबू रहित, चाय की पत्ती जैसा बारीक छना हुआ प्राकृतिक केंचुआ खाद।",
    prod_compost_features: [
      "उच्च जैविक कार्बन और सूक्ष्मजीव",
      "मिट्टी की नमी सोखने की क्षमता में सुधार",
      "रासायनिक उर्वरकों पर निर्भरता कम करता है"
    ],
    prod_compost_badge: "१००% शुद्ध खाद",

    prod_culture_name: "केंचुआ स्टार्टर कल्चर (Starter Culture)",
    prod_culture_desc:
      "नई खाद इकाई शुरू करने वाले किसानों के लिए कोकून (अंडे), छोटे-बड़े केंचुए और पोषक माध्यम का संपूर्ण स्टार्टर पैक।",
    prod_culture_features: [
      "कोकून और जीवित केंचुओं का संतुलित अनुपात",
      "नई यूनिट शुरू करने के लिए आदर्श",
      "परिवहन के दौरान सुरक्षित रहने वाली पैकेजिंग"
    ],
    prod_culture_badge: "प्रोजेक्ट यूनिट हेतु",

    prod_bulk_name: "थोक कृषि ऑर्डर्स (Bulk Agricultural Orders)",
    prod_bulk_desc:
      "अंगूर, अनार, गन्ना, केला और बड़े कृषि फार्मों के लिए थोक मात्रा में गुणवत्तापूर्ण खाद की आपूर्ति।",
    prod_bulk_features: [
      "बड़े क्षेत्रों के लिए सीधे फार्म से लोडिंग",
      "मात्रा आधारित परिवहन व्यवस्था",
      "लगातार और विश्वसनीय गुणवत्ता आपूर्ति"
    ],
    prod_bulk_badge: "बड़े फार्मों हेतु",

    gallery_title: "वास्तविक फार्म तस्वीरें",
    gallery_subtitle:
      "जत स्थित हमारी इकाई से वास्तविक उत्पादन, शेडनेट और खाद हैंडलिंग के दृश्य।",
    gallery_note: "मूल फार्म तस्वीरें शीघ्र ही यहां उपलब्ध होंगी।",
    gallery_hands_title: "हाथ में लिया गया शुद्ध वर्मीकम्पोस्ट",
    gallery_hands_desc: "गहरा भूरा-काला रंग, भुरभुरी बनावट और चाय की पत्ती जैसा बारीक छना हुआ नमूना।",
    gallery_hands_tag: "खाद गुणवत्ता नमूना",
    gallery_handling_title: "खाद छनाई और प्रसंस्करण",
    gallery_handling_desc: "उत्पादन के बाद खाद की उचित छनाई कर अवांछित तत्वों को अलग करने की प्रक्रिया।",
    gallery_handling_tag: "प्रसंस्करण इकाई",
    gallery_beds_title: "वैज्ञानिक वर्मीकम्पोस्ट उत्पादन बेड",
    gallery_beds_desc: "उचित आकार और छायादार वातावरण में निर्मित वैज्ञानिक बेड।",
    gallery_beds_tag: "उत्पादन बेड",
    gallery_setup_title: "शेडनेट फार्म सेटअप",
    gallery_setup_desc: "केंचुओं की सुरक्षा और उचित तापमान-नमी बनाए रखने के लिए शेडनेट ढांचा।",
    gallery_setup_tag: "शेडनेट संरचना",

    about_title: "हमारे बारे में और उत्पादन प्रक्रिया",
    about_subtitle: "जैविक खेती को सशक्त बनाने के लिए गुणवत्ता आधारित खाद निर्माण।",
    about_owner_title: "संचालक",
    about_owner_name: "भीमाशंकर बिरादार",
    about_location_label: "स्थान: जत, जिला सांगली, महाराष्ट्र",
    about_p1:
      "नवा दिशा बायो फर्टिलाइजर्स, जत (जिला सांगली) के किसान भीमाशंकर बिरादार द्वारा संचालित एक प्राकृतिक जैविक खाद उत्पादन केंद्र है। हमारा उद्देश्य मिट्टी की उर्वरता को पुनर्जीवित करना और किसानों को असली, मिलावट रहित खाद उपलब्ध कराना है।",
    about_p2:
      "हम बिना किसी रासायनिक मिलावट के, पूरी तरह प्राकृतिक गोबर और कृषि अवशेषों का उपयोग करके केंचुओं की सहायता से खाद तैयार करते हैं।",
    about_process_title: "हमारी उत्पादन विधि",
    about_step1_title: "१. कच्चा माल संग्रह और आंशिक अपघटन",
    about_step1_desc: "गोबर और जैविक कचरे का प्राथमिक अपघटन ताकि केंचुओं के लिए अनुकूल वातावरण बन सके।",
    about_step2_title: "२. नियंत्रित बेड्स का निर्माण",
    about_step2_desc: "छायादार वातावरण में उचित तापमान और नमी के साथ वैज्ञानिक बेड्स तैयार करना।",
    about_step3_title: "३. केंचुआ पाचन और रूपांतरण",
    about_step3_desc: "केंचुओं द्वारा जैविक पदार्थों का धीमा और प्राकृतिक पाचन, जिससे पोषक तत्व युक्त खाद बनती है।",
    about_step4_title: "४. संकलन, छनाई और पैकिंग",
    about_step4_desc: "खाद की ऊपरी परत को सावधानी से एकत्रित कर छनाई की जाती है और नमी बनाए रखते हुए पैक किया जाता है।",

    benefits_title: "वर्मीकम्पोस्ट के वैज्ञानिक लाभ",
    benefits_subtitle:
      "कृषि विज्ञान पर आधारित सटीक और प्रामाणिक लाभ, बिना किसी झूठे दावों के।",
    benefit1_title: "मिट्टी की संरचना और वायु संचार में सुधार",
    benefit1_desc:
      "केंचुआ खाद मिट्टी को भुरभुरा बनाता है, जिससे जड़ों तक हवा का संचार अच्छी तरह होता है।",
    benefit2_title: "जैविक कार्बन और लाभदायक सूक्ष्मजीव",
    benefit2_desc:
      "मिट्टी में लाभकारी जीवाणुओं की संख्या बढ़ाता है और प्राकृतिक रूप से मिट्टी को जीवित रखता है।",
    benefit3_title: "नमी धारण क्षमता में वृद्धि",
    benefit3_desc:
      "मिट्टी में पानी सोखने और रोके रखने की क्षमता बढ़ती है, जिससे कम पानी में भी फसलों को सहारा मिलता है।",
    benefit4_title: "पोषक तत्वों की सहज उपलब्धता",
    benefit4_desc:
      "नाइट्रोजन, फास्फोरस, पोटाश और सूक्ष्म पोषक तत्व पौधों को तुरंत ग्रहण करने योग्य रूप में मिलते हैं।",

    faq_title: "अक्सर पूछे जाने वाले सवाल (FAQ)",
    faq_subtitle: "मूल्य, मात्रा, डिलीवरी और ऑर्डर से संबंधित जानकारी।",
    faq1_q: "केंचुआ और वर्मीकम्पोस्ट के क्या दाम हैं?",
    faq1_a:
      "दाम मात्रा (किलो/टन) और दूरी पर निर्भर करते हैं। ताजा और सटीक मूल्य जानने के लिए कृपया सीधे व्हाट्सएप पर संदेश भेजें।",
    faq2_q: "न्यूनतम कितनी मात्रा में ऑर्डर कर सकते हैं?",
    faq2_a:
      "स्थानीय बागवानी के लिए छोटे बैग्स से लेकर बड़े कृषि फार्मों के लिए टन के हिसाब से थोक ऑर्डर स्वीकार किए जाते हैं।",
    faq3_q: "डिलीवरी कैसे की जाती है?",
    faq3_a:
      "जत और सांगली क्षेत्र के लिए स्थानीय वाहन और दूरस्थ स्थानों के लिए कूरियर अथवा प्राइवेट ट्रांसपोर्ट से आपूर्ति की जाती है (पुष्टि अनुसार)।",
    faq4_q: "क्या नई यूनिट शुरू करने के लिए कल्चर मिलता है?",
    faq4_a:
      "हाँ, नई खाद यूनिट स्थापित करने के लिए स्टार्टर कल्चर (केंचुआ + कोकून) और बुनियादी मार्गदर्शन उपलब्ध है।",
    faq5_q: "ऑर्डर कैसे करें?",
    faq5_a:
      "नीचे दिए गए फॉर्म को भरें या हमारे व्हाट्सएप नंबर (+91 87676 53352) पर सीधे संपर्क करें।",

    form_title: "सीधा व्हाट्सएप पूछताछ फॉर्म",
    form_subtitle:
      "नीचे दी गई जानकारी भरें। बटन दबाने पर यह जानकारी व्हाट्सएप में खुल जाएगी, जहां से आप संदेश भेज सकेंगे।",
    form_name_label: "आपका नाम *",
    form_name_placeholder: "उदा. रमेश पाटिल",
    form_mobile_label: "मोबाइल नंबर *",
    form_mobile_placeholder: "१० अंकों का मोबाइल नंबर",
    form_product_label: "उत्पाद चुनें *",
    form_product_placeholder: "-- उत्पाद चुनें --",
    form_quantity_label: "अनुमानित मात्रा *",
    form_quantity_placeholder: "उदा. ५० किलो / १ टन / ५ किलो केंचुआ",
    form_location_label: "डिलीवरी का स्थान / गाँव / शहर *",
    form_location_placeholder: "उदा. जत, सांगली, सोलापुर आदि",
    form_message_label: "कोई अतिरिक्त प्रश्न (वैकल्पिक)",
    form_message_placeholder: "फसल का प्रकार, डिलीवरी की तारीख या अन्य सवाल लिखें...",
    form_submit_button: "व्हाट्सएप पर पूछताछ भेजें",
    form_direct_whatsapp_note:
      "सूचना: बटन पर क्लिक करने के बाद आपका व्हाट्सएप खुलेगा। कृपया वहां 'Send' बटन दबाकर अपना संदेश भेजें।",
    form_validation_name: "कृपया अपना नाम दर्ज करें।",
    form_validation_mobile: "कृपया वैध १० अंकों का मोबाइल नंबर दर्ज करें।",
    form_validation_product: "कृपया उत्पाद का चयन करें।",
    form_validation_quantity: "कृपया आवश्यक मात्रा दर्ज करें।",
    form_validation_location: "कृपया डिलीवरी का स्थान दर्ज करें।",
    form_success_modal_title: "व्हाट्सएप खुल रहा है...",
    form_success_modal_body:
      "आपका संदेश तैयार है। व्हाट्सएप में 'Send' पर क्लिक करके सीधे नवा दिशा बायो फर्टिलाइजर्स से जुड़ें।",

    contact_title: "संपर्क सूत्र",
    contact_subtitle: "उत्पाद, उपलब्धता और जानकारी के लिए सीधे संपर्क करें।",
    contact_whatsapp_label: "व्हाट्सएप बिजनेस",
    contact_email_label: "ईमेल आईडी",
    contact_location_label: "पता एवं फार्म स्थान",
    contact_instagram_label: "इंस्टाग्राम प्रोफाइल",
    contact_delivery_info: "स्थानीय एवं कूरियर परिवहन उपलब्ध (स्थान एवं पुष्टि के आधार पर)",
    contact_action_whatsapp: "व्हाट्सएप पर चैट करें",
    contact_action_email: "ईमेल भेजें",
    contact_action_instagram: "इंस्टाग्राम पर देखें",

    footer_tagline:
      "नवा दिशा बायो फर्टिलाइजर्स - जैविक खेती के लिए शुद्ध वर्मीकम्पोस्ट और जीवित केंचुआ। जत, सांगली।",
    footer_quick_links: "त्वरित लिंक",
    footer_contact_info: "संपर्क केंद्र",
    footer_legal: "सर्वाधिकार सुरक्षित © " + new Date().getFullYear() + " नवा दिशा बायो फर्टिलाइजर्स.",
    floating_whatsapp_label: "व्हाट्सएप सहायता",
    lang_select_label: "भाषा चुनें"
  },
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_gallery: "Farm Gallery",
    nav_about: "About Us",
    nav_benefits: "Benefits",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_enquire_now: "Enquire Now",

    hero_tag: "100% Pure & Organic Agriculture",
    hero_title_prefix: "Enrich Soil Fertility Naturally With",
    hero_title_highlight: "Authentic Vermicompost & Live Earthworms",
    hero_subtitle:
      "Nava Disha Bio Fertilizers, Jath, Sangli. Farm-fresh, scientifically prepared vermicompost, active earthworm culture, and bulk agricultural supplies.",
    hero_cta_whatsapp: "Enquire on WhatsApp",
    hero_cta_explore: "View Products",
    hero_badge_organic: "Natural Bio-Organic",
    hero_badge_direct: "Direct From Farm",
    hero_badge_delivery: "Local & Courier Delivery",
    hero_location_badge: "Jath, Sangli, Maharashtra",

    products_title: "Our Agricultural Products",
    products_subtitle:
      "Tailored for farms, orchards, polyhouses, and nurseries. Contact us directly on WhatsApp for current availability and custom pricing.",
    products_price_label: "Contact for price",
    products_enquire_button: "Ask Price on WhatsApp",
    products_delivery_note: "Local and courier delivery, subject to confirmation",

    prod_worms_name: "Live Earthworms (Gandul)",
    prod_worms_desc:
      "Vigorous, actively feeding live earthworms suitable for farm vermicomposting beds and home composting setups.",
    prod_worms_features: [
      "Healthy, active earthworm stock",
      "Ideal species for compost degradation",
      "Secure, ventilated packaging for transport"
    ],
    prod_worms_badge: "Active Live Stock",

    prod_compost_name: "Vermicompost (Gandul Khat)",
    prod_compost_desc:
      "Fine-textured, odour-free organic vermicompost rich in organic matter and beneficial microflora. Sifted to tea-powder consistency.",
    prod_compost_features: [
      "High organic carbon and beneficial microbes",
      "Enhances soil moisture retention",
      "Reduces reliance on synthetic chemicals"
    ],
    prod_compost_badge: "100% Pure Organic",

    prod_culture_name: "Earthworm Starter Culture",
    prod_culture_desc:
      "Balanced starter pack containing cocoons, juveniles, adult earthworms, and conditioning feed for starting new vermicompost beds.",
    prod_culture_features: [
      "Balanced mix of cocoons and active worms",
      "Ideal for new farm vermicompost setups",
      "Moisture-controlled transit packaging"
    ],
    prod_culture_badge: "Unit Setup Kit",

    prod_bulk_name: "Bulk Agricultural Orders",
    prod_bulk_desc:
      "Commercial quantities for orchards (grape, pomegranate, banana, sugarcane), greenhouse crops, and commercial growers.",
    prod_bulk_features: [
      "Direct farm loading for tractor/truck loads",
      "Volume-based logistics coordination",
      "Consistent quality across deliveries"
    ],
    prod_bulk_badge: "Commercial Farms",

    gallery_title: "Real Farm Photo Gallery",
    gallery_subtitle:
      "Authentic glimpses into our production beds, shaded farm unit, compost screening, and handheld texture in Jath, Sangli.",
    gallery_note: "Real farm photos will be displayed directly here.",
    gallery_hands_title: "Compost Held in Hands",
    gallery_hands_desc: "Dark brown colour, loose crumb structure, and granular tea-powder-like texture.",
    gallery_hands_tag: "Sample Texture",
    gallery_handling_title: "Compost Handling & Screening",
    gallery_handling_desc: "Manual and mechanical screening to separate uncomposted particles and cocoons.",
    gallery_handling_tag: "Processing Unit",
    gallery_beds_title: "Vermicompost Production Beds",
    gallery_beds_desc: "Evenly laid organic compost beds designed for aeration and temperature moderation.",
    gallery_beds_tag: "Production Beds",
    gallery_setup_title: "Shaded Farm Setup",
    gallery_setup_desc: "Overhead shade net protecting worms from direct sun and maintaining moisture balance.",
    gallery_setup_tag: "Shade Structure",

    about_title: "About Us & Production Process",
    about_subtitle: "Dedicated to restoring soil vitality through natural biological inputs.",
    about_owner_title: "Proprietor",
    about_owner_name: "Bhimashankar Biradar",
    about_location_label: "Location: Jath, Sangli District, Maharashtra",
    about_p1:
      "Nava Disha Bio Fertilizers is an agricultural bio-fertilizer initiative led by Bhimashankar Biradar in Jath, Sangli, Maharashtra. Our mission is to restore depleting soil organic matter by providing authentic, unadulterated vermicompost and live earthworms to progressive farmers.",
    about_p2:
      "We strictly avoid chemical catalysts, allowing earthworms to naturally transform organic dairy manure and plant residues into nutrient-dense vermicompost.",
    about_process_title: "Our Natural Production Process",
    about_step1_title: "1. Raw Material Sourcing & Pre-conditioning",
    about_step1_desc: "Selection of quality cattle dung and farm residue with pre-curing to stabilize temperature.",
    about_step2_title: "2. Shaded Bed Preparation",
    about_step2_desc: "Laying moisture-regulated beds under protective shade nets with strict moisture control.",
    about_step3_title: "3. Biological Digestion",
    about_step3_desc: "Natural conversion by earthworms, enriching the substrate with castings and enzymes.",
    about_step4_title: "4. Harvesting & Fine Sieving",
    about_step4_desc: "Careful collection of top castings, fine mesh sieving, and bag packaging.",

    benefits_title: "Agronomic Benefits of Vermicompost",
    benefits_subtitle:
      "Scientifically verified advantages based on agricultural research, with zero false claims.",
    benefit1_title: "Enhanced Soil Structure & Aeration",
    benefit1_desc:
      "Vermicompost improves aggregate stability in sandy and clay soils, facilitating healthy root penetration.",
    benefit2_title: "Organic Carbon & Beneficial Microbes",
    benefit2_desc:
      "Enriches soil with beneficial bacteria and fungi that break down insoluble soil minerals for plants.",
    benefit3_title: "Improved Water Retention",
    benefit3_desc:
      "Organic humus increases the soil's moisture holding capacity, reducing irrigation stress during dry spells.",
    benefit4_title: "Gradual & Balanced Nutrient Release",
    benefit4_desc:
      "Supplies nitrogen, phosphorus, potassium, and trace elements in biologically available chelates.",

    faq_title: "Frequently Asked Questions (FAQ)",
    faq_subtitle: "Common questions regarding pricing, ordering, quantities, and delivery.",
    faq1_q: "What are the prices for vermicompost and live earthworms?",
    faq1_a:
      "Pricing depends on quantity (bags or metric tons) and distance for transport. Please click our WhatsApp buttons for an immediate, customized quote.",
    faq2_q: "What is the minimum order quantity?",
    faq2_a:
      "We cater to both retail garden requirements in small bags and commercial farmers needing multi-ton truckloads.",
    faq3_q: "How is delivery handled?",
    faq3_a:
      "We arrange local farm pickups, local transport around Sangli district, and courier/carrier freight for other regions upon confirmation.",
    faq4_q: "Do you supply starter culture for new vermicompost projects?",
    faq4_a:
      "Yes, we provide live earthworm starter cultures with cocoons and starter bedding, along with basic operational guidance.",
    faq5_q: "How can I place an order?",
    faq5_a:
      "Complete the enquiry form below or message us directly on WhatsApp at +91 87676 53352.",

    form_title: "Direct WhatsApp Enquiry Form",
    form_subtitle:
      "Fill out your details below. Submitting will pre-fill your enquiry directly in WhatsApp where you simply press Send.",
    form_name_label: "Your Full Name *",
    form_name_placeholder: "e.g., Ramesh Patil",
    form_mobile_label: "Mobile Number *",
    form_mobile_placeholder: "10-digit mobile number",
    form_product_label: "Select Product *",
    form_product_placeholder: "-- Select a Product --",
    form_quantity_label: "Estimated Quantity *",
    form_quantity_placeholder: "e.g., 50 kg / 2 Tons / 5 kg worms",
    form_location_label: "Delivery Location / Village / Taluka *",
    form_location_placeholder: "e.g., Jath, Miraj, Sangli etc.",
    form_message_label: "Additional Notes / Crop Info (Optional)",
    form_message_placeholder: "Mention crop type, required delivery timeframe, or questions...",
    form_submit_button: "Send Enquiry via WhatsApp",
    form_direct_whatsapp_note:
      "Notice: Clicking 'Send Enquiry' will open WhatsApp with your pre-filled details. Please press 'Send' inside WhatsApp to complete your enquiry.",
    form_validation_name: "Please enter your full name.",
    form_validation_mobile: "Please enter a valid 10-digit mobile number.",
    form_validation_product: "Please select a product.",
    form_validation_quantity: "Please specify the required quantity.",
    form_validation_location: "Please enter your delivery location.",
    form_success_modal_title: "Opening WhatsApp...",
    form_success_modal_body:
      "Your message is ready. Simply press Send inside WhatsApp to reach Nava Disha Bio Fertilizers.",

    contact_title: "Contact & Location",
    contact_subtitle: "Reach out directly for inquiries, orders, and farm pickups.",
    contact_whatsapp_label: "WhatsApp Business",
    contact_email_label: "Email Address",
    contact_location_label: "Farm Location & Address",
    contact_instagram_label: "Instagram Profile",
    contact_delivery_info: "Local & Courier dispatch available (subject to confirmation)",
    contact_action_whatsapp: "Start WhatsApp Chat",
    contact_action_email: "Send Email",
    contact_action_instagram: "Visit Instagram",

    footer_tagline:
      "Nava Disha Bio Fertilizers - Pure vermicompost and live earthworms for sustainable agriculture. Jath, Sangli.",
    footer_quick_links: "Quick Links",
    footer_contact_info: "Contact Info",
    footer_legal: "All Rights Reserved © " + new Date().getFullYear() + " Nava Disha Bio Fertilizers.",
    floating_whatsapp_label: "Chat on WhatsApp",
    lang_select_label: "Select Language"
  }
};

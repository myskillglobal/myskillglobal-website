// Smart Lady — International Awareness Assessment
// 100 questions · 10 categories · 10 questions each · languages: en, bn, hi
// Each question: cat = category id; q = [en, bn, hi]; o = 4 options, each [en, bn, hi]; a = index (0–3) of the correct option
// Parts/groups are built from `cat` (see QUESTION_GROUPS at the bottom), not from question numbers.

const CATEGORIES = [
  { id:"personal-safety", title:{ en:"Personal Safety & Situational Awareness", bn:"ব্যক্তিগত নিরাপত্তা ও পরিস্থিতি সচেতনতা", hi:"व्यक्तिगत सुरक्षा एवं परिस्थिति जागरूकता" } },
  { id:"cyber-safety", title:{ en:"Cyber Safety & Digital Security", bn:"সাইবার নিরাপত্তা ও ডিজিটাল সুরক্ষা", hi:"साइबर सुरक्षा एवं डिजिटल संरक्षण" } },
  { id:"womens-rights", title:{ en:"Women's Rights & Legal Awareness", bn:"নারীর অধিকার ও আইনি সচেতনতা", hi:"महिला अधिकार एवं कानूनी जागरूकता" } },
  { id:"emergency-sos", title:{ en:"Emergency Response & Personal Protection", bn:"জরুরি পরিস্থিতি মোকাবিলা ও ব্যক্তিগত সুরক্ষা", hi:"आपातकालीन प्रतिक्रिया एवं व्यक्तिगत सुरक्षा" } },
  { id:"money-management", title:{ en:"Financial Literacy & Money Management", bn:"আর্থিক শিক্ষা ও অর্থ ব্যবস্থাপনা", hi:"वित्तीय साक्षरता एवं धन प्रबंधन" } },
  { id:"banking-insurance", title:{ en:"Banking, Insurance & Digital Payments", bn:"ব্যাংকিং, বিমা ও ডিজিটাল পেমেন্ট", hi:"बैंकिंग, बीमा एवं डिजिटल भुगतान" } },
  { id:"home-business", title:{ en:"Entrepreneurship & Home-Based Business", bn:"উদ্যোক্তা দক্ষতা ও ঘরোয়া ব্যবসা", hi:"उद्यमिता एवं घरेलू व्यवसाय" } },
  { id:"public-support-community", title:{ en:"Public Support Schemes & Community Groups", bn:"সরকারি সহায়তা প্রকল্প ও কমিউনিটি গোষ্ঠী", hi:"सार्वजनिक सहायता योजनाएँ एवं सामुदायिक समूह" } },
  { id:"privacy-app", title:{ en:"Privacy, Technology & Smart Lady App", bn:"গোপনীয়তা, প্রযুক্তি ও Smart Lady অ্যাপ", hi:"गोपनीयता, तकनीक एवं Smart Lady ऐप" } },
  { id:"global-awareness", title:{ en:"Global Awareness & Independent Living", bn:"আন্তর্জাতিক সচেতনতা ও স্বনির্ভর জীবন", hi:"वैश्विक जागरूकता एवं आत्मनिर्भर जीवन" } },
];

const QUESTIONS = [

  // ===== Personal Safety & Situational Awareness =====
  {
    cat:"personal-safety",
    q:["A stranger offers you a lift when you are alone. What is the safest response?", "একা থাকা অবস্থায় অপরিচিত কেউ লিফট দিতে চাইলে নিরাপদ সিদ্ধান্ত কী?", "अकेले होने पर कोई अनजान व्यक्ति लिफ्ट देने की पेशकश करे तो सुरक्षित निर्णय क्या है?"],
    o:[
      ["Accept after checking the vehicle", "গাড়ি দেখে গ্রহণ করা", "गाड़ी देखकर स्वीकार करना"],
      ["Decline politely and move to a safer public place", "ভদ্রভাবে না বলে নিরাপদ জনসমাগমস্থলে যাওয়া", "विनम्रता से मना करके सुरक्षित सार्वजनिक स्थान पर जाना"],
      ["Ask the driver to call your family", "চালককে পরিবারকে ফোন করতে বলা", "चालक से परिवार को फोन करवाना"],
      ["Share your destination before deciding", "সিদ্ধান্তের আগে গন্তব্য জানানো", "निर्णय से पहले गंतव्य बताना"]
    ],a:1
  },
  {
    cat:"personal-safety",
    q:["What should you do before accepting a job offer in another city?", "অন্য শহরে চাকরি গ্রহণের আগে কী করা উচিত?", "दूसरे शहर में नौकरी स्वीकार करने से पहले क्या करना चाहिए?"],
    o:[
      ["Verify the employer independently", "নিয়োগকর্তাকে নিজে যাচাই করা", "नियोक्ता की स्वयं जाँच करना"],
      ["Check only the salary amount", "শুধু বেতনের পরিমাণ দেখা", "केवल वेतन की राशि देखना"],
      ["Pay the agent first", "আগে এজেন্টকে টাকা দেওয়া", "पहले एजेंट को पैसे देना"],
      ["Travel first and verify later", "আগে যাত্রা করে পরে যাচাই করা", "पहले यात्रा करके बाद में जाँच करना"]
    ],a:0
  },
  {
    cat:"personal-safety",
    q:["An agent asks to keep your original passport. What should you do?", "কোনো এজেন্ট আসল পাসপোর্ট রাখতে চাইলে কী করবেন?", "कोई एजेंट आपका मूल पासपोर्ट रखना चाहे तो क्या करेंगे?"],
    o:[
      ["Give it for temporary verification", "সাময়িক যাচাইয়ের জন্য দেওয়া", "अस्थायी सत्यापन के लिए देना"],
      ["Give it after taking a receipt", "রসিদ নিয়ে দেওয়া", "रसीद लेकर देना"],
      ["Provide a photocopy and retain the original", "ফটোকপি দিয়ে আসলটি নিজের কাছে রাখা", "फोटोकॉपी देकर मूल दस्तावेज अपने पास रखना"],
      ["Allow the agent to photograph every page", "সব পৃষ্ঠার ছবি তুলতে দেওয়া", "एजेंट को हर पन्ने की तस्वीर लेने देना"]
    ],a:2
  },
  {
    cat:"personal-safety",
    q:["Someone asks you to keep an online relationship secret and travel alone. What is the best response?", "অনলাইনের পরিচিত কেউ সম্পর্ক গোপন রেখে একা ভ্রমণ করতে বললে কী করবেন?", "ऑनलाइन परिचित कोई व्यक्ति रिश्ता गुप्त रखकर अकेले यात्रा करने को कहे तो क्या करेंगे?"],
    o:[
      ["Agree if the person sounds trustworthy", "বিশ্বাসযোগ্য মনে হলে রাজি হওয়া", "विश्वसनीय लगे तो सहमत होना"],
      ["Send your travel details later", "পরে ভ্রমণের তথ্য পাঠানো", "बाद में यात्रा की जानकारी भेजना"],
      ["Meet secretly in a public place", "জনসমক্ষে গোপনে দেখা করা", "सार्वजनिक जगह पर गुप्त रूप से मिलना"],
      ["Inform a trusted person and avoid travelling alone", "বিশ্বস্ত কাউকে জানিয়ে একা ভ্রমণ না করা", "विश्वसनीय व्यक्ति को बताकर अकेले यात्रा न करना"]
    ],a:3
  },
  {
    cat:"personal-safety",
    q:["If you suspect someone is being trafficked, what is the safest action?", "কেউ মানবপাচারের শিকার হতে পারেন সন্দেহ হলে নিরাপদ পদক্ষেপ কী?", "यदि किसी के मानव तस्करी का शिकार होने का संदेह हो तो सुरक्षित कदम क्या है?"],
    o:[
      ["Confront the suspected person", "সন্দেহভাজন ব্যক্তির মুখোমুখি হওয়া", "संदिग्ध व्यक्ति का सामना करना"],
      ["Call emergency services and share factual details", "জরুরি পরিষেবায় ফোন করে তথ্য জানানো", "आपातकालीन सेवा को फोन करके तथ्य बताना"],
      ["Post the incident on social media", "ঘটনাটি সোশ্যাল মিডিয়ায় প্রকাশ করা", "घटना को सोशल मीडिया पर डालना"],
      ["Follow the person to collect evidence", "প্রমাণ সংগ্রহের জন্য পিছু নেওয়া", "सबूत जुटाने के लिए पीछा करना"]
    ],a:1
  },
  {
    cat:"personal-safety",
    q:["Which is a warning sign of a suspicious job offer?", "সন্দেহজনক চাকরির প্রস্তাবের একটি লক্ষণ কোনটি?", "संदिग्ध नौकरी के प्रस्ताव का एक संकेत कौन-सा है?"],
    o:[
      ["A written job description", "লিখিত কাজের বিবরণ", "लिखित कार्य विवरण"],
      ["A verifiable company address", "যাচাইযোগ্য কোম্পানির ঠিকানা", "सत्यापन योग्य कंपनी का पता"],
      ["Guaranteed high income with an advance fee", "আগাম টাকা নিয়ে নিশ্চিত বেশি আয়ের প্রতিশ্রুতি", "अग्रिम शुल्क लेकर निश्चित अधिक कमाई का वादा"],
      ["A clear interview process", "স্পষ্ট সাক্ষাৎকার প্রক্রিয়া", "स्पष्ट साक्षात्कार प्रक्रिया"]
    ],a:2
  },
  {
    cat:"personal-safety",
    q:["What is a sensible way to share your travel plans?", "ভ্রমণের পরিকল্পনা জানানোর ভালো উপায় কোনটি?", "यात्रा की योजना बताने का उचित तरीका क्या है?"],
    o:[
      ["Tell a trusted person your route and expected arrival", "বিশ্বস্ত কাউকে পথ ও পৌঁছানোর সম্ভাব্য সময় জানানো", "विश्वसनीय व्यक्ति को रास्ता और पहुँचने का समय बताना"],
      ["Share only the destination after arrival", "পৌঁছানোর পরে শুধু গন্তব্য জানানো", "पहुँचने के बाद केवल गंतव्य बताना"],
      ["Send details only to online acquaintances", "শুধু অনলাইন পরিচিতদের তথ্য দেওয়া", "केवल ऑनलाइन परिचितों को जानकारी देना"],
      ["Keep the journey entirely private", "যাত্রার কথা সম্পূর্ণ গোপন রাখা", "यात्रा की जानकारी पूरी तरह गुप्त रखना"]
    ],a:0
  },
  {
    cat:"personal-safety",
    q:["What should you do if someone follows you repeatedly?", "কেউ বারবার পিছু নিলে কী করা উচিত?", "कोई बार-बार पीछा करे तो क्या करना चाहिए?"],
    o:[
      ["Go to an isolated shortcut", "নির্জন ছোট রাস্তা ধরা", "सुनसान छोटे रास्ते पर जाना"],
      ["Return home without informing anyone", "কাউকে না জানিয়ে বাড়ি ফেরা", "किसी को बताए बिना घर लौटना"],
      ["Stop and argue with the person", "থেমে তর্ক করা", "रुककर बहस करना"],
      ["Move to a crowded safe place and seek help", "জনবহুল নিরাপদ স্থানে গিয়ে সাহায্য চাওয়া", "भीड़भाड़ वाले सुरक्षित स्थान पर जाकर मदद लेना"]
    ],a:3
  },
  {
    cat:"personal-safety",
    q:["Why should you keep copies of important identity documents?", "গুরুত্বপূর্ণ পরিচয়পত্রের কপি রাখা কেন দরকার?", "महत्वपूर्ण पहचान दस्तावेजों की प्रतियाँ रखना क्यों जरूरी है?"],
    o:[
      ["To avoid carrying any identification ever", "কখনও পরিচয়পত্র বহন না করার জন্য", "कभी पहचान पत्र साथ न रखने के लिए"],
      ["To help with verification if originals are lost", "আসল নথি হারালে যাচাইয়ে সুবিধার জন্য", "मूल दस्तावेज खोने पर सत्यापन में सहायता के लिए"],
      ["To share them with every agent", "প্রত্যেক এজেন্টকে দেওয়ার জন্য", "हर एजेंट को देने के लिए"],
      ["To replace official documents permanently", "স্থায়ীভাবে সরকারি নথির বদলে ব্যবহার করার জন্য", "सरकारी दस्तावेजों की स्थायी जगह लेने के लिए"]
    ],a:1
  },
  {
    cat:"personal-safety",
    q:["What is the best response to pressure to make an immediate decision?", "তাৎক্ষণিক সিদ্ধান্ত নেওয়ার চাপ দিলে ভালো প্রতিক্রিয়া কী?", "तुरंत निर्णय लेने का दबाव हो तो उचित प्रतिक्रिया क्या है?"],
    o:[
      ["Agree to avoid losing the opportunity", "সুযোগ হারানোর ভয়ে রাজি হওয়া", "अवसर खोने के डर से सहमत होना"],
      ["Pay a small amount first", "আগে অল্প টাকা দেওয়া", "पहले थोड़ी रकम देना"],
      ["Take time to verify and consult someone trusted", "যাচাই ও পরামর্শের জন্য সময় নেওয়া", "जाँच और सलाह के लिए समय लेना"],
      ["Share personal details to build trust", "বিশ্বাস অর্জনে ব্যক্তিগত তথ্য দেওয়া", "विश्वास बनाने के लिए निजी जानकारी देना"]
    ],a:2
  },

  // ===== Cyber Safety & Digital Security =====
  {
    cat:"cyber-safety",
    q:["What should you do when a caller claims to be a bank officer and asks for your OTP?", "কেউ ব্যাংককর্মী পরিচয় দিয়ে OTP চাইলে কী করবেন?", "कोई बैंक अधिकारी बनकर OTP माँगे तो क्या करेंगे?"],
    o:[
      ["Share only the first few digits", "প্রথম কয়েকটি সংখ্যা দেওয়া", "केवल शुरुआती अंक बताना"],
      ["Share it after checking the caller ID", "কলার আইডি দেখে দেওয়া", "कॉलर आईडी देखकर बताना"],
      ["Ask the caller to send a confirmation message", "নিশ্চিতকরণ বার্তা পাঠাতে বলা", "पुष्टि संदेश भेजने को कहना"],
      ["Never share it and contact the bank through official channels", "কখনও শেয়ার না করে ব্যাংকের অফিসিয়াল যোগাযোগ মাধ্যমে যোগাযোগ করা", "कभी साझा न करके आधिकारिक माध्यम से बैंक से संपर्क करना"]
    ],a:3
  },
  {
    cat:"cyber-safety",
    q:["Which action is needed to receive money through a digital payment app?", "ডিজিটাল পেমেন্ট অ্যাপে টাকা গ্রহণ করতে কোন পদক্ষেপ প্রয়োজন?", "डिजिटल भुगतान ऐप में पैसे प्राप्त करने के लिए कौन-सा कदम आवश्यक है?"],
    o:[
      ["Entering your PIN to approve the incoming money", "টাকা পাওয়ার অনুমোদনে PIN দেওয়া", "पैसे प्राप्त करने की मंजूरी के लिए PIN डालना"],
      ["Sharing your OTP with the sender", "প্রেরককে OTP জানানো", "भेजने वाले को OTP बताना"],
      ["No PIN or password entry is needed to receive money", "টাকা গ্রহণ করতে PIN বা পাসওয়ার্ড দেওয়ার প্রয়োজন নেই", "पैसे प्राप्त करने के लिए PIN या पासवर्ड डालने की आवश्यकता नहीं है"],
      ["Scanning a code and confirming with your PIN", "কোড স্ক্যান করে PIN দিয়ে নিশ্চিত করা", "कोड स्कैन करके PIN से पुष्टि करना"]
    ],a:2
  },
  {
    cat:"cyber-safety",
    q:["What is the safest way to open a bank-related link?", "ব্যাংক সংক্রান্ত লিংক খোলার নিরাপদ উপায় কোনটি?", "बैंक से संबंधित लिंक खोलने का सुरक्षित तरीका क्या है?"],
    o:[
      ["Use the official bank app or type its known website address", "ব্যাংকের অফিসিয়াল অ্যাপ বা পরিচিত ওয়েবসাইট ব্যবহার করা", "बैंक का आधिकारिक ऐप या ज्ञात वेबसाइट पता इस्तेमाल करना"],
      ["Open the link from an unexpected SMS", "অপ্রত্যাশিত SMS-এর লিংক খোলা", "अनजान SMS का लिंक खोलना"],
      ["Use a shortened link sent by an unknown number", "অচেনা নম্বরের ছোট লিংক ব্যবহার করা", "अनजान नंबर का छोटा लिंक इस्तेमाल करना"],
      ["Open the link after forwarding it to friends", "বন্ধুদের পাঠিয়ে তারপর খোলা", "दोस्तों को भेजकर फिर खोलना"]
    ],a:0
  },
  {
    cat:"cyber-safety",
    q:["What is the main purpose of two-step verification?", "টু-স্টেপ ভেরিফিকেশনের প্রধান উদ্দেশ্য কী?", "टू-स्टेप वेरिफिकेशन का मुख्य उद्देश्य क्या है?"],
    o:[
      ["To make passwords shorter", "পাসওয়ার্ড ছোট করা", "पासवर्ड छोटा करना"],
      ["To add another layer of account security", "অ্যাকাউন্টে অতিরিক্ত নিরাপত্তা যোগ করা", "अकाउंट में सुरक्षा की एक अतिरिक्त परत जोड़ना"],
      ["To remove the need for a screen lock", "স্ক্রিন লকের প্রয়োজন দূর করা", "स्क्रीन लॉक की जरूरत हटाना"],
      ["To allow multiple unknown users", "একাধিক অচেনা ব্যবহারকারীকে অনুমতি দেওয়া", "कई अनजान उपयोगकर्ताओं को अनुमति देना"]
    ],a:1
  },
  {
    cat:"cyber-safety",
    q:["A message says you won a lottery but must pay a fee. What is the best response?", "একটি বার্তায় লটারি জেতার কথা বলে ফি চাইলে কী করবেন?", "एक संदेश में लॉटरी जीतने की बात कहकर शुल्क माँगा जाए तो क्या करेंगे?"],
    o:[
      ["Pay a small verification fee", "অল্প যাচাই ফি দেওয়া", "थोड़ा सत्यापन शुल्क देना"],
      ["Send bank details to confirm the prize", "পুরস্কার নিশ্চিত করতে ব্যাংকের তথ্য পাঠানো", "इनाम की पुष्टि के लिए बैंक विवरण भेजना"],
      ["Forward the message to relatives", "আত্মীয়দের বার্তাটি পাঠানো", "संदेश रिश्तेदारों को भेजना"],
      ["Do not pay and verify the claim independently", "টাকা না দিয়ে দাবিটি নিজে যাচাই করা", "पैसे न देकर दावे की स्वतंत्र जाँच करना"]
    ],a:3
  },
  {
    cat:"cyber-safety",
    q:["What should you do if someone threatens to publish your private photos?", "কেউ ব্যক্তিগত ছবি প্রকাশের হুমকি দিলে কী করবেন?", "कोई निजी तस्वीरें सार्वजनिक करने की धमकी दे तो क्या करेंगे?"],
    o:[
      ["Pay once to settle the matter", "বিষয়টি মেটাতে একবার টাকা দেওয়া", "मामला खत्म करने के लिए एक बार पैसे देना"],
      ["Save evidence, avoid payment and report the threat", "প্রমাণ সংরক্ষণ করে টাকা না দিয়ে অভিযোগ করা", "सबूत सुरक्षित रखकर पैसे न देना और शिकायत करना"],
      ["Delete every message immediately", "সব বার্তা সঙ্গে সঙ্গে মুছে ফেলা", "सभी संदेश तुरंत मिटा देना"],
      ["Send more photos to negotiate", "সমঝোতার জন্য আরও ছবি পাঠানো", "समझौते के लिए और तस्वीरें भेजना"]
    ],a:1
  },
  {
    cat:"cyber-safety",
    q:["Which password practice is safer?", "কোন পাসওয়ার্ড ব্যবহারের অভ্যাস বেশি নিরাপদ?", "कौन-सी पासवर्ड आदत अधिक सुरक्षित है?"],
    o:[
      ["Use the same password everywhere", "সব জায়গায় একই পাসওয়ার্ড", "हर जगह एक ही पासवर्ड"],
      ["Use your birth year with your name", "নামের সঙ্গে জন্মসাল", "नाम के साथ जन्म वर्ष"],
      ["Use a long, unique password for each important account", "প্রতিটি গুরুত্বপূর্ণ অ্যাকাউন্টে দীর্ঘ ও আলাদা পাসওয়ার্ড", "हर महत्वपूर्ण अकाउंट के लिए लंबा और अलग पासवर्ड"],
      ["Use a phone number as every password", "সব পাসওয়ার্ডে ফোন নম্বর", "हर पासवर्ड में फोन नंबर"]
    ],a:2
  },
  {
    cat:"cyber-safety",
    q:["What should you do before installing an unfamiliar loan app?", "অপরিচিত লোন অ্যাপ ইনস্টল করার আগে কী করবেন?", "अनजान लोन ऐप इंस्टॉल करने से पहले क्या करेंगे?"],
    o:[
      ["Check its developer, permissions and credibility", "ডেভেলপার, অনুমতি ও বিশ্বাসযোগ্যতা যাচাই করা", "डेवलपर, अनुमतियाँ और विश्वसनीयता जाँचना"],
      ["Install it because it offers instant approval", "দ্রুত অনুমোদন দেয় বলে ইনস্টল করা", "तुरंत मंजूरी देने के कारण इंस्टॉल करना"],
      ["Give contacts permission first", "আগে কন্ট্যাক্টের অনুমতি দেওয়া", "पहले कॉन्टैक्ट की अनुमति देना"],
      ["Upload identity documents before reading details", "বিস্তারিত না পড়ে পরিচয়পত্র আপলোড করা", "जानकारी पढ़े बिना पहचान दस्तावेज अपलोड करना"]
    ],a:0
  },
  {
    cat:"cyber-safety",
    q:["What is a safer way to handle an unknown video call?", "অপরিচিত ভিডিও কল সামলানোর নিরাপদ উপায় কী?", "अनजान वीडियो कॉल को संभालने का सुरक्षित तरीका क्या है?"],
    o:[
      ["Answer and reveal your surroundings", "ধরে আশপাশ দেখানো", "कॉल उठाकर आसपास दिखाना"],
      ["Accept if the caller uses a familiar profile photo", "পরিচিত ছবি থাকলে ধরা", "पहचानी तस्वीर होने पर कॉल उठाना"],
      ["Share your live location during the call", "কলের সময় লাইভ লোকেশন দেওয়া", "कॉल के दौरान लाइव लोकेशन साझा करना"],
      ["Avoid sharing private details and decline if suspicious", "ব্যক্তিগত তথ্য না দেখিয়ে সন্দেহ হলে কল না ধরা", "निजी जानकारी न दिखाकर संदेह होने पर कॉल न उठाना"]
    ],a:3
  },
  {
    cat:"cyber-safety",
    q:["What should you do if you notice an unauthorised digital payment transaction?", "অননুমোদিত ডিজিটাল পেমেন্ট লেনদেন চোখে পড়লে কী করবেন?", "अनधिकृत डिजिटल भुगतान लेनदेन दिखे तो क्या करेंगे?"],
    o:[
      ["Wait a few days to see if it is reversed", "কয়েকদিন অপেক্ষা করে দেখা এটি ফেরত আসে কি না", "कुछ दिन रुककर देखना कि वह वापस आता है या नहीं"],
      ["Contact the bank promptly and report the fraud", "দ্রুত ব্যাংকে জানানো ও প্রতারণা রিপোর্ট করা", "तुरंत बैंक को बताना और धोखाधड़ी की रिपोर्ट करना"],
      ["Ask the receiver to return the money privately", "প্রাপককে ব্যক্তিগতভাবে টাকা ফেরত দিতে বলা", "प्राप्तकर्ता से निजी तौर पर पैसे लौटाने को कहना"],
      ["Only change the app theme or language settings", "শুধু অ্যাপের থিম বা ভাষার সেটিং বদলানো", "केवल ऐप की थीम या भाषा की सेटिंग बदलना"]
    ],a:1
  },

  // ===== Women's Rights & Legal Awareness =====
  {
    cat:"womens-rights",
    q:["Where should you first report a serious crime or threat against you?", "আপনার বিরুদ্ধে গুরুতর অপরাধ বা হুমকি হলে প্রথমে কোথায় জানাবেন?", "आपके विरुद्ध गंभीर अपराध या धमकी होने पर सबसे पहले कहाँ सूचित करेंगे?"],
    o:[
      ["To the local police, and note the report number", "স্থানীয় পুলিশকে জানানো এবং রিপোর্ট নম্বর লিখে রাখা", "स्थानीय पुलिस को बताना और रिपोर्ट नंबर नोट करना"],
      ["Only to a friend through social media", "শুধু সোশ্যাল মিডিয়ায় এক বন্ধুকে জানানো", "केवल सोशल मीडिया पर किसी दोस्त को बताना"],
      ["Directly to the person who threatened you", "যে হুমকি দিয়েছে তাকেই সরাসরি জানানো", "धमकी देने वाले व्यक्ति को सीधे बताना"],
      ["Nowhere until the threat is repeated twice", "হুমকি দুবার না হওয়া পর্যন্ত কাউকে না জানানো", "धमकी दोबारा होने तक किसी को न बताना"]
    ],a:0
  },
  {
    cat:"womens-rights",
    q:["What should you ask for after reporting an incident to the authorities?", "কর্তৃপক্ষকে ঘটনা জানানোর পর কী চেয়ে নেওয়া উচিত?", "अधिकारियों को घटना बताने के बाद क्या माँगना चाहिए?"],
    o:[
      ["Only a verbal promise of action", "শুধু মৌখিক আশ্বাস", "केवल मौखिक आश्वासन"],
      ["A reference number and a copy of the report", "রেফারেন্স নম্বর ও রিপোর্টের একটি কপি", "संदर्भ संख्या और रिपोर्ट की एक प्रति"],
      ["The name of the person who made the complaint against you", "আপনার বিরুদ্ধে অভিযোগকারীর নাম", "आपके विरुद्ध शिकायत करने वाले का नाम"],
      ["Nothing, since a record is not needed", "কিছুই নয়, কারণ নথির প্রয়োজন নেই", "कुछ नहीं, क्योंकि रिकॉर्ड की आवश्यकता नहीं"]
    ],a:1
  },
  {
    cat:"womens-rights",
    q:["What does a workplace anti-harassment policy generally provide?", "কর্মক্ষেত্রের হয়রানি-প্রতিরোধ নীতি সাধারণত কী প্রদান করে?", "कार्यस्थल की उत्पीड़न-निरोधक नीति सामान्यतः क्या प्रदान करती है?"],
    o:[
      ["A way for managers to ignore complaints", "ম্যানেজারদের অভিযোগ উপেক্ষা করার উপায়", "प्रबंधकों के लिए शिकायतें अनदेखी करने का तरीका"],
      ["A rule that complaints must be made in public", "অভিযোগ প্রকাশ্যে করার নিয়ম", "शिकायत सार्वजनिक रूप से करने का नियम"],
      ["A process to report, investigate and address harassment", "হয়রানি জানানো, তদন্ত ও প্রতিকারের একটি প্রক্রিয়া", "उत्पीड़न की सूचना, जाँच और समाधान की प्रक्रिया"],
      ["A list of employees who should avoid reporting", "যাদের অভিযোগ না করাই ভালো তাদের তালিকা", "उन कर्मचारियों की सूची जिन्हें शिकायत नहीं करनी चाहिए"]
    ],a:2
  },
  {
    cat:"womens-rights",
    q:["Which body or person should a workplace generally designate to handle harassment complaints?", "কর্মক্ষেত্রে হয়রানির অভিযোগ দেখার জন্য সাধারণত কাকে নির্ধারণ করা উচিত?", "कार्यस्थल पर उत्पीड़न की शिकायतें देखने के लिए सामान्यतः किसे नियुक्त करना चाहिए?"],
    o:[
      ["Only the person accused", "শুধু অভিযুক্ত ব্যক্তিকে", "केवल आरोपित व्यक्ति को"],
      ["A colleague chosen by the accused", "অভিযুক্তের বেছে নেওয়া সহকর্মীকে", "आरोपित द्वारा चुने गए सहकर्मी को"],
      ["No one, until a case becomes public", "মামলা প্রকাশ্যে না আসা পর্যন্ত কাউকে নয়", "किसी को नहीं, जब तक मामला सार्वजनिक न हो"],
      ["A designated complaints committee or officer", "একটি নির্ধারিত অভিযোগ কমিটি বা কর্মকর্তা", "एक निर्धारित शिकायत समिति या अधिकारी"]
    ],a:3
  },
  {
    cat:"womens-rights",
    q:["Where available, what is the purpose of free or subsidised legal aid?", "যেখানে পাওয়া যায়, বিনামূল্যে বা স্বল্পমূল্যের আইনি সহায়তার উদ্দেশ্য কী?", "जहाँ उपलब्ध हो, निःशुल्क या रियायती कानूनी सहायता का उद्देश्य क्या है?"],
    o:[
      ["To give eligible people free or low-cost legal help", "যোগ্য মানুষকে বিনামূল্যে বা কম খরচে আইনি সহায়তা দেওয়া", "पात्र लोगों को मुफ़्त या कम खर्च में कानूनी सहायता देना"],
      ["To guarantee the result of every case", "প্রতিটি মামলার ফল নিশ্চিত করা", "हर मामले का परिणाम सुनिश्चित करना"],
      ["To replace all court procedures and judges", "সব আদালতি প্রক্রিয়া ও বিচারকের বদলি হওয়া", "सभी अदालती प्रक्रियाओं और न्यायाधीशों की जगह लेना"],
      ["To provide private investigation services", "ব্যক্তিগত তদন্ত পরিষেবা দেওয়া", "निजी जाँच सेवा देना"]
    ],a:0
  },
  {
    cat:"womens-rights",
    q:["What is a reliable way to find a women's support helpline in your country?", "নিজের দেশে নারী সহায়তা হেল্পলাইন খোঁজার নির্ভরযোগ্য উপায় কী?", "अपने देश में महिला सहायता हेल्पलाइन खोजने का भरोसेमंद तरीका क्या है?"],
    o:[
      ["Call any number found in a random message", "কোনো এলোমেলো বার্তায় পাওয়া নম্বরে ফোন করা", "किसी अनजान संदेश में मिले नंबर पर फोन करना"],
      ["Check official government or recognised support-organisation websites", "সরকারি বা স্বীকৃত সহায়তা সংস্থার ওয়েবসাইট দেখা", "सरकारी या मान्यता प्राप्त सहायता संगठन की वेबसाइट देखना"],
      ["Use a number shared by an unverified social media page", "যাচাইহীন সোশ্যাল মিডিয়া পেজের নম্বর ব্যবহার করা", "असत्यापित सोशल मीडिया पेज का नंबर इस्तेमाल करना"],
      ["Ask a stranger online to recommend one", "অনলাইনে অপরিচিতকে সুপারিশ করতে বলা", "ऑनलाइन किसी अनजान से सुझाव माँगना"]
    ],a:1
  },
  {
    cat:"womens-rights",
    q:["Where legal protections against domestic abuse are available, what may they offer?", "পারিবারিক নির্যাতনের বিরুদ্ধে আইনি সুরক্ষা যেখানে রয়েছে, সেখানে কী ধরনের সহায়তা পাওয়া যেতে পারে?", "जहाँ घरेलू हिंसा के विरुद्ध कानूनी संरक्षण उपलब्ध है, वहाँ किस प्रकार की सहायता मिल सकती है?"],
    o:[
      ["Only advice to stay silent about the abuse", "নির্যাতনের কথা শুধু চেপে যাওয়ার পরামর্শ", "हिंसा के बारे में केवल चुप रहने की सलाह"],
      ["Protection only after a long public trial", "দীর্ঘ প্রকাশ্য বিচারের পরেই সুরক্ষা", "लंबी सार्वजनिक सुनवाई के बाद ही संरक्षण"],
      ["Legal protection and access to support services", "আইনি সুরক্ষা ও সহায়তা পরিষেবা পাওয়ার সুযোগ", "कानूनी संरक्षण और सहायता सेवाओं तक पहुँच"],
      ["Support only for those who can pay legal fees", "শুধু আইনি ফি দিতে পারলে সহায়তা", "केवल कानूनी शुल्क चुका सकने वालों को सहायता"]
    ],a:2
  },
  {
    cat:"womens-rights",
    q:["What is a sensible response if an employer keeps your original identity documents against your will?", "নিয়োগকর্তা ইচ্ছার বিরুদ্ধে আসল পরিচয়পত্র আটকে রাখলে কী করা উচিত?", "नियोक्ता आपकी इच्छा के विरुद्ध मूल पहचान दस्तावेज रखे तो क्या करना चाहिए?"],
    o:[
      ["Wait quietly until the contract period ends", "চুক্তির মেয়াদ শেষ হওয়া পর্যন্ত চুপ করে অপেক্ষা করা", "अनुबंध की अवधि खत्म होने तक चुपचाप इंतज़ार करना"],
      ["Pay a release fee to get the documents back", "নথি ফেরত পেতে মুক্তির ফি দেওয়া", "दस्तावेज़ वापस पाने के लिए रिहाई शुल्क देना"],
      ["Give another original document as a replacement", "বদলে আরেকটি আসল নথি দেওয়া", "बदले में कोई दूसरा मूल दस्तावेज़ देना"],
      ["Report to the authorities and keep copies of evidence", "কর্তৃপক্ষকে জানানো এবং প্রমাণের কপি রাখা", "अधिकारियों को सूचित करना और सबूत की प्रतियाँ रखना"]
    ],a:3
  },
  {
    cat:"womens-rights",
    q:["What is a sensible part of a personal safety plan?", "ব্যক্তিগত নিরাপত্তা পরিকল্পনার একটি বিচক্ষণ অংশ কোনটি?", "व्यक्तिगत सुरक्षा योजना का एक समझदारी भरा हिस्सा कौन-सा है?"],
    o:[
      ["Knowing a safe place and whom to call", "একটি নিরাপদ জায়গা ও কাকে ফোন করবেন তা জানা", "एक सुरक्षित स्थान और किसे फ़ोन करना है, यह जानना"],
      ["Waiting for a crisis to look for help", "সংকট এলে তখন সাহায্য খোঁজা", "संकट आने पर ही मदद ढूँढना"],
      ["Keeping every plan hidden from everyone", "প্রতিটি পরিকল্পনা সবার কাছ থেকে লুকিয়ে রাখা", "हर योजना को सबसे छिपाकर रखना"],
      ["Relying on a stranger to decide for you", "আপনার হয়ে সিদ্ধান্ত নিতে অপরিচিতের ওপর নির্ভর করা", "अपने लिए फ़ैसला लेने को किसी अनजान पर निर्भर रहना"]
    ],a:0
  },
  {
    cat:"womens-rights",
    q:["What is a useful first step when facing harassment at work?", "কর্মক্ষেত্রে হয়রানির শিকার হলে একটি কার্যকর প্রথম পদক্ষেপ কী?", "कार्यस्थल पर उत्पीड़न होने पर उपयोगी पहला कदम क्या है?"],
    o:[
      ["Delete all messages to avoid trouble", "ঝামেলা এড়াতে সব মেসেজ মুছে ফেলা", "परेशानी से बचने के लिए सभी संदेश मिटा देना"],
      ["Save records and learn the complaint process", "প্রমাণ সংরক্ষণ করা ও অভিযোগের নিয়ম জানা", "रिकॉर्ड सुरक्षित रखना और शिकायत की प्रक्रिया जानना"],
      ["Post the colleague's details on social media", "সহকর্মীর তথ্য সোশ্যাল মিডিয়ায় প্রকাশ করা", "सहकर्मी की जानकारी सोशल मीडिया पर डालना"],
      ["Pay someone to settle the matter quietly", "চুপচাপ মিটমাট করতে কাউকে টাকা দেওয়া", "चुपचाप मामला निपटाने के लिए किसी को पैसे देना"]
    ],a:1
  },

  // ===== Emergency Response & Personal Protection =====
  {
    cat:"emergency-sos",
    q:["What should you do before testing your phone's Emergency SOS shortcut?", "ফোনের Emergency SOS শর্টকাট পরীক্ষা করার আগে কী করবেন?", "फोन के Emergency SOS शॉर्टकट का परीक्षण करने से पहले क्या करेंगे?"],
    o:[
      ["Test it by calling the emergency operator repeatedly", "বারবার জরুরি নম্বরে কল করে পরীক্ষা করা", "बार-बार आपातकालीन नंबर पर कॉल करके जाँचना"],
      ["Remove all your emergency contacts first", "আগে সব জরুরি যোগাযোগ মুছে ফেলা", "पहले सभी आपातकालीन संपर्क हटा देना"],
      ["Learn how to cancel it without placing a real call", "আসল কল না করে কীভাবে বাতিল করতে হয় তা শেখা", "असली कॉल किए बिना उसे रद्द करना सीखना"],
      ["Remove the SIM card before testing", "পরীক্ষার আগে সিম কার্ড খুলে ফেলা", "परीक्षण से पहले सिम कार्ड निकाल देना"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["How many trusted contacts does the Smart Lady setup guide recommend adding?", "Smart Lady সেটআপ গাইডে কতজন বিশ্বস্ত যোগাযোগ যোগ করতে বলা হয়েছে?", "Smart Lady सेटअप गाइड में कितने विश्वसनीय संपर्क जोड़ने की सलाह है?"],
    o:[
      ["One", "একজন", "एक"],
      ["Three", "তিনজন", "तीन"],
      ["Four", "চারজন", "चार"],
      ["Two", "দুজন", "दो"]
    ],a:3
  },
  {
    cat:"emergency-sos",
    q:["What happens when Smart SOS is pressed according to the app guide?", "অ্যাপ গাইড অনুযায়ী Smart SOS চাপলে কী ঘটে?", "ऐप गाइड के अनुसार Smart SOS दबाने पर क्या होता है?"],
    o:[
      ["It prepares an SOS message with a location link", "এটি লোকেশন লিংকসহ একটি SOS মেসেজ তৈরি করে", "यह लोकेशन लिंक के साथ एक SOS संदेश तैयार करता है"],
      ["It automatically records and uploads a video", "এটি নিজে থেকে ভিডিও রেকর্ড করে আপলোড করে", "यह अपने आप वीडियो रिकॉर्ड करके अपलोड करता है"],
      ["It uploads all phone data to a server", "ফোনের সব তথ্য সার্ভারে পাঠায়", "फोन का सारा डेटा सर्वर पर भेजता है"],
      ["It permanently locks the phone's SIM card", "এটি ফোনের সিম কার্ড চিরতরে লক করে দেয়", "यह फ़ोन का सिम कार्ड हमेशा के लिए लॉक कर देता है"]
    ],a:0
  },
  {
    cat:"emergency-sos",
    q:["Who is a good choice as a trusted emergency contact?", "বিশ্বস্ত জরুরি যোগাযোগ হিসেবে কাকে বেছে নেওয়া ভালো?", "भरोसेमंद आपातकालीन संपर्क के रूप में किसे चुनना अच्छा है?"],
    o:[
      ["A stranger you recently met online", "অনলাইনে সম্প্রতি পরিচয় হওয়া অপরিচিত কাউকে", "हाल ही में ऑनलाइन मिले किसी अनजान व्यक्ति को"],
      ["Someone whose phone is usually switched off", "যাঁর ফোন প্রায়ই বন্ধ থাকে এমন কাউকে", "ऐसे व्यक्ति को जिसका फ़ोन अक्सर बंद रहता है"],
      ["A person who does not know about your plan", "যে আপনার পরিকল্পনার কথা জানে না এমন কাউকে", "ऐसे व्यक्ति को जिसे आपकी योजना की जानकारी नहीं है"],
      ["A reliable person who can respond quickly", "এমন নির্ভরযোগ্য কাউকে, যিনি দ্রুত সাড়া দিতে পারেন", "ऐसे भरोसेमंद व्यक्ति को जो जल्दी प्रतिक्रिया दे सके"]
    ],a:3
  },
  {
    cat:"emergency-sos",
    q:["What may prevent an SOS message from being delivered?", "SOS বার্তা পৌঁছাতে কী বাধা দিতে পারে?", "SOS संदेश पहुँचने में क्या बाधा डाल सकता है?"],
    o:[
      ["A contact saved with a clear name", "স্পষ্ট নামে সংরক্ষিত একটি পরিচিতি", "स्पष्ट नाम से सेव किया गया संपर्क"],
      ["A fully charged phone battery", "পুরো চার্জ করা ফোনের ব্যাটারি", "पूरी तरह चार्ज फ़ोन की बैटरी"],
      ["No network signal or SMS service", "নেটওয়ার্ক সিগন্যাল বা এসএমএস পরিষেবা না থাকা", "नेटवर्क सिग्नल या एसएमएस सेवा न होना"],
      ["A correctly entered country code", "সঠিক country code লেখা", "सही country code दर्ज होना"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["What should you do if you accidentally trigger an emergency call?", "ভুল করে জরুরি কল চালু হয়ে গেলে কী করবেন?", "गलती से आपातकालीन कॉल शुरू हो जाए तो क्या करेंगे?"],
    o:[
      ["Switch off the phone without speaking", "কিছু না বলে ফোন বন্ধ করে দেওয়া", "बिना बोले फ़ोन बंद कर देना"],
      ["Remove the SIM card to stop the call", "কল থামাতে সিম কার্ড খুলে ফেলা", "कॉल रोकने के लिए सिम कार्ड निकाल देना"],
      ["Hang up and ignore the operator's call back", "কল কেটে অপারেটরের ফিরতি কল উপেক্ষা করা", "कॉल काटकर ऑपरेटर की वापसी कॉल अनदेखा करना"],
      ["Stay on the line and explain it was accidental", "লাইনে থেকে জানানো যে এটি ভুলবশত হয়েছে", "लाइन पर रहकर बताना कि यह गलती से हुआ"]
    ],a:3
  },
  {
    cat:"emergency-sos",
    q:["Which phone setting may help an emergency helper see essential information from the lock screen?", "লক স্ক্রিন থেকে জরুরি তথ্য দেখতে কোন ফোন সেটিং সাহায্য করতে পারে?", "लॉक स्क्रीन से जरूरी जानकारी देखने में कौन-सी फोन सेटिंग मदद कर सकती है?"],
    o:[
      ["Emergency information or Medical ID", "Emergency Information বা Medical ID", "Emergency Information या Medical ID"],
      ["Developer options", "ডেভেলপার অপশন", "डेवलपर विकल्प"],
      ["Battery usage history", "ব্যাটারি ব্যবহারের ইতিহাস", "बैटरी उपयोग इतिहास"],
      ["Display refresh rate", "ডিসপ্লে রিফ্রেশ রেট", "डिस्प्ले रिफ्रेश रेट"]
    ],a:0
  },
  {
    cat:"emergency-sos",
    q:["What is the safest action if your phone is stolen?", "ফোন চুরি হলে সবচেয়ে নিরাপদ পদক্ষেপ কী?", "फोन चोरी होने पर सबसे सुरक्षित कदम क्या है?"],
    o:[
      ["Chase the thief immediately", "সঙ্গে সঙ্গে চোরের পিছু নেওয়া", "तुरंत चोर का पीछा करना"],
      ["Avoid confrontation and secure the phone remotely", "মুখোমুখি সংঘর্ষ এড়িয়ে দূর থেকে ফোন সুরক্ষিত করা", "सामना करने से बचकर दूर से फोन सुरक्षित करना"],
      ["Ask strangers to recover it", "অপরিচিতদের ফোন ফেরত আনতে বলা", "अजनबियों से फोन वापस लाने को कहना"],
      ["Wait several days before acting", "কয়েক দিন অপেক্ষা করা", "कई दिन इंतजार करना"]
    ],a:1
  },
  {
    cat:"emergency-sos",
    q:["When should you use the remote erase option for a stolen phone?", "চুরি হওয়া ফোনে Remote Erase কখন ব্যবহার করা উচিত?", "चोरी हुए फोन में Remote Erase का उपयोग कब करना चाहिए?"],
    o:[
      ["Whenever the phone is temporarily offline", "ফোন সাময়িক অফলাইনে থাকলেই", "फोन कुछ समय ऑफलाइन हो तो"],
      ["Before trying to lock or locate the phone", "ফোন লক বা খোঁজার চেষ্টার আগেই", "फ़ोन लॉक या खोजने की कोशिश से पहले"],
      ["When recovery seems unlikely, knowing tracking will stop", "উদ্ধারের আশা কম হলে, ট্র্যাকিং বন্ধ হবে জেনেই", "जब वापसी की उम्मीद कम हो, यह जानते हुए कि ट्रैकिंग बंद हो जाएगी"],
      ["Every time you forget your screen PIN or password", "স্ক্রিন পিন বা পাসওয়ার্ড ভুলে গেলেই প্রতিবার", "स्क्रीन पिन या पासवर्ड भूलने पर हर बार"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["Which action helps block a lost or stolen phone on mobile networks?", "হারানো বা চুরি যাওয়া ফোন মোবাইল নেটওয়ার্কে ব্লক করতে কোন পদক্ষেপ সাহায্য করে?", "खोए या चोरी हुए फोन को मोबाइल नेटवर्क पर ब्लॉक करने में कौन-सा कदम मदद करता है?"],
    o:[
      ["Wait until the battery runs out completely", "ব্যাটারি পুরোপুরি শেষ হওয়া পর্যন্ত অপেক্ষা করা", "बैटरी पूरी खत्म होने तक इंतज़ार करना"],
      ["Only change your social media password", "শুধু সোশ্যাল মিডিয়ার পাসওয়ার্ড বদলানো", "केवल सोशल मीडिया का पासवर्ड बदलना"],
      ["Ask a stranger to switch it off for you", "কোনো অপরিচিতকে ফোনটি বন্ধ করে দিতে বলা", "किसी अनजान से फ़ोन बंद करवाने को कहना"],
      ["Report it to your mobile operator with its IMEI", "ফোনের IMEI-সহ মোবাইল অপারেটরকে জানানো", "फ़ोन के IMEI के साथ मोबाइल ऑपरेटर को बताना"]
    ],a:3
  },

  // ===== Financial Literacy & Money Management =====
  {
    cat:"money-management",
    q:["Which choice lists the basic parts of everyday money management?", "দৈনন্দিন অর্থ ব্যবস্থাপনার মূল অংশগুলো কোন বিকল্পে ঠিকভাবে আছে?", "रोज़मर्रा के धन प्रबंधन के मूल हिस्से किस विकल्प में सही दिए गए हैं?"],
    o:[
      ["Earn, spend, save and borrow", "আয়, খরচ, সঞ্চয় ও ধার", "कमाना, खर्च करना, बचाना और उधार लेना"],
      ["Earn, hide, forget and ignore", "আয়, লুকানো, ভুলে যাওয়া ও অবহেলা", "कमाना, छिपाना, भूल जाना और अनदेखा करना"],
      ["Borrow, gamble, spend and hide", "ধার, জুয়া, খরচ ও লুকানো", "उधार, जुआ, खर्च और छिपाना"],
      ["Spend, avoid records and skip saving", "খরচ, হিসাব না রাখা ও সঞ্চয় বাদ দেওয়া", "खर्च, हिसाब न रखना और बचत छोड़ देना"]
    ],a:0
  },
  {
    cat:"money-management",
    q:["What should generally be listed first in a monthly household budget?", "মাসিক পারিবারিক বাজেটে সাধারণত প্রথমে কী তালিকাভুক্ত করা উচিত?", "मासिक घरेलू बजट में सामान्यतः सबसे पहले क्या सूचीबद्ध करना चाहिए?"],
    o:[
      ["Entertainment subscriptions", "বিনোদনের সাবস্ক্রিপশন", "मनोरंजन सदस्यताएँ"],
      ["Essential needs and fixed obligations", "অপরিহার্য প্রয়োজন ও নির্দিষ্ট দায়", "जरूरी जरूरतें और निश्चित देनदारियाँ"],
      ["Optional shopping", "ঐচ্ছিক কেনাকাটা", "वैकल्पिक खरीदारी"],
      ["Gifts and celebrations", "উপহার ও অনুষ্ঠান", "उपहार और समारोह"]
    ],a:1
  },
  {
    cat:"money-management",
    q:["Why is it useful to compare planned expenses with actual expenses?", "পরিকল্পিত খরচের সঙ্গে প্রকৃত খরচ তুলনা করা কেন উপকারী?", "नियोजित खर्च की वास्तविक खर्च से तुलना करना क्यों उपयोगी है?"],
    o:[
      ["To remove all savings from the plan", "পরিকল্পনা থেকে সব সঞ্চয় বাদ দেওয়ার জন্য", "योजना से सारी बचत हटाने के लिए"],
      ["To increase every expense next month", "পরের মাসে প্রতিটি খরচ বাড়ানোর জন্য", "अगले महीने हर खर्च बढ़ाने के लिए"],
      ["To spot differences and adjust the budget", "পার্থক্য খুঁজে বাজেট ঠিক করার জন্য", "अंतर पहचानकर बजट सुधारने के लिए"],
      ["To avoid recording small purchases", "ছোট কেনাকাটা লিখে না রাখার জন্য", "छोटी खरीदारी दर्ज न करने के लिए"]
    ],a:2
  },
  {
    cat:"money-management",
    q:["What is the main purpose of an emergency fund?", "জরুরি তহবিলের প্রধান উদ্দেশ্য কী?", "आपातकालीन निधि का मुख्य उद्देश्य क्या है?"],
    o:[
      ["To finance routine luxury purchases", "নিয়মিত বিলাসী কেনাকাটা করা", "नियमित विलासिता की खरीदारी करना"],
      ["To replace monthly income permanently", "স্থায়ীভাবে মাসিক আয়ের বদলি হওয়া", "स्थायी रूप से मासिक आय का विकल्प बनना"],
      ["To increase borrowing capacity", "ঋণ নেওয়ার ক্ষমতা বাড়ানো", "उधार लेने की क्षमता बढ़ाना"],
      ["To meet unexpected expenses without immediate borrowing", "হঠাৎ খরচে সঙ্গে সঙ্গে ঋণ না নিয়ে সামলানো", "अचानक खर्चों को तुरंत उधार लिए बिना पूरा करना"]
    ],a:3
  },
  {
    cat:"money-management",
    q:["Which is a better approach to savings?", "সঞ্চয়ের ক্ষেত্রে কোন পদ্ধতি ভালো?", "बचत के लिए कौन-सा तरीका बेहतर है?"],
    o:[
      ["Set aside a planned amount regularly, even if small", "অল্প হলেও নিয়মিত নির্দিষ্ট টাকা সরিয়ে রাখা", "कम राशि हो तब भी नियमित रूप से तय रकम अलग रखना"],
      ["Save only when all optional spending is finished", "সব ঐচ্ছিক খরচের পরে সঞ্চয় করা", "सभी वैकल्पिक खर्चों के बाद ही बचत करना"],
      ["Keep all savings in cash at home", "সব সঞ্চয় বাড়িতে নগদ রাখা", "सारी बचत घर में नकद रखना"],
      ["Borrow to show a higher savings balance", "সঞ্চয় বেশি দেখাতে ঋণ নেওয়া", "बचत अधिक दिखाने के लिए उधार लेना"]
    ],a:0
  },
  {
    cat:"money-management",
    q:["What is the main difference between needs and wants in a budget?", "বাজেটে প্রয়োজন ও ইচ্ছার মধ্যে প্রধান পার্থক্য কী?", "बजट में जरूरत और इच्छा के बीच मुख्य अंतर क्या है?"],
    o:[
      ["Needs are always more expensive", "প্রয়োজন সবসময় বেশি দামি", "जरूरतें हमेशा महँगी होती हैं"],
      ["Wants must be paid before needs", "ইচ্ছা আগে পূরণ করতে হয়", "इच्छाएँ पहले पूरी करनी चाहिए"],
      ["Needs are essential; wants are optional preferences", "প্রয়োজন অপরিহার্য; ইচ্ছা ঐচ্ছিক পছন্দ", "जरूरतें अनिवार्य हैं; इच्छाएँ वैकल्पिक पसंद हैं"],
      ["Both categories have identical priority", "দুইটির অগ্রাধিকার একই", "दोनों की प्राथमिकता समान है"]
    ],a:2
  },
  {
    cat:"money-management",
    q:["What is a practical way to control household expenses?", "পারিবারিক খরচ নিয়ন্ত্রণের বাস্তবসম্মত উপায় কী?", "घरेलू खर्च नियंत्रित करने का व्यावहारिक तरीका क्या है?"],
    o:[
      ["Record spending and review categories regularly", "খরচ লিখে নিয়মিত বিভাগভিত্তিক পর্যালোচনা করা", "खर्च लिखकर नियमित रूप से श्रेणियों की समीक्षा करना"],
      ["Stop recording small purchases", "ছোট কেনাকাটার হিসাব না রাখা", "छोटी खरीदारी का हिसाब न रखना"],
      ["Use credit for every purchase", "প্রতিটি কেনাকাটায় ক্রেডিট ব্যবহার করা", "हर खरीदारी में क्रेडिट इस्तेमाल करना"],
      ["Ignore irregular expenses", "অনিয়মিত খরচ উপেক্ষা করা", "अनियमित खर्चों को अनदेखा करना"]
    ],a:0
  },
  {
    cat:"money-management",
    q:["Why is it useful to keep a record of income and expenses?", "আয় ও খরচের হিসাব রাখা কেন উপকারী?", "आय और खर्च का रिकॉर्ड रखना क्यों उपयोगी है?"],
    o:[
      ["It helps understand cash flow and plan spending", "টাকার আসা-যাওয়া বুঝে খরচ পরিকল্পনা করতে সাহায্য করে", "पैसे के आवागमन को समझकर खर्च की योजना बनाने में मदद करता है"],
      ["It automatically increases income", "স্বয়ংক্রিয়ভাবে আয় বাড়ায়", "यह अपने आप आय बढ़ाता है"],
      ["It removes the need for savings", "সঞ্চয়ের প্রয়োজন দূর করে", "बचत की जरूरत समाप्त करता है"],
      ["It guarantees credit approval", "ঋণ অনুমোদন নিশ্চিত করে", "क्रेडिट मंजूरी की गारंटी देता है"]
    ],a:0
  },
  {
    cat:"money-management",
    q:["What should be done with an unexpected financial windfall?", "হঠাৎ অতিরিক্ত টাকা পেলে কী করা উচিত?", "अचानक अतिरिक्त धन मिलने पर क्या करना चाहिए?"],
    o:[
      ["Spend it all on celebrations immediately", "সঙ্গে সঙ্গে উৎসবে সব খরচ করে ফেলা", "तुरंत उत्सव में सब कुछ खर्च कर देना"],
      ["Review debts, needs and savings goals first", "আগে ঋণ, প্রয়োজন ও সঞ্চয়ের লক্ষ্য খতিয়ে দেখা", "पहले कर्ज़, ज़रूरतों और बचत लक्ष्यों की समीक्षा करना"],
      ["Lend it to a caller who asks urgently", "জরুরি বলে চাওয়া ফোনকারীকে ধার দেওয়া", "जल्दी बताकर माँगने वाले कॉलर को उधार देना"],
      ["Invest it only because someone promises returns", "কারও লাভের প্রতিশ্রুতিতে বিনিয়োগ করা", "किसी के मुनाफे के वादे पर ही निवेश करना"]
    ],a:1
  },
  {
    cat:"money-management",
    q:["What is the most useful reason to keep an emergency fund separate?", "জরুরি তহবিল আলাদা রাখার সবচেয়ে উপযোগী কারণ কী?", "आपातकालीन निधि अलग रखने का सबसे उपयोगी कारण क्या है?"],
    o:[
      ["It earns a guaranteed high return", "নিশ্চিত বেশি লাভ দেয়", "निश्चित अधिक लाभ देती है"],
      ["It removes all financial risk", "সব আর্থিক ঝুঁকি দূর করে", "सभी वित्तीय जोखिम समाप्त करती है"],
      ["It remains available for unexpected needs", "অপ্রত্যাশিত প্রয়োজনে ব্যবহার করা যায়", "अचानक जरूरतों के लिए उपलब्ध रहती है"],
      ["It replaces health and life insurance", "স্বাস্থ্য ও জীবন বিমার বদলি হয়", "स्वास्थ्य और जीवन बीमा का विकल्प बनती है"]
    ],a:2
  },

  // ===== Banking, Insurance & Digital Payments =====
  {
    cat:"banking-insurance",
    q:["What is the safest practice when using a mobile banking app?", "মোবাইল ব্যাংকিং অ্যাপ ব্যবহারের নিরাপদ অভ্যাস কোনটি?", "मोबाइल बैंकिंग ऐप इस्तेमाल करने की सुरक्षित आदत क्या है?"],
    o:[
      ["Use the official app and check the recipient before confirming", "অফিসিয়াল অ্যাপ ব্যবহার করে নিশ্চিত করার আগে প্রাপক যাচাই করা", "आधिकारिक ऐप इस्तेमाल करके पुष्टि से पहले प्राप्तकर्ता जाँचना"],
      ["Install apps from forwarded links", "ফরোয়ার্ড করা লিংক থেকে অ্যাপ ইনস্টল করা", "फॉरवर्ड किए गए लिंक से ऐप इंस्टॉल करना"],
      ["Keep the PIN in the contact list", "কন্ট্যাক্টে PIN রাখা", "कॉन्टैक्ट सूची में PIN रखना"],
      ["Allow unknown people to operate the app", "অপরিচিতদের অ্যাপ চালাতে দেওয়া", "अजनबियों को ऐप चलाने देना"]
    ],a:0
  },
  {
    cat:"banking-insurance",
    q:["What does borrowing money usually involve?", "ঋণ নেওয়ার ক্ষেত্রে সাধারণত কী জড়িত থাকে?", "पैसे उधार लेने में सामान्यतः क्या शामिल होता है?"],
    o:[
      ["A permanent grant without conditions", "শর্তহীন স্থায়ী অনুদান", "बिना शर्त स्थायी अनुदान"],
      ["Repayment, often with interest or other costs", "পরিশোধ, প্রায়ই সুদ বা অন্যান্য খরচসহ", "वापसी, अक्सर ब्याज या अन्य लागत के साथ"],
      ["An automatic increase in income", "স্বয়ংক্রিয় আয় বৃদ্ধি", "आय में स्वतः वृद्धि"],
      ["No obligation after receiving funds", "টাকা পাওয়ার পর কোনো দায় নেই", "राशि मिलने के बाद कोई जिम्मेदारी नहीं"]
    ],a:1
  },
  {
    cat:"banking-insurance",
    q:["Why should you check the recipient's name before making a digital payment?", "ডিজিটাল পেমেন্টের আগে প্রাপকের নাম কেন যাচাই করবেন?", "डिजिटल भुगतान से पहले प्राप्तकर्ता का नाम क्यों जाँचना चाहिए?"],
    o:[
      ["To make the payment a little faster", "পেমেন্ট একটু দ্রুত করার জন্য", "भुगतान थोड़ा तेज़ करने के लिए"],
      ["To raise the transaction fee you pay", "আপনার দেওয়া লেনদেন ফি বাড়ানোর জন্য", "आपके दिए लेनदेन शुल्क को बढ़ाने के लिए"],
      ["To avoid sending money to the wrong person", "ভুল ব্যক্তিকে টাকা পাঠানো এড়াতে", "गलत व्यक्ति को पैसे भेजने से बचने के लिए"],
      ["To avoid saving the payment receipt", "পেমেন্টের রসিদ সংরক্ষণ না করার জন্য", "भुगतान की रसीद सुरक्षित न रखने के लिए"]
    ],a:2
  },
  {
    cat:"banking-insurance",
    q:["What is the general purpose of naming a beneficiary or nominee on a financial account, where permitted?", "যেখানে অনুমোদিত, আর্থিক অ্যাকাউন্টে নমিনি বা সুবিধাভোগীর নাম রাখার সাধারণ উদ্দেশ্য কী?", "जहाँ अनुमति हो, वित्तीय खाते में नामांकित व्यक्ति या लाभार्थी का नाम दर्ज करने का सामान्य उद्देश्य क्या है?"],
    o:[
      ["Operate the account every day automatically", "প্রতিদিন স্বয়ংক্রিয়ভাবে অ্যাকাউন্ট চালানো", "हर दिन स्वतः खाता चलाना"],
      ["Replace the account holder immediately", "সঙ্গে সঙ্গে অ্যাকাউন্টধারীর বদলি হওয়া", "तुरंत खाताधारक की जगह लेना"],
      ["Guarantee that a loan will be approved", "ঋণ যে অনুমোদিত হবে তার নিশ্চয়তা দেওয়া", "ऋण मंज़ूर होने की निश्चित गारंटी देना"],
      ["Name who may receive the funds under local rules", "স্থানীয় নিয়ম অনুযায়ী কারা অর্থ পেতে পারেন তা নির্দিষ্ট করা", "स्थानीय नियमों के अनुसार धन पाने वाले को नामित करना"]
    ],a:3
  },
  {
    cat:"banking-insurance",
    q:["What should you do if a bank message asks you to update KYC through an unfamiliar link?", "অপরিচিত লিংকে KYC আপডেট করতে ব্যাংকের বার্তা এলে কী করবেন?", "अनजान लिंक से KYC अपडेट करने का बैंक संदेश आए तो क्या करेंगे?"],
    o:[
      ["Enter details but skip the PIN", "তথ্য দিয়ে PIN বাদ দেওয়া", "जानकारी भरकर PIN छोड़ देना"],
      ["Verify through the bank's official website or branch", "ব্যাংকের অফিসিয়াল ওয়েবসাইট বা শাখায় যাচাই করা", "बैंक की आधिकारिक वेबसाइट या शाखा से पुष्टि करना"],
      ["Forward the link to a colleague", "সহকর্মীকে লিংক পাঠানো", "सहकर्मी को लिंक भेजना"],
      ["Use the link only on a computer", "শুধু কম্পিউটারে লিংক খোলা", "लिंक केवल कंप्यूटर पर खोलना"]
    ],a:1
  },
  {
    cat:"banking-insurance",
    q:["Why should loan terms be read before signing?", "ঋণে সই করার আগে শর্ত পড়া কেন জরুরি?", "ऋण पर हस्ताक्षर करने से पहले शर्तें पढ़ना क्यों जरूरी है?"],
    o:[
      ["To avoid knowing the repayment date", "পরিশোধের তারিখ না জানার জন্য", "वापसी की तारीख न जानने के लिए"],
      ["To agree to any fee mentioned later", "পরে উল্লেখ করা যেকোনো ফি মেনে নেওয়ার জন্য", "बाद में बताई गई किसी भी फीस को मानने के लिए"],
      ["To obtain a guaranteed waiver", "নিশ্চিত ঋণ মকুব পেতে", "निश्चित ऋण माफी पाने के लिए"],
      ["To understand interest, fees, instalments and obligations", "সুদ, ফি, কিস্তি ও দায় বুঝতে", "ब्याज, शुल्क, किस्त और जिम्मेदारियाँ समझने के लिए"]
    ],a:3
  },
  {
    cat:"banking-insurance",
    q:["What should you verify before buying an insurance policy?", "বিমা পলিসি কেনার আগে কী যাচাই করা উচিত?", "बीमा पॉलिसी खरीदने से पहले क्या जाँचना चाहिए?"],
    o:[
      ["Only the agent's personal recommendation", "শুধু এজেন্টের ব্যক্তিগত পরামর্শ", "केवल एजेंट की निजी सलाह"],
      ["Coverage, exclusions, premium, eligibility and claim process", "কভারেজ, বাদ পড়া বিষয়, প্রিমিয়াম, যোগ্যতা ও দাবি প্রক্রিয়া", "कवरेज, अपवाद, प्रीमियम, पात्रता और दावा प्रक्रिया"],
      ["Only the first year's premium", "শুধু প্রথম বছরের প্রিমিয়াম", "केवल पहले वर्ष का प्रीमियम"],
      ["The policy's advertisement design", "পলিসির বিজ্ঞাপনের নকশা", "पॉलिसी के विज्ञापन का डिज़ाइन"]
    ],a:1
  },
  {
    cat:"banking-insurance",
    q:["Where permitted by local rules, what is the purpose of naming a beneficiary on an insurance policy?", "স্থানীয় নিয়মে অনুমোদিত হলে, বিমা পলিসিতে নমিনি বা সুবিধাভোগীর নাম রাখার উদ্দেশ্য কী?", "स्थानीय नियमों के अनुसार अनुमति होने पर बीमा पॉलिसी में नामांकित व्यक्ति या लाभार्थी का नाम रखने का उद्देश्य क्या है?"],
    o:[
      ["To reduce the premium amount you pay", "প্রিমিয়ামের পরিমাণ কমানোর জন্য", "आपके प्रीमियम की राशि घटाने के लिए"],
      ["To become the insurer of the policy", "পলিসির বিমাকারী হওয়ার জন্য", "पॉलिसी का बीमाकर्ता बनने के लिए"],
      ["To name who may receive the policy benefits", "পলিসির সুবিধা কারা পেতে পারেন তা নির্দিষ্ট করার জন্য", "पॉलिसी का लाभ किसे मिल सकता है, यह नामित करने के लिए"],
      ["To remove all exclusions from the policy", "পলিসির সব বর্জন-শর্ত তুলে দেওয়ার জন্য", "पॉलिसी की सभी अपवर्जन शर्तें हटाने के लिए"]
    ],a:2
  },
  {
    cat:"banking-insurance",
    q:["What should you do when you receive a suspicious loan approval message?", "সন্দেহজনক ঋণ অনুমোদনের বার্তা পেলে কী করবেন?", "संदिग्ध ऋण मंजूरी का संदेश मिले तो क्या करेंगे?"],
    o:[
      ["Pay the processing fee immediately", "সঙ্গে সঙ্গে প্রসেসিং ফি দেওয়া", "तुरंत प्रोसेसिंग शुल्क देना"],
      ["Send OTP to the representative", "প্রতিনিধিকে OTP পাঠানো", "प्रतिनिधि को OTP भेजना"],
      ["Share your contacts to unlock the offer", "অফার খুলতে কন্ট্যাক্ট দেওয়া", "ऑफर खोलने के लिए कॉन्टैक्ट देना"],
      ["Verify the lender independently and avoid advance-fee pressure", "ঋণদাতাকে নিজে যাচাই করে আগাম ফি দেওয়ার চাপ এড়ানো", "ऋणदाता की स्वतंत्र जाँच करके अग्रिम शुल्क के दबाव से बचना"]
    ],a:3
  },
  {
    cat:"banking-insurance",
    q:["Which action best protects your debit card details?", "ডেবিট কার্ডের তথ্য সুরক্ষার ভালো উপায় কোনটি?", "डेबिट कार्ड की जानकारी सुरक्षित रखने का बेहतर तरीका क्या है?"],
    o:[
      ["Write the PIN on the card", "কার্ডে PIN লিখে রাখা", "कार्ड पर PIN लिखना"],
      ["Share card details with a caller who knows your name", "নাম জানে এমন ফোনকারীকে তথ্য দেওয়া", "नाम जानने वाले कॉलर को विवरण देना"],
      ["Send a photo of both sides to a friend", "বন্ধুকে কার্ডের দুই দিকের ছবি পাঠানো", "दोस्त को कार्ड के दोनों तरफ की तस्वीर भेजना"],
      ["Keep the PIN secret and use trusted payment channels", "PIN গোপন রাখা ও বিশ্বস্ত পেমেন্ট মাধ্যম ব্যবহার করা", "PIN गोपनीय रखना और विश्वसनीय भुगतान माध्यम इस्तेमाल करना"]
    ],a:3
  },

  // ===== Entrepreneurship & Home-Based Business =====
  {
    cat:"home-business",
    q:["What is a sensible first step before starting a home-based business?", "ঘরে বসে ব্যবসা শুরু করার আগে ভালো প্রথম পদক্ষেপ কী?", "घर से व्यवसाय शुरू करने से पहले उचित पहला कदम क्या है?"],
    o:[
      ["Identify a skill, local demand and possible starting cost", "দক্ষতা, স্থানীয় চাহিদা ও প্রাথমিক খরচ বোঝা", "कौशल, स्थानीय माँग और शुरुआती लागत पहचानना"],
      ["Buy large quantities of materials immediately", "সঙ্গে সঙ্গে প্রচুর উপকরণ কেনা", "तुरंत बड़ी मात्रा में सामग्री खरीदना"],
      ["Rent a shop before testing demand", "চাহিদা যাচাইয়ের আগেই দোকান ভাড়া নেওয়া", "माँग जाँचे बिना दुकान किराए पर लेना"],
      ["Borrow the maximum amount available", "সর্বোচ্চ পরিমাণ ঋণ নেওয়া", "उपलब्ध अधिकतम ऋण लेना"]
    ],a:0
  },
  {
    cat:"home-business",
    q:["Which set of costs should be considered when pricing a product?", "পণ্যের দাম ঠিক করার সময় কোন খরচগুলি বিবেচনা করা উচিত?", "उत्पाद का मूल्य तय करते समय किन लागतों पर विचार करना चाहिए?"],
    o:[
      ["Only the cost of the raw materials used", "শুধু ব্যবহৃত কাঁচামালের খরচ", "केवल उपयोग हुए कच्चे माल की लागत"],
      ["Materials, transport, time and a fair profit", "উপকরণ, পরিবহন, সময় ও ন্যায্য লাভ", "सामग्री, परिवहन, समय और उचित लाभ"],
      ["Only the competitor's lowest price", "শুধু প্রতিযোগীর সর্বনিম্ন দাম", "केवल प्रतिस्पर्धी की सबसे कम कीमत"],
      ["Only the packaging and delivery cost", "শুধু প্যাকেজিং ও ডেলিভারির খরচ", "केवल पैकेजिंग और डिलीवरी की लागत"]
    ],a:1
  },
  {
    cat:"home-business",
    q:["Why should a small business keep a sales and expense notebook?", "ছোট ব্যবসায় বিক্রি ও খরচের খাতা রাখা কেন দরকার?", "छोटे व्यवसाय में बिक्री और खर्च की कॉपी रखना क्यों जरूरी है?"],
    o:[
      ["To avoid calculating profit", "লাভ হিসাব না করতে", "लाभ की गणना से बचने के लिए"],
      ["To replace customer feedback", "গ্রাহকের মতামতের বদলি করতে", "ग्राहक प्रतिक्रिया का विकल्प बनने के लिए"],
      ["To understand costs, sales and actual profit", "খরচ, বিক্রি ও প্রকৃত লাভ বুঝতে", "लागत, बिक्री और वास्तविक लाभ समझने के लिए"],
      ["To guarantee more orders", "বেশি অর্ডার নিশ্চিত করতে", "अधिक ऑर्डर की गारंटी देने के लिए"]
    ],a:2
  },
  {
    cat:"home-business",
    q:["What is a good way to find the first customers for a home business?", "ঘরোয়া ব্যবসার প্রথম গ্রাহক খোঁজার ভালো উপায় কী?", "घरेलू व्यवसाय के पहले ग्राहक खोजने का अच्छा तरीका क्या है?"],
    o:[
      ["Wait for customers without advertising", "প্রচার ছাড়া অপেক্ষা করা", "बिना प्रचार ग्राहकों की प्रतीक्षा करना"],
      ["Buy followers on social media", "সোশ্যাল মিডিয়ায় ফলোয়ার কেনা", "सोशल मीडिया पर फॉलोअर खरीदना"],
      ["Send unsolicited payment links to strangers", "অপরিচিতদের অনাহূত পেমেন্ট লিংক পাঠানো", "अजनबियों को बिना माँगे भुगतान लिंक भेजना"],
      ["Inform neighbours and friends and share clear product details", "প্রতিবেশী ও বন্ধুদের জানিয়ে পণ্যের স্পষ্ট তথ্য দেওয়া", "पड़ोसियों और मित्रों को बताकर उत्पाद की स्पष्ट जानकारी साझा करना"]
    ],a:3
  },
  {
    cat:"home-business",
    q:["What is a reasonable approach to a large customised order?", "বড় কাস্টম অর্ডারের ক্ষেত্রে যুক্তিসঙ্গত পদ্ধতি কী?", "बड़े कस्टम ऑर्डर के लिए उचित तरीका क्या है?"],
    o:[
      ["Agree on specifications, price and an advance payment if appropriate", "বিবরণ, দাম ও প্রয়োজনে অগ্রিম টাকা ঠিক করা", "विवरण, कीमत और उचित होने पर अग्रिम भुगतान तय करना"],
      ["Start work without confirming the price", "দাম নিশ্চিত না করেই কাজ শুরু করা", "कीमत तय किए बिना काम शुरू करना"],
      ["Ask for the full payment after delivery only", "শুধু ডেলিভারির পর পুরো টাকা চাওয়া", "केवल डिलीवरी के बाद पूरा भुगतान माँगना"],
      ["Avoid giving any written details", "কোনো লিখিত বিবরণ না দেওয়া", "कोई लिखित विवरण न देना"]
    ],a:0
  },
  {
    cat:"home-business",
    q:["Which home-based activity is an example of a skill-based service?", "ঘরে বসে করা কোন কাজটি দক্ষতাভিত্তিক পরিষেবার উদাহরণ?", "घर से किया जाने वाला कौन-सा काम कौशल आधारित सेवा का उदाहरण है?"],
    o:[
      ["Buying goods only for personal use", "শুধু নিজের জন্য জিনিস কেনা", "केवल निजी उपयोग के लिए सामान खरीदना"],
      ["Tutoring or language classes", "টিউশন বা ভাষার ক্লাস", "ट्यूशन या भाषा कक्षाएँ"],
      ["Keeping unused materials in storage", "অব্যবহৃত উপকরণ জমিয়ে রাখা", "अनुपयोगी सामग्री जमा रखना"],
      ["Waiting for a guaranteed online prize", "নিশ্চিত অনলাইন পুরস্কারের অপেক্ষা করা", "निश्चित ऑनलाइन पुरस्कार की प्रतीक्षा करना"]
    ],a:1
  },
  {
    cat:"home-business",
    q:["How can a small seller improve repeat orders?", "ছোট বিক্রেতা কীভাবে পুনরায় অর্ডার পাওয়ার সম্ভাবনা বাড়াতে পারেন?", "छोटा विक्रेता दोबारा ऑर्डर मिलने की संभावना कैसे बढ़ा सकता है?"],
    o:[
      ["Change prices without informing customers", "না জানিয়ে দাম বদলানো", "बिना बताए कीमत बदलना"],
      ["Promise delivery dates that cannot be met", "পালন করা যাবে না এমন ডেলিভারি প্রতিশ্রুতি দেওয়া", "ऐसी डिलीवरी तारीख का वादा करना जिसे निभा न सकें"],
      ["Avoid responding to customer questions", "গ্রাহকের প্রশ্নের উত্তর না দেওয়া", "ग्राहक के सवालों का जवाब न देना"],
      ["Maintain quality, clear communication and reliable delivery", "মান, স্পষ্ট যোগাযোগ ও নির্ভরযোগ্য ডেলিভারি বজায় রাখা", "गुणवत्ता, स्पष्ट संवाद और भरोसेमंद डिलीवरी बनाए रखना"]
    ],a:3
  },
  {
    cat:"home-business",
    q:["What is a sensible way to handle money earned from each sale?", "প্রতিটি বিক্রি থেকে পাওয়া টাকা সামলানোর ভালো উপায় কী?", "हर बिक्री से मिली रकम संभालने का उचित तरीका क्या है?"],
    o:[
      ["Separate business costs, savings and personal spending", "ব্যবসার খরচ, সঞ্চয় ও ব্যক্তিগত খরচ আলাদা রাখা", "व्यवसाय की लागत, बचत और निजी खर्च अलग रखना"],
      ["Spend all receipts immediately", "সব প্রাপ্ত টাকা সঙ্গে সঙ্গে খরচ করা", "सारी प्राप्त राशि तुरंत खर्च करना"],
      ["Mix all funds without recording", "হিসাব ছাড়া সব টাকা মিশিয়ে রাখা", "बिना रिकॉर्ड सभी पैसे मिलाना"],
      ["Borrow more whenever sales increase", "বিক্রি বাড়লেই আরও ঋণ নেওয়া", "बिक्री बढ़ते ही और उधार लेना"]
    ],a:0
  },
  {
    cat:"home-business",
    q:["Which is a warning sign in a work-from-home offer?", "ঘরে বসে কাজের প্রস্তাবে কোনটি সতর্কতার লক্ষণ?", "घर से काम के प्रस्ताव में कौन-सा चेतावनी संकेत है?"],
    o:[
      ["A clear task description and timeline", "স্পষ্ট কাজের বিবরণ ও সময়সীমা", "काम का स्पष्ट विवरण और समय-सीमा"],
      ["A registration fee demanded by a stranger", "অপরিচিতের চাওয়া নিবন্ধন ফি", "किसी अनजान द्वारा माँगा गया पंजीकरण शुल्क"],
      ["A verifiable company name and address", "যাচাইযোগ্য কোম্পানির নাম ও ঠিকানা", "जाँचने योग्य कंपनी का नाम और पता"],
      ["A written payment schedule for the work", "কাজের জন্য লিখিত পেমেন্ট সূচি", "काम के लिए लिखित भुगतान कार्यक्रम"]
    ],a:1
  },
  {
    cat:"home-business",
    q:["Why should a business compare quality as well as price?", "ব্যবসায় শুধু দাম নয়, মানও তুলনা করা কেন দরকার?", "व्यवसाय में केवल कीमत नहीं, गुणवत्ता की तुलना भी क्यों जरूरी है?"],
    o:[
      ["The lowest price always guarantees quality", "সবচেয়ে কম দামেই মান নিশ্চিত হয়", "सबसे कम कीमत गुणवत्ता की गारंटी देती है"],
      ["Quality does not affect customer trust", "মান গ্রাহকের বিশ্বাসে প্রভাব ফেলে না", "गुणवत्ता ग्राहक के भरोसे को प्रभावित नहीं करती"],
      ["A fair price should reflect value and customer expectations", "ন্যায্য দাম পণ্যের মূল্য ও গ্রাহকের প্রত্যাশার সঙ্গে সামঞ্জস্যপূর্ণ হওয়া উচিত", "उचित कीमत उत्पाद के मूल्य और ग्राहक की अपेक्षाओं के अनुरूप होनी चाहिए"],
      ["Price comparison is unnecessary for small sellers", "ছোট বিক্রেতার দাম তুলনার দরকার নেই", "छोटे विक्रेता को कीमत की तुलना की जरूरत नहीं"]
    ],a:2
  },

  // ===== Public Support Schemes & Community Groups =====
  {
    cat:"public-support-community",
    q:["What should you do before joining a community savings group?", "কমিউনিটি সঞ্চয় গোষ্ঠীতে যোগ দেওয়ার আগে কী করা উচিত?", "सामुदायिक बचत समूह से जुड़ने से पहले क्या करना चाहिए?"],
    o:[
      ["Join immediately to avoid missing out", "সুযোগ হারানোর ভয়ে সঙ্গে সঙ্গে যোগ দেওয়া", "अवसर छूटने के डर से तुरंत जुड़ना"],
      ["Check only the group's social media photos", "শুধু গোষ্ঠীর সোশ্যাল মিডিয়ার ছবি দেখা", "केवल समूह की सोशल मीडिया तस्वीरें देखना"],
      ["Understand membership rules, savings, meetings and loan terms", "সদস্যপদের নিয়ম, সঞ্চয়, সভা ও ঋণের শর্ত বোঝা", "सदस्यता नियम, बचत, बैठकें और ऋण की शर्तें समझना"],
      ["Pay a large entry fee before asking questions", "প্রশ্ন করার আগেই বড় প্রবেশ ফি দেওয়া", "प्रश्न पूछने से पहले बड़ी प्रवेश फीस देना"]
    ],a:2
  },
  {
    cat:"public-support-community",
    q:["What is a useful way for women entrepreneurs to reduce material costs?", "মহিলা উদ্যোক্তাদের উপকরণের খরচ কমানোর উপায় কী?", "महिला उद्यमियों के लिए सामग्री लागत कम करने का उपयोगी तरीका क्या है?"],
    o:[
      ["Buy from unknown sellers without checking", "যাচাই ছাড়া অচেনা বিক্রেতার কাছ থেকে কেনা", "बिना जाँच अनजान विक्रेता से खरीदना"],
      ["Reduce product quality without informing buyers", "না জানিয়ে পণ্যের মান কমানো", "बिना बताए उत्पाद की गुणवत्ता घटाना"],
      ["Stop maintaining stock records", "স্টকের হিসাব বন্ধ করা", "स्टॉक रिकॉर्ड रखना बंद करना"],
      ["Coordinate group purchases and compare reliable suppliers", "দলবদ্ধভাবে কেনা ও নির্ভরযোগ্য সরবরাহকারীর তুলনা করা", "सामूहिक खरीद और विश्वसनीय आपूर्तिकर्ताओं की तुलना करना"]
    ],a:3
  },
  {
    cat:"public-support-community",
    q:["What should you check before applying for a government support scheme?", "সরকারি সহায়তা প্রকল্পে আবেদন করার আগে কী যাচাই করবেন?", "सरकारी सहायता योजना में आवेदन करने से पहले क्या जाँचेंगे?"],
    o:[
      ["Eligibility, documents, deadlines and process", "যোগ্যতা, নথি, শেষ তারিখ ও আবেদন-প্রক্রিয়া", "पात्रता, दस्तावेज़, अंतिम तिथि और प्रक्रिया"],
      ["Only the scheme's popular name and slogan", "শুধু প্রকল্পের জনপ্রিয় নাম ও স্লোগান", "केवल योजना का लोकप्रिय नाम और नारा"],
      ["Only an agent's verbal guarantee of approval", "শুধু এজেন্টের মুখের অনুমোদন-নিশ্চয়তা", "केवल एजेंट की मौखिक मंज़ूरी की गारंटी"],
      ["The number of social media comments", "সোশ্যাল মিডিয়ার মন্তব্যের সংখ্যা", "सोशल मीडिया टिप्पणियों की संख्या"]
    ],a:0
  },
  {
    cat:"public-support-community",
    q:["Why should scheme information be checked on an official portal?", "সরকারি পোর্টালে প্রকল্পের তথ্য যাচাই করা কেন দরকার?", "आधिकारिक पोर्टल पर योजना की जानकारी जाँचना क्यों जरूरी है?"],
    o:[
      ["It guarantees immediate approval", "তাৎক্ষণিক অনুমোদন নিশ্চিত করে", "यह तुरंत मंजूरी की गारंटी देता है"],
      ["It helps confirm current rules and application details", "বর্তমান নিয়ম ও আবেদনের তথ্য নিশ্চিত করতে সাহায্য করে", "वर्तमान नियम और आवेदन विवरण की पुष्टि में मदद करता है"],
      ["It removes the need for eligibility checks", "যোগ্যতা যাচাইয়ের প্রয়োজন দূর করে", "पात्रता जाँच की जरूरत समाप्त करता है"],
      ["It guarantees benefits for every applicant", "প্রত্যেক আবেদনকারীকে সুবিধা নিশ্চিত করে", "हर आवेदक को लाभ की गारंटी देता है"]
    ],a:1
  },
  {
    cat:"public-support-community",
    q:["What is a common purpose of a community savings or self-help group?", "কমিউনিটি সঞ্চয় বা স্বনির্ভর গোষ্ঠীর একটি সাধারণ উদ্দেশ্য কী?", "सामुदायिक बचत या स्वयं-सहायता समूह का एक सामान्य उद्देश्य क्या है?"],
    o:[
      ["To keep savings hidden from members", "সদস্যদের কাছ থেকে সঞ্চয় লুকিয়ে রাখা", "सदस्यों से बचत छिपाकर रखना"],
      ["To make every member borrow the same amount", "প্রত্যেক সদস্যকে সমান ঋণ নিতে বাধ্য করা", "हर सदस्य को समान राशि उधार लेने पर बाध्य करना"],
      ["To encourage collective savings and mutual support", "সম্মিলিত সঞ্চয় ও পারস্পরিক সহায়তায় উৎসাহ দেওয়া", "सामूहिक बचत और आपसी सहयोग को प्रोत्साहित करना"],
      ["To replace all formal banking services", "সব আনুষ্ঠানিক ব্যাংকিং পরিষেবার বদলি হওয়া", "सभी औपचारिक बैंकिंग सेवाओं का स्थान लेना"]
    ],a:2
  },
  {
    cat:"public-support-community",
    q:["What should you do if an agent promises guaranteed approval of a government benefit for a fee?", "কোনো এজেন্ট ফি নিয়ে সরকারি সুবিধা নিশ্চিত করার প্রতিশ্রুতি দিলে কী করবেন?", "कोई एजेंट शुल्क लेकर सरकारी लाभ की गारंटी दे तो क्या करेंगे?"],
    o:[
      ["Pay only half the fee and wait for approval", "অর্ধেক ফি দিয়ে অনুমোদনের অপেক্ষা করা", "आधी फीस देकर मंज़ूरी का इंतज़ार करना"],
      ["Share your OTP so the agent can verify eligibility", "এজেন্ট যোগ্যতা যাচাই করবে বলে OTP জানানো", "एजेंट पात्रता जाँचे इसलिए OTP बताना"],
      ["Give original documents to the agent as security", "জামানত হিসেবে এজেন্টকে আসল নথি দেওয়া", "ज़मानत के तौर पर एजेंट को मूल दस्तावेज़ देना"],
      ["Check the official process; do not pay the agent", "সরকারি প্রক্রিয়া যাচাই করা, এজেন্টকে টাকা না দেওয়া", "आधिकारिक प्रक्रिया जाँचना, एजेंट को पैसे न देना"]
    ],a:3
  },
  {
    cat:"public-support-community",
    q:["Which information is most useful when checking scheme eligibility?", "প্রকল্পের যোগ্যতা যাচাইয়ে কোন তথ্য সবচেয়ে কার্যকর?", "योजना की पात्रता जाँचने में कौन-सी जानकारी सबसे उपयोगी है?"],
    o:[
      ["Age, income, residence and other stated criteria", "বয়স, আয়, বাসস্থান ও নির্ধারিত অন্যান্য শর্ত", "आयु, आय, निवास और अन्य निर्धारित मानदंड"],
      ["The applicant's social media popularity", "আবেদনকারীর সোশ্যাল মিডিয়া জনপ্রিয়তা", "आवेदक की सोशल मीडिया लोकप्रियता"],
      ["The number of friends who applied", "কতজন বন্ধু আবেদন করেছেন", "कितने दोस्तों ने आवेदन किया"],
      ["The agent's preferred applicant list", "এজেন্টের পছন্দের তালিকা", "एजेंट की पसंदीदा सूची"]
    ],a:0
  },
  {
    cat:"public-support-community",
    q:["Why should you keep an acknowledgement after submitting an application?", "আবেদন জমা দেওয়ার পরে স্বীকৃতিপত্র রাখা কেন জরুরি?", "आवेदन जमा करने के बाद पावती रखना क्यों जरूरी है?"],
    o:[
      ["It guarantees approval", "অনুমোদন নিশ্চিত করে", "यह मंजूरी की गारंटी देता है"],
      ["It helps track the application and prove submission", "আবেদনের অবস্থা জানতে ও জমার প্রমাণ রাখতে সাহায্য করে", "आवेदन की स्थिति जानने और जमा करने का प्रमाण रखने में मदद करता है"],
      ["It replaces all supporting documents", "সব সহায়ক নথির বদলি হয়", "सभी सहायक दस्तावेजों का विकल्प बनती है"],
      ["It removes the need to meet deadlines", "সময়সীমা মানার প্রয়োজন দূর করে", "समय-सीमा का पालन करने की जरूरत हटाती है"]
    ],a:1
  },
  {
    cat:"public-support-community",
    q:["What should you do if a scheme's application deadline has passed?", "কোনো প্রকল্পের আবেদনের সময়সীমা পেরিয়ে গেলে কী করবেন?", "किसी योजना की आवेदन समय-सीमा समाप्त हो जाए तो क्या करेंगे?"],
    o:[
      ["Use an unofficial backdated form from an agent", "এজেন্টের কাছ থেকে তারিখ-পিছানো অননুমোদিত ফর্ম ব্যবহার করা", "एजेंट से पिछली तारीख़ का अनधिकृत फ़ॉर्म लेना"],
      ["Pay someone to change the date on the form", "ফর্মের তারিখ বদলাতে কাউকে টাকা দেওয়া", "फ़ॉर्म की तारीख़ बदलने के लिए किसी को पैसे देना"],
      ["Check officially for an extension or next window", "সময় বাড়ানো বা পরবর্তী পর্ব সরকারিভাবে ঘোষিত কি না দেখা", "आधिकारिक रूप से समय-विस्तार या अगली अवधि की जाँच करना"],
      ["Submit false information about the date", "তারিখ নিয়ে ভুল তথ্য জমা দেওয়া", "तारीख़ के बारे में गलत जानकारी जमा करना"]
    ],a:2
  },
  {
    cat:"public-support-community",
    q:["What is the safest way to submit identity documents for a scheme?", "প্রকল্পে পরিচয়পত্র জমা দেওয়ার নিরাপদ পদ্ধতি কী?", "योजना के लिए पहचान दस्तावेज जमा करने का सुरक्षित तरीका क्या है?"],
    o:[
      ["Send them to an unknown messaging number", "অচেনা মেসেজিং নম্বরে পাঠানো", "अनजान मैसेजिंग नंबर पर भेजना"],
      ["Post them publicly for verification", "যাচাইয়ের জন্য প্রকাশ্যে পোস্ট করা", "सत्यापन के लिए सार्वजनिक रूप से पोस्ट करना"],
      ["Give originals to an intermediary without receipt", "রসিদ ছাড়া মধ্যস্থতাকারীকে আসল দেওয়া", "बिना रसीद मध्यस्थ को मूल दस्तावेज देना"],
      ["Use the official submission channel and share only required documents", "সরকারি জমা মাধ্যম ব্যবহার করে প্রয়োজনীয় নথিই দেওয়া", "आधिकारिक माध्यम से केवल आवश्यक दस्तावेज देना"]
    ],a:3
  },

  // ===== Privacy, Technology & Smart Lady App =====
  {
    cat:"privacy-app",
    q:["Which languages are available in the Smart Lady app guide?", "Smart Lady অ্যাপ গাইডে কোন ভাষাগুলি রয়েছে?", "Smart Lady ऐप गाइड में कौन-सी भाषाएँ उपलब्ध हैं?"],
    o:[
      ["English, Bengali and Hindi", "ইংরেজি, বাংলা ও হিন্দি", "अंग्रेज़ी, बंगाली और हिंदी"],
      ["English, Tamil and French", "ইংরেজি, তামিল ও ফরাসি", "अंग्रेज़ी, तमिल और फ्रेंच"],
      ["Bengali, Urdu and German", "বাংলা, উর্দু ও জার্মান", "बंगाली, उर्दू और जर्मन"],
      ["Hindi, Spanish and Marathi", "হিন্দি, স্প্যানিশ ও মারাঠি", "हिंदी, स्पेनिश और मराठी"]
    ],a:0
  },
  {
    cat:"privacy-app",
    q:["Where are the trusted contacts saved according to the app guide?", "অ্যাপ গাইড অনুযায়ী বিশ্বস্ত যোগাযোগের তথ্য কোথায় সংরক্ষিত থাকে?", "ऐप गाइड के अनुसार विश्वसनीय संपर्क कहाँ सहेजे जाते हैं?"],
    o:[
      ["On a public website", "সর্বসাধারণের ওয়েবসাইটে", "सार्वजनिक वेबसाइट पर"],
      ["Only on the user's phone", "শুধু ব্যবহারকারীর ফোনে", "केवल उपयोगकर्ता के फोन पर"],
      ["In a shared social media account", "শেয়ার করা সোশ্যাল মিডিয়া অ্যাকাউন্টে", "साझा सोशल मीडिया अकाउंट में"],
      ["In an open public database", "উন্মুক্ত পাবলিক ডেটাবেসে", "खुले सार्वजनिक डेटाबेस में"]
    ],a:1
  },
  {
    cat:"privacy-app",
    q:["When does the app guide say location is used for Smart SOS?", "অ্যাপ গাইড অনুযায়ী Smart SOS-এর জন্য লোকেশন কখন ব্যবহার হয়?", "ऐप गाइड के अनुसार Smart SOS के लिए लोकेशन का उपयोग कब होता है?"],
    o:[
      ["Continuously in the background", "সবসময় ব্যাকগ্রাউন্ডে", "लगातार बैकग्राउंड में"],
      ["Whenever the home screen opens", "হোম স্ক্রিন খুললেই", "होम स्क्रीन खुलते ही"],
      ["After the user presses the SOS button", "ব্যবহারকারী SOS বোতাম চাপলে", "उपयोगकर्ता SOS बटन दबाने के बाद"],
      ["Whenever a contact is edited", "যোগাযোগ সম্পাদনা করলেই", "संपर्क संपादित करते ही"]
    ],a:2
  },
  {
    cat:"privacy-app",
    q:["What happens to locally saved app information if the app data is cleared or the app is uninstalled?", "অ্যাপের ডেটা মুছে ফেললে বা অ্যাপ আনইনস্টল করলে স্থানীয় তথ্যের কী হয়?", "ऐप डेटा साफ़ करने या ऐप अनइंस्टॉल करने पर स्थानीय जानकारी का क्या होता है?"],
    o:[
      ["It is automatically emailed to the user", "স্বয়ংক্রিয়ভাবে ইমেইল হয়", "अपने आप ईमेल हो जाती है"],
      ["It remains on a public server", "পাবলিক সার্ভারে থেকে যায়", "सार्वजनिक सर्वर पर रहती है"],
      ["It is transferred to another phone automatically", "স্বয়ংক্রিয়ভাবে অন্য ফোনে যায়", "अपने आप दूसरे फोन में चली जाती है"],
      ["It is deleted from the phone", "ফোন থেকে মুছে যায়", "फोन से मिट जाती है"]
    ],a:3
  },
  {
    cat:"privacy-app",
    q:["What should be done if the SOS message does not include a location link?", "SOS বার্তায় লোকেশন লিংক না থাকলে কী করা উচিত?", "SOS संदेश में लोकेशन लिंक न हो तो क्या करना चाहिए?"],
    o:[
      ["Check Location is on and the app has permission", "লোকেশন চালু আছে ও অ্যাপের অনুমতি আছে কি না দেখা", "लोकेशन चालू है और ऐप को अनुमति है, यह जाँचना"],
      ["Change the trusted contact's saved name", "বিশ্বস্ত পরিচিতির সংরক্ষিত নাম বদলানো", "भरोसेमंद संपर्क का सेव किया नाम बदलना"],
      ["Delete the phone's default SMS app", "ফোনের ডিফল্ট এসএমএস অ্যাপ মুছে ফেলা", "फ़ोन का डिफ़ॉल्ट एसएमएस ऐप हटा देना"],
      ["Turn off the mobile network and Wi-Fi", "মোবাইল নেটওয়ার্ক ও ওয়াই-ফাই বন্ধ করা", "मोबाइल नेटवर्क और वाई-फ़ाई बंद करना"]
    ],a:0
  },
  {
    cat:"privacy-app",
    q:["What is the purpose of the app's Market List feature?", "অ্যাপের Market List ফিচারের উদ্দেশ্য কী?", "ऐप के Market List फीचर का उद्देश्य क्या है?"],
    o:[
      ["To apply for a bank loan", "ব্যাংক ঋণের আবেদন করা", "बैंक ऋण के लिए आवेदन करना"],
      ["To select, tick and share shopping items", "কেনাকাটার জিনিস বেছে টিক দিয়ে শেয়ার করা", "खरीदारी की वस्तुएँ चुनना, टिक करना और साझा करना"],
      ["To track a stolen phone", "চুরি হওয়া ফোন খোঁজা", "चोरी हुआ फोन ढूँढना"],
      ["To send emergency calls automatically", "স্বয়ংক্রিয়ভাবে জরুরি কল করা", "अपने आप आपातकालीन कॉल करना"]
    ],a:1
  },
  {
    cat:"privacy-app",
    q:["What should users do after adding emergency contacts?", "জরুরি যোগাযোগ যোগ করার পর ব্যবহারকারীর কী করা উচিত?", "आपातकालीन संपर्क जोड़ने के बाद उपयोगकर्ता को क्या करना चाहिए?"],
    o:[
      ["Assume the contacts already know what to do", "ধরে নেওয়া যে তাঁরা সব জানেন", "मान लेना कि वे सब जानते हैं"],
      ["Remove their numbers from the phone", "ফোন থেকে নম্বর মুছে ফেলা", "फोन से नंबर हटाना"],
      ["Tell them what an SOS message means and test the setup safely", "SOS বার্তার অর্থ জানিয়ে নিরাপদে সেটআপ পরীক্ষা করা", "उन्हें SOS संदेश का अर्थ बताकर सुरक्षित रूप से सेटअप जाँचना"],
      ["Share the app PIN with them", "অ্যাপ PIN তাঁদের দেওয়া", "उन्हें ऐप PIN बताना"]
    ],a:2
  },
  {
    cat:"privacy-app",
    q:["What does the app guide say about SMS charges?", "SMS চার্জ সম্পর্কে অ্যাপ গাইডে কী বলা হয়েছে?", "SMS शुल्क के बारे में ऐप गाइड क्या कहता है?"],
    o:[
      ["All SMS messages are always free", "সব SMS সবসময় বিনামূল্যে", "सभी SMS हमेशा मुफ्त होते हैं"],
      ["Charges are paid by the app developer", "অ্যাপ ডেভেলপার চার্জ দেন", "ऐप डेवलपर शुल्क देता है"],
      ["Charges depend only on the contact's phone", "শুধু প্রাপকের ফোনের উপর চার্জ নির্ভর করে", "शुल्क केवल प्राप्तकर्ता के फोन पर निर्भर करता है"],
      ["Normal mobile operator SMS charges may apply", "মোবাইল অপারেটরের স্বাভাবিক SMS চার্জ লাগতে পারে", "मोबाइल ऑपरेटर के सामान्य SMS शुल्क लागू हो सकते हैं"]
    ],a:3
  },
  {
    cat:"privacy-app",
    q:["Why should battery optimisation settings be checked for Smart SOS?", "Smart SOS-এর জন্য ব্যাটারি অপ্টিমাইজেশন সেটিং দেখা কেন দরকার?", "Smart SOS के लिए बैटरी ऑप्टिमाइज़ेशन सेटिंग जाँचना क्यों जरूरी है?"],
    o:[
      ["To stop the phone closing the app in the background", "ফোন যাতে ব্যাকগ্রাউন্ডে অ্যাপ বন্ধ না করে দেয়", "ताकि फ़ोन बैकग्राउंड में ऐप बंद न करे"],
      ["To increase the screen brightness and volume", "স্ক্রিনের উজ্জ্বলতা ও ভলিউম বাড়ানোর জন্য", "स्क्रीन की चमक और वॉल्यूम बढ़ाने के लिए"],
      ["To remove the screen lock for emergencies", "জরুরি অবস্থার জন্য স্ক্রিন লক সরানোর জন্য", "आपातकाल के लिए स्क्रीन लॉक हटाने के लिए"],
      ["To change the phone number saved in the app", "অ্যাপে সংরক্ষিত ফোন নম্বর বদলানোর জন্য", "ऐप में सेव फ़ोन नंबर बदलने के लिए"]
    ],a:0
  },
  {
    cat:"privacy-app",
    q:["Which statement best describes Smart Lady according to its app guide?", "অ্যাপ গাইড অনুযায়ী Smart Lady সম্পর্কে কোন বক্তব্যটি সঠিক?", "ऐप गाइड के अनुसार Smart Lady के बारे में कौन-सा कथन सही है?"],
    o:[
      ["It replaces police and emergency services", "এটি পুলিশ ও জরুরি পরিষেবার বদলি", "यह पुलिस और आपातकालीन सेवाओं का विकल्प है"],
      ["It is a helper and not a replacement for emergency services", "এটি সহায়ক, জরুরি পরিষেবার বিকল্প নয়", "यह एक सहायक है, आपातकालीन सेवाओं का विकल्प नहीं"],
      ["It guarantees that every SMS will be delivered", "প্রতিটি SMS পৌঁছানো নিশ্চিত করে", "हर SMS पहुँचने की गारंटी देता है"],
      ["It automatically contacts every nearby phone", "আশপাশের সব ফোনে স্বয়ংক্রিয় যোগাযোগ করে", "आसपास के सभी फोन से अपने आप संपर्क करता है"]
    ],a:1
  },

  // ===== Global Awareness & Independent Living =====
  {
    cat:"global-awareness",
    q:["Where should you report cyber financial fraud?", "সাইবার আর্থিক জালিয়াতি কোথায় জানাবেন?", "साइबर वित्तीय धोखाधड़ी की सूचना कहाँ देंगे?"],
    o:[
      ["Only to the person who asked for the money", "শুধু যে টাকা চেয়েছে তাকে", "केवल उस व्यक्ति को जिसने पैसे माँगे"],
      ["Only through a public social media post", "শুধু সোশ্যাল মিডিয়ার প্রকাশ্য পোস্টের মাধ্যমে", "केवल सोशल मीडिया की सार्वजनिक पोस्ट के माध्यम से"],
      ["To your bank and the official cybercrime authority", "নিজের ব্যাংক ও সরকারি সাইবার অপরাধ কর্তৃপক্ষকে", "अपने बैंक और आधिकारिक साइबर अपराध प्राधिकरण को"],
      ["Nowhere, because lost money cannot be traced", "কোথাও নয়, কারণ হারানো টাকা খোঁজা যায় না", "कहीं नहीं, क्योंकि खोया पैसा ढूँढा नहीं जा सकता"]
    ],a:2
  },
  {
    cat:"global-awareness",
    q:["How should you reach police, fire or medical help in an emergency?", "জরুরি অবস্থায় পুলিশ, দমকল বা চিকিৎসা সহায়তা কীভাবে পাবেন?", "आपातकाल में पुलिस, अग्निशमन या चिकित्सा सहायता कैसे प्राप्त करेंगे?"],
    o:[
      ["Wait for a social media reply", "সোশ্যাল মিডিয়ায় উত্তরের অপেক্ষা করা", "सोशल मीडिया पर उत्तर की प्रतीक्षा करना"],
      ["Search for a private number in an advertisement", "বিজ্ঞাপনে পাওয়া ব্যক্তিগত নম্বর খোঁজা", "विज्ञापन में मिला निजी नंबर खोजना"],
      ["Ask a stranger to decide which number to call", "কোন নম্বরে ফোন করবেন তা অপরিচিতকে ঠিক করতে বলা", "कौन-सा नंबर मिलाना है, यह किसी अनजान से तय करवाना"],
      ["Dial your country's official emergency number", "নিজের দেশের সরকারি জরুরি নম্বরে ফোন করা", "अपने देश का आधिकारिक आपातकालीन नंबर मिलाना"]
    ],a:3
  },
  {
    cat:"global-awareness",
    q:["What is the best way to get help for a child who may be in danger?", "বিপদে থাকা শিশুর জন্য সাহায্য পাওয়ার সর্বোত্তম উপায় কী?", "खतरे में पड़े बच्चे के लिए मदद पाने का सर्वोत्तम तरीका क्या है?"],
    o:[
      ["Contact emergency services or a child helpline", "জরুরি পরিষেবা বা শিশু হেল্পলাইনে যোগাযোগ করা", "आपातकालीन सेवा या बाल हेल्पलाइन से संपर्क करना"],
      ["Post the child's photo on social media", "শিশুটির ছবি সোশ্যাল মিডিয়ায় পোস্ট করা", "बच्चे की तस्वीर सोशल मीडिया पर डालना"],
      ["Confront the suspected person by yourself", "সন্দেহভাজনের মুখোমুখি নিজে একা হওয়া", "संदिग्ध व्यक्ति का अकेले सामना करना"],
      ["Wait to see whether it happens again", "আবার ঘটে কি না দেখার অপেক্ষা করা", "फिर होता है या नहीं, इसकी प्रतीक्षा करना"]
    ],a:0
  },
  {
    cat:"global-awareness",
    q:["What should you do if a stranger asks for your private photos?", "অপরিচিত কেউ ব্যক্তিগত ছবি চাইলে কী করবেন?", "कोई अजनबी निजी तस्वीरें माँगे तो क्या करेंगे?"],
    o:[
      ["Send a low-resolution version", "কম রেজোলিউশনের ছবি পাঠানো", "कम गुणवत्ता वाली तस्वीर भेजना"],
      ["Decline and protect your privacy", "না বলে নিজের গোপনীয়তা রক্ষা করা", "मना करके अपनी निजता की रक्षा करना"],
      ["Send one photo after checking the profile", "প্রোফাইল দেখে একটি ছবি পাঠানো", "प्रोफ़ाइल देखकर एक तस्वीर भेजना"],
      ["Share the photo with a disappearing-message option", "অদৃশ্য হয়ে যায় এমন বার্তায় ছবি পাঠানো", "गायब होने वाले संदेश में तस्वीर भेजना"]
    ],a:1
  },
  {
    cat:"global-awareness",
    q:["What is a useful precaution when meeting a new buyer or supplier?", "নতুন ক্রেতা বা সরবরাহকারীর সঙ্গে দেখা করার সময় কী সতর্কতা দরকার?", "नए खरीदार या आपूर्तिकर्ता से मिलते समय क्या सावधानी जरूरी है?"],
    o:[
      ["Meet at an isolated location to discuss privately", "নির্জন জায়গায় দেখা করা", "निजी बातचीत के लिए सुनसान जगह मिलना"],
      ["Carry all original documents", "সব আসল নথি সঙ্গে নেওয়া", "सभी मूल दस्तावेज साथ ले जाना"],
      ["Meet in a public place or with someone trusted and inform another person", "জনসমক্ষে বা বিশ্বস্ত কাউকে সঙ্গে নিয়ে দেখা করে অন্য কাউকে জানানো", "सार्वजनिक जगह या विश्वसनीय व्यक्ति के साथ मिलकर किसी अन्य को बताना"],
      ["Share your banking PIN before the meeting", "দেখা করার আগে ব্যাংক PIN দেওয়া", "मिलने से पहले बैंक PIN बताना"]
    ],a:2
  },
  {
    cat:"global-awareness",
    q:["Why should you keep your phone's IMEI number separately?", "ফোনের IMEI নম্বর আলাদা করে রাখা কেন দরকার?", "फोन का IMEI नंबर अलग से रखना क्यों जरूरी है?"],
    o:[
      ["To improve mobile internet speed at home", "বাড়িতে মোবাইল ইন্টারনেটের গতি বাড়ানোর জন্য", "घर पर मोबाइल इंटरनेट की गति बढ़ाने के लिए"],
      ["To change the phone's model name or brand", "ফোনের মডেলের নাম বা ব্র্যান্ড বদলানোর জন্য", "फ़ोन का मॉडल नाम या ब्रांड बदलने के लिए"],
      ["To unlock every app on the phone", "ফোনের সব অ্যাপ আনলক করার জন্য", "फ़ोन के सभी ऐप अनलॉक करने के लिए"],
      ["To identify the device if it is lost or stolen", "হারালে বা চুরি গেলে ডিভাইস শনাক্ত করার জন্য", "खोने या चोरी होने पर डिवाइस पहचानने के लिए"]
    ],a:3
  },
  {
    cat:"global-awareness",
    q:["What is a responsible way to use social media for a small business?", "ছোট ব্যবসায় সোশ্যাল মিডিয়া ব্যবহারের দায়িত্বশীল পদ্ধতি কী?", "छोटे व्यवसाय के लिए सोशल मीडिया का जिम्मेदार उपयोग क्या है?"],
    o:[
      ["Share accurate product details, clear prices and genuine photos", "সঠিক পণ্যের বিবরণ, স্পষ্ট দাম ও আসল ছবি দেওয়া", "सही उत्पाद विवरण, स्पष्ट कीमत और वास्तविक तस्वीरें साझा करना"],
      ["Copy another seller's identity", "অন্য বিক্রেতার পরিচয় নকল করা", "दूसरे विक्रेता की पहचान की नकल करना"],
      ["Promise results that cannot be guaranteed", "নিশ্চিত নয় এমন ফলের প্রতিশ্রুতি দেওয়া", "ऐसे परिणामों का वादा करना जिनकी गारंटी नहीं"],
      ["Publish customers' phone numbers", "গ্রাহকের ফোন নম্বর প্রকাশ করা", "ग्राहकों के फोन नंबर प्रकाशित करना"]
    ],a:0
  },
  {
    cat:"global-awareness",
    q:["What should you do if you receive a suspicious message from a known friend's account?", "পরিচিত বন্ধুর অ্যাকাউন্ট থেকে সন্দেহজনক বার্তা এলে কী করবেন?", "किसी परिचित मित्र के अकाउंट से संदिग्ध संदेश आए तो क्या करेंगे?"],
    o:[
      ["Trust it because the account is familiar", "অ্যাকাউন্ট পরিচিত বলে বিশ্বাস করা", "अकाउंट परिचित होने के कारण भरोसा करना"],
      ["Confirm through another trusted contact method before acting", "কাজ করার আগে অন্য পরিচিত মাধ্যমে নিশ্চিত হওয়া", "कार्रवाई से पहले किसी अन्य विश्वसनीय माध्यम से पुष्टि करना"],
      ["Send money quickly if requested", "চাইলে দ্রুত টাকা পাঠানো", "माँगने पर तुरंत पैसे भेजना"],
      ["Share your OTP to help the friend", "বন্ধুকে সাহায্য করতে OTP দেওয়া", "मित्र की मदद के लिए OTP बताना"]
    ],a:1
  },
  {
    cat:"global-awareness",
    q:["What is the most appropriate way to respond to a possible emergency involving another person?", "অন্য কেউ বিপদে পড়েছেন মনে হলে উপযুক্ত প্রতিক্রিয়া কী?", "किसी अन्य व्यक्ति के संकट में होने की आशंका पर उचित प्रतिक्रिया क्या है?"],
    o:[
      ["Record a video before doing anything", "আগে ভিডিও করা", "पहले वीडियो बनाना"],
      ["Post the person's identity online", "ব্যক্তির পরিচয় অনলাইনে দেওয়া", "व्यक्ति की पहचान ऑनलाइन डालना"],
      ["Contact emergency services and provide relevant details", "জরুরি পরিষেবায় যোগাযোগ করে প্রাসঙ্গিক তথ্য দেওয়া", "आपातकालीन सेवा से संपर्क करके जरूरी जानकारी देना"],
      ["Confront everyone nearby", "আশপাশের সবার মুখোমুখি হওয়া", "आसपास के सभी लोगों का सामना करना"]
    ],a:2
  },
  {
    cat:"global-awareness",
    q:["What is the best overall principle behind the Smart Lady app?", "Smart Lady অ্যাপের মূল ভাবনার সঙ্গে সবচেয়ে বেশি সামঞ্জস্যপূর্ণ নীতি কোনটি?", "Smart Lady ऐप की मूल भावना से सबसे अधिक मेल खाने वाला सिद्धांत क्या है?"],
    o:[
      ["Technology should make decisions for every user", "প্রযুক্তি প্রত্যেকের হয়ে সিদ্ধান্ত নেবে", "तकनीक हर उपयोगकर्ता के लिए निर्णय ले"],
      ["Safety requires sharing all personal information", "নিরাপত্তার জন্য সব ব্যক্তিগত তথ্য ভাগ করতে হবে", "सुरक्षा के लिए सारी निजी जानकारी साझा करनी होगी"],
      ["Digital tools can replace personal judgement", "ডিজিটাল টুল ব্যক্তিগত বিচারবুদ্ধির বদলি", "डिजिटल उपकरण व्यक्तिगत विवेक का विकल्प हैं"],
      ["Technology should support safety, awareness and self-reliance", "প্রযুক্তি নিরাপত্তা, সচেতনতা ও স্বনির্ভরতাকে সহায়তা করবে", "तकनीक सुरक्षा, जागरूकता और आत्मनिर्भरता में सहायता करे"]
    ],a:3
  },
];

/* Groups built from the category field (10 questions per category = one exam part) */
const QUESTION_GROUPS = CATEGORIES.map(function(c){
  return { id:c.id, title:c.title, questions: QUESTIONS.filter(function(q){ return q.cat === c.id; }) };
});


// Country-neutral guidance for the international assessment.
const INTERNATIONAL_GUIDANCE = {
  emergency: {
    en: "In an emergency, contact the official emergency number or a recognised support service available in your country or region.",
    bn: "জরুরি পরিস্থিতিতে আপনার দেশ বা অঞ্চলে চালু সরকারি জরুরি নম্বর অথবা স্বীকৃত সহায়তা পরিষেবায় যোগাযোগ করুন।",
    hi: "आपातकालीन स्थिति में अपने देश या क्षेत्र में उपलब्ध आधिकारिक आपातकालीन नंबर या मान्यता प्राप्त सहायता सेवा से संपर्क करें।"
  },
  legal: {
    en: "Laws and legal protections vary by country and region. Follow the laws applicable where you are and seek advice from a qualified local legal professional when needed.",
    bn: "আইন ও আইনি সুরক্ষা দেশ ও অঞ্চলভেদে ভিন্ন। আপনি যেখানে আছেন সেখানকার প্রযোজ্য আইন মেনে চলুন এবং প্রয়োজনে স্থানীয় যোগ্য আইন বিশেষজ্ঞের পরামর্শ নিন।",
    hi: "कानून और कानूनी संरक्षण देश तथा क्षेत्र के अनुसार अलग-अलग होते हैं। जहाँ आप हैं वहाँ लागू कानूनों का पालन करें और आवश्यकता पड़ने पर स्थानीय योग्य कानूनी विशेषज्ञ से सलाह लें।"
  },
  publicServices: {
    en: "Public programmes and support services differ by location. Verify details through official local sources before applying or sharing personal information.",
    bn: "জনসহায়তা কর্মসূচি ও পরিষেবা স্থানভেদে আলাদা। আবেদন করার আগে বা ব্যক্তিগত তথ্য দেওয়ার আগে স্থানীয় সরকারি সূত্র থেকে তথ্য যাচাই করুন।",
    hi: "सार्वजनिक सहायता कार्यक्रम और सेवाएँ स्थान के अनुसार अलग-अलग होती हैं। आवेदन करने या निजी जानकारी देने से पहले आधिकारिक स्थानीय स्रोतों से जानकारी की पुष्टि करें।"
  },
  disclaimer: {
    en: "Smart Lady by MySkillGlobal is an educational awareness and self-assessment initiative. It is not a school, college, university or government authority, and it does not replace professional legal, medical, financial or emergency assistance. This certificate recognises assessment participation or performance only; it is not an academic qualification or government-issued certificate.",
    bn: "MySkillGlobal-এর Smart Lady একটি শিক্ষামূলক সচেতনতা ও আত্মমূল্যায়ন উদ্যোগ। এটি কোনো স্কুল, কলেজ, বিশ্ববিদ্যালয় বা সরকারি কর্তৃপক্ষ নয় এবং পেশাদার আইনি, চিকিৎসা, আর্থিক বা জরুরি সহায়তার বিকল্প নয়। এই সার্টিফিকেট কেবল মূল্যায়নে অংশগ্রহণ বা ফলাফল স্বীকার করে; এটি কোনো প্রাতিষ্ঠানিক শিক্ষাগত যোগ্যতা বা সরকারি সার্টিফিকেট নয়।",
    hi: "MySkillGlobal का Smart Lady एक शैक्षिक जागरूकता और आत्म-मूल्यांकन पहल है। यह कोई स्कूल, कॉलेज, विश्वविद्यालय या सरकारी प्राधिकरण नहीं है और पेशेवर कानूनी, चिकित्सा, वित्तीय या आपातकालीन सहायता का विकल्प नहीं है। यह प्रमाणपत्र केवल मूल्यांकन में भागीदारी या प्रदर्शन को मान्यता देता है; यह शैक्षणिक योग्यता या सरकारी प्रमाणपत्र नहीं है।"
  }
};

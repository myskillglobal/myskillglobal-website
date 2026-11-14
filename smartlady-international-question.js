// Smart Lady — International Awareness Assessment
// 100 questions · 10 categories · 10 questions each · languages: en, bn, hi
// Revised international assessment with balanced answer positions and global independent-living scenarios.
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
      ["Decline politely and move to a safer public place", "ভদ্রভাবে না বলে নিরাপদ জনসমাগমস্থলে যাওয়া", "विनम्रता से मना करके सुरक्षित सार्वजनिक स्थान पर जाना"],
      ["Accept the lift after looking at the vehicle", "গাড়ি দেখে নিয়ে লিফট গ্রহণ করা", "गाड़ी देखकर लिफ्ट स्वीकार कर लेना"],
      ["Ask the driver to phone your family to confirm", "যাচাই করতে চালককে আপনার পরিবারকে ফোন করতে বলা", "पुष्टि के लिए चालक से आपके परिवार को फोन करवाना"],
      ["Tell the driver your destination before deciding", "সিদ্ধান্তের আগে চালককে গন্তব্য জানানো", "निर्णय से पहले चालक को अपना गंतव्य बताना"]
    ],a:0
  },
  {
    cat:"personal-safety",
    q:["What should you do before accepting a job offer in another city?", "অন্য শহরে চাকরি গ্রহণের আগে কী করা উচিত?", "दूसरे शहर में नौकरी स्वीकार करने से पहले क्या करना चाहिए?"],
    o:[
      ["Check only the salary amount", "শুধু বেতনের পরিমাণ দেখা", "केवल वेतन की राशि देखना"],
      ["Verify the employer independently", "নিয়োগকর্তাকে নিজে যাচাই করা", "नियोक्ता की स्वयं जाँच करना"],
      ["Pay the agent first", "আগে এজেন্টকে টাকা দেওয়া", "पहले एजेंट को पैसे देना"],
      ["Travel first and verify later", "আগে যাত্রা করে পরে যাচাই করা", "पहले यात्रा करके बाद में जाँच करना"]
    ],a:1
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
      ["Agree to keep it secret if the person sounds trustworthy", "ব্যক্তিটি বিশ্বাসযোগ্য মনে হলে গোপন রাখতে রাজি হওয়া", "व्यक्ति भरोसेमंद लगे तो राज़ गुप्त रखने को मान लेना"],
      ["Send your travel details to that person only later", "ভ্রমণের তথ্য শুধু পরে ওই ব্যক্তিকে পাঠানো", "यात्रा की जानकारी बाद में केवल उसी व्यक्ति को भेजना"],
      ["Meet the person secretly, but only in a public place", "গোপনে, তবে শুধু জনসমাগমস্থলে দেখা করা", "चुपके से, पर केवल सार्वजनिक जगह पर मिलना"],
      ["Inform a trusted person and avoid travelling alone", "বিশ্বস্ত কাউকে জানিয়ে একা ভ্রমণ না করা", "विश्वसनीय व्यक्ति को बताकर अकेले यात्रा न करना"]
    ],a:3
  },
  {
    cat:"personal-safety",
    q:["If you suspect someone is being trafficked, what is the safest action?", "কেউ মানবপাচারের শিকার হতে পারেন সন্দেহ হলে নিরাপদ পদক্ষেপ কী?", "यदि किसी के मानव तस्करी का शिकार होने का संदेह हो तो सुरक्षित कदम क्या है?"],
    o:[
      ["Call emergency services and share factual details", "জরুরি পরিষেবায় ফোন করে তথ্য জানানো", "आपातकालीन सेवा को फोन करके तथ्य बताना"],
      ["Confront the suspected person and demand answers", "সন্দেহভাজন ব্যক্তির মুখোমুখি হয়ে জবাব চাওয়া", "संदिग्ध व्यक्ति का सामना करके जवाब माँगना"],
      ["Post about the incident on social media to get attention", "মনোযোগ পেতে ঘটনাটি সোশ্যাল মিডিয়ায় পোস্ট করা", "ध्यान खींचने के लिए घटना को सोशल मीडिया पर डालना"],
      ["Follow the person yourself to collect evidence", "প্রমাণ জোগাড় করতে নিজে ব্যক্তির পিছু নেওয়া", "सबूत जुटाने के लिए खुद उस व्यक्ति का पीछा करना"]
    ],a:0
  },
  {
    cat:"personal-safety",
    q:["Which is a warning sign of a suspicious job offer?", "সন্দেহজনক চাকরির প্রস্তাবের একটি লক্ষণ কোনটি?", "संदिग्ध नौकरी के प्रस्ताव का एक संकेत कौन-सा है?"],
    o:[
      ["A written job description with duties and working hours", "দায়িত্ব ও কাজের সময়সহ লিখিত চাকরির বিবরণ", "कार्य और समय-सीमा सहित लिखित नौकरी विवरण"],
      ["Guaranteed high income with an advance fee", "আগাম টাকা নিয়ে নিশ্চিত বেশি আয়ের প্রতিশ্রুতি", "अग्रिम शुल्क लेकर निश्चित अधिक कमाई का वादा"],
      ["A company address that can be verified independently", "স্বাধীনভাবে যাচাই করা যায় এমন কোম্পানির ঠিকানা", "स्वतंत्र रूप से जाँचा जा सकने वाला कंपनी का पता"],
      ["A clear interview process with a written offer letter", "লিখিত নিয়োগপত্রসহ স্পষ্ট ইন্টারভিউ প্রক্রিয়া", "लिखित नियुक्ति पत्र सहित स्पष्ट साक्षात्कार प्रक्रिया"]
    ],a:1
  },
  {
    cat:"personal-safety",
    q:["What is a sensible way to share your travel plans?", "ভ্রমণের পরিকল্পনা জানানোর ভালো উপায় কোনটি?", "यात्रा की योजना बताने का उचित तरीका क्या है?"],
    o:[
      ["Share only the destination, and only after you arrive", "শুধু গন্তব্য, তাও পৌঁছানোর পরে জানানো", "केवल गंतव्य, वह भी पहुँचने के बाद बताना"],
      ["Send the details only to people you met online", "শুধু অনলাইনে পরিচিতদের বিস্তারিত পাঠানো", "विवरण केवल ऑनलाइन मिले लोगों को भेजना"],
      ["Tell a trusted person your route and expected arrival", "বিশ্বস্ত কাউকে পথ ও পৌঁছানোর সম্ভাব্য সময় জানানো", "विश्वसनीय व्यक्ति को रास्ता और पहुँचने का समय बताना"],
      ["Keep the whole journey completely private", "পুরো যাত্রাটি সম্পূর্ণ গোপন রাখা", "पूरी यात्रा को पूरी तरह गुप्त रखना"]
    ],a:2
  },
  {
    cat:"personal-safety",
    q:["What should you do if someone follows you repeatedly?", "কেউ বারবার পিছু নিলে কী করা উচিত?", "कोई बार-बार पीछा करे तो क्या करना चाहिए?"],
    o:[
      ["Go through an isolated shortcut to get home faster", "তাড়াতাড়ি পৌঁছাতে নির্জন শর্টকাট ধরা", "जल्दी पहुँचने के लिए सुनसान शॉर्टकट लेना"],
      ["Return home without telling anyone about it", "কাউকে কিছু না জানিয়ে বাড়ি ফিরে যাওয়া", "किसी को बताए बिना घर लौट जाना"],
      ["Stop and argue with the person who is following", "থেমে অনুসরণকারীর সঙ্গে তর্ক করা", "रुककर पीछा करने वाले से बहस करना"],
      ["Move to a crowded safe place and seek help", "জনবহুল নিরাপদ স্থানে গিয়ে সাহায্য চাওয়া", "भीड़भाड़ वाले सुरक्षित स्थान पर जाकर मदद लेना"]
    ],a:3
  },
  {
    cat:"personal-safety",
    q:["A group repeatedly makes unwanted comments at you on the street. What is the safest response?", "রাস্তায় একদল লোক বারবার অনাকাঙ্ক্ষিত মন্তব্য করলে নিরাপদ পদক্ষেপ কী?", "सड़क पर कुछ लोग बार-बार अवांछित टिप्पणियाँ करें तो सुरक्षित कदम क्या है?"],
    o:[
      ["Move to a busy safe place, tell someone you trust and report it", "জনবহুল নিরাপদ স্থানে গিয়ে বিশ্বস্ত কাউকে জানানো ও অভিযোগ করা", "भीड़भाड़ वाली सुरक्षित जगह जाकर किसी भरोसेमंद को बताएँ और शिकायत करें"],
      ["Confront the group alone and demand that they stop", "একা দলটির মুখোমুখি হয়ে থামতে বলা", "अकेले उस समूह का सामना करके रुकने को कहना"],
      ["Change to a quiet, isolated route to avoid being seen", "কারও চোখে না পড়তে নির্জন, ফাঁকা রাস্তা ধরা", "नज़र से बचने के लिए सुनसान, खाली रास्ता लेना"],
      ["Ignore every incident and tell nobody about it", "প্রতিটি ঘটনা উপেক্ষা করে কাউকে কিছু না জানানো", "हर घटना को अनदेखा करके किसी को कुछ न बताना"]
    ],a:0
  },
  {
    cat:"personal-safety",
    q:["During a heated family disagreement, what is a constructive first step before making a major decision?", "পরিবারে উত্তপ্ত মতবিরোধের সময় বড় সিদ্ধান্ত নেওয়ার আগে গঠনমূলক প্রথম পদক্ষেপ কী?", "परिवार में तीखी असहमति के दौरान बड़ा निर्णय लेने से पहले रचनात्मक पहला कदम क्या है?"],
    o:[
      ["Make an irreversible decision immediately while angry", "রাগের মাথায় সঙ্গে সঙ্গে চূড়ান্ত সিদ্ধান্ত নেওয়া", "गुस्से में तुरंत अंतिम निर्णय ले लेना"],
      ["Pause, let emotions settle and discuss calmly when safe", "থেমে আবেগ শান্ত হতে দিয়ে নিরাপদ হলে শান্তভাবে আলোচনা করা", "रुकें, भावनाएँ शांत होने दें और सुरक्षित हो तो शांति से बात करें"],
      ["Threaten the other person until they agree", "অন্যজন রাজি না হওয়া পর্যন্ত তাকে হুমকি দেওয়া", "दूसरे व्यक्ति के मानने तक उसे धमकी देना"],
      ["Post private family details publicly to win support", "সমর্থন পেতে পারিবারিক ব্যক্তিগত বিষয় প্রকাশ্যে পোস্ট করা", "समर्थन पाने के लिए परिवार की निजी बातें सार्वजनिक रूप से पोस्ट करना"]
    ],a:1
  },

  // ===== Cyber Safety & Digital Security =====
  {
    cat:"cyber-safety",
    q:["What should you do when a caller claims to be a bank officer and asks for your OTP?", "কেউ ব্যাংককর্মী পরিচয় দিয়ে OTP চাইলে কী করবেন?", "कोई बैंक अधिकारी बनकर OTP माँगे तो क्या करेंगे?"],
    o:[
      ["Share only the first few digits to prove you are the account holder", "অ্যাকাউন্টধারী প্রমাণ করতে OTP-র শুধু প্রথম কয়েকটি সংখ্যা জানানো", "खाताधारक साबित करने के लिए OTP के केवल शुरुआती कुछ अंक बताना"],
      ["Share it only after checking that the caller ID shows the bank's name", "কলার আইডিতে ব্যাংকের নাম দেখালে তবেই OTP জানানো", "कॉलर आईडी में बैंक का नाम दिखे तभी OTP बताना"],
      ["Never share it and contact the bank through official channels", "কখনও না দিয়ে সরকারি যোগাযোগ মাধ্যমে ব্যাংকের সঙ্গে যোগাযোগ করা", "कभी साझा न करके आधिकारिक माध्यम से बैंक से संपर्क करना"],
      ["Ask the caller to send a confirmation message and then share it", "কলারকে নিশ্চিতকরণ বার্তা পাঠাতে বলে তারপর OTP জানানো", "कॉल करने वाले से पुष्टि संदेश भिजवाकर फिर OTP बताना"]
    ],a:2
  },
  {
    cat:"cyber-safety",
    q:["Which action is needed to receive money through a digital payment app?", "ডিজিটাল পেমেন্ট অ্যাপে টাকা গ্রহণ করতে কোন পদক্ষেপ প্রয়োজন?", "डिजिटल भुगतान ऐप में पैसे प्राप्त करने के लिए कौन-सा कदम आवश्यक है?"],
    o:[
      ["Entering your PIN to approve the incoming money", "টাকা পাওয়ার অনুমোদনে আপনার PIN দেওয়া", "पैसे आने की मंजूरी के लिए अपना PIN डालना"],
      ["Sharing your OTP with the sender", "প্রেরককে আপনার OTP জানানো", "भेजने वाले को अपना OTP बताना"],
      ["Giving your card CVV so the sender can complete the transfer", "প্রেরক লেনদেন সম্পূর্ণ করতে পারে বলে কার্ডের CVV দেওয়া", "भेजने वाला लेन-देन पूरा कर सके इसलिए कार्ड का CVV देना"],
      ["No PIN or password entry is needed to receive money", "টাকা গ্রহণ করতে PIN বা পাসওয়ার্ড দেওয়ার প্রয়োজন নেই", "पैसे प्राप्त करने के लिए PIN या पासवर्ड डालने की आवश्यकता नहीं है"]
    ],a:3
  },
  {
    cat:"cyber-safety",
    q:["What is the safest way to open a bank-related link?", "ব্যাংক সংক্রান্ত লিংক খোলার নিরাপদ উপায় কোনটি?", "बैंक से संबंधित लिंक खोलने का सुरक्षित तरीका क्या है?"],
    o:[
      ["Use the official bank app or type its known website address", "ব্যাংকের অফিসিয়াল অ্যাপ বা পরিচিত ওয়েবসাইট ব্যবহার করা", "बैंक का आधिकारिक ऐप या ज्ञात वेबसाइट पता इस्तेमाल करना"],
      ["Open the link from an unexpected SMS that looks urgent", "জরুরি দেখানো অপ্রত্যাশিত SMS-এর লিঙ্ক খোলা", "जरूरी दिखने वाले अप्रत्याशित SMS का लिंक खोलना"],
      ["Use a shortened link sent by an unknown number", "অচেনা নম্বরের ছোট লিংক ব্যবহার করা", "अनजान नंबर का छोटा लिंक इस्तेमाल करना"],
      ["Forward the link to friends first and then open it", "আগে বন্ধুদের লিঙ্কটি পাঠিয়ে তারপর খোলা", "पहले मित्रों को लिंक भेजकर फिर खोलना"]
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
      ["Pay a small verification fee to claim the prize", "পুরস্কার পেতে অল্প যাচাই-ফি দেওয়া", "इनाम पाने के लिए छोटी सत्यापन फीस देना"],
      ["Send bank details so that the prize can be confirmed", "পুরস্কার নিশ্চিত করতে ব্যাংকের তথ্য পাঠানো", "इनाम की पुष्टि के लिए बैंक विवरण भेजना"],
      ["Do not pay and verify the claim independently", "টাকা না দিয়ে দাবিটি নিজে যাচাই করা", "पैसे न देकर दावे की स्वतंत्र जाँच करना"],
      ["Forward the message to relatives so they can also win", "আত্মীয়দেরও জেতার সুযোগ দিতে বার্তাটি ফরোয়ার্ড করা", "रिश्तेदार भी जीतें इसलिए संदेश उन्हें फ़ॉरवर्ड करना"]
    ],a:2
  },
  {
    cat:"cyber-safety",
    q:["What should you do if someone threatens to publish your private photos?", "কেউ ব্যক্তিগত ছবি প্রকাশের হুমকি দিলে কী করবেন?", "कोई निजी तस्वीरें सार्वजनिक करने की धमकी दे तो क्या करेंगे?"],
    o:[
      ["Pay once to settle the matter and make the person stop", "ব্যক্তিটি থামবে ভেবে একবার টাকা দিয়ে বিষয়টি মেটানো", "व्यक्ति रुक जाएगा सोचकर एक बार पैसे देकर मामला निपटाना"],
      ["Delete every message at once so that nobody finds out", "কেউ জানতে না পারে বলে সব বার্তা সঙ্গে সঙ্গে মুছে ফেলা", "किसी को पता न चले इसलिए सारे संदेश तुरंत मिटा देना"],
      ["Send more photos to negotiate and calm the person down", "ব্যক্তিকে শান্ত করতে আলোচনার জন্য আরও ছবি পাঠানো", "व्यक्ति को शांत करने के लिए बातचीत में और फोटो भेजना"],
      ["Save evidence, avoid payment and report the threat", "প্রমাণ সংরক্ষণ করে টাকা না দিয়ে অভিযোগ করা", "सबूत सुरक्षित रखकर पैसे न देना और शिकायत करना"]
    ],a:3
  },
  {
    cat:"cyber-safety",
    q:["Which password practice is safer?", "কোন পাসওয়ার্ড ব্যবহারের অভ্যাস বেশি নিরাপদ?", "कौन-सी पासवर्ड आदत अधिक सुरक्षित है?"],
    o:[
      ["Use a long, unique password for each important account", "প্রতিটি গুরুত্বপূর্ণ অ্যাকাউন্টে দীর্ঘ ও আলাদা পাসওয়ার্ড", "हर महत्वपूर्ण अकाउंट के लिए लंबा और अलग पासवर्ड"],
      ["Use the same easy password everywhere so you never forget it", "ভুলে না যাওয়ার জন্য সব জায়গায় একই সহজ পাসওয়ার্ড ব্যবহার করা", "भूल न जाएँ इसलिए हर जगह एक ही आसान पासवर्ड रखना"],
      ["Use your name together with your birth year", "নিজের নামের সঙ্গে জন্মসাল জুড়ে পাসওয়ার্ড বানানো", "अपने नाम के साथ जन्म वर्ष जोड़कर पासवर्ड बनाना"],
      ["Use your phone number as the password for every account", "প্রতিটি অ্যাকাউন্টে ফোন নম্বরকেই পাসওয়ার্ড করা", "हर अकाउंट में फोन नंबर को ही पासवर्ड बनाना"]
    ],a:0
  },
  {
    cat:"cyber-safety",
    q:["What should you do before installing an unfamiliar loan app?", "অপরিচিত লোন অ্যাপ ইনস্টল করার আগে কী করবেন?", "अनजान लोन ऐप इंस्टॉल करने से पहले क्या करेंगे?"],
    o:[
      ["Install it because it offers instant approval", "দ্রুত অনুমোদন দেয় বলে ইনস্টল করা", "तुरंत मंजूरी देने के कारण इंस्टॉल करना"],
      ["Check its developer, permissions and credibility", "ডেভেলপার, অনুমতি ও বিশ্বাসযোগ্যতা যাচাই করা", "डेवलपर, अनुमतियाँ और विश्वसनीयता जाँचना"],
      ["Give contacts permission first", "আগে কন্ট্যাক্টের অনুমতি দেওয়া", "पहले कॉन्टैक्ट की अनुमति देना"],
      ["Upload identity documents before reading details", "বিস্তারিত না পড়ে পরিচয়পত্র আপলোড করা", "जानकारी पढ़े बिना पहचान दस्तावेज अपलोड करना"]
    ],a:1
  },
  {
    cat:"cyber-safety",
    q:["What is a safer way to handle an unknown video call?", "অপরিচিত ভিডিও কল সামলানোর নিরাপদ উপায় কী?", "अनजान वीडियो कॉल को संभालने का सुरक्षित तरीका क्या है?"],
    o:[
      ["Answer and reveal your surroundings", "ধরে আশপাশ দেখানো", "कॉल उठाकर आसपास दिखाना"],
      ["Accept if the caller uses a familiar profile photo", "পরিচিত ছবি থাকলে ধরা", "पहचानी तस्वीर होने पर कॉल उठाना"],
      ["Avoid sharing private details and decline if suspicious", "ব্যক্তিগত তথ্য না দেখিয়ে সন্দেহ হলে কল না ধরা", "निजी जानकारी न दिखाकर संदेह होने पर कॉल न उठाना"],
      ["Share your live location during the call", "কলের সময় লাইভ লোকেশন দেওয়া", "कॉल के दौरान लाइव लोकेशन साझा करना"]
    ],a:2
  },
  {
    cat:"cyber-safety",
    q:["What should you do if you notice an unauthorised digital payment transaction?", "অননুমোদিত ডিজিটাল পেমেন্ট লেনদেন চোখে পড়লে কী করবেন?", "अनधिकृत डिजिटल भुगतान लेनदेन दिखे तो क्या करेंगे?"],
    o:[
      ["Wait a few days to see if it is reversed", "কয়েকদিন অপেক্ষা করে দেখা এটি ফেরত আসে কি না", "कुछ दिन रुककर देखना कि वह वापस आता है या नहीं"],
      ["Only change the app theme or language settings", "শুধু অ্যাপের থিম বা ভাষার সেটিং বদলানো", "केवल ऐप की थीम या भाषा की सेटिंग बदलना"],
      ["Ask the receiver to return the money privately", "প্রাপককে ব্যক্তিগতভাবে টাকা ফেরত দিতে বলা", "प्राप्तकर्ता से निजी तौर पर पैसे लौटाने को कहना"],
      ["Contact the bank promptly and report the fraud", "দ্রুত ব্যাংকে জানানো ও প্রতারণা রিপোর্ট করা", "तुरंत बैंक को बताना और धोखाधड़ी की रिपोर्ट करना"]
    ],a:3
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
      ["Only the person who is accused of the harassment", "শুধু যার বিরুদ্ধে হয়রানির অভিযোগ সেই ব্যক্তি", "केवल वही व्यक्ति जिस पर उत्पीड़न का आरोप है"],
      ["A colleague chosen by the accused person", "অভিযুক্তের বেছে নেওয়া একজন সহকর্মী", "आरोपित द्वारा चुना गया कोई सहकर्मी"],
      ["No one, until the case becomes public", "কেউ নয়, যতক্ষণ না ঘটনা জনসমক্ষে আসে", "कोई नहीं, जब तक मामला सार्वजनिक न हो जाए"],
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
      ["Call any number found in a random message you received", "পাওয়া কোনো এলোমেলো বার্তায় থাকা যে-কোনো নম্বরে ফোন করা", "मिले किसी अनजान संदेश में दिए किसी भी नंबर पर कॉल करना"],
      ["Check the official websites of the government or recognised support groups", "সরকারি বা স্বীকৃত সহায়তা সংস্থার অফিসিয়াল ওয়েবসাইট দেখা", "सरकार या मान्यता प्राप्त सहायता संस्थाओं की आधिकारिक वेबसाइट देखना"],
      ["Use a number shared by an unverified social media page", "যাচাইহীন সোশ্যাল মিডিয়া পেজের নম্বর ব্যবহার করা", "असत्यापित सोशल मीडिया पेज का नंबर इस्तेमाल करना"],
      ["Ask a stranger online to recommend a number to call", "অনলাইনে কোনো অচেনা ব্যক্তিকে ফোন করার নম্বর সুপারিশ করতে বলা", "ऑनलाइन किसी अजनबी से कॉल करने के लिए नंबर सुझाने को कहना"]
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
    q:["You are outdoors and hear thunder while lightning is nearby. What should you do?", "বাইরে থাকা অবস্থায় কাছাকাছি বজ্রপাতসহ মেঘের গর্জন শুনলে কী করবেন?", "बाहर रहते समय पास में बिजली चमकने और गरजने की आवाज़ आए तो क्या करें?"],
    o:[
      ["Stand under an isolated tall tree to stay dry", "ভিজে না যেতে একা দাঁড়ানো উঁচু গাছের নিচে দাঁড়ানো", "भीगने से बचने के लिए अकेले ऊँचे पेड़ के नीचे खड़े होना"],
      ["Lie flat beside a river or lake", "নদী বা হ্রদের পাশে শুয়ে পড়া", "नदी या झील के पास सपाट लेट जाना"],
      ["Hold a metal umbrella while crossing an open field", "খোলা মাঠ পার হওয়ার সময় ধাতব ছাতা ধরে থাকা", "खुले मैदान में चलते हुए धातु की छतरी पकड़े रहना"],
      ["Go into a solid building or a hard-topped vehicle", "মজবুত ভবন বা শক্ত ছাদের গাড়ির ভিতরে যাওয়া", "मजबूत इमारत या पक्की छत वाले वाहन के अंदर जाना"]
    ],a:3
  },
  {
    cat:"emergency-sos",
    q:["A high-voltage power line has fallen across a road. What should you do?", "রাস্তায় উচ্চ ভোল্টেজের বিদ্যুতের তার ছিঁড়ে পড়েছে। কী করবেন?", "सड़क पर हाई-वोल्टेज बिजली का तार गिर गया है। आपको क्या करना चाहिए?"],
    o:[
      ["Keep away from the area and alert emergency services", "এলাকা থেকে দূরে থাকা এবং জরুরি পরিষেবাকে জানানো", "उस क्षेत्र से दूर रहें और आपात सेवाओं को सूचित करें"],
      ["Move the wire using a dry wooden stick", "শুকনো কাঠের লাঠি দিয়ে তারটি সরানো", "सूखी लकड़ी की छड़ी से तार को हटाना"],
      ["Walk around the wire after checking the road", "রাস্তা দেখে নিয়ে তারটির পাশ দিয়ে হেঁটে যাওয়া", "सड़क देखकर तार के पास से घूमकर निकल जाना"],
      ["Warn nearby people and wait close to the fallen wire", "আশপাশের লোকদের সতর্ক করে পড়ে থাকা তারের কাছেই অপেক্ষা করা", "आसपास के लोगों को चेताकर गिरे हुए तार के पास ही इंतज़ार करना"]
    ],a:0
  },
  {
    cat:"emergency-sos",
    q:["A person is being electrocuted while in contact with a live electrical source. What is the safest action?", "কেউ বিদ্যুতের সংস্পর্শে থেকে বিদ্যুৎস্পৃষ্ট হচ্ছেন। সবচেয়ে নিরাপদ পদক্ষেপ কী?", "कोई व्यक्ति बिजली के सक्रिय स्रोत के संपर्क में आकर करंट से झटका खा रहा है। सबसे सुरक्षित कदम क्या है?"],
    o:[
      ["Touch the person and pull them away at once", "ব্যক্তিকে ছুঁয়ে সঙ্গে সঙ্গে টেনে সরানো", "व्यक्ति को छूकर तुरंत खींचकर हटाना"],
      ["Keep clear, isolate power safely and call emergency services", "দূরে থাকা, নিরাপদে বিদ্যুৎ বিচ্ছিন্ন করা ও জরুরি সাহায্য ডাকা", "दूर रहें, सुरक्षित रूप से बिजली बंद कराएँ और आपात सेवा बुलाएँ"],
      ["Pour water over the person to cool the body down", "শরীর ঠান্ডা করতে ব্যক্তির গায়ে জল ঢালা", "शरीर ठंडा करने के लिए व्यक्ति पर पानी डालना"],
      ["Use a metal object to push the wire away from them", "ধাতব বস্তু দিয়ে তারটি তাঁর কাছ থেকে ঠেলে সরানো", "धातु की वस्तु से तार को उनसे दूर धकेलना"]
    ],a:1
  },
  {
    cat:"emergency-sos",
    q:["You see someone struggling in deep water, but you are not trained in water rescue. What should you do?", "গভীর জলে কাউকে ডুবতে দেখলেন, কিন্তু আপনি জল থেকে উদ্ধার করার প্রশিক্ষণ পাননি। কী করবেন?", "आप किसी को गहरे पानी में डूबते देखते हैं, लेकिन आपको जल- बचाव का प्रशिक्षण नहीं है। क्या करें?"],
    o:[
      ["Jump in at once and swim towards the person to save them", "বাঁচাতে সঙ্গে সঙ্গে জলে ঝাঁপিয়ে ব্যক্তির দিকে সাঁতরে যাওয়া", "बचाने के लिए तुरंत पानी में कूदकर उस व्यक्ति की ओर तैरना"],
      ["Wait silently for someone else to come along and help", "চুপচাপ অন্য কেউ এসে সাহায্য করার অপেক্ষা করা", "चुपचाप किसी और के आकर मदद करने की प्रतीक्षा करना"],
      ["Throw a float or reach a pole from a safe spot and call for help", "নিরাপদ স্থান থেকে ভাসমান বস্তু ছুড়ে বা লাঠি বাড়িয়ে দিয়ে সাহায্য ডাকা", "सुरक्षित जगह से तैरने की चीज़ फेंककर या डंडा बढ़ाकर मदद बुलाएँ"],
      ["Enter the water while holding a heavy object to stay steady", "স্থির থাকতে ভারী কোনো বস্তু হাতে নিয়ে জলে নামা", "स्थिर रहने के लिए कोई भारी वस्तु पकड़कर पानी में उतरना"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["You smell gas in a room. What should you do first?", "ঘরের মধ্যে গ্যাসের গন্ধ পেলে প্রথমে কী করবেন?", "कमरे में गैस की गंध आए तो सबसे पहले क्या करें?"],
    o:[
      ["Switch lights on to look for the source of the smell", "গন্ধের উৎস খুঁজতে আলো জ্বালানো", "गंध का स्रोत खोजने के लिए लाइट जलाना"],
      ["Light a match to find where the gas is leaking", "গ্যাস কোথায় ফাঁস হচ্ছে দেখতে দেশলাই জ্বালানো", "गैस कहाँ रिस रही है देखने के लिए माचिस जलाना"],
      ["Keep cooking with the windows closed", "জানালা বন্ধ রেখেই রান্না চালিয়ে যাওয়া", "खिड़कियाँ बंद रखकर खाना पकाना जारी रखना"],
      ["Leave without using switches or flames, then call for help", "সুইচ বা আগুন না ব্যবহার করে বাইরে গিয়ে সাহায্য ডাকা", "स्विच या आग का उपयोग किए बिना बाहर जाकर मदद बुलाएँ"]
    ],a:3
  },
  {
    cat:"emergency-sos",
    q:["You are travelling abroad and need urgent police, fire or ambulance help. What should you know?", "বিদেশে ভ্রমণের সময় জরুরি পুলিশ, দমকল বা অ্যাম্বুলেন্স সাহায্য লাগলে কী জানা থাকা উচিত?", "विदेश यात्रा में पुलिस, दमकल या एम्बुलेंस की तुरंत मदद चाहिए। आपको क्या पता होना चाहिए?"],
    o:[
      ["Emergency numbers differ by country, so save the local ones before you travel", "জরুরি নম্বর দেশভেদে আলাদা, তাই যাওয়ার আগে সেখানকার নম্বর সংরক্ষণ করা", "आपातकालीन नंबर हर देश में अलग होते हैं, इसलिए यात्रा से पहले वहाँ के नंबर सहेज लें"],
      ["Your home country's emergency number works everywhere in the world", "আপনার দেশের জরুরি নম্বর সারা বিশ্বে কাজ করে", "आपके देश का आपातकालीन नंबर पूरी दुनिया में काम करता है"],
      ["Any number from a random online comment will do", "অনলাইনের যে-কোনো মন্তব্যে পাওয়া নম্বরই চলবে", "ऑनलाइन किसी भी टिप्पणी में मिला नंबर चल जाएगा"],
      ["Emergency services answer only after you reach your hotel", "হোটেলে পৌঁছানোর পরই জরুরি পরিষেবা সাড়া দেয়", "आपातकालीन सेवाएँ होटल पहुँचने के बाद ही जवाब देती हैं"]
    ],a:0
  },
  {
    cat:"emergency-sos",
    q:["An earthquake begins while you are indoors. What should you do first?", "ঘরের ভিতরে থাকা অবস্থায় ভূমিকম্প শুরু হলে প্রথমে কী করবেন?", "घर के अंदर रहते समय भूकंप शुरू हो जाए तो सबसे पहले क्या करेंगे?"],
    o:[
      ["Stand beside a glass window to watch what is happening", "কী হচ্ছে দেখতে কাচের জানালার পাশে দাঁড়ানো", "क्या हो रहा है देखने के लिए काँच की खिड़की के पास खड़े होना"],
      ["Drop, cover your head and neck, and hold on until shaking stops", "নিচু হয়ে মাথা ও ঘাড় ঢেকে ধরে থাকুন, কম্পন থামা পর্যন্ত অপেক্ষা করুন", "झुकें, सिर और गर्दन ढकें और झटके रुकने तक पकड़े रहें"],
      ["Use the lift to leave the building quickly", "দ্রুত বেরোতে লিফট ব্যবহার করা", "जल्दी निकलने के लिए लिफ्ट का उपयोग करना"],
      ["Run down the stairs while the shaking is strong", "কম্পন জোরালো থাকার সময় সিঁড়ি দিয়ে দৌড়ে নামা", "तेज़ झटकों के दौरान सीढ़ियों से दौड़कर उतरना"]
    ],a:1
  },
  {
    cat:"emergency-sos",
    q:["After a fire is put out, someone has a burn injury. What is the recommended immediate first aid for a minor thermal burn?", "আগুন নেভানোর পর কারও শরীরে পুড়ে যাওয়ার ক্ষত হয়েছে। সামান্য তাপজনিত পোড়ার প্রাথমিক চিকিৎসা কী?", "आग बुझने के बाद किसी को जलने की चोट है। मामूली गर्मी से हुए जलने पर तुरंत प्राथमिक उपचार क्या है?"],
    o:[
      ["Apply ice directly to the burn to stop the pain", "ব্যথা থামাতে পোড়া জায়গায় সরাসরি বরফ লাগানো", "दर्द रोकने के लिए जले हिस्से पर सीधे बर्फ लगाना"],
      ["Apply toothpaste or butter to the burn", "পোড়া জায়গায় টুথপেস্ট বা মাখন লাগানো", "जले हिस्से पर टूथपेस्ट या मक्खन लगाना"],
      ["Cool under running water for about 20 minutes", "প্রায় ২০ মিনিট চলমান জলের নিচে ঠান্ডা করুন", "लगभग 20 मिनट बहते ठंडे पानी से ठंडा करें"],
      ["Break the blisters so the burn dries faster", "দ্রুত শুকাতে ফোসকা ফাটিয়ে দেওয়া", "जल्दी सूखने के लिए फफोले फोड़ देना"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["When is it appropriate to use a phone's remote erase feature after it is lost or stolen?", "ফোন হারিয়ে গেলে বা চুরি হলে Remote Erase সুবিধা কখন ব্যবহার করা যুক্তিযুক্ত?", "फोन खोने या चोरी होने पर Remote Erase सुविधा का उपयोग कब उचित है?"],
    o:[
      ["At once, before trying to locate or lock the phone", "ফোন খোঁজা বা লক করার আগেই সঙ্গে সঙ্গে", "फोन खोजने या लॉक करने से पहले ही तुरंत"],
      ["Only after posting the phone's details publicly", "ফোনের বিবরণ প্রকাশ্যে পোস্ট করার পরেই", "फोन का विवरण सार्वजनिक रूप से पोस्ट करने के बाद ही"],
      ["By sharing the account password with a stranger", "অপরিচিতকে অ্যাকাউন্টের পাসওয়ার্ড দিয়ে", "किसी अजनबी को अकाउंट का पासवर्ड देकर"],
      ["When recovery seems unlikely, knowing tracking will stop", "উদ্ধারের আশা কম হলে, ট্র্যাকিং বন্ধ হবে জেনেই", "जब वापसी की उम्मीद कम हो, यह जानते हुए कि ट्रैकिंग बंद हो जाएगी"]
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
      ["Entertainment subscriptions and streaming plans", "বিনোদনের সাবস্ক্রিপশন ও স্ট্রিমিং প্ল্যান", "मनोरंजन की सदस्यताएँ और स्ट्रीमिंग प्लान"],
      ["Essential needs and fixed obligations", "অপরিহার্য প্রয়োজন ও নির্দিষ্ট দায়", "जरूरी जरूरतें और निश्चित देनदारियाँ"],
      ["Optional shopping and new clothes", "ঐচ্ছিক কেনাকাটা ও নতুন জামাকাপড়", "वैकल्पिक खरीदारी और नए कपड़े"],
      ["Gifts, parties and celebrations", "উপহার, পার্টি ও উৎসব উদযাপন", "उपहार, पार्टियाँ और समारोह"]
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
      ["To pay for routine luxury purchases every month", "প্রতি মাসের বিলাসবহুল কেনাকাটার খরচ মেটানো", "हर महीने की विलासिता की खरीदारी का खर्च चुकाना"],
      ["To replace your monthly income permanently", "মাসিক আয়ের স্থায়ী বিকল্প হিসেবে ব্যবহার করা", "मासिक आय की जगह स्थायी रूप से इस्तेमाल करना"],
      ["To increase how much you can borrow from lenders", "ঋণদাতার কাছ থেকে বেশি ঋণ পাওয়ার ক্ষমতা বাড়ানো", "ऋणदाताओं से अधिक उधार लेने की क्षमता बढ़ाना"],
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
      ["Needs are always more expensive than wants", "প্রয়োজন সবসময় চাহিদার চেয়ে বেশি দামি", "ज़रूरतें हमेशा इच्छाओं से अधिक महँगी होती हैं"],
      ["Needs are essential; wants are optional preferences", "প্রয়োজন অপরিহার্য; ইচ্ছা ঐচ্ছিক পছন্দ", "जरूरतें अनिवार्य हैं; इच्छाएँ वैकल्पिक पसंद हैं"],
      ["Wants must always be paid for before needs", "চাহিদার খরচ সবসময় প্রয়োজনের আগে মেটাতে হয়", "इच्छाओं का खर्च हमेशा ज़रूरतों से पहले चुकाना पड़ता है"],
      ["Both categories always have identical priority", "দুটি বিভাগেরই সবসময় সমান অগ্রাধিকার", "दोनों श्रेणियों की प्राथमिकता हमेशा समान होती है"]
    ],a:1
  },
  {
    cat:"money-management",
    q:["What is a practical way to control household expenses?", "পারিবারিক খরচ নিয়ন্ত্রণের বাস্তবসম্মত উপায় কী?", "घरेलू खर्च नियंत्रित करने का व्यावहारिक तरीका क्या है?"],
    o:[
      ["Stop recording small purchases to save time", "সময় বাঁচাতে ছোটখাটো কেনাকাটার হিসাব লেখা বন্ধ করা", "समय बचाने के लिए छोटी खरीदारी का हिसाब लिखना बंद करना"],
      ["Use credit for every purchase to keep cash free", "হাতে নগদ রাখতে প্রতিটি কেনাকাটায় ধারে কেনা", "नकद बचाने के लिए हर खरीदारी उधार पर करना"],
      ["Record spending and review categories regularly", "খরচ লিখে নিয়মিত বিভাগভিত্তিক পর্যালোচনা করা", "खर्च लिखकर नियमित रूप से श्रेणियों की समीक्षा करना"],
      ["Ignore irregular expenses like festivals and repairs", "উৎসব ও মেরামতের মতো অনিয়মিত খরচ উপেক্ষা করা", "त्योहार और मरम्मत जैसे अनियमित खर्चों को अनदेखा करना"]
    ],a:2
  },
  {
    cat:"money-management",
    q:["A scheme promises to double your money in a few months with no risk. What is the wise response?", "একটি প্রকল্প কয়েক মাসে ঝুঁকি ছাড়াই টাকা দ্বিগুণ করার প্রতিশ্রুতি দিচ্ছে। বুদ্ধিমানের কাজ কী?", "कोई योजना कुछ महीनों में बिना जोखिम के पैसा दोगुना करने का वादा करती है। समझदारी भरा कदम क्या है?"],
    o:[
      ["Invest quickly before the offer closes and the chance is lost", "সুযোগ হাতছাড়া হওয়ার আগে তাড়াতাড়ি বিনিয়োগ করা", "मौका निकल जाने से पहले जल्दी निवेश करना"],
      ["Invite friends to join so the profit is shared", "লাভ ভাগ করতে বন্ধুদেরও যোগ দিতে ডাকা", "लाभ बाँटने के लिए मित्रों को भी जोड़ना"],
      ["Take a loan to invest a larger amount", "বেশি টাকা বিনিয়োগ করতে ঋণ নেওয়া", "अधिक निवेश के लिए ऋण लेना"],
      ["Treat it as a warning sign and verify with regulators first", "এটি সতর্কসংকেত ধরে আগে নিয়ন্ত্রক সংস্থার কাছে যাচাই করা", "इसे चेतावनी संकेत मानकर पहले नियामक से जाँच करना"]
    ],a:3
  },
  {
    cat:"money-management",
    q:["A lender offers a loan with a low monthly instalment but a long repayment period. What should you compare before accepting?", "একজন ঋণদাতা কম মাসিক কিস্তি কিন্তু দীর্ঘ মেয়াদের ঋণ দিচ্ছেন। গ্রহণের আগে কী তুলনা করবেন?", "एक ऋणदाता कम मासिक किस्त लेकिन लंबी अवधि का ऋण दे रहा है। स्वीकार करने से पहले क्या तुलना करें?"],
    o:[
      ["Compare total cost, interest, fees and budget fit", "মোট খরচ, সুদ, ফি ও বাজেটের সঙ্গে সামঞ্জস্য তুলনা করুন", "कुल लागत, ब्याज, शुल्क और बजट से मेल की तुलना करें"],
      ["Only the size of the monthly instalment", "শুধু মাসিক কিস্তির পরিমাণ", "केवल मासिक किस्त की राशि"],
      ["Only what the lender's advertisement says", "শুধু ঋণদাতার বিজ্ঞাপনে যা বলা আছে", "केवल वह जो ऋणदाता के विज्ञापन में लिखा है"],
      ["Whether the money can be spent immediately", "টাকা সঙ্গে সঙ্গে খরচ করা যাবে কি না", "पैसा तुरंत खर्च किया जा सकता है या नहीं"]
    ],a:0
  },
  {
    cat:"money-management",
    q:["You feel pressured to buy an expensive item during a limited-time sale. What is a sound money decision?", "সীমিত সময়ের ছাড়ে দামি জিনিস কিনতে চাপ অনুভব করছেন। বিচক্ষণ আর্থিক সিদ্ধান্ত কী?", "सीमित समय की छूट में महँगी वस्तु खरीदने का दबाव महसूस हो रहा है। समझदारी भरा आर्थिक निर्णय क्या है?"],
    o:[
      ["Buy at once before you check your budget", "বাজেট না দেখেই সঙ্গে সঙ্গে কিনে ফেলা", "बजट देखे बिना तुरंत खरीद लेना"],
      ["Pause, check the need and compare it with your budget", "থামুন, প্রয়োজন যাচাই করুন ও বাজেটের সঙ্গে তুলনা করুন", "रुकें, ज़रूरत जाँचें और बजट से तुलना करें"],
      ["Borrow money because the offer may end soon", "অফার শেষ হয়ে যেতে পারে বলে ধার করা", "ऑफर जल्द खत्म हो सकता है इसलिए उधार लेना"],
      ["Use all your emergency savings for the deal", "এই সুযোগের জন্য জরুরি সঞ্চয় পুরোটা খরচ করা", "इस सौदे के लिए पूरी आपातकालीन बचत खर्च कर देना"]
    ],a:1
  },

  // ===== Banking, Insurance & Digital Payments =====
  {
    cat:"banking-insurance",
    q:["What is the safest practice when using a mobile banking app?", "মোবাইল ব্যাংকিং অ্যাপ ব্যবহারের নিরাপদ অভ্যাস কোনটি?", "मोबाइल बैंकिंग ऐप इस्तेमाल करने की सुरक्षित आदत क्या है?"],
    o:[
      ["Install banking apps from links forwarded by friends", "বন্ধুদের পাঠানো লিঙ্ক থেকে ব্যাংকিং অ্যাপ ইনস্টল করা", "मित्रों के भेजे लिंक से बैंकिंग ऐप इंस्टॉल करना"],
      ["Save the PIN in the phone's contact list so you remember it", "মনে রাখতে ফোনের কন্টাক্ট লিস্টে PIN সেভ করে রাখা", "याद रखने के लिए PIN को फोन की संपर्क सूची में सहेजना"],
      ["Use the official app and check the recipient before confirming", "অফিসিয়াল অ্যাপ ব্যবহার করে নিশ্চিত করার আগে প্রাপক যাচাই করা", "आधिकारिक ऐप इस्तेमाल करके पुष्टि से पहले प्राप्तकर्ता जाँचना"],
      ["Let unknown people operate the app to help you", "সাহায্যের নামে অচেনা লোককে অ্যাপ চালাতে দেওয়া", "मदद के नाम पर अनजान लोगों को ऐप चलाने देना"]
    ],a:2
  },
  {
    cat:"banking-insurance",
    q:["What does borrowing money usually involve?", "ঋণ নেওয়ার ক্ষেত্রে সাধারণত কী জড়িত থাকে?", "पैसे उधार लेने में सामान्यतः क्या शामिल होता है?"],
    o:[
      ["A permanent grant that comes without any conditions", "কোনো শর্ত ছাড়া স্থায়ী অনুদান", "बिना किसी शर्त का स्थायी अनुदान"],
      ["An automatic increase in your monthly income", "মাসিক আয়ের স্বয়ংক্রিয় বৃদ্ধি", "मासिक आय में अपने-आप बढ़ोतरी"],
      ["No obligation at all once the funds are received", "টাকা পাওয়ার পর কোনো দায়ই না থাকা", "राशि मिलने के बाद कोई दायित्व न रहना"],
      ["Repayment, often with interest or other costs", "পরিশোধ, প্রায়ই সুদ বা অন্যান্য খরচসহ", "वापसी, अक्सर ब्याज या अन्य लागत के साथ"]
    ],a:3
  },
  {
    cat:"banking-insurance",
    q:["Your debit card is lost. What should you do first?", "আপনার ডেবিট কার্ড হারিয়ে গেছে। প্রথমে কী করবেন?", "आपका डेबिट कार्ड खो गया है। सबसे पहले क्या करें?"],
    o:[
      ["Block it at once through the bank's official app or helpline", "ব্যাংকের অফিসিয়াল অ্যাপ বা হেল্পলাইনে সঙ্গে সঙ্গে কার্ড ব্লক করা", "बैंक के आधिकारिक ऐप या हेल्पलाइन से तुरंत कार्ड ब्लॉक करना"],
      ["Wait a few days in case it is found", "পাওয়া যায় কি না দেখতে কয়েক দিন অপেক্ষা করা", "मिल जाए इस उम्मीद में कुछ दिन इंतज़ार करना"],
      ["Search online for a customer-care number and share the PIN", "অনলাইনে কাস্টমার কেয়ার নম্বর খুঁজে PIN জানানো", "ऑनलाइन कस्टमर केयर नंबर खोजकर PIN बताना"],
      ["Post the card details on social media to find it", "কার্ড খুঁজে পেতে সোশ্যাল মিডিয়ায় কার্ডের তথ্য পোস্ট করা", "कार्ड ढूँढने के लिए सोशल मीडिया पर कार्ड की जानकारी डालना"]
    ],a:0
  },
  {
    cat:"banking-insurance",
    q:["What is the general purpose of naming a beneficiary or nominee on a financial account, where permitted?", "যেখানে অনুমোদিত, আর্থিক অ্যাকাউন্টে নমিনি বা সুবিধাভোগীর নাম রাখার সাধারণ উদ্দেশ্য কী?", "जहाँ अनुमति हो, वित्तीय खाते में नामांकित व्यक्ति या लाभार्थी का नाम दर्ज करने का सामान्य उद्देश्य क्या है?"],
    o:[
      ["Operate the account every day automatically", "প্রতিদিন স্বয়ংক্রিয়ভাবে অ্যাকাউন্ট চালানো", "हर दिन स्वतः खाता चलाना"],
      ["Name who may receive the funds under local rules", "স্থানীয় নিয়ম অনুযায়ী কারা অর্থ পেতে পারেন তা নির্দিষ্ট করা", "स्थानीय नियमों के अनुसार धन पाने वाले को नामित करना"],
      ["Guarantee that a loan will be approved", "ঋণ যে অনুমোদিত হবে তার নিশ্চয়তা দেওয়া", "ऋण मंज़ूर होने की निश्चित गारंटी देना"],
      ["Replace the account holder immediately", "সঙ্গে সঙ্গে অ্যাকাউন্টধারীর বদলি হওয়া", "तुरंत खाताधारक की जगह लेना"]
    ],a:1
  },
  {
    cat:"banking-insurance",
    q:["What should you do if a bank message asks you to update your identity verification (KYC) details through an unfamiliar link?", "ব্যাংকের কোনো বার্তা অপরিচিত লিঙ্কের মাধ্যমে আপনার পরিচয় যাচাই (KYC) তথ্য হালনাগাদ করতে বললে কী করবেন?", "बैंक का कोई संदेश अनजान लिंक से आपकी पहचान सत्यापन (KYC) जानकारी अपडेट करने को कहे तो क्या करें?"],
    o:[
      ["Enter your details on the link but skip the PIN", "লিঙ্কে তথ্য দিন, শুধু PIN বাদ রাখুন", "लिंक पर जानकारी भरें, बस PIN छोड़ दें"],
      ["Forward the link to a colleague to check it for you", "যাচাই করতে লিঙ্কটি সহকর্মীকে ফরোয়ার্ড করা", "जाँचने के लिए लिंक को सहकर्मी को फ़ॉरवर्ड करना"],
      ["Verify through the bank's official website or branch", "ব্যাংকের অফিসিয়াল ওয়েবসাইট বা শাখায় যাচাই করা", "बैंक की आधिकारिक वेबसाइट या शाखा से पुष्टि करना"],
      ["Open the link only on a computer, not on the phone", "লিঙ্কটি ফোনে নয়, শুধু কম্পিউটারে খোলা", "लिंक को फोन पर नहीं, केवल कंप्यूटर पर खोलना"]
    ],a:2
  },
  {
    cat:"banking-insurance",
    q:["Why should loan terms be read before signing?", "ঋণে সই করার আগে শর্ত পড়া কেন জরুরি?", "ऋण पर हस्ताक्षर करने से पहले शर्तें पढ़ना क्यों जरूरी है?"],
    o:[
      ["To avoid knowing the exact repayment date", "পরিশোধের সঠিক তারিখ না জানার জন্য", "भुगतान की सही तारीख न जानने के लिए"],
      ["To agree to any fee that is mentioned later", "পরে উল্লেখ করা যে-কোনো ফি মেনে নেওয়ার জন্য", "बाद में बताए गए किसी भी शुल्क को मान लेने के लिए"],
      ["To obtain a guaranteed waiver of all charges", "সব চার্জ মকুবের নিশ্চয়তা পাওয়ার জন্য", "सभी शुल्क माफ़ होने की गारंटी पाने के लिए"],
      ["To understand interest, fees, instalments and obligations", "সুদ, ফি, কিস্তি ও দায় বুঝতে", "ब्याज, शुल्क, किस्त और जिम्मेदारियाँ समझने के लिए"]
    ],a:3
  },
  {
    cat:"banking-insurance",
    q:["What should you verify before buying an insurance policy?", "বিমা পলিসি কেনার আগে কী যাচাই করা উচিত?", "बीमा पॉलिसी खरीदने से पहले क्या जाँचना चाहिए?"],
    o:[
      ["Coverage, exclusions, premium, eligibility and claim process", "কভারেজ, বাদ পড়া বিষয়, প্রিমিয়াম, যোগ্যতা ও দাবি প্রক্রিয়া", "कवरेज, अपवाद, प्रीमियम, पात्रता और दावा प्रक्रिया"],
      ["Only the personal recommendation of the agent who sells it", "শুধু যিনি বিক্রি করছেন সেই এজেন্টের ব্যক্তিগত সুপারিশ", "केवल बेचने वाले एजेंट की व्यक्तिगत सिफ़ारिश"],
      ["Only the premium of the first year of the policy", "পলিসির শুধু প্রথম বছরের প্রিমিয়াম", "पॉलिसी के केवल पहले वर्ष का प्रीमियम"],
      ["How attractive the policy advertisement looks", "পলিসির বিজ্ঞাপন কতটা আকর্ষণীয় দেখতে", "पॉलिसी का विज्ञापन कितना आकर्षक दिखता है"]
    ],a:0
  },
  {
    cat:"banking-insurance",
    q:["A loss covered by your insurance policy occurs. What is the right step?", "আপনার বিমার আওতাভুক্ত কোনো ক্ষতি হয়েছে। সঠিক পদক্ষেপ কী?", "आपकी बीमा पॉलिसी के अंतर्गत आने वाली कोई हानि हुई है। सही कदम क्या है?"],
    o:[
      ["Wait until the policy expires before doing anything", "কিছু করার আগে পলিসির মেয়াদ শেষ হওয়া পর্যন্ত অপেক্ষা করা", "कुछ करने से पहले पॉलिसी की अवधि खत्म होने तक इंतज़ार करना"],
      ["Inform the insurer promptly and follow the claim process", "দ্রুত বিমা সংস্থাকে জানিয়ে দাবির প্রক্রিয়া অনুসরণ করা", "बीमा कंपनी को तुरंत सूचित कर दावा प्रक्रिया अपनाएँ"],
      ["Pay an agent extra to get the claim approved", "দাবি মঞ্জুর করাতে এজেন্টকে বাড়তি টাকা দেওয়া", "दावा मंज़ूर कराने के लिए एजेंट को अतिरिक्त पैसे देना"],
      ["Hide the documents the insurer may ask for", "বিমা সংস্থা যেসব নথি চাইতে পারে তা লুকিয়ে রাখা", "बीमा कंपनी जो दस्तावेज़ माँग सकती है उन्हें छिपाना"]
    ],a:1
  },
  {
    cat:"banking-insurance",
    q:["Why is it useful to turn on SMS or app alerts for every bank transaction?", "প্রতিটি ব্যাংক লেনদেনের জন্য SMS বা অ্যাপ অ্যালার্ট চালু রাখা কেন উপযোগী?", "हर बैंक लेन-देन के लिए SMS या ऐप अलर्ट चालू रखना क्यों उपयोगी है?"],
    o:[
      ["It raises the interest rate on your account", "এতে আপনার অ্যাকাউন্টের সুদের হার বাড়ে", "इससे आपके खाते की ब्याज दर बढ़ती है"],
      ["It removes the need to keep your PIN secret", "এতে PIN গোপন রাখার প্রয়োজন থাকে না", "इससे PIN गुप्त रखने की ज़रूरत नहीं रहती"],
      ["It lets you notice an unauthorised transaction quickly", "এতে অননুমোদিত লেনদেন দ্রুত ধরা যায়", "इससे अनधिकृत लेन-देन जल्दी पकड़ में आता है"],
      ["It stops every kind of fraud automatically", "এতে সব ধরনের প্রতারণা নিজে থেকেই বন্ধ হয়", "इससे हर तरह की धोखाधड़ी अपने-आप रुक जाती है"]
    ],a:2
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
      ["Buy large quantities of materials immediately to save money", "টাকা বাঁচাতে সঙ্গে সঙ্গে প্রচুর কাঁচামাল কিনে ফেলা", "पैसे बचाने के लिए तुरंत ढेर सारा कच्चा माल खरीद लेना"],
      ["Rent a shop before testing whether customers will buy", "ক্রেতা আসবে কি না দেখার আগেই দোকান ভাড়া নেওয়া", "ग्राहक आएँगे या नहीं यह परखने से पहले दुकान किराये पर लेना"],
      ["Borrow the maximum amount available to start big", "বড় করে শুরু করতে সর্বোচ্চ পরিমাণ ঋণ নেওয়া", "बड़े पैमाने पर शुरू करने के लिए अधिकतम ऋण लेना"]
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
    q:["What should you check before you start selling products from home?", "বাড়ি থেকে পণ্য বিক্রি শুরুর আগে কী যাচাই করা উচিত?", "घर से सामान बेचना शुरू करने से पहले क्या जाँचना चाहिए?"],
    o:[
      ["Nothing, since small businesses never need any approval", "কিছুই না, কারণ ছোট ব্যবসায় কোনো অনুমতিই লাগে না", "कुछ नहीं, क्योंकि छोटे व्यवसायों को किसी अनुमति की ज़रूरत नहीं होती"],
      ["Only whether friends promise to buy from you", "শুধু বন্ধুরা আপনার কাছ থেকে কিনবে বলেছে কি না", "केवल यह कि मित्र आपसे खरीदने का वादा करते हैं या नहीं"],
      ["Local rules on licences, permits and tax for your activity", "আপনার কাজের জন্য স্থানীয় লাইসেন্স, অনুমতি ও কর-সংক্রান্ত নিয়ম", "आपकी गतिविधि के लिए स्थानीय लाइसेंस, अनुमति और कर संबंधी नियम"],
      ["Only the colour and design of the packaging", "শুধু প্যাকেটের রং ও নকশা", "केवल पैकेजिंग का रंग और डिज़ाइन"]
    ],a:2
  },
  {
    cat:"home-business",
    q:["What is a good way to find the first customers for a home business?", "ঘরোয়া ব্যবসার প্রথম গ্রাহক খোঁজার ভালো উপায় কী?", "घरेलू व्यवसाय के पहले ग्राहक खोजने का अच्छा तरीका क्या है?"],
    o:[
      ["Wait for customers to arrive without telling anyone", "কাউকে না জানিয়ে ক্রেতা আসার অপেক্ষা করা", "किसी को बताए बिना ग्राहकों के आने का इंतज़ार करना"],
      ["Buy followers on social media to look popular", "জনপ্রিয় দেখাতে সোশ্যাল মিডিয়ায় ফলোয়ার কেনা", "लोकप्रिय दिखने के लिए सोशल मीडिया पर फॉलोअर खरीदना"],
      ["Send unsolicited payment links to strangers", "অপরিচিতদের অনাহূত পেমেন্ট লিংক পাঠানো", "अजनबियों को बिना माँगे भुगतान लिंक भेजना"],
      ["Inform neighbours and friends and share clear product details", "প্রতিবেশী ও বন্ধুদের জানিয়ে পণ্যের স্পষ্ট তথ্য দেওয়া", "पड़ोसियों और मित्रों को बताकर उत्पाद की स्पष्ट जानकारी साझा करना"]
    ],a:3
  },
  {
    cat:"home-business",
    q:["What is a reasonable approach to a large customised order?", "বড় কাস্টম অর্ডারের ক্ষেত্রে যুক্তিসঙ্গত পদ্ধতি কী?", "बड़े कस्टम ऑर्डर के लिए उचित तरीका क्या है?"],
    o:[
      ["Set clear specifications, price and payment terms", "কাজের বিবরণ, দাম ও পেমেন্টের শর্ত স্পষ্ট করুন", "काम का विवरण, कीमत और भुगतान की शर्तें तय करें"],
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
      ["Change prices often without informing customers", "গ্রাহকদের না জানিয়ে ঘন ঘন দাম বদলানো", "ग्राहकों को बताए बिना बार-बार कीमतें बदलना"],
      ["Promise delivery dates that cannot be met", "পালন করা যাবে না এমন ডেলিভারি প্রতিশ্রুতি দেওয়া", "ऐसी डिलीवरी तारीख का वादा करना जिसे निभा न सकें"],
      ["Maintain quality, clear communication and reliable delivery", "মান, স্পষ্ট যোগাযোগ ও নির্ভরযোগ্য ডেলিভারি বজায় রাখা", "गुणवत्ता, स्पष्ट संवाद और भरोसेमंद डिलीवरी बनाए रखना"],
      ["Avoid responding to customer questions and messages", "গ্রাহকের প্রশ্ন ও বার্তার উত্তর এড়িয়ে চলা", "ग्राहकों के सवालों और संदेशों का जवाब देने से बचना"]
    ],a:2
  },
  {
    cat:"home-business",
    q:["What is a sensible way to handle money earned from each sale?", "প্রতিটি বিক্রি থেকে পাওয়া টাকা সামলানোর ভালো উপায় কী?", "हर बिक्री से मिली रकम संभालने का उचित तरीका क्या है?"],
    o:[
      ["Spend all the receipts immediately on personal needs", "পাওয়া সব টাকা তখনই ব্যক্তিগত প্রয়োজনে খরচ করা", "मिली सारी रकम तुरंत निजी ज़रूरतों पर खर्च कर देना"],
      ["Mix all the funds together without recording anything", "কিছু না লিখে সব টাকা একসঙ্গে মিশিয়ে রাখা", "कुछ लिखे बिना सारी रकम एक साथ मिला देना"],
      ["Borrow more money whenever the sales go up", "বিক্রি বাড়লেই আরও ধার করা", "बिक्री बढ़ते ही और उधार लेना"],
      ["Separate business costs, savings and personal spending", "ব্যবসার খরচ, সঞ্চয় ও ব্যক্তিগত খরচ আলাদা রাখা", "व्यवसाय की लागत, बचत और निजी खर्च अलग रखना"]
    ],a:3
  },
  {
    cat:"home-business",
    q:["Which is a warning sign in a work-from-home offer?", "ঘরে বসে কাজের প্রস্তাবে কোনটি সতর্কতার লক্ষণ?", "घर से काम के प्रस्ताव में कौन-सा चेतावनी संकेत है?"],
    o:[
      ["A registration fee demanded by a stranger", "অপরিচিতের চাওয়া নিবন্ধন ফি", "किसी अनजान द्वारा माँगा गया पंजीकरण शुल्क"],
      ["A clear task description and timeline", "স্পষ্ট কাজের বিবরণ ও সময়সীমা", "काम का स्पष्ट विवरण और समय-सीमा"],
      ["A verifiable company name and address", "যাচাইযোগ্য কোম্পানির নাম ও ঠিকানা", "जाँचने योग्य कंपनी का नाम और पता"],
      ["A written payment schedule for the work", "কাজের জন্য লিখিত পেমেন্ট সূচি", "काम के लिए लिखित भुगतान कार्यक्रम"]
    ],a:0
  },
  {
    cat:"home-business",
    q:["Why should a business compare quality as well as price?", "ব্যবসায় শুধু দাম নয়, মানও তুলনা করা কেন দরকার?", "व्यवसाय में केवल कीमत नहीं, गुणवत्ता की तुलना भी क्यों जरूरी है?"],
    o:[
      ["The lowest price always guarantees good quality", "সবচেয়ে কম দামই সবসময় ভালো মানের নিশ্চয়তা", "सबसे कम कीमत हमेशा अच्छी गुणवत्ता की गारंटी है"],
      ["A fair price should reflect value and customer expectations", "ন্যায্য দাম পণ্যের মূল্য ও গ্রাহকের প্রত্যাশার সঙ্গে সামঞ্জস্যপূর্ণ হওয়া উচিত", "उचित कीमत उत्पाद के मूल्य और ग्राहक की अपेक्षाओं के अनुरूप होनी चाहिए"],
      ["Quality has no effect on customers' trust", "গুণমান গ্রাহকের আস্থায় কোনো প্রভাব ফেলে না", "गुणवत्ता का ग्राहकों के भरोसे पर कोई असर नहीं पड़ता"],
      ["Price comparison is unnecessary for small sellers", "ছোট বিক্রেতার দাম তুলনার দরকার নেই", "छोटे विक्रेता को कीमत की तुलना की जरूरत नहीं"]
    ],a:1
  },

  // ===== Public Support Schemes & Community Groups =====
  {
    cat:"public-support-community",
    q:["What should you do before joining a community savings group?", "কমিউনিটি সঞ্চয় গোষ্ঠীতে যোগ দেওয়ার আগে কী করা উচিত?", "सामुदायिक बचत समूह से जुड़ने से पहले क्या करना चाहिए?"],
    o:[
      ["Join immediately so that you do not miss out", "সুযোগ হাতছাড়া না করতে সঙ্গে সঙ্গে যোগ দেওয়া", "मौका न छूटे इसलिए तुरंत शामिल हो जाना"],
      ["Check only the photos on the group's social media page", "শুধু গোষ্ঠীর সোশ্যাল মিডিয়া পেজের ছবি দেখা", "केवल समूह के सोशल मीडिया पेज की तस्वीरें देखना"],
      ["Understand the rules, savings, meetings and loan terms", "নিয়ম, সঞ্চয়, সভা ও ঋণের শর্ত বুঝে নেওয়া", "नियम, बचत, बैठकें और ऋण की शर्तें समझना"],
      ["Pay a large entry fee before asking any questions", "কোনো প্রশ্ন করার আগেই বড় অঙ্কের প্রবেশ-ফি দেওয়া", "कोई सवाल पूछे बिना बड़ी प्रवेश फीस चुका देना"]
    ],a:2
  },
  {
    cat:"public-support-community",
    q:["What is a useful way for women entrepreneurs to reduce material costs?", "মহিলা উদ্যোক্তাদের উপকরণের খরচ কমানোর উপায় কী?", "महिला उद्यमियों के लिए सामग्री लागत कम करने का उपयोगी तरीका क्या है?"],
    o:[
      ["Buy raw materials from unknown sellers without checking", "যাচাই না করে অচেনা বিক্রেতার কাছ থেকে কাঁচামাল কেনা", "बिना जाँचे अनजान विक्रेताओं से कच्चा माल खरीदना"],
      ["Reduce product quality without telling the buyers", "ক্রেতাদের না জানিয়ে পণ্যের মান কমানো", "ग्राहकों को बताए बिना उत्पाद की गुणवत्ता घटाना"],
      ["Stop maintaining stock records to save time", "সময় বাঁচাতে মজুতের হিসাব রাখা বন্ধ করা", "समय बचाने के लिए स्टॉक का रिकॉर्ड रखना बंद करना"],
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
    q:["Where can you find genuine information about community or self-help groups near you?", "আপনার কাছাকাছি কমিউনিটি বা স্বনির্ভর গোষ্ঠী সম্পর্কে সঠিক তথ্য কোথায় পাবেন?", "अपने पास के सामुदायिक या स्वयं सहायता समूहों की सही जानकारी कहाँ से मिल सकती है?"],
    o:[
      ["From social media posts and unverified online groups", "সোশ্যাল মিডিয়া পোস্ট ও যাচাই-না-করা অনলাইন গ্রুপ থেকে", "सोशल मीडिया पोस्ट और बिना जाँचे ऑनलाइन समूहों से"],
      ["From local government offices, recognised banks or official portals", "স্থানীয় সরকারি দপ্তর, স্বীকৃত ব্যাংক বা অফিসিয়াল পোর্টাল থেকে", "स्थानीय सरकारी कार्यालयों, मान्यता प्राप्त बैंकों या आधिकारिक पोर्टलों से"],
      ["From private agents offering guaranteed group membership", "নিশ্চিত গোষ্ঠী-সদস্যতার প্রতিশ্রুতি দেওয়া বেসরকারি এজেন্টদের কাছ থেকে", "पक्की समूह-सदस्यता का वादा करने वाले निजी एजेंटों से"],
      ["From advertisements without checking the organisation", "সংস্থা যাচাই না করে বিজ্ঞাপন থেকে", "संस्था की जाँच किए बिना विज्ञापनों से"]
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
    q:["Why should a community savings group keep written records of meetings, savings and loans?", "কমিউনিটি সঞ্চয় গোষ্ঠীর সভা, সঞ্চয় ও ঋণের লিখিত হিসাব রাখা কেন উচিত?", "सामुदायिक बचत समूह को बैठकों, बचत और ऋण का लिखित रिकॉर्ड क्यों रखना चाहिए?"],
    o:[
      ["To keep transparency and avoid disputes among members", "সদস্যদের মধ্যে স্বচ্ছতা বজায় রাখতে ও বিবাদ এড়াতে", "सदस्यों में पारदर्शिता बनाए रखने और विवाद से बचने के लिए"],
      ["To hide loan details from the other members", "অন্য সদস্যদের কাছ থেকে ঋণের তথ্য লুকাতে", "अन्य सदस्यों से ऋण की जानकारी छिपाने के लिए"],
      ["To avoid holding regular meetings with members", "সদস্যদের সঙ্গে নিয়মিত সভা না করতে", "सदस्यों के साथ नियमित बैठकें न करने के लिए"],
      ["To let one person control all the group's money", "গোষ্ঠীর সব টাকার নিয়ন্ত্রণ একজনের হাতে দিতে", "समूह के सारे पैसे का नियंत्रण एक व्यक्ति को देने के लिए"]
    ],a:0
  },
  {
    cat:"public-support-community",
    q:["Why should you keep an acknowledgement after submitting an application?", "আবেদন জমা দেওয়ার পরে স্বীকৃতিপত্র রাখা কেন জরুরি?", "आवेदन जमा करने के बाद पावती रखना क्यों जरूरी है?"],
    o:[
      ["It guarantees that the application will be approved", "এটি আবেদন মঞ্জুরের নিশ্চয়তা দেয়", "यह आवेदन स्वीकृत होने की गारंटी देता है"],
      ["It helps track the application and prove submission", "আবেদনের অবস্থা জানতে ও জমার প্রমাণ রাখতে সাহায্য করে", "आवेदन की स्थिति जानने और जमा करने का प्रमाण रखने में मदद करता है"],
      ["It replaces all supporting documents", "সব সহায়ক নথির বদলি হয়", "सभी सहायक दस्तावेजों का विकल्प बनती है"],
      ["It removes the need to meet any deadlines", "এটি কোনো সময়সীমা মানার প্রয়োজন দূর করে", "यह किसी भी समय-सीमा का पालन ज़रूरी नहीं रहने देता"]
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
      ["Use official channels and share only required documents", "সরকারি মাধ্যমে শুধু প্রয়োজনীয় নথি জমা দিন", "आधिकारिक माध्यम से केवल आवश्यक दस्तावेज़ दें"]
    ],a:3
  },

  // ===== Privacy, Technology & Smart Lady App =====
  {
    cat:"privacy-app",
    q:["How should you type a trusted person's phone number in Smart SOS?", "Smart SOS-এ বিশ্বস্ত ব্যক্তির ফোন নম্বর কীভাবে লিখবেন?", "Smart SOS में भरोसेमंद व्यक्ति का फ़ोन नंबर कैसे दर्ज करें?"],
    o:[
      ["The full number, including the country code", "দেশের কোডসহ পুরো নম্বর", "देश कोड सहित पूरा नंबर"],
      ["Only the last four digits of the number", "নম্বরের শুধু শেষ চারটি অঙ্ক", "नंबर के केवल अंतिम चार अंक"],
      ["Only the person's name, without any number", "কোনো নম্বর ছাড়া শুধু ব্যক্তির নাম", "बिना किसी नंबर के केवल व्यक्ति का नाम"],
      ["The landline number of the nearest police station", "নিকটতম থানার ল্যান্ডলাইন নম্বর", "निकटतम थाने का लैंडलाइन नंबर"]
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
      ["To apply for a bank loan from the app", "অ্যাপ থেকে ব্যাংকঋণের আবেদন করতে", "ऐप से बैंक ऋण के लिए आवेदन करने के लिए"],
      ["To select, tick and share shopping items", "কেনাকাটার জিনিস বেছে টিক দিয়ে শেয়ার করা", "खरीदारी की वस्तुएँ चुनना, टिक करना और साझा करना"],
      ["To track a stolen phone through the app", "অ্যাপের মাধ্যমে চুরি যাওয়া ফোন খুঁজতে", "ऐप के ज़रिए चोरी हुआ फोन ढूँढने के लिए"],
      ["To send emergency calls automatically to the police", "পুলিশকে স্বয়ংক্রিয়ভাবে জরুরি কল পাঠাতে", "पुलिस को अपने-आप आपात कॉल भेजने के लिए"]
    ],a:1
  },
  {
    cat:"privacy-app",
    q:["What should users do after adding emergency contacts?", "জরুরি যোগাযোগ যোগ করার পর ব্যবহারকারীর কী করা উচিত?", "आपातकालीन संपर्क जोड़ने के बाद उपयोगकर्ता को क्या करना चाहिए?"],
    o:[
      ["Assume the contacts already know what an SOS message means", "ধরে নেওয়া যে যোগাযোগকারীরা SOS বার্তার মানে জানেন", "मान लेना कि संपर्क पहले से SOS संदेश का मतलब जानते हैं"],
      ["Remove their numbers from the phone to protect privacy", "গোপনীয়তার জন্য ফোন থেকে তাঁদের নম্বর মুছে ফেলা", "निजता के लिए फोन से उनके नंबर हटा देना"],
      ["Tell them what an SOS message means and test the setup safely", "SOS বার্তার অর্থ জানিয়ে নিরাপদে সেটআপ পরীক্ষা করা", "उन्हें SOS संदेश का अर्थ बताकर सुरक्षित रूप से सेटअप जाँचना"],
      ["Share the app lock PIN with all of them", "অ্যাপের লক PIN তাঁদের সবাইকে জানিয়ে দেওয়া", "ऐप का लॉक PIN उन सभी को बता देना"]
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
    q:["A citizen travelling abroad loses a passport. What should they do first?", "বিদেশে ভ্রমণের সময় পাসপোর্ট হারালে প্রথমে কী করা উচিত?", "विदेश यात्रा के दौरान पासपोर्ट खो जाए तो सबसे पहले क्या करना चाहिए?"],
    o:[
      ["Continue travelling without reporting the loss", "ক্ষতির কথা না জানিয়েই ভ্রমণ চালিয়ে যাওয়া", "नुकसान की रिपोर्ट किए बिना यात्रा जारी रखना"],
      ["Ask a hotel employee to issue a replacement passport", "হোটেলকর্মীকে বদলি পাসপোর্ট ইস্যু করতে বলা", "होटल कर्मचारी से नया पासपोर्ट जारी करने को कहना"],
      ["Contact the nearest embassy or consulate and the local police", "নিকটতম দূতাবাস বা কনস্যুলেট এবং স্থানীয় পুলিশের সঙ্গে যোগাযোগ করা", "नज़दीकी दूतावास या वाणिज्य दूतावास और स्थानीय पुलिस से संपर्क करें"],
      ["Post a photo of the passport online to ask for help", "সাহায্য চাইতে পাসপোর্টের ছবি অনলাইনে পোস্ট করা", "मदद माँगने के लिए पासपोर्ट की फोटो ऑनलाइन डालना"]
    ],a:2
  },
  {
    cat:"global-awareness",
    q:["An overseas recruiter asks for a large upfront fee but provides no verified job details. What should you do?", "বিদেশের একজন নিয়োগকারী বড় অঙ্কের অগ্রিম ফি চাইছেন কিন্তু যাচাইযোগ্য চাকরির বিবরণ দিচ্ছেন না। কী করবেন?", "विदेश का कोई भर्तीकर्ता बड़ी अग्रिम फीस माँगता है पर कोई सत्यापित नौकरी विवरण नहीं देता। क्या करें?"],
    o:[
      ["Pay the fee to secure the job quickly", "দ্রুত চাকরি নিশ্চিত করতে ফি দিয়ে দেওয়া", "नौकरी जल्दी पक्की करने के लिए फीस दे देना"],
      ["Submit your passport and wait for confirmation", "পাসপোর্ট জমা দিয়ে নিশ্চিতকরণের অপেক্ষা করা", "पासपोर्ट जमा करके पुष्टि का इंतज़ार करना"],
      ["Accept the offer based on verbal promises", "মৌখিক প্রতিশ্রুতির ভিত্তিতে প্রস্তাব মেনে নেওয়া", "मौखिक वादों के आधार पर प्रस्ताव मान लेना"],
      ["Verify the recruiter and job through official sources before proceeding", "এগোনোর আগে সরকারি সূত্রে নিয়োগকারী ও চাকরি যাচাই করা", "आगे बढ़ने से पहले आधिकारिक स्रोतों से भर्तीकर्ता और नौकरी की जाँच करें"]
    ],a:3
  },
  {
    cat:"global-awareness",
    q:["Before travelling abroad, how should you check entry and visa requirements?", "বিদেশযাত্রার আগে প্রবেশ ও ভিসার নিয়ম কীভাবে যাচাই করবেন?", "विदेश यात्रा से पहले प्रवेश और वीज़ा नियम कैसे जाँचेंगे?"],
    o:[
      ["Check the destination country's official immigration or embassy website", "গন্তব্য দেশের অফিসিয়াল ইমিগ্রেশন বা দূতাবাসের ওয়েবসাইট দেখা", "गंतव्य देश की आधिकारिक इमिग्रेशन या दूतावास वेबसाइट देखना"],
      ["Follow advice from travel groups without further verification", "আরও যাচাই না করে ভ্রমণ-গ্রুপের পরামর্শ মানা", "आगे जाँच किए बिना यात्रा समूहों की सलाह मानना"],
      ["Rely only on information shared by friends and relatives", "শুধু বন্ধু ও আত্মীয়দের দেওয়া তথ্যের ওপর ভরসা করা", "केवल मित्रों और रिश्तेदारों की दी जानकारी पर भरोसा करना"],
      ["Accept an agent's verbal confirmation without checking", "যাচাই না করে এজেন্টের মৌখিক নিশ্চয়তা মেনে নেওয়া", "बिना जाँचे एजेंट की मौखिक पुष्टि मान लेना"]
    ],a:0
  },
  {
    cat:"global-awareness",
    q:["You face a medical emergency while abroad. Which preparation is most useful?", "বিদেশে চিকিৎসাজনিত জরুরি অবস্থায় আগে থেকে কোন প্রস্তুতিটি সবচেয়ে কাজে আসে?", "विदेश में चिकित्सा आपात स्थिति में पहले से कौन-सी तैयारी सबसे उपयोगी है?"],
    o:[
      ["Wait until the hospital asks for every document", "হাসপাতাল সব নথি চাইবে—ততক্ষণ অপেক্ষা করা", "अस्पताल के सभी दस्तावेज़ माँगने तक प्रतीक्षा करना"],
      ["Know your insurance cover and local emergency contact process", "বিমার আওতা ও স্থানীয় জরুরি যোগাযোগের পদ্ধতি জানা", "बीमा कवरेज और स्थानीय आपातकालीन संपर्क प्रक्रिया जानना"],
      ["Use a number found in an online comment", "অনলাইন মন্তব্যে পাওয়া নম্বর ব্যবহার করা", "ऑनलाइन टिप्पणी में मिला नंबर इस्तेमाल करना"],
      ["Assume your home country's emergency number works there", "ধরে নেওয়া যে নিজের দেশের জরুরি নম্বর সেখানেও কাজ করবে", "मान लेना कि अपने देश का आपातकालीन नंबर वहाँ भी चलेगा"]
    ],a:1
  },
  {
    cat:"global-awareness",
    q:["A person offers to arrange a work permit abroad but guarantees approval without checking your documents. What should you do?", "কেউ নথি না দেখেই বিদেশে ওয়ার্ক পারমিট নিশ্চিত করার প্রতিশ্রুতি দিলে কী করবেন?", "कोई आपके दस्तावेज़ देखे बिना विदेश का वर्क परमिट पक्का कराने का दावा करे तो क्या करेंगे?"],
    o:[
      ["Pay quickly before the offer expires", "অফার শেষ হওয়ার আগেই তাড়াতাড়ি টাকা দেওয়া", "ऑफर खत्म होने से पहले जल्दी पैसे देना"],
      ["Share your banking passwords to prove your identity", "পরিচয় প্রমাণে ব্যাংকের পাসওয়ার্ড জানানো", "पहचान साबित करने के लिए बैंक के पासवर्ड बताना"],
      ["Verify the permit process with official immigration sources", "সরকারি ইমিগ্রেশন সূত্রে পারমিটের প্রক্রিয়া যাচাই করা", "आधिकारिक इमिग्रेशन स्रोतों से परमिट प्रक्रिया की पुष्टि करना"],
      ["Ask the agent for a verbal guarantee only", "শুধু এজেন্টের মৌখিক নিশ্চয়তা চাওয়া", "केवल एजेंट से मौखिक गारंटी माँगना"]
    ],a:2
  },
  {
    cat:"global-awareness",
    q:["Your phone is lost while travelling in another country. What should you do promptly?", "অন্য দেশে ভ্রমণের সময় ফোন হারালে দ্রুত কী করা উচিত?", "दूसरे देश में यात्रा के दौरान फोन खो जाए तो तुरंत क्या करना चाहिए?"],
    o:[
      ["Sign in on a stranger's device and save your passwords", "অচেনা কারও ডিভাইসে সাইন-ইন করে পাসওয়ার্ড সেভ করা", "किसी अजनबी के डिवाइस में साइन-इन करके पासवर्ड सहेजना"],
      ["Wait several days before taking any action", "কিছু করার আগে কয়েক দিন অপেক্ষা করা", "कोई कदम उठाने से पहले कई दिन इंतज़ार करना"],
      ["Post your account recovery codes publicly", "আপনার অ্যাকাউন্ট রিকভারি কোড প্রকাশ্যে পোস্ট করা", "अपने अकाउंट के रिकवरी कोड सार्वजनिक रूप से पोस्ट करना"],
      ["Secure your accounts, contact your carrier and report the loss", "অ্যাকাউন্ট সুরক্ষিত করা, ক্যারিয়ারকে জানানো ও ক্ষতির কথা জানানো", "अकाउंट सुरक्षित करें, कैरियर को बताएँ और नुकसान की रिपोर्ट करें"]
    ],a:3
  },
  {
    cat:"global-awareness",
    q:["At an overseas airport, someone asks to carry your sealed package through security. What is the safest choice?", "বিদেশের বিমানবন্দরে কেউ নিরাপত্তা পরীক্ষার মধ্য দিয়ে আপনার জন্য সিল করা প্যাকেট নিতে চাইলে নিরাপদ সিদ্ধান্ত কী?", "विदेशी हवाई अड्डे पर कोई आपसे अपना सीलबंद पैकेट सुरक्षा जाँच से ले जाने को कहे तो सुरक्षित निर्णय क्या है?"],
    o:[
      ["Decline; carry only items you packed and checked yourself", "প্রত্যাখ্যান করা; শুধু নিজে প্যাক ও পরীক্ষা করা জিনিস বহন করা", "मना करें; केवल वही सामान ले जाएँ जो आपने खुद पैक और जाँचा हो"],
      ["Carry it after taking a photograph of the package", "প্যাকেটের ছবি তুলে নিয়ে সেটি বহন করা", "पैकेट की फोटो खींचकर उसे ले जाना"],
      ["Agree if the package looks small and light", "প্যাকেট ছোট ও হালকা দেখালে রাজি হওয়া", "पैकेट छोटा और हल्का दिखे तो मान जाना"],
      ["Ask for a cash reward before you agree to it", "রাজি হওয়ার আগে নগদ পুরস্কার চাওয়া", "मानने से पहले नकद इनाम माँगना"]
    ],a:0
  },
  {
    cat:"global-awareness",
    q:["When exchanging money abroad, which practice helps reduce fraud?", "বিদেশে মুদ্রা বিনিময়ের সময় প্রতারণার ঝুঁকি কমাতে কী করা উচিত?", "विदेश में मुद्रा बदलते समय धोखाधड़ी का जोखिम घटाने के लिए क्या करना चाहिए?"],
    o:[
      ["Exchange cash with anyone offering a better rate", "যে-কেউ ভালো রেট দিলে তার সঙ্গে নগদ বদল করা", "जो भी बेहतर दर दे उसी से नकद बदलवाना"],
      ["Use authorised providers and check the rate and receipt", "অনুমোদিত প্রদানকারী ব্যবহার করে রেট ও রসিদ মিলিয়ে দেখা", "अधिकृत प्रदाता चुनें और दर व रसीद जाँचें"],
      ["Hand over your bank card and PIN to the exchanger", "বিনিময়কারীকে ব্যাংক কার্ড ও PIN দিয়ে দেওয়া", "मुद्रा बदलने वाले को बैंक कार्ड और PIN सौंप देना"],
      ["Ignore the amount printed on the receipt", "রসিদে ছাপা অঙ্ক উপেক্ষা করা", "रसीद पर छपी राशि को अनदेखा करना"]
    ],a:1
  },
  {
    cat:"global-awareness",
    q:["You are unsure whether an action is legal in a country you are visiting. What is the sensible approach?", "ভ্রমণরত দেশে কোনো কাজ আইনসম্মত কি না নিশ্চিত না হলে কী করা উচিত?", "जिस देश में आप जा रहे हैं वहाँ कोई काम कानूनी है या नहीं, यह स्पष्ट न हो तो क्या करना चाहिए?"],
    o:[
      ["Assume your home country's rules apply there", "ধরে নেওয়া যে নিজের দেশের নিয়মই সেখানে প্রযোজ্য", "मान लेना कि आपके देश के नियम वहाँ भी लागू होते हैं"],
      ["Follow the advice of anonymous online users", "অজ্ঞাতনামা অনলাইন ব্যবহারকারীদের পরামর্শ মানা", "अज्ञात ऑनलाइन उपयोगकर्ताओं की सलाह मानना"],
      ["Check official local guidance and seek qualified advice", "স্থানীয় অফিসিয়াল নির্দেশিকা দেখা ও প্রয়োজনে যোগ্য পরামর্শ নেওয়া", "स्थानीय आधिकारिक दिशानिर्देश देखें और ज़रूरत हो तो योग्य सलाह लें"],
      ["Ask a local stranger to take responsibility for you", "কোনো স্থানীয় অচেনা লোককে আপনার দায় নিতে বলা", "किसी स्थानीय अजनबी से अपनी ज़िम्मेदारी लेने को कहना"]
    ],a:2
  },
  {
    cat:"global-awareness",
    q:["During a natural disaster abroad, what should you do to get reliable instructions?", "বিদেশে প্রাকৃতিক দুর্যোগের সময় নির্ভরযোগ্য নির্দেশনা পেতে কী করবেন?", "विदेश में प्राकृतिक आपदा के दौरान भरोसेमंद निर्देश पाने के लिए क्या करेंगे?"],
    o:[
      ["Forward unverified voice messages to your contacts", "যাচাই-না-করা ভয়েস বার্তা পরিচিতদের ফরোয়ার্ড করা", "बिना जाँचे वॉइस संदेश अपने संपर्कों को फ़ॉरवर्ड करना"],
      ["Rely only on old travel advice you saved", "আগে সংরক্ষিত পুরোনো ভ্রমণ-পরামর্শের ওপরই ভরসা করা", "पहले से सहेजी पुरानी यात्रा सलाह पर ही भरोसा करना"],
      ["Return to the affected area to collect belongings", "জিনিসপত্র আনতে ক্ষতিগ্রস্ত এলাকায় ফিরে যাওয়া", "सामान लाने के लिए प्रभावित क्षेत्र में लौट जाना"],
      ["Follow local authorities and your embassy's official updates", "স্থানীয় কর্তৃপক্ষ ও দূতাবাসের অফিসিয়াল নির্দেশ মেনে চলা", "स्थानीय अधिकारियों और दूतावास के आधिकारिक अपडेट का पालन करें"]
    ],a:3
  },
];

/* Groups built from the category field (10 questions per category = one exam part) */
const QUESTION_GROUPS = CATEGORIES.map(function(c){
  return { id:c.id, title:c.title, questions: QUESTIONS.filter(function(q){ return q.cat === c.id; }) };
});

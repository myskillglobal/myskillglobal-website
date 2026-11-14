/* Smart Lady — Question Bank (100 questions, 10 categories x 10)
 * Each question: q:[EN,BN,HI]  o:[[EN,BN,HI] x4]  a:correct index (0-3)  cat:category id
 * Parts/groups are built from `cat` (see QUESTION_GROUPS at the bottom), not from question numbers. */

const CATEGORIES = [
  { id:"personal-safety", title:{ en:"Personal Safety & Situational Awareness", bn:"ব্যক্তিগত নিরাপত্তা ও পরিস্থিতি সচেতনতা", hi:"व्यक्तिगत सुरक्षा एवं परिस्थिति जागरूकता" } },
  { id:"cyber-safety", title:{ en:"Cyber Safety & Digital Security", bn:"সাইবার নিরাপত্তা ও ডিজিটাল সুরক্ষা", hi:"साइबर सुरक्षा एवं डिजिटल संरक्षण" } },
  { id:"womens-rights", title:{ en:"Women's Rights & Legal Awareness", bn:"নারীর অধিকার ও আইনি সচেতনতা", hi:"महिला अधिकार एवं कानूनी जागरूकता" } },
  { id:"emergency-sos", title:{ en:"Emergency Response & Phone Safety", bn:"জরুরি পরিস্থিতি মোকাবিলা ও ফোন সুরক্ষা", hi:"आपातकालीन प्रतिक्रिया एवं फ़ोन सुरक्षा" } },
  { id:"money-management", title:{ en:"Financial Literacy & Money Management", bn:"আর্থিক শিক্ষা ও অর্থ ব্যবস্থাপনা", hi:"वित्तीय साक्षरता एवं धन प्रबंधन" } },
  { id:"banking-insurance", title:{ en:"Banking, Insurance & Digital Payments", bn:"ব্যাংকিং, বিমা ও ডিজিটাল পেমেন্ট", hi:"बैंकिंग, बीमा एवं डिजिटल भुगतान" } },
  { id:"home-business", title:{ en:"Entrepreneurship & Home-Based Business", bn:"উদ্যোক্তা দক্ষতা ও ঘরোয়া ব্যবসা", hi:"उद्यमिता एवं घरेलू व्यवसाय" } },
  { id:"govt-shg", title:{ en:"Government Schemes & Self-Help Groups", bn:"সরকারি প্রকল্প ও স্বনির্ভর গোষ্ঠী", hi:"सरकारी योजनाएँ एवं स्वयं सहायता समूह" } },
  { id:"privacy-app", title:{ en:"Privacy, Technology & Smart Lady App", bn:"গোপনীয়তা, প্রযুক্তি ও Smart Lady অ্যাপ", hi:"गोपनीयता, तकनीक एवं Smart Lady ऐप" } },
  { id:"helplines-awareness", title:{ en:"Helplines, Health & Everyday Safety", bn:"হেল্পলাইন, স্বাস্থ্য ও দৈনন্দিন সুরক্ষা", hi:"हेल्पलाइन, स्वास्थ्य एवं दैनिक सुरक्षा" } },
];

const QUESTIONS = [

  // ===== Personal Safety & Situational Awareness =====
  {
    cat:"personal-safety",
    q:["A stranger offers you a lift when you are alone. What is the safest response?", "একা থাকা অবস্থায় অপরিচিত কেউ লিফট দিতে চাইলে নিরাপদ সিদ্ধান্ত কী?", "अकेले होने पर कोई अनजान व्यक्ति लिफ्ट देने की पेशकश करे तो सुरक्षित निर्णय क्या है?"],
    o:[
      ["Accept the lift after looking at the vehicle", "গাড়ি দেখে নিয়ে লিফট গ্রহণ করা", "गाड़ी देखकर लिफ्ट स्वीकार कर लेना"],
      ["Decline politely and move to a safer public place", "ভদ্রভাবে না বলে নিরাপদ জনসমাগমস্থলে যাওয়া", "विनम्रता से मना करके सुरक्षित सार्वजनिक स्थान पर जाना"],
      ["Ask the driver to phone your family to confirm", "যাচাই করতে চালককে আপনার পরিবারকে ফোন করতে বলা", "पुष्टि के लिए चालक से आपके परिवार को फोन करवाना"],
      ["Tell the driver your destination before deciding", "সিদ্ধান্তের আগে চালককে গন্তব্য জানানো", "निर्णय से पहले चालक को अपना गंतव्य बताना"]
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
      ["Confront the suspected person and demand answers", "সন্দেহভাজন ব্যক্তির মুখোমুখি হয়ে জবাব চাওয়া", "संदिग्ध व्यक्ति का सामना करके जवाब माँगना"],
      ["Call emergency services and share factual details", "জরুরি পরিষেবায় ফোন করে তথ্য জানানো", "आपातकालीन सेवा को फोन करके तथ्य बताना"],
      ["Post about the incident on social media to get attention", "মনোযোগ পেতে ঘটনাটি সোশ্যাল মিডিয়ায় পোস্ট করা", "ध्यान खींचने के लिए घटना को सोशल मीडिया पर डालना"],
      ["Follow the person yourself to collect evidence", "প্রমাণ জোগাড় করতে নিজে ব্যক্তির পিছু নেওয়া", "सबूत जुटाने के लिए खुद उस व्यक्ति का पीछा करना"]
    ],a:1
  },
  {
    cat:"personal-safety",
    q:["Which is a warning sign of a suspicious job offer?", "সন্দেহজনক চাকরির প্রস্তাবের একটি লক্ষণ কোনটি?", "संदिग्ध नौकरी के प्रस्ताव का एक संकेत कौन-सा है?"],
    o:[
      ["A written job description with duties and working hours", "দায়িত্ব ও কাজের সময়সহ লিখিত চাকরির বিবরণ", "कार्य और समय-सीमा सहित लिखित नौकरी विवरण"],
      ["A company address that can be verified independently", "স্বাধীনভাবে যাচাই করা যায় এমন কোম্পানির ঠিকানা", "स्वतंत्र रूप से जाँचा जा सकने वाला कंपनी का पता"],
      ["Guaranteed high income with an advance fee", "আগাম টাকা নিয়ে নিশ্চিত বেশি আয়ের প্রতিশ্রুতি", "अग्रिम शुल्क लेकर निश्चित अधिक कमाई का वादा"],
      ["A clear interview process with a written offer letter", "লিখিত নিয়োগপত্রসহ স্পষ্ট ইন্টারভিউ প্রক্রিয়া", "लिखित नियुक्ति पत्र सहित स्पष्ट साक्षात्कार प्रक्रिया"]
    ],a:2
  },
  {
    cat:"personal-safety",
    q:["What is a sensible way to share your travel plans?", "ভ্রমণের পরিকল্পনা জানানোর ভালো উপায় কোনটি?", "यात्रा की योजना बताने का उचित तरीका क्या है?"],
    o:[
      ["Tell a trusted person your route and expected arrival", "বিশ্বস্ত কাউকে পথ ও পৌঁছানোর সম্ভাব্য সময় জানানো", "विश्वसनीय व्यक्ति को रास्ता और पहुँचने का समय बताना"],
      ["Share only the destination, and only after you arrive", "শুধু গন্তব্য, তাও পৌঁছানোর পরে জানানো", "केवल गंतव्य, वह भी पहुँचने के बाद बताना"],
      ["Send the details only to people you met online", "শুধু অনলাইনে পরিচিতদের বিস্তারিত পাঠানো", "विवरण केवल ऑनलाइन मिले लोगों को भेजना"],
      ["Keep the whole journey completely private", "পুরো যাত্রাটি সম্পূর্ণ গোপন রাখা", "पूरी यात्रा को पूरी तरह गुप्त रखना"]
    ],a:0
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
    q:["A group repeatedly makes threatening comments and follows you on the way home. What is a safer response?", "বাড়ি ফেরার পথে কয়েকজন বারবার কটূক্তি করে ও পিছু নেয়। নিরাপদ পদক্ষেপ কী?", "घर लौटते समय कुछ लोग बार-बार अश्लील टिप्पणियाँ करते और पीछा करते हैं। सुरक्षित कदम क्या है?"],
    o:[
      ["Confront the group alone and demand that they stop immediately", "একা দলটির মুখোমুখি হয়ে সঙ্গে সঙ্গে থামতে বলা", "अकेले उस समूह का सामना करके तुरंत रुकने को कहना"],
      ["Change to a quiet, isolated route to avoid being seen by them", "ওদের চোখ এড়াতে নির্জন, ফাঁকা রাস্তা ধরে যাওয়া", "उनकी नज़र से बचने के लिए सुनसान, खाली रास्ता लेना"],
      ["Go to a busy safe place, inform trusted people, keep evidence and report it", "জনবহুল নিরাপদ স্থানে গিয়ে বিশ্বস্তজনকে জানানো, প্রমাণ রেখে অভিযোগ করা", "भीड़भाड़ वाली सुरक्षित जगह जाकर भरोसेमंद लोगों को बताएँ, सबूत रखकर शिकायत करें"],
      ["Post the alleged offenders' personal details online to shame them", "অভিযুক্তদের লজ্জা দিতে তাদের ব্যক্তিগত তথ্য অনলাইনে প্রকাশ করা", "आरोपितों को शर्मिंदा करने के लिए उनकी निजी जानकारी ऑनलाइन डालना"]
    ],a:2
  },
  {
    cat:"personal-safety",
    q:["What is the best response to pressure to make an immediate decision?", "তাৎক্ষণিক সিদ্ধান্ত নেওয়ার চাপ দিলে ভালো প্রতিক্রিয়া কী?", "तुरंत निर्णय लेने का दबाव हो तो उचित प्रतिक्रिया क्या है?"],
    o:[
      ["Agree at once to avoid losing the opportunity", "সুযোগ হারানোর ভয়ে সঙ্গে সঙ্গে রাজি হওয়া", "अवसर खोने के डर से तुरंत हाँ कर देना"],
      ["Pay a small amount first to hold the offer", "অফার ধরে রাখতে আগে অল্প টাকা দিয়ে দেওয়া", "ऑफर रोके रखने के लिए पहले थोड़ी रकम दे देना"],
      ["Take time to verify and consult someone trusted", "যাচাই ও পরামর্শের জন্য সময় নেওয়া", "जाँच और सलाह के लिए समय लेना"],
      ["Share personal details to build trust quickly", "দ্রুত বিশ্বাস গড়তে ব্যক্তিগত তথ্য দিয়ে দেওয়া", "जल्दी भरोसा बनाने के लिए निजी जानकारी दे देना"]
    ],a:2
  },

  // ===== Cyber Safety & Digital Security =====
  {
    cat:"cyber-safety",
    q:["What should you do when a caller claims to be a bank officer and asks for your OTP?", "কেউ ব্যাংককর্মী পরিচয় দিয়ে OTP চাইলে কী করবেন?", "कोई बैंक अधिकारी बनकर OTP माँगे तो क्या करेंगे?"],
    o:[
      ["Share only the first few digits to prove you are the account holder", "অ্যাকাউন্টধারী প্রমাণ করতে OTP-র শুধু প্রথম কয়েকটি সংখ্যা জানানো", "खाताधारक साबित करने के लिए OTP के केवल शुरुआती कुछ अंक बताना"],
      ["Share it only after checking that the caller ID shows the bank's name", "কলার আইডিতে ব্যাংকের নাম দেখালে তবেই OTP জানানো", "कॉलर आईडी में बैंक का नाम दिखे तभी OTP बताना"],
      ["Ask the caller to send a confirmation message and then share it", "কলারকে নিশ্চিতকরণ বার্তা পাঠাতে বলে তারপর OTP জানানো", "कॉल करने वाले से पुष्टि संदेश भिजवाकर फिर OTP बताना"],
      ["Never share it and contact the bank through official channels", "কখনও না দিয়ে সরকারি যোগাযোগ মাধ্যমে ব্যাংকের সঙ্গে যোগাযোগ করা", "कभी साझा न करके आधिकारिक माध्यम से बैंक से संपर्क करना"]
    ],a:3
  },
  {
    cat:"cyber-safety",
    q:["Which action is required to receive money through UPI?", "UPI-তে টাকা গ্রহণ করতে সাধারণত কী করতে হয়?", "UPI से पैसे प्राप्त करने के लिए सामान्यतः क्या करना होता है?"],
    o:[
      ["Enter your UPI PIN to receive the money", "টাকা পেতে আপনার UPI PIN দেওয়া", "पैसे पाने के लिए अपना UPI PIN डालना"],
      ["Approve a collect request with PIN", "PIN দিয়ে কালেক্ট রিকোয়েস্ট অনুমোদন করা", "PIN से कलेक्ट अनुरोध स्वीकार करना"],
      ["No UPI PIN is needed to receive money", "টাকা পেতে UPI PIN লাগে না", "पैसे प्राप्त करने के लिए UPI PIN की जरूरत नहीं होती"],
      ["Share your debit card PIN with the sender", "প্রেরককে ডেবিট কার্ডের PIN জানানো", "भेजने वाले को डेबिट कार्ड का PIN बताना"]
    ],a:2
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
      ["Forward the message to relatives so they can also win", "আত্মীয়দেরও জেতার সুযোগ দিতে বার্তাটি ফরোয়ার্ড করা", "रिश्तेदार भी जीतें इसलिए संदेश उन्हें फ़ॉरवर्ड करना"],
      ["Do not pay and verify the claim independently", "টাকা না দিয়ে দাবিটি নিজে যাচাই করা", "पैसे न देकर दावे की स्वतंत्र जाँच करना"]
    ],a:3
  },
  {
    cat:"cyber-safety",
    q:["What should you do if someone threatens to publish your private photos?", "কেউ ব্যক্তিগত ছবি প্রকাশের হুমকি দিলে কী করবেন?", "कोई निजी तस्वीरें सार्वजनिक करने की धमकी दे तो क्या करेंगे?"],
    o:[
      ["Pay once to settle the matter and make the person stop", "ব্যক্তিটি থামবে ভেবে একবার টাকা দিয়ে বিষয়টি মেটানো", "व्यक्ति रुक जाएगा सोचकर एक बार पैसे देकर मामला निपटाना"],
      ["Save evidence, avoid payment and report the threat", "প্রমাণ সংরক্ষণ করে টাকা না দিয়ে অভিযোগ করা", "सबूत सुरक्षित रखकर पैसे न देना और शिकायत करना"],
      ["Delete every message at once so that nobody finds out", "কেউ জানতে না পারে বলে সব বার্তা সঙ্গে সঙ্গে মুছে ফেলা", "किसी को पता न चले इसलिए सारे संदेश तुरंत मिटा देना"],
      ["Send more photos to negotiate and calm the person down", "ব্যক্তিকে শান্ত করতে আলোচনার জন্য আরও ছবি পাঠানো", "व्यक्ति को शांत करने के लिए बातचीत में और फोटो भेजना"]
    ],a:1
  },
  {
    cat:"cyber-safety",
    q:["Which password practice is safer?", "কোন পাসওয়ার্ড ব্যবহারের অভ্যাস বেশি নিরাপদ?", "कौन-सी पासवर्ड आदत अधिक सुरक्षित है?"],
    o:[
      ["Use the same easy password everywhere so you never forget it", "ভুলে না যাওয়ার জন্য সব জায়গায় একই সহজ পাসওয়ার্ড ব্যবহার করা", "भूल न जाएँ इसलिए हर जगह एक ही आसान पासवर्ड रखना"],
      ["Use your name together with your birth year", "নিজের নামের সঙ্গে জন্মসাল জুড়ে পাসওয়ার্ড বানানো", "अपने नाम के साथ जन्म वर्ष जोड़कर पासवर्ड बनाना"],
      ["Use a long, unique password for each important account", "প্রতিটি গুরুত্বপূর্ণ অ্যাকাউন্টে দীর্ঘ ও আলাদা পাসওয়ার্ড", "हर महत्वपूर्ण अकाउंट के लिए लंबा और अलग पासवर्ड"],
      ["Use your phone number as the password for every account", "প্রতিটি অ্যাকাউন্টে ফোন নম্বরকেই পাসওয়ার্ড করা", "हर अकाउंट में फोन नंबर को ही पासवर्ड बनाना"]
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
    q:["What should you do if you notice an unauthorised UPI transaction?", "অননুমোদিত UPI লেনদেন দেখলে কী করবেন?", "अनधिकृत UPI लेनदेन दिखे तो क्या करेंगे?"],
    o:[
      ["Wait until the monthly statement arrives before acting", "কিছু করার আগে মাসিক স্টেটমেন্ট আসা পর্যন্ত অপেক্ষা করা", "कुछ करने से पहले मासिक स्टेटमेंट आने तक इंतज़ार करना"],
      ["Contact the bank promptly and report on cybercrime helpline 1930", "দ্রুত ব্যাংকে জানিয়ে সাইবার হেল্পলাইন ১৯৩০-এ অভিযোগ করা", "तुरंत बैंक को बताकर साइबर हेल्पलाइन 1930 पर शिकायत करना"],
      ["Ask the recipient to return it through another link", "অন্য লিংকে টাকা ফেরত চাইতে বলা", "दूसरे लिंक से पैसे लौटाने को कहना"],
      ["Share your PIN with customer care to reverse it", "লেনদেন ফেরাতে কাস্টমার কেয়ারকে PIN জানানো", "लेन-देन वापस कराने के लिए कस्टमर केयर को PIN बताना"]
    ],a:1
  },

  // ===== Women's Rights & Legal Awareness =====
  {
    cat:"womens-rights",
    q:["What does Zero FIR generally allow?", "Zero FIR সাধারণত কী সুবিধা দেয়?", "Zero FIR सामान्यतः क्या सुविधा देती है?"],
    o:[
      ["A complaint can be registered at any police station", "যেকোনো থানায় অভিযোগ নথিভুক্ত করা যায়", "किसी भी थाने में शिकायत दर्ज की जा सकती है"],
      ["A complaint can be filed only online", "শুধু অনলাইনে অভিযোগ করা যায়", "शिकायत केवल ऑनलाइन दर्ज हो सकती है"],
      ["A complaint can be withdrawn without record", "রেকর্ড ছাড়া অভিযোগ তুলে নেওয়া যায়", "बिना रिकॉर्ड शिकायत वापस ली जा सकती है"],
      ["Only senior officers can receive complaints", "শুধু উচ্চপদস্থ আধিকারিক অভিযোগ নিতে পারেন", "केवल वरिष्ठ अधिकारी शिकायत ले सकते हैं"]
    ],a:0
  },
  {
    cat:"womens-rights",
    q:["What should a woman ask for after an FIR is registered?", "FIR নথিভুক্ত হওয়ার পর একজন মহিলা কী চাইতে পারেন?", "FIR दर्ज होने के बाद महिला क्या माँग सकती है?"],
    o:[
      ["A paid certification", "টাকার বিনিময়ে সার্টিফিকেট", "शुल्क देकर प्रमाणपत्र"],
      ["A copy of the FIR", "FIR-এর একটি কপি", "FIR की एक प्रति"],
      ["A verbal summary only", "শুধু মৌখিক বিবরণ", "केवल मौखिक विवरण"],
      ["A private agreement instead of a record", "রেকর্ডের বদলে ব্যক্তিগত চুক্তি", "रिकॉर्ड के बदले निजी समझौता"]
    ],a:1
  },
  {
    cat:"womens-rights",
    q:["Which law addresses sexual harassment at workplaces in India?", "ভারতে কর্মক্ষেত্রে যৌন হয়রানি প্রতিরোধে কোন আইন রয়েছে?", "भारत में कार्यस्थल पर यौन उत्पीड़न से संबंधित कानून कौन-सा है?"],
    o:[
      ["Consumer Protection Act, 2019", "ভোক্তা সুরক্ষা আইন, ২০১৯", "उपभोक्ता संरक्षण अधिनियम, 2019"],
      ["Motor Vehicles Act, 1988", "মোটর ভেহিকলস আইন, ১৯৮৮", "मोटर वाहन अधिनियम, 1988"],
      ["POSH Act, 2013", "POSH আইন, ২০১৩", "POSH अधिनियम, 2013"],
      ["Right to Education Act, 2009", "শিক্ষার অধিকার আইন, ২০০৯", "शिक्षा का अधिकार अधिनियम, 2009"]
    ],a:2
  },
  {
    cat:"womens-rights",
    q:["Which body should a workplace generally establish under the POSH framework when applicable?", "POSH কাঠামোর অধীনে প্রযোজ্য কর্মক্ষেত্রে সাধারণত কোন কমিটি থাকা উচিত?", "POSH व्यवस्था के तहत लागू कार्यस्थल पर सामान्यतः कौन-सी समिति होनी चाहिए?"],
    o:[
      ["A purchase committee", "ক্রয় কমিটি", "खरीद समिति"],
      ["A sports committee", "ক্রীড়া কমিটি", "खेल समिति"],
      ["A transport committee", "পরিবহণ কমিটি", "परिवहन समिति"],
      ["An Internal Committee", "ইন্টারনাল কমিটি", "आंतरिक समिति"]
    ],a:3
  },
  {
    cat:"womens-rights",
    q:["What is the purpose of free legal aid?", "বিনামূল্যে আইনি সহায়তার উদ্দেশ্য কী?", "निःशुल्क कानूनी सहायता का उद्देश्य क्या है?"],
    o:[
      ["To give eligible people legal help free of charge", "যোগ্য ব্যক্তিকে বিনামূল্যে আইনি সহায়তা দেওয়া", "पात्र लोगों को निःशुल्क कानूनी सहायता देना"],
      ["To guarantee that every case ends in your favour", "প্রতিটি মামলার ফলাফল আপনার পক্ষে যাওয়ার নিশ্চয়তা দেওয়া", "हर मामले का फैसला आपके पक्ष में होने की गारंटी देना"],
      ["To replace court procedures with private settlements", "আদালতের প্রক্রিয়ার বদলে ব্যক্তিগত মীমাংসা চালু করা", "अदालती प्रक्रिया की जगह निजी समझौते करवाना"],
      ["To provide private detectives and investigators", "ব্যক্তিগত গোয়েন্দা ও তদন্তকারী সরবরাহ করা", "निजी जासूस और जाँचकर्ता उपलब्ध कराना"]
    ],a:0
  },
  {
    cat:"womens-rights",
    q:["You are in immediate danger from harassment or violence. What should you do first?", "হয়রানি বা সহিংসতার আশু বিপদে পড়লে প্রথমে কী করবেন?", "उत्पीड़न या हिंसा से तुरंत खतरे में हों तो सबसे पहले क्या करें?"],
    o:[
      ["Search for the right government website before doing anything", "কিছু করার আগে সঠিক সরকারি ওয়েবসাইট খোঁজা", "कुछ करने से पहले सही सरकारी वेबसाइट खोजना"],
      ["Call the emergency number 112 if you can, and move to a safe place", "সম্ভব হলে জরুরি নম্বর ১১২-এ ফোন করা এবং নিরাপদ স্থানে যাওয়া", "संभव हो तो आपातकालीन नंबर 112 पर कॉल करें और सुरक्षित जगह जाएँ"],
      ["Post about it on social media and wait for replies", "সোশ্যাল মিডিয়ায় পোস্ট করে উত্তরের অপেক্ষা করা", "सोशल मीडिया पर पोस्ट करके जवाबों का इंतज़ार करना"],
      ["Wait until morning and then decide what to do", "সকাল পর্যন্ত অপেক্ষা করে তারপর ঠিক করা", "सुबह तक इंतज़ार करके फिर तय करना"]
    ],a:1
  },
  {
    cat:"womens-rights",
    q:["Which Indian law provides civil protection and support for women facing domestic violence?", "গার্হস্থ্য হিংসার শিকার নারীদের দেওয়ানি সুরক্ষা ও সহায়তা দেয় ভারতের কোন আইন?", "घरेलू हिंसा का सामना कर रही महिलाओं को दीवानी संरक्षण और सहायता देने वाला भारतीय कानून कौन-सा है?"],
    o:[
      ["Protection of Children from Sexual Offences Act, 2012", "শিশুদের যৌন অপরাধ থেকে সুরক্ষা আইন, ২০১২", "यौन अपराधों से बच्चों का संरक्षण अधिनियम, 2012"],
      ["Dowry Prohibition Act, 1961", "যৌতুক নিরোধ আইন, ১৯৬১", "दहेज निषेध अधिनियम, 1961"],
      ["Protection of Women from Domestic Violence Act, 2005", "গার্হস্থ্য হিংসা থেকে মহিলাদের সুরক্ষা আইন, ২০০৫", "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005"],
      ["Sexual Harassment of Women at Workplace Act, 2013", "কর্মক্ষেত্রে নারীর যৌন হেনস্থা প্রতিরোধ আইন, ২০১৩", "कार्यस्थल पर महिलाओं का यौन उत्पीड़न (निवारण) अधिनियम, 2013"]
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
    q:["What is the role of the National Commission for Women (NCW) in India?", "ভারতে জাতীয় মহিলা কমিশনের (NCW) ভূমিকা কী?", "भारत में राष्ट्रीय महिला आयोग (NCW) की भूमिका क्या है?"],
    o:[
      ["To review women's safeguards and take up complaints", "নারীদের সুরক্ষা-ব্যবস্থা পর্যালোচনা ও অভিযোগ গ্রহণ করা", "महिलाओं के सुरक्षा-उपायों की समीक्षा और शिकायतें लेना"],
      ["To issue driving licences and vehicle permits", "গাড়ির লাইসেন্স ও পারমিট দেওয়া", "ड्राइविंग लाइसेंस और वाहन परमिट जारी करना"],
      ["To run public transport services in cities", "শহরের গণপরিবহন চালানো", "शहरों में सार्वजनिक परिवहन चलाना"],
      ["To set interest rates for bank loans", "ব্যাংক ঋণের সুদের হার ঠিক করা", "बैंक ऋण की ब्याज दरें तय करना"]
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

  // ===== Emergency Response & Phone Safety =====
  {
    cat:"emergency-sos",
    q:["During a thunderstorm outdoors, where is the safer place to take shelter?", "বাইরে বজ্রঝড় শুরু হলে কোথায় আশ্রয় নেওয়া তুলনামূলক নিরাপদ?", "बाहर गरज-चमक वाले तूफ़ान में कहाँ शरण लेना अधिक सुरक्षित है?"],
    o:[
      ["Under an isolated tall tree, which keeps you dry", "একা দাঁড়ানো উঁচু গাছের নিচে, যেখানে ভিজতে হয় না", "अकेले खड़े ऊँचे पेड़ के नीचे, जहाँ भीगने से बचाव होता है"],
      ["In an open field, away from buildings and trees", "ইমারত ও গাছ থেকে দূরে খোলা মাঠে", "इमारतों और पेड़ों से दूर खुले मैदान में"],
      ["Inside a substantial enclosed building or a fully enclosed vehicle", "মজবুত বন্ধ ভবন বা সম্পূর্ণ বন্ধ গাড়ির ভিতরে", "मजबूत बंद इमारत या पूरी तरह बंद वाहन के अंदर"],
      ["Beside a metal fence or pole at the edge of the road", "রাস্তার ধারে ধাতব বেড়া বা খুঁটির পাশে", "सड़क किनारे धातु की बाड़ या खंभे के पास"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["A high-voltage wire has fallen across a road. What should you do?", "রাস্তার ওপর উচ্চ-ভোল্টেজের বিদ্যুতের তার ছিঁড়ে পড়েছে। কী করবেন?", "सड़क पर हाई-वोल्टेज बिजली का तार गिर गया है। क्या करना चाहिए?"],
    o:[
      ["Move close to check whether the wire is still carrying current", "তারে এখনও বিদ্যুৎ আছে কি না দেখতে কাছে যাওয়া", "तार में अब भी करंट है या नहीं देखने के लिए पास जाना"],
      ["Keep away, warn others and call the electricity provider or emergency services", "দূরে থাকা, অন্যদের সতর্ক করা এবং বিদ্যুৎ দপ্তর বা জরুরি পরিষেবাকে জানানো", "दूर रहें, दूसरों को चेताएँ और बिजली विभाग या आपात सेवा को बुलाएँ"],
      ["Push the wire aside with a dry wooden stick to clear the road", "রাস্তা পরিষ্কার করতে শুকনো কাঠের লাঠি দিয়ে তার সরিয়ে দেওয়া", "रास्ता साफ़ करने के लिए सूखी लकड़ी की छड़ी से तार हटाना"],
      ["Pour water around the wire to cool it down safely", "নিরাপদে ঠান্ডা করতে তারের চারপাশে জল ঢালা", "सुरक्षित ठंडा करने के लिए तार के चारों ओर पानी डालना"]
    ],a:1
  },
  {
    cat:"emergency-sos",
    q:["A person is receiving an electric shock. What is the first safe action for a bystander?", "কেউ বিদ্যুৎস্পৃষ্ট হয়েছেন। পাশে থাকা ব্যক্তির প্রথম নিরাপদ পদক্ষেপ কী?", "किसी व्यक्ति को बिजली का झटका लग रहा है। पास मौजूद व्यक्ति का पहला सुरक्षित कदम क्या है?"],
    o:[
      ["Touch the person and pull them away from the source quickly", "ব্যক্তিকে ছুঁয়ে দ্রুত বিদ্যুতের উৎস থেকে টেনে সরানো", "व्यक्ति को छूकर जल्दी से बिजली के स्रोत से खींचकर हटाना"],
      ["Throw water on the person to cool the body down", "শরীর ঠান্ডা করতে ব্যক্তির গায়ে জল ছোড়া", "शरीर ठंडा करने के लिए व्यक्ति पर पानी फेंकना"],
      ["Switch off the power if safe; do not touch the person until it is off", "নিরাপদ হলে বিদ্যুৎ বন্ধ করা; বন্ধ না হওয়া পর্যন্ত ব্যক্তিকে না ছোঁয়া", "सुरक्षित हो तो बिजली बंद करें; बंद होने तक व्यक्ति को न छुएँ"],
      ["Use a metal rod to push the wire away from the person", "ধাতব রড দিয়ে তারটি ব্যক্তির কাছ থেকে ঠেলে সরানো", "धातु की छड़ से तार को व्यक्ति से दूर धकेलना"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["Someone is struggling in deep water. If you are not trained to swim-rescue, what should you do?", "কেউ গভীর জলে ডুবে যাওয়ার উপক্রম হলে এবং আপনি উদ্ধার-সাঁতারে প্রশিক্ষিত না হলে কী করবেন?", "कोई गहरे पानी में डूब रहा हो और आपको तैरकर बचाने का प्रशिक्षण न हो, तो क्या करें?"],
    o:[
      ["Jump in immediately and try to pull the person out", "সঙ্গে সঙ্গে জলে ঝাঁপিয়ে ব্যক্তিকে টেনে তোলার চেষ্টা করা", "तुरंत पानी में कूदकर व्यक्ति को खींचने की कोशिश करना"],
      ["Throw a rope, pole or float from a safe spot and call for help", "নিরাপদ স্থান থেকে দড়ি, লাঠি বা ভাসমান বস্তু ছুড়ে দিয়ে সাহায্য ডাকা", "सुरक्षित जगह से रस्सी, छड़ी या तैरने वाली चीज़ फेंककर मदद बुलाएँ"],
      ["Form a human chain and walk into fast-flowing water", "মানবশৃঙ্খল বানিয়ে খরস্রোত জলে নেমে যাওয়া", "मानव श्रृंखला बनाकर तेज़ बहते पानी में उतरना"],
      ["Wait until the person stops moving before acting", "ব্যক্তি নড়াচড়া বন্ধ না করা পর্যন্ত অপেক্ষা করা", "व्यक्ति के हिलना बंद करने तक इंतज़ार करना"]
    ],a:1
  },
  {
    cat:"emergency-sos",
    q:["You smell cooking gas strongly in a room. What should you do first?", "ঘরের মধ্যে রান্নার গ্যাসের তীব্র গন্ধ পাচ্ছেন। প্রথমে কী করবেন?", "कमरे में रसोई गैस की तेज़ गंध आ रही है। सबसे पहले क्या करें?"],
    o:[
      ["Turn the lights on to look for where the gas is leaking", "গ্যাস কোথায় ফাঁস হচ্ছে খুঁজতে আলো জ্বালানো", "गैस कहाँ रिस रही है खोजने के लिए लाइट जलाना"],
      ["Light a match to find where the gas is leaking", "গ্যাস কোথায় ফাঁস হচ্ছে দেখতে দেশলাই জ্বালানো", "गैस कहाँ से रिस रही है देखने के लिए माचिस जलाना"],
      ["Avoid flames and switches, shut off the gas if safe and leave", "আগুন ও সুইচ এড়িয়ে নিরাপদ হলে গ্যাস বন্ধ করে স্থান ত্যাগ করা", "आग और स्विच से बचें, सुरक्षित हो तो गैस बंद कर बाहर निकलें"],
      ["Stand beside the cylinder and call for help on your phone", "সিলিন্ডারের পাশে দাঁড়িয়ে ফোনে সাহায্য ডাকা", "सिलेंडर के पास खड़े होकर फोन से मदद बुलाना"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["A water pipe bursts and water begins flooding a room. What is the safest response?", "জলের পাইপ ফেটে ঘরে জল ঢুকতে শুরু করেছে। নিরাপদ পদক্ষেপ কী?", "पानी की पाइप फटकर कमरे में पानी भरने लगा है। सुरक्षित कदम क्या है?"],
    o:[
      ["Step into the water and switch off the nearby electrical points", "জলে নেমে কাছের বৈদ্যুতিক সুইচ বন্ধ করা", "पानी में उतरकर पास के बिजली स्विच बंद करना"],
      ["Close the main valve if safe, stay away from electrics and call a plumber", "নিরাপদ হলে প্রধান ভাল্‌ভ বন্ধ করা, বৈদ্যুতিক সরঞ্জাম থেকে দূরে থাকা ও প্লাম্বার ডাকা", "सुरक्षित हो तो मुख्य वाल्व बंद करें, बिजली उपकरणों से दूर रहें और प्लंबर बुलाएँ"],
      ["Touch the exposed wires to check whether they are damaged", "খোলা তার ছুঁয়ে ক্ষতি হয়েছে কি না দেখা", "खुले तारों को छूकर देखना कि क्षति हुई है या नहीं"],
      ["Ignore it and wait for the tank to empty on its own", "কিছু না করে ট্যাঙ্ক নিজে খালি হওয়ার অপেক্ষা করা", "कुछ न करके टंकी के अपने-आप खाली होने का इंतज़ार करना"]
    ],a:1
  },
  {
    cat:"emergency-sos",
    q:["What is the correct immediate care for a minor thermal burn?", "সাধারণ তাপজনিত পোড়া ক্ষতে তাৎক্ষণিক সঠিক পরিচর্যা কী?", "सामान्य गर्मी से जले घाव की तुरंत सही देखभाल क्या है?"],
    o:[
      ["Apply ice directly to the burn to stop the pain", "ব্যথা কমাতে পোড়া জায়গায় সরাসরি বরফ লাগানো", "दर्द रोकने के लिए जले हुए हिस्से पर सीधे बर्फ लगाना"],
      ["Apply toothpaste or cooking oil on the burn", "পোড়া জায়গায় টুথপেস্ট বা রান্নার তেল লাগানো", "जले हुए हिस्से पर टूथपेस्ट या खाने का तेल लगाना"],
      ["Cool it under running water for about 20 minutes; no ice", "প্রায় ২০ মিনিট চলমান জলে ঠান্ডা করা; বরফ নয়", "लगभग 20 मिनट बहते पानी में ठंडा करें; बर्फ नहीं"],
      ["Break the blisters so that the burn can dry faster", "দ্রুত শুকানোর জন্য ফোসকা ফাটিয়ে দেওয়া", "जल्दी सूखने के लिए फफोले फोड़ देना"]
    ],a:2
  },
  {
    cat:"emergency-sos",
    q:["What is the safest action if your phone is stolen?", "ফোন চুরি হলে সবচেয়ে নিরাপদ পদক্ষেপ কী?", "फोन चोरी होने पर सबसे सुरक्षित कदम क्या है?"],
    o:[
      ["Chase the thief at once to get the phone back", "ফোন ফেরত পেতে সঙ্গে সঙ্গে চোরের পিছু ধাওয়া করা", "फोन वापस पाने के लिए तुरंत चोर का पीछा करना"],
      ["Avoid confrontation and secure the phone remotely", "মুখোমুখি সংঘর্ষ এড়িয়ে দূর থেকে ফোন সুরক্ষিত করা", "सामना करने से बचकर दूर से फोन सुरक्षित करना"],
      ["Ask strangers nearby to recover the phone for you", "কাছের অচেনা লোকদের ফোন উদ্ধার করে দিতে বলা", "आसपास के अजनबियों से फोन छुड़वाने को कहना"],
      ["Wait several days before taking any action", "কিছু করার আগে কয়েক দিন অপেক্ষা করা", "कोई कदम उठाने से पहले कई दिन इंतज़ार करना"]
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
    q:["Which Indian service is mentioned for blocking a lost or stolen phone's IMEI?", "হারানো বা চুরি হওয়া ফোনের IMEI ব্লক করতে কোন ভারতীয় পরিষেবার কথা বলা হয়েছে?", "खोए या चोरी हुए फोन का IMEI ब्लॉक करने के लिए किस भारतीय सेवा का उल्लेख है?"],
    o:[
      ["DigiLocker document service", "ডিজিলকার ডকুমেন্ট পরিষেবা", "डिजिलॉकर दस्तावेज़ सेवा"],
      ["UMANG government services app", "উমঙ্গ সরকারি পরিষেবা অ্যাপ", "उमंग सरकारी सेवा ऐप"],
      ["FASTag toll payment tag", "ফাস্ট্যাগ টোল পেমেন্ট ট্যাগ", "फास्टैग टोल भुगतान टैग"],
      ["Sanchar Saathi CEIR portal", "সঞ্চার সাথী CEIR পোর্টাল", "संचार साथी CEIR पोर्टल"]
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
      ["Wants must always be paid for before needs", "চাহিদার খরচ সবসময় প্রয়োজনের আগে মেটাতে হয়", "इच्छाओं का खर्च हमेशा ज़रूरतों से पहले चुकाना पड़ता है"],
      ["Needs are essential; wants are optional preferences", "প্রয়োজন অপরিহার্য; ইচ্ছা ঐচ্ছিক পছন্দ", "जरूरतें अनिवार्य हैं; इच्छाएँ वैकल्पिक पसंद हैं"],
      ["Both categories always have identical priority", "দুটি বিভাগেরই সবসময় সমান অগ্রাধিকার", "दोनों श्रेणियों की प्राथमिकता हमेशा समान होती है"]
    ],a:2
  },
  {
    cat:"money-management",
    q:["What is a practical way to control household expenses?", "পারিবারিক খরচ নিয়ন্ত্রণের বাস্তবসম্মত উপায় কী?", "घरेलू खर्च नियंत्रित करने का व्यावहारिक तरीका क्या है?"],
    o:[
      ["Record spending and review categories regularly", "খরচ লিখে নিয়মিত বিভাগভিত্তিক পর্যালোচনা করা", "खर्च लिखकर नियमित रूप से श्रेणियों की समीक्षा करना"],
      ["Stop recording small purchases to save time", "সময় বাঁচাতে ছোটখাটো কেনাকাটার হিসাব লেখা বন্ধ করা", "समय बचाने के लिए छोटी खरीदारी का हिसाब लिखना बंद करना"],
      ["Use credit for every purchase to keep cash free", "হাতে নগদ রাখতে প্রতিটি কেনাকাটায় ধারে কেনা", "नकद बचाने के लिए हर खरीदारी उधार पर करना"],
      ["Ignore irregular expenses like festivals and repairs", "উৎসব ও মেরামতের মতো অনিয়মিত খরচ উপেক্ষা করা", "त्योहार और मरम्मत जैसे अनियमित खर्चों को अनदेखा करना"]
    ],a:0
  },
  {
    cat:"money-management",
    q:["A scheme promises to double your money in a few months with no risk. What is the wise response?", "একটি প্রকল্প কয়েক মাসে ঝুঁকি ছাড়াই টাকা দ্বিগুণ করার প্রতিশ্রুতি দিচ্ছে। বুদ্ধিমানের কাজ কী?", "कोई योजना कुछ महीनों में बिना जोखिम के पैसा दोगुना करने का वादा करती है। समझदारी भरा कदम क्या है?"],
    o:[
      ["Invest quickly before the offer closes and the chance is lost", "সুযোগ হাতছাড়া হওয়ার আগে তাড়াতাড়ি বিনিয়োগ করা", "मौका निकल जाने से पहले जल्दी निवेश करना"],
      ["Invite friends to join so the profit is shared", "লাভ ভাগ করতে বন্ধুদেরও যোগ দিতে ডাকা", "लाभ बाँटने के लिए मित्रों को भी जोड़ना"],
      ["Treat it as a warning sign and verify with regulators first", "এটি সতর্কসংকেত ধরে আগে নিয়ন্ত্রক সংস্থার কাছে যাচাই করা", "इसे चेतावनी संकेत मानकर पहले नियामक से जाँच करना"],
      ["Take a loan to invest a larger amount", "বেশি টাকা বিনিয়োগ করতে ঋণ নেওয়া", "अधिक निवेश के लिए ऋण लेना"]
    ],a:2
  },
  {
    cat:"money-management",
    q:["Before taking a new loan, which check is most important?", "নতুন ঋণ নেওয়ার আগে কোন বিষয়টি সবচেয়ে জরুরি যাচাই করা?", "नया ऋण लेने से पहले सबसे ज़रूरी जाँच क्या है?"],
    o:[
      ["Whether the lender promises instant approval without documents", "ঋণদাতা নথি ছাড়াই তাৎক্ষণিক অনুমোদনের প্রতিশ্রুতি দিচ্ছে কি না", "ऋणदाता बिना दस्तावेज़ तुरंत स्वीकृति का वादा करता है या नहीं"],
      ["Whether the instalment, interest and total repayment fit your budget", "কিস্তি, সুদ ও মোট পরিশোধ আপনার বাজেটে সামলানো যাবে কি না", "किस्त, ब्याज और कुल भुगतान आपके बजट में आता है या नहीं"],
      ["Whether a neighbour has taken the same loan from the same lender", "প্রতিবেশী একই ঋণদাতার কাছ থেকে একই ঋণ নিয়েছেন কি না", "पड़ोसी ने उसी ऋणदाता से वही ऋण लिया है या नहीं"],
      ["Whether the loan amount can be spent immediately", "ঋণের টাকা সঙ্গে সঙ্গে খরচ করা যাবে কি না", "ऋण की राशि तुरंत खर्च की जा सकती है या नहीं"]
    ],a:1
  },
  {
    cat:"money-management",
    q:["You feel pressured to buy an expensive item on an online sale. What is a sensible decision?", "অনলাইন সেলে দামি জিনিস কেনার জন্য চাপ অনুভব করছেন। বিচক্ষণ সিদ্ধান্ত কী?", "ऑनलाइन सेल में महँगी वस्तु खरीदने का दबाव है। समझदारी भरा निर्णय क्या है?"],
    o:[
      ["Buy immediately before the sale offer ends today", "আজই অফার শেষ হওয়ার আগে সঙ্গে সঙ্গে কিনে ফেলা", "आज ही ऑफर खत्म होने से पहले तुरंत खरीद लेना"],
      ["Borrow money so that you do not miss the deal", "অফার হাতছাড়া না করতে ধার করে কেনা", "सौदा हाथ से न जाए इसलिए उधार लेकर खरीदना"],
      ["Check if it is a real need, compare total cost and wait", "সত্যিই দরকার কি না দেখা, মোট খরচ তুলনা করা ও অপেক্ষা করা", "देखें कि वाकई ज़रूरत है या नहीं, कुल लागत की तुलना करें और रुकें"],
      ["Ignore the household budget for this one purchase", "এই একটি কেনাকাটার জন্য সংসারের বাজেট উপেক্ষা করা", "इस एक खरीदारी के लिए घर के बजट को अनदेखा करना"]
    ],a:2
  },

  // ===== Banking, Insurance & Digital Payments =====
  {
    cat:"banking-insurance",
    q:["What is the safest practice when using a mobile banking app?", "মোবাইল ব্যাংকিং অ্যাপ ব্যবহারের নিরাপদ অভ্যাস কোনটি?", "मोबाइल बैंकिंग ऐप इस्तेमाल करने की सुरक्षित आदत क्या है?"],
    o:[
      ["Use the official app and check the recipient before confirming", "অফিসিয়াল অ্যাপ ব্যবহার করে নিশ্চিত করার আগে প্রাপক যাচাই করা", "आधिकारिक ऐप इस्तेमाल करके पुष्टि से पहले प्राप्तकर्ता जाँचना"],
      ["Install banking apps from links forwarded by friends", "বন্ধুদের পাঠানো লিঙ্ক থেকে ব্যাংকিং অ্যাপ ইনস্টল করা", "मित्रों के भेजे लिंक से बैंकिंग ऐप इंस्टॉल करना"],
      ["Save the PIN in the phone's contact list so you remember it", "মনে রাখতে ফোনের কন্টাক্ট লিস্টে PIN সেভ করে রাখা", "याद रखने के लिए PIN को फोन की संपर्क सूची में सहेजना"],
      ["Let unknown people operate the app to help you", "সাহায্যের নামে অচেনা লোককে অ্যাপ চালাতে দেওয়া", "मदद के नाम पर अनजान लोगों को ऐप चलाने देना"]
    ],a:0
  },
  {
    cat:"banking-insurance",
    q:["What does borrowing money usually involve?", "ঋণ নেওয়ার ক্ষেত্রে সাধারণত কী জড়িত থাকে?", "पैसे उधार लेने में सामान्यतः क्या शामिल होता है?"],
    o:[
      ["A permanent grant that comes without any conditions", "কোনো শর্ত ছাড়া স্থায়ী অনুদান", "बिना किसी शर्त का स्थायी अनुदान"],
      ["Repayment, often with interest or other costs", "পরিশোধ, প্রায়ই সুদ বা অন্যান্য খরচসহ", "वापसी, अक्सर ब्याज या अन्य लागत के साथ"],
      ["An automatic increase in your monthly income", "মাসিক আয়ের স্বয়ংক্রিয় বৃদ্ধি", "मासिक आय में अपने-आप बढ़ोतरी"],
      ["No obligation at all once the funds are received", "টাকা পাওয়ার পর কোনো দায়ই না থাকা", "राशि मिलने के बाद कोई दायित्व न रहना"]
    ],a:1
  },
  {
    cat:"banking-insurance",
    q:["Your debit card is lost. What should you do first?", "আপনার ডেবিট কার্ড হারিয়ে গেছে। প্রথমে কী করবেন?", "आपका डेबिट कार्ड खो गया है। सबसे पहले क्या करें?"],
    o:[
      ["Wait a few days in case it is found", "পাওয়া যায় কি না দেখতে কয়েক দিন অপেক্ষা করা", "मिल जाए इस उम्मीद में कुछ दिन इंतज़ार करना"],
      ["Block it at once through the bank's official app or helpline", "ব্যাংকের অফিসিয়াল অ্যাপ বা হেল্পলাইনে সঙ্গে সঙ্গে কার্ড ব্লক করা", "बैंक के आधिकारिक ऐप या हेल्पलाइन से तुरंत कार्ड ब्लॉक करना"],
      ["Search online for a customer-care number and share the PIN", "অনলাইনে কাস্টমার কেয়ার নম্বর খুঁজে PIN জানানো", "ऑनलाइन कस्टमर केयर नंबर खोजकर PIN बताना"],
      ["Post the card details on social media to find it", "কার্ড খুঁজে পেতে সোশ্যাল মিডিয়ায় কার্ডের তথ্য পোস্ট করা", "कार्ड ढूँढने के लिए सोशल मीडिया पर कार्ड की जानकारी डालना"]
    ],a:1
  },
  {
    cat:"banking-insurance",
    q:["What is a nominee generally meant to do in a bank account?", "ব্যাংক অ্যাকাউন্টে নমিনির সাধারণ ভূমিকা কী?", "बैंक खाते में नामांकित व्यक्ति की सामान्य भूमिका क्या है?"],
    o:[
      ["Operate the account every day on the holder's behalf", "অ্যাকাউন্টধারীর হয়ে প্রতিদিন অ্যাকাউন্ট চালানো", "खाताधारक की ओर से रोज़ खाता चलाना"],
      ["Replace the account holder immediately after opening", "অ্যাকাউন্ট খোলার পরেই অ্যাকাউন্টধারীর জায়গা নিয়ে নেওয়া", "खाता खुलते ही खाताधारक की जगह ले लेना"],
      ["Guarantee that a loan will be approved for the holder", "অ্যাকাউন্টধারীর ঋণ মঞ্জুরের নিশ্চয়তা দেওয়া", "खाताधारक के ऋण की स्वीकृति की गारंटी देना"],
      ["Receive eligible proceeds according to applicable rules", "প্রযোজ্য নিয়ম অনুযায়ী প্রাপ্য অর্থ গ্রহণ করা", "लागू नियमों के अनुसार पात्र राशि प्राप्त करना"]
    ],a:3
  },
  {
    cat:"banking-insurance",
    q:["What should you do if a bank message asks you to update KYC through an unfamiliar link?", "অপরিচিত লিংকে KYC আপডেট করতে ব্যাংকের বার্তা এলে কী করবেন?", "अनजान लिंक से KYC अपडेट करने का बैंक संदेश आए तो क्या करेंगे?"],
    o:[
      ["Enter your details on the link but skip the PIN", "লিঙ্কে তথ্য দিন, শুধু PIN বাদ রাখুন", "लिंक पर जानकारी भरें, बस PIN छोड़ दें"],
      ["Verify through the bank's official website or branch", "ব্যাংকের অফিসিয়াল ওয়েবসাইট বা শাখায় যাচাই করা", "बैंक की आधिकारिक वेबसाइट या शाखा से पुष्टि करना"],
      ["Forward the link to a colleague to check it for you", "যাচাই করতে লিঙ্কটি সহকর্মীকে ফরোয়ার্ড করা", "जाँचने के लिए लिंक को सहकर्मी को फ़ॉरवर्ड करना"],
      ["Open the link only on a computer, not on the phone", "লিঙ্কটি ফোনে নয়, শুধু কম্পিউটারে খোলা", "लिंक को फोन पर नहीं, केवल कंप्यूटर पर खोलना"]
    ],a:1
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
      ["Only the personal recommendation of the agent who sells it", "শুধু যিনি বিক্রি করছেন সেই এজেন্টের ব্যক্তিগত সুপারিশ", "केवल बेचने वाले एजेंट की व्यक्तिगत सिफ़ारिश"],
      ["Coverage, exclusions, premium, eligibility and claim process", "কভারেজ, বাদ পড়া বিষয়, প্রিমিয়াম, যোগ্যতা ও দাবি প্রক্রিয়া", "कवरेज, अपवाद, प्रीमियम, पात्रता और दावा प्रक्रिया"],
      ["Only the premium of the first year of the policy", "পলিসির শুধু প্রথম বছরের প্রিমিয়াম", "पॉलिसी के केवल पहले वर्ष का प्रीमियम"],
      ["How attractive the policy advertisement looks", "পলিসির বিজ্ঞাপন কতটা আকর্ষণীয় দেখতে", "पॉलिसी का विज्ञापन कितना आकर्षक दिखता है"]
    ],a:1
  },
  {
    cat:"banking-insurance",
    q:["A loss covered by your insurance policy occurs. What is the right step?", "আপনার বিমার আওতাভুক্ত কোনো ক্ষতি হয়েছে। সঠিক পদক্ষেপ কী?", "आपकी बीमा पॉलिसी के अंतर्गत आने वाली कोई हानि हुई है। सही कदम क्या है?"],
    o:[
      ["Wait until the policy expires before doing anything", "কিছু করার আগে পলিসির মেয়াদ শেষ হওয়ার অপেক্ষা করা", "कुछ करने से पहले पॉलिसी की अवधि खत्म होने का इंतज़ार करना"],
      ["Pay an agent extra to get the claim approved faster", "দ্রুত দাবি মঞ্জুর করাতে এজেন্টকে বাড়তি টাকা দেওয়া", "जल्दी दावा मंज़ूर कराने के लिए एजेंट को अतिरिक्त पैसे देना"],
      ["Hide the documents the insurer may ask for", "বিমা সংস্থা যেসব নথি চাইতে পারে তা লুকিয়ে রাখা", "बीमा कंपनी जो दस्तावेज़ माँग सकती है उन्हें छिपाना"],
      ["Inform the insurer promptly and follow the claim process", "দ্রুত বিমা সংস্থাকে জানিয়ে দাবির প্রক্রিয়া অনুসরণ করা", "बीमा कंपनी को तुरंत सूचित कर दावा प्रक्रिया अपनाएँ"]
    ],a:3
  },
  {
    cat:"banking-insurance",
    q:["Why is it useful to turn on SMS or app alerts for every bank transaction?", "প্রতিটি ব্যাংক লেনদেনের জন্য SMS বা অ্যাপ অ্যালার্ট চালু রাখা কেন উপযোগী?", "हर बैंक लेन-देन के लिए SMS या ऐप अलर्ट चालू रखना क्यों उपयोगी है?"],
    o:[
      ["It lets you notice an unauthorised transaction quickly", "এতে অননুমোদিত লেনদেন দ্রুত ধরা যায়", "इससे अनधिकृत लेन-देन जल्दी पकड़ में आता है"],
      ["It raises the interest rate paid on your account", "এতে আপনার অ্যাকাউন্টে প্রাপ্য সুদের হার বাড়ে", "इससे आपके खाते पर मिलने वाली ब्याज दर बढ़ती है"],
      ["It removes the need to keep your PIN secret", "এতে PIN গোপন রাখার প্রয়োজন থাকে না", "इससे PIN गुप्त रखने की ज़रूरत नहीं रहती"],
      ["It stops every kind of fraud without any effort", "এতে কোনো চেষ্টা ছাড়াই সব ধরনের প্রতারণা বন্ধ হয়", "इससे बिना किसी प्रयास के हर तरह की धोखाधड़ी रुक जाती है"]
    ],a:0
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
    q:["What is true about Udyam Registration for small businesses in India?", "ভারতে ক্ষুদ্র ব্যবসার জন্য উদ্যম (Udyam) নিবন্ধন সম্পর্কে কোনটি সঠিক?", "भारत में छोटे व्यवसायों के लिए उद्यम (Udyam) पंजीकरण के बारे में क्या सही है?"],
    o:[
      ["An agent must be paid a fee to complete it", "এটি সম্পূর্ণ করতে এজেন্টকে ফি দিতে হয়", "इसे पूरा करने के लिए एजेंट को शुल्क देना पड़ता है"],
      ["It can be done free of charge on the official government portal", "সরকারি অফিসিয়াল পোর্টালে এটি বিনামূল্যে করা যায়", "यह सरकारी आधिकारिक पोर्टल पर निःशुल्क किया जा सकता है"],
      ["It guarantees that a bank loan will be sanctioned", "এটি ব্যাংক ঋণ মঞ্জুরের নিশ্চয়তা দেয়", "यह बैंक ऋण स्वीकृत होने की गारंटी देता है"],
      ["It is needed only for businesses with a shop", "শুধু দোকান আছে এমন ব্যবসার জন্যই এটি লাগে", "यह केवल दुकान वाले व्यवसायों के लिए ज़रूरी है"]
    ],a:1
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
      ["Agree on specifications, price and advance in writing", "বিবরণ, দাম ও অগ্রিম লিখিতভাবে ঠিক করা", "विवरण, कीमत और अग्रिम लिखित रूप में तय करना"],
      ["Start work first and settle the price after delivery", "আগে কাজ শুরু করে ডেলিভারির পর দাম ঠিক করা", "पहले काम शुरू करके डिलीवरी के बाद कीमत तय करना"],
      ["Ask for the full payment only after delivery, with no advance", "কোনো অগ্রিম না নিয়ে শুধু ডেলিভারির পর পুরো টাকা চাওয়া", "कोई अग्रिम लिए बिना केवल डिलीवरी के बाद पूरा भुगतान माँगना"],
      ["Avoid giving any written details to the customer", "গ্রাহককে কোনো লিখিত বিবরণ না দেওয়া", "ग्राहक को कोई लिखित विवरण न देना"]
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
      ["Avoid responding to customer questions and messages", "গ্রাহকের প্রশ্ন ও বার্তার উত্তর এড়িয়ে চলা", "ग्राहकों के सवालों और संदेशों का जवाब देने से बचना"],
      ["Maintain quality, clear communication and reliable delivery", "মান, স্পষ্ট যোগাযোগ ও নির্ভরযোগ্য ডেলিভারি বজায় রাখা", "गुणवत्ता, स्पष्ट संवाद और भरोसेमंद डिलीवरी बनाए रखना"]
    ],a:3
  },
  {
    cat:"home-business",
    q:["What is a sensible way to handle money earned from each sale?", "প্রতিটি বিক্রি থেকে পাওয়া টাকা সামলানোর ভালো উপায় কী?", "हर बिक्री से मिली रकम संभालने का उचित तरीका क्या है?"],
    o:[
      ["Separate business costs, savings and personal spending", "ব্যবসার খরচ, সঞ্চয় ও ব্যক্তিগত খরচ আলাদা রাখা", "व्यवसाय की लागत, बचत और निजी खर्च अलग रखना"],
      ["Spend all the receipts immediately on personal needs", "পাওয়া সব টাকা তখনই ব্যক্তিগত প্রয়োজনে খরচ করা", "मिली सारी रकम तुरंत निजी ज़रूरतों पर खर्च कर देना"],
      ["Mix all the funds together without recording anything", "কিছু না লিখে সব টাকা একসঙ্গে মিশিয়ে রাখা", "कुछ लिखे बिना सारी रकम एक साथ मिला देना"],
      ["Borrow more money whenever the sales go up", "বিক্রি বাড়লেই আরও ধার করা", "बिक्री बढ़ते ही और उधार लेना"]
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
      ["The lowest price always guarantees good quality", "সবচেয়ে কম দামই সবসময় ভালো মানের নিশ্চয়তা", "सबसे कम कीमत हमेशा अच्छी गुणवत्ता की गारंटी है"],
      ["Quality has no effect on customers' trust", "গুণমান গ্রাহকের আস্থায় কোনো প্রভাব ফেলে না", "गुणवत्ता का ग्राहकों के भरोसे पर कोई असर नहीं पड़ता"],
      ["A fair price should reflect value and customer expectations", "ন্যায্য দাম পণ্যের মূল্য ও গ্রাহকের প্রত্যাশার সঙ্গে সামঞ্জস্যপূর্ণ হওয়া উচিত", "उचित कीमत उत्पाद के मूल्य और ग्राहक की अपेक्षाओं के अनुरूप होनी चाहिए"],
      ["Price comparison is unnecessary for small sellers", "ছোট বিক্রেতার দাম তুলনার দরকার নেই", "छोटे विक्रेता को कीमत की तुलना की जरूरत नहीं"]
    ],a:2
  },

  // ===== Government Schemes & Self-Help Groups =====
  {
    cat:"govt-shg",
    q:["What should you do before joining a self-help group (SHG)?", "স্বনির্ভর গোষ্ঠীতে (SHG) যোগ দেওয়ার আগে কী করবেন?", "स्वयं सहायता समूह (SHG) से जुड़ने से पहले क्या करेंगे?"],
    o:[
      ["Hand over identity documents without taking a receipt", "রসিদ না নিয়েই পরিচয়পত্র জমা দেওয়া", "रसीद लिए बिना पहचान पत्र सौंप देना"],
      ["Accept every loan offered by the group without question", "গোষ্ঠীর দেওয়া প্রতিটি ঋণ প্রশ্ন না করেই নেওয়া", "समूह द्वारा दिया गया हर ऋण बिना सवाल लेना"],
      ["Understand membership rules, savings, meetings and loan terms", "সদস্যপদ, সঞ্চয়, সভা ও ঋণের শর্ত বোঝা", "सदस्यता, बचत, बैठकों और ऋण की शर्तें समझना"],
      ["Pay an unknown agent to guarantee your membership", "সদস্যপদ নিশ্চিত করতে অচেনা এজেন্টকে টাকা দেওয়া", "सदस्यता पक्की करने के लिए अनजान एजेंट को पैसे देना"]
    ],a:2
  },
  {
    cat:"govt-shg",
    q:["What is a useful way for women entrepreneurs to reduce material costs?", "মহিলা উদ্যোক্তাদের উপকরণের খরচ কমানোর উপায় কী?", "महिला उद्यमियों के लिए सामग्री लागत कम करने का उपयोगी तरीका क्या है?"],
    o:[
      ["Buy raw materials from unknown sellers without checking", "যাচাই না করে অচেনা বিক্রেতার কাছ থেকে কাঁচামাল কেনা", "बिना जाँचे अनजान विक्रेताओं से कच्चा माल खरीदना"],
      ["Reduce product quality without telling the buyers", "ক্রেতাদের না জানিয়ে পণ্যের মান কমানো", "ग्राहकों को बताए बिना उत्पाद की गुणवत्ता घटाना"],
      ["Stop maintaining stock records to save time", "সময় বাঁচাতে মজুতের হিসাব রাখা বন্ধ করা", "समय बचाने के लिए स्टॉक का रिकॉर्ड रखना बंद करना"],
      ["Coordinate group purchases and compare reliable suppliers", "দলবদ্ধভাবে কেনা ও নির্ভরযোগ্য সরবরাহকারীর তুলনা করা", "सामूहिक खरीद और विश्वसनीय आपूर्तिकर्ताओं की तुलना करना"]
    ],a:3
  },
  {
    cat:"govt-shg",
    q:["What should you check before applying for a government support scheme?", "সরকারি সহায়তা প্রকল্পে আবেদন করার আগে কী যাচাই করবেন?", "सरकारी सहायता योजना में आवेदन करने से पहले क्या जाँचेंगे?"],
    o:[
      ["Eligibility, documents, deadlines and process", "যোগ্যতা, নথি, শেষ তারিখ ও আবেদন-প্রক্রিয়া", "पात्रता, दस्तावेज़, अंतिम तिथि और प्रक्रिया"],
      ["Only the scheme's popular name and slogan", "শুধু প্রকল্পের জনপ্রিয় নাম ও স্লোগান", "केवल योजना का लोकप्रिय नाम और नारा"],
      ["Only an agent's verbal guarantee of approval", "শুধু এজেন্টের মুখের অনুমোদন-নিশ্চয়তা", "केवल एजेंट की मौखिक मंज़ूरी की गारंटी"],
      ["The number of social media comments", "সোশ্যাল মিডিয়ার মন্তব্যের সংখ্যা", "सोशल मीडिया टिप्पणियों की संख्या"]
    ],a:0
  },
  {
    cat:"govt-shg",
    q:["Where can a woman find genuine information about self-help groups in her area?", "নিজের এলাকার স্বনির্ভর গোষ্ঠী সম্পর্কে সঠিক তথ্য একজন মহিলা কোথায় পাবেন?", "अपने क्षेत्र के स्वयं सहायता समूहों की सही जानकारी महिला कहाँ से पा सकती है?"],
    o:[
      ["From unverified messages forwarded on social media", "সোশ্যাল মিডিয়ায় ফরোয়ার্ড করা যাচাই-না-করা বার্তা থেকে", "सोशल मीडिया पर फ़ॉरवर्ड किए गए बिना जाँचे संदेशों से"],
      ["From a stranger who asks for a joining fee", "যে অপরিচিত ব্যক্তি যোগদানের ফি চায় তার কাছ থেকে", "जो अजनबी शामिल होने की फीस माँगे उससे"],
      ["From the Block/Panchayat office, a bank or the NRLM portal", "ব্লক/পঞ্চায়েত অফিস, ব্যাংক বা NRLM পোর্টাল থেকে", "ब्लॉक/पंचायत कार्यालय, बैंक या NRLM पोर्टल से"],
      ["From comments under a popular social media post", "জনপ্রিয় সোশ্যাল মিডিয়া পোস্টের নিচের মন্তব্য থেকে", "किसी लोकप्रिय सोशल मीडिया पोस्ट के नीचे की टिप्पणियों से"]
    ],a:2
  },
  {
    cat:"govt-shg",
    q:["What is a common purpose of a self-help group?", "স্বনির্ভর গোষ্ঠীর একটি সাধারণ উদ্দেশ্য কী?", "स्वयं सहायता समूह का एक सामान्य उद्देश्य क्या है?"],
    o:[
      ["To replace all the commercial banks in the area", "এলাকার সব বাণিজ্যিক ব্যাংকের জায়গা নেওয়া", "क्षेत्र के सभी वाणिज्यिक बैंकों की जगह लेना"],
      ["To guarantee every member a government job", "প্রত্যেক সদস্যকে সরকারি চাকরি নিশ্চিত করা", "हर सदस्य को सरकारी नौकरी की गारंटी देना"],
      ["To encourage collective savings and mutual support", "সমষ্টিগত সঞ্চয় ও পারস্পরিক সহায়তা উৎসাহিত করা", "सामूहिक बचत और आपसी सहयोग को बढ़ावा देना"],
      ["To remove all repayment responsibilities of members", "সদস্যদের সব পরিশোধের দায় তুলে দেওয়া", "सदस्यों की सारी चुकौती की ज़िम्मेदारी हटा देना"]
    ],a:2
  },
  {
    cat:"govt-shg",
    q:["What should you do if an agent promises guaranteed approval of a government benefit for a fee?", "কোনো এজেন্ট ফি নিয়ে সরকারি সুবিধা নিশ্চিত করার প্রতিশ্রুতি দিলে কী করবেন?", "कोई एजेंट शुल्क लेकर सरकारी लाभ की गारंटी दे तो क्या करेंगे?"],
    o:[
      ["Pay only half the fee and wait for approval", "অর্ধেক ফি দিয়ে অনুমোদনের অপেক্ষা করা", "आधी फीस देकर मंज़ूरी का इंतज़ार करना"],
      ["Share your OTP so the agent can verify eligibility", "এজেন্ট যোগ্যতা যাচাই করবে বলে OTP জানানো", "एजेंट पात्रता जाँचे इसलिए OTP बताना"],
      ["Give original documents to the agent as security", "জামানত হিসেবে এজেন্টকে আসল নথি দেওয়া", "ज़मानत के तौर पर एजेंट को मूल दस्तावेज़ देना"],
      ["Check the official process; do not pay the agent", "সরকারি প্রক্রিয়া যাচাই করা, এজেন্টকে টাকা না দেওয়া", "आधिकारिक प्रक्रिया जाँचना, एजेंट को पैसे न देना"]
    ],a:3
  },
  {
    cat:"govt-shg",
    q:["Why should an SHG keep written records of meetings, savings and loans?", "স্বনির্ভর গোষ্ঠীর সভা, সঞ্চয় ও ঋণের লিখিত হিসাব রাখা কেন উচিত?", "स्वयं सहायता समूह को बैठकों, बचत और ऋण का लिखित रिकॉर्ड क्यों रखना चाहिए?"],
    o:[
      ["To hide loan details from the other members", "অন্য সদস্যদের কাছ থেকে ঋণের তথ্য লুকাতে", "अन्य सदस्यों से ऋण की जानकारी छिपाने के लिए"],
      ["To avoid holding regular meetings with members", "সদস্যদের সঙ্গে নিয়মিত সভা না করতে", "सदस्यों के साथ नियमित बैठकें न करने के लिए"],
      ["To keep transparency and avoid disputes among members", "সদস্যদের মধ্যে স্বচ্ছতা বজায় রাখতে ও বিবাদ এড়াতে", "सदस्यों में पारदर्शिता बनाए रखने और विवाद से बचने के लिए"],
      ["To let one person control all the group's money", "গোষ্ঠীর সব টাকার নিয়ন্ত্রণ একজনের হাতে দিতে", "समूह के सारे पैसे का नियंत्रण एक व्यक्ति को देने के लिए"]
    ],a:2
  },
  {
    cat:"govt-shg",
    q:["Why should you keep an acknowledgement after submitting an application?", "আবেদন জমা দেওয়ার পরে স্বীকৃতিপত্র রাখা কেন জরুরি?", "आवेदन जमा करने के बाद पावती रखना क्यों जरूरी है?"],
    o:[
      ["It guarantees that the application will be approved", "এটি আবেদন মঞ্জুরের নিশ্চয়তা দেয়", "यह आवेदन स्वीकृत होने की गारंटी देता है"],
      ["It helps track the application and prove submission", "আবেদনের অবস্থা জানতে ও জমার প্রমাণ রাখতে সাহায্য করে", "आवेदन की स्थिति जानने और जमा करने का प्रमाण रखने में मदद करता है"],
      ["It replaces all supporting documents", "সব সহায়ক নথির বদলি হয়", "सभी सहायक दस्तावेजों का विकल्प बनती है"],
      ["It removes the need to meet any deadlines", "এটি কোনো সময়সীমা মানার প্রয়োজন দূর করে", "यह किसी भी समय-सीमा का पालन ज़रूरी नहीं रहने देता"]
    ],a:1
  },
  {
    cat:"govt-shg",
    q:["What should you do if a scheme's application deadline has passed?", "কোনো প্রকল্পের আবেদনের সময়সীমা পেরিয়ে গেলে কী করবেন?", "किसी योजना की आवेदन समय-सीमा समाप्त हो जाए तो क्या करेंगे?"],
    o:[
      ["Use an unofficial backdated form from an agent", "এজেন্টের কাছ থেকে তারিখ-পিছানো অননুমোদিত ফর্ম ব্যবহার করা", "एजेंट से पिछली तारीख़ का अनधिकृत फ़ॉर्म लेना"],
      ["Pay someone to change the date on the form", "ফর্মের তারিখ বদলাতে কাউকে টাকা দেওয়া", "फ़ॉर्म की तारीख़ बदलने के लिए किसी को पैसे देना"],
      ["Check officially for an extension or next window", "সময় বাড়ানো বা পরবর্তী পর্ব সরকারিভাবে ঘোষিত কি না দেখা", "आधिकारिक रूप से समय-विस्तार या अगली अवधि की जाँच करना"],
      ["Submit false information about the date", "তারিখ নিয়ে ভুল তথ্য জমা দেওয়া", "तारीख़ के बारे में गलत जानकारी जमा करना"]
    ],a:2
  },
  {
    cat:"govt-shg",
    q:["What is the safest way to submit identity documents for a scheme?", "প্রকল্পে পরিচয়পত্র জমা দেওয়ার নিরাপদ পদ্ধতি কী?", "योजना के लिए पहचान दस्तावेज जमा करने का सुरक्षित तरीका क्या है?"],
    o:[
      ["Send them to an unknown messaging number for quick processing", "দ্রুত প্রক্রিয়ার জন্য অচেনা মেসেজিং নম্বরে পাঠানো", "जल्दी प्रक्रिया के लिए अनजान मैसेजिंग नंबर पर भेज देना"],
      ["Post them publicly so everyone can verify them", "সবাই যাচাই করতে পারে বলে প্রকাশ্যে পোস্ট করা", "सब जाँच सकें इसलिए सार्वजनिक रूप से पोस्ट करना"],
      ["Give the originals to an intermediary without a receipt", "রসিদ ছাড়া মধ্যস্থতাকারীকে আসল নথি দিয়ে দেওয়া", "बिना रसीद के बिचौलिए को मूल दस्तावेज़ दे देना"],
      ["Use the official submission channel and share only required documents", "সরকারি জমা মাধ্যম ব্যবহার করে প্রয়োজনীয় নথিই দেওয়া", "आधिकारिक माध्यम से केवल आवश्यक दस्तावेज देना"]
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

  // ===== Helplines, Health & Everyday Safety =====
  {
    cat:"helplines-awareness",
    q:["Which number is listed for reporting cyber financial fraud in India?", "ভারতে সাইবার আর্থিক প্রতারণার অভিযোগের জন্য কোন নম্বর দেওয়া আছে?", "भारत में साइबर वित्तीय धोखाधड़ी की शिकायत के लिए कौन-सा नंबर दिया गया है?"],
    o:[
      ["181", "১৮১", "181"],
      ["1098", "১০৯৮", "1098"],
      ["1930", "১৯৩০", "1930"],
      ["112", "১১২", "112"]
    ],a:2
  },
  {
    cat:"helplines-awareness",
    q:["Which number is listed for emergency police, fire or medical assistance in India?", "ভারতে পুলিশ, অগ্নিনির্বাপণ বা চিকিৎসার জরুরি সহায়তার নম্বর কোনটি?", "भारत में पुलिस, अग्निशमन या चिकित्सा आपातकालीन सहायता का नंबर कौन-सा है?"],
    o:[
      ["1091", "১০৯১", "1091"],
      ["181", "১৮১", "181"],
      ["1930", "১৯৩০", "1930"],
      ["112", "১১২", "112"]
    ],a:3
  },
  {
    cat:"helplines-awareness",
    q:["Which number is listed for Childline in the app's emergency information?", "অ্যাপের জরুরি তথ্যে Childline-এর নম্বর কোনটি?", "ऐप की आपातकालीन जानकारी में Childline का नंबर कौन-सा है?"],
    o:[
      ["1098", "১০৯৮", "1098"],
      ["181", "১৮১", "181"],
      ["112", "১১২", "112"],
      ["1930", "১৯৩০", "1930"]
    ],a:0
  },
  {
    cat:"helplines-awareness",
    q:["A problem is serious but not an emergency, for example harassment at work. What is a reliable route to official support?", "সমস্যা গুরুতর কিন্তু জরুরি নয়, যেমন কর্মক্ষেত্রে হয়রানি। সরকারি সহায়তা পাওয়ার নির্ভরযোগ্য পথ কোনটি?", "समस्या गंभीर है पर आपातकाल नहीं, जैसे कार्यस्थल पर उत्पीड़न। आधिकारिक सहायता पाने का भरोसेमंद रास्ता कौन-सा है?"],
    o:[
      ["Ask an anonymous online group to file the complaint for you", "অজ্ঞাতনামা অনলাইন গ্রুপকে দিয়ে আপনার হয়ে অভিযোগ করানো", "किसी अज्ञात ऑनलाइन समूह से अपनी ओर से शिकायत करवाना"],
      ["Use an agent who promises quick results in return for a fee", "ফি নিয়ে দ্রুত ফলের প্রতিশ্রুতি দেওয়া এজেন্টকে দিয়ে করানো", "शुल्क लेकर जल्दी नतीजे का वादा करने वाले एजेंट से करवाना"],
      ["Wait for the problem to go away on its own with time", "সময়ের সঙ্গে সমস্যা নিজে থেকে মিটে যাওয়ার অপেক্ষা করা", "समय के साथ समस्या अपने-आप खत्म होने का इंतज़ार करना"],
      ["Contact the official authority or a recognised support service", "সরকারি কর্তৃপক্ষ বা স্বীকৃত সহায়তা সংস্থার সঙ্গে যোগাযোগ করা", "आधिकारिक प्राधिकरण या मान्यता प्राप्त सहायता संस्था से संपर्क करें"]
    ],a:3
  },
  {
    cat:"helplines-awareness",
    q:["You find a 'helpline' number on a random social media post. What should you do before calling?", "সোশ্যাল মিডিয়ার একটি পোস্টে একটি 'হেল্পলাইন' নম্বর পেয়েছেন। ফোন করার আগে কী করবেন?", "सोशल मीडिया की किसी पोस्ट में 'हेल्पलाइन' नंबर मिला है। कॉल करने से पहले क्या करें?"],
    o:[
      ["Call at once and share your OTP so that help comes faster", "দ্রুত সাহায্য পেতে সঙ্গে সঙ্গে ফোন করে OTP জানানো", "जल्दी मदद पाने के लिए तुरंत कॉल करके OTP बताना"],
      ["Confirm the number on the organisation's official website or app", "প্রতিষ্ঠানের অফিসিয়াল ওয়েবসাইট বা অ্যাপে নম্বরটি মিলিয়ে নেওয়া", "संस्था की आधिकारिक वेबसाइट या ऐप पर नंबर की पुष्टि करना"],
      ["Assume it is genuine because the post has many likes", "পোস্টে অনেক লাইক আছে বলে সঠিক ধরে নেওয়া", "पोस्ट पर बहुत लाइक हैं इसलिए सही मान लेना"],
      ["Send the number to everyone you know before calling", "ফোন করার আগে পরিচিত সবাইকে নম্বরটি পাঠানো", "कॉल करने से पहले अपने सभी परिचितों को नंबर भेजना"]
    ],a:1
  },
  {
    cat:"helplines-awareness",
    q:["A medicine strip has no readable expiry date or batch details. What should you do?", "ওষুধের স্ট্রিপে মেয়াদ বা ব্যাচের তথ্য পড়া যাচ্ছে না। কী করবেন?", "दवा की पट्टी पर एक्सपायरी या बैच की जानकारी पढ़ी नहीं जा रही। क्या करें?"],
    o:[
      ["Take it if the colour and shape look normal", "রং ও আকার স্বাভাবিক দেখালে খেয়ে নেওয়া", "रंग और आकार सामान्य लगे तो खा लेना"],
      ["Ask a friend to guess the expiry date", "বন্ধুকে মেয়াদ অনুমান করতে বলা", "मित्र से एक्सपायरी का अनुमान लगवाना"],
      ["Do not use it; ask a registered pharmacist to verify it", "ব্যবহার না করে নিবন্ধিত ফার্মাসিস্টকে দিয়ে যাচাই করানো", "उपयोग न करें; पंजीकृत फार्मासिस्ट से जाँच करवाएँ"],
      ["Remove the packaging and keep the loose tablets", "প্যাকেট ফেলে শুধু খোলা ট্যাবলেট রাখা", "पैकिंग हटाकर खुली गोलियाँ रखना"]
    ],a:2
  },
  {
    cat:"helplines-awareness",
    q:["Milk appears unusually diluted or has an unusual smell. What is the safest way to assess suspected adulteration?", "দুধ অস্বাভাবিক পাতলা বা গন্ধযুক্ত মনে হলে ভেজালের সন্দেহ যাচাইয়ের নিরাপদ উপায় কী?", "दूध असामान्य रूप से पतला या बदबूदार लगे तो मिलावट के संदेह की सुरक्षित जाँच कैसे करें?"],
    o:[
      ["Rely on a viral home test as definite proof of purity", "ভাইরাল ঘরোয়া পরীক্ষাকেই বিশুদ্ধতার নিশ্চিত প্রমাণ ধরা", "वायरल घरेलू जाँच को शुद्धता का पक्का प्रमाण मानना"],
      ["Taste a large amount to judge whether it is pure", "খাঁটি কি না বুঝতে অনেকটা চেখে দেখা", "शुद्ध है या नहीं जानने के लिए ज़्यादा मात्रा में चखना"],
      ["Stop using it and seek guidance from a food-safety authority or lab", "ব্যবহার বন্ধ করে খাদ্য-নিরাপত্তা কর্তৃপক্ষ বা পরীক্ষাগারের পরামর্শ নেওয়া", "उपयोग रोककर खाद्य सुरक्षा प्राधिकरण या प्रयोगशाला से सलाह लें"],
      ["Add water to compare the colour with fresh milk", "তাজা দুধের সঙ্গে রং মেলাতে জল মেশানো", "ताज़े दूध से रंग मिलाने के लिए पानी मिलाना"]
    ],a:2
  },
  {
    cat:"helplines-awareness",
    q:["Water in your area is muddy after a flood. What should you do before drinking it?", "বন্যার পর আপনার এলাকার জল ঘোলা। পান করার আগে কী করবেন?", "बाढ़ के बाद आपके क्षेत्र का पानी गंदा है। पीने से पहले क्या करें?"],
    o:[
      ["Drink it if it looks clear after a few minutes", "কয়েক মিনিট পর পরিষ্কার দেখালে পান করা", "कुछ मिनट बाद साफ़ दिखे तो पी लेना"],
      ["Add a pinch of salt and drink it", "এক চিমটি লবণ মিশিয়ে পান করা", "एक चुटकी नमक मिलाकर पी लेना"],
      ["Cool it in the fridge and drink it", "ফ্রিজে ঠান্ডা করে পান করা", "फ्रिज में ठंडा करके पी लेना"],
      ["Boil it properly or use safe, treated water", "ভালোভাবে ফুটিয়ে নেওয়া বা নিরাপদ শোধিত জল ব্যবহার করা", "अच्छी तरह उबालना या सुरक्षित शोधित पानी का उपयोग करना"]
    ],a:3
  },
  {
    cat:"helplines-awareness",
    q:["Someone has been bitten by a snake. What is the right first response?", "কাউকে সাপে কামড়েছে। প্রথমে সঠিক পদক্ষেপ কী?", "किसी को साँप ने काट लिया है। सही पहली प्रतिक्रिया क्या है?"],
    o:[
      ["Cut the bite and suck out the poison with the mouth", "কামড়ের জায়গা কেটে মুখ দিয়ে বিষ চুষে নেওয়া", "काटी जगह चीरकर मुँह से ज़हर चूस लेना"],
      ["Tie the limb very tightly above the bite with a rope", "কামড়ের ওপরে হাত বা পা দড়ি দিয়ে খুব শক্ত করে বাঁধা", "काटने की जगह के ऊपर अंग को रस्सी से बहुत कसकर बाँधना"],
      ["Keep the person calm and still; go to a hospital at once", "ব্যক্তিকে শান্ত ও স্থির রেখে অবিলম্বে হাসপাতালে যাওয়া", "व्यक्ति को शांत और स्थिर रखकर तुरंत अस्पताल जाएँ"],
      ["Wait for symptoms to appear before going anywhere", "কোথাও যাওয়ার আগে লক্ষণ দেখা দেওয়ার অপেক্ষা করা", "कहीं जाने से पहले लक्षण दिखने का इंतज़ार करना"]
    ],a:2
  },
  {
    cat:"helplines-awareness",
    q:["A person has loose motions (diarrhoea). What helps prevent dehydration?", "কারও পাতলা পায়খানা হচ্ছে। জলশূন্যতা রোধে কী সাহায্য করে?", "किसी को दस्त हो रहे हैं। निर्जलीकरण रोकने में क्या मदद करता है?"],
    o:[
      ["Stop all fluids until the loose motions end completely", "পাতলা পায়খানা পুরো থামা পর্যন্ত সব তরল বন্ধ রাখা", "दस्त पूरी तरह रुकने तक सारे तरल बंद रखना"],
      ["Give only strong tea without water", "জল ছাড়া শুধু কড়া চা দেওয়া", "पानी के बिना केवल कड़क चाय देना"],
      ["Give ORS and safe fluids; get medical help if severe", "ORS ও নিরাপদ তরল দেওয়া; গুরুতর হলে চিকিৎসা নেওয়া", "ORS और सुरक्षित तरल दें; गंभीर हो तो चिकित्सा लें"],
      ["Give an antibiotic offered by a neighbour", "প্রতিবেশীর দেওয়া অ্যান্টিবায়োটিক খাওয়ানো", "पड़ोसी की दी हुई एंटीबायोटिक देना"]
    ],a:2
  },
];

/* Groups built from the category field (10 questions per category = one exam part) */
const QUESTION_GROUPS = CATEGORIES.map(function(c){
  return { id:c.id, title:c.title, questions: QUESTIONS.filter(function(q){ return q.cat === c.id; }) };
});

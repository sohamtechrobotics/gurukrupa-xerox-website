
/* =========================================================
   GURUKRUPA XEROX & SOHAM MULTISERVICES
   Complete Multilingual Website Script
   English | Marathi | Hindi
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const homeTranslations = {
    en: {
      nav: ["Home", "Services", "About", "Gallery", "Contact"],
      heroEyebrow: "YOUR TRUSTED MULTISERVICE CENTRE",
      heroTitle: 'Every service.<br><span>One place.</span>',
      heroDescription: "From everyday Xerox and printing to online applications, government services and business support — everything you need, made simpler.",
      explore: "Explore Services ↗",
      contact: "Contact Us",
      trust: ["✓ Reliable service", "✓ Convenient solutions", "✓ Local support"],
      documentServices: "DOCUMENT SERVICES",
      onePlace: "ONE PLACE",
      simple: "SIMPLE. TRUSTED. CONVENIENT.",
      quick: ["Xerox & Printing", "Online Services", "Government Work", "Business Support"],
      printLabel: "PRINT WITHOUT THE WAIT",
      printTitle: 'Your documents.<br><span>Ready when you are.</span>',
      printDescription: "Discover our upcoming online printing service. Prepare your documents and collect your prints conveniently from our shop.",
      printSteps: ["Upload your documents", "Review and confirm", "Pay securely and collect"],
      printButton: "Explore Print Online ↗",
      printNote: "Online ordering will be available after the print-order system is launched.",
      whyLabel: "WHY GURUKRUPA",
      whyTitle: "One destination.<br>Many solutions.",
      whyDescription: "We bring essential services together to make your everyday work easier.",
      whyCards: [
        ["Convenience", "Multiple essential services in one place."],
        ["Accessibility", "Local assistance for everyday digital needs."],
        ["Versatility", "Solutions for students, individuals and businesses."],
        ["Support", "Personal assistance when you need it."]
      ],
      enquiryLabel: "SERVICE REQUEST",
      enquiryTitle: 'How can we <span>help you?</span>',
      enquiryDescription: "Tell us what you need. We'll help you with the next step.",
      name: "Your name *",
      mobile: "Mobile number *",
      selectService: "Select service *",
      chooseService: "Choose a service",
      services: ["Xerox & Printing", "Online Form Filling", "Income Tax Work", "Government Services", "Data Entry Services", "Business Support", "Other Enquiry"],
      visitDate: "Preferred visit date",
      requirements: "Your requirements *",
      messagePlaceholder: "Tell us what service you need...",
      submit: "Send Enquiry on WhatsApp ↗",
      disclaimer: "Your enquiry will open in WhatsApp for you to send. Do not include passwords, OTPs or sensitive financial information.",
      findUs: "FIND US",
      mapTitle: 'Visit our <span>centre.</span>',
      mapDescription: "Plot No. 48, Balaji Nagar, New Bhokardan, Maharashtra – 431114.",
      directions: "Open Directions in Google Maps ↗",
      quickLinks: "QUICK LINKS",
      ourServices: "OUR SERVICES",
      getInTouch: "GET IN TOUCH",
      footerDescription: "Every Service. One Place. Your trusted local multiservice centre.",
      footerAddress: "Plot No. 48, Balaji Nagar, New Bhokardan, Maharashtra – 431114",
      footerCopyright: "All rights reserved.",
      footerTagline: "Designed with care. Built for convenience.",
      chat: "Chat with us",
      document: "Document.pdf",
      ready: "Ready for printing",
      preview: "✓ Document preview concept",
      mobileMenu: "Open navigation menu",
      closeMenu: "Close navigation menu"
    },

    mr: {
      nav: ["मुख्यपृष्ठ", "सेवा", "आमच्याबद्दल", "गॅलरी", "संपर्क"],
      heroEyebrow: "तुमचे विश्वासार्ह मल्टीसर्व्हिस केंद्र",
      heroTitle: 'प्रत्येक सेवा.<br><span>एकाच ठिकाणी.</span>',
      heroDescription: "झेरॉक्स आणि प्रिंटिंगपासून ऑनलाइन अर्ज, सरकारी सेवा आणि व्यवसाय सहाय्यापर्यंत — तुमच्या सर्व गरजांसाठी सोयीस्कर सेवा.",
      explore: "सेवा पहा ↗",
      contact: "संपर्क साधा",
      trust: ["✓ विश्वासार्ह सेवा", "✓ सोयीस्कर सुविधा", "✓ स्थानिक सहाय्य"],
      documentServices: "कागदपत्र सेवा",
      onePlace: "एकाच ठिकाणी",
      simple: "सोपी. विश्वासार्ह. सोयीस्कर.",
      quick: ["झेरॉक्स आणि प्रिंटिंग", "ऑनलाइन सेवा", "सरकारी कामे", "व्यवसाय सहाय्य"],
      printLabel: "वाट न पाहता प्रिंटिंग",
      printTitle: 'तुमची कागदपत्रे.<br><span>तुमच्या सोयीच्या वेळी.</span>',
      printDescription: "आमच्या आगामी ऑनलाइन प्रिंटिंग सेवेची माहिती घ्या. कागदपत्रे तयार करा आणि दुकानातून प्रिंट सहज घेऊन जा.",
      printSteps: ["कागदपत्रे अपलोड करा", "तपासून निश्चित करा", "सुरक्षित पेमेंट करून प्रिंट घ्या"],
      printButton: "ऑनलाइन प्रिंटिंग पहा ↗",
      printNote: "ऑनलाइन ऑर्डरिंग सुविधा सुरू झाल्यानंतर उपलब्ध होईल.",
      whyLabel: "गुरुकृपा का निवडावे?",
      whyTitle: "एक ठिकाण.<br>अनेक उपाय.",
      whyDescription: "तुमची दैनंदिन कामे सोपी करण्यासाठी आवश्यक सेवा एकाच ठिकाणी.",
      whyCards: [
        ["सोय", "अनेक आवश्यक सेवा एकाच ठिकाणी."],
        ["उपलब्धता", "दैनंदिन डिजिटल कामांसाठी स्थानिक सहाय्य."],
        ["विविधता", "विद्यार्थी, नागरिक आणि व्यवसायांसाठी उपाय."],
        ["सहाय्य", "गरजेनुसार वैयक्तिक मदत."]
      ],
      enquiryLabel: "सेवा विनंती",
      enquiryTitle: '<span>आम्ही कशी मदत करू?</span>',
      enquiryDescription: "तुमची गरज सांगा. पुढील प्रक्रियेत आम्ही मदत करू.",
      name: "तुमचे नाव *",
      mobile: "मोबाईल क्रमांक *",
      selectService: "सेवा निवडा *",
      chooseService: "सेवा निवडा",
      services: ["झेरॉक्स आणि प्रिंटिंग", "ऑनलाइन फॉर्म भरणे", "आयकर काम", "सरकारी सेवा", "डेटा एन्ट्री सेवा", "व्यवसाय सहाय्य", "इतर चौकशी"],
      visitDate: "भेट देण्याची पसंतीची तारीख",
      requirements: "तुमची आवश्यकता *",
      messagePlaceholder: "तुम्हाला कोणती सेवा हवी आहे ते सांगा...",
      submit: "WhatsApp वर चौकशी पाठवा ↗",
      disclaimer: "तुमची चौकशी WhatsApp मध्ये उघडेल. पासवर्ड, OTP किंवा संवेदनशील आर्थिक माहिती पाठवू नका.",
      findUs: "आम्हाला भेट द्या",
      mapTitle: '<span>आमच्या केंद्राला</span> भेट द्या.',
      mapDescription: "प्लॉट नं. ४८, बालाजी नगर, न्यू भोकरदन, महाराष्ट्र – ४३१११४.",
      directions: "Google Maps वर मार्ग पहा ↗",
      quickLinks: "महत्त्वाचे दुवे",
      ourServices: "आमच्या सेवा",
      getInTouch: "संपर्क माहिती",
      footerDescription: "प्रत्येक सेवा. एकाच ठिकाणी. तुमचे विश्वासार्ह स्थानिक सेवा केंद्र.",
      footerAddress: "प्लॉट नं. ४८, बालाजी नगर, न्यू भोकरदन, महाराष्ट्र – ४३१११४",
      footerCopyright: "सर्व हक्क राखीव.",
      footerTagline: "काळजीपूर्वक डिझाइन. सोयीसाठी निर्मित.",
      chat: "आमच्याशी बोला",
      document: "कागदपत्र.pdf",
      ready: "प्रिंटिंगसाठी तयार",
      preview: "✓ कागदपत्र पूर्वदृश्य संकल्पना",
      mobileMenu: "मेनू उघडा",
      closeMenu: "मेनू बंद करा"
    },

    hi: {
      nav: ["होम", "सेवाएँ", "हमारे बारे में", "गैलरी", "संपर्क"],
      heroEyebrow: "आपका विश्वसनीय मल्टीसर्विस सेंटर",
      heroTitle: 'हर सेवा।<br><span>एक ही जगह।</span>',
      heroDescription: "रोज़मर्रा की ज़ेरॉक्स और प्रिंटिंग से लेकर ऑनलाइन आवेदन, सरकारी सेवाओं और व्यावसायिक सहायता तक — आपकी सभी ज़रूरतों के लिए आसान समाधान।",
      explore: "सेवाएँ देखें ↗",
      contact: "संपर्क करें",
      trust: ["✓ विश्वसनीय सेवा", "✓ सुविधाजनक समाधान", "✓ स्थानीय सहायता"],
      documentServices: "दस्तावेज़ सेवाएँ",
      onePlace: "एक ही जगह",
      simple: "आसान। विश्वसनीय। सुविधाजनक।",
      quick: ["ज़ेरॉक्स और प्रिंटिंग", "ऑनलाइन सेवाएँ", "सरकारी कार्य", "व्यावसायिक सहायता"],
      printLabel: "बिना इंतज़ार प्रिंटिंग",
      printTitle: 'आपके दस्तावेज़।<br><span>आपकी सुविधा के अनुसार।</span>',
      printDescription: "हमारी आगामी ऑनलाइन प्रिंटिंग सेवा के बारे में जानें। अपने दस्तावेज़ तैयार करें और दुकान से आसानी से प्रिंट प्राप्त करें।",
      printSteps: ["दस्तावेज़ अपलोड करें", "जाँचें और पुष्टि करें", "सुरक्षित भुगतान करके प्रिंट लें"],
      printButton: "ऑनलाइन प्रिंटिंग देखें ↗",
      printNote: "ऑनलाइन ऑर्डरिंग सुविधा सिस्टम शुरू होने के बाद उपलब्ध होगी।",
      whyLabel: "गुरुकृपा क्यों चुनें?",
      whyTitle: "एक जगह।<br>अनेक समाधान।",
      whyDescription: "आपके रोज़मर्रा के काम आसान बनाने के लिए आवश्यक सेवाएँ एक ही जगह।",
      whyCards: [
        ["सुविधा", "कई आवश्यक सेवाएँ एक ही जगह।"],
        ["उपलब्धता", "रोज़मर्रा के डिजिटल कार्यों के लिए स्थानीय सहायता।"],
        ["विविधता", "विद्यार्थियों, व्यक्तियों और व्यवसायों के लिए समाधान।"],
        ["सहायता", "ज़रूरत पड़ने पर व्यक्तिगत मदद।"]
      ],
      enquiryLabel: "सेवा अनुरोध",
      enquiryTitle: 'हम आपकी <span>कैसे मदद करें?</span>',
      enquiryDescription: "अपनी ज़रूरत बताएँ। आगे की प्रक्रिया में हम आपकी मदद करेंगे।",
      name: "आपका नाम *",
      mobile: "मोबाइल नंबर *",
      selectService: "सेवा चुनें *",
      chooseService: "सेवा चुनें",
      services: ["ज़ेरॉक्स और प्रिंटिंग", "ऑनलाइन फॉर्म भरना", "आयकर कार्य", "सरकारी सेवाएँ", "डेटा एंट्री सेवाएँ", "व्यावसायिक सहायता", "अन्य पूछताछ"],
      visitDate: "आने की पसंदीदा तारीख",
      requirements: "आपकी आवश्यकता *",
      messagePlaceholder: "बताएँ कि आपको कौन सी सेवा चाहिए...",
      submit: "WhatsApp पर पूछताछ भेजें ↗",
      disclaimer: "आपकी पूछताछ WhatsApp में खुलेगी। पासवर्ड, OTP या संवेदनशील वित्तीय जानकारी न भेजें।",
      findUs: "हमसे मिलें",
      mapTitle: '<span>हमारे केंद्र पर</span> आएँ।',
      mapDescription: "प्लॉट नं. 48, बालाजी नगर, न्यू भोकरदन, महाराष्ट्र – 431114.",
      directions: "Google Maps पर रास्ता देखें ↗",
      quickLinks: "त्वरित लिंक",
      ourServices: "हमारी सेवाएँ",
      getInTouch: "संपर्क करें",
      footerDescription: "हर सेवा। एक ही जगह। आपका विश्वसनीय स्थानीय सेवा केंद्र।",
      footerAddress: "प्लॉट नं. 48, बालाजी नगर, न्यू भोकरदन, महाराष्ट्र – 431114",
      footerCopyright: "सर्वाधिकार सुरक्षित।",
      footerTagline: "ध्यान से डिज़ाइन किया गया। सुविधा के लिए बनाया गया।",
      chat: "हमसे चैट करें",
      document: "दस्तावेज़.pdf",
      ready: "प्रिंटिंग के लिए तैयार",
      preview: "✓ दस्तावेज़ पूर्वावलोकन अवधारणा",
      mobileMenu: "नेविगेशन मेनू खोलें",
      closeMenu: "नेविगेशन मेनू बंद करें"
    }
  };

  /* =====================================================
     INNER PAGE TRANSLATIONS
     ===================================================== */

  const inner = {
    en: {
      nav: ["Home", "Services", "About", "Gallery", "Contact"],
      navPrint: "Print Online",
      footerHead: ["QUICK LINKS", "OUR SERVICES", "GET IN TOUCH"],
      footerQuick: ["Home", "Services", "About Us", "Gallery", "Contact", "Print Online"],
      footerServices: ["Xerox & Printing", "Online Form Filling", "Income Tax Work", "Government Services", "Data Entry"],
      footerDesc: "Every Service. One Place. Your trusted local multiservice centre.",
      footerTag: "Every Service. One Place.",
      about: {
        label: "ABOUT OUR BUSINESS",
        title: "Making everyday services simpler.",
        p: [
          "Gurukrupa Xerox And Soham Multiservices is a local service centre based in New Bhokardan, Maharashtra. We bring together everyday printing, documentation, digital assistance and business support services in one convenient destination.",
          "Our aim is to make essential services easier to access for students, individuals, families, farmers and local businesses."
        ],
        points: ["Multiple services under one roof", "Support for individuals and businesses", "Convenient local service in Bhokardan", "Digital and documentation assistance"],
        link: "Explore our services ↗",
        approach: "OUR APPROACH",
        why: "Built around your everyday needs.",
        whyP: "We believe essential services should be convenient, accessible and easy to understand.",
        cards: [
          ["Convenience", "Many useful services in one destination."],
          ["Accessibility", "Local assistance for everyday requirements."],
          ["Versatility", "Support for different customers and needs."],
          ["Commitment", "A focus on helpful and practical service."]
        ]
      },
      gallery: {
        label: "OUR GALLERY",
        title: "A closer look at Gurukrupa.",
        desc: "A glimpse of our services, workspace and the solutions we offer.",
        cards: [
          ["Xerox & Printing", "Everyday document services"],
          ["Digital Services", "Online applications and assistance"],
          ["Documentation", "Document preparation and support"],
          ["Business Support", "Services for local businesses"],
          ["Customer Services", "Convenient local assistance"],
          ["Print Online", "Our upcoming online printing concept"]
        ],
        note: "These are illustrative gallery panels. Actual shop and service photographs can be added later."
      },
      services: {
        label: "OUR SERVICES",
        title: "Everything you need. All in one place.",
        desc: "Explore our range of documentation, digital, printing and business support services.",
        cards: [
          ["Xerox & Printing", "Photocopying, document printing and everyday printing requirements for students, individuals and businesses."],
          ["Online Form Filling", "Assistance with online applications, registrations, digital forms and document submission."],
          ["Income Tax Work", "Assistance with income-tax related work, information entry and required documentation."],
          ["Government Services", "Support with various government-related applications, online processes and digital services."],
          ["Data Entry Services", "Data entry, document preparation and digital information management support."],
          ["Business Support", "Practical digital, typing and documentation assistance for local businesses."]
        ],
        enquire: "Enquire now ↗",
        coming: "COMING ONLINE",
        printTitle: "Printing made more convenient.",
        printDesc: "Our planned online printing service will let customers submit documents, review the print-ready file and collect the finished order from our shop.",
        discover: "Discover Print Online ↗",
        note: "Online ordering and payment are not active yet."
      },
      contact: {
        label: "GET IN TOUCH",
        title: "We're here to help.",
        desc: "Have a question or need assistance? Reach out to us through any of the options below.",
        cards: [
          ["VISIT OUR CENTRE", "Our Address", "Plot No. 48, Balaji Nagar, New Bhokardan, Bhokardan, Jalna, Maharashtra – 431114.", "Get Directions ↗"],
          ["CALL OR WHATSAPP", "Phone", "Speak with us about Xerox, printing, online applications and other services.", "Call Now ↗", "WhatsApp ↗"],
          ["WRITE TO US", "Email", "Send your questions and service enquiries to our email address.", "Send Email ↗"]
        ],
        bottom: "Need a service?",
        bottomDesc: "Explore our services or contact us directly on WhatsApp.",
        whatsapp: "Chat on WhatsApp ↗"
      },
      print: {
        label: "A MORE CONVENIENT WAY TO PRINT",
        title: "Print smarter. Collect locally.",
        desc: "We are planning an online printing experience that will let you submit your documents remotely, review the print-ready version and collect your completed order from our shop.",
        steps: ["Upload your document", "Review file and pricing", "Pay and collect"],
        button: "Enquire on WhatsApp ↗",
        note: "Online upload, checkout, order tracking and payment are not active yet. Please contact the shop for current printing orders.",
        file: "Illustrative preview",
        ready: "✓ Concept preview",
        how: "HOW IT WILL WORK",
        howTitle: "Three simple steps.",
        howDesc: "The planned system is designed to make remote printing convenient while keeping collection at our shop.",
        cards: [
          ["Upload", "Submit a PDF, image or supported document file."],
          ["Review", "Check the converted print-ready file and price before confirming."],
          ["Collect", "Complete payment when the system launches and collect your order from the shop."],
          ["Track", "Planned order updates and collection confirmation."]
        ]
      }
    },

    mr: {
      nav: ["मुख्यपृष्ठ", "सेवा", "आमच्याबद्दल", "गॅलरी", "संपर्क"],
      navPrint: "ऑनलाइन प्रिंटिंग",
      footerHead: ["महत्त्वाचे दुवे", "आमच्या सेवा", "संपर्क साधा"],
      footerQuick: ["मुख्यपृष्ठ", "सेवा", "आमच्याबद्दल", "गॅलरी", "संपर्क", "ऑनलाइन प्रिंटिंग"],
      footerServices: ["झेरॉक्स आणि प्रिंटिंग", "ऑनलाइन फॉर्म भरणे", "आयकरविषयक काम", "सरकारी सेवा", "डेटा एन्ट्री"],
      footerDesc: "प्रत्येक सेवा. एकाच ठिकाणी. तुमचे विश्वासार्ह स्थानिक मल्टीसर्व्हिस केंद्र.",
      footerTag: "प्रत्येक सेवा. एकाच ठिकाणी.",
      about: {
        label: "आमच्या व्यवसायाबद्दल",
        title: "दैनंदिन सेवा अधिक सोप्या बनवणे.",
        p: [
          "गुरुकृपा झेरॉक्स अँड सोहम मल्टीसर्व्हिसेस हे महाराष्ट्रातील न्यू भोकरदन येथे असलेले स्थानिक सेवा केंद्र आहे. दैनंदिन प्रिंटिंग, कागदपत्रे, डिजिटल सहाय्य आणि व्यवसायविषयक सेवा आम्ही एकाच सोयीस्कर ठिकाणी उपलब्ध करून देतो.",
          "विद्यार्थी, व्यक्ती, कुटुंबे, शेतकरी आणि स्थानिक व्यवसायांना आवश्यक सेवा सहज उपलब्ध करून देणे हे आमचे उद्दिष्ट आहे."
        ],
        points: ["अनेक सेवा एकाच छताखाली", "व्यक्ती आणि व्यवसायांसाठी सहाय्य", "भोकरदनमध्ये सोयीस्कर स्थानिक सेवा", "डिजिटल आणि कागदपत्रविषयक सहाय्य"],
        link: "आमच्या सेवा पहा ↗",
        approach: "आमची कार्यपद्धती",
        why: "तुमच्या दैनंदिन गरजांनुसार सेवा.",
        whyP: "आवश्यक सेवा सोयीस्कर, सहज उपलब्ध आणि समजण्यास सोप्या असाव्यात, असा आमचा विश्वास आहे.",
        cards: [
          ["सोय", "अनेक उपयुक्त सेवा एकाच ठिकाणी."],
          ["सुलभता", "दैनंदिन गरजांसाठी स्थानिक सहाय्य."],
          ["विविधता", "वेगवेगळ्या ग्राहकांच्या गरजांसाठी मदत."],
          ["बांधिलकी", "उपयुक्त आणि व्यावहारिक सेवेवर भर."]
        ]
      },
      gallery: {
        label: "आमची गॅलरी",
        title: "गुरुकृपा सेवांची एक झलक.",
        desc: "आमच्या सेवा, कार्यस्थळ आणि उपलब्ध उपायांची एक झलक.",
        cards: [
          ["झेरॉक्स आणि प्रिंटिंग", "दैनंदिन कागदपत्र सेवा"],
          ["डिजिटल सेवा", "ऑनलाइन अर्ज आणि सहाय्य"],
          ["कागदपत्रे", "कागदपत्रांची तयारी आणि मदत"],
          ["व्यवसाय सहाय्य", "स्थानिक व्यवसायांसाठी सेवा"],
          ["ग्राहक सेवा", "सोयीस्कर स्थानिक सहाय्य"],
          ["ऑनलाइन प्रिंटिंग", "आमची नियोजित ऑनलाइन प्रिंटिंग सेवा"]
        ],
        note: "गॅलरीतील ही चित्रे प्रातिनिधिक स्वरूपाची आहेत. दुकानाची आणि सेवांची प्रत्यक्ष छायाचित्रे नंतर जोडता येतील."
      },
      services: {
        label: "आमच्या सेवा",
        title: "तुमच्या सर्व गरजांसाठी. एकाच ठिकाणी.",
        desc: "कागदपत्रे, डिजिटल कामे, प्रिंटिंग आणि व्यवसायविषयक सहाय्याच्या सेवा पहा.",
        cards: [
          ["झेरॉक्स आणि प्रिंटिंग", "विद्यार्थी, व्यक्ती आणि व्यवसायांसाठी फोटोकॉपी, कागदपत्र प्रिंटिंग आणि दैनंदिन प्रिंटिंग सुविधा."],
          ["ऑनलाइन फॉर्म भरणे", "ऑनलाइन अर्ज, नोंदणी, डिजिटल फॉर्म आणि कागदपत्रे सादर करण्यासाठी सहाय्य."],
          ["आयकरविषयक काम", "आयकराशी संबंधित कामे, माहिती भरणे आणि आवश्यक कागदपत्रांसाठी सहाय्य."],
          ["सरकारी सेवा", "विविध सरकारी अर्ज, ऑनलाइन प्रक्रिया आणि डिजिटल सेवांसाठी मदत."],
          ["डेटा एन्ट्री सेवा", "डेटा एन्ट्री, कागदपत्रांची तयारी आणि डिजिटल माहिती व्यवस्थापनासाठी सहाय्य."],
          ["व्यवसाय सहाय्य", "स्थानिक व्यवसायांसाठी डिजिटल कामे, टायपिंग आणि कागदपत्रविषयक व्यावहारिक मदत."]
        ],
        enquire: "चौकशी करा ↗",
        coming: "लवकरच ऑनलाइन",
        printTitle: "प्रिंटिंग आता अधिक सोयीस्कर.",
        printDesc: "आमच्या नियोजित ऑनलाइन प्रिंटिंग सेवेद्वारे ग्राहक कागदपत्रे पाठवू शकतील, प्रिंटसाठी तयार फाईल तपासू शकतील आणि तयार ऑर्डर दुकानातून घेऊ शकतील.",
        discover: "ऑनलाइन प्रिंटिंग पहा ↗",
        note: "ऑनलाइन ऑर्डर आणि पेमेंट सुविधा अद्याप सुरू झालेल्या नाहीत."
      },
      contact: {
        label: "संपर्क साधा",
        title: "आम्ही मदतीसाठी येथे आहोत.",
        desc: "तुम्हाला काही प्रश्न आहेत किंवा मदत हवी आहे? खालील पर्यायांद्वारे आमच्याशी संपर्क साधा.",
        cards: [
          ["आमच्या केंद्राला भेट द्या", "आमचा पत्ता", "प्लॉट नं. ४८, बालाजी नगर, न्यू भोकरदन, भोकरदन, जालना, महाराष्ट्र – ४३११४.", "मार्ग पहा ↗"],
          ["कॉल किंवा WhatsApp", "फोन", "झेरॉक्स, प्रिंटिंग, ऑनलाइन अर्ज आणि इतर सेवांबद्दल आमच्याशी बोला.", "कॉल करा ↗", "WhatsApp ↗"],
          ["आम्हाला ईमेल करा", "ईमेल", "तुमचे प्रश्न आणि सेवा चौकशी आमच्या ईमेलवर पाठवा.", "ईमेल पाठवा ↗"]
        ],
        bottom: "सेवा हवी आहे?",
        bottomDesc: "आमच्या सेवा पहा किंवा थेट WhatsApp वर संपर्क साधा.",
        whatsapp: "WhatsApp वर बोला ↗"
      },
      print: {
        label: "प्रिंटिंगची अधिक सोयीस्कर पद्धत",
        title: "स्मार्ट प्रिंटिंग. दुकानातून संकलन.",
        desc: "आम्ही ऑनलाइन प्रिंटिंग सुविधा सुरू करण्याच्या तयारीत आहोत. याद्वारे तुम्ही कागदपत्रे ऑनलाइन पाठवू शकाल, प्रिंटसाठी तयार फाईल तपासू शकाल आणि पूर्ण ऑर्डर दुकानातून घेऊ शकाल.",
        steps: ["कागदपत्र अपलोड करा", "फाईल आणि किंमत तपासा", "पेमेंट करून प्रिंट घ्या"],
        button: "WhatsApp वर चौकशी करा ↗",
        note: "ऑनलाइन अपलोड, चेकआउट, ऑर्डर ट्रॅकिंग आणि पेमेंट सुविधा अद्याप सुरू नाहीत. सध्याच्या प्रिंटिंग ऑर्डरसाठी कृपया दुकानाशी संपर्क साधा.",
        file: "प्रातिनिधिक पूर्वावलोकन",
        ready: "✓ संकल्पना पूर्वावलोकन",
        how: "ही प्रक्रिया कशी असेल",
        howTitle: "तीन सोप्या पायऱ्या.",
        howDesc: "दुकानातून प्रिंट घेण्याची सुविधा कायम ठेवून ऑनलाइन प्रिंटिंग अधिक सोयीस्कर करणे, अशी या नियोजित प्रणालीची रचना आहे.",
        cards: [
          ["अपलोड", "PDF, प्रतिमा किंवा समर्थित कागदपत्र फाईल पाठवा."],
          ["तपासणी", "पुष्टी करण्यापूर्वी रूपांतरित प्रिंट-तयार फाईल आणि किंमत तपासा."],
          ["प्रिंट घ्या", "प्रणाली सुरू झाल्यावर पेमेंट पूर्ण करा आणि दुकानातून ऑर्डर घ्या."],
          ["ट्रॅकिंग", "ऑर्डर अपडेट आणि संकलनाची पुष्टी देण्याची नियोजित सुविधा."]
        ]
      }
    },

    hi: {
      nav: ["होम", "सेवाएँ", "हमारे बारे में", "गैलरी", "संपर्क"],
      navPrint: "ऑनलाइन प्रिंटिंग",
      footerHead: ["त्वरित लिंक", "हमारी सेवाएँ", "संपर्क करें"],
      footerQuick: ["होम", "सेवाएँ", "हमारे बारे में", "गैलरी", "संपर्क", "ऑनलाइन प्रिंटिंग"],
      footerServices: ["ज़ेरॉक्स और प्रिंटिंग", "ऑनलाइन फॉर्म भरना", "आयकर संबंधी कार्य", "सरकारी सेवाएँ", "डेटा एंट्री"],
      footerDesc: "हर सेवा। एक ही जगह। आपका विश्वसनीय स्थानीय मल्टीसर्विस केंद्र।",
      footerTag: "हर सेवा। एक ही जगह।",
      about: {
        label: "हमारे व्यवसाय के बारे में",
        title: "रोज़मर्रा की सेवाओं को आसान बनाना।",
        p: [
          "गुरुकृपा ज़ेरॉक्स एंड सोहम मल्टीसर्विसेज महाराष्ट्र के न्यू भोकरदन में स्थित एक स्थानीय सेवा केंद्र है। हम रोज़मर्रा की प्रिंटिंग, दस्तावेज़, डिजिटल सहायता और व्यावसायिक सेवाएँ एक ही सुविधाजनक स्थान पर उपलब्ध कराते हैं।",
          "विद्यार्थियों, व्यक्तियों, परिवारों, किसानों और स्थानीय व्यवसायों के लिए आवश्यक सेवाएँ आसानी से उपलब्ध कराना हमारा उद्देश्य है।"
        ],
        points: ["कई सेवाएँ एक ही छत के नीचे", "व्यक्तियों और व्यवसायों के लिए सहायता", "भोकरदन में सुविधाजनक स्थानीय सेवा", "डिजिटल और दस्तावेज़ संबंधी सहायता"],
        link: "हमारी सेवाएँ देखें ↗",
        approach: "हमारा दृष्टिकोण",
        why: "आपकी रोज़मर्रा की ज़रूरतों के अनुसार।",
        whyP: "हमारा मानना है कि आवश्यक सेवाएँ सुविधाजनक, सुलभ और समझने में आसान होनी चाहिए।",
        cards: [
          ["सुविधा", "कई उपयोगी सेवाएँ एक ही जगह।"],
          ["सुलभता", "रोज़मर्रा की ज़रूरतों के लिए स्थानीय सहायता।"],
          ["बहुमुखी सेवा", "अलग-अलग ग्राहकों और ज़रूरतों के लिए सहायता।"],
          ["प्रतिबद्धता", "उपयोगी और व्यावहारिक सेवा पर ध्यान।"]
        ]
      },
      gallery: {
        label: "हमारी गैलरी",
        title: "गुरुकृपा की सेवाओं की एक झलक।",
        desc: "हमारी सेवाओं, कार्यस्थल और उपलब्ध समाधानों की एक झलक।",
        cards: [
          ["ज़ेरॉक्स और प्रिंटिंग", "रोज़मर्रा की दस्तावेज़ सेवाएँ"],
          ["डिजिटल सेवाएँ", "ऑनलाइन आवेदन और सहायता"],
          ["दस्तावेज़", "दस्तावेज़ तैयार करना और सहायता"],
          ["व्यावसायिक सहायता", "स्थानीय व्यवसायों के लिए सेवाएँ"],
          ["ग्राहक सेवाएँ", "सुविधाजनक स्थानीय सहायता"],
          ["ऑनलाइन प्रिंटिंग", "हमारी आगामी ऑनलाइन प्रिंटिंग सुविधा"]
        ],
        note: "ये गैलरी पैनल उदाहरण के लिए हैं। दुकान और सेवाओं की वास्तविक तस्वीरें बाद में जोड़ी जा सकती हैं।"
      },
      services: {
        label: "हमारी सेवाएँ",
        title: "आपकी हर ज़रूरत। एक ही जगह।",
        desc: "दस्तावेज़, डिजिटल, प्रिंटिंग और व्यावसायिक सहायता सेवाओं की जानकारी देखें।",
        cards: [
          ["ज़ेरॉक्स और प्रिंटिंग", "विद्यार्थियों, व्यक्तियों और व्यवसायों के लिए फोटोकॉपी, दस्तावेज़ प्रिंटिंग और रोज़मर्रा की प्रिंटिंग सुविधा।"],
          ["ऑनलाइन फॉर्म भरना", "ऑनलाइन आवेदन, पंजीकरण, डिजिटल फॉर्म और दस्तावेज़ जमा करने में सहायता।"],
          ["आयकर संबंधी कार्य", "आयकर संबंधी कार्यों, जानकारी दर्ज करने और आवश्यक दस्तावेज़ों में सहायता।"],
          ["सरकारी सेवाएँ", "विभिन्न सरकारी आवेदनों, ऑनलाइन प्रक्रियाओं और डिजिटल सेवाओं में सहायता।"],
          ["डेटा एंट्री सेवाएँ", "डेटा एंट्री, दस्तावेज़ तैयार करने और डिजिटल जानकारी प्रबंधन में सहायता।"],
          ["व्यावसायिक सहायता", "स्थानीय व्यवसायों के लिए डिजिटल कार्य, टाइपिंग और दस्तावेज़ संबंधी व्यावहारिक सहायता।"]
        ],
        enquire: "पूछताछ करें ↗",
        coming: "जल्द ऑनलाइन",
        printTitle: "प्रिंटिंग अब और सुविधाजनक।",
        printDesc: "हमारी प्रस्तावित ऑनलाइन प्रिंटिंग सेवा से ग्राहक दस्तावेज़ भेज सकेंगे, प्रिंट के लिए तैयार फाइल देख सकेंगे और तैयार ऑर्डर दुकान से प्राप्त कर सकेंगे।",
        discover: "ऑनलाइन प्रिंटिंग देखें ↗",
        note: "ऑनलाइन ऑर्डर और भुगतान अभी सक्रिय नहीं हैं।"
      },
      contact: {
        label: "संपर्क करें",
        title: "हम आपकी मदद के लिए यहाँ हैं।",
        desc: "कोई सवाल है या सहायता चाहिए? नीचे दिए गए किसी भी विकल्प से हमसे संपर्क करें।",
        cards: [
          ["हमारे केंद्र पर आएँ", "हमारा पता", "प्लॉट नं. 48, बालाजी नगर, न्यू भोकरदन, भोकरदन, जालना, महाराष्ट्र – 431114.", "रास्ता देखें ↗"],
          ["कॉल या WhatsApp", "फोन", "ज़ेरॉक्स, प्रिंटिंग, ऑनलाइन आवेदन और अन्य सेवाओं के बारे में हमसे बात करें।", "कॉल करें ↗", "WhatsApp ↗"],
          ["हमें ईमेल करें", "ईमेल", "अपने प्रश्न और सेवा संबंधी पूछताछ हमारे ईमेल पते पर भेजें।", "ईमेल भेजें ↗"]
        ],
        bottom: "कोई सेवा चाहिए?",
        bottomDesc: "हमारी सेवाएँ देखें या सीधे WhatsApp पर संपर्क करें।",
        whatsapp: "WhatsApp पर चैट करें ↗"
      },
      print: {
        label: "प्रिंट करने का अधिक सुविधाजनक तरीका",
        title: "स्मार्ट प्रिंटिंग। दुकान से प्राप्त करें।",
        desc: "हम ऑनलाइन प्रिंटिंग सुविधा शुरू करने की योजना बना रहे हैं। इसमें आप दस्तावेज़ ऑनलाइन भेज सकेंगे, प्रिंट के लिए तैयार फाइल देख सकेंगे और तैयार ऑर्डर दुकान से प्राप्त कर सकेंगे।",
        steps: ["अपना दस्तावेज़ अपलोड करें", "फाइल और कीमत जाँचें", "भुगतान करें और प्रिंट लें"],
        button: "WhatsApp पर पूछताछ करें ↗",
        note: "ऑनलाइन अपलोड, चेकआउट, ऑर्डर ट्रैकिंग और भुगतान अभी सक्रिय नहीं हैं। वर्तमान प्रिंटिंग ऑर्डर के लिए कृपया दुकान से संपर्क करें।",
        file: "उदाहरण पूर्वावलोकन",
        ready: "✓ अवधारणा पूर्वावलोकन",
        how: "यह कैसे काम करेगा",
        howTitle: "तीन आसान चरण।",
        howDesc: "प्रस्तावित प्रणाली का उद्देश्य दुकान से प्रिंट प्राप्त करने की सुविधा बनाए रखते हुए ऑनलाइन प्रिंटिंग को आसान बनाना है।",
        cards: [
          ["अपलोड", "PDF, इमेज या समर्थित दस्तावेज़ फाइल भेजें।"],
          ["जाँचें", "पुष्टि करने से पहले बदली हुई प्रिंट-तैयार फाइल और कीमत देखें।"],
          ["प्राप्त करें", "सिस्टम शुरू होने पर भुगतान पूरा करें और दुकान से ऑर्डर लें।"],
          ["ट्रैक करें", "ऑर्डर अपडेट और प्राप्ति की पुष्टि की प्रस्तावित सुविधा।"]
        ]
      }
    }
  };

  /* =====================================================
     COMMON HELPERS
     ===================================================== */

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function safeText(value) {
    if (typeof value === "string" || typeof value === "number") return String(value);
    return "";
  }

  function put(selector, value, root = document) {
    const el = $(selector, root);
    if (el && value !== undefined) el.textContent = safeText(value);
  }

  function putHTML(selector, value, root = document) {
    const el = $(selector, root);
    if (el && value !== undefined) el.innerHTML = value;
  }

  function setList(selector, values, root = document) {
    if (!Array.isArray(values)) return;
    $$(selector, root).forEach((el, i) => {
      if (values[i] !== undefined) el.textContent = safeText(values[i]);
    });
  }

  function saveLanguage(language) {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("gurukrupa-language", language);
    } catch (_) {}
  }

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem("gurukrupa-language");
      return ["en", "mr", "hi"].includes(saved) ? saved : "en";
    } catch (_) {
      return "en";
    }
  }

  /* =====================================================
     LANGUAGE SELECTOR
     ===================================================== */

  let languageSelect = $("#languageSelect");

  if (!languageSelect) {
    const actions = $(".nav-actions");

    if (actions) {
      const wrap = document.createElement("div");
      wrap.className = "language-switcher";
      wrap.innerHTML =
        '<label class="sr-only" for="languageSelect">Choose website language</label>' +
        '<select id="languageSelect" aria-label="Choose website language">' +
        '<option value="en">EN</option>' +
        '<option value="mr">मराठी</option>' +
        '<option value="hi">हिन्दी</option>' +
        '</select>';

      const printLink = $(".nav-print", actions);
      actions.insertBefore(wrap, printLink || actions.firstChild);
      languageSelect = $("#languageSelect");
    }
  }

  /* =====================================================
     HOMEPAGE TRANSLATION
     ===================================================== */

  function translateHome(language) {
    const t = homeTranslations[language] || homeTranslations.en;

    saveLanguage(language);

    setList("#navLinks a", t.nav);
    const navPrintItem = $('#navLinks a[href="print-online.html"]');
    if (navPrintItem) navPrintItem.textContent = language === "mr" ? "ऑनलाइन प्रिंटिंग" : "Print Online";
    const navTrackItem = $('#navLinks a[href="track-order.html"]');
    if (navTrackItem) navTrackItem.textContent = language === "mr" ? "ऑर्डरची स्थिती पाहा" : "Track Order";

    put(".eyebrow", t.heroEyebrow);
    putHTML(".hero h1", t.heroTitle);
    put(".hero-description", t.heroDescription);
    putHTML(".hero-buttons .btn-primary", t.explore);
    put(".hero-buttons .btn-secondary", t.contact);

    setList(".hero-trust span", t.trust);

    put(".card-back span:last-child", t.documentServices);
    put(".document-tag", t.onePlace);

    // Preserve decorative children inside the floating badge.
    const badge = $(".floating-badge");
    if (badge) {
      const textNode = [...badge.childNodes].find(
        node => node.nodeType === Node.TEXT_NODE
      );
      if (textNode) {
        textNode.textContent = t.simple;
      } else {
        badge.appendChild(document.createTextNode(t.simple));
      }
    }

    setList(".quick-info div span", t.quick);

    put(".print-content .section-label", t.printLabel);
    putHTML(".print-content h2", t.printTitle);
    put(".print-content > p:not(.print-note)", t.printDescription);
    setList(".print-features p", t.printSteps);
    putHTML(".print-content .btn-light", t.printButton);
    put(".print-note", t.printNote);

    put(".why-section .section-label", t.whyLabel);
    putHTML(".why-section .section-heading h2", t.whyTitle);
    put(".why-section .section-heading > p", t.whyDescription);

    $$(".why-card").forEach((card, i) => {
      if (!t.whyCards[i]) return;
      put("h3", t.whyCards[i][0], card);
      put("p", t.whyCards[i][1], card);
    });

    put(".enquiry-heading .section-label", t.enquiryLabel);
    putHTML(".enquiry-heading h2", t.enquiryTitle);
    put(".enquiry-heading p", t.enquiryDescription);

    const labels = $$(".enquiry-form label");
    const labelTexts = [t.name, t.mobile, t.selectService, t.visitDate, t.requirements];

    labels.forEach((label, i) => {
      if (labelTexts[i]) label.textContent = labelTexts[i];
    });

    const serviceSelect = $("#serviceType");
    if (serviceSelect) {
      if (serviceSelect.options[0]) {
        serviceSelect.options[0].textContent = t.chooseService;
      }
      t.services.forEach((service, i) => {
        if (serviceSelect.options[i + 1]) {
          serviceSelect.options[i + 1].textContent = service;
        }
      });
    }

    const messageField = $("#enquiryMessage");
    if (messageField) messageField.placeholder = t.messagePlaceholder;

    putHTML(".enquiry-submit", t.submit);
    put(".form-disclaimer", t.disclaimer);

    put(".map-heading .section-label", t.findUs);
    putHTML(".map-heading h2", t.mapTitle);
    put(".map-heading p", t.mapDescription);
    putHTML(".map-directions", t.directions);

    const footerHeadings = $$(".footer-links > strong, .footer-contact > strong");
    [t.quickLinks, t.ourServices, t.getInTouch].forEach((value, i) => {
      if (footerHeadings[i]) footerHeadings[i].textContent = value;
    });

    put(".footer-brand > p", t.footerDescription);
    put(".footer-contact p", t.footerAddress);

    const bottom = $(".footer-bottom");
    if (bottom) {
      const spans = $$(":scope > span", bottom);
      if (spans[0]) {
        spans[0].innerHTML =
          `© <span id="currentYear">${new Date().getFullYear()}</span> ` +
          `Gurukrupa Xerox And Soham Multiservices. ${t.footerCopyright}`;
      }
      if (spans[1]) spans[1].textContent = t.footerTagline;
    }

    put(".print-main-card > strong", t.document);
    put(".file-size", t.ready);
    put(".print-ready", t.preview);
    put(".whatsapp-label", t.chat);

    if (languageSelect) languageSelect.value = language;
  }

  /* =====================================================
     INNER PAGE TRANSLATION
     ===================================================== */

  function translateInner(language) {
    const t = inner[language] || inner.en;
    const page = location.pathname.split("/").pop() || "index.html";

    saveLanguage(language);

    setList("#navLinks a", t.nav);

    // FIX 1: Use navPrint, NOT t.print.
    // t.print is an object containing Print Online page translations.
    const printLink = $(".nav-print");
    if (printLink) {
      const navPrintLabel = typeof t.navPrint === "string" && t.navPrint.trim()
        ? t.navPrint.trim()
        : (language === "mr" ? "ऑनलाइन प्रिंटिंग" : language === "hi" ? "ऑनलाइन प्रिंटिंग" : "Print Online");
      printLink.replaceChildren(document.createTextNode(navPrintLabel + " "));
      const arrow = document.createElement("span");
      arrow.textContent = "↗";
      printLink.appendChild(arrow);
    }

    const footerGroups = $$(".footer-links");

    if (footerGroups[0]) {
      put("strong", t.footerHead[0], footerGroups[0]);
      setList("a", t.footerQuick, footerGroups[0]);
    }

    if (footerGroups[1]) {
      put("strong", t.footerHead[1], footerGroups[1]);
      setList("a", t.footerServices, footerGroups[1]);
    }

    put(".footer-contact > strong", t.footerHead[2]);
    put(".footer-brand > p", t.footerDesc);

    const footerBottom = $(".footer-bottom");
    if (footerBottom) {
      const spans = $$(":scope > span", footerBottom);
      if (spans[1]) spans[1].textContent = t.footerTag;
    }

    const year = $("#currentYear");
    if (year) year.textContent = new Date().getFullYear();

    /* ABOUT PAGE */

    if (page === "about.html") {
      const d = t.about;

      put(".about-content > .section-label", d.label);
      put(".about-content > h2", d.title);
      setList(".about-content > p", d.p);
      put(".about-content > .text-link", d.link);

      // FIX 2: Target the actual About points rows.
      // Supports rows containing an icon followed by a text element.
      const pointRows = $$(".about-points > *");

      pointRows.forEach((row, i) => {
        if (d.points[i] === undefined) return;

        const textElement = row.querySelector(
          ".about-point-text, .point-text, p, strong, span:last-child"
        );

        if (textElement) {
          textElement.textContent = d.points[i];
        } else {
          // If the row has an icon and a text wrapper, use its last child.
          const lastChild = row.lastElementChild;
          if (lastChild) {
            lastChild.textContent = d.points[i];
          } else {
            row.textContent = d.points[i];
          }
        }
      });

      put(".why-section .section-label", d.approach);
      put(".why-section .section-heading h2", d.why);
      put(".why-section .section-heading > p", d.whyP);

      // Limit this to the cards in the lower About section.
      $$(".why-section .why-card").forEach((card, i) => {
        if (!d.cards[i]) return;
        put("h3", d.cards[i][0], card);
        put("p", d.cards[i][1], card);
      });
    }

    /* GALLERY PAGE */

    if (page === "gallery.html") {
      const d = t.gallery;

      put(".section-heading .section-label", d.label);
      put(".section-heading h2", d.title);
      put(".section-heading > p", d.desc);

      $$(".gallery-item").forEach((card, i) => {
        if (!d.cards[i]) return;
        put("strong", d.cards[i][0], card);
        put("small", d.cards[i][1], card);
      });

      const note = $(".gallery-grid + p");
      if (note) note.textContent = d.note;
    }

    /* SERVICES PAGE */

    if (page === "services.html") {
      const d = t.services;

      put(".services-section .section-label", d.label);
      put(".services-section .section-heading h2", d.title);
      put(".services-section .section-heading > p", d.desc);

      $$(".service-card").forEach((card, i) => {
        if (!d.cards[i]) return;
        put("h3", d.cards[i][0], card);
        put("p", d.cards[i][1], card);
        put("a", d.enquire, card);
      });

      put(".print-content .section-label", d.coming);
      put(".print-content h2", d.printTitle);
      put(".print-content > p:not(.print-note)", d.printDesc);
      put(".print-content .btn-light", d.discover);
      put(".print-note", d.note);
    }

    /* CONTACT PAGE */

    if (page === "contact.html") {
      const d = t.contact;

      put(".contact-heading .section-label", d.label);
      put(".contact-heading h2", d.title);
      put(".contact-heading > p", d.desc);

      $$(".contact-card").forEach((card, i) => {
        const item = d.cards[i];
        if (!item) return;

        put("small", item[0], card);
        put("h3", item[1], card);
        put("p", item[2], card);

        const links = $$("a", card);
        if (links[0]) links[0].textContent = item[3];
        if (links[1] && item[4]) links[1].textContent = item[4];
      });

      const bottom = $(".contact-bottom");
      if (bottom) {
        put("strong", d.bottom, bottom);
        put("span", d.bottomDesc, bottom);
        put(".whatsapp-button", d.whatsapp, bottom);
      }
    }

    /* PRINT ONLINE PAGE */

    if (page === "print-online.html") {
      const d = t.print;

      put(".print-content .section-label", d.label);
      put(".print-content h2", d.title);
      put(".print-content > p:not(.print-note)", d.desc);
      setList(".print-features p", d.steps);

      put(".print-content .btn-light", d.button);
      put(".print-note", d.note);
      put(".file-size", d.file);
      put(".print-ready", d.ready);

      put(".section-heading .section-label", d.how);
      put(".section-heading h2", d.howTitle);
      put(".section-heading > p", d.howDesc);

      $$(".why-grid .why-card").forEach((card, i) => {
        if (!d.cards[i]) return;
        put("h3", d.cards[i][0], card);
        put("p", d.cards[i][1], card);
      });
    }

    if (languageSelect) languageSelect.value = language;
  }


  /* =====================================================
     LIVE LANGUAGE SUPPORT: PRINT ONLINE + TRACK ORDER
     These pages use the same EN / मराठी / हिन्दी switcher.
     All form values, IDs, API requests and pricing logic stay unchanged.
     ===================================================== */

  function translateWorkflowPage(language) {
    const page = location.pathname.split("/").pop() || "index.html";
    const mr = language === "mr";
    if (!mr) return; // English is the source HTML; Hindi remains on its existing fallback.

    const text = (selector, value, root = document) => {
      const el = root.querySelector(selector);
      if (el && value != null) el.textContent = value;
    };
    const html = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value != null) el.innerHTML = value;
    };
    const list = (selector, values) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        if (values[i] != null) el.textContent = values[i];
      });
    };
    const options = (selector, values) => {
      const el = document.querySelector(selector);
      if (el) [...el.options].forEach((option, i) => {
        if (values[i] != null) option.textContent = values[i];
      });
    };

    if (page === "print-online.html") {
      text(".print-section .print-content .section-label", "प्रिंटिंगची अधिक सोयीस्कर पद्धत");
      html(".print-section .print-content h2", "स्मार्ट पद्धतीने प्रिंट करा.<br><span>दुकानातून प्रिंट घ्या.</span>");
      text(".print-section .print-content > p", "तुमची कागदपत्रे ऑनलाइन तयार करा आणि गुरुकृपा झेरॉक्स येथे प्रिंट करून घ्या. फाइल्स निवडा, तपासा आणि सोयीस्करपणे दुकानातून प्रिंट घ्या.");
      list(".print-features p", ["एकाहून अधिक फाइल्स", "फाइल्स निवडणे सोपे", "दुकानातून प्रिंट घ्या"]);
      text(".print-section .btn-light", "कागदपत्रे निवडा ↓");

      const sectionLabels = [...document.querySelectorAll(".section-label")];
      const labels = ["टप्पा ०१ — कागदपत्रांची निवड", "कागदपत्रांचे पूर्वदृश्य", "टप्पा ०२ — प्रिंटिंगचे पर्याय", "तुमची अंदाजे किंमत", "टप्पा ०३ — ऑर्डर तपासा", "ग्राहकाची माहिती", "पेमेंट — PHONEPE / UPI", "प्रक्रिया कशी असेल"];
      sectionLabels.forEach((el, i) => { if (labels[i]) el.textContent = labels[i]; });

      const headings = [
        [".upload-heading h2", "तुमची कागदपत्रे निवडा."],
        [".upload-panel h3", "निवडलेली कागदपत्रे"],
        [".preview-placeholder strong", "पूर्वदृश्य येथे दिसेल"],
        [".print-settings-heading h2", "प्रिंटिंगचे पर्याय निवडा."],
        [".order-review-heading h2", "ऑर्डर तपासून पुढे जा."],
        [".customer-details-card h3", "आम्ही कोणाशी संपर्क साधावा?"],
        [".how-it-works-heading h2", "प्रिंटिंगची प्रक्रिया सोपी." ]
      ];
      headings.forEach(([s,v]) => text(s,v));

      const replacements = [
        ["#dropzone strong","कागदपत्रे निवडा"],
        ["#dropzone span:not(.upload-icon)","येथे क्लिक करा किंवा फाइल्स ड्रॅग करून सोडा"],
        ["#dropzone small","PDF, JPG आणि PNG · प्रत्येक फाइल कमाल १५ MB"],
        ["#clearFiles","सर्व फाइल्स काढून टाका"],
        ["#emptyState strong","अद्याप कोणतीही कागदपत्रे जोडलेली नाहीत"],
        ["#emptyState p","तुम्ही निवडलेल्या फाइल्स येथे दिसतील."],
        [".upload-list-header h3","निवडलेली कागदपत्रे"],
        [".preview-footer > strong","कोणतेही कागदपत्र निवडलेले नाही"],
        [".preview-footer > span","PDF फाइल्ससाठी पूर्वदृश्य उपलब्ध आहे."],
        [".print-settings-heading > p","तुमच्या प्रिंटसाठी योग्य पर्याय निवडा."],
        [".order-review-section .review-block-heading h3","निवडलेली कागदपत्रे"],
        [".customer-details-card h3","आम्ही कोणाशी संपर्क साधावा?"],
        [".phonepe-payment-card h4","अचूक रक्कम भरा"],
        [".order-form-message",""],
        [".preview-indicator","स्थानिक पूर्वदृश्य"],
        [".preview-placeholder strong","पूर्वदृश्य येथे दिसेल"],
        [".preview-placeholder p","पाहण्यासाठी PDF कागदपत्र निवडा."],
        [".preview-help","PDF फाइल्ससाठी पूर्वदृश्य उपलब्ध आहे."],
        [".info-box strong","कृपया नोंद घ्या"],
        [".info-box p","PDF मधील पानांची संख्या आपोआप मोजली जाते. प्रत्येक JPG किंवा PNG फाइल एक पान मानली जाते. अचूक पानसंख्या आणि किंमत मिळण्यासाठी Word फाइल अपलोड करण्यापूर्वी PDF स्वरूपात जतन करा."],
        ["#printModeLabel","प्रिंटचा प्रकार"],
        ["label[for='pagesPerSheet']","एका शीटवर किती पाने"],
        ["label[for='duplexMode']","प्रिंटिंगची बाजू"],
        ["label[for='pageRanges']","निवडक पानांची मर्यादा (ऐच्छिक)"],
        ["#pageRangeHelp","सर्व पाने प्रिंट करायची असल्यास रिकामे ठेवा. पानांची मर्यादा एकत्रित कागदपत्रांवर लागू होईल."],
        ["label[for='orientation']","पानाची दिशा"],
        ["label[for='pageCount']","अपलोड केलेली एकूण पाने"],
        ["#pageCountHelp","निवडलेल्या PDF आणि प्रतिमांमधून पानांची संख्या मोजली जाते."],
        ["label[for='copyCount']","प्रतींची संख्या"],
        [".settings-hint","शीटची संख्या = निवडलेली पाने ÷ (एका शीटवरील पाने × प्रिंटिंगच्या बाजू), आणि पुढील पूर्णांक घेतला जातो. लांब किंवा छोट्या बाजूने उलटल्याने शीटची संख्या बदलत नाही; फक्त उलटण्याची दिशा बदलते."],
        [".estimate-disclaimer","अंदाजे किंमत दुकानाच्या A4 प्रत्यक्ष शीटच्या दरांनुसार आहे. प्रिंटिंगचे पर्याय तुमच्या विनंतीसोबत नोंदवले जातील. अंतिम प्रिंटिंग मांडणी दुकानात केली जाईल."],
        [".review-documents h3","निवडलेली कागदपत्रे"],
        [".review-preferences h3","प्रिंटिंगचे पर्याय"],
        [".customer-details-card .section-label","ग्राहकाची माहिती"],
        ["label[for='customerName']","तुमचे नाव"],
        ["label[for='customerPhone']","मोबाईल क्रमांक"],
        [".customer-help","ऑर्डरची खात्री करण्यासाठी आवश्यक असल्यास आम्ही तुमच्याशी संपर्क साधू."],
        [".collection-box strong","दुकानातून प्रिंट घ्या"],
        [".phonepe-payment-intro","PhonePe किंवा इतर UPI अॅप वापरून गुरुकृपा झेरॉक्सचा QR कोड स्कॅन करा. खाली दाखवलेली अचूक रक्कम भरा."],
        [".phonepe-warning","पेमेंट करण्यापूर्वी UPI अॅपमध्ये प्राप्तकर्त्याचे नाव गुरुकृपा झेरॉक्स आहे याची खात्री करा. इतर कोणालाही पैसे पाठवू नका."],
        ["label[for='utrReference']","UPI व्यवहार संदर्भ क्रमांक / UTR"],
        ["#utrReferenceHelp","यशस्वी पेमेंटच्या तपशीलात हा संदर्भ क्रमांक मिळेल. तुमचा UPI PIN किंवा OTP येथे टाकू नका."],
        [".phonepe-confirm-row span","मी अचूक रक्कम भरली आहे आणि पेमेंट यशस्वी झाल्याची खात्री केली आहे."],
        ["#sendOrderButton","पेमेंट पडताळणीसाठी पाठवा ↗"],
        [".order-submit-note","तुमची कागदपत्रे आणि पेमेंट संदर्भ सुरक्षितपणे पाठवले जातील. दुकानाकडून पेमेंटची पडताळणी होईपर्यंत तुमची प्रिंट ऑर्डर स्वीकारली जाणार नाही."],
        [".how-section > .container > p","कागदपत्रांची प्रिंटिंग सोपी आणि सोयीस्कर करण्यासाठी ही प्रक्रिया आहे."],
        [".footer-links h4","महत्त्वाचे दुवे"]
      ];
      replacements.forEach(([s,v]) => text(s,v));

      options("#printMode", ["काळा-पांढरा","रंगीत"]);
      options("#pagesPerSheet", ["एका शीटवर १ पान","एका शीटवर २ पाने","एका शीटवर ४ पाने","एका शीटवर ६ पाने","एका शीटवर ९ पाने","एका शीटवर १६ पाने"]);
      options("#duplexMode", ["एकाच बाजूने","दोन्ही बाजूंनी — लांब बाजूने उलट","दोन्ही बाजूंनी — छोट्या बाजूने उलट"]);
      options("#orientation", ["आपोआप (कागदपत्रानुसार)","उभे","आडवे"]);
      text(".print-settings-card > h3", "अंदाजे किंमत");
      text("#reviewDocumentList .review-empty", "अद्याप कागदपत्रे निवडलेली नाहीत. पहिल्या टप्प्यात कागदपत्रे जोडा.");
      text(".how-section h3:nth-of-type(1)", "अपलोड करा");
      const pageCountHelp = document.querySelector("#pageCountHelp");
      if (pageCountHelp) pageCountHelp.textContent = "निवडलेल्या PDF आणि प्रतिमांमधून पानांची संख्या मोजली जाते.";

      // Translate fixed labels while leaving calculated numbers and rupee amounts intact.
      const labelMap = {
        "Paper size":"कागदाचा आकार","Selected pages":"निवडलेली पाने","Pages per sheet":"एका शीटवरील पाने",
        "Duplex":"प्रिंटिंगची बाजू","Rate":"दर","Sheets per copy":"प्रति प्रत शीट",
        "Copies":"प्रती","Total sheets":"एकूण शीट","Print mode":"प्रिंटचा प्रकार",
        "Page range":"पानांची मर्यादा","All pages":"सर्व पाने","Orientation":"पानाची दिशा",
        "Selected pages per copy":"प्रति प्रती निवडलेली पाने","Number of copies":"प्रतींची संख्या",
        "Estimated total":"अंदाजे एकूण","Amount to pay":"भरायची रक्कम"
      };
      document.querySelectorAll(".estimate-line span,.review-detail span,.estimate-total span,.phonepe-amount span").forEach(el => {
        if (labelMap[el.textContent.trim()]) el.textContent = labelMap[el.textContent.trim()];
      });
      text("#pageRanges",""); // no-op; preserve any customer-entered value
      const range = document.querySelector("#pageRanges");
      if (range) range.placeholder = "उदा. १-१०, १२, १४-१६";
      const name = document.querySelector("#customerName");
      if (name) name.placeholder = "तुमचे पूर्ण नाव लिहा";
      const phone = document.querySelector("#customerPhone");
      if (phone) phone.placeholder = "१० अंकी मोबाईल क्रमांक";
      const utr = document.querySelector("#utrReference");
      if (utr) utr.placeholder = "UTR / व्यवहार संदर्भ क्रमांक लिहा";

      // Dynamic status text is also translated when the user switches language.
      const count = document.getElementById("fileCount");
      if (count && count.textContent.trim() === "No files selected") count.textContent = "कोणतीही फाइल निवडलेली नाही";
      const reviewCount = document.getElementById("reviewDocumentCount");
      if (reviewCount && reviewCount.textContent.trim() === "0 files") reviewCount.textContent = "० फाइल्स";
    }

    if (page === "track-order.html") {
      const map = [
        [".tracking-heading .section-label","ग्राहक ऑर्डर ट्रॅकिंग"],
        [".tracking-heading h1","तुमची ऑर्डर कुठपर्यंत आली आहे ते जाणून घ्या."],
        [".tracking-heading > p","ऑर्डर क्रमांक किंवा पेमेंट विनंती क्रमांक आणि ऑर्डर देताना वापरलेला मोबाईल क्रमांक टाका. तुमची माहिती सुरक्षितपणे तपासली जाईल."],
        ["label[for='reference']","ऑर्डर क्रमांक / पेमेंट विनंती क्रमांक"],
        [".tracking-help","ऑर्डर मंजूर झाल्यानंतर GKX क्रमांक वापरा. पेमेंटची पडताळणी सुरू असल्यास PAY विनंती क्रमांक वापरा."],
        ["label[for='phone']","नोंदणीकृत मोबाईल क्रमांक"],
        ["#trackingButton","माझी ऑर्डर पाहा"],
        ["#resultTitle","ऑर्डरची माहिती"],
        [".tracking-contact","मदत हवी आहे? येथे फोन करा किंवा गुरुकृपा झेरॉक्स, प्लॉट क्र. ४८, बालाजी नगर, न्यू भोकरदन, भोकरदन येथे भेट द्या."]
      ];
      map.forEach(([s,v]) => text(s,v));
      const ref = document.querySelector("#reference");
      if (ref) ref.placeholder = "उदा. GKX-20261110-000002 किंवा PAY-...";
      const phone = document.querySelector("#phone");
      if (phone) phone.placeholder = "१० अंकी मोबाईल क्रमांक";
      const message = document.querySelector("#trackingMessage");
      if (message && message.textContent === "Checking…") message.textContent = "तपासत आहे…";
      const submit = document.querySelector("#trackingButton");
      if (submit && !submit.disabled) submit.textContent = "माझी ऑर्डर पाहा";
      const status = document.querySelector("#resultStatus");
      if (status) {
        const statuses = {
          "Order received":"ऑर्डर प्राप्त झाली","Printing in progress":"प्रिंटिंग सुरू आहे",
          "Ready for collection":"प्रिंट तयार आहे — घेऊन जा","Completed":"ऑर्डर पूर्ण झाली",
          "Order update":"ऑर्डरची माहिती","Payment request update":"पेमेंट विनंतीची माहिती",
          "Your print order":"तुमची प्रिंट ऑर्डर"
        };
        if (statuses[status.textContent.trim()]) status.textContent = statuses[status.textContent.trim()];
      }
      document.querySelectorAll("#trackingTimeline [data-stage]").forEach((el, i) => {
        const labels = ["ऑर्डर प्राप्त झाली","प्रिंटिंग सुरू आहे","प्रिंट तयार आहे","ऑर्डर पूर्ण झाली"];
        if (labels[i]) el.textContent = labels[i];
      });
    }
  }


  /* =====================================================
     INITIALISE LANGUAGE
     ===================================================== */

  const isHomePage =
    document.querySelector(".hero") !== null;

  function applyLanguage(language) {
    if (isHomePage) {
      translateHome(language);
    } else {
      translateInner(language);
    }

    // Workflow-page translations must run after the shared inner-page
    // translation so the shared navigation/footer cannot overwrite them.
    const page = location.pathname.split("/").pop() || "index.html";
    if (["print-online.html", "track-order.html"].includes(page)) {
      if (language === "mr") {
        translateWorkflowPage(language);
      }
    }
  }

  const initialLanguage = getSavedLanguage();
  applyLanguage(initialLanguage);

  if (languageSelect) {
    languageSelect.addEventListener("change", event => {
      const language = event.target.value;
      const page = location.pathname.split("/").pop() || "index.html";
      if (["print-online.html", "track-order.html"].includes(page) && language !== "mr") {
        // These workflow pages use English as their source markup. Reloading
        // restores every original label, placeholder and option when leaving Marathi.
        saveLanguage(language);
        location.reload();
        return;
      }
      applyLanguage(language);
    });
  }

  /* =====================================================
     MOBILE NAVIGATION
     ===================================================== */

  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");

  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
      if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  /* =====================================================
     CURRENT YEAR
     ===================================================== */

  const currentYear = $("#currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =====================================================
     PREVENT PAST APPOINTMENT DATES
     ===================================================== */

  const preferredDate = $("#preferredDate");

  if (preferredDate) {
    const today = new Date();
    const localDate = new Date(
      today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    preferredDate.min = localDate;
  }

  /* =====================================================
     WHATSAPP ENQUIRY FORM
     ===================================================== */

  const enquiryForm = $("#enquiryForm");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();

      if (!enquiryForm.reportValidity()) return;

      const name = $("#customerName")?.value.trim() || "";
      const phone = $("#customerPhone")?.value.trim() || "";
      const serviceSelect = $("#serviceType");
      const service = serviceSelect?.selectedOptions[0]?.text || "";
      const date = $("#preferredDate")?.value || "";
      const message = $("#enquiryMessage")?.value.trim() || "";

      const language = document.documentElement.lang;

      const messageHeading = {
        en: "New Service Enquiry",
        mr: "नवीन सेवा चौकशी",
        hi: "नई सेवा पूछताछ"
      };

      const whatsappMessage = [
        "Hello Gurukrupa Xerox & Soham Multiservices!",
        "",
        "*" + (messageHeading[language] || messageHeading.en) + "*",
        "",
        "*Name:* " + name,
        "*Mobile:* " + phone,
        "*Service:* " + service,
        "*Preferred Visit Date:* " + (date || "Not specified"),
        "*Requirements:* " + message,
        "",
        "Please contact me regarding this enquiry."
      ].join("\n");

      const whatsappURL =
        "https://wa.me/917745062299?text=" +
        encodeURIComponent(whatsappMessage);

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }

});

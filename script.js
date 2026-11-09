```javascript
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? translations[document.documentElement.lang].closeMenu
          : translations[document.documentElement.lang].mobileMenu
      );
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }

  // Current year
  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  // Set minimum date for visit date field
  const visitDate = document.getElementById("visitDate");
  if (visitDate) {
    const today = new Date();
    const localDate = new Date(
      today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    visitDate.min = localDate;
  }

  // WhatsApp enquiry form
  const enquiryForm = document.getElementById("enquiryForm");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("customerName")?.value.trim();
      const mobile = document.getElementById("customerMobile")?.value.trim();
      const service = document.getElementById("serviceType")?.selectedOptions[0]?.text;
      const date = document.getElementById("visitDate")?.value;
      const message = document.getElementById("enquiryMessage")?.value.trim();

      if (!name || !mobile || !service || !message) {
        alert("Please complete all required fields.");
        return;
      }

      const text = [
        "Hello Gurukrupa Xerox And Soham Multiservices!",
        "",
        `Name: ${name}`,
        `Mobile: ${mobile}`,
        `Service: ${service}`,
        date ? `Preferred visit date: ${date}` : "",
        `Requirements: ${message}`
      ].filter(Boolean).join("\n");

      const whatsappURL =
        `https://wa.me/917745062299?text=${encodeURIComponent(text)}`;

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }

});
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? translations[document.documentElement.lang].closeMenu
          : translations[document.documentElement.lang].mobileMenu
      );
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
      if (!navLinks.contains(event.target) &&
          !menuToggle.contains(event.target)) {
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

  // CURRENT YEAR
  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  // PREVENT PAST APPOINTMENT DATES
  const preferredDate = document.getElementById("preferredDate");

  if (preferredDate) {
    const today = new Date();
    const localDate = new Date(
      today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    preferredDate.min = localDate;
  }

  // WHATSAPP ENQUIRY FORM
  const enquiryForm = document.getElementById("enquiryForm");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();

      if (!enquiryForm.reportValidity()) return;

      const name = document.getElementById("customerName").value.trim();
      const phone = document.getElementById("customerPhone").value.trim();
      const service = document.getElementById("serviceType").selectedOptions[0].text;
      const date = document.getElementById("preferredDate").value;
      const message = document.getElementById("enquiryMessage").value.trim();

      const language = document.documentElement.lang;
      const messageHeading = {
        en: "New Service Enquiry",
        mr: "नवीन सेवा चौकशी",
        hi: "नई सेवा पूछताछ"
      };

      const whatsappMessage = [
        "Hello Gurukrupa Xerox And Soham Multiservices!",
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

/* =========================================================
   GURUKRUPA — INNER PAGE MULTILINGUAL EXTENSION
   Adds Marathi and Hindi translations to:
   Services | About | Gallery | Contact | Print Online
   Keep the existing homepage translation code unchanged.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";

  // The existing homepage translation system handles index.html.
  if (page === "index.html") return;

  const pageTranslations = {
    en: {
      nav: ["Home", "Services", "About", "Gallery", "Contact"],
      print: "Print Online",
      footer: ["QUICK LINKS", "OUR SERVICES", "GET IN TOUCH"],
      footerLinks: [
        "Home", "Services", "About Us", "Gallery", "Contact",
        "Print Online", "Xerox & Printing", "Online Form Filling",
        "Income Tax Work", "Government Services", "Data Entry"
      ],
      footerDescription:
        "Every Service. One Place. Your trusted local multiservice centre.",
      footerTagline: "Every Service. One Place.",

      about: {
        label: "ABOUT OUR BUSINESS",
        title: "Making everyday services simpler.",
        paragraphs: [
          "Gurukrupa Xerox And Soham Multiservices is your trusted local destination for essential digital, documentation and business support services.",
          "Our aim is to bring multiple useful services together in one convenient place, helping students, individuals, farmers and businesses with their everyday requirements."
        ],
        points: [
          "Convenient services in one place",
          "Support for students and individuals",
          "Digital and documentation assistance",
          "Friendly local service"
        ],
        link: "Explore Our Services ↗",
        whyLabel: "WHY CHOOSE US",
        whyTitle: "A reliable place for everyday needs.",
        whyDescription:
          "We make essential services more accessible through convenient local support.",
        cards: [
          ["Convenience", "Multiple essential services in one place."],
          ["Accessibility", "Local assistance for everyday digital needs."],
          ["Versatility", "Solutions for students, individuals and businesses."],
          ["Support", "Personal assistance when you need it."]
        ]
      },

      gallery: {
        label: "OUR GALLERY",
        title: "A closer look at our services.",
        description:
          "Explore our service centre and the range of solutions we aim to provide.",
        note:
          "Gallery illustrations are placeholders. Actual photographs will be added as they become available."
      },

      contact: {
        label: "GET IN TOUCH",
        title: "We're here to help.",
        description:
          "Have a question or need assistance? Reach out to us through any of the options below.",
        cards: [
          ["VISIT OUR CENTRE", "Our Address",
            "Plot No. 48, Balaji Nagar, New Bhokardan, Bhokardan, Jalna, Maharashtra – 431114.",
            "Get Directions ↗"],
          ["CALL OR WHATSAPP", "Phone",
            "Speak with us about Xerox, printing, online applications and other services.",
            "Call Now ↗", "WhatsApp ↗"],
          ["WRITE TO US", "Email",
            "Send your questions and service enquiries to our email address.",
            "Send Email ↗"]
        ],
        bottomTitle: "Need a service?",
        bottomDescription:
          "Explore our services or contact us directly on WhatsApp.",
        whatsapp: "Chat on WhatsApp ↗"
      },

      services: {
        label: "WHAT WE OFFER",
        title: "Services for your everyday needs.",
        description:
          "Explore our range of documentation, digital, government and business support services.",
        cards: [
          ["Xerox & Printing", "Convenient document photocopying and printing services."],
          ["Online Form Filling", "Assistance with online applications and digital forms."],
          ["Income Tax Work", "Support with income tax-related documentation and work."],
          ["Government Services", "Assistance with various government-related online services."],
          ["Data Entry Services", "Reliable data entry and documentation support."],
          ["Business Support", "Practical digital and administrative support for businesses."]
        ],
        link: "Enquire Now ↗"
      },

      printOnline: {
        label: "PRINT ONLINE",
        title: "Your documents. Ready when you are.",
        description:
          "Discover our planned online printing service. Prepare your documents and collect your prints conveniently from our shop.",
        features: [
          "Prepare your documents",
          "Review your print requirements",
          "Collect your prints from our shop"
        ],
        button: "Contact Us ↗",
        note:
          "Online ordering is not active yet. Contact us directly for current printing services.",
        whyLabel: "SIMPLE PRINTING",
        whyTitle: "Printing made convenient.",
        cards: [
          ["Convenient", "Get your printing requirements handled locally."],
          ["Flexible", "Discuss your document and printing requirements with us."],
          ["Local Pickup", "Collect your prints from our shop."],
          ["Personal Support", "Get assistance with your printing requirements."]
        ]
      }
    },
            mr: {
      nav: ["मुख्यपृष्ठ", "सेवा", "आमच्याबद्दल", "गॅलरी", "संपर्क"],
      print: "ऑनलाइन प्रिंटिंग",
      footer: ["महत्त्वाचे दुवे", "आमच्या सेवा", "संपर्क माहिती"],
      footerLinks: [
        "मुख्यपृष्ठ", "सेवा", "आमच्याबद्दल", "गॅलरी", "संपर्क",
        "ऑनलाइन प्रिंटिंग", "झेरॉक्स आणि प्रिंटिंग", "ऑनलाइन फॉर्म भरणे",
        "आयकर काम", "सरकारी सेवा", "डेटा एन्ट्री"
      ],
      footerDescription:
        "प्रत्येक सेवा. एकाच ठिकाणी. तुमचे विश्वासार्ह स्थानिक सेवा केंद्र.",
      footerTagline: "प्रत्येक सेवा. एकाच ठिकाणी.",

      about: {
        label: "आमच्या व्यवसायाबद्दल",
        title: "दैनंदिन सेवा अधिक सोप्या बनवणे.",
        paragraphs: [
          "गुरुकृपा झेरॉक्स अँड सोहम मल्टीसर्व्हिसेस हे डिजिटल, कागदपत्रे आणि व्यवसायविषयक सहाय्यासाठी तुमचे विश्वासार्ह स्थानिक केंद्र आहे.",
          "विद्यार्थी, नागरिक, शेतकरी आणि व्यवसाय यांच्या दैनंदिन गरजांसाठी अनेक उपयुक्त सेवा एकाच सोयीस्कर ठिकाणी उपलब्ध करून देणे हे आमचे उद्दिष्ट आहे."
        ],
        points: [
          "अनेक सेवा एकाच ठिकाणी",
          "विद्यार्थी आणि नागरिकांसाठी सहाय्य",
          "डिजिटल आणि कागदपत्रविषयक मदत",
          "आपुलकीची स्थानिक सेवा"
        ],
        link: "आमच्या सेवा पहा ↗",
        whyLabel: "आम्हाला का निवडावे?",
        whyTitle: "दैनंदिन गरजांसाठी विश्वासार्ह ठिकाण.",
        whyDescription:
          "स्थानिक सहाय्याद्वारे आवश्यक सेवा अधिक सोयीस्कर बनवणे हा आमचा प्रयत्न आहे.",
        cards: [
          ["सोय", "अनेक आवश्यक सेवा एकाच ठिकाणी."],
          ["उपलब्धता", "दैनंदिन डिजिटल कामांसाठी स्थानिक सहाय्य."],
          ["विविधता", "विद्यार्थी, नागरिक आणि व्यवसायांसाठी उपाय."],
          ["सहाय्य", "गरजेनुसार वैयक्तिक मदत."]
        ]
      },

      gallery: {
        label: "आमची गॅलरी",
        title: "आमच्या सेवांची एक झलक.",
        description:
          "आमचे सेवा केंद्र आणि आम्ही उपलब्ध करून देत असलेल्या विविध सुविधांची माहिती घ्या.",
        note:
          "गॅलरीमधील चित्रे सध्या नमुना स्वरूपात आहेत. प्रत्यक्ष छायाचित्रे उपलब्ध झाल्यानंतर जोडली जातील."
      },

      contact: {
        label: "संपर्क साधा",
        title: "आम्ही मदतीसाठी येथे आहोत.",
        description:
          "तुम्हाला काही प्रश्न आहेत किंवा मदत हवी आहे? खालील पर्यायांद्वारे आमच्याशी संपर्क साधा.",
        cards: [
          ["आमच्या केंद्राला भेट द्या", "आमचा पत्ता",
            "प्लॉट नं. ४८, बालाजी नगर, न्यू भोकरदन, भोकरदन, जालना, महाराष्ट्र – ४३१११४.",
            "मार्ग पहा ↗"],
          ["कॉल किंवा WhatsApp", "फोन",
            "झेरॉक्स, प्रिंटिंग, ऑनलाइन अर्ज आणि इतर सेवांसाठी आमच्याशी बोला.",
            "कॉल करा ↗", "WhatsApp ↗"],
          ["आम्हाला ईमेल करा", "ईमेल",
            "तुमचे प्रश्न आणि सेवा चौकशी आमच्या ईमेलवर पाठवा.",
            "ईमेल पाठवा ↗"]
        ],
        bottomTitle: "सेवा हवी आहे?",
        bottomDescription:
          "आमच्या सेवा पहा किंवा थेट WhatsApp वर संपर्क साधा.",
        whatsapp: "WhatsApp वर बोला ↗"
      },

      services: {
        label: "आमच्या सेवा",
        title: "तुमच्या दैनंदिन गरजांसाठी सेवा.",
        description:
          "कागदपत्रे, डिजिटल कामे, सरकारी सेवा आणि व्यवसायविषयक सहाय्याच्या विविध सुविधा पहा.",
        cards: [
          ["झेरॉक्स आणि प्रिंटिंग", "कागदपत्रांच्या झेरॉक्स आणि प्रिंटिंगची सोयीस्कर सुविधा."],
          ["ऑनलाइन फॉर्म भरणे", "ऑनलाइन अर्ज आणि डिजिटल फॉर्म भरण्यासाठी सहाय्य."],
          ["आयकर काम", "आयकरविषयक कागदपत्रे आणि कामांसाठी सहाय्य."],
          ["सरकारी सेवा", "विविध सरकारी ऑनलाइन सेवांसाठी मदत."],
          ["डेटा एन्ट्री सेवा", "विश्वासार्ह डेटा एन्ट्री आणि कागदपत्रविषयक सहाय्य."],
          ["व्यवसाय सहाय्य", "व्यवसायांसाठी डिजिटल आणि प्रशासकीय सहाय्य."]
        ],
        link: "चौकशी करा ↗"
      },

      printOnline: {
        label: "ऑनलाइन प्रिंटिंग",
        title: "तुमची कागदपत्रे. तुमच्या सोयीच्या वेळी.",
        description:
          "आमच्या नियोजित ऑनलाइन प्रिंटिंग सेवेची माहिती घ्या. कागदपत्रे तयार करा आणि दुकानातून प्रिंट सहज घेऊन जा.",
        features: [
          "तुमची कागदपत्रे तयार करा",
          "प्रिंटिंगच्या आवश्यकतांची तपासणी करा",
          "दुकानातून प्रिंट घेऊन जा"
        ],
        button: "संपर्क साधा ↗",
        note:
          "ऑनलाइन ऑर्डरिंग सुविधा अद्याप सुरू झालेली नाही. सध्याच्या प्रिंटिंग सेवांसाठी थेट संपर्क साधा.",
        whyLabel: "सोयीस्कर प्रिंटिंग",
        whyTitle: "प्रिंटिंग आता अधिक सोयीस्कर.",
        cards: [
          ["सोयीस्कर", "तुमच्या प्रिंटिंगची कामे स्थानिक पातळीवर करून घ्या."],
          ["लवचिक", "तुमच्या कागदपत्रे आणि प्रिंटिंगच्या गरजांबद्दल आमच्याशी बोला."],
          ["दुकानातून प्रिंट", "तुमची प्रिंट आमच्या दुकानातून घेऊन जा."],
          ["वैयक्तिक सहाय्य", "प्रिंटिंगच्या गरजांसाठी मदत मिळवा."]
        ]
      }
    },

    hi: {
      nav: ["होम", "सेवाएँ", "हमारे बारे में", "गैलरी", "संपर्क"],
      print: "ऑनलाइन प्रिंटिंग",
      footer: ["त्वरित लिंक", "हमारी सेवाएँ", "संपर्क करें"],
      footerLinks: [
        "होम", "सेवाएँ", "हमारे बारे में", "गैलरी", "संपर्क",
        "ऑनलाइन प्रिंटिंग", "ज़ेरॉक्स और प्रिंटिंग", "ऑनलाइन फॉर्म भरना",
        "आयकर कार्य", "सरकारी सेवाएँ", "डेटा एंट्री"
      ],
      footerDescription:
        "हर सेवा। एक ही जगह। आपका विश्वसनीय स्थानीय सेवा केंद्र।",
      footerTagline: "हर सेवा। एक ही जगह।",

      about: {
        label: "हमारे व्यवसाय के बारे में",
        title: "रोज़मर्रा की सेवाओं को आसान बनाना।",
        paragraphs: [
          "गुरुकृपा ज़ेरॉक्स एंड सोहम मल्टीसर्विसेज डिजिटल, दस्तावेज़ और व्यावसायिक सहायता के लिए आपका विश्वसनीय स्थानीय केंद्र है।",
          "विद्यार्थियों, व्यक्तियों, किसानों और व्यवसायों की रोज़मर्रा की ज़रूरतों के लिए कई उपयोगी सेवाएँ एक ही सुविधाजनक स्थान पर उपलब्ध कराना हमारा उद्देश्य है।"
        ],
        points: [
          "कई सेवाएँ एक ही जगह",
          "विद्यार्थियों और व्यक्तियों के लिए सहायता",
          "डिजिटल और दस्तावेज़ संबंधी मदद",
          "मित्रवत स्थानीय सेवा"
        ],
        link: "हमारी सेवाएँ देखें ↗",
        whyLabel: "हमें क्यों चुनें?",
        whyTitle: "रोज़मर्रा की ज़रूरतों के लिए भरोसेमंद जगह।",
        whyDescription:
          "स्थानीय सहायता के माध्यम से आवश्यक सेवाओं को अधिक सुविधाजनक बनाना हमारा प्रयास है।",
        cards: [
          ["सुविधा", "कई आवश्यक सेवाएँ एक ही जगह।"],
          ["उपलब्धता", "रोज़मर्रा के डिजिटल कार्यों के लिए स्थानीय सहायता।"],
          ["विविधता", "विद्यार्थियों, व्यक्तियों और व्यवसायों के लिए समाधान।"],
          ["सहायता", "ज़रूरत पड़ने पर व्यक्तिगत मदद।"]
        ]
      },

      gallery: {
        label: "हमारी गैलरी",
        title: "हमारी सेवाओं की एक झलक।",
        description:
          "हमारे सेवा केंद्र और उपलब्ध सुविधाओं की जानकारी प्राप्त करें।",
        note:
          "गैलरी में दिए गए चित्र अभी उदाहरण के रूप में हैं। वास्तविक तस्वीरें उपलब्ध होने पर जोड़ी जाएँगी।"
      },

      contact: {
        label: "संपर्क करें",
        title: "हम आपकी मदद के लिए यहाँ हैं।",
        description:
          "कोई सवाल है या सहायता चाहिए? नीचे दिए गए किसी भी विकल्प से हमसे संपर्क करें।",
        cards: [
          ["हमारे केंद्र पर आएँ", "हमारा पता",
            "प्लॉट नं. 48, बालाजी नगर, न्यू भोकरदन, भोकरदन, जालना, महाराष्ट्र – 431114.",
            "रास्ता देखें ↗"],
          ["कॉल या WhatsApp", "फोन",
            "ज़ेरॉक्स, प्रिंटिंग, ऑनलाइन आवेदन और अन्य सेवाओं के बारे में हमसे बात करें।",
            "कॉल करें ↗", "WhatsApp ↗"],
          ["हमें ईमेल करें", "ईमेल",
            "अपने प्रश्न और सेवा संबंधी पूछताछ हमारे ईमेल पते पर भेजें।",
            "ईमेल भेजें ↗"]
        ],
        bottomTitle: "कोई सेवा चाहिए?",
        bottomDescription:
          "हमारी सेवाएँ देखें या सीधे WhatsApp पर संपर्क करें।",
        whatsapp: "WhatsApp पर चैट करें ↗"
      },

      services: {
        label: "हमारी सेवाएँ",
        title: "आपकी रोज़मर्रा की ज़रूरतों के लिए सेवाएँ।",
        description:
          "दस्तावेज़, डिजिटल कार्य, सरकारी सेवाओं और व्यावसायिक सहायता की सुविधाएँ देखें।",
        cards: [
          ["ज़ेरॉक्स और प्रिंटिंग", "दस्तावेज़ों की फोटोकॉपी और प्रिंटिंग की सुविधाजनक सेवा।"],
          ["ऑनलाइन फॉर्म भरना", "ऑनलाइन आवेदन और डिजिटल फॉर्म भरने में सहायता।"],
          ["आयकर कार्य", "आयकर संबंधी दस्तावेज़ों और कार्यों में सहायता।"],
          ["सरकारी सेवाएँ", "विभिन्न सरकारी ऑनलाइन सेवाओं के लिए सहायता।"],
          ["डेटा एंट्री सेवाएँ", "विश्वसनीय डेटा एंट्री और दस्तावेज़ संबंधी सहायता।"],
          ["व्यावसायिक सहायता", "व्यवसायों के लिए डिजिटल और प्रशासनिक सहायता।"]
        ],
        link: "पूछताछ करें ↗"
      },

      printOnline: {
        label: "ऑनलाइन प्रिंटिंग",
        title: "आपके दस्तावेज़। आपकी सुविधा के अनुसार।",
        description:
          "हमारी प्रस्तावित ऑनलाइन प्रिंटिंग सेवा के बारे में जानें। अपने दस्तावेज़ तैयार करें और दुकान से आसानी से प्रिंट प्राप्त करें।",
        features: [
          "अपने दस्तावेज़ तैयार करें",
          "प्रिंटिंग की ज़रूरतों की जाँच करें",
          "दुकान से अपने प्रिंट प्राप्त करें"
        ],
        button: "संपर्क करें ↗",
        note:
          "ऑनलाइन ऑर्डरिंग अभी शुरू नहीं हुई है। वर्तमान प्रिंटिंग सेवाओं के लिए सीधे संपर्क करें।",
        whyLabel: "आसान प्रिंटिंग",
        whyTitle: "प्रिंटिंग अब और सुविधाजनक।",
        cards: [
          ["सुविधाजनक", "अपनी प्रिंटिंग की ज़रूरतें स्थानीय स्तर पर पूरी करवाएँ।"],
          ["लचीली सेवा", "अपने दस्तावेज़ और प्रिंटिंग की ज़रूरतों पर हमसे बात करें।"],
          ["दुकान से प्राप्त करें", "अपने प्रिंट हमारी दुकान से प्राप्त करें।"],
          ["व्यक्तिगत सहायता", "प्रिंटिंग की ज़रूरतों के लिए सहायता प्राप्त करें।"]
        ]
      }
    }
  };
        // Add a selector automatically on pages where it is missing.
  let languageSelect = $("#languageSelect");

  if (!languageSelect) {
    const actions = $(".nav-actions");

    if (actions) {
      languageSelect = document.createElement("select");
      languageSelect.id = "languageSelect";
      languageSelect.className = "language-select";
      languageSelect.setAttribute("aria-label", "Choose language");
      languageSelect.innerHTML = `
        <option value="en">EN</option>
        <option value="mr">मराठी</option>
        <option value="hi">हिन्दी</option>
      `;

      languageSelect.style.cssText =
        "height:40px;min-width:76px;padding:0 9px;" +
        "border:1px solid rgba(255,255,255,.25);" +
        "border-radius:8px;background:#0b2340;color:#fff;" +
        "font:600 13px 'DM Sans',sans-serif;cursor:pointer;";

      const printLink = $(".nav-print", actions);
      if (printLink) actions.insertBefore(languageSelect, printLink);
      else actions.prepend(languageSelect);
    }
  }

  function translateCommon(t) {
    setArray("#navLinks a", t.nav);

    const printLink = $(".nav-print");
    if (printLink) {
      printLink.innerHTML = `${t.print} <span>↗</span>`;
    }

    setArray(".footer-links > strong", t.footer);
    put(".footer-brand > p", t.footerDescription);

    const footerLinkGroups = $$(".footer-links");
    const footerLinkValues = [
      t.footerLinks.slice(0, 6),
      t.footerLinks.slice(6, 11)
    ];

    footerLinkGroups.forEach((group, groupIndex) => {
      const links = $$("a", group);
      links.forEach((link, index) => {
        const value = footerLinkValues[groupIndex]?.[index];
        if (value !== undefined) link.textContent = value;
      });
    });

    const bottom = $(".footer-bottom");
    if (bottom) {
      const spans = $$(":scope > span", bottom);
      if (spans[1]) spans[1].textContent = t.footerTagline;
    }

    if (languageSelect) languageSelect.value =
      document.documentElement.lang || "en";

    const currentYear = $("#currentYear");
    if (currentYear) currentYear.textContent = new Date().getFullYear();
  }

  function translateAbout(t) {
    const d = t.about;
    if (!d) return;

    put(".about-content .section-label", d.label);
    put(".about-content h2", d.title);

    setArray(".about-content > p", d.paragraphs);

    const points = $$(".about-points > *");
    points.forEach((point, index) => {
      const text = d.points[index];
      if (text === undefined) return;
      const target = $("span, p, strong", point);
      if (target) target.textContent = text;
      else point.textContent = text;
    });

    put(".about-content .text-link", d.link);

    put(".why-section .section-label", d.whyLabel);
    put(".why-section .section-heading h2", d.whyTitle);
    put(".why-section .section-heading > p", d.whyDescription);

    $$(".why-section .why-card").forEach((card, index) => {
      const item = d.cards[index];
      if (!item) return;
      put("h3", item[0], card);
      put("p", item[1], card);
    });
  }

  function translateGallery(t) {
    const d = t.gallery;
    if (!d) return;

    put(".section-heading .section-label", d.label);
    put(".section-heading h2", d.title);
    put(".section-heading > p", d.description);

    const note = $(".gallery-grid + p");
    if (note) note.textContent = d.note;

    const galleryItems = $$(".gallery-item");
    const galleryNames = {
      en: [
        ["Xerox & Printing", "Document services"],
        ["Online Services", "Digital assistance"],
        ["Government Work", "Application support"],
        ["Business Support", "Professional assistance"],
        ["Documentation", "Document preparation"],
        ["Customer Service", "Local assistance"]
      ],
      mr: [
        ["झेरॉक्स आणि प्रिंटिंग", "कागदपत्र सेवा"],
        ["ऑनलाइन सेवा", "डिजिटल सहाय्य"],
        ["सरकारी कामे", "अर्जासाठी सहाय्य"],
        ["व्यवसाय सहाय्य", "व्यावसायिक मदत"],
        ["कागदपत्रे", "कागदपत्रांची तयारी"],
        ["ग्राहक सेवा", "स्थानिक सहाय्य"]
      ],
      hi: [
        ["ज़ेरॉक्स और प्रिंटिंग", "दस्तावेज़ सेवाएँ"],
        ["ऑनलाइन सेवाएँ", "डिजिटल सहायता"],
        ["सरकारी कार्य", "आवेदन सहायता"],
        ["व्यावसायिक सहायता", "व्यावसायिक मदद"],
        ["दस्तावेज़", "दस्तावेज़ तैयार करना"],
        ["ग्राहक सेवा", "स्थानीय सहायता"]
      ]
    };

    galleryItems.forEach((item, index) => {
      const values = galleryNames[document.documentElement.lang]?.[index];
      if (!values) return;
      put("strong", values[0], item);
      put("small", values[1], item);
    });
  }

  function translateContact(t) {
    const d = t.contact;
    if (!d) return;

    put(".contact-heading .section-label", d.label);
    put(".contact-heading h2", d.title);
    put(".contact-heading > p", d.description);

    $$(".contact-card").forEach((card, index) => {
      const item = d.cards[index];
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
      put("strong", d.bottomTitle, bottom);
      put("span", d.bottomDescription, bottom);
      put(".whatsapp-button", d.whatsapp, bottom);
    }
  }

  function translateServices(t) {
    const d = t.services;
    if (!d) return;

    put(".services-section .section-heading .section-label", d.label);
    put(".services-section .section-heading h2", d.title);
    put(".services-section .section-heading > p", d.description);

    $$(".service-card").forEach((card, index) => {
      const item = d.cards[index];
      if (!item) return;
      put("h3", item[0], card);
      put("p", item[1], card);
      put("a", d.link, card);
    });
  }

  function translatePrintOnline(t) {
    const d = t.printOnline;
    if (!d) return;

    put(".print-content .section-label", d.label);
    put(".print-content h2", d.title);
    put(".print-content > p:not(.print-note)", d.description);

    setArray(".print-features p", d.features);

    put(".print-content .btn-light", d.button);
    put(".print-note", d.note);

    const heading = $(".section-heading");
    if (heading) {
      put(".section-label", d.whyLabel, heading);
      put("h2", d.whyTitle, heading);
    }

    $$(".why-card").forEach((card, index) => {
      const item = d.cards[index];
      if (!item) return;
      put("h3", item[0], card);
      put("p", item[1], card);
    });
  }

  function applyLanguage(language) {
    const lang = pageTranslations[language] ? language : "en";
    const t = pageTranslations[lang];

    document.documentElement.lang = lang;

    translateCommon(t);
    translateAbout(t);
    translateGallery(t);
    translateContact(t);
    translateServices(t);
    translatePrintOnline(t);

    if (languageSelect) languageSelect.value = lang;

    try {
      localStorage.setItem("gurukrupa-language", lang);
    } catch (error) {
      // Translation remains usable if storage is unavailable.
    }

    const menuToggle = $("#menuToggle");
    if (menuToggle) {
      const labels = {
        en: "Open navigation menu",
        mr: "मेनू उघडा",
        hi: "नेविगेशन मेनू खोलें"
      };
      menuToggle.setAttribute("aria-label", labels[lang]);
    }
  }

  let savedLanguage = "en";

  try {
    savedLanguage = localStorage.getItem("gurukrupa-language") || "en";
  } catch (error) {
    savedLanguage = "en";
  }

  applyLanguage(savedLanguage);

  if (languageSelect) {
    languageSelect.addEventListener("change", event => {
      applyLanguage(event.target.value);
    });
  }
});

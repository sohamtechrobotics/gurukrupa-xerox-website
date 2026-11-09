
/* =====================================================
   GURUKRUPA XEROX - MULTILINGUAL WEBSITE
   English | Marathi | Hindi
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const translations = {
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

  const languageSelect = document.getElementById("languageSelect");

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element && value !== undefined) element.innerHTML = value;
  }

  function setPlainText(selector, value) {
    const element = document.querySelector(selector);
    if (element && value !== undefined) element.textContent = value;
  }

  function setLanguage(language) {
    const t = translations[language] || translations.en;
    document.documentElement.lang = language;

    // Navigation
    document.querySelectorAll("#navLinks a").forEach((link, index) => {
      if (t.nav[index]) link.textContent = t.nav[index];
    });

    // Hero
    setPlainText(".eyebrow", t.heroEyebrow);
    setText(".hero h1", t.heroTitle);
    setPlainText(".hero-description", t.heroDescription);
    setText(".hero-buttons .btn-primary", t.explore);
    setPlainText(".hero-buttons .btn-secondary", t.contact);

    document.querySelectorAll(".hero-trust span").forEach((el, i) => {
      if (t.trust[i]) el.textContent = t.trust[i];
    });

    setPlainText(".card-back span:last-child", t.documentServices);
    setPlainText(".document-tag", t.onePlace);
    setPlainText(".floating-badge", t.simple);

    // Quick services
    document.querySelectorAll(".quick-info div span").forEach((el, i) => {
      if (t.quick[i]) el.textContent = t.quick[i];
    });

    // Print section
    setPlainText(".print-content .section-label", t.printLabel);
    setText(".print-content h2", t.printTitle);
    setPlainText(".print-content > p:not(.print-note)", t.printDescription);

    document.querySelectorAll(".print-features p").forEach((el, i) => {
      if (t.printSteps[i]) el.textContent = t.printSteps[i];
    });

    setText(".print-content .btn-light", t.printButton);
    setPlainText(".print-note", t.printNote);

    // Why choose us
    setPlainText(".why-section .section-label", t.whyLabel);
    setText(".why-section .section-heading h2", t.whyTitle);
    setPlainText(".why-section .section-heading > p", t.whyDescription);

    document.querySelectorAll(".why-card").forEach((card, i) => {
      if (t.whyCards[i]) {
        setPlainText("h3", t.whyCards[i][0]);
        const heading = card.querySelector("h3");
        const paragraph = card.querySelector("p");
        if (heading) heading.textContent = t.whyCards[i][0];
        if (paragraph) paragraph.textContent = t.whyCards[i][1];
      }
    });

    // Enquiry form
    setPlainText(".enquiry-heading .section-label", t.enquiryLabel);
    setText(".enquiry-heading h2", t.enquiryTitle);
    setPlainText(".enquiry-heading p", t.enquiryDescription);

    const labels = document.querySelectorAll(".enquiry-form label");
    const labelTexts = [t.name, t.mobile, t.selectService, t.visitDate, t.requirements];
    labels.forEach((label, i) => {
      if (labelTexts[i]) label.textContent = labelTexts[i];
    });

    const serviceSelect = document.getElementById("serviceType");
    if (serviceSelect) {
      serviceSelect.options[0].textContent = t.chooseService;
      t.services.forEach((service, i) => {
        if (serviceSelect.options[i + 1]) {
          serviceSelect.options[i + 1].textContent = service;
        }
      });
    }

    const messageField = document.getElementById("enquiryMessage");
    if (messageField) messageField.placeholder = t.messagePlaceholder;

    setText(".enquiry-submit", t.submit);
    setPlainText(".form-disclaimer", t.disclaimer);

    // Map
    setPlainText(".map-heading .section-label", t.findUs);
    setText(".map-heading h2", t.mapTitle);
    setPlainText(".map-heading p", t.mapDescription);
    setText(".map-directions", t.directions);

    // Footer
    const footerHeadings = document.querySelectorAll(
      ".footer-links > strong, .footer-contact > strong"
    );
    const footerHeadingTexts = [t.quickLinks, t.ourServices, t.getInTouch];

    footerHeadings.forEach((el, i) => {
      if (footerHeadingTexts[i]) el.textContent = footerHeadingTexts[i];
    });

    setPlainText(".footer-brand > p", t.footerDescription);

    const footerAddress = document.querySelector(".footer-contact p");
    if (footerAddress) footerAddress.textContent = t.footerAddress;

    const footerBottom = document.querySelector(".footer-bottom");
    if (footerBottom) {
      const spans = footerBottom.querySelectorAll("span");
      if (spans[0]) {
        spans[0].innerHTML =
          `© <span id="currentYear">${new Date().getFullYear()}</span> ` +
          `Gurukrupa Xerox And Soham Multiservices. ${t.footerCopyright}`;
      }
      if (spans[1]) spans[1].textContent = t.footerTagline;
    }

    // Print illustration
    setPlainText(".print-main-card > strong", t.document);
    setPlainText(".file-size", t.ready);
    setPlainText(".print-ready", t.preview);

    // WhatsApp floating label
    setPlainText(".whatsapp-label", t.chat);

    // Language selector
    if (languageSelect) languageSelect.value = language;

    try {
      localStorage.setItem("gurukrupa-language", language);
    } catch (error) {
      // Language still works if browser storage is unavailable.
    }
  }

  // Restore visitor's preferred language
  let savedLanguage = "en";

  try {
    savedLanguage = localStorage.getItem("gurukrupa-language") || "en";
  } catch (error) {
    savedLanguage = "en";
  }

  if (!translations[savedLanguage]) savedLanguage = "en";
  setLanguage(savedLanguage);

  if (languageSelect) {
    languageSelect.addEventListener("change", event => {
      setLanguage(event.target.value);
    });
  }

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", translations[
        document.documentElement.lang
      ].mobileMenu);
    };

    menuToggle.addEventListener("click", () => {
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

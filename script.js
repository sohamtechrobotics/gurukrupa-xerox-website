
/* =========================================================
   GURUKRUPA XEROX & SOHAM MULTISERVICES
   Website Functionality
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
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

  // AUTOMATIC COPYRIGHT YEAR
  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

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
      const service = document.getElementById("serviceType").value;
      const date = document.getElementById("preferredDate").value;
      const message = document.getElementById("enquiryMessage").value.trim();

      const whatsappMessage = [
        "Hello Gurukrupa Xerox & Soham Multiservices!",
        "",
        "*New Service Enquiry*",
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

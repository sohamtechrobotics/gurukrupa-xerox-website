
import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Printer,
  CreditCard,
  FileText,
  PackageSearch,
  MessageCircle
} from "lucide-react";

const faqs = [
  {
    category: "Printing Services",
    icon: Printer,
    questions: [
      {
        question: "What printing services do you offer?",
        answer:
          "We offer black and white printing, colour printing, photocopying, document printing and scanning services."
      },
      {
        question: "Can I submit documents online for printing?",
        answer:
          "An online printing service is being planned. It will allow customers to upload documents, review printing details and arrange shop pickup."
      },
      {
        question: "How is double-sided printing charged?",
        answer:
          "Our planned pricing is based on physical sheets. A double-sided sheet counts as one physical sheet."
      }
    ]
  },
  {
    category: "Online Orders",
    icon: PackageSearch,
    questions: [
      {
        question: "How can I track my order?",
        answer:
          "Use the Track Order page to enter your order reference and registered mobile number. Live tracking will be connected when the online order system is launched."
      },
      {
        question: "How will I know when my order is ready?",
        answer:
          "Order-ready notifications through WhatsApp and website tracking are planned for the online printing system."
      }
    ]
  },
  {
    category: "Payments",
    icon: CreditCard,
    questions: [
      {
        question: "Which online payment methods are accepted?",
        answer:
          "Online payment gateway integration is planned. Available payment methods will be announced when the ordering system launches."
      },
      {
        question: "When will my online order be confirmed?",
        answer:
          "The planned system will confirm an order after document validation and successful payment verification."
      }
    ]
  },
  {
    category: "Files & Documents",
    icon: FileText,
    questions: [
      {
        question: "Which file formats will be supported?",
        answer:
          "The planned system is intended to support PDF, JPG, PNG and common Office document formats such as DOCX, XLSX and PPTX."
      },
      {
        question: "How long will uploaded files be retained?",
        answer:
          "The planned retention period is seven days after collection or cancellation, subject to any necessary legal or operational holds."
      }
    ]
  }
];

function Help() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setActiveQuestion((current) => current === id ? null : id);
  };

  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">HELP & SUPPORT</span>
        <h1>How Can We Help You?</h1>
        <p>
          Find answers to common questions about our services
          and planned online printing system.
        </p>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Find Your Answers</h2>
          <p>
            Browse the topics below to find helpful information.
          </p>
        </div>

        {faqs.map((group, groupIndex) => {
          const Icon = group.icon;

          return (
            <div className="faq-category" key={group.category}>
              <div className="faq-category-heading">
                <Icon size={23} />
                <h2>{group.category}</h2>
              </div>

              <div className="faq-list">
                {group.questions.map((item, questionIndex) => {
                  const id = `${groupIndex}-${questionIndex}`;
                  const isOpen = activeQuestion === id;

                  return (
                    <div
                      className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                      key={id}
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => toggleQuestion(id)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          size={19}
                          className={isOpen ? "faq-chevron-open" : ""}
                        />
                      </button>

                      {isOpen && (
                        <div className="faq-answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="help-contact-section">
        <div className="help-contact-icon">
          <HelpCircle size={34} />
        </div>

        <h2>Still Have Questions?</h2>
        <p>
          Our team is happy to help with your enquiries.
          Contact us directly through WhatsApp.
        </p>

        <a
          href="https://wa.me/917745062299?text=Hello!%20I%20need%20help%20with%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          <MessageCircle size={17} />
          Contact Support
        </a>
      </section>
    </main>
  );
}

export default Help;


import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Printer,
  CreditCard,
  Package,
  FileText
} from "lucide-react";

const faqs = [
  {
    category: "Printing",
    icon: Printer,
    questions: [
      {
        question: "What file formats will be accepted?",
        answer:
          "The planned system will support PDF, JPG, PNG and common Office documents such as DOCX, XLSX and PPTX."
      },
      {
        question: "Can I print documents on both sides?",
        answer:
          "Yes. Both single-sided and double-sided printing are planned. Double-sided printing will count as one physical sheet."
      },
      {
        question: "Can I choose black and white or colour printing?",
        answer:
          "Yes. You will be able to select black and white or colour printing while configuring your order."
      }
    ]
  },
  {
    category: "Orders & Pickup",
    icon: Package,
    questions: [
      {
        question: "How will I collect my printing order?",
        answer:
          "Online printing orders will be collected from Gurukrupa Xerox And Soham Multiservices at New Bhokardan."
      },
      {
        question: "How can I track my order?",
        answer:
          "Once order tracking is activated, you will be able to check your order using your order reference and registered mobile number."
      },
      {
        question: "Will I receive an order confirmation?",
        answer:
          "The planned system will confirm orders after document validation and successful payment verification."
      }
    ]
  },
  {
    category: "Payments & Pricing",
    icon: CreditCard,
    questions: [
      {
        question: "What are the planned printing rates?",
        answer:
          "Black and white single-sided: ₹3 per sheet. Black and white double-sided: ₹2 per sheet. Colour printing: ₹10 per sheet."
      },
      {
        question: "Is there an online order handling charge?",
        answer:
          "The planned charge is ₹3 once per black and white order or ₹5 once per colour order. These charges are not cumulative."
      },
      {
        question: "When will I pay?",
        answer:
          "The planned online process allows you to review your converted document and estimated price before making payment."
      }
    ]
  },
  {
    category: "Documents & Support",
    icon: FileText,
    questions: [
      {
        question: "How long will uploaded files be retained?",
        answer:
          "The planned retention period is seven days after collection or cancellation, subject to any required holds."
      },
      {
        question: "How can I ask for help?",
        answer:
          "You can contact our team by calling 7745062299 or sending an enquiry through WhatsApp."
      }
    ]
  }
];

function Help() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  return (
    <main className="page-container">
      <section className="page-hero">
        <span className="eyebrow">HELP & SUPPORT</span>
        <h1>How Can We Help You?</h1>
        <p>
          Find answers to common questions about our
          services, printing process, orders and pricing.
        </p>
      </section>

      <section className="section help-section">
        <div className="section-heading">
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Answers to your questions.</h2>
        </div>

        {faqs.map((group) => {
          const Icon = group.icon;

          return (
            <section className="faq-category" key={group.category}>
              <div className="faq-category-heading">
                <Icon size={24} />
                <h2>{group.category}</h2>
              </div>

              <div className="faq-list">
                {group.questions.map((faq, index) => {
                  const questionId =
                    `${group.category}-${index}`;

                  const isOpen = activeQuestion === questionId;

                  return (
                    <article className="faq-item" key={questionId}>
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() =>
                          setActiveQuestion(
                            isOpen ? null : questionId
                          )
                        }
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={19}
                          className={isOpen ? "faq-chevron-open" : ""}
                        />
                      </button>

                      {isOpen && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </section>

      <section className="contact-section">
        <HelpCircle size={34} />
        <h2>Still have questions?</h2>
        <p>
          Our team will be happy to assist you.
        </p>

        <a
          href="https://wa.me/917745062299"
          className="print-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us on WhatsApp
        </a>
      </section>
    </main>
  );
}

export default Help;

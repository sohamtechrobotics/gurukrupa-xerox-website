
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const phoneNumber = "917745062299";

  const message = encodeURIComponent(
    "Hello! I would like to enquire about your services."
  );

  const whatsappLink =
    `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={27} />
      <span>Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;

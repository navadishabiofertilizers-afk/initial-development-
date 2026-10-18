export const WHATSAPP_PHONE_NUMBER = "918767653352";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

export const PRODUCT_WHATSAPP_MESSAGES = {
  earthworms:
    "Hello Nava Disha Bio Fertilizers, I am interested in buying live earthworms. Please share the price, availability and delivery options.",
  vermicompost:
    "Hello Nava Disha Bio Fertilizers, I am interested in buying vermicompost. Please share pack sizes, prices and delivery options.",
  starterCulture:
    "Hello Nava Disha Bio Fertilizers, I am interested in earthworm starter culture. Please share the price and delivery details.",
  bulkOrders:
    "Hello Nava Disha Bio Fertilizers, I would like to enquire about a bulk agricultural order. Please share quantity-based pricing and transport details.",
  general:
    "Hello Nava Disha Bio Fertilizers, I would like to enquire about your organic products, availability and delivery to my location."
} as const;

export type ProductMessageKey = keyof typeof PRODUCT_WHATSAPP_MESSAGES;

export interface EnquiryFormData {
  customerName: string;
  mobileNumber: string;
  product: string;
  quantity: string;
  deliveryLocation: string;
  message?: string;
}

/**
 * Builds a properly URL-encoded WhatsApp click-to-chat URL.
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `${WHATSAPP_BASE_URL}?text=${encoded}`;
}

/**
 * Generates an enquiry message from the form fields.
 */
export function buildEnquiryMessage(form: EnquiryFormData): string {
  const lines: string[] = [
    `Hello Nava Disha Bio Fertilizers,`,
    ``,
    `I would like to enquire about your products:`,
    `• Name: ${form.customerName.trim()}`,
    `• Mobile: ${form.mobileNumber.trim()}`,
    `• Product: ${form.product.trim()}`,
    `• Quantity: ${form.quantity.trim()}`,
    `• Delivery Location: ${form.deliveryLocation.trim()}`,
  ];

  if (form.message && form.message.trim().length > 0) {
    lines.push(`• Notes / Question: ${form.message.trim()}`);
  }

  lines.push(``);
  lines.push(`Please share price, availability and delivery details.`);

  return lines.join("\n");
}

/**
 * Helper to open WhatsApp in a new window/tab safely.
 */
export function openWhatsApp(message: string): void {
  const url = buildWhatsAppUrl(message);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

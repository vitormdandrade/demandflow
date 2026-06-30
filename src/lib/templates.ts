// Multi-template definitions for DemandFlow.
// Each template has its own fields, renderer, and product metadata.

export type TemplateId = "demand-letter" | "cease-and-desist" | "contract-termination" | "late-rent-notice" | "freelance-reminder";

export interface TemplateField {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export interface TemplateConfig {
  id: TemplateId;
  name: string;
  description: string;
  icon: string;
  priceCents: number;
  productName: string;
  productDescription: string;
  fields: TemplateField[];
  heading: string;
  subheading: string;
  successTitle: string;
  successMessage: string;
}

export const TEMPLATES: Record<TemplateId, TemplateConfig> = {
  "demand-letter": {
    id: "demand-letter",
    name: "Demand Letter",
    description: "Formal payment demand for unpaid freelance work",
    icon: "📄",
    priceCents: 2900,
    productName: "Demand Letter",
    productDescription: "A legally-formatted demand letter, ready to send.",
    heading: "Send a Demand Letter When a Client Doesn't Pay",
    subheading: "A legally-formatted demand letter in 60 seconds. No lawyer needed.",
    successTitle: "Your demand letter is ready!",
    successMessage:
      "Review it below, then download or print it as a PDF to send to your client.",
    fields: [
      { name: "yourName", label: "Your Full Name", placeholder: "Jane Freelancer" },
      { name: "yourEmail", label: "Your Email", type: "email", placeholder: "jane@example.com" },
      { name: "clientName", label: "Client / Business Name", placeholder: "Acme Corp" },
      { name: "clientAddress", label: "Client Address", placeholder: "123 Market St, San Francisco, CA 94103" },
      { name: "amount", label: "Amount Owed ($)", placeholder: "2500.00" },
      { name: "description", label: "Brief Description of Work Done", placeholder: "Website redesign and development" },
      { name: "dateCompleted", label: "Date Work Was Completed", placeholder: "March 15, 2026" },
    ],
  },

  "cease-and-desist": {
    id: "cease-and-desist",
    name: "Cease & Desist",
    description: "Stop copyright infringement, harassment, or defamation",
    icon: "🛑",
    priceCents: 2900,
    productName: "Cease & Desist Letter",
    productDescription: "A formal cease and desist letter, ready to send.",
    heading: "Send a Cease & Desist Letter",
    subheading: "Stop infringement, harassment, or defamation. Formally. Fast.",
    successTitle: "Your cease & desist letter is ready!",
    successMessage:
      "Review it below, then download or print it as a PDF to send.",
    fields: [
      { name: "yourName", label: "Your Full Name", placeholder: "Jane Creator" },
      { name: "yourEmail", label: "Your Email", type: "email", placeholder: "jane@example.com" },
      { name: "yourAddress", label: "Your Address (optional)", placeholder: "123 Main St, New York, NY 10001" },
      { name: "recipientName", label: "Recipient's Full Name", placeholder: "John Infringer" },
      { name: "recipientAddress", label: "Recipient's Address", placeholder: "456 Oak Ave, Los Angeles, CA 90001" },
      { name: "violationType", label: "Type of Violation", placeholder: "Copyright infringement, harassment, defamation, etc." },
      { name: "violationDescription", label: "Detailed Description of Violation", placeholder: "Describe the specific acts, dates, and evidence of the violation…" },
      { name: "demandAction", label: "Action Demanded", placeholder: "Immediately cease and desist all unauthorized use of my copyrighted work…" },
    ],
  },

  "contract-termination": {
    id: "contract-termination",
    name: "Contract Termination",
    description: "Terminate a contract for breach or convenience",
    icon: "📋",
    priceCents: 2900,
    productName: "Contract Termination Letter",
    productDescription: "A formal contract termination letter, ready to send.",
    heading: "Send a Contract Termination Letter",
    subheading: "Formally terminate a contract for breach or convenience.",
    successTitle: "Your contract termination letter is ready!",
    successMessage:
      "Review it below, then download or print it as a PDF to send.",
    fields: [
      { name: "yourName", label: "Your Full Name", placeholder: "Your Name or Company" },
      { name: "yourEmail", label: "Your Email", type: "email", placeholder: "you@example.com" },
      { name: "yourAddress", label: "Your Address (optional)", placeholder: "123 Business Rd, Suite 100, Chicago, IL 60601" },
      { name: "recipientName", label: "Other Party's Name (or Company)", placeholder: "ABC Services LLC" },
      { name: "recipientAddress", label: "Other Party's Address", placeholder: "456 Partner Lane, Dallas, TX 75201" },
      { name: "contractDate", label: "Date of Original Contract", placeholder: "January 10, 2025" },
      { name: "contractDescription", label: "Brief Description of Contract", placeholder: "Service agreement for monthly marketing services" },
      { name: "terminationReason", label: "Reason for Termination", placeholder: "Material breach of contract — failure to deliver services as agreed…" },
      { name: "effectiveDate", label: "Effective Date of Termination", placeholder: "30 days from the date of this letter" },
    ],
  },

  "late-rent-notice": {
    id: "late-rent-notice",
    name: "Late Rent Notice",
    description: "Notify a tenant of unpaid rent and demand payment",
    icon: "🏠",
    priceCents: 2900,
    productName: "Late Rent Notice",
    productDescription: "A formal late rent notice, ready to send.",
    heading: "Send a Late Rent Notice",
    subheading: "Notify tenants of overdue rent. Professional and legally-sound.",
    successTitle: "Your late rent notice is ready!",
    successMessage:
      "Review it below, then download or print it as a PDF to send or post.",
    fields: [
      { name: "yourName", label: "Your Name (Landlord / Property Manager)", placeholder: "Jane Landlord" },
      { name: "yourEmail", label: "Your Email", type: "email", placeholder: "jane@example.com" },
      { name: "yourAddress", label: "Your Address (optional)", placeholder: "123 Owner St, Portland, OR 97201" },
      { name: "tenantName", label: "Tenant's Full Name", placeholder: "John Tenant" },
      { name: "tenantAddress", label: "Rental Property Address", placeholder: "456 Rental Ave, Apt 3B, Portland, OR 97202" },
      { name: "rentAmount", label: "Monthly Rent Amount ($)", placeholder: "1500.00" },
      { name: "amountDue", label: "Total Amount Past Due ($)", placeholder: "1500.00" },
      { name: "monthsDue", label: "Months Overdue / Details", placeholder: "Rent for June 2026 was due on the 1st and remains unpaid" },
      { name: "lateFee", label: "Late Fee Applied (if any, $)", placeholder: "75.00" },
      { name: "deadline", label: "Payment Deadline", placeholder: "Within 14 days of this notice" },
    ],
  },

  "freelance-reminder": {
    id: "freelance-reminder",
    name: "Payment Reminder",
    description: "A friendly nudge before sending a formal demand letter",
    icon: "💬",
    priceCents: 1900,
    productName: "Freelance Payment Reminder",
    productDescription: "A polite but professional payment reminder, ready to send.",
    heading: "Send a Friendly Payment Reminder",
    subheading: "A professional nudge before things get formal. Only $19.",
    successTitle: "Your payment reminder is ready!",
    successMessage:
      "Review it below, then download or print it as a PDF to send to your client.",
    fields: [
      { name: "yourName", label: "Your Full Name", placeholder: "Jane Freelancer" },
      { name: "yourEmail", label: "Your Email", type: "email", placeholder: "jane@example.com" },
      { name: "clientName", label: "Client / Business Name", placeholder: "Acme Corp" },
      { name: "amount", label: "Invoice Amount ($)", placeholder: "2500.00" },
      { name: "invoiceNumber", label: "Invoice Number / Reference", placeholder: "INV-2026-0042" },
      { name: "description", label: "Brief Description of Work Done", placeholder: "Website redesign and development" },
      { name: "dateCompleted", label: "Date Work Was Completed", placeholder: "March 15, 2026" },
      { name: "dueDate", label: "Original Due Date", placeholder: "April 1, 2026" },
      { name: "paymentMethod", label: "Preferred Payment Method", placeholder: "Bank transfer, credit card, PayPal, etc." },
    ],
  },
};

export const TEMPLATE_LIST: TemplateConfig[] = Object.values(TEMPLATES);

export function getTemplate(id: string): TemplateConfig | undefined {
  return TEMPLATES[id as TemplateId];
}

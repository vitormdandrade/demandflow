// NDA and contract document types + wizard step definitions for DemandFlow Contract Generator.

export type NdaDocType = "nda" | "service-agreement" | "partnership-agreement";

export interface NdaDocConfig {
  id: NdaDocType;
  name: string;
  description: string;
  icon: string;
  priceCents: number;
  productName: string;
  productDescription: string;
}

export const NDA_DOCS: Record<NdaDocType, NdaDocConfig> = {
  nda: {
    id: "nda",
    name: "NDA",
    description: "Non-Disclosure Agreement to protect confidential information",
    icon: "🔏",
    priceCents: 1500,
    productName: "Non-Disclosure Agreement (NDA)",
    productDescription:
      "A professionally formatted NDA protecting confidential information between two parties.",
  },
  "service-agreement": {
    id: "service-agreement",
    name: "Service Agreement",
    description: "Professional services contract between provider and client",
    icon: "📑",
    priceCents: 1500,
    productName: "Service Agreement",
    productDescription:
      "A legally-formatted service agreement covering scope, payment, and terms.",
  },
  "partnership-agreement": {
    id: "partnership-agreement",
    name: "Partnership Agreement",
    description: "Business partnership contract outlining rights and responsibilities",
    icon: "🤝",
    priceCents: 1900,
    productName: "Partnership Agreement",
    productDescription:
      "A partnership agreement covering purpose, profit sharing, and governance.",
  },
};

export const NDA_DOC_LIST: NdaDocConfig[] = Object.values(NDA_DOCS);

export function getNdaDoc(id: string): NdaDocConfig | undefined {
  return NDA_DOCS[id as NdaDocType];
}

export interface NdaField {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
}

export interface NdaWizardStep {
  title: string;
  fields: NdaField[];
}

export const NDA_WIZARD_STEPS: Record<NdaDocType, NdaWizardStep[]> = {
  nda: [
    {
      title: "Party Names",
      fields: [
        {
          name: "party1Name",
          label: "Disclosing Party (Your Name or Company)",
          placeholder: "Jane Smith or Acme Corp",
        },
        {
          name: "party1Email",
          label: "Your Email",
          type: "email",
          placeholder: "jane@example.com",
        },
        {
          name: "party2Name",
          label: "Receiving Party",
          placeholder: "John Doe or Beta LLC",
        },
      ],
    },
    {
      title: "Agreement Terms",
      fields: [
        {
          name: "jurisdiction",
          label: "Governing Law (State)",
          placeholder: "California",
        },
        {
          name: "effectiveDate",
          label: "Effective Date",
          placeholder: "July 1, 2026",
        },
        {
          name: "confidentialityPeriod",
          label: "Confidentiality Period",
          placeholder: "2 years",
        },
        {
          name: "description",
          label: "Description of Confidential Information",
          type: "textarea",
          placeholder: "Trade secrets, business plans, financial data, technical know-how…",
        },
      ],
    },
  ],
  "service-agreement": [
    {
      title: "Party Names",
      fields: [
        {
          name: "party1Name",
          label: "Service Provider (Your Name or Company)",
          placeholder: "Jane Smith or My Agency LLC",
        },
        {
          name: "party1Email",
          label: "Your Email",
          type: "email",
          placeholder: "jane@example.com",
        },
        {
          name: "party2Name",
          label: "Client / Company Name",
          placeholder: "Acme Corp",
        },
      ],
    },
    {
      title: "Service Terms",
      fields: [
        {
          name: "serviceDescription",
          label: "Description of Services",
          type: "textarea",
          placeholder:
            "Website design and development, including 5 pages and mobile optimization…",
        },
        {
          name: "paymentAmount",
          label: "Total Payment Amount ($)",
          placeholder: "5000.00",
        },
        {
          name: "paymentTerms",
          label: "Payment Terms",
          placeholder: "50% upfront, 50% on delivery",
        },
        {
          name: "startDate",
          label: "Start Date",
          placeholder: "July 15, 2026",
        },
        {
          name: "jurisdiction",
          label: "Governing Law (State)",
          placeholder: "New York",
        },
      ],
    },
  ],
  "partnership-agreement": [
    {
      title: "Partner Details",
      fields: [
        {
          name: "party1Name",
          label: "Partner 1 Full Name",
          placeholder: "Jane Smith",
        },
        {
          name: "party1Email",
          label: "Partner 1 Email",
          type: "email",
          placeholder: "jane@example.com",
        },
        {
          name: "party2Name",
          label: "Partner 2 Full Name",
          placeholder: "John Doe",
        },
      ],
    },
    {
      title: "Partnership Terms",
      fields: [
        {
          name: "businessPurpose",
          label: "Business Purpose",
          type: "textarea",
          placeholder:
            "Digital marketing consultancy specializing in e-commerce growth…",
        },
        {
          name: "profitSplit",
          label: "Profit & Loss Split",
          placeholder: "50/50",
        },
        {
          name: "jurisdiction",
          label: "Governing Law (State)",
          placeholder: "Texas",
        },
        {
          name: "effectiveDate",
          label: "Effective Date",
          placeholder: "August 1, 2026",
        },
      ],
    },
  ],
};

export function getNdaFieldKeys(docType: NdaDocType): string[] {
  return NDA_WIZARD_STEPS[docType].flatMap((step) =>
    step.fields.map((f) => f.name),
  );
}

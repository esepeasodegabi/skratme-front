export type PlanId = "free-guest" | "free-account" | "pro" | "monetize";

export interface PricingFeature {
  label: string;
}

export interface PricingPlan {
  id: PlanId;
  eyebrow: string;
  title: string;
  price?: string;
  priceSuffix?: string;
  highlight?: string;
  features: string[];
  cta: string;
  footnote?: string;
  badge?: string;
  accent: "brand" | "mint" | "ink" | "amber";
}

export interface VerticalExample {
  label: string;
}

export interface Vertical {
  id: string;
  icon: string;
  name: string;
  description: string;
  examples: string[];
  cta: string;
  featured: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

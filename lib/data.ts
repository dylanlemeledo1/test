import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Boxes,
  GitBranch,
  Globe,
  LineChart,
  Lock,
  Sparkles,
  Workflow as WorkflowIcon,
  Zap,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Product", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Customers", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  span: "sm" | "md" | "lg";
  accent?: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Realtime signal, not noise",
    description:
      "Surface the work that matters. Nebula filters thousands of events per second into the handful of signals worth your attention.",
    icon: Activity,
    span: "lg",
  },
  {
    title: "AI copilots, scoped to your stack",
    description:
      "Agents that understand your codebase, tickets, runbooks, and customers — not the public internet.",
    icon: Sparkles,
    span: "md",
  },
  {
    title: "Workflows that learn",
    description:
      "Every run improves the next. Nebula compounds tribal knowledge into reusable, governable automation.",
    icon: WorkflowIcon,
    span: "md",
  },
  {
    title: "SOC 2, GDPR, EU-hosted",
    description:
      "Encryption in transit and at rest. Regional data residency. SSO, SCIM, audit logs from day one.",
    icon: Lock,
    span: "sm",
  },
  {
    title: "Lightning fast",
    description:
      "P95 query latency under 80ms across half a billion rows. Built on a custom columnar engine.",
    icon: Zap,
    span: "sm",
  },
  {
    title: "Composable building blocks",
    description:
      "Drop-in primitives for charts, queries, and AI flows. Compose them like Lego — version them like code.",
    icon: Boxes,
    span: "sm",
  },
];

export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Connect",
    description:
      "Pipe in data from 80+ sources in minutes — Postgres, Snowflake, GitHub, Linear, Stripe, Segment.",
    icon: GitBranch,
  },
  {
    step: "02",
    title: "Model",
    description:
      "Nebula learns your entities, metrics, and rituals. No taxonomy meetings, no schema councils.",
    icon: LineChart,
  },
  {
    step: "03",
    title: "Automate",
    description:
      "Compose workflows with primitives or prompts. Ship them behind feature flags, with full audit trails.",
    icon: WorkflowIcon,
  },
  {
    step: "04",
    title: "Operate",
    description:
      "Realtime alerts, postmortems written for you, and a single pane of glass for everyone — engineers to execs.",
    icon: Globe,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Nebula compressed a quarter of operational work into a Tuesday afternoon. It's the rare tool that gets quieter the more you use it.",
    name: "Imani Carter",
    role: "VP Engineering",
    company: "Lumenwave",
    initials: "IC",
  },
  {
    quote:
      "Our on-call shrank by 60%. The first time the AI postmortem caught a bad deploy before the pager fired, my whole team Slack-clapped.",
    name: "Daichi Mori",
    role: "Staff SRE",
    company: "Northpole",
    initials: "DM",
  },
  {
    quote:
      "I've used every analytics platform on the planet. Nebula is the first one where the interface feels like it was made by people who actually ship.",
    name: "Sofia Ramos",
    role: "Head of Data",
    company: "Hemisphere",
    initials: "SR",
  },
  {
    quote:
      "It's the closest thing to having a principal engineer on every team — except it never gets tired and remembers everything.",
    name: "Maya Hollis",
    role: "CTO",
    company: "Slate Robotics",
    initials: "MH",
  },
  {
    quote:
      "Onboarding took an hour. By Friday, our PMs were writing their own workflows. The ROI conversation was over in week one.",
    name: "Theo Lindqvist",
    role: "Director of Product",
    company: "Orbital",
    initials: "TL",
  },
  {
    quote:
      "Beautiful, fast, and quietly opinionated. Nebula respects your time the way Linear respects your keyboard.",
    name: "Priya Anand",
    role: "Founder",
    company: "Mercator",
    initials: "PA",
  },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    cadence: "forever",
    description: "Everything an ambitious team needs to ship their first wins.",
    features: [
      "Up to 5 seats",
      "10 workflows",
      "7-day history",
      "Community support",
      "Standard integrations",
    ],
    cta: "Start for free",
  },
  {
    name: "Team",
    price: "$24",
    cadence: "per seat / month",
    description:
      "For growing teams that need governance, depth, and serious throughput.",
    features: [
      "Unlimited workflows",
      "365-day history",
      "SSO & SCIM",
      "AI copilots",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual",
    description:
      "For organizations with bespoke needs around residency, scale, and security.",
    features: [
      "EU/US data residency",
      "Dedicated environment",
      "99.99% SLA",
      "Solutions architect",
      "Audit log streaming",
      "Custom MSA",
    ],
    cta: "Talk to sales",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How is Nebula different from a BI tool?",
    answer:
      "BI tools answer questions you already know to ask. Nebula models your workflows so it can surface the question, the answer, and the action — usually before anyone files a ticket.",
  },
  {
    question: "Do you train on our data?",
    answer:
      "Never. Your data trains models scoped to your workspace only, and nothing leaves your region. We can run fully on your VPC for Enterprise plans.",
  },
  {
    question: "How long does it take to get value?",
    answer:
      "Most teams see their first ‘never going back’ moment within a single afternoon. Full rollout for a team of fifty typically takes under two weeks.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "Eighty production-grade integrations out of the box — including Postgres, Snowflake, BigQuery, GitHub, Linear, Jira, Stripe, Segment, Datadog, and PagerDuty. Custom sources via SDK.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. The Starter plan is free forever for small teams. The Team plan includes a 14-day trial with no credit card required.",
  },
  {
    question: "How do you handle security?",
    answer:
      "SOC 2 Type II, ISO 27001, GDPR-ready. SSO, SCIM, scoped tokens, and full audit logs from day one. Pen tests every six months by an independent firm.",
  },
];

export const LOGO_NAMES = [
  "Lumenwave",
  "Northpole",
  "Hemisphere",
  "Slate",
  "Orbital",
  "Mercator",
  "Stratus",
  "Helio",
  "Atlas",
  "Vector",
];

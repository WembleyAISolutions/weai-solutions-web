/**
 * Workforce page copy (WEB-NAV-003). The Workforce page is the product page of
 * HR-AR OS, WEAI's core workforce platform. Six parts: Purpose · Capability supply ·
 * Roles and work scenarios · Production support · Progress and outcomes · Platform
 * entry. Copy follows the public-copy rules: pain points and direction, nothing
 * claimed as running unless confirmed in the product record.
 */

export const workforceHero = {
  eyebrow: "WEAI · WORKFORCE",
  productId: "hr-ar-os",
  headline: "People and AI, matched to the work that actually needs doing.",
  lead:
    "HR-AR OS is WEAI's workforce platform. Enterprises bring problems, roles and " +
    "budgets. People, teams and AI capability bring verifiable supply. The platform " +
    "connects the two — clarifying the need, matching proactively, and recording " +
    "what was delivered and paid for.",
  ctaPrimary: { label: "How it works", href: "#purpose" },
  ctaSecondary: { label: "Contact", href: "/contact?from=workforce&product=hr-ar-os" },
} as const;

export const workforcePurpose = {
  eyebrow: "01 / Purpose",
  title: "Capacity without headcount; roles without losing accountability.",
  body:
    "Most organisations now have more work than people and more AI than they know " +
    "how to assign. HR-AR OS treats the unit of value as the capability to complete " +
    "work — a person, a team, a human-AI combination — and keeps a named human " +
    "responsible for every outcome. It is not an HR suite and not an agent runtime.",
  entries: [
    {
      id: "find-people",
      label: "Find people",
      text: "Clarify an existing role or leadership need, then match verified supply to it.",
    },
    {
      id: "solve-problem",
      label: "Solve a problem",
      text: "Clarify a transition, product, operational or delivery issue; buy a bounded diagnosis or organise delivery directly.",
    },
  ],
  roles: [
    { id: "enterprise-lead", label: "Enterprise lead", text: "Strategy, transition goals, priorities, budget and business ownership." },
    { id: "hr-lead", label: "HR lead", text: "Role definition, capability verification, recruitment and development." },
    { id: "department-lead", label: "Department lead", text: "Requests people or problem resolution; defines requirements and acceptance." },
  ],
  rolesNote: "Three entry points, not three identity systems. One person may hold several across projects.",
} as const;

export const workforceSupply = {
  eyebrow: "02 / Capability supply",
  title: "Professional people, agents, skills and usable workflows — with evidence attached.",
  body:
    "Supply is only useful if a buyer can trust it. Self-reported claims, uploaded " +
    "material and independently confirmed evidence are kept apart, and a person " +
    "confirms anything before it is shown outside. Nothing is scraped, nothing is " +
    "resold, and buying a course is never a condition of being seen.",
  cards: [
    { id: "people", label: "People and teams", text: "Identity, experience, work preferences, samples, time zone and language — confirmed by the person." },
    { id: "ai", label: "AI and human-AI services", text: "An AI offering always has an identified human operator. Technical autonomy and commercial responsibility stay separate." },
    { id: "matching", label: "Proactive matching", text: "A confirmed need is matched to three to five suitable options; gaps are disclosed, never padded." },
  ],
} as const;

export const workforceScenarios = {
  eyebrow: "03 / Roles and work scenarios",
  title: "Three ways work gets done through the platform.",
  paths: [
    {
      id: "hiring",
      label: "Hiring and role placement",
      text: "Goals and role requirements → capability and availability checks → proactive invitation → interview or work sample → the buyer decides.",
    },
    {
      id: "diagnosis",
      label: "Diagnosis and decision plan",
      text: "Free triage → a bounded, paid diagnosis by a consultant working with AI → an English deliverable the buyer can take anywhere. 'Do not hire yet' is a valid answer.",
    },
    {
      id: "delivery",
      label: "Staged project delivery",
      text: "Brief → proposal from a person, a team or a human-AI combination → agreed arrangement → stages, evidence, acceptance, payment → the next stage or handover.",
    },
  ],
  rolePacksIntro:
    "Inside WEAI, the same model runs as operating role lines — each a job function " +
    "taken on under written instruction and human adjudication. They illustrate what " +
    "a role pack looks like in practice; they are not separate products.",
  rolePacks: [
    { group: "Business operations", items: ["RevenueOps", "CustomerOps", "SupplyOps", "FinanceOps"] },
    { group: "Leadership and product", items: ["ExecutiveOps", "ProductOps"] },
  ],
} as const;

export const workforceProduction = {
  eyebrow: "04 / Production support",
  title: "How a capability is produced, validated, packaged and improved.",
  body:
    "Behind the marketplace sit two internal functions. The Capability Factory " +
    "turns a real, repeated workflow into a reusable capability with a written " +
    "scope and acceptance criteria. ProductOps turns validated capabilities into " +
    "something a buyer can actually purchase. Neither extracts a person's or a " +
    "client's knowledge without consent, and neither appears in the buyer's journey.",
  steps: [
    { id: "observe", label: "Observe", text: "A workflow that recurs in real work." },
    { id: "write", label: "Write", text: "Scope, conditions, exceptions and acceptance, in text." },
    { id: "validate", label: "Validate", text: "Run under supervision; keep the evidence." },
    { id: "package", label: "Package", text: "A purchasable capability with a named responsible party." },
    { id: "improve", label: "Improve", text: "Feed delivery records back into the next revision." },
  ],
} as const;

export const workforceProgress = {
  eyebrow: "05 / Progress and outcomes",
  title: "Where HR-AR OS stands.",
  direction: [
    { version: "1.0", text: "Enterprises bring problems, roles and budgets; the platform organises diagnosis, hiring or human-AI projects and records delivery and charging." },
    { version: "1.5", text: "Participants build capability through work: personally controlled methods, knowledge, AI configuration and portable evidence." },
    { version: "2.0", text: "Individuals, teams, human-AI combinations and AI-native capability take part in one work market — matching, delivery, income and reuse." },
  ],
  directionNote: "Direction, not dates. Versions appear on this page only once the Owner confirms them.",
  nonGoals: [
    "No payroll, attendance or leave; no global employment system",
    "No scraping of third-party CVs; no automatic hiring or rejecting",
    "No opaque personality or emotion scores",
    "No promise of guaranteed employment or income",
  ],
  nonGoalsLabel: "What it will not do",
} as const;

export const workforceEntry = {
  eyebrow: "06 / Platform entry",
  title: "Accounts, matching and delivery live inside HR-AR OS — not on this site.",
  body:
    "This page explains the platform. When the platform destination is open, the " +
    "button below leads straight to it. Until then, the route in is a conversation.",
  enterLabel: "Open HR-AR OS",
  contactLabel: "Talk to us about HR-AR OS",
  contactHref: "/contact?from=workforce&product=hr-ar-os",
} as const;

export const workforceInPractice = {
  eyebrow: "07 / In practice",
  title: "How capability was assigned and used.",
} as const;

export const workforceCta = {
  title: "Have a role to fill, or a problem to solve?",
  label: "Contact",
  href: "/contact?from=workforce",
} as const;

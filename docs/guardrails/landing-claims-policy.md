# Landing Claims Policy

**Status:** Active · Applies to: `WEAI.solutions` public homepage and all marketing surfaces in this repository.

This document is the editorial source of truth for what the public site may and may
not claim. It exists so that copy, components, and future contributors stay inside a
defensible, honest framing. When in doubt, the rule here wins over the design.

The first committed file in this repository is intentionally this policy — claims
discipline precedes implementation.

---

## 1. What WEAI is

WEAI is positioned as **the missing execution layer between AI intelligence and the
real economy** — it turns platform needs into governed, auditable, executable AI
capability packages for real-world industries and human-facing services.

Permitted framing:

- WEAI designs and packages AI *capability systems*.
- Capability packages are described as **governed, auditable, and executable**.
- The audience is real-world industries and human-facing services.

## 2. What WEAI must not claim (hard rules)

These map directly to product/legal guardrails and are non-negotiable:

1. **No runtime or live execution claims.** The public site must not state or imply
   that WEAI is currently executing, operating, or running any third party's
   production workloads. No "powered by WEAI runtime" language.
2. **No false attribution.** Do **not** claim that DryCleanOne or TaxEnd are
   WEAI-built, WEAI-owned, WEAI-dependent, or executed by a WEAI runtime.
3. **No fabricated capability.** No fake chatbot, no fake "AI routing," no simulated
   live agent, no mocked execution that implies real automated work is happening.
4. **No commercial surfaces.** No pricing, no login, no API keys, no dashboard, no
   account flow on this public homepage.
5. **No runtime/API calls.** The homepage performs no network calls to any backend
   or AI provider. Intake is local capture only.
6. **No internal architecture disclosure.** Do not expose, reference, or copy
   internal architecture materials. Nothing from the private `weai.solutions`
   repository — especially `docs/internal/` — may be pulled into this repo.

## 3. Reference surfaces

Reference surfaces are named **only as illustrative real-world domains** that show the
*kind* of execution problem WEAI addresses. They are not presented as clients,
deployments, or products running on WEAI.

| Surface | Tier | Permitted framing |
| --- | --- | --- |
| **DryCleanOne** | Stronger reference surface | A concrete real-world operations domain used to illustrate execution problems. May be given more visual/editorial weight. **Not** WEAI-built/dependent/executed. |
| **TaxEnd** | Stronger reference surface | A concrete real-world compliance/financial-services domain used the same way. Same prohibition on attribution. |
| **StoryOne** | Emerging domain | Mention only as an emerging/early domain of interest. Low emphasis. No maturity or deployment claims. |
| **ACAPRO** | Emerging domain | Same as StoryOne. |
| **Longfellows** | Emerging domain | Same as StoryOne. |

Editorial weighting: DryCleanOne and TaxEnd may anchor the reference section.
StoryOne, ACAPRO, and Longfellows are grouped as emerging and clearly labelled as
such.

**Evidence-style rendering (permitted):** DryCleanOne and TaxEnd may be presented as
structured evidence cards (quiet label/value rows) that describe the *independent*
operational surface — e.g. DryCleanOne's order lifecycle and its public, observable
detail that ready status is visible before payment with payment at pickup; TaxEnd's
regulated-calculation, explanation, and user-responsibility boundary. These rows
describe the surface itself and must not imply WEAI built, owns, depends on, or
executes it. Emerging surfaces (StoryOne / ACAPRO / Longfellows) must be labelled as
*emerging reference surfaces* — independent domains. Do **not** call them "capability
domains" or any phrasing implying WEAI builds, owns, or produces them; that would
break the reference-surface boundary. They carry no operational or maturity claims.

**"What WEAI packages" row (permitted):** Each full evidence card may carry one row
that states the capability WEAI would *package* for that surface (e.g. a governed
order-lifecycle capability; a governed calculation capability where explanations,
boundaries, and responsibility remain inspectable). This connects the reference
surface to WEAI's deliverable **without** claiming WEAI built, owns, depends on, or
operates the independent business.

## 4. Capability intake behavior

The intake control on the homepage is a **capture-only** affordance:

- It accepts chip selections and free text describing a capability need.
- On submit it **populates or scrolls to the demo request section** — nothing more.
- It must never imply that the input is being processed, routed, executed, or
  answered by an AI system in real time. On-screen copy must state that it starts a
  **capability assessment conversation, not an automated AI response.**
- There is no backend submission in this scope; the captured intent is surfaced to
  the user to carry into a capability assessment conversation. The copy must match
  actual behavior and is upgraded only as real follow-up capability is added.

## 5. Call to action

The single primary action is: **"Start a capability assessment"** It leads to a
capability assessment / demo request section, not to any account, checkout, or
product flow.

## 6. Locked copy

The following strings are locked and must not be reworded without an explicit policy
update:

- **Headline:** "The missing execution layer between AI intelligence and the real economy."
- **Subhead:** "WEAI helps organizations turn real workflows into governed AI capability packages — scoped, auditable, and ready for the owning team or platform to operate."
- **Primary CTA:** "Start a capability assessment"

## 7. Review checklist (apply before every change to public copy)

- [ ] No pricing / login / API key / dashboard / account flow added.
- [ ] No fake chatbot, fake AI routing, or simulated execution.
- [ ] No runtime/API network calls introduced.
- [ ] DryCleanOne / TaxEnd not claimed as WEAI-built, -dependent, or -executed.
- [ ] Emerging domains (StoryOne / ACAPRO / Longfellows) labelled as emerging.
- [ ] No internal architecture material or private-repo content introduced.
- [ ] Locked copy matches §6 (headline / commercial subhead / CTA).
- [ ] Delivery-map wording matches §8; no internal component names exposed.
- [ ] Copy uses only the §9 public-safe vocabulary; no internal trust-core terms.
- [ ] No marketplace / runtime / public-API / autonomous-decision framing.

## 8. Approved delivery-map wording

The homepage may show one industrial "delivery map" of WEAI's own
engineer → govern → deliver process. The **only** approved public stage labels are:

1. Need Intake
2. Capability Design
3. Governance Boundary
4. Production Package
5. Platform Handoff
6. Auditable Operation

Rules:

- These six labels are the public vocabulary. **No internal component, module, or
  architecture names may ever appear** on the site or in this repository.
- **Governance Boundary** signals only *that* bounded authority exists. It must not be
  drawn or captioned in a way that reveals internal governance architecture.
- **Auditable Operation** is run by the owning platform. It must not be presented as a
  live WEAI runtime or as WEAI executing third-party work.
- Stage captions live in `src/content/landing.ts` and must comply with the rules above.

## 9. Public-safe vocabulary & product-line discipline

All public copy draws only from the approved vocabulary below. New copy is governed by
this section; nothing lives outside the policy.

**Approved public-safe vocabulary (use these):** governance boundary · capability
package · operational package · operating scope · operating surface · operating
environment · operable · operationally adoptable · human responsibility · acceptance
criteria · audit evidence · handoff path · inspectable records · operating review ·
capability assessment.

The word "executable"/"execution" is retired from public copy (the sole exception is
the locked hero headline). Use "operable", "operational package", "operating surface",
or "business workflow" instead.

**Allowed public claims:** WEAI helps define governance boundaries; packages real
workflows into capability packages; designs audit and handoff surfaces; works with
independent reference operational surfaces; starts with a capability assessment; helps
make workflows inspectable and operationally adoptable. One-line public expression of
the whole: *"WEAI defines the boundary, packages the capability, hands it to the owner,
and keeps the outcome inspectable."*

**Forbidden claims:** that WEAI executes or operates DryCleanOne / TaxEnd; that
DCO / TaxEnd are WEAI-built; a public runtime; a public API; self-serve SaaS login; a
marketplace; autonomous decision-making; that WEAI replaces customer responsibility;
guarantees of regulatory approval; operating the customer's business unless separately
agreed.

**Product-line discipline:**

- *Public services now:* Capability Assessment · Capability Package Build · Capability
  Handoff · Operating Review.
- *Future public lines* (introduced gradually; **not** emphasized on the homepage now):
  CoStudio · OpsBoard · RevNex. These are product/brand names only — no architecture
  is described.

**Internal trust core — never exposed.** The internal trust core (its engine,
governance internals, component codenames, and any non-public mechanics or
architecture) must **never** be named, described, or otherwise revealed on any public
page or anywhere in this public repository. Only the approved public-safe vocabulary
above may be used. This rule deliberately does not enumerate the internal terms —
naming them here would itself expose them.

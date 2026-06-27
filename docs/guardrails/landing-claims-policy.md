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

## 4. Capability intake behavior

The intake control on the homepage is a **capture-only** affordance:

- It accepts chip selections and free text describing a capability need.
- On submit it **populates or scrolls to the demo request section** — nothing more.
- It must never imply that the input is being processed, routed, executed, or
  answered by an AI system in real time.
- There is no backend submission in this scope; the captured intent is surfaced to
  the user to carry into a demo conversation.

## 5. Call to action

The single primary action is: **"Request a capability system demo."** It leads to a
demo request section, not to any account, checkout, or product flow.

## 6. Locked copy

The following strings are locked and must not be reworded without an explicit policy
update:

- **Headline:** "The missing execution layer between AI intelligence and the real economy."
- **Subhead:** "WEAI turns platform needs into governed, auditable, executable AI capability packages for real-world industries and human-facing services."
- **Primary CTA:** "Request a capability system demo."

## 7. Review checklist (apply before every change to public copy)

- [ ] No pricing / login / API key / dashboard / account flow added.
- [ ] No fake chatbot, fake AI routing, or simulated execution.
- [ ] No runtime/API network calls introduced.
- [ ] DryCleanOne / TaxEnd not claimed as WEAI-built, -dependent, or -executed.
- [ ] Emerging domains (StoryOne / ACAPRO / Longfellows) labelled as emerging.
- [ ] No internal architecture material or private-repo content introduced.
- [ ] Locked copy unchanged.

# Technical Clarity Sprint

## From technical uncertainty to an executable 90-day plan

A focused 1–2 week engagement for founders who have already started building but need senior technical clarity before committing more time, capital or engineering capacity.

The goal is not to produce documentation for its own sake.

The goal is to answer:

> **What should we build next, how should we build it, what could invalidate the plan, and who do we need to execute it?**

---

# 1. Who this is for

The Technical Clarity Sprint is designed for startups that already have some form of validation or execution:

- prototype;
- MVP;
- first users;
- signed pilot;
- paying customers;
- existing development team;
- product built by an agency;
- no-code / AI-generated first version;
- upcoming technical or commercial milestone.

It is especially useful when the company is facing one or more of these questions:

- Should we rebuild or evolve what we already have?
- Is the current architecture good enough for the next stage?
- What should the next 90 days of engineering actually focus on?
- What should we build internally vs buy?
- Where should AI genuinely be used?
- What technical risks could derail the next milestone?
- What team do we actually need?
- Are we ready to move from prototype to production?
- Can the current team execute the roadmap?
- Which technical assumptions should be validated before committing further?

---

# 2. When NOT to use the Sprint

The Sprint is not appropriate when:

- the company only has an idea;
- there is no meaningful validation;
- the problem is primarily commercial rather than technical;
- the company simply needs implementation capacity;
- the founder expects a complete product design for free;
- there is already strong senior technical ownership internally;
- the technical problem is already sufficiently understood to begin a Fractional CTO engagement directly.

The Sprint should exist because there is **real uncertainty worth resolving**.

Not because it is a mandatory sales step.

---

# 3. Commercial format

## Duration

**1–2 weeks**

Typical working model:

- 3–5 focused working sessions;
- asynchronous review of product, code and documentation;
- targeted technical investigation;
- one final decision session.

## Price hypothesis

**€2,500–€3,500 fixed**

The price is based on the outcome, not hours consumed.

## Payment

Recommended:

**100% upfront**

or:

**50% at start / 50% at final delivery**

For an initial productised offer, 100% upfront is cleaner.

---

# 4. What the founder gets

At the end of the Sprint, the founder receives:

1. **Product & Technical Brief**
2. **Current-State Technical Assessment**
3. **Recommended Architecture**
4. **Technical Risk Map**
5. **Build / Buy / Delay Decisions**
6. **90-Day Engineering Roadmap**
7. **Team & Hiring Recommendation**
8. **Technical Prototype**, when required
9. **Executive Decision Summary**
10. **Final walkthrough and Q&A**

Everything should be usable immediately.

---

# 5. Sprint structure

## Phase 0 — Pre-Sprint Intake

Before the first meeting, collect only what already exists.

### Company context

- Company description.
- Target customer.
- Current stage.
- Business model.
- Current commercial commitments.
- Important deadlines.

### Product

- Product URL.
- Figma / prototype.
- Existing PRD.
- Roadmap.
- Customer feedback.
- Pilot requirements.

### Engineering

Where available:

- Repository access.
- Architecture documentation.
- Infrastructure overview.
- Deployment setup.
- APIs / integrations.
- Data model.
- Existing backlog.
- Incident history.
- Technical debt notes.

### Team

- Current engineers.
- Seniority.
- Internal vs external.
- Responsibilities.
- Agencies / freelancers involved.

The rule:

> **Do not ask the founder to create documentation just to begin the Sprint.**

Work with the reality that exists.

---

# 6. Session 1 — Business, Product & Constraints

## Duration

60–90 minutes.

## Objective

Understand what the company is actually trying to achieve before discussing architecture.

### Questions

#### Business

- What does the company need to achieve in the next 3–6 months?
- What business milestone matters most?
- What happens if that milestone is missed?
- What customer or commercial commitments already exist?
- What is currently limiting progress?

#### Product

- Who is the user?
- What workflow creates value?
- What has already been validated?
- What assumptions are still unproven?
- What is currently live?
- What is still manual behind the scenes?

#### Constraints

- Deadline.
- Budget.
- Team.
- Existing technology.
- Security / compliance.
- External integrations.
- Customer commitments.
- Operational limitations.

## Output

Draft:

**Product & Technical Brief**

---

# 7. Product & Technical Brief

Keep this short.

Ideally 2–4 pages.

## Template

### Business objective

What needs to happen?

### User / customer

Who are we building for?

### Core workflow

What is the smallest meaningful workflow?

### Current state

What exists now?

### Target state

What needs to exist after the next phase?

### Constraints

What limits our choices?

### Commercial commitments

What has already been promised?

### Assumptions

What are we treating as true but have not yet validated?

### Success conditions

What must be true 90 days from now?

---

# 8. Phase 2 — Technical Assessment

Review the current system only to the depth required to make decisions.

This is not a full code audit.

Focus on:

## Architecture

- Main components.
- Boundaries.
- Data flows.
- Critical dependencies.
- Third-party services.
- AI/model dependencies.
- Integration points.

## Infrastructure

- Hosting.
- Environments.
- Deployment.
- Backups.
- Secrets.
- Observability.
- Production access.

## Codebase

Sample strategically.

Do not attempt to review everything.

Look for:

- architectural patterns;
- maintainability;
- coupling;
- tests;
- error handling;
- security risks;
- deployment confidence;
- obvious scaling risks.

## Product/engineering alignment

Check:

- whether architecture matches current product needs;
- whether product complexity exceeds business maturity;
- whether hidden manual work exists;
- whether roadmap assumptions are technically realistic.

---

# 9. Current-State Assessment

Do not produce a 50-page audit.

Use a simple model:

## Keep

Things that are good enough.

## Improve

Things that matter but do not block progress.

## Change

Things that create significant risk.

## Unknown

Things that require validation before making a decision.

This should protect the company from unnecessary rewrites.

---

# 10. Session 2 — Architecture & Key Decisions

## Objective

Define an architecture appropriate for the company's next stage.

Not the architecture they may need in five years.

Principle:

> **Design for the next 12–24 months, not hypothetical infinite scale.**

Evaluate:

- frontend;
- backend;
- data;
- authentication;
- permissions;
- integrations;
- infrastructure;
- observability;
- AI components;
- security;
- asynchronous workflows;
- deployment.

---

# 11. Architecture Deliverable

Use one visual diagram plus decision notes.

The founder should be able to understand:

- what the main components are;
- how they communicate;
- where data lives;
- what external systems exist;
- where AI sits;
- what is operationally critical.

Avoid architecture theatre.

The diagram is a communication tool, not a technical art project.

---

# 12. Architecture Decision Log

For every important decision:

## Decision

What are we choosing?

## Why

Why is this appropriate now?

## Alternatives considered

What else could we have done?

## Why not

Why are we not choosing those alternatives?

## Revisit when

What condition would justify changing this decision later?

Example:

### Authentication

**Decision:** Use managed authentication.

**Why:** Authentication is not a strategic differentiator and the current team should focus on product.

**Revisit when:** Specific enterprise requirements make the managed option insufficient.

This avoids decisions becoming permanent dogma.

---

# 13. AI Decision Framework

For AI products, explicitly classify every important workflow.

## Deterministic

Use traditional software when:

- correctness must be guaranteed;
- rules are known;
- behaviour should be predictable;
- validation is straightforward.

## Probabilistic

Use AI when:

- interpretation is required;
- input is unstructured;
- ambiguity is inherent;
- the system can tolerate controlled uncertainty;
- evaluation criteria exist.

## Hybrid

Often the preferred option.

AI produces or interprets.

Deterministic systems constrain, validate or execute.

For each AI use case ask:

- What does the model actually add?
- What happens when it is wrong?
- Can output quality be evaluated?
- What data does it access?
- Does latency matter?
- Does cost matter?
- Is human review required?
- Does the workflow require an agent or just a model call?

---

# 14. Technical Risk Map

Every Sprint should identify the risks most likely to invalidate the plan.

Do not list every possible risk.

Prioritise.

## Dimensions

### Product risk

Are we building the correct workflow?

### Technical feasibility

Can the system realistically do what is expected?

### Data

Is the required data available and usable?

### AI quality

Can output quality reach an acceptable level?

### Integration

Are critical third parties reliable and accessible?

### Security

Could a shortcut create unacceptable exposure?

### Scalability

Is there a foreseeable bottleneck within the next stage?

### Team

Can the current team execute this?

### Vendor

Is knowledge or infrastructure controlled by a third party?

### Delivery

Are deadlines based on unrealistic assumptions?

---

# 15. Risk scoring

For each major risk:

| Risk | Probability | Impact | Confidence | Action |
| --- | --- | --- | --- | --- |
| Example | High | High | Low | Prototype before committing |

Possible actions:

- Accept.
- Mitigate.
- Prototype.
- Delay.
- Remove from scope.
- Buy instead of build.
- Gather more data.

---

# 16. Prototype Decision

A prototype should only be built when it resolves an important uncertainty.

Ask:

> **What decision will this prototype allow us to make?**

If there is no meaningful decision behind it, do not prototype.

Good prototype candidates:

- LLM workflow quality.
- Semantic retrieval.
- Agent tool usage.
- Computer vision feasibility.
- External API limitations.
- Data processing pipeline.
- High-risk integration.
- Performance assumption.
- Migration strategy.

Bad prototype candidates:

- Login.
- CRUD.
- Admin interface.
- Standard dashboard.
- Conventional REST API.

Principle:

> **Prototype uncertainty, not functionality.**

---

# 17. Prototype Deliverable

A Sprint prototype does not need production polish.

It should answer:

### Hypothesis

What are we testing?

### Acceptance criteria

What result would make us proceed?

### Approach

What did we test?

### Result

What happened?

### Recommendation

Proceed / Change / Abandon.

The code may later evolve into production code, but that is not required.

---

# 18. Build / Buy / Delay Matrix

Every significant capability should be classified.

## Build

Build internally when:

- it creates differentiation;
- control matters;
- existing products do not fit;
- integration requirements justify it.

## Buy

Buy when:

- the capability is commoditised;
- reliability is more important than differentiation;
- vendor cost is lower than engineering cost;
- internal implementation would distract the team.

## Delay

Delay when:

- it is not required for the next milestone;
- assumptions are not yet validated;
- implementation creates premature complexity.

Optional fourth category:

## Manual

Keep manual temporarily when automation is not yet justified.

This is particularly useful for early-stage companies.

---

# 19. Scope definition

Create three scopes.

## NOW

Required to achieve the next business milestone.

## NEXT

Likely valuable after initial validation.

## LATER

Part of the vision but not justified yet.

Anything without strong justification should default away from NOW.

---

# 20. 90-Day Engineering Roadmap

The roadmap should be outcome-based.

Not a giant feature backlog.

## Month 1 — Foundations / De-risking

Examples:

- validate risky assumptions;
- resolve architecture issues;
- establish environments;
- stabilise critical workflows;
- define engineering standards.

## Month 2 — Core Delivery

Examples:

- build core workflow;
- integrate external systems;
- ship pilot;
- introduce observability;
- evaluate AI quality.

## Month 3 — Validation / Scale Preparation

Examples:

- expand pilot;
- remove operational bottlenecks;
- harden system;
- respond to usage;
- prepare next hires.

Each phase should contain:

- objective;
- major deliverables;
- dependencies;
- risks;
- owner;
- definition of success.

---

# 21. Team Plan

Answer:

> **What is the smallest engineering team capable of executing this roadmap well?**

Evaluate:

- existing people;
- capability gaps;
- seniority gaps;
- internal vs contractor;
- developer vs Tech Lead;
- product ownership;
- design;
- DevOps/platform needs.

Output:

## Keep

Current roles that fit.

## Develop

People who can grow into the required responsibility.

## Hire

Missing capability that genuinely needs another person.

## Externalise

Specialised work that does not justify an internal role.

## Not yet

Roles that would be premature.

---

# 22. Hiring sequence

Do not only recommend roles.

Recommend order.

Example:

**Now:** Senior full-stack engineer.

**Next:** Product/Design capability.

**Later:** Dedicated infrastructure engineer.

Explain:

- why;
- what problem the hire solves;
- what success looks like;
- what not to hire yet.

---

# 23. Delivery model

Where relevant, recommend lightweight engineering practices.

Possible elements:

- scope definition;
- capacity-based planning;
- Definition of Done;
- peer review;
- testing expectations;
- CI/CD;
- environment strategy;
- production monitoring;
- release process;
- incident ownership.

Only prescribe what the company actually needs.

A three-person startup does not need the operating model of a 100-person engineering organisation.

---

# 24. Executive Decision Summary

This may be the most important deliverable.

Maximum:

**1–2 pages.**

The founder should be able to forward this to:

- co-founders;
- investors;
- board;
- team.

Structure:

## Where we are

Short diagnosis.

## Where we need to get

Next meaningful milestone.

## Three key decisions

The decisions with greatest leverage.

## Three main risks

What could derail the plan.

## What we should do in the next 90 days

High-level sequence.

## Team needed

What engineering capacity is required.

## Recommendation

One clear recommendation.

---

# 25. Final session

## Duration

60–90 minutes.

Participants:

- founder;
- relevant co-founders;
- Product;
- technical lead where useful.

Agenda:

### 1. Diagnosis

What did we learn?

### 2. Architecture

What system makes sense?

### 3. Risks

What matters most?

### 4. Decisions

Build / Buy / Delay.

### 5. 90-day roadmap

What happens next?

### 6. Team

Who executes it?

### 7. Recommendation

What is the appropriate next operating model?

---

# 26. Possible final recommendations

The Sprint does **not** always end with:

> Hire me as Fractional CTO.

Possible recommendations:

### A. Founder + current team can execute

No ongoing engagement required.

### B. Use a specific specialist/vendor

Fractional CTO unnecessary.

### C. Hire a senior engineer

Technical ownership gap is narrower than expected.

### D. Hire a full-time CTO

The company has already reached the point where fractional ownership is insufficient.

### E. Fractional CTO

Senior technical ownership is needed, but not full-time.

### F. Fractional CTO + Build

The company needs ownership plus direct de-risking of important technical work.

Being willing to recommend A–D makes E/F more credible.

---

# 27. Conversion into Fractional CTO

If ongoing ownership is justified, the final recommendation can include:

## First 90 days

### Month 1

- own technical roadmap;
- resolve architecture risks;
- establish engineering operating model.

### Month 2

- drive delivery;
- mentor team;
- hire where required.

### Month 3

- increase team autonomy;
- prepare next technical stage;
- decide whether to extend / hire permanently / exit.

The Sprint deliverables become the starting point of the engagement.

There should be no duplicated discovery work.

---

# 28. What is explicitly out of scope

Unless separately agreed:

- complete codebase audit;
- penetration testing;
- legal/compliance certification;
- full UX research;
- full product design;
- implementation of the complete roadmap;
- routine feature development;
- detailed estimation of every backlog item;
- 24/7 operational support;
- long-term engineering management;
- recruiting execution beyond initial role definition / assessment.

Out-of-scope work can lead to a separate engagement.

---

# 29. Internal delivery checklist

## Before Sprint

- Fit confirmed.
- Payment received.
- NDA where needed.
- Access requested.
- Stakeholders identified.
- Key milestone understood.

## During Sprint

- Business objective confirmed.
- Product state understood.
- Architecture reviewed.
- Risks recorded.
- Critical uncertainty identified.
- Prototype decision made.
- Team capability reviewed.
- Build/Buy/Delay completed.
- Roadmap drafted.

## Before final meeting

- Recommendations internally coherent.
- No unresolved contradiction between architecture and roadmap.
- Risks prioritised.
- Recommendation is explicit.
- Documents readable by non-technical founder.

## After meeting

- Final pack delivered.
- Questions captured.
- Next-step recommendation confirmed.
- Fractional CTO proposal only if genuinely appropriate.

---

# 30. Success criteria

The Sprint succeeds when the founder can answer:

### Product

What are we building next?

### Scope

What are we deliberately not building?

### Architecture

How should the next version work technically?

### Risk

What could invalidate the plan?

### AI

Where does AI make sense and where doesn't it?

### Team

Who do we actually need?

### Roadmap

What should happen over the next 90 days?

### Investment

Where should engineering money go first?

### Ownership

Who should own technology after the Sprint?

If those answers are materially clearer than before, the Sprint created value.

---

# 31. Commercial promise

Do not promise:

> “We will design the perfect architecture.”

Promise:

> **In 1–2 weeks, you will have enough technical clarity to make the next 90 days of product and engineering decisions with confidence.**

Alternative:

> **Before you spend another three months building, make sure you're building the right system, in the right order, with the right team.**

---

# 32. Why this is valuable

A €3k Sprint should prevent one or more expensive mistakes:

- hiring the wrong engineer;
- unnecessary rebuild;
- months building the wrong scope;
- inappropriate AI architecture;
- excessive infrastructure;
- agency dependency;
- premature complexity;
- avoidable technical debt;
- committing to a customer deadline without technical evidence.

The economic argument is not:

> “You receive X hours of CTO work.”

It is:

> **You make a small investment before making much larger technical commitments.**

---

# 33. Internal principle

The Sprint should never become:

**consulting theatre.**

Every document must support a decision.

Every analysis must connect to:

- what we build;
- what we do not build;
- how we build;
- what we validate;
- who executes;
- what happens next.

If an output does not change a decision, remove it.
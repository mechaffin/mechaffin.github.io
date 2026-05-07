---
layout: case-study
title: "Scaling Bayesian Reasoning: Why I Chose Flatten-and-Infer First"
positioning: "Pragmatic decision-making under constraints"
date: 2026-03-04
status: draft
published: false
tracks: [dev]
series: nodalyze
series_order: 3
---

<!--
WRITING NOTES (delete before publishing)

Role in the series: decision record. Signals engineering judgment — the
ability to pick a pragmatic first implementation over a theoretically purer
one, and to communicate the migration path honestly.

What it proves: pragmatic decision-making under constraints.

This is a classic ADR (architecture decision record) written for a public
audience. Don't lose the ADR discipline just because it's a blog post —
explicit context, options considered, decision, consequences, migration path.

Structure:
- Context
  - Performance ceiling of monolithic exact inference (and what "monolithic"
    means here — the whole network compiled into one junction tree)
  - When the ceiling starts mattering (network size, CPT density, real-time
    UI constraints)
- Options considered
  - Monolithic exact inference (baseline, what we had)
  - Approximate inference (sampling methods — why not for this use case)
  - OOBN (object-oriented Bayesian networks) — what they are, what they buy,
    what they cost to implement
  - Flatten-and-infer — the chosen approach
  - Iterative boundary propagation — the eventual target, why deferred
- Decision: flatten-and-infer as first implementation
  - What "flatten" means in this context (the flattenNetwork helper in
    backend-client)
  - Why this is the right first step: unblocks composite networks without
    changing inference engine
  - What it doesn't solve: still hits the monolithic ceiling, just later
- Risks and fallback strategies
  - When flatten-and-infer stops being enough
  - Detection signals (inference latency, memory, practitioner experience)
- Migration path to iterative boundary propagation
  - Why this is the eventual target
  - What has to be true in the platform before that migration is cheap
  - What we can do now to not paint ourselves into a corner

Sources to pull from:
- backend-services docs / code for flattenNetwork
- Any research-projects work on inference scaling (reasoning-framework round 1?)

Possible artifacts:
- Options comparison table (complexity, performance, implementation cost)
- Flatten example: composite network -> flattened network
- Performance ceiling chart (monolithic vs. expected iterative)

Target length: 1,200-1,800 words. Stay disciplined — this is a decision
record, not a tutorial.
-->

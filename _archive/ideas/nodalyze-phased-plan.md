---
layout: case-study
title: "From Demo to Clinical Pilot: A No-Rework Phased Plan"
positioning: "Delivery discipline, prioritization, and risk management"
date: 2026-03-11
status: draft
published: false
tracks: [dev]
series: nodalyze
series_order: 4
---

<!--
WRITING NOTES (delete before publishing)

Role in the series: execution / leadership post. Signals the ability to
ship under real constraints — not just design systems but deliver them in
phases that each stand on their own.

Dev-track focus: delivery discipline, prioritization, risk management.

What it proves: delivery discipline, prioritization, risk management.

Structure:
- The problem: a platform with six workspaces and a clinical-pilot horizon
  cannot be built "all at once" — but every phased plan risks the trap of
  rework between phases
- The "no rework" contract
  - What "no rework" means: each phase is production-grade for its scope
  - What it does not mean: each phase does everything; it means what it
    does do, it does not have to be torn out
  - Why this matters for a small team / single-engineer build
- Phase progression: 0 -> 1 -> 2a -> 2b
  - What each phase delivers
  - Who the user is at each phase (developer, researcher, trained
    practitioner, clinical pilot participant)
  - What is deliberately deferred and why
- Explicit deferrals and their rationale
  - Multi-instance scaling (single-instance sufficient until pilot scale)
  - Server-backed persistence (file + IndexedDB sufficient for MVP)
  - Auth / user management (deferred to institutional deployment)
  - Others from nodalyze INTENT.md boundaries
- Risk register
  - Technical: inference ceiling, annotation fatigue, UI scale
  - Delivery: scope creep, domain-package dependency, backend coupling
  - Clinical: validation burden, practitioner onboarding, data handling
- Mitigation strategies tied to the phase structure

Sources to pull from:
- nodalyze INTENT.md (boundaries section)
- platform design docs (phase roadmap)
- any explicit deferral notes in docs/platform

Possible artifacts:
- Phase progression diagram (workspaces enabled per phase)
- Deferrals table (what, why deferred, when revisited)
- Risk register (likelihood, impact, mitigation, phase)

Target length: 1,200-1,800 words.
-->

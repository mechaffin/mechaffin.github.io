---
layout: case-study
title: "Designing a Triggered Annotation System for Explainable Inference"
positioning: "Data modeling, runtime logic, and explainability design"
date: 2026-02-25
status: draft
published: false
tracks: [dev]
series: nodalyze
series_order: 2
---

<!--
WRITING NOTES (delete before publishing)

Role in the series: first deep-dive. Core technical differentiator. This is
where a reader who clicked through from the overview decides whether the
engineering is real.

What it proves: data modeling, runtime logic, explainability design.

Structure:
- The problem: probabilistic inference is opaque; numbers without context are
  useless to practitioners
- The 3 annotation categories
  - insight (triggered passive feed — surfaces when conditions are met)
  - provenance (attribution and reference — where does this claim come from)
  - constraint (modifies platform behavior — gating, warnings, overrides)
- Path-addressing design: why canonical paths matter, how they compose with
  the network structure, how they keep annotations stable across network edits
- Trigger types and evaluation semantics
  - condition trigger shapes
  - when triggers evaluate (evidence change, posterior change, session events)
  - how firing is debounced / ordered
- How this supports provenance, gap alerts, and workflow gating
- Domain-agnostic vs. domain-specific: categories are structural, annotation
  types within them are domain-defined

Sources to pull from:
- nodalyze/INTENT.md (design principles #5 — domain-agnostic annotations)
- nodalyze types package (annotation type definitions)
- platform docs on triggers

Possible artifacts:
- Category/type hierarchy diagram
- Path addressing example (before/after a network edit)
- Trigger evaluation flow diagram
- Annotation lifecycle in a session

Target length: 1,500-2,500 words. This is the depth post — don't undersell it.
-->

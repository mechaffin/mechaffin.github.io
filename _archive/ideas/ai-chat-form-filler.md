---
layout: case-study
title: "One AI Chat, Any Form: A Schema-Pack Architecture"
positioning: "Turning a domain-specific AI editor into a schema-driven engine"
date: 2026-04-23
status: draft
published: false
tracks: [dev]
stack: [React 19, TypeScript, Zustand, Claude tool use, Zod]
---

<!--
WRITING NOTES (delete before publishing)

Write this AFTER the schema-pack refactor lands in model-card-studio.
Until then, the app is a model-card editor that happens to be generic
under the hood — the story is visible but not demonstrated. After the
refactor (and especially after a second pack ships), the story is
"I built an engine and proved it by running two packs through it."

Source doc for the technical plan this post documents:
alster-built/model-card-studio/docs/refactor-to-schema-pack.md

What it proves: infrastructure mindset. Not "I built an app";
"I built an engine, and the app is one pack running on it."
Pairs with the frontend-toolkit case study as the proof that the
toolkit's runtime-schema stance is not just theoretical — a real
product exercises it end-to-end across two domains.

Strategic role:
- Companion to frontend-toolkit.md. That post makes the
  architectural claim; this one shows the claim running in a real
  product twice.
- Replaces the originally-planned single-purpose "Model Card Studio"
  companion post. The refactored app is the stronger story.

Structure:
- Frame: an AI chat that asks structured questions, renders forms
  inline when it needs user input, and writes results to a
  live-visible document. For one domain, that's an app. For any
  domain, it's an engine.
- Core claim: three things — the schema, the option sets, and the
  domain copy — are the only domain-specific parts. Everything else
  (chat loop, tool handler, side panel, persistence, nav rail,
  export machinery, system prompt builder) is generic.
- The SchemaPack interface. One module per domain, carrying:
  sections, optionSets, titleField, initialGreeting, exporters,
  promptExtras, icons, labels. Show the interface.
- Tool calls as the AI-UX primitive:
  - set_field(path, value) — direct assignment, validated on write
  - open_form(field_ids, initial_values) — inline FormRenderer in
    the chat message; user edits and submits
  - ask_choice(label, options) — one-click branching with a
    "Something else?" escape hatch
  Each maps cleanly to a generic pack-aware handler.
- The generic system prompt builder. Synthesizes worked examples
  from the pack's schema (one text field, one list field, one
  cross-referenced field). promptExtras carries the
  cross-references and domain vocabulary the builder can't infer.
- The markdown exporter. A generic section renderer with optional
  per-section overrides a pack can register — needed for
  structural un-flattening like the model-card case where
  factor names become column headers in quantitative_analyses.
- Authoring packs from existing sources. Hand-written,
  JSON Schema (fromJsonSchema), Zod (fromZodSchema), or ejected
  from a converter and hand-tweaked. One SectionDefinition[]
  target, four sources.
- The second pack as proof. Scaffolded a trivial second domain to
  force model-card assumptions out. Without this step the refactor
  is speculative.

Tradeoffs to surface honestly:
- Deferred the refactor until a second target schema existed.
  Generalizing before then abstracts over nothing — weakens the
  demo without strengthening anything concrete.
- Per-section markdown overrides leak pack knowledge into export
  code. Accepted — a purely generic exporter can't know that
  factor names become column headers in quantitative_analyses.
- Synthesized worked examples in the system prompt are
  lower-fidelity than hand-tuned ones. promptExtras closes the gap.
- IDB namespace migration needed (mcs:card:{id} →
  mcs:{pack.id}:card:{id}) to let multiple packs cohabit cleanly.

Sources to pull from:
- model-card-studio/docs/refactor-to-schema-pack.md (the plan)
- model-card-studio/docs/design-plan.md (pre-refactor architecture)
- model-card-studio/INTENT.md (validation-artifact framing)
- Post-refactor: packs/types.ts, packs/modelCard/, packs/<second>/
- frontend/INTENT.md (form-system completeness — every form
  renders through FormRenderer, with customFields as the only
  escape hatch)

Possible artifacts:
- SchemaPack interface code block
- Side-by-side: model-card pack and a second pack, both minimal
- Architecture diagram: generic core with a pluggable pack slot
- Screencast: same chat loop filling two different documents
- Flow diagram: user message → assistant tool_use (open_form) →
  inline FormRenderer in chat → submit → tool_result resumes the
  conversation with submitted values

Target length: 1,500-2,000 words. This is the core artifact of the
"infrastructure mindset" signal — give it room.

Prerequisites before writing:
- Steps 1-6 of refactor-to-schema-pack.md complete
- Second pack exists, runs, and persists without colliding with
  the model-card pack
- IDB namespacing migration tested
- Converter(s) from JSON Schema and/or Zod — optional, can be
  mentioned as "authoring paths that stay open" rather than shown
  in-article if they aren't built yet

Title/positioning are working. Shorten the title before publishing
if a sharper one emerges during drafting.
-->

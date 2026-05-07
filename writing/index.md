---
layout: page
title: Writing
permalink: /writing/
---

Case studies and writeups. Each one takes a single system, decision, or failure pattern and walks through the thinking that shaped it.

{% assign published = site.case_studies | where: "status", "published" | sort: "date" | reverse %}
{% assign drafts = site.case_studies | where: "status", "draft" | sort: "date" | reverse %}

{% if published.size > 0 %}

## Published

{% for s in published %}

- [{{ s.title }}]({{ s.url }}) — {{ s.positioning }}
  {% endfor %}
  {% endif %}

{% if drafts.size > 0 %}

## In progress

{% for s in drafts %}

- **{{ s.title }}** — {{ s.positioning }} _(draft)_
  {% endfor %}
  {% endif %}

{% if published.size == 0 and drafts.size == 0 %}
Case studies are in progress. Check back soon.
{% endif %}

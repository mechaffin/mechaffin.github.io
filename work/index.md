---
layout: page
title: Work
---

This page highlights how I think about work, not just where I’ve worked.

My background is in front-end development and UX-focused engineering, but the value I bring is in making sense of complex or ambiguous problem spaces—then shaping them into something clear, workable, and usable.

For a full professional history, see my **[resume](resume)**.

## Experience audits

I notice moments where user experiences quietly break down—not because of missing features, but because systems don’t fully account for how people actually use them.

These short experience audits make that thinking visible.

Each piece looks at a real-world interaction, the human effort it creates, and how small, practical changes could reduce friction, confusion, or unnecessary work. The goal isn’t critique or redesign—it’s clarity.

{% for post in site.posts %}

- **[{{ post.title }}]({{ post.url }})** — {{ post.date | date: "%m/%d/%Y" }}
  <br>{{ post.excerpt | strip_html | truncate: 200 }}
  {% endfor %}

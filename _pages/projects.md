---
layout: page
title: Research Experience
permalink: /projects/
description: My research experience and selected projects.
nav: false
nav_order: 1
horizontal: false
---

<style>
.rcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:1.1rem;margin:.8rem 0 2rem}
.rcard{display:block;border:1px solid var(--global-divider-color,#e6e6e6);border-radius:10px;overflow:hidden;color:inherit;text-decoration:none;background:var(--global-bg-color,#fff);transition:box-shadow .2s,transform .2s}
.rcard:hover{box-shadow:0 6px 18px rgba(0,0,0,.14);transform:translateY(-2px)}
.rcard img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;margin:0}
.rcard .rc-body{padding:.6rem .8rem .8rem}
.rcard .rc-title{font-weight:700;font-size:.92rem;line-height:1.25;margin:0 0 .5rem}
.rcard .rc-tags{display:flex;flex-wrap:wrap;gap:.3rem}
.rcard .rc-tag{font-size:.7rem;background:rgba(127,127,127,.16);border-radius:999px;padding:.06rem .55rem;white-space:nowrap;opacity:.9}
/* Low-key projects list (de-emphasized). */
.proj-list{font-size:.92rem;color:var(--global-text-color-light);line-height:1.6;margin:.3rem 0 1.5rem;padding-left:1.2rem}
.proj-list li{margin-bottom:.4rem}
.proj-list strong{color:var(--global-text-color)}
</style>

<div class="rcards">
{% assign experience = site.projects | where: "category", "research-experience" | sort: "importance" %}
{% for p in experience %}<a class="rcard" href="{{ p.url | relative_url }}"><img src="{{ p.img | relative_url }}" alt="{{ p.title | escape }}"><div class="rc-body"><div class="rc-title">{{ p.title }}</div><div class="rc-tags">{% for k in p.keywords %}<span class="rc-tag">{{ k }}</span>{% endfor %}</div></div></a>{% endfor %}
</div>

<h2>Projects</h2>
<ul class="proj-list">
<li><strong>Tiny Pest Detection</strong> — a high-resolution crop-and-detect, YOLO-based pipeline for spotting 1–3 mm pests while preserving small-object detail.</li>
<li><strong>Watch-List Filtering for Financial Compliance</strong> — a BERT / CharacterBERT name-matching pipeline combining character-level representations with rule-based filtering for noisy name records.</li>
</ul>


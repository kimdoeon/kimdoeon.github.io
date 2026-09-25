---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 3
description: Curriculum Vitae
---

<style>
.cv-actions{margin:0 0 1.1rem;font-size:.9rem}
.cv-actions a.cv-btn{display:inline-block;padding:.35rem .8rem;border:1px solid var(--global-divider-color);border-radius:5px;color:var(--global-text-color);text-decoration:none}
.cv-actions a.cv-btn:hover{border-color:var(--global-theme-color);color:var(--global-theme-color)}
.cv-frame{width:100%;height:min(1150px,132vh);border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.cv-fallback{font-size:.9rem;color:var(--global-text-color-light)}
.cv-mobile-note{display:none;font-size:.9rem;color:var(--global-text-color-light)}
@media (max-width:575.98px){.cv-frame{display:none}.cv-mobile-note{display:block}}
</style>

<p class="cv-actions"><a class="cv-btn" href="{{ '/assets/pdf/cv.pdf' | relative_url }}" target="_blank" rel="noopener">Download PDF ↗</a></p>

<iframe class="cv-frame" src="{{ '/assets/pdf/cv.pdf' | relative_url }}#view=FitH" title="Curriculum Vitae — Doeon Kim">
  <p class="cv-fallback">Your browser cannot display the embedded PDF. <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}">Download it here</a>.</p>
</iframe>

<p class="cv-mobile-note">Tap <strong>Download PDF</strong> above to open my CV.</p>

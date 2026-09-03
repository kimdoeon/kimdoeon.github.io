---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="pub-filters" role="tablist" aria-label="Publication category filter">
<button type="button" class="active" data-cat="all">ALL</button>
<button type="button" data-cat="conference">CONFERENCE</button>
<button type="button" data-cat="journal">JOURNAL</button>
<button type="button" data-cat="patent">PATENT</button>
</div>

<div class="publications">

{% bibliography %}

</div>

<style>/* Year headings + their divider line: visible but a touch lighter/softer. */
.publications h2.bibliography{color:var(--global-text-color-light);border-top-color:var(--global-text-color-light);opacity:.55}
/* keep these two titles on one line: widen their content into the unused right column (badge unchanged) on wide screens, then no-wrap */
@media (min-width:992px){
#kim2025emfvit .col-sm-8,#kwon2024kiis .col-sm-8{flex:0 0 83.3333%;max-width:83.3333%}
#kim2025emfvit .title,#kwon2024kiis .title{white-space:nowrap}
}
/* patent: hide the bare date line under the authors (keep the note line below it) */
#kim2026patent .author + .periodical{display:none}
/* patent: no badge label (it only appears under the PATENT tab) */
.row:has(#kim2026patent) .abbr abbr{display:none}
/* bold the author's own name (inline so it isn't blocked by the static main.css cache hash) */
.publications ol.bibliography li .author>em{font-weight:bolder}
/* author line: Times New Roman serif; every co-author in the same subtle gray as linked coauthors (Jungyoon), own name stays dark (underlined) */
.publications ol.bibliography li .author{font-family:"Times New Roman",Times,Georgia,serif;color:var(--global-text-color-light)}
.publications ol.bibliography li .author>em{color:var(--global-text-color)}
/* larger left column (badge + thumbnail): 16.7% -> 20% on >=576px screens */
@media (min-width:576px){
.publications li .row > .col-sm-2.abbr{flex:0 0 20%;max-width:20%}
}
/* uniform thumbnails: every preview is a golden-ratio (1.618:1) box, image letterboxed on white */
.publications img.preview{max-width:100%;width:100%;aspect-ratio:1.618/1;height:auto;object-fit:contain;background:#fff}
/* patent: bare icon at the same golden-ratio footprint as the other thumbnails (no white box/shadow) */
.row:has(#kim2026patent) img.preview{background:transparent;box-shadow:none !important;border-radius:0;object-fit:contain}
/* aicity/lsvos: show the venue text only, without the auto-appended ", Aug 2026" date
   (months on those entries exist purely to pin the 2026 ordering) */
#lee2026aicity .periodical,#lee2026lsvos .periodical{font-size:0}
#lee2026aicity .periodical em,#lee2026lsvos .periodical em{font-size:0.9rem}
#lee2026aicity .periodical i,#lee2026lsvos .periodical i{font-style:italic}
/* preprint & under-review: no venue/date line at all */
#kim2026emfmap .periodical,#choi2026radiomap .periodical{display:none !important}
/* category filter buttons (default: ALL) */
.pub-filters{display:flex;gap:1.6rem;margin:.2rem 0 1.7rem;font-size:.85rem;letter-spacing:.07em}
.pub-filters button{background:none;border:0;padding:0 0 3px;cursor:pointer;font-weight:600;color:var(--global-text-color-light);border-bottom:2px solid transparent}
.pub-filters button:hover{color:var(--global-theme-color)}
.pub-filters button.active{color:var(--global-theme-color);border-bottom-color:var(--global-theme-color)}</style>

<script>
/* Category filter: map each bib entry key to a category; unmapped entries appear only under ALL.
   Year headings with no visible entries are hidden together with their list. */
(function () {
  var CATS = {
    kim2026csipose: "conference",
    lee2026aicity: "conference",
    lee2026lsvos: "conference",
    kim2025ceic: "conference",
    kwon2024kiis: "conference",
    kim2025emfvit: "journal",
    kim2026patent: "patent"
    /* kim2026emfmap (preprint), choi2026radiomap (under review): ALL only */
  };
  function apply(cat) {
    document.querySelectorAll(".publications ol.bibliography > li").forEach(function (li) {
      var key = null;
      for (var k in CATS) if (li.querySelector("#" + k)) { key = k; break; }
      if (!key) { var anyId = li.querySelector("[id]"); key = anyId ? anyId.id : null; }
      var show = cat === "all" ? CATS[key] !== "patent" : (CATS[key] === cat);
      li.style.display = show ? "" : "none";
    });
    document.querySelectorAll(".publications h2.bibliography").forEach(function (h2) {
      var ol = h2.nextElementSibling;
      var visible = ol ? Array.prototype.some.call(ol.children, function (li) { return li.style.display !== "none"; }) : false;
      h2.style.display = visible ? "" : "none";
      if (ol) ol.style.display = visible ? "" : "none";
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { apply("all"); });
  else apply("all");
  document.querySelectorAll(".pub-filters button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".pub-filters button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      apply(btn.dataset.cat);
    });
  });
})();
</script>

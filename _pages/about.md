---
layout: about
title: about
permalink: /
subtitle: Wireless sensing / Physics-grounded machine learning for RF

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: '<div class="profile-kw"><div class="kw-row"><span>🚀 Self-motivated</span><span>🤝 Collaborative</span></div><div class="kw-row"><span>🌱 Resilient</span></div></div>'

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: # blank: keep ALL news in the list (older items stay reachable by scrolling)

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<ul class="bio-list">
<li><strong>About me</strong><br>
I am a first-year Ph.D. student at <a href="https://ssu.ac.kr/" target="_blank" rel="noopener">Soongsil University</a>, working with <a href="https://vip.ssu.ac.kr/" target="_blank" rel="noopener">VIP Lab</a> and <a href="https://scientific-cloak-ac2.notion.site/SSU-SMART-AI-LAB-176525c18aa88055bcfed975ed81beed" target="_blank" rel="noopener">SmartAILab</a> under the supervision of Prof. Seongheum Kim and Prof. Seongsin Kim. I received my M.S. in Intelligent Semiconductors and B.E. in AI Convergence from Soongsil University.<br><span style="font-weight:700;color:var(--global-theme-color);">→ I am currently looking for a PhD program to join in Fall 2027.</span></li>
<li><strong>Research</strong><br>
My research focuses on <strong>wireless / RF sensing</strong> and <strong>physics-grounded machine learning</strong>. I aim to turn ambient radio signals, especially WiFi Channel State Information (CSI), into reliable human and scene perception systems, and to use <strong>ray-tracing-based RF simulation</strong> to study <strong>sim-to-real generalization</strong> across environments, devices, and deployment conditions.</li>
</ul>

<p class="contact-line" markdown="1">You can find my [cv](/cv/), or contact me at **ilsin205 [at] soongsil.ac.kr**.</p>

<style>
/* Research cards — self-contained (no Bootstrap), dark-mode friendly. */
.rcards{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:1.1rem;margin:.8rem 0 2rem}
.rcard{display:block;border:1px solid var(--global-divider-color,#e6e6e6);border-radius:10px;overflow:hidden;color:inherit;text-decoration:none;background:var(--global-bg-color,#fff);transition:box-shadow .2s,transform .2s}
.rcard:hover{box-shadow:0 6px 18px rgba(0,0,0,.14);transform:translateY(-2px)}
.rcard img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;margin:0}
.rcard .rc-body{padding:.6rem .8rem .8rem}
.rcard .rc-title{font-weight:700;font-size:.92rem;line-height:1.25;margin:0 0 .5rem}
.rcard .rc-tags{display:flex;flex-wrap:wrap;gap:.3rem}
.rcard .rc-tag{font-size:.7rem;background:rgba(127,127,127,.16);border-radius:999px;padding:.06rem .55rem;white-space:nowrap;opacity:.9}
/* Research Experience carousel: scroll-snap strip + arrows (cards reachable by swipe/scroll too). */
.rc-carousel{position:relative;margin:.8rem 0 2rem}
.rc-rail{display:flex;gap:1.1rem;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:.4rem .15rem;scrollbar-width:none;-ms-overflow-style:none}
.rc-rail::-webkit-scrollbar{display:none}
.rc-rail>.rcard{flex:0 0 calc((100% - 3.8rem) / 3);scroll-snap-align:start}
.rc-rail:focus-visible{outline:2px solid var(--global-hover-color);outline-offset:3px;border-radius:8px}
.rc-arrow{position:absolute;top:38%;transform:translateY(-50%);z-index:3;width:38px;height:38px;border-radius:50%;border:1px solid var(--global-divider-color,#ddd);background:var(--global-bg-color,#fff);color:var(--global-text-color,#111);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.20)}
.rc-prev{left:-6px}.rc-next{right:-6px}
.rc-arrow:hover{background:var(--global-hover-color,#eee)}
.rc-arrow:disabled{opacity:.3;cursor:default;pointer-events:none}
.rc-noscroll .rc-arrow{display:none}
@media(max-width:920px){.rc-rail>.rcard{flex:0 0 46%}}
@media(max-width:600px){.rc-rail>.rcard{flex:0 0 82%}}
@media(prefers-reduced-motion:reduce){.rc-rail{scroll-behavior:auto}}
/* Latest Publications: same left column width as the publications page, so thumbnails match in size. */
@media (min-width:576px){
.publications li .row > .col-sm-2.abbr{flex:0 0 20%;max-width:20%}
}
/* Slightly smaller profile photo on home. */
.profile img{width:82%;height:auto;display:block;margin-left:auto}
/* mobile (<576px, profile becomes full-width): center the photo + keyword chips
   instead of the desktop right-alignment (margin-left:auto). */
@media (max-width: 575.98px) {
.profile.float-right{margin-left:0}
.profile img{margin-right:auto}
.profile-kw{margin-left:auto !important;margin-right:auto !important}
}
/* Home title: "Doeon" in the theme red. */
h1.post-title .font-weight-bold{color:var(--global-theme-color)}
/* Capitalize the "News" / "Selected Publications" section headings. */
.post h2 a[href="/news/"], .post h2 a[href="/publications/"]{text-transform:capitalize}
/* Divider line (matches the nav-hover color) above home sections — but NOT between Research Experience & Interests (.rc-merge). */
.post h2:not(.bibliography):not(.rc-merge){border-top:2px solid var(--global-hover-color);border-top-color:color-mix(in srgb, var(--global-hover-color) 22%, transparent);padding-top:1.1rem}
/* Smaller social icons (cv / email / github / linkedin). */
.social .contact-icons{font-size:2.2rem}
/* Icons moved to the fixed footer: hide the bottom social block (icons + contact note) with CSS only, so the profile-photo mirror script can still clone .contact-icons from it. */
.social{display:none}
/* Social icons mirrored under the profile photo (cloned by JS below). */
.profile-contact-icons{margin-top:.7rem;text-align:center;font-size:1.7rem}
.profile-contact-icons a{margin:0 .4rem}
/* Bio list: bold label on first line, text below; roomy line-height + gap between items. */
.bio-list{line-height:1.7;margin:.4rem 0 1rem;padding-left:1.2rem}
.bio-list li{margin-bottom:1rem}
.bio-list li:last-child{margin-bottom:0}
/* Bio links (institutions): subtle gray like the author links, gray underline on hover. */
.bio-list a{color:var(--global-text-color-light);border-bottom:0 !important;text-decoration:none}
.bio-list a:hover{color:var(--global-text-color-light);border-bottom:0 !important;text-decoration:underline !important}
/* Contact line: flow right after the bio (don't clear the tall profile column). */
.contact-line{clear:none}
/* author line: Times New Roman serif; every co-author in the same subtle gray as linked coauthors (Jungyoon), own name stays dark (underlined) */
.publications ol.bibliography li .author{font-family:"Times New Roman",Times,Georgia,serif;color:var(--global-text-color-light)}
.publications ol.bibliography li .author>em{color:var(--global-text-color)}
/* Latest Publications thumbnails: same golden-ratio white-letterboxed boxes as the publications page */
.publications img.preview{max-width:100%;width:100%;aspect-ratio:1.618/1;height:auto;object-fit:contain;background:#fff}
/* preprint & under-review entries: no venue/date line (matches the publications page) */
#kim2026emfmap .periodical,#choi2026radiomap .periodical{display:none !important}
/* News scroll window: hairline translucent scrollbar, shown only while hovering the news box
   (translucent white in dark mode; a milky translucent gray in light mode, where pure white would vanish). */
.news .table-responsive{scrollbar-width:thin;scrollbar-color:transparent transparent}
.news .table-responsive:hover{scrollbar-color:rgba(220,220,220,.65) transparent}
.news .table-responsive::-webkit-scrollbar{width:3px}
.news .table-responsive::-webkit-scrollbar-track{background:transparent}
.news .table-responsive::-webkit-scrollbar-thumb{background:transparent;border-radius:999px}
.news .table-responsive:hover::-webkit-scrollbar-thumb{background:rgba(220,220,220,.65)}
html[data-theme="dark"] .news .table-responsive:hover{scrollbar-color:rgba(255,255,255,.55) transparent}
html[data-theme="dark"] .news .table-responsive:hover::-webkit-scrollbar-thumb{background:rgba(255,255,255,.55)}
/* personal keyword chips */
.profile-kw{width:82%;margin:.55rem 0 .15rem auto;display:flex;flex-direction:column;align-items:center;gap:.4rem}
.kw-row{display:flex;justify-content:center;gap:.4rem}
.profile-kw span{font-family:Roboto,sans-serif;font-size:.7rem;color:#000;background:#fff;border:0;border-radius:999px;padding:.22rem .7rem;box-shadow:0 2px 6px rgba(0,0,0,.18);white-space:nowrap}
/* rename the home selected-papers heading to "Latest Publications" (server-side, no JS) */
.post h2 a[href$="/publications/"]{visibility:hidden;position:relative}
.post h2 a[href$="/publications/"]::after{content:"Latest Publications";visibility:visible;position:absolute;left:0;top:0;white-space:nowrap}
.post h2 a[href$="/publications/"]:hover::after{text-decoration:underline}
/* bold the author's own name (inline so it isn't blocked by the static main.css cache hash) */
.publications ol.bibliography li .author>em{font-weight:bolder}
</style>

<h2 style="margin-top:2.5rem;clear:both;">Research Experience</h2>
<div class="rc-carousel">
<button class="rc-arrow rc-prev" type="button" aria-label="Previous research cards"><svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
<div class="rc-rail" role="region" aria-label="Research experience cards" tabindex="0">
{% assign experience = site.projects | where: "category", "research-experience" | sort: "importance" %}
{% for p in experience %}<a class="rcard" href="{{ p.url | relative_url }}"><img src="{{ p.img | relative_url }}" alt="{{ p.title | escape }}"><div class="rc-body"><div class="rc-title">{{ p.title }}</div><div class="rc-tags">{% for k in p.keywords %}<span class="rc-tag">{{ k }}</span>{% endfor %}</div></div></a>{% endfor %}
</div>
<button class="rc-arrow rc-next" type="button" aria-label="Next research cards"><svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
</div>
<script>
(function(){document.querySelectorAll('.rc-carousel').forEach(function(c){
var rail=c.querySelector('.rc-rail'),prev=c.querySelector('.rc-prev'),next=c.querySelector('.rc-next');
if(!rail||!prev||!next)return;
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function update(){var ns=rail.scrollWidth<=rail.clientWidth+4;c.classList.toggle('rc-noscroll',ns);rail.tabIndex=ns?-1:0;prev.disabled=rail.scrollLeft<=4;next.disabled=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-4;}
function go(d){var card=rail.querySelector('.rcard');if(!card)return;var st=getComputedStyle(rail);var gap=parseFloat(st.columnGap||st.gap)||0;rail.scrollBy({left:d*2*(card.offsetWidth+gap),behavior:rm?'auto':'smooth'});}
prev.addEventListener('click',function(){go(-1);});next.addEventListener('click',function(){go(1);});
rail.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
});})();
</script>

<h2 class="rc-merge" style="margin-top:1.5rem;">Research Interests</h2>
<div class="rcards">
<a class="rcard" href="{{ '/research-interests/#wireless-perception' | relative_url }}"><img src="{{ '/assets/img/interests/wp-sense-thumb3.jpg' | relative_url }}" alt="Wireless Perception"><div class="rc-body"><div class="rc-title">Wireless Perception</div><div class="rc-tags"><span class="rc-tag">WiFi-CSI</span><span class="rc-tag">mmWave Radar</span><span class="rc-tag">3D Human Pose</span></div></div></a>
<a class="rcard" href="{{ '/research-interests/#rf-simulation' | relative_url }}"><img src="{{ '/assets/img/interests/rt-sim-thumb5.jpg' | relative_url }}" alt="RT-Based Synthetic Data Generation"><div class="rc-body"><div class="rc-title">RT-Based Synthetic Data Generation</div><div class="rc-tags"><span class="rc-tag">Ray Tracing</span><span class="rc-tag">Synthetic RF Data</span><span class="rc-tag">Sim-to-Real</span></div></div></a>
<a class="rcard" href="{{ '/research-interests/#cross-domain' | relative_url }}"><img src="{{ '/assets/img/interests/cross-domain-thumb.jpg' | relative_url }}" alt="Cross-Domain Generalization"><div class="rc-body"><div class="rc-title">Cross-Domain Generalization</div><div class="rc-tags"><span class="rc-tag">Domain Shift</span><span class="rc-tag">RF Self-Supervised</span><span class="rc-tag">Generalization</span></div></div></a>
</div>

<script>
/* News box: keep every item in the list but size the scroll window to exactly the
   first 4 rows (hover + wheel scrolls to older news). Re-measured on load for fonts. */
(function () {
  function capNews() {
    try {
      var box = document.querySelector(".news .table-responsive");
      if (!box) return;
      var rows = box.querySelectorAll("tr");
      if (rows.length > 4) {
        var h = rows[4].getBoundingClientRect().top - rows[0].getBoundingClientRect().top;
        box.style.maxHeight = Math.ceil(h) + "px";
        box.style.overflowY = "auto";
      }
    } catch (e) {}
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", capNews);
  else capNews();
  window.addEventListener("load", capNews);
})();
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Doeon Kim",
  "alternateName": ["김도언", "Kim Doeon", "Do-eon Kim"],
  "url": "https://kimdoeon.github.io/",
  "image": "https://kimdoeon.github.io/assets/img/prof_pic.jpg",
  "jobTitle": "Researcher",
  "affiliation": {
    "@type": "CollegeOrUniversity",
    "name": "Soongsil University",
    "alternateName": "숭실대학교",
    "url": "https://ssu.ac.kr/"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Soongsil University",
    "alternateName": "숭실대학교"
  },
  "knowsAbout": ["Wireless sensing", "WiFi CSI", "RF ray-tracing simulation", "Self-supervised learning", "3D human pose estimation", "무선 센싱", "WiFi 센싱"],
  "sameAs": [
    "https://scholar.google.com/citations?user=9ZV9_yMAAAAJ",
    "https://github.com/kimdoeon",
    "https://www.linkedin.com/in/kimdoeon"
  ]
}
</script>

<script>
/* The about (home) layout omits the navbar brand; add "Doeon Kim" at the navbar's far left so it matches every other page. */
(function () {
  var c = document.querySelector("#navbar > .container");
  if (c && !c.querySelector(".navbar-brand")) {
    var a = document.createElement("a");
    a.className = "navbar-brand title font-weight-lighter";
    a.href = "/";
    a.innerHTML = '<span class="font-weight-bold">Doeon</span> Kim';
    c.insertBefore(a, c.firstChild);
  }
  // Mirror the social icons under the profile photo.
  var icons = document.querySelector(".social .contact-icons");
  var profile = document.querySelector(".profile");
  if (icons && profile && !profile.querySelector(".profile-contact-icons")) {
    var clone = icons.cloneNode(true);
    clone.className = "contact-icons profile-contact-icons";
    profile.appendChild(clone);
  }
})();
</script>


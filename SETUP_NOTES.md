# Setup & deployment — kimdoeon.github.io

## 1) Deploy (GitHub Pages)
1. Create a PUBLIC repo named exactly **`kimdoeon.github.io`** under github.com/kimdoeon.
2. Push this folder (main branch).
3. Repo Settings -> Pages -> Source: **GitHub Actions** (al-folio ships the workflow).
4. Site goes live at https://kimdoeon.github.io
   (Local preview is optional and needs Ruby+Jekyll: `bundle install && bundle exec jekyll serve`.)

## 2) Visitor-location tracking (your main goal)
**GA4 (recommended):** analytics.google.com -> create Property + Web stream for https://kimdoeon.github.io -> copy Measurement ID `G-XXXXXXXXXX` -> paste in `_config.yml` under `analytics: -> google:` -> push. Then GA4 -> Reports -> Realtime / Geo shows approximate city/region/country.

**UTM links (most reliable for cold emails):** tag the link per lab, e.g.
`https://kimdoeon.github.io/?utm_source=email&utm_campaign=phd2027&utm_content=upenn_waves`
GA4 -> Acquisition shows which campaign/content was clicked; a `mail.google.com` referrer means the click came from your email.

**Optional public map:** embed a MapMyVisitors/ClustrMaps widget in the footer.

**Honest caveats:** city is IP-based and approximate (metro/ISP). VPN / Apple Private Relay / university proxies can hide or misplace it. It can hint "someone from Philadelphia visited" but cannot prove a specific professor did. Add a one-line privacy note in the footer.

## 3) TODO before sending the link
- [ ] Paste real GA4 ID in `_config.yml`.
- [ ] Create Google Scholar profile -> add `scholar_userid:` in `_data/socials.yml`.
- [ ] (opt) LinkedIn handle in `_data/socials.yml`.
- [ ] CONFIRM co-authors for the HRFormer EMF paper (`kim2026hrformeremf` in papers.bib) — currently only "Doeon Kim and Seongsin Kim".
- [ ] (polish) Add teaser figures to `assets/img/` and `preview={file.png}` per bib entry for visual cards.
- [ ] DOUBLE-BLIND: ECCV/NeurIPS are anonymous review. Title + "under review" is fine; do NOT post full PDFs/arXiv unless the venue policy allows during review.
- [ ] (opt) Custom domain (doeonkim.com) via Settings -> Pages.

## Changes from stock al-folio
config(name/url/baseurl/keywords/desc/favicon/GA4 placeholder), about.md(bio+hook), papers.bib(6 papers, 4 selected), socials.yml(email/GitHub/CV), cv.md(embeds real CV PDF), _news(4 items), prof_pic.jpg(headshot), cv.pdf(CV); disabled nav for blog/projects/repositories/teaching/profiles/dropdown; removed demo posts/projects/books.

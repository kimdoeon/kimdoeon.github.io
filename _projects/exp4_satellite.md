---
layout: page
title: Domain-Adaptive Satellite AI for Child-Center Site Prioritization
description:
img: assets/img/interests/exp-satellite2.jpg
importance: 5
keywords: [Domain Adaptation, Satellite Imagery, Humanitarian ML]
category: research-experience
---

<style>
.container.mt-5{max-width:1100px}
h3{margin-top:4rem;margin-bottom:1.4rem;font-weight:700}
.sat-fig{display:block;max-width:720px;width:100%;margin:1rem auto .3rem;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.sat-wide{max-width:980px}
.sat-cap{display:block;text-align:center;font-size:.8rem;color:var(--global-text-color-light);margin:.4rem auto 1.8rem;max-width:840px;line-height:1.4}
.dg-tbl{font-size:.82rem;border-collapse:collapse;width:100%;max-width:760px;margin:.4rem auto 1.6rem}
.dg-tbl th,.dg-tbl td{border-bottom:1px solid var(--global-divider-color);padding:.36rem .55rem;text-align:center}
.dg-tbl th:first-child,.dg-tbl td:first-child{text-align:left}
.dg-tbl thead th{border-bottom:2px solid var(--global-divider-color)}
.dg-tbl tr.tgt td{font-weight:700;background:rgba(40,140,60,.10)}
.container.mt-5 li{font-size:1.05rem;line-height:1.65}
.treports{font-size:.85rem;color:var(--global-text-color-light);line-height:1.55;margin-top:3rem}
.treports h4{font-size:.95rem;font-weight:700;color:var(--global-text-color);margin:0 0 .55rem}
.treports p{margin:0 0 .5rem;padding-left:2.6rem;text-indent:-2.6rem}
.treports strong{color:var(--global-text-color)}
.dg-row{display:flex;gap:1.4rem;align-items:center;margin:1.2rem 0 1.8rem}
.dg-media{flex:0 0 490px;margin:0}
.dg-media img{width:100%;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff;display:block}
.dg-table-wrap{flex:1 1 auto;min-width:0}
.dg-row .dg-tbl{max-width:none;width:100%;margin:0}
.ex-row{display:flex;gap:1.2rem;align-items:flex-start;margin:1rem auto 1.4rem;max-width:1000px}
.ex-fig{flex:1 1 0;min-width:0;margin:0}
.ex-fig img{width:100%;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff;display:block}
.ex-fig .sat-cap{margin:.55rem 0 0;max-width:none}
@media(max-width:760px){.ex-row{flex-direction:column}}
@media(max-width:900px){.dg-row{flex-direction:column}.dg-media{flex:none;width:100%;max-width:560px;margin:0 auto}}
#navbar .nav-item.dropdown>.nav-link.dropdown-toggle{font-weight:bolder;color:var(--global-theme-color)}
#navbar .nav-item.dropdown>.nav-link.dropdown-toggle:hover{color:var(--global-hover-color)}
</style>

<p style="font-size:.88rem;color:var(--global-text-color-light);margin:0 0 1.8rem;">Sep 2025 – present</p>

To support deployment in a target region where labeled examples are scarce, I built a **domain-aware transfer pipeline** that combines labeled global source data with target-adjacent source data. I framed **segmentation** as a wide-to-narrow source curriculum, and **detection** as joint co-training that combines hard-negative mining with dual-resolution context modeling. The system is designed for **analyst-assisted candidate prioritization** rather than fully automated decision-making.

### The domain gap

<div class="dg-row">
<figure class="dg-media">
<img src="/assets/img/sat-domaingap.png" alt="Source vs. target satellite samples" data-zoomable>
<figcaption class="sat-cap" style="margin:.5rem 0 0">Representative source vs. target tiles. The shift is subtle in raw appearance — it lives in <strong>resolution, region, and label availability</strong> (the source datasets are labeled; the target region has only scarce labels), summarized at right.</figcaption>
</figure>
<div class="dg-table-wrap">
<table class="dg-tbl">
<thead><tr><th>Data</th><th>Scope</th><th>Resolution</th><th>Labels</th><th>Role</th></tr></thead>
<tbody>
<tr><td>OpenEarthMap</td><td>44 countries</td><td>0.25–0.5 m</td><td>✓ 9-class</td><td>source · seg</td></tr>
<tr><td>GID-15</td><td>East Asia</td><td>~3 m</td><td>✓</td><td>source · seg</td></tr>
<tr><td>fMoW</td><td>global</td><td>mixed</td><td>✓ schools</td><td>source · det</td></tr>
<tr class="tgt"><td>Target region</td><td>one region</td><td>low + high-res</td><td>scarce</td><td>target · det + seg</td></tr>
</tbody>
</table>
</div>
</div>

- The entire training signal is **source-domain** (public, labeled, mostly elsewhere); the **target region carries only scarce labels** and mixed resolution.
- This is exactly the gap that makes real-world **sensing** hard — a model must survive shifts in resolution, acquisition, and region to a place it never saw in training, with few target labels to lean on.

### Domain-adaptation strategy

<img class="sat-fig" style="max-width:650px" src="/assets/img/sat-adapt3.jpg" alt="Two domain-adaptation strategies" data-zoomable>
<span class="sat-cap">Two strategies for the same goal — bridging labeled global data to a label-scarce target. Segmentation uses a Wide→Narrow two-phase scheme; detection uses 3-domain joint co-training.</span>

- **Shared idea:** lean on **geographically / visually adjacent source data** as a stepping stone, **mine hard negatives** for the target's confounders, and **boost accuracy at inference with no retraining**.
- **Detection — joint co-training:** an earlier two-phase recipe (global pretrain → target fine-tune) lost global knowledge to *catastrophic forgetting*, so I mix every domain — ImageNet-22k init, fMoW global schools, target tiles, and urban hard-negatives — in **one training loop**, balancing global generality against target specificity.
- **Segmentation — Wide→Narrow two-phase:** pretrain on pooled OpenEarthMap + GID-15, then fine-tune on GID-15 alone (an East-Asian prior) to shift the distribution toward the target.

### I. Site detection <span style="font-size:0.55em;font-weight:400;color:var(--global-text-color-light)">[R1]</span>

<img class="sat-fig" style="max-width:820px" src="/assets/img/sat-detpipe2.jpg" alt="R3 site-detection pipeline" data-zoomable>
<span class="sat-cap">A dual-resolution SwinV2 classifier (joint co-trained), with 3×3 multi-crop at inference and a validation-tuned threshold.</span>

- **Model — dual-resolution SwinV2-Base:** each candidate is read at two fields of view (a native 256 patch + a 512→256 context crop), so the model sees both building detail and surrounding context — needed to span small schools to large campuses.
- **Hard negatives:** urban non-school sites (apartment blocks, factories, offices) that *look* school-like are mined as negatives to suppress city false positives.
- **Inference-time multi-crop:** a 3×3 grid (max over 9 offsets) absorbs coordinate noise from external sources — **no retraining**, +19 pp detection on a case study.

<div class="ex-row">
<figure class="ex-fig">
<img src="/assets/img/sat-examples2.jpg" alt="Top-ranked school candidates surfaced with high confidence" data-zoomable>
<figcaption class="sat-cap"><strong>Correctly surfaced</strong> — high-confidence school candidates (buildings + open grounds).</figcaption>
</figure>
<figure class="ex-fig">
<img src="/assets/img/sat-hardneg.jpg" alt="School-like non-school sites correctly scored low" data-zoomable>
<figcaption class="sat-cap"><strong>Correctly rejected</strong> — school-like non-school sites (dense housing, industrial) scored low.</figcaption>
</figure>
</div>
<span class="sat-cap">Two sides of the same operating point — real candidates surfaced, look-alike negatives suppressed. Region withheld.</span>

- **Blind, geo-disjoint** evaluation on held-out cities (a proxy for deployment shift): **AP 0.98, F1 0.93, recall 0.91** (up from 0.96 / 0.86 / 0.78), at false-positive rate ≈ 2%.
- **Failure mode:** large multi-building campuses were the dominant miss; the dual-resolution design lifted **recall ~0.78 → 0.91**.
- Operating point set by **threshold tuning on validation** (BCE with dynamic class weighting); output = a **ranked candidate map** for human review — a *surface-don't-decide* tool. <span style="color:var(--global-text-color-light)">[R1]</span>
- *Caveat (honest):* single-seed training, no multi-seed/ablation yet; outputs are review candidates, not confirmed sites.

### II. Land-cover segmentation <span style="font-size:0.55em;font-weight:400;color:var(--global-text-color-light)">[R2]</span>

<img class="sat-fig sat-wide" src="/assets/img/sat-segmentation3.jpg" alt="Land-cover segmentation results" data-zoomable>
<span class="sat-cap">9-class land-cover prediction (roads white, buildings red, vegetation green, water blue). Region withheld.</span>

- A **UNetFormer** (ResNet34 backbone, Transformer global–local attention decoder) over **9 harmonized land-cover classes**, trained on OpenEarthMap + GID-15 mapped to one scheme (~38k images) via the Wide→Narrow two-phase scheme, with **8-fold test-time augmentation**.
- **Honest limit:** strong on high-resolution target imagery, marginal on low-resolution; with no target labels, only source-validation effects are measurable (no target IoU / F1).
- Output = **land-cover ratios** (cropland / forest / water / built-up %) as socio-economic context for prioritizing the detected sites. <span style="color:var(--global-text-color-light)">[R2]</span>

<div class="treports">
<h4>Technical reports</h4>
<p><strong>[R1]</strong> Calibrated site detection with geo-disjoint blind evaluation. <em>Internal technical report</em>, 2026.</p>
<p><strong>[R2]</strong> Land-cover segmentation under source-to-target domain shift. <em>Internal technical report</em>, 2026.</p>
</div>

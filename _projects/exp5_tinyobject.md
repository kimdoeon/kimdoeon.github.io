---
layout: page
title: Tiny Object Detection in Aerial Imagery
description:
img: assets/img/interests/tod-thumb.jpg
importance: 4
keywords: [Aerial Imagery, Small-Object Detection, Cross-Attention]
category: research-experience
---

<style>
.container.mt-5{max-width:1100px}
#navbar .nav-item.dropdown>.nav-link.dropdown-toggle{font-weight:bolder;color:var(--global-theme-color)}
#navbar .nav-item.dropdown>.nav-link.dropdown-toggle:hover{color:var(--global-hover-color)}
h3{margin-top:5.5rem;margin-bottom:1.7rem;font-weight:700}
.emf-fig{display:block;max-width:760px;width:100%;margin:1rem auto .3rem;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.emf-cap{display:block;text-align:center;font-size:.8rem;color:var(--global-text-color-light);margin:.5rem auto 2.1rem;max-width:820px;line-height:1.4}
.emf-row3{display:grid;gap:1.6rem;align-items:center;margin:1.5rem 0 2.1rem;grid-template-columns:1.9fr 1fr}
.emf-row3 figure{margin:0}
.emf-row3 img{width:100%;height:auto;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.emf-row3 figcaption{font-size:.78rem;color:var(--global-text-color-light);text-align:center;margin-top:.45rem;line-height:1.35}
.emf-tbl{font-size:.82rem;border-collapse:collapse;width:100%}
.emf-tbl th,.emf-tbl td{border-bottom:1px solid var(--global-divider-color);padding:.34rem .5rem;text-align:center}
.emf-tbl th:first-child,.emf-tbl td:first-child{text-align:left}
.emf-tbl thead th{border-bottom:2px solid var(--global-divider-color)}
@media(max-width:900px){.emf-row3{grid-template-columns:1fr}}
.relpub{font-size:.82rem;color:var(--global-text-color-light);line-height:1.55;margin-top:3rem}
.relpub h4{font-size:.95rem;font-weight:700;color:var(--global-text-color);margin:0 0 .55rem}
.relpub ol{list-style:none;counter-reset:refnum;padding-left:0;margin:0}
.relpub li{counter-increment:refnum;margin-bottom:.45rem;padding-left:1.9rem;text-indent:-1.9rem}
.relpub li::before{content:"[" counter(refnum) "]\00a0";font-weight:600;color:var(--global-text-color)}
.relpub strong{color:var(--global-text-color)}
.container.mt-5 li{font-size:1.08rem;line-height:1.65}
.container.mt-5 .relpub li{font-size:.82rem;line-height:1.55}
.container.mt-5 .refn{font-size:.72em;color:var(--global-text-color-light);font-weight:600}
</style>

<p style="font-size:.88rem;color:var(--global-text-color-light);margin:0 0 1.8rem;">Mar 2024 – Dec 2024</p>

Very small objects (~10–13 px; vehicles, ships, aircraft) in high-resolution aerial imagery often lose discriminative detail as detector feature maps are downsampled. I helped design **CAHF** <span class="refn">[1]</span>, a cross-attention module that recovers small-object cues by fusing two complementary feature streams — object detection and segmentation — and evaluated it on the **AI-TOD** aerial tiny-object benchmark <span class="refn">[2]</span>.

### Cross-attention fusion of heterogeneous feature maps

<img class="emf-fig" src="/assets/img/tod-architecture.png" alt="CAHF architecture: spatial attention and channel cross-attention" data-zoomable>
<span class="emf-cap">CAHF fuses object-detection and segmentation features via (a) spatial attention and (b) channel cross-attention.</span>

- Fuse **object-detection** and **segmentation** streams to recover tiny-object cues that are weakened during detector downsampling <span class="refn">[1]</span>.
- **Spatial attention:** reduces and concatenates detection/segmentation feature maps to generate a spatial gate for suppressing background noise.
- **Channel attention:** computes cross-task channel correlations and converts them into per-channel weights that emphasize the most informative channels.

### Feature-level evidence for tiny-object focus

<img class="emf-fig" style="max-width:640px" src="/assets/img/tod-features2.jpg" alt="Feature maps with vs. without CAHF" data-zoomable>
<span class="emf-cap">Feature maps before and after CAHF — CAHF enhances foreground responses and suppresses background clutter.</span>

- Feature-map visualization shows **clearer separation** between small objects and background after applying CAHF <span class="refn">[1]</span>.
- CAHF concentrates responses on **small, densely packed objects** that a plain detector blurs into the background.

### Benchmarking on AI-TOD

<div class="emf-row3">
<figure><img src="/assets/img/tod-curves4.png" alt="Training loss and mAP vs. Faster R-CNN" data-zoomable><figcaption>Training loss and mAP@0.5:0.95 vs. Faster R-CNN — CAHF shows lower loss and consistently higher mAP during training.</figcaption></figure>
<figure>
<table class="emf-tbl">
<thead><tr><th>Model</th><th>mAP<sub>.5:.95</sub> ↑</th><th>mAP<sub>.5</sub> ↑</th></tr></thead>
<tbody>
<tr><td>Faster R-CNN</td><td>11.1</td><td>26.3</td></tr>
<tr><td>Cascade R-CNN</td><td>13.8</td><td>30.8</td></tr>
<tr><td>M-CenterNet</td><td>14.5</td><td>40.7</td></tr>
<tr><td>DetectoRS</td><td>14.8</td><td>32.8</td></tr>
<tr><td>YOLOv8l</td><td>14.9</td><td>32.5</td></tr>
<tr><td><strong>CAHF (ours)</strong></td><td><strong>19.9</strong></td><td><strong>41.4</strong></td></tr>
<tr><td><strong>CAHF (ours, 20 ep)</strong></td><td><strong>23.1</strong></td><td><strong>43.8</strong></td></tr>
</tbody>
</table>
<figcaption>On AI-TOD (ResNet-50 backbone) — CAHF outperforms standard and recent detectors.</figcaption>
</figure>
</div>

- On **AI-TOD** (aerial tiny-object benchmark <span class="refn">[2]</span>), CAHF reaches **23.1 mAP@0.5:0.95** / **43.8 mAP@0.5**, improving over the 20-epoch Faster R-CNN baseline and outperforming standard detectors.
- Training curves show **faster, more stable convergence** and consistently higher mAP than the Faster R-CNN baseline.

<div class="relpub" markdown="1">
#### Related publications
1. Seungchan Kwon, **Doeon Kim**, Gyuil Lim, Youngjun Han, Seongsin Kim. "Tiny Object Detection Method Based on Cross Attention of Heterogeneous Feature Maps." KIIS Autumn Conference, 2024.
2. J. Wang, et al. "Tiny Object Detection in Aerial Images." Int. Conf. on Pattern Recognition (ICPR), 2021.
3. S. Kwon, G. Lim, Y. Han. "SPAR-Det: Segmentation-guided and Prior-Aided Routing for Small Object Detection." IEEE/CVF Winter Conf. on Applications of Computer Vision (WACV), 2026.
</div>

---
layout: page
title: Self-Supervised WiFi Sensing for 3D Human Pose
description:
img: assets/img/interests/exp-wifijepa-v2.jpg
importance: 1
keywords: [WiFi Sensing, Self-Supervised Learning, 3D Human Pose]
category: research-experience
---

<style>
.container.mt-5{max-width:1100px}
#navbar .nav-item.dropdown>.nav-link.dropdown-toggle{font-weight:bolder;color:var(--global-theme-color)}
#navbar .nav-item.dropdown>.nav-link.dropdown-toggle:hover{color:var(--global-hover-color)}
h3{margin-top:5.5rem;margin-bottom:1.7rem;font-weight:700}
.wj-fig{display:block;max-width:880px;width:100%;margin:1rem auto .3rem;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.wj-cap{display:block;text-align:center;font-size:.8rem;color:var(--global-text-color-light);margin:.5rem auto 2.1rem;max-width:860px;line-height:1.4}
.wj-hero{display:block;max-width:620px;width:100%;margin:1rem auto .3rem;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.wj-fig-sm{display:block;max-width:660px;width:100%;margin:1rem auto .3rem;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.wj-row{display:flex;flex-wrap:nowrap;justify-content:center;align-items:flex-start;gap:1rem;margin:1.2rem auto 2.1rem;max-width:1080px}
.wj-row figure{margin:0;min-width:0;text-align:center}
.wj-row img{display:block;width:100%;height:auto;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.wj-row figcaption{font-size:.78rem;color:var(--global-text-color-light);text-align:center;margin:.45rem auto 0;line-height:1.35}
@media(max-width:560px){.wj-row{flex-wrap:wrap}.wj-row figure{flex:1 1 100% !important}}
.wj-take{margin:1.5rem auto .3rem;max-width:1080px;padding:.6rem .95rem;border-left:3px solid var(--global-theme-color);background:rgba(127,127,127,.08);border-radius:0 5px 5px 0;font-size:.97rem;line-height:1.55}
.wj-take b{color:var(--global-theme-color);font-weight:700}
.wj-num{color:var(--global-theme-color);font-weight:700}
.container.mt-5 li{font-size:1.08rem;line-height:1.65}
.container.mt-5 .relpub li{font-size:.82rem;line-height:1.55}
.container.mt-5 .refn{font-size:.72em;color:var(--global-text-color-light);font-weight:600}
.relpub{font-size:.82rem;color:var(--global-text-color-light);line-height:1.55;margin-top:3rem}
.relpub h4{font-size:.95rem;font-weight:700;color:var(--global-text-color);margin:0 0 .55rem}
.relpub ol{list-style:none;counter-reset:refnum;padding-left:0;margin:0}
.relpub li{counter-increment:refnum;margin-bottom:.45rem;padding-left:1.9rem;text-indent:-1.9rem}
.relpub li::before{content:"[" counter(refnum) "]\00a0";font-weight:600;color:var(--global-text-color)}
.relpub strong{color:var(--global-text-color)}
</style>

<p style="font-size:.88rem;color:var(--global-text-color-light);margin:0 0 1.8rem;">Dec 2025 – present &nbsp;·&nbsp; <a href="https://wifi-jepa.github.io/" target="_blank" rel="noopener">Project page ↗</a></p>

I study whether **WiFi channel measurements (CSI)** can recover **3D human pose** without cameras. Robust WiFi pose estimation faces three bottlenecks: *(i) cross-domain generalization is fragile — accuracy drops in a new room or with moved transceivers; (ii) label scalability is limited — pose labels need camera-based annotation in a few fixed-hardware rooms; (iii) CSI is noisy and hardware-dependent — flattening it into image-like 2D grids mixes its subcarrier, time, and link axes.* My answer is **WiFi-JEPA**: self-supervised learning redesigned around CSI's physical structure — far fewer labels, robust transfer across rooms and hardware. **Accepted at ECCV 2026** <span class="refn">[1]</span>.

### Encoding WiFi CSI: axis-preserving tokenization & link masking

<div class="wj-row">
<figure style="flex:2.754"><img src="/assets/img/wj-tokenization2.png" alt="Axis-preserving CSI tokenization vs. flattened spectrogram" data-zoomable><figcaption>Axis-preserving tokenization keeps the (C, T, L) tensor — versus a flattened spectrogram that mixes the time and link axes.</figcaption></figure>
<figure style="flex:3.161"><img src="/assets/img/wj-masking2.png" alt="Masking strategies on the time-link token grid" data-zoomable><figcaption>Link masking (a) removes whole antenna links, versus time, multi-block, and random masking.</figcaption></figure>
</div>

- **Axis-preserving tokenization:** keep the CSI tensor **(C, T, L) = (60, 20, 9)** — subcarriers × time × antenna links — instead of flattening it into a 2D image; each of the **180 tokens** is one antenna link at one time step, not an arbitrary patch.
- **Link masking:** hide 5 of 9 antenna links entirely and predict them from the rest — the encoder must learn the **cross-link spatial correlation** that encodes 3D structure.
- **Result:** tokenization alone cuts <span class="wj-num">14.77 mm MPJPE</span> (111.85 → 97.08) vs. a flattened-spectrogram baseline; link masking beats time, block, and random masking — <span class="wj-num">97.08 mm / 92.56% PCK@50</span>, <span class="wj-num">8.06 mm</span> ahead of random <span class="refn">[1]</span>.

<div class="wj-take"><b>Key takeaway</b> — Reading CSI on its true physical axes, and masking whole antenna links, teaches the encoder the cross-link structure that flattening destroys.</div>

### Ray-traced synthetic CSI (Sionna RT)

<div class="wj-row">
<figure style="flex:1.714"><img src="/assets/img/wj-sim2.png" alt="Ray-tracing CSI simulation pipeline" data-zoomable><figcaption>Randomized scenes of geometric primitives (Stage 1) rendered with Sionna RT at 20 passes per frame (Stage 2).</figcaption></figure>
<figure style="flex:1.777"><img src="/assets/img/wj-overview.png" alt="WiFi-JEPA overview: simulated/real CSI to 3D human pose" data-zoomable><figcaption>Simulated and real CSI generation → self-supervised model → 3D human-pose prediction (ground truth vs. prediction).</figcaption></figure>
</div>

- **Hypothesis:** for pretraining, dynamics diversity matters more than anatomical fidelity.
- **Why simulate:** real CSI needs dedicated rooms, synchronized receivers, and motion capture for labels — datasets stay small and hardware-specific.
- **Ray-tracing pipeline (NVIDIA Sionna RT):** benchmark-compatible CSI from randomly moving geometric primitives — spheres, cubes, cylinders — with no human meshes and no motion capture; ~90K frames in ~10 GPU-hours on one RTX 4090.
- **Result:** real + simulated pretraining cuts multi-person MPJPE from <span class="wj-num">97.1</span> to <span class="wj-num">93.5 mm</span>; primitives *alone* reach <span class="wj-num">100.1 mm</span>, nearly matching real data <span class="refn">[1]</span>.

<div class="wj-take"><b>Key takeaway</b> — Randomly moving primitives — no human bodies at all — pretrain CSI nearly as well as real data: motion diversity beats anatomical realism.</div>

### Self-supervised learning: a CSI-native JEPA

<img class="wj-fig" src="/assets/img/wj-arch3.png" alt="WiFi-JEPA architecture (Phase 1 pre-training, Phase 2 fine-tuning)" data-zoomable>
<span class="wj-cap">Phase 1 — self-supervised pre-training: the context encoder predicts the link-masked tokens' <em>latent</em> embeddings, supervised by an EMA target encoder (Smooth L1). Phase 2 — fine-tuning the pretrained encoder with a PETR pose head.</span>

- **CSI-native JEPA:** predict the masked links' latent embeddings instead of reconstructing raw CSI — the encoder learns pose-relevant structure, not hardware artifacts.
- **Comparison with SSL objectives:** under the same backbone, SimMIM, MAE, BYOL, and MoCo v3 all fall below training from scratch — WiFi-JEPA is the only objective that improves it.
- **End-to-end:** state-of-the-art <span class="wj-num">76.8 mm single-person / 93.5 mm multi-person MPJPE</span> (<span class="wj-num">−14.7% / −12.8%</span> vs. prior WiFi methods), with **cross-environment error halved** (<span class="wj-num">324.2 vs. 626.4 mm</span>) in leave-one-room-out tests <span class="refn">[1]</span>.

<div class="wj-take"><b>Key takeaway</b> — Predicting latent link embeddings rather than raw CSI is what makes self-supervision transfer on WiFi — SOTA accuracy that holds in unseen rooms.</div>

<div class="relpub" markdown="1">
#### Related publications
1. **Doeon Kim**, Jungyoon Lee, Seongheum Kim, Seongsin Kim. "WiFi-JEPA: Self-supervised Learning for WiFi-CSI 3D Human Pose Estimation." ECCV 2026.
</div>

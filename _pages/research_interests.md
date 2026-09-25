---
layout: page
title: Research Interests
permalink: /research-interests/
nav: false
---

<style>
.container.mt-5{max-width:820px}
.ri-anchor{scroll-margin-top:5rem;margin-top:2.6rem;padding-top:1.8rem;border-top:1px solid var(--global-divider-color);font-weight:700}
.ri-anchor:first-of-type{margin-top:1rem;padding-top:0;border-top:none}
.container.mt-5 p{font-size:1.05rem;line-height:1.75}
</style>

<h2 id="wireless-perception" class="ri-anchor">Wireless Perception</h2>

I am interested in enabling wireless signals, such as WiFi CSI and mmWave radar, to perceive humans and scenes beyond the limits of cameras. My current focus is WiFi-CSI-based 3D human pose estimation, where wireless signals provide privacy-preserving perception in camera-denied environments such as darkness, occlusion, and through-wall scenarios. In the long term, I aim to extend these ideas toward mmWave / RF-based human and scene understanding, including pose, depth, occupancy, and semantic perception.

<h2 id="rf-simulation" class="ri-anchor">RT-Based Synthetic Data Generation</h2>

Large-scale real wireless sensing data is difficult to collect, annotate, and reproduce across environments. I am interested in building physics-grounded synthetic RF data pipelines using ray tracing and simulation, with the goal of reducing dependence on costly real-world data collection. I am especially interested in sim-to-real calibration, where synthetic wireless signals are adjusted to better match real-world hardware, materials, antenna configurations, and multipath propagation.

<h2 id="cross-domain" class="ri-anchor">Cross-Domain Generalization</h2>

A central challenge in wireless sensing is domain shift: models trained in one room, device setup, antenna placement, or environment often fail in another. I aim to study RF-native self-supervised and representation learning methods that generalize across environments, subjects, devices, and sensing modalities. My long-term goal is to develop scalable and generalizable wireless perception models that can transfer from WiFi CSI to mmWave radar and other RF sensing systems.

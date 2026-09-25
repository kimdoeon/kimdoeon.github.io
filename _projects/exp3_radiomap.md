---
layout: page
title: Physics-Aware Multimodal Fusion for Dense EMF Exposure Map Prediction
description:
img: assets/img/interests/exp-emf-thumb9.jpg
importance: 3
keywords: [EMF Exposure Mapping, Vision Transformers, Physics-Informed ML]
category: research-experience
---

<style>
.container.mt-5{max-width:1100px}
#navbar .nav-item.dropdown>.nav-link.dropdown-toggle{font-weight:bolder;color:var(--global-theme-color)}
#navbar .nav-item.dropdown>.nav-link.dropdown-toggle:hover{color:var(--global-hover-color)}
h3{margin-top:5.5rem;margin-bottom:1.7rem;font-weight:700}
.emf-fig{display:block;max-width:760px;width:100%;margin:1rem auto .3rem;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.emf-cap{display:block;text-align:center;font-size:.8rem;color:var(--global-text-color-light);margin:.5rem auto 2.1rem;max-width:820px;line-height:1.4}
.emf-row,.emf-row2,.emf-row3{display:grid;gap:1.6rem;align-items:center;margin:1.5rem 0 2.1rem}
.emf-row{grid-template-columns:1fr 1fr}
.emf-row2{grid-template-columns:1fr 1.4fr}
.emf-row3{grid-template-columns:1.4fr 1fr}
.emf-row figure,.emf-row2 figure,.emf-row3 figure{margin:0}
.emf-row img,.emf-row3 img{width:100%;height:auto;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.emf-row2 img{display:block;margin:0 auto;max-width:100%;max-height:430px;width:auto;height:auto;border:1px solid var(--global-divider-color);border-radius:6px;background:#fff}
.emf-row figcaption,.emf-row2 figcaption,.emf-row3 figcaption{font-size:.78rem;color:var(--global-text-color-light);text-align:center;margin-top:.45rem;line-height:1.35}
.emf-tbl{font-size:.82rem;border-collapse:collapse;width:100%}
.emf-tbl th,.emf-tbl td{border-bottom:1px solid var(--global-divider-color);padding:.34rem .5rem;text-align:center}
.emf-tbl th:first-child,.emf-tbl td:first-child{text-align:left}
.emf-tbl thead th{border-bottom:2px solid var(--global-divider-color)}
.emf-tbl tr.grp td{font-weight:700;text-align:left;background:rgba(127,127,127,.10);font-size:.74rem;padding:.3rem .5rem}
.emf-tbl tr.grp-div td{border-top:2.5px solid var(--global-text-color)}
.emf-tblcol{min-width:0}
.emf-foot{font-size:.72rem;color:var(--global-text-color-light);line-height:1.45;margin:.55rem 0 0;text-align:left}
@media(max-width:680px){.emf-row,.emf-row2{grid-template-columns:1fr}}
@media(max-width:960px){.emf-row3{grid-template-columns:1fr}}
.relpub{font-size:.82rem;color:var(--global-text-color-light);line-height:1.55;margin-top:3rem}
.relpub h4{font-size:.95rem;font-weight:700;color:var(--global-text-color);margin:0 0 .55rem}
.relpub ol{list-style:none;counter-reset:refnum;padding-left:0;margin:0}
.relpub li{counter-increment:refnum;margin-bottom:.45rem;padding-left:1.9rem;text-indent:-1.9rem}
.relpub li::before{content:"[" counter(refnum) "]\00a0";font-weight:600;color:var(--global-text-color)}
.relpub strong{color:var(--global-text-color)}
.container.mt-5 li{font-size:1.08rem;line-height:1.65}
.container.mt-5 .relpub li{font-size:.82rem;line-height:1.55}
.container.mt-5 .refn{font-size:.72em;color:var(--global-text-color-light);font-weight:600}
/* Benchmarking result slider (left figure of .emf-row3) */
.emf-slider{margin:0}
.emf-stage{position:relative;height:440px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid var(--global-divider-color);border-radius:6px;overflow:hidden}
.emf-slider .emf-slide{display:none;max-width:100%;max-height:100%;width:auto;height:auto;border:0;border-radius:0}
.emf-slider .emf-slide.active{display:block}
.emf-snav{position:absolute;top:50%;transform:translateY(-50%);z-index:2;width:34px;height:34px;border-radius:50%;border:1px solid var(--global-divider-color);background:var(--global-bg-color);color:var(--global-text-color);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.18);opacity:.92}
.emf-snav:hover{background:var(--global-hover-color)}
.emf-prev{left:6px}.emf-next{right:6px}
.emf-scap{display:none}
.emf-scap.active{display:block;min-height:2.4em}
.emf-dots{display:flex;justify-content:center;gap:.45rem;margin-top:.55rem}
.emf-dot{width:8px;height:8px;border-radius:50%;border:none;padding:0;background:var(--global-divider-color);cursor:pointer;opacity:.6}
.emf-dot.active{background:var(--global-theme-color);opacity:1}
.emf-snav:focus-visible,.emf-dot:focus-visible{outline:2px solid var(--global-theme-color);outline-offset:2px}
@media(max-width:680px){.emf-stage{height:320px}}
</style>

<p style="font-size:.88rem;color:var(--global-text-color-light);margin:0 0 1.8rem;">Jan 2025 – present</p>

Ray-tracing simulators can accurately estimate how 5G electromagnetic fields (EMF) spread across complex environments, but they are often slow and expensive. Motivated by this, I study how to predict **dense EMF exposure maps** directly with Vision Transformers — by feeding them the *physics* of propagation rather than treating the task as black-box image prediction.

### Physics-aware input encoding

<img class="emf-fig" src="/assets/img/emf-encoded-channels.png" alt="Example encoded input channels" data-zoomable>
<span class="emf-cap">Example encoded channels — building layout &amp; beam, plus transmitter-relative distance, proximity, and bearing maps [3].</span>

<div class="emf-row">
<figure><img src="/assets/img/emf-input-table.png" alt="Input modalities" data-zoomable><figcaption>Input modalities and the per-pixel EMF prediction target [5].</figcaption></figure>
<figure><img src="/assets/img/emf-encoding-pipeline.png" alt="2D spatial mapping" data-zoomable><figcaption>2D spatial mapping → an 8×500×500 ViT input (early fusion) [2].</figcaption></figure>
</div>

- Turned antenna **radiation patterns**, transmitter **coordinates**, numeric **base-station specs**, and **GIS / building layouts** into physically-meaningful 2-D maps stacked as ViT input channels <span class="refn">[1, 2]</span>.
- Designed **transmitter-relative spatial channels** (distance, proximity, bearing from the antenna) so the model knows *where* the source is <span class="refn">[3]</span>.
- Built a physically-informed multi-channel input so the network sees the same variables a deterministic propagation model would <span class="refn">[1]</span>.

### Fusion and conditioning of physical modalities

<div class="emf-row2">
<figure><img src="/assets/img/emf-token-fusion.png" alt="Token fusion architecture" data-zoomable><figcaption>Token fusion (mid fusion): physical modalities are tokenized and fused with image tokens inside the Transformer [2].</figcaption></figure>
<figure><img src="/assets/img/emf-conditioning.png" alt="Feature-level conditioning architecture (HRFormer with FiLM and cross-attention)" data-zoomable><figcaption>Feature-level conditioning architecture — HRFormer backbone with per-stage FiLM from numeric antenna parameters and cross-attention over radiation-pattern tokens [3].</figcaption></figure>
</div>

- **Token fusion:** converted radiation patterns and numeric antenna parameters into tokens and fused them with image tokens inside the Transformer <span class="refn">[2]</span>.
- **Spatial early fusion:** projected physical variables into 2D maps and stacked them with image channels to preserve spatial alignment <span class="refn">[2]</span>.
- **Feature-level conditioning:** used FiLM to inject scalar antenna parameters into backbone features and cross-attention to fuse radiation-pattern tokens with spatial features <span class="refn">[3]</span>.
- Compared **early fusion**, **token-level fusion**, and **feature-level conditioning** to analyze how different physical modalities should interact with visual representations <span class="refn">[2, 3]</span>.

### Benchmarking & comparative analysis

<div class="emf-row3">
<figure class="emf-slider" data-emf-slider>
<div class="emf-stage">
<button class="emf-snav emf-prev" type="button" aria-label="Previous result"><svg aria-hidden="true" focusable="false" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
<img class="emf-slide active" src="/assets/img/emf-results-grid.png" alt="Predicted EMF maps across CNN / ViT models vs. ground truth" data-zoomable>
<img class="emf-slide" src="/assets/img/emf-results-fusion.png" alt="EMF predictions: ground truth, baseline, token fusion, and 2D spatial mapping" data-zoomable>
<button class="emf-snav emf-next" type="button" aria-label="Next result"><svg aria-hidden="true" focusable="false" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
</div>
<figcaption>
<span class="emf-scap active">Predicted EMF distributions across CNN / ViT models vs. ground truth [1].</span>
<span class="emf-scap">Ground truth vs. baseline and multimodal fusion — token fusion and 2D spatial mapping [2].</span>
</figcaption>
<div class="emf-dots"></div>
</figure>
<div class="emf-tblcol">
<table class="emf-tbl">
<thead><tr><th>Model</th><th>MAE (%) ↓</th><th>PSNR (dB) ↑</th><th>SSIM ↑</th></tr></thead>
<tbody>
<tr class="grp"><td colspan="4">IEEE Access [1] — standard CNN / ViT architectures</td></tr>
<tr><td>U-Net</td><td>7.92</td><td>21.41</td><td>0.90</td></tr>
<tr><td>ViT</td><td>6.00</td><td>20.74</td><td>0.89</td></tr>
<tr><td>SegFormer</td><td>5.86</td><td>21.26</td><td>0.89</td></tr>
<tr><td>Swin Transformer</td><td>5.69</td><td>22.15</td><td>0.90</td></tr>
<tr><td><strong>HRFormer</strong></td><td><strong>5.45</strong></td><td><strong>22.39</strong></td><td><strong>0.91</strong></td></tr>
<tr class="grp grp-div"><td colspan="4">CEIC [2] — own protocol · multimodal fusion · ImageNet-pretrained (*)</td></tr>
<tr><td>ViT* (token fusion)</td><td>4.00</td><td>25.46</td><td>0.93</td></tr>
<tr><td><strong>ViT* (2D mapping)</strong></td><td><strong>2.00</strong></td><td><strong>28.33</strong></td><td><strong>0.94</strong></td></tr>
</tbody>
</table>
<p class="emf-foot">[1] reports masked MAE, [2] reports MAE (both shown as %); * = ImageNet-pretrained. Absolute PSNR / SSIM follow each paper's own evaluation protocol, so [1] and [2] are not a controlled side-by-side benchmark.</p>
</div>
</div>
<span class="emf-cap">selected qualitative and quantitative results [1, 2]</span>

<script>
document.querySelectorAll('[data-emf-slider]').forEach(function(s){
  var imgs=s.querySelectorAll('.emf-slide'),caps=s.querySelectorAll('.emf-scap'),box=s.querySelector('.emf-dots'),n=imgs.length,i=0;
  if(n<2){var p=s.querySelector('.emf-prev'),x=s.querySelector('.emf-next');if(p)p.style.display='none';if(x)x.style.display='none';return;}
  for(var k=0;k<n;k++){var d=document.createElement('button');d.type='button';d.className='emf-dot'+(k?'':' active');d.setAttribute('aria-label','Result '+(k+1));(function(j){d.onclick=function(){go(j);};})(k);box.appendChild(d);}
  var dots=box.querySelectorAll('.emf-dot');
  function go(j){i=(j+n)%n;
    imgs.forEach(function(el,xi){el.classList.toggle('active',xi===i);});
    caps.forEach(function(el,xi){el.classList.toggle('active',xi===i);});
    dots.forEach(function(el,xi){var on=xi===i;el.classList.toggle('active',on);el.setAttribute('aria-current',on?'true':'false');});
  }
  s.querySelector('.emf-prev').onclick=function(e){e.stopPropagation();go(i-1);};
  s.querySelector('.emf-next').onclick=function(e){e.stopPropagation();go(i+1);};
});
</script>

- **Benchmarked** CNN and Vision Transformer architectures for dense EMF prediction, identifying **HRFormer** as a strong high-resolution backbone <span class="refn">[1]</span>.
- Conducted **controlled ablations** to quantify the contribution of spatial channels, FiLM conditioning, radiation-pattern cross-attention, and loss design <span class="refn">[3]</span>.
- **Multi-metric** quantitative analysis (MAE, RMSE, PSNR, SSIM, Hotspot IoU) and qualitative EMF-map inspection <span class="refn">[1, 3]</span>.

<div class="relpub" markdown="1">
#### Related publications
1. **Doeon Kim**, Dongryul Park, et al. "Estimation of Electromagnetic Field Strength: Experiments Using Vision Transformers." IEEE Access, 2025.
2. **Doeon Kim**, Seongsin Kim. "Multimodal Physical Data Fusion using ViT for 5G Electromagnetic Field Estimation." CEIC, 2025.
3. **Doeon Kim**, Dongryul Park, et al. "Multi-Modal Conditioned High-Resolution Transformer for Urban Electromagnetic Field Map Prediction." arXiv, 2026.
4. Hyunwoo Choi, **Doeon Kim**, Seongsin Kim. "Multimodal pretraining for radio-map estimation." Under review, 2026.
5. D. Park, S. Ryu, et al. "5G Base Station Electromagnetic Field Strength Estimation Method in Complex Hotspot Area using Deep Learning." IEEE EMC+SIPI, 2024.
</div>

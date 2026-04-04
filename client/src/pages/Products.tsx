<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Centuary Fab</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500;600&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
:root{
  --ivory:#F8F4EE;--ivory2:#EDE8DE;
  --gold:#B8962E;--gold2:#D4AF5A;
  --char:#1A1614;--warm:#5C4E42;--wl:#8C7B6E;
}
body{font-family:'Jost',sans-serif;background:var(--ivory);color:var(--char);overflow-x:hidden}
img{max-width:100%;display:block}
button{font-family:'Jost',sans-serif}
.serif{font-family:'Cormorant Garamond',serif!important}

.rv{opacity:0;transform:translateY(40px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1)}
.rv.vis{opacity:1;transform:none}
.d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}

@keyframes fup{from{opacity:0;transform:translateY(48px)}to{opacity:1;transform:none}}
.ha1{animation:fup 1.5s cubic-bezier(.16,1,.3,1) .2s both}
.ha2{animation:fup 1.5s cubic-bezier(.16,1,.3,1) .5s both}
.ha3{animation:fup 1.5s cubic-bezier(.16,1,.3,1) .8s both}
.ha4{animation:fup 1.5s cubic-bezier(.16,1,.3,1) 1.1s both}

/* Hero */
.hero{height:100svh;min-height:480px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}
.hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.42) saturate(.75)}
.hero-grad{position:absolute;inset:0;background:linear-gradient(135deg,rgba(14,11,9,.65) 0%,rgba(14,11,9,.15) 55%,rgba(184,150,46,.06) 100%)}
.hero-content{position:relative;text-align:center;max-width:1000px;padding:0 24px}
.hero-tag{font-size:10px;letter-spacing:.5em;text-transform:uppercase;color:var(--gold2);margin-bottom:28px;font-weight:300}
.hero-h1{font-family:'Cormorant Garamond',serif;font-size:clamp(42px,9vw,110px);font-weight:300;color:white;line-height:1.06;letter-spacing:-.01em}
.hero-div{width:56px;height:1px;background:var(--gold);margin:28px auto}
.hero-sub{font-size:clamp(13px,2vw,14.5px);letter-spacing:.08em;color:rgba(255,255,255,.6);font-weight:300;max-width:480px;margin:0 auto 44px;line-height:2}
.hero-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;align-items:center}
.scroll-ind{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px}
.scroll-text{font-size:9px;letter-spacing:.4em;text-transform:uppercase;color:rgba(255,255,255,.38);font-weight:300}
.scroll-line{width:1px;height:44px;background:linear-gradient(to bottom,rgba(255,255,255,.38),transparent)}

.ctab{position:relative;overflow:hidden;border:1px solid var(--gold);color:var(--gold);background:transparent;padding:16px 48px;letter-spacing:.24em;font-size:10px;text-transform:uppercase;cursor:pointer;transition:color .45s;font-family:'Jost',sans-serif;font-weight:400}
.ctab::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:var(--gold);transition:left .5s cubic-bezier(.16,1,.3,1)}
.ctab:hover::before{left:0}
.ctab:hover{color:var(--char)}
.ctab span{position:relative;z-index:1}
.ghostb{border:none;background:transparent;color:rgba(255,255,255,.5);padding:16px 28px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;cursor:pointer;font-family:'Jost',sans-serif;font-weight:300;display:inline-flex;align-items:center;gap:10px;transition:color .3s}
.ghostb:hover{color:rgba(255,255,255,.8)}
.play-circle{width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,.28);display:flex;align-items:center;justify-content:center}

/* Brand bar */
.brand-bar{background:var(--char);padding:22px 48px;display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap}
.brand-item{display:flex;align-items:center;gap:12px}
.brand-dot{width:4px;height:4px;background:var(--gold);border-radius:50%;flex-shrink:0}
.brand-text{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.5);font-weight:300}

.section{padding:clamp(60px,8vw,120px) clamp(20px,5vw,80px)}
.section-tag{display:flex;align-items:center;gap:14px;margin-bottom:20px}
.section-tag.center{justify-content:center}
.gold-bar{width:44px;height:1px;background:var(--gold)}
.section-label{font-size:10px;letter-spacing:.4em;text-transform:uppercase;color:var(--gold);font-weight:400}

/* About */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.about-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(30px,4vw,52px);font-weight:400;line-height:1.14;margin-bottom:24px;color:var(--char)}
.about-p{font-size:14px;line-height:2.05;color:var(--warm);font-weight:300;margin-bottom:16px;max-width:460px}
.stats{margin-top:40px;display:flex;gap:36px;flex-wrap:wrap}
.stat-num{font-family:'Cormorant Garamond',serif;font-size:40px;font-weight:400;color:var(--gold);line-height:1}
.stat-label{font-size:9px;letter-spacing:.26em;text-transform:uppercase;color:var(--wl);font-weight:300;margin-top:8px}
.about-img-wrap{position:relative}
.about-img{overflow:hidden;height:460px}
.about-img img{width:100%;height:100%;object-fit:cover}
.corner-accent{position:absolute;border:1px solid var(--gold);opacity:.35;z-index:-1}

/* Categories */
.cats-header{padding:0 clamp(20px,5vw,80px);margin-bottom:48px}
.cats-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(28px,4vw,48px);font-weight:400;color:var(--char);line-height:1.15;max-width:500px}
.cc{position:relative;overflow:hidden;height:clamp(280px,50vw,580px);cursor:pointer;margin-bottom:4px}
.cc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.2s cubic-bezier(.16,1,.3,1),filter .9s;filter:brightness(.72) saturate(.8)}
.cc:hover img{transform:scale(1.08);filter:brightness(.55) saturate(1.05)}
.cc-grad{position:absolute;inset:0;background:linear-gradient(155deg,transparent 25%,rgba(14,11,9,.88) 100%)}
.cc-body{position:absolute;bottom:0;left:0;right:0;padding:clamp(24px,4vw,52px) clamp(20px,5vw,64px)}
.cc-num{font-size:10px;letter-spacing:.35em;color:var(--gold2);text-transform:uppercase;margin-bottom:10px;font-weight:300}
.cc-head{display:flex;align-items:baseline;gap:20px;flex-wrap:wrap}
.cc-title{font-family:'Cormorant Garamond',serif;font-size:clamp(32px,6vw,72px);font-weight:300;color:white;line-height:1}
.cc-sub{font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:var(--gold2);font-weight:300}
.cc-desc{font-size:13px;line-height:1.95;color:rgba(255,255,255,.58);font-weight:300;letter-spacing:.04em;max-width:400px;margin-top:12px;opacity:0;transform:translateY(16px);transition:opacity .5s,transform .5s}
.cc:hover .cc-desc{opacity:1;transform:none}
.cc-cta{display:inline-flex;align-items:center;gap:14px;margin-top:20px;color:var(--gold2);font-size:10px;letter-spacing:.26em;text-transform:uppercase;opacity:0;transform:translateX(-18px);transition:opacity .5s .1s,transform .5s .1s}
.cc:hover .cc-cta{opacity:1;transform:none}

/* Rituals */
.rituals{background:var(--char);padding:clamp(60px,8vw,120px) clamp(20px,5vw,80px)}
.rituals-head{text-align:center;margin-bottom:60px}
.rituals-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(30px,4vw,56px);font-weight:400;color:white;line-height:1.18;margin-bottom:20px}
.rituals-sub{font-size:14px;color:rgba(255,255,255,.46);font-weight:300;max-width:540px;margin:0 auto;line-height:2;letter-spacing:.04em}
.rituals-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:3px}
.rc{background:white;padding:36px 30px;transition:transform .6s cubic-bezier(.16,1,.3,1),box-shadow .6s;cursor:default}
.rc:hover{transform:translateY(-8px);box-shadow:0 36px 72px rgba(0,0,0,.1)}
.rc-bar{width:36px;height:2px;margin-bottom:24px}
.rc-sub{font-size:9px;letter-spacing:.36em;text-transform:uppercase;margin-bottom:8px;font-weight:300}
.rc-faith{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:500;color:var(--char);margin-bottom:14px}
.rc-desc{font-size:13px;line-height:1.9;color:var(--warm);font-weight:300;margin-bottom:24px}
.rc-tags{display:flex;flex-wrap:wrap;gap:6px}
.rc-tag{font-size:9px;letter-spacing:.14em;padding:4px 10px;border:1px solid;text-transform:uppercase;font-weight:300}

/* Features */
.feats{padding:clamp(60px,8vw,120px) clamp(20px,5vw,80px)}
.feats-head{text-align:center;margin-bottom:60px}
.feats-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(30px,4vw,50px);font-weight:400;color:var(--char);line-height:1.18}
.feats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
.fc{padding:36px 30px;transition:transform .35s,background .35s}
.fc:hover{transform:translateY(-4px)}
.fc-title{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:500;color:var(--char);margin-bottom:8px}
.fc-text{font-size:13px;color:var(--warm);line-height:1.88;font-weight:300}

/* Gallery */
.gallery{padding:0 clamp(20px,5vw,80px) clamp(60px,8vw,120px)}
.gallery-head{margin-bottom:48px}
.gallery-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(28px,4vw,48px);font-weight:400;color:var(--char)}
.gal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
.gi{overflow:hidden}
.gi img{width:100%;height:100%;object-fit:cover;transition:transform 1s cubic-bezier(.16,1,.3,1),filter .8s;filter:brightness(.88) saturate(.85)}
.gi:hover img{transform:scale(1.1);filter:brightness(1) saturate(1.05)}

.divider{display:flex;align-items:center;gap:18px;padding:0 clamp(20px,5vw,80px);opacity:.55}
.div-line{flex:1;height:1px;background:#E0D8CC}

@media(max-width:1100px){
  .about-grid{gap:40px}
  .rituals-grid{grid-template-columns:repeat(2,1fr)}
  .feats-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:780px){
  .about-grid{grid-template-columns:1fr}
  .about-img-wrap{order:-1}
  .about-img{height:300px}
  .corner-accent{display:none}
  .rituals-grid{grid-template-columns:1fr}
  .feats-grid{grid-template-columns:1fr}
  .gal-grid{grid-template-columns:repeat(2,1fr)}
  .gi-tall{grid-row:span 1!important}
  .brand-bar{padding:18px 20px;gap:18px}
  .stats{gap:24px}
}
@media(max-width:520px){
  .hero-btns{flex-direction:column;align-items:center}
  .gal-grid{grid-template-columns:1fr}
  .cc{height:clamp(240px,65vw,340px)}
}
@media(min-width:781px){
  .gal-grid{grid-template-rows:repeat(2,260px)}
  .gi-tall{grid-row:span 2}
}
</style>
</head>
<body>

<!-- HERO -->
<section class="hero">
  <img class="hero-img" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=90" alt=""/>
  <div class="hero-grad"></div>
  <div class="hero-content">
    <div class="ha1 hero-tag">✦ &nbsp; Centuary Fab &nbsp; ✦</div>
    <h1 class="serif ha2 hero-h1">Premium Shirting<br/><em style="font-style:italic;font-weight:300">&amp; Suiting Fabrics</em></h1>
    <div class="ha3 hero-div"></div>
    <p class="ha3 hero-sub">Woven with mastery since 1985. Fabrics that drape beautifully, endure gracefully, and honour every occasion.</p>
    <div class="ha4 hero-btns">
      <button class="ctab"><span>Explore Collections</span></button>
      <button class="ghostb">
        <div class="play-circle"><svg width="10" height="10" viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9" fill="white"/></svg></div>
        <span>Our Story</span>
      </button>
    </div>
  </div>
  <div class="scroll-ind">
    <div class="scroll-text">Scroll</div>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- BRAND BAR -->
<div class="brand-bar">
  <div class="brand-item"><div class="brand-dot"></div><span class="brand-text">35+ Years of Mastery</span></div>
  <div class="brand-item"><div class="brand-dot"></div><span class="brand-text">ISO Certified Quality</span></div>
  <div class="brand-item"><div class="brand-dot"></div><span class="brand-text">Pan India Distribution</span></div>
  <div class="brand-item"><div class="brand-dot"></div><span class="brand-text">Wholesale &amp; Retail</span></div>
</div>

<!-- ABOUT -->
<section class="section">
  <div class="about-grid">
    <div>
      <div class="rv section-tag"><div class="gold-bar"></div><span class="section-label">Our Heritage</span></div>
      <h2 class="rv d1 about-h2">Fabric Born From<br/><em style="font-style:italic">Passion &amp; Precision</em></h2>
      <p class="rv d2 about-p">For over three decades, Centuary Fab India has stood at the forefront of India's textile tradition — weaving together heritage craftsmanship with modern innovation.</p>
      <p class="rv d3 about-p">Every thread tells a story. Every weave carries intention. From loom to wardrobe, we ensure excellence is stitched into every centimetre of every cloth we produce.</p>
      <div class="rv d4 stats">
        <div><div class="stat-num">35+</div><div class="stat-label">Years Active</div></div>
        <div><div class="stat-num">500+</div><div class="stat-label">Fabric Variants</div></div>
        <div><div class="stat-num">10K+</div><div class="stat-label">Happy Clients</div></div>
      </div>
    </div>
    <div class="rv d2 about-img-wrap">
      <div class="about-img">
        <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80" alt="Fine fabric"/>
      </div>
      <div class="corner-accent" style="top:-16px;right:-16px;width:55%;height:55%;"></div>
      <div class="corner-accent" style="bottom:-16px;left:-16px;width:40%;height:40%;opacity:.2;"></div>
    </div>
  </div>
</section>

<!-- DIVIDER -->
<div class="divider"><div class="div-line"></div><span class="serif" style="font-size:16px;color:var(--gold)">✦</span><div class="div-line"></div></div>

<!-- CATEGORIES -->
<section style="padding-bottom:clamp(48px,8vw,80px)">
  <div class="cats-header" style="margin-top:clamp(48px,6vw,80px)">
    <div class="rv section-tag"><div class="gold-bar"></div><span class="section-label">Our Collections</span></div>
    <h2 class="rv d1 cats-h2">Crafted for Every<br/><em style="font-style:italic">Occasion &amp; Identity</em></h2>
  </div>

  <div class="rv cc">
    <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1400&q=80" alt="Shirting" loading="lazy"/>
    <div class="cc-grad"></div>
    <div class="cc-body">
      <div class="cc-num">01</div>
      <div class="cc-head"><h3 class="cc-title">Shirting</h3><span class="cc-sub">Everyday Refinement</span></div>
      <p class="cc-desc">Precision-woven cottons and poly-cotton blends delivering breathable comfort and crisp drape from morning to evening.</p>
      <div class="cc-cta"><span>Explore</span><svg width="36" height="10" viewBox="0 0 40 10" fill="none"><line x1="0" y1="5" x2="36" y2="5" stroke="currentColor" stroke-width="1"/><polyline points="31,1 36,5 31,9" stroke="currentColor" stroke-width="1" fill="none"/></svg></div>
    </div>
  </div>
  <div class="rv cc">
    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80" alt="Suiting" loading="lazy"/>
    <div class="cc-grad"></div>
    <div class="cc-body">
      <div class="cc-num">02</div>
      <div class="cc-head"><h3 class="cc-title">Suiting</h3><span class="cc-sub">Commanding Presence</span></div>
      <p class="cc-desc">Sophisticated wool-blend and polyester suiting fabrics for the modern professional who demands both form and function.</p>
      <div class="cc-cta"><span>Explore</span><svg width="36" height="10" viewBox="0 0 40 10" fill="none"><line x1="0" y1="5" x2="36" y2="5" stroke="currentColor" stroke-width="1"/><polyline points="31,1 36,5 31,9" stroke="currentColor" stroke-width="1" fill="none"/></svg></div>
    </div>
  </div>
  <div class="rv cc">
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80" alt="Sheeting" loading="lazy"/>
    <div class="cc-grad"></div>
    <div class="cc-body">
      <div class="cc-num">03</div>
      <div class="cc-head"><h3 class="cc-title">Sheeting</h3><span class="cc-sub">Restful Luxury</span></div>
      <p class="cc-desc">High thread-count, supremely soft sheets engineered to transform every bedroom into a haven of quiet indulgence.</p>
      <div class="cc-cta"><span>Explore</span><svg width="36" height="10" viewBox="0 0 40 10" fill="none"><line x1="0" y1="5" x2="36" y2="5" stroke="currentColor" stroke-width="1"/><polyline points="31,1 36,5 31,9" stroke="currentColor" stroke-width="1" fill="none"/></svg></div>
    </div>
  </div>
  <div class="rv cc">
    <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=80" alt="Dhoties" loading="lazy"/>
    <div class="cc-grad"></div>
    <div class="cc-body">
      <div class="cc-num">04</div>
      <div class="cc-head"><h3 class="cc-title">Dhoties</h3><span class="cc-sub">Timeless Tradition</span></div>
      <p class="cc-desc">Pure, pristine cottons in time-honoured weaves — rooted in culture, worn with quiet dignity and generational pride.</p>
      <div class="cc-cta"><span>Explore</span><svg width="36" height="10" viewBox="0 0 40 10" fill="none"><line x1="0" y1="5" x2="36" y2="5" stroke="currentColor" stroke-width="1"/><polyline points="31,1 36,5 31,9" stroke="currentColor" stroke-width="1" fill="none"/></svg></div>
    </div>
  </div>
  <div class="rv cc">
    <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1400&q=80" alt="Ritual Fabrics" loading="lazy"/>
    <div class="cc-grad"></div>
    <div class="cc-body">
      <div class="cc-num">05</div>
      <div class="cc-head"><h3 class="cc-title">Ritual Fabrics</h3><span class="cc-sub">Woven with Intention</span></div>
      <p class="cc-desc">Sacred textiles crafted for life's most meaningful ceremonies, honouring India's diverse spiritual heritage.</p>
      <div class="cc-cta"><span>Explore</span><svg width="36" height="10" viewBox="0 0 40 10" fill="none"><line x1="0" y1="5" x2="36" y2="5" stroke="currentColor" stroke-width="1"/><polyline points="31,1 36,5 31,9" stroke="currentColor" stroke-width="1" fill="none"/></svg></div>
    </div>
  </div>
</section>

<!-- RITUAL FABRICS -->
<section class="rituals">
  <div class="rituals-head">
    <div class="rv section-tag" style="justify-content:center"><div class="gold-bar"></div><span class="section-label">Sacred Collections</span><div class="gold-bar"></div></div>
    <h2 class="rv d1 rituals-h2">Ritual Fabrics</h2>
    <p class="rv d2 rituals-sub">Every faith has its fabric. Every ceremony, its cloth. We honour the diversity of India's spiritual traditions with textiles crafted for sacred moments.</p>
  </div>
  <div class="rituals-grid">
    <div class="rv d1 rc">
      <div class="rc-bar" style="background:#D4621A"></div>
      <div class="rc-sub" style="color:#D4621A">Sacred &amp; Ceremonial</div>
      <div class="rc-faith">Hindu</div>
      <p class="rc-desc">From pristine dhotis to vibrant puja cloths — our Hindu ritual fabrics embody sanctity and generational tradition, crafted in sacred saffron, turmeric gold, and vermillion.</p>
      <div class="rc-tags">
        <span class="rc-tag" style="border-color:#D4621A;color:#D4621A">Dhoti</span>
        <span class="rc-tag" style="border-color:#D4621A;color:#D4621A">Puja Cloth</span>
        <span class="rc-tag" style="border-color:#D4621A;color:#D4621A">Angavastram</span>
        <span class="rc-tag" style="border-color:#D4621A;color:#D4621A">Temple Saree</span>
      </div>
    </div>
    <div class="rv d2 rc">
      <div class="rc-bar" style="background:#2D6A4F"></div>
      <div class="rc-sub" style="color:#2D6A4F">Pure &amp; Pristine</div>
      <div class="rc-faith">Muslim</div>
      <p class="rc-desc">Immaculate white cottons and refined kurta fabrics reflecting purity and devotion. Our collection is crafted for Eid, Jumuah prayers, and every day of spiritual living.</p>
      <div class="rc-tags">
        <span class="rc-tag" style="border-color:#2D6A4F;color:#2D6A4F">Kurta Fabric</span>
        <span class="rc-tag" style="border-color:#2D6A4F;color:#2D6A4F">Lungi</span>
        <span class="rc-tag" style="border-color:#2D6A4F;color:#2D6A4F">Prayer White</span>
        <span class="rc-tag" style="border-color:#2D6A4F;color:#2D6A4F">Janamaz</span>
      </div>
    </div>
    <div class="rv d3 rc">
      <div class="rc-bar" style="background:#2C3E7A"></div>
      <div class="rc-sub" style="color:#2C3E7A">Formal &amp; Ceremonial</div>
      <div class="rc-faith">Christian</div>
      <p class="rc-desc">Refined fabrics for baptisms, weddings, and sacred ceremonies. Our Christian collection balances quiet solemnity with dignified elegance in fine whites and formal tones.</p>
      <div class="rc-tags">
        <span class="rc-tag" style="border-color:#2C3E7A;color:#2C3E7A">Surplice Cloth</span>
        <span class="rc-tag" style="border-color:#2C3E7A;color:#2C3E7A">Cassock Fabric</span>
        <span class="rc-tag" style="border-color:#2C3E7A;color:#2C3E7A">Altar Linen</span>
      </div>
    </div>
    <div class="rv d4 rc">
      <div class="rc-bar" style="background:#B8740A"></div>
      <div class="rc-sub" style="color:#B8740A">Tranquil &amp; Traditional</div>
      <div class="rc-faith">Buddhist</div>
      <p class="rc-desc">Warm saffron and meditative ochre textiles crafted for monastic traditions and lay practitioners — pure, natural, and imbued with the quiet dignity of the dharma.</p>
      <div class="rc-tags">
        <span class="rc-tag" style="border-color:#B8740A;color:#B8740A">Monk Robe Fabric</span>
        <span class="rc-tag" style="border-color:#B8740A;color:#B8740A">Ochre Cotton</span>
        <span class="rc-tag" style="border-color:#B8740A;color:#B8740A">Temple Cloth</span>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="feats">
  <div class="feats-head">
    <div class="rv section-tag" style="justify-content:center"><div class="gold-bar"></div><span class="section-label">Why Choose Us</span><div class="gold-bar"></div></div>
    <h2 class="rv d1 feats-h2">The Centuary Difference</h2>
  </div>
  <div class="feats-grid" id="featsGrid"></div>
</section>

<!-- GALLERY -->
<section class="gallery">
  <div class="gallery-head">
    <div class="rv section-tag"><div class="gold-bar"></div><span class="section-label">Fabric Gallery</span></div>
    <h2 class="rv d1 gallery-h2">In Close Detail</h2>
  </div>
  <div class="gal-grid">
    <div class="gi gi-tall rv d1"><img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80" alt="" loading="lazy" style="height:100%"/></div>
    <div class="gi rv d2"><img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=700&q=80" alt="" loading="lazy" style="height:260px"/></div>
    <div class="gi rv d3"><img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=80" alt="" loading="lazy" style="height:260px"/></div>
    <div class="gi rv d2"><img src="https://images.unsplash.com/photo-1464380573004-8ca85a08751a?auto=format&fit=crop&w=700&q=80" alt="" loading="lazy" style="height:260px"/></div>
    <div class="gi rv d3"><img src="https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=700&q=80" alt="" loading="lazy" style="height:260px"/></div>
  </div>
</section>

<script>
const FEATS=[
  {t:"Extraordinary Softness",d:"Ultra-fine yarn count delivers a feather-light touch against skin — every single wear.",p:"M24 6 Q40 24 24 44 Q8 24 24 6Z M24 14 Q36 24 24 36 Q12 24 24 14Z"},
  {t:"Enduring Durability",d:"Multi-twist weaving techniques preserve fabric integrity through hundreds of washes.",p:"M24 8 L40 12 L40 28 Q40 38 24 44 Q8 38 8 28 L8 12 Z M17 26 L22 31 L33 19"},
  {t:"Natural Breathability",d:"Open-weave architecture allows uninterrupted airflow for effortless all-day comfort.",p:"M8 22 Q20 14 32 22 Q44 30 44 22 M8 30 Q20 22 32 30 Q44 38 44 30"},
  {t:"Colourfast Weaves",d:"Advanced dye processes lock in rich hues that resist fading, wash after wash.",p:"M18 20 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0-16 0 M30 20 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0-16 0"},
  {t:"Premium Yarn Origin",d:"Sourced from the finest cotton belts and wool farms across India and the world.",p:"M12 38 L24 10 L36 38 M16 30 L32 30"},
  {t:"Eco Conscious",d:"Sustainable sourcing and low-impact dye processes — fabric you can feel good wearing.",p:"M24 40 Q10 28 10 18 A14 14 0 0 1 38 18 Q38 28 24 40Z M24 40 L24 26"}
];
const fg=document.getElementById('featsGrid');
FEATS.forEach((f,i)=>{
  const bg=i%2===0?'#F8F4EE':'white';
  fg.innerHTML+=`<div class="fc rv d${(i%3)+1}" style="background:${bg}"
    onmouseenter="this.style.background='white';this.style.transform='translateY(-4px)'"
    onmouseleave="this.style.background='${bg}';this.style.transform=''">
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#B8962E" stroke-width="1.2" style="display:block;margin-bottom:22px"><path d="${f.p}"/></svg>
    <div class="fc-title">${f.t}</div>
    <p class="fc-text">${f.d}</p>
  </div>`;
});
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')});
},{threshold:0.08,rootMargin:'0px 0px -32px 0px'});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));
</script>
</body>
</html>
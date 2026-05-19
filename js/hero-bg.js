/* Hero Premium Animated Background — connected particles + laser scan + key silhouette */
(function(){
  const canvas = document.getElementById('mk-hero-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W=0,H=0,DPR=Math.min(window.devicePixelRatio||1,2);
  let particles=[];
  function resize(){
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = W*DPR; canvas.height = H*DPR;
    ctx.setTransform(DPR,0,0,DPR,0,0);
    initParticles();
  }
  function initParticles(){
    const count = Math.min(70, Math.max(28, Math.floor(W*H/22000)));
    particles = new Array(count).fill(0).map(()=>({
      x: Math.random()*W,
      y: Math.random()*H,
      vx: (Math.random()-.5)*0.25,
      vy: (Math.random()-.5)*0.25,
      r: Math.random()*1.6+0.6,
      gold: Math.random() < 0.65
    }));
  }
  let scanX = -200;
  function draw(){
    ctx.clearRect(0,0,W,H);
    // soft vignette dark base
    const grd = ctx.createRadialGradient(W*0.5,H*0.55,0,W*0.5,H*0.55,Math.max(W,H)*0.8);
    grd.addColorStop(0,'rgba(12,20,36,0)');
    grd.addColorStop(1,'rgba(4,8,18,0.55)');
    ctx.fillStyle = grd; ctx.fillRect(0,0,W,H);

    // laser scan vertical beam
    scanX += 1.6;
    if(scanX > W+200) scanX = -200;
    const sg = ctx.createLinearGradient(scanX-80,0,scanX+80,0);
    sg.addColorStop(0,'rgba(224,181,63,0)');
    sg.addColorStop(0.5,'rgba(255,210,110,0.18)');
    sg.addColorStop(1,'rgba(224,181,63,0)');
    ctx.fillStyle = sg; ctx.fillRect(scanX-80,0,160,H);
    // bright center line
    ctx.strokeStyle='rgba(255,220,130,0.55)';
    ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(scanX,0); ctx.lineTo(scanX,H); ctx.stroke();

    // particles + connecting lines
    for(let i=0;i<particles.length;i++){
      const p=particles[i];
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
    }
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a=particles[i], b=particles[j];
        const dx=a.x-b.x, dy=a.y-b.y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<120){
          const o=(1-d/120)*0.28;
          ctx.strokeStyle = `rgba(224,181,63,${o})`;
          ctx.lineWidth=0.6;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }
    for(const p of particles){
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = p.gold ? 'rgba(255,210,110,0.9)' : 'rgba(180,220,255,0.85)';
      ctx.shadowColor = p.gold ? 'rgba(224,181,63,0.7)' : 'rgba(120,180,255,0.6)';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    if(!reduced) requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize, {passive:true});
  resize();
  if(reduced){ draw(); } else { requestAnimationFrame(draw); }
})();

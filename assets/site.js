
(function(){
  var t=document.querySelector('[data-nav-toggle]'),n=document.getElementById('nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});}
  document.querySelectorAll('.works-filter').forEach(function(g){
    g.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
      g.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
      var f=b.getAttribute('data-f');
      g.parentElement.querySelectorAll('.case').forEach(function(c){c.style.display=(!f||c.getAttribute('data-ind')===f)?'':'none';});
    });
  });
  (function(){
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els=document.querySelectorAll('.stat-v, .media-total .big, .disc .num, .gauge .num, .ncell .num');
    if(!('IntersectionObserver' in window)||reduce)return;
    var io=new IntersectionObserver(function(entries){entries.forEach(function(en){
      if(!en.isIntersecting)return; io.unobserve(en.target);
      var el=en.target, node=null;
      for(var i=0;i<el.childNodes.length;i++){if(el.childNodes[i].nodeType===3&&el.childNodes[i].textContent.trim()){node=el.childNodes[i];break;}}
      if(!node)return; var raw=node.textContent.trim(); var m=raw.match(/^([0-9][0-9,]*)$/); if(!m)return;
      var target=parseInt(m[1].replace(/,/g,''),10); if(!(target>0))return;
      var t0=null, dur=1100;
      function step(ts){ if(t0===null)t0=ts; var p=Math.min(1,(ts-t0)/dur); var e=1-Math.pow(1-p,3);
        node.textContent=Math.round(target*e).toLocaleString('en-US'); if(p<1)requestAnimationFrame(step); else node.textContent=raw; }
      requestAnimationFrame(step);
    });},{threshold:.4});
    els.forEach(function(el){io.observe(el);});
  })();
  // 最初に着いたページ・参照元・UTM をこの訪問の間だけ残す（問い合わせがどこから来たかを数えるため）
  var ft={};
  try{
    ft=JSON.parse(sessionStorage.getItem('oh_first')||'null')||null;
    if(!ft){
      var q=new URLSearchParams(location.search),r='';
      try{r=document.referrer?new URL(document.referrer).hostname:'';}catch(e){}
      if(r===location.hostname)r='';
      ft={landing_page:location.pathname,first_referrer:r||'(direct)',utm_source:q.get('utm_source')||'',utm_medium:q.get('utm_medium')||'',utm_campaign:q.get('utm_campaign')||''};
      sessionStorage.setItem('oh_first',JSON.stringify(ft));
    }
  }catch(e){ft={};}
  var f=document.getElementById('contact-form');
  if(f){
    var p=new URLSearchParams(location.search),sel=document.getElementById('f-type'),body=document.getElementById('f-body');
    if(sel&&p.get('type')&&sel.querySelector('option[value="'+p.get('type')+'"]'))sel.value=p.get('type');
    var sp=p.get('from')||'';
    if(!sp){try{var u=new URL(document.referrer);if(u.hostname===location.hostname&&u.pathname!==location.pathname)sp=u.pathname;}catch(e){}}
    var setv=function(n,v){var i=f.querySelector('input[name="'+n+'"]');if(i)i.value=v||'';};
    setv('source_page',sp);setv('landing_page',ft.landing_page);setv('first_referrer',ft.first_referrer);
    setv('utm_source',ft.utm_source);setv('utm_medium',ft.utm_medium);setv('utm_campaign',ft.utm_campaign);
    // 資料請求の時は「ご相談内容」を必須にしない
    var syncReq=function(){if(body&&sel){if(sel.value==='document')body.removeAttribute('required');else body.setAttribute('required','');}};
    if(sel){sel.addEventListener('change',syncReq);syncReq();}
    f.addEventListener('submit',function(e){
      var m=document.getElementById('form-msg');
      if(!f.checkValidity()){e.preventDefault();m.textContent='必須項目をご確認ください。';f.reportValidity();return;}
      var d=new Date(),z=function(n){return ('0'+n).slice(-2);};
      var id='OH'+d.getFullYear()+z(d.getMonth()+1)+z(d.getDate())+'-'+z(d.getHours())+z(d.getMinutes())+z(d.getSeconds())+'-'+Math.random().toString(36).slice(2,6);
      setv('inquiry_id',id);
      var hf=f.querySelector('[name="heard_from"]');
      try{sessionStorage.setItem('oh_lead',JSON.stringify({inquiry_id:id,inquiry_type:sel?sel.value:'',heard_from:hf?hf.value:'',source_page:sp,landing_page:ft.landing_page||'',first_referrer:ft.first_referrer||''}));}catch(e){}
      var b=f.querySelector('button[type=submit]');if(b){b.disabled=true;b.textContent='送信しています…';}
      if(f.hasAttribute('data-preview')){e.preventDefault();location.hash=f.getAttribute('action');setTimeout(function(){if(b){b.disabled=false;b.textContent='送信する';}},500);}
    });
  }
})();

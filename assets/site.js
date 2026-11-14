
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
  var f=document.getElementById('contact-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    var m=document.getElementById('form-msg');
    if(!f.checkValidity()){m.textContent='必須項目をご確認ください。';f.reportValidity();return;}
    var d=new FormData(f),body='会社名: '+d.get('company')+'\n担当者名: '+d.get('name')+'\nメール: '+d.get('email')+'\n電話: '+(d.get('tel')||'')+'\n種類: '+d.get('type')+'\n\n'+d.get('body');
    location.href='mailto:yokohari.k@onehope.co.jp?subject='+encodeURIComponent('【HPお問い合わせ】'+d.get('company'))+'&body='+encodeURIComponent(body);
    m.textContent='メールソフトが開きます。送信されない場合は '+'yokohari.k@onehope.co.jp'+' 宛に直接お送りください。';
  });}
})();

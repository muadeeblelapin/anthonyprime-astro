(function(){if(window.__lb)return;window.__lb=1;
var i=0,im=[],ca=[];
var d=document.createElement('div');d.id='lb';
d.innerHTML='<div id="lbb" style="position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);display:none;align-items:center;justify-content:center">'+
'<button id="lbp" style="position:absolute;left:16px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:48px;height:48px;cursor:pointer;color:#fff;font-size:28px;z-index:10001;display:flex;align-items:center;justify-content:center">‹</button>'+
'<button id="lbn" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:48px;height:48px;cursor:pointer;color:#fff;font-size:28px;z-index:10001;display:flex;align-items:center;justify-content:center">›</button>'+
'<button id="lbx" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:40px;height:40px;cursor:pointer;color:#fff;font-size:24px;z-index:10001;display:flex;align-items:center;justify-content:center">×</button>'+
'<div id="lbc" style="position:absolute;bottom:64px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.6);color:#fff;border-radius:999px;padding:4px 16px;font-size:14px;font-weight:700;z-index:10001;display:none"></div>'+
'<div id="lbl" style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);color:#ccc;font-size:14px;font-weight:600;text-align:center;z-index:10001;max-width:80%"></div>'+
'<img id="lbi" style="max-width:90vw;max-height:85vh;object-fit:contain;border-radius:8px;z-index:10000;box-shadow:0 20px 60px rgba(0,0,0,0.5)"/></div>';
document.body.appendChild(d);
var bb=document.getElementById('lbb'),bi=document.getElementById('lbi'),bp=document.getElementById('lbp'),bn=document.getElementById('lbn'),bx=document.getElementById('lbx'),bc=document.getElementById('lbc'),bl=document.getElementById('lbl');
function show(n){i=n;bi.src=im[n];bc.textContent=im.length>1?(n+1)+'/'+im.length:'';bc.style.display=im.length>1?'block':'none';bl.textContent=ca[n]||'';bp.style.display=bn.style.display=im.length>1?'flex':'none';bb.style.display='flex';document.body.style.overflow='hidden';}
function hide(){bb.style.display='none';document.body.style.overflow='';}
document.addEventListener('click',function(e){
  var t=e.target.closest('[data-lb]');
  if(!t)return;
  var srcs=t.getAttribute('data-srcs'),caps=t.getAttribute('data-caps');
  if(!srcs)return;
  im=srcs.split(',');
  ca=caps?caps.split('|'):[];
  show(0);
});
bp.onclick=function(e){e.stopPropagation();show((i-1+im.length)%im.length);};
bn.onclick=function(e){e.stopPropagation();show((i+1)%im.length);};
bx.onclick=hide;
bb.onclick=function(e){if(e.target===bb)hide();};
document.addEventListener('keydown',function(e){if(bb.style.display==='none')return;if(e.key==='Escape')hide();if(e.key==='ArrowLeft')show((i-1+im.length)%im.length);if(e.key==='ArrowRight')show((i+1)%im.length);});
})();
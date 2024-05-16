import{t as v}from"./assets/sidebar-ac10dcbd.js";import{a}from"./assets/vendor-37453147.js";class u{constructor(){window.addEventListener("DOMContentLoaded",()=>this.init())}initLayers(t){const e=(n,s,c,o)=>{a({targets:t+" "+n+" .el",scale:()=>a.random(s,c),rotate:()=>a.random(0,360),opacity:1,easing:"easeInOutQuad",duration:o,complete:e.bind(null,n,s,c,o)})};e(".sigil-layer-1",1,2,4e3),e(".sigil-layer-2",.6,1,3e3),e(".sigil-layer-3",2,3,2e3)}attachAnimationContainer(){const t=document.querySelector(".for-animation");t.innerHTML=`
        <div class="sigil-layer-1">
          <div class="el"></div>
          <div class="el"></div>
        </div>
        <div class="sigil-layer-2">
          <div class="el"></div>
          <div class="el"></div>
          <div class="el"></div>
        </div>
        <div class="sigil-layer-3">
          <div class="el"></div>
          <div class="el"></div>
          <div class="el"></div>
        </div>
    `}init(){this.attachAnimationContainer(),this.initLayers(".for-animation")}}function L(){let i=document.querySelector(".js-header"),t=document.querySelector(".logo-wrap"),e=document.querySelector(".name"),n=document.querySelector(".js-header").clientHeight;document.onscroll=function(){window.scrollY>n?(i.classList.add("fixed"),t.classList.add("min"),e.classList.add("delete"),document.body.style.paddingTop=n+"px"):(i.classList.remove("fixed"),t.classList.remove("min"),e.classList.remove("delete"),document.body.removeAttribute("style"))}}function d(){const i=document.querySelectorAll(".anime-items");for(let t=0;t<i.length;t++){const e=i[t],n=e.offsetHeight,s=f(e).top,c=4;let o=window.innerHeight-n/c;n>window.innerHeight&&(o=window.innerHeight-window.innerHeight/c),window.scrollY>s-o&&window.scrollY<s+n?e.classList.add("active"):e.classList.contains(".anim-no-hide")||e.classList.remove("active")}}function f(i){const t=i.getBoundingClientRect(),e=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+e}}window.addEventListener("scroll",d);L();new u;window.addEventListener("scroll",d);document.getElementById("btn").addEventListener("click",v);document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".explore-item.pass"),t=document.querySelector(".explore-item.games"),e=document.querySelector(".explore-item.reward"),n=document.querySelector(".box1"),s=document.querySelector(".box2"),c=document.querySelector(".box3");function o(l,r,m){i.classList.remove("active"),t.classList.remove("active"),e.classList.remove("active"),l.classList.add("active"),r.classList.remove("active"),m.classList.remove("active")}n.addEventListener("mouseover",function(){o(i,t,e)}),s.addEventListener("mouseover",function(){o(t,i,e)}),c.addEventListener("mouseover",function(){o(e,i,t)}),n.addEventListener("click",function(){o(i,t,e)}),s.addEventListener("click",function(){o(t,i,e)}),c.addEventListener("click",function(){o(e,i,t)})});
//# sourceMappingURL=commonHelpers.js.map

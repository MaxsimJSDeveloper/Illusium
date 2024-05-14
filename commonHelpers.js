import{a as l}from"./assets/vendor-37453147.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();class d{constructor(){window.addEventListener("DOMContentLoaded",()=>this.init())}initLayers(t){const i=(n,e,o,r)=>{l({targets:t+" "+n+" .el",scale:()=>l.random(e,o),rotate:()=>l.random(0,360),opacity:1,easing:"easeInOutQuad",duration:r,complete:i.bind(null,n,e,o,r)})};i(".sigil-layer-1",1,2,4e3),i(".sigil-layer-2",.6,1,3e3),i(".sigil-layer-3",2,3,2e3)}attachAnimationContainer(){const t=document.querySelector(".for-animation");t.innerHTML=`
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
    `}init(){this.attachAnimationContainer(),this.initLayers(".for-animation")}}function u(){let s=document.querySelector(".js-header"),t=document.querySelector(".logo-wrap"),i=document.querySelector(".name"),n=document.querySelector(".js-header").clientHeight;document.onscroll=function(){window.scrollY>n?(s.classList.add("fixed"),t.classList.add("min"),i.classList.add("delete"),document.body.style.paddingTop=n+"px"):(s.classList.remove("fixed"),t.classList.remove("min"),i.classList.remove("delete"),document.body.removeAttribute("style"))}}function a(){const s=document.querySelectorAll(".anime-items");for(let t=0;t<s.length;t++){const i=s[t],n=i.offsetHeight,e=m(i).top,o=4;let r=window.innerHeight-n/o;n>window.innerHeight&&(r=window.innerHeight-window.innerHeight/o),window.scrollY>e-r&&window.scrollY<e+n?i.classList.add("active"):i.classList.contains(".anim-no-hide")||i.classList.remove("active")}}function m(s){const t=s.getBoundingClientRect(),i=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+i}}window.addEventListener("scroll",a);u();new d;window.addEventListener("scroll",a);function f(){var s=document.querySelector(".button"),t=document.querySelector(".sidebar");const i=document.querySelector(".burger-wrap");s.classList.toggle("active");var n=s.querySelector(".top");n.classList.toggle("active");var e=s.querySelector(".middle");e.classList.toggle("active");var o=s.querySelector(".bottom");o.classList.toggle("active");var r=t.style.display==="block";if(r)t.style.display="none",i.style.paddingLeft="0";else{t.style.display="block";let c=t.offsetWidth;console.log(c),i.style.paddingLeft=c+"px"}}document.getElementById("btn").addEventListener("click",f);
//# sourceMappingURL=commonHelpers.js.map

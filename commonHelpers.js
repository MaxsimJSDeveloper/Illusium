import{a as l}from"./assets/vendor-37453147.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class c{constructor(){window.addEventListener("DOMContentLoaded",()=>this.init())}initLayers(i){const n=(o,e,t,r)=>{l({targets:i+" "+o+" .el",scale:()=>l.random(e,t),rotate:()=>l.random(0,360),opacity:1,easing:"easeInOutQuad",duration:r,complete:n.bind(null,o,e,t,r)})};n(".sigil-layer-1",1,2,4e3),n(".sigil-layer-2",.6,1,3e3),n(".sigil-layer-3",2,3,2e3)}attachAnimationContainer(){const i=document.querySelector(".for-animation");i.innerHTML=`
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
    `}init(){this.attachAnimationContainer(),this.initLayers(".for-animation")}}function a(){let s=document.querySelector(".js-header"),i=document.querySelector(".logo-wrap"),n=document.querySelector(".name"),o=document.querySelector(".js-header").clientHeight;document.onscroll=function(){window.scrollY>o?(s.classList.add("fixed"),i.classList.add("min"),n.classList.add("delete"),document.body.style.paddingTop=o+"px"):(s.classList.remove("fixed"),i.classList.remove("min"),n.classList.remove("delete"),document.body.removeAttribute("style"))}}function d(){const s=document.querySelectorAll(".anime-items");for(let i=0;i<s.length;i++){const n=s[i],o=n.offsetHeight,e=m(n).top,t=4;let r=window.innerHeight-o/t;o>window.innerHeight&&(r=window.innerHeight-window.innerHeight/t),window.scrollY>e-r&&window.scrollY<e+o?n.classList.add("active"):n.classList.contains(".anim-no-hide")||n.classList.remove("active")}}function m(s){const i=s.getBoundingClientRect();return scrollTop=window.pageYOffset||document.documentElement.scrollTop,{top:i.top+scrollTop}}a();new c;window.addEventListener("scroll",d);
//# sourceMappingURL=commonHelpers.js.map

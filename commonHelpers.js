import{a as l}from"./assets/vendor-37453147.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();class d{constructor(){window.addEventListener("DOMContentLoaded",()=>this.init())}initLayers(n){const t=(o,e,i,r)=>{l({targets:n+" "+o+" .el",scale:()=>l.random(e,i),rotate:()=>l.random(0,360),opacity:1,easing:"easeInOutQuad",duration:r,complete:t.bind(null,o,e,i,r)})};t(".sigil-layer-1",1,2,4e3),t(".sigil-layer-2",.6,1,3e3),t(".sigil-layer-3",2,3,2e3)}attachAnimationContainer(){const n=document.querySelector(".for-animation");n.innerHTML=`
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
    `}init(){this.attachAnimationContainer(),this.initLayers(".for-animation")}}function a(){let s=document.querySelector(".js-header"),n=document.querySelector(".logo-wrap"),t=document.querySelector(".name"),o=document.querySelector(".js-header").clientHeight;document.onscroll=function(){window.scrollY>o?(s.classList.add("fixed"),n.classList.add("min"),t.classList.add("delete"),document.body.style.paddingTop=o+"px"):(s.classList.remove("fixed"),n.classList.remove("min"),t.classList.remove("delete"),document.body.removeAttribute("style"))}}function c(){const s=document.querySelectorAll(".anime-items");for(let n=0;n<s.length;n++){const t=s[n],o=t.offsetHeight,e=m(t).top,i=4;let r=window.innerHeight-o/i;o>window.innerHeight&&(r=window.innerHeight-window.innerHeight/i),window.scrollY>e-r&&window.scrollY<e+o?t.classList.add("active"):t.classList.contains(".anim-no-hide")||t.classList.remove("active")}}function m(s){const n=s.getBoundingClientRect(),t=window.pageYOffset||document.documentElement.scrollTop;return{top:n.top+t}}window.addEventListener("scroll",c);a();new d;window.addEventListener("scroll",c);
//# sourceMappingURL=commonHelpers.js.map

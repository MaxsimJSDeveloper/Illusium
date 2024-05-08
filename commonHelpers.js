import{a as n}from"./assets/vendor-37453147.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class a{constructor(){window.addEventListener("DOMContentLoaded",()=>this.init())}initLayers(i){const s=(r,e,t,o)=>{n({targets:i+" "+r+" .el",scale:()=>n.random(e,t),rotate:()=>n.random(0,360),opacity:1,easing:"easeInOutQuad",duration:o,complete:s.bind(null,r,e,t,o)})};s(".sigil-layer-1",1,2,4e3),s(".sigil-layer-2",.6,1,3e3),s(".sigil-layer-3",2,3,2e3)}attachAnimationContainer(){const i=document.querySelector(".for-animation");i.innerHTML=`
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
    `}init(){this.attachAnimationContainer(),this.initLayers(".for-animation")}}function d(){let l=document.querySelector(".js-header"),i=document.querySelector(".logo-wrap"),s=document.querySelector(".name"),r=document.querySelector(".js-header").clientHeight;document.onscroll=function(){window.scrollY>r?(l.classList.add("fixed"),i.classList.add("min"),s.classList.add("delete"),document.body.style.paddingTop=r+"px"):(l.classList.remove("fixed"),i.classList.remove("min"),s.classList.remove("delete"),document.body.removeAttribute("style"))}}d();new a;
//# sourceMappingURL=commonHelpers.js.map

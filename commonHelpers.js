import{a as i}from"./assets/vendor-37453147.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class a{constructor(){window.addEventListener("DOMContentLoaded",()=>this.init()),setInterval(()=>{this.colourSwap()},8e3),this.activeTheme=0}get settings(){return{themes:[{background:"#222",colour:"#eee"},{background:"#eee",colour:"#222"},{background:"#401a19",colour:"#ff3633"},{background:"#300169",colour:"#f7ff00"},{background:"#300023",colour:"#ff37de"},{background:"#21200f",colour:"#fff949"}]}}initLayers(){const o=(s,r,e,t)=>{i({targets:s+" .el",scale:()=>i.random(r,e),rotate:()=>i.random(0,360),opacity:1,easing:"easeInOutQuad",duration:t,complete:o.bind(null,s,r,e,t)})};o(".sigil-layer-1",2,4,4e3),o(".sigil-layer-2",1.2,2,3e3),o(".sigil-layer-3",4,6,2e3)}colourSwap(){this.activeTheme=Math.floor(Math.random()*this.settings.themes.length),i({targets:".el",opacity:[{value:.25,easing:"linear"},{value:1,easing:"linear"}]}),i({targets:"welcome",backgroundColor:this.settings.themes[this.activeTheme].background,color:this.settings.themes[this.activeTheme].colour,easing:"easeInOutQuad",duration:1e3})}init(){this.initLayers()}}function c(){let n=document.querySelector(".js-header"),o=document.querySelector(".logo-wrap"),s=document.querySelector(".name"),r=document.querySelector(".js-header").clientHeight;document.onscroll=function(){window.scrollY>r?(n.classList.add("fixed"),o.classList.add("min"),s.classList.add("delete"),document.body.style.paddingTop=r+"px"):(n.classList.remove("fixed"),o.classList.remove("min"),s.classList.remove("delete"),document.body.removeAttribute("style"))}}c();new a;
//# sourceMappingURL=commonHelpers.js.map

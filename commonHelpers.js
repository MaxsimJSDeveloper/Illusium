import{a as s}from"./assets/vendor-37453147.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();class m{constructor(){window.addEventListener("DOMContentLoaded",()=>this.init()),setInterval(()=>{this.colourSwap()},8e3),this.activeTheme=0}get settings(){return{themes:[{background:"#222",colour:"#eee"},{background:"#eee",colour:"#222"},{background:"#401a19",colour:"#ff3633"},{background:"#300169",colour:"#f7ff00"},{background:"#300023",colour:"#ff37de"},{background:"#21200f",colour:"#fff949"}]}}initLayers(){const o=(i,r,e,t)=>{s({targets:i+" .el",scale:()=>s.random(r,e),rotate:()=>s.random(0,360),opacity:1,easing:"easeInOutQuad",duration:t,complete:o.bind(null,i,r,e,t)})};o(".sigil-layer-1",2,4,4e3),o(".sigil-layer-2",1.2,2,3e3),o(".sigil-layer-3",4,6,2e3)}colourSwap(){this.activeTheme=Math.floor(Math.random()*this.settings.themes.length),s({targets:".el",opacity:[{value:.25,easing:"linear"},{value:1,easing:"linear"}]}),s({targets:"welcome",backgroundColor:this.settings.themes[this.activeTheme].background,color:this.settings.themes[this.activeTheme].colour,easing:"easeInOutQuad",duration:1e3})}init(){this.initLayers()}}new m;let a=document.querySelector(".js-header"),c=document.querySelector(".logo-wrap"),d=document.querySelector(".name"),u=document.querySelector(".js-header").clientHeight;document.onscroll=function(){window.scrollY>u?(a.classList.add("fixed"),c.classList.add("min"),d.classList.add("delete"),document.body.style.paddingTop=u+20+"px"):(a.classList.remove("fixed"),c.classList.remove("min"),d.classList.remove("delete"),document.body.removeAttribute("style"))};
//# sourceMappingURL=commonHelpers.js.map

import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l(s){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"43479786-9f1318bdfd325e0623d2d394a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(r=>r.json()).then(r=>{if(r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}else return r.hits}).catch(r=>console.log(r))}function p({webformatURL:s,largeImageURL:n,tags:o,likes:r,views:e,comments:t,downloads:a}){return`<li class="gallery-list-item">
        <a href="${n}"><img class="gallery-img" src="${s}" alt="${o}" /></a>
        <div class="img-info">
          <span class="likes"
            ><p>Likes</p>
            <p>${r}</p></span
          >
          <span class="views"
            ><p>Views</p>
            <p>${e}</p></span
          >
          <span class="comments"
            ><p>Comments</p>
            <p>${t}</p></span
          >
          <span class="downloads"
            ><p>Downloads</p>
            <p>${a}</p></span
          >
        </div>
      </li>`}function u(s){return s.map(p).join("")}const f=document.querySelector(".form"),i=document.querySelector(".gallery");f.addEventListener("submit",m);function m(s){s.preventDefault();const n=s.target.elements.search.value;l(n).then(o=>{if(o){const r=u(o);i.innerHTML=r}else i.innerHTML=""}).catch(o=>{console.error(o)}),s.target.reset()}
//# sourceMappingURL=commonHelpers.js.map

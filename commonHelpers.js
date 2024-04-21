import{i as l,S as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function u(t){const n=`https://pixabay.com/api/?${new URLSearchParams({key:"43479786-9f1318bdfd325e0623d2d394a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return d(),fetch(n).then(r=>r.json()).then(r=>{if(i(),r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}else return r.hits}).catch(r=>{console.log(r),i()})}function d(){const t=document.createElement("span");t.className="loader",document.body.appendChild(t)}function i(){const t=document.querySelector(".loader");t&&t.remove()}function m({webformatURL:t,largeImageURL:s,tags:n,likes:r,views:e,comments:o,downloads:a}){return`<li class="gallery-list-item">
        <a href="${s}" data-caption="${n}"><img class="gallery-img" src="${t}" alt="${n}" /></a>
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
            <p>${o}</p></span
          >
          <span class="downloads"
            ><p>Downloads</p>
            <p>${a}</p></span
          >
        </div>
      </li>`}function f(t){return t.map(m).join("")}const h=document.querySelector(".form"),c=document.querySelector(".gallery");h.addEventListener("submit",g);function g(t){t.preventDefault();const s=t.target.elements.search.value;u(s).then(n=>{if(n){const r=f(n);c.innerHTML=r,new p(".gallery a",{captionSelector:"self",captionType:"data",captionsData:"caption",captionDelay:250}).refresh()}else c.innerHTML=""}).catch(n=>{console.error(n)}),t.target.reset()}
//# sourceMappingURL=commonHelpers.js.map

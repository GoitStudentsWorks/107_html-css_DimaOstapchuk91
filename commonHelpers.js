import{S as i}from"./assets/vendor-c09b8518.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".header-link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open");const l=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};s.forEach(t=>t.addEventListener("click",e)),o.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();var c=!1;function a(){var n=document.querySelectorAll(".catalog-watch-link");if(c){for(var o=n.length-2;o<n.length;o++)n[o].style.display="none";document.querySelector(".catalog-btn").textContent="Show more"}else{for(var o=n.length-2;o<n.length;o++){n[o].style.display="block";var r=n[o].querySelector("picture");r.style.height="223.18px"}document.querySelector(".catalog-btn").textContent="Show less"}c=!c}document.querySelector(".catalog-btn").addEventListener("click",a);new i(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{loop:!1,slidesPerView:3,spaceBetween:20}},pagination:{el:".pagination",bulletClass:"pagination__button",bulletActiveClass:"pagination__button--active"},navigation:{nextEl:".carousel-button.next",prevEl:".carousel-button.prev"}});
//# sourceMappingURL=commonHelpers.js.map

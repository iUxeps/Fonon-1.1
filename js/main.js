(()=>{function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=".nav-item-trig",i=".nav-drop",n=".burger-menu",o=".burger-close",s=".navbar",r=".nav-bg",a=document.querySelector(t),c=document.querySelector(i);a&&c&&(a.addEventListener("click",(function(){c.classList.toggle("nav-drop-active"),a.classList.toggle("active")})),window.addEventListener("click",(function(e){var t=e.target;t.closest(".nav-drop")||t.closest(".nav-item-trig")||c.classList.remove("nav-drop-active")})));var l=document.querySelector(s),d=document.querySelector(r),u=document.querySelector(n),v=document.querySelector(o);l&&u&&d&&v&&(u.addEventListener("click",(function(){l.style.display="block",d.style.display="block",document.body.style.overflow="hidden"})),d.addEventListener("click",(function(){l.style.display="none",d.style.display="none",document.body.style.overflow=""})),v.addEventListener("click",(function(){l.style.display="none",d.style.display="none",document.body.style.overflow=""})));var m=document.querySelectorAll(".tabs-nav__btn"),p=document.querySelectorAll(".tabs-item");m&&p&&m.forEach((function(e){e.addEventListener("click",(function(){var t=e,i=t.getAttribute("data-tab"),n=document.querySelector(i);m.forEach((function(e){e.classList.remove("active")})),p.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),n.classList.add("active")}))}));var w=document.querySelector("#selectField"),g=document.querySelector("#selectText"),y=document.querySelector("#select-list"),f=document.querySelector("#arrow-icon"),h=document.querySelectorAll(".options");w&&g&&y&&h&&(w.onclick=function(){y.classList.toggle("hide"),f.classList.toggle("rotate")},h.forEach((function(e){e.onclick=function(){g.innerHTML=e.textContent,y.classList.toggle("hide"),f.classList.toggle("rotate")}})));var b=document.querySelectorAll(".accordion");if(b)for(var k=0;k<b.length;k++)b[k].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?(e.style.display="none",b.classList.add("active")):(e.style.display="block",b.classList.remove("active"))}));var L=document.querySelector(".filter-open"),S=document.querySelector(".filter-close"),E=document.querySelector(".filter-side");L&&E&&S&&(L.addEventListener("click",(function(){E.classList.add("active"),document.body.style.overflow="hidden"})),S.addEventListener("click",(function(){E.classList.remove("active"),document.body.style.overflow=""})));var P=document.querySelectorAll(".filter-content .filter-size");P&&P.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active")}))}));var q;new Swiper("#swiper-home",{loop:!1,centeredSlides:!0,spaceBetween:40,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper("#swiper-collec",{loop:!1,breakpoints:{200:{slidesPerView:1,spaceBetween:10},380:{spaceBetween:10,slidesPerView:1.5},550:{slidesPerView:2,spaceBetween:20},780:{slidesPerView:3,spaceBetween:30},1030:{slidesPerView:4,spaceBetween:27}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper("#swiper-best",{loop:!1,breakpoints:{200:{slidesPerView:1,spaceBetween:10},380:{slidesPerView:1.5,spaceBetween:10},550:{slidesPerView:2,spaceBetween:20},780:{slidesPerView:3,spaceBetween:30},1030:{slidesPerView:4,spaceBetween:27}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper("#swiper-similar",{loop:!1,breakpoints:{200:{slidesPerView:1,spaceBetween:10},380:{slidesPerView:1.5,spaceBetween:10},550:{slidesPerView:2,spaceBetween:20},780:{slidesPerView:3,spaceBetween:30},1030:{slidesPerView:4,spaceBetween:27}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper("#swiper-action",{loop:!1,slidesPerView:2,spaceBetween:30,breakpoints:{280:{slidesPerView:1,spaceBetween:40},640:{slidesPerView:2,spaceBetween:30},1450:{slidesPerView:2,spaceBetween:30}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});q=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.firstSmallImage=this.container.querySelector(".small-preview"),this.zoomedImage=this.container.querySelector(".zoomed-image"),this.init(),this.changePhoto(),this.mouseover(),this.mouseMove(),this.mouseLeave()}var i,n,o;return i=t,(n=[{key:"init",value:function(){this.container||console.error("Нет элемента container"),this.zoomedImage||console.error("Нет элемента zoomedImage"),this.firstSmallImage?this.zoomedImage.style.backgroundImage="url("+this.firstSmallImage.src+")":console.error("Нет элемента firstSmallImage")}},{key:"changePhoto",value:function(){var e=this;this.container.addEventListener("click",(function(t){var i=t.target;i.classList.contains("small-preview")&&(e.zoomedImage.style.backgroundImage="url("+i.src+")")}))}},{key:"mouseover",value:function(){var e=this;this.zoomedImage.addEventListener("mouseover",(function(){e.zoomedImage.style.backgroundSize="250%"}))}},{key:"mouseMove",value:function(){var e=this;this.zoomedImage.addEventListener("mousemove",(function(t){var i=e.zoomedImage.getBoundingClientRect(),n=t.clientX-i.left,o=t.clientY-i.top,s=Math.round(100/(i.width/n)),r=Math.round(100/(i.height/o));e.zoomedImage.style.backgroundPosition=s+"%"+r+"%"}))}},{key:"mouseLeave",value:function(){var e=this;this.zoomedImage.addEventListener("mouseleave",(function(){e.zoomedImage.style.backgroundSize="cover",e.zoomedImage.style.backgroundPosition="center"}))}}])&&e(i.prototype,n),o&&e(i,o),t}(),document.querySelectorAll(".vanilla-zoom").forEach((function(e){new q(e)}))})();
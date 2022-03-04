(() => {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }
  var t = ".nav-item-trig",
    n = ".nav-drop",
    i = ".burger-menu",
    o = ".burger-close",
    s = ".navbar",
    r = ".nav-bg",
    c = document.querySelector(t),
    a = document.querySelector(n);
  c && a && (c.addEventListener("click", (function () {
    a.classList.toggle("nav-drop-active"), c.classList.toggle("active")
  })), window.addEventListener("click", (function (e) {
    var t = e.target;
    t.closest(".nav-drop") || t.closest(".nav-item-trig") || a.classList.remove("nav-drop-active")
  })));
  var l = document.querySelector(s),
    d = document.querySelector(r),
    u = document.querySelector(i),
    v = document.querySelector(o);
  l && u && d && v && (u.addEventListener("click", (function () {
    l.style.display = "block", d.style.display = "block", document.body.style.overflow = "hidden"
  })), d.addEventListener("click", (function () {
    l.style.display = "none", d.style.display = "none", document.body.style.overflow = ""
  })), v.addEventListener("click", (function () {
    l.style.display = "none", d.style.display = "none", document.body.style.overflow = ""
  })));
  var m = document.querySelectorAll(".tabs-nav__btn"),
    p = document.querySelectorAll(".tabs-item");
  m && p && m.forEach((function (e) {
    e.addEventListener("click", (function () {
      var t = e,
        n = t.getAttribute("data-tab"),
        i = document.querySelector(n);
      m.forEach((function (e) {
        e.classList.remove("active")
      })), p.forEach((function (e) {
        e.classList.remove("active")
      })), t.classList.add("active"), i.classList.add("active")
    }))
  }));
  var w = document.querySelector("#selectField"),
    g = document.querySelector("#selectText"),
    y = document.querySelector("#select-list"),
    f = document.querySelector("#arrow-icon"),
    h = document.querySelectorAll(".options"),
    b = document.querySelector(".selector");
  w && g && y && h && b && (w.onclick = function () {
    y.classList.toggle("hide"), f.classList.toggle("rotate")
  }, h.forEach((function (e) {
    e.onclick = function () {
      g.innerHTML = e.textContent, y.classList.toggle("hide"), f.classList.toggle("rotate")
    }
  })), document.addEventListener("click", (function (e) {
    b.contains(e.target) || y.classList.add("hide")
  })));
  var k = document.querySelectorAll(".accordion");
  if (k)
    for (var S = 0; S < k.length; S++) k[S].addEventListener("click", (function () {
      this.classList.toggle("active");
      var e = this.nextElementSibling;
      "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
    }));
  var L = document.querySelector(".filter-open"),
    E = document.querySelector(".filter-close"),
    P = document.querySelector(".filter-side");
  L && P && E && (L.addEventListener("click", (function () {
    P.classList.add("active"), document.body.style.overflow = "hidden"
  })), E.addEventListener("click", (function () {
    P.classList.remove("active"), document.body.style.overflow = ""
  })));
  var q = document.querySelectorAll(".filter-size");
  q && q.forEach((function (e) {
    e.addEventListener("click", (function () {
      e.classList.toggle("active")
    }))
  }));
  var B;
  new Swiper("#swiper-home", {
    loop: !1,
    centeredSlides: !0,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }), new Swiper("#swiper-collec", {
    loop: !1,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        spaceBetween: 10,
        slidesPerView: 1.5
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1030: {
        slidesPerView: 4,
        spaceBetween: 27
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }), new Swiper("#swiper-best", {
    loop: !1,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1030: {
        slidesPerView: 4,
        spaceBetween: 27
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }), new Swiper("#swiper-recently", {
    loop: !1,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1030: {
        slidesPerView: 4,
        spaceBetween: 27
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: !0
    }
  }), new Swiper("#swiper-action", {
    loop: !1,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1450: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: !0
    }
  });
  B = function () {
    function t(e) {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.container = e, this.firstSmallImage = this.container.querySelector(".small-preview"), this.zoomedImage = this.container.querySelector(".zoomed-image"), this.init(), this.changePhoto(), this.mouseover(), this.mouseMove(), this.mouseLeave()
    }
    var n, i, o;
    return n = t, (i = [{
      key: "init",
      value: function () {
        this.container || console.error("Нет элемента container"), this.zoomedImage || console.error("Нет элемента zoomedImage"), this.firstSmallImage ? this.zoomedImage.style.backgroundImage = "url(" + this.firstSmallImage.src + ")" : console.error("Нет элемента firstSmallImage")
      }
    }, {
      key: "changePhoto",
      value: function () {
        var e = this;
        this.container.addEventListener("click", (function (t) {
          var n = t.target;
          n.classList.contains("small-preview") && (e.zoomedImage.style.backgroundImage = "url(" + n.src + ")")
        }))
      }
    }, {
      key: "mouseover",
      value: function () {
        var e = this;
        this.zoomedImage.addEventListener("mouseover", (function () {
          e.zoomedImage.style.backgroundSize = "250%"
        }))
      }
    }, {
      key: "mouseMove",
      value: function () {
        var e = this;
        this.zoomedImage.addEventListener("mousemove", (function (t) {
          var n = e.zoomedImage.getBoundingClientRect(),
            i = t.clientX - n.left,
            o = t.clientY - n.top,
            s = Math.round(100 / (n.width / i)),
            r = Math.round(100 / (n.height / o));
          e.zoomedImage.style.backgroundPosition = s + "%" + r + "%"
        }))
      }
    }, {
      key: "mouseLeave",
      value: function () {
        var e = this;
        this.zoomedImage.addEventListener("mouseleave", (function () {
          e.zoomedImage.style.backgroundSize = "cover", e.zoomedImage.style.backgroundPosition = "center"
        }))
      }
    }]) && e(n.prototype, i), o && e(n, o), t
  }(), document.querySelectorAll(".vanilla-zoom").forEach((function (e) {
    new B(e)
  }))
})();
(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => m });
        var d = n(81),
          a = n.n(d),
          i = n(645),
          c = n.n(i),
          o = n(667),
          l = n.n(o),
          r = new URL(n(104), n.b),
          s = c()(a()),
          p = l()(r);
        s.push([
          e.id,
          `html {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\nbody {\n  background-color: black;\n  background-image: url(${p});\n  background-size: auto 30vh;\n  display: grid;\n  grid-template-rows: 1fr 16fr 1fr;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-content: center;\n  gap: 5%;\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n#top {\n  grid-row: 1;\n  display: flex;\n  justify-content: center;\n  background-color: lavender;\n  width: 100%;\n}\nul {\n  display: flex;\n  justify-content: center;\n  list-style-type: none;\n  padding: 0px;\n  margin: 0px;\n  gap: 20%;\n  width: 20%;\n}\nli {\n  display: flex;\n  align-items: center;\n  border-left: solid 2px black;\n  border-right: solid 2px black;\n  border-top: solid 2px black;\n  padding-left: 10%;\n  padding-right: 10%;\n  margin-top: 10px;\n}\n#content {\n  grid-row: 2;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5%;\n  color: crimson;\n  background-color: lavender;\n  width: 70%;\n  height: 90%;\n  overflow: scroll;\n  text-align: center;\n  font-size: 1.5rem;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n}\n#content::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n.outer {\n  display: flex;\n  justify-content: center;\n  clip-path: polygon(\n    20% 0%,\n    80% 0%,\n    100% 20%,\n    100% 80%,\n    80% 100%,\n    20% 100%,\n    0% 80%,\n    0% 20%\n  );\n  background-color: mediumpurple;\n  width: 50%;\n  padding: 20px;\n  margin: 20px;\n}\n.inner {\n  padding: 8%;\n  background-color: lavender;\n  clip-path: polygon(\n    20% 0%,\n    80% 0%,\n    100% 20%,\n    100% 80%,\n    80% 100%,\n    20% 100%,\n    0% 80%,\n    0% 20%\n  );\n  width: 90%;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.inner.header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10%;\n}\n.d1 {\n  width: 100px;\n  height: auto;\n}\n.d2 {\n  width: 100px;\n  height: auto;\n}\n#customer {\n  font-weight: bold;\n}\n.menuContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1%;\n}\n.menuImg,\n.contactImg {\n  width: clamp(100px, 36.458vw, 250px);\n  height: auto;\n  border: solid 2px;\n  border-radius: 8px;\n  border-color: mediumpurple;\n}\n#footer {\n  grid-row: 3;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: lavender;\n  width: 100%;\n}\na {\n  text-decoration: none;\n  color: black;\n  font-size: 1rem;\n}\n@media only screen and (max-width: 1310px) {\n  h1 {\n    font-size: 36px;\n  }\n  .d1,\n  .d2 {\n    width: 75px;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  h1 {\n    font-size: 30px;\n  }\n  .d1,\n  .d2 {\n    width: 50px;\n  }\n}\n@media only screen and (max-width: 760px) {\n  h1 {\n    font-size: 24px;\n  }\n  .d1,\n  .d2 {\n    width: 35px;\n  }\n}\n@media only screen and (max-width: 560px) {\n  h1 {\n    font-size: 16px;\n  }\n  h2 {\n    font-size: 24px;\n  }\n  .d1,\n  .d2 {\n    width: 25px;\n  }\n}\n`,
          "",
        ]);
        const m = s;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  d = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  d &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  d && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, d, a, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (d)
                for (var o = 0; o < this.length; o++) {
                  var l = this[o][0];
                  null != l && (c[l] = !0);
                }
              for (var r = 0; r < e.length; r++) {
                var s = [].concat(e[r]);
                (d && c[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  a &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = a))
                      : (s[4] = "".concat(a))),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, d = 0; d < t.length; d++)
            if (t[d].identifier === e) {
              n = d;
              break;
            }
          return n;
        }
        function d(e, d) {
          for (var i = {}, c = [], o = 0; o < e.length; o++) {
            var l = e[o],
              r = d.base ? l[0] + d.base : l[0],
              s = i[r] || 0,
              p = "".concat(r, " ").concat(s);
            i[r] = s + 1;
            var m = n(p),
              u = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== m) t[m].references++, t[m].updater(u);
            else {
              var h = a(u, d);
              (d.byIndex = o),
                t.splice(o, 0, { identifier: p, updater: h, references: 1 });
            }
            c.push(p);
          }
          return c;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var i = d((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < i.length; c++) {
              var o = n(i[c]);
              t[o].references--;
            }
            for (var l = d(e, a), r = 0; r < i.length; r++) {
              var s = n(i[r]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            i = l;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var d = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!d)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          d.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var d = "";
                n.supports && (d += "@supports (".concat(n.supports, ") {")),
                  n.media && (d += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (d += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (d += n.css),
                  a && (d += "}"),
                  n.media && (d += "}"),
                  n.supports && (d += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (d +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(d, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      104: (e, t, n) => {
        e.exports = n.p + "98bd08ddfcbba1b7f859.png";
      },
    },
    t = {};
  function n(d) {
    var a = t[d];
    if (void 0 !== a) return a.exports;
    var i = (t[d] = { id: d, exports: {} });
    return e[d](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var d in t)
        n.o(t, d) &&
          !n.o(e, d) &&
          Object.defineProperty(e, d, { enumerable: !0, get: t[d] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var d = t.getElementsByTagName("script");
        if (d.length) for (var a = d.length - 1; a > -1 && !e; ) e = d[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      const e = n.p + "63615b9740471634d322.png";
      function t() {
        const t = document.getElementById("content"),
          n = document.createElement("div"),
          d = document.createElement("div"),
          a = document.createElement("h1"),
          i = document.createElement("img"),
          c = document.createElement("img"),
          o = document.createElement("div"),
          l = document.createElement("div"),
          r = document.createElement("div"),
          s = document.createElement("div"),
          p = document.createElement("div"),
          m = document.createElement("div"),
          u = document.createElement("h3"),
          h = document.createElement("div"),
          C = document.createElement("div"),
          f = document.createElement("div"),
          g = document.createElement("div"),
          E = document.createElement("div"),
          v = document.createElement("div"),
          x = document.createElement("div"),
          b = document.createElement("div"),
          y = document.createElement("div"),
          L = document.createElement("h3"),
          w = document.createElement("div");
        (a.textContent = "RPG Café"),
          (i.src = e),
          (i.alt = "knight"),
          (c.src = e),
          (c.alt = "knight"),
          (r.textContent =
            "RPG Café is the best role-playing café around! Not only is their food and service great, but also the staff are committed to playing their roles. Definitely a place I will come back to!"),
          (s.textContent = "Frodo"),
          (u.textContent = "Hours"),
          (h.textContent = "Monday: 10am - 9pm"),
          (C.textContent = "Tuesday 10am - 9pm"),
          (f.textContent = "Wednesday 10am - 9pm"),
          (g.textContent = "Thursday 10am - 9pm"),
          (E.textContent = "Friday 10am - 11pm"),
          (v.textContent = "Saturday 10am - 11pm"),
          (x.textContent = "Sunday 10am - 9pm"),
          (L.textContent = "Location"),
          (w.textContent = "222 Sorcerer Drive, Lothric, California"),
          n.classList.add("outer"),
          d.classList.add("inner"),
          d.classList.add("header"),
          i.classList.add("d1"),
          c.classList.add("d2"),
          o.classList.add("outer"),
          l.classList.add("inner"),
          (s.id = "customer"),
          p.classList.add("outer"),
          m.classList.add("inner"),
          b.classList.add("outer"),
          y.classList.add("inner"),
          d.appendChild(i),
          d.appendChild(a),
          d.appendChild(c),
          n.appendChild(d),
          l.appendChild(r),
          l.appendChild(s),
          o.appendChild(l),
          m.appendChild(u),
          m.appendChild(h),
          m.appendChild(C),
          m.appendChild(f),
          m.appendChild(g),
          m.appendChild(E),
          m.appendChild(v),
          m.appendChild(x),
          p.appendChild(m),
          y.appendChild(L),
          y.appendChild(w),
          b.appendChild(y),
          t.appendChild(n),
          t.appendChild(o),
          t.appendChild(p),
          t.appendChild(b);
      }
      const d = n.p + "aa8590c069fb1e87a7d6.jpg",
        a = n.p + "9183c72f080459a75ce5.jpg",
        i = n.p + "a0e9dc6e7294f50568a6.jpg",
        c = n.p + "456a9957040d42e10c2a.jpg",
        o = n.p + "17a4c1b54671b2a73bc8.jpg",
        l = n.p + "d691e239468724afff27.jpg",
        r = n.p + "7f833d42ddb48dc51241.jpg",
        s = n.p + "0771c219e8adc6befb5a.jpg",
        p = n.p + "9487ce6c51a39e0bec7d.jpg",
        m = n.p + "3421149826dbca38286f.jpg",
        u = n.p + "dfb1ca383ff67d1054cf.jpg",
        h = n.p + "0e0d755a351b3c03d04d.jpg",
        C = n.p + "33fbfbf15aecf5006888.png",
        f = n.p + "dd296c2299ee5d89eb79.jpg",
        g = n.p + "445c79792ecc74306f1c.jpg",
        E = n.p + "5349b46014dd5fd76355.jpg",
        v = n.p + "0bb7004acb76bbcf8b9f.png";
      var x = n(379),
        b = n.n(x),
        y = n(795),
        L = n.n(y),
        w = n(569),
        k = n.n(w),
        I = n(565),
        S = n.n(I),
        j = n(216),
        B = n.n(j),
        T = n(589),
        P = n.n(T),
        M = n(426),
        $ = {};
      ($.styleTagTransform = P()),
        ($.setAttributes = S()),
        ($.insert = k().bind(null, "head")),
        ($.domAPI = L()),
        ($.insertStyleElement = B()),
        b()(M.Z, $),
        M.Z && M.Z.locals && M.Z.locals;
      const A = document.getElementById("content"),
        G = document.getElementById("hContainer"),
        z = document.getElementById("mContainer"),
        O = document.getElementById("cContainer"),
        R = document.getElementById("home"),
        F = document.getElementById("menu"),
        N = document.getElementById("contact");
      function D(e) {
        for (; e.firstElementChild; ) e.removeChild(e.firstElementChild);
      }
      function U(e) {
        (e.style.backgroundColor = "lavender"), (e.style.color = "black");
      }
      function Z(e) {
        (e.style.backgroundColor = "crimson"), (e.style.color = "white");
      }
      t(),
        Z(G),
        R.addEventListener("click", () => {
          D(A), t(), U(z), U(O), Z(G);
        }),
        F.addEventListener("click", () => {
          D(A),
            (function () {
              const e = document.getElementById("content"),
                t = document.createElement("div"),
                n = document.createElement("div"),
                f = document.createElement("h1"),
                g = document.createElement("img"),
                E = document.createElement("img"),
                v = document.createElement("div"),
                x = document.createElement("div"),
                b = document.createElement("div"),
                y = document.createElement("h2"),
                L = document.createElement("div"),
                w = document.createElement("div"),
                k = document.createElement("h3"),
                I = document.createElement("p"),
                S = document.createElement("p"),
                j = document.createElement("img"),
                B = document.createElement("div"),
                T = document.createElement("div"),
                P = document.createElement("h3"),
                M = document.createElement("p"),
                $ = document.createElement("p"),
                A = document.createElement("img"),
                G = document.createElement("div"),
                z = document.createElement("div"),
                O = document.createElement("div"),
                R = document.createElement("h2"),
                F = document.createElement("div"),
                N = document.createElement("div"),
                D = document.createElement("h3"),
                U = document.createElement("p"),
                Z = document.createElement("p"),
                _ = document.createElement("img"),
                H = document.createElement("div"),
                K = document.createElement("div"),
                W = document.createElement("h3"),
                q = document.createElement("p"),
                J = document.createElement("p"),
                Q = document.createElement("img"),
                V = document.createElement("div"),
                X = document.createElement("div"),
                Y = document.createElement("div"),
                ee = document.createElement("h2"),
                te = document.createElement("div"),
                ne = document.createElement("div"),
                de = document.createElement("h3"),
                ae = document.createElement("p"),
                ie = document.createElement("p"),
                ce = document.createElement("img"),
                oe = document.createElement("div"),
                le = document.createElement("div"),
                re = document.createElement("h3"),
                se = document.createElement("p"),
                pe = document.createElement("p"),
                me = document.createElement("img"),
                ue = document.createElement("div"),
                he = document.createElement("div"),
                Ce = document.createElement("h3"),
                fe = document.createElement("p"),
                ge = document.createElement("p"),
                Ee = document.createElement("img"),
                ve = document.createElement("div"),
                xe = document.createElement("div"),
                be = document.createElement("h3"),
                ye = document.createElement("p"),
                Le = document.createElement("p"),
                we = document.createElement("img"),
                ke = document.createElement("div"),
                Ie = document.createElement("div"),
                Se = document.createElement("h3"),
                je = document.createElement("p"),
                Be = document.createElement("p"),
                Te = document.createElement("img"),
                Pe = document.createElement("div"),
                Me = document.createElement("div"),
                $e = document.createElement("h3"),
                Ae = document.createElement("p"),
                Ge = document.createElement("p"),
                ze = document.createElement("img"),
                Oe = document.createElement("div"),
                Re = document.createElement("div"),
                Fe = document.createElement("h3"),
                Ne = document.createElement("p"),
                De = document.createElement("p"),
                Ue = document.createElement("img"),
                Ze = document.createElement("div"),
                _e = document.createElement("div"),
                He = document.createElement("h3"),
                Ke = document.createElement("p"),
                We = document.createElement("p"),
                qe = document.createElement("img");
              (f.textContent = "Menu"),
                (y.textContent = "Beverages"),
                (R.textContent = "Sides"),
                (ee.textContent = "Entrées"),
                (g.src = C),
                (g.alt = "potion"),
                (E.src = C),
                (E.alt = "Potion"),
                (k.textContent = "Potion Madness"),
                (I.textContent =
                  "A delectable, warm drink said to be made by wizards. It is said that one sip of this potion will bring a smile to your face."),
                (S.textContent = "$3.99"),
                (j.src = c),
                (j.alt = "Potion Madness"),
                (P.textContent = "Goblins' Goblet"),
                (M.textContent =
                  "A small goblet filled with a refreshing, fruity drink that is usually a delicacy among goblins."),
                ($.textContent = "$4.29"),
                (A.src = r),
                (A.alt = "Goblins' Goblet"),
                (D.textContent = "Peasant Bread"),
                (U.textContent =
                  "Bread that is made by peasants, but so delicious that is considered food for the gods."),
                (Z.textContent = "$1.99"),
                (_.src = i),
                (_.alt = "Peasant Bread"),
                (W.textContent = "Priviledged Oats"),
                (q.textContent =
                  "Oats typically eaten by nobles, but through a little magic is now available to all!"),
                (J.textContent = "$1.99"),
                (Q.src = s),
                (Q.alt = "Privileged Oats"),
                (de.textContent = "Elfen Croissant"),
                (ae.textContent =
                  "Two sweet, warm croissant filled with cream cheese and top with powdered sugar. Served with a drink of your choice."),
                (ie.textContent = "$8.99"),
                (ce.src = l),
                (ce.alt = "Elfen Croissant"),
                (re.textContent = "Orcs' Platter"),
                (se.textContent =
                  "Eggs, 3 sausage, 3 slices of bacon, and 3 pancakes. This dish is common breakfast for orcs."),
                (pe.textContent = "$13.99"),
                (me.src = m),
                (me.alt = "Orcs' Platter"),
                (Ce.textContent = "Demon Scorchin Skillet"),
                (fe.textContent =
                  "Eggs, spinach, scorching demon sauce, and mushrooms all in one sizzling hot skillet! *Ingredients can be added for additional charge. Please talk to your server."),
                (ge.textContent = "$12.99"),
                (Ee.src = u),
                (Ee.alt = "Demon Scorchin Skillet"),
                (be.textContent = "Roasted Falcon Sandwhich"),
                (ye.textContent =
                  "Fried chicken, with lettuce, pickles, and cheese. Comes with a side of fries."),
                (Le.textContent = "$11.99"),
                (we.src = o),
                (we.alt = "Roasted Falcon Sandwhich"),
                (Se.textContent = "Knights' Breakfast Bowl"),
                (je.textContent =
                  "Strawberrries, blueberries, oats, yogurt, and chia seeds all come together to make a delicious, fresh breakfast. Knights eat this bowl to replenish their strength."),
                (Be.textContent = "$10.99"),
                (Te.src = a),
                (Te.alt = "Knights' Breakfast Bowl"),
                ($e.textContent = "Clerics Biscuits And Gravy"),
                (Ae.textContent =
                  "A stack of freshly made biscuit that comes with side of our signature gravy and bacon."),
                (Ge.textContent = "$8.99"),
                (ze.src = d),
                (ze.alt = "Clerics Biscuits and Gravy"),
                (Fe.textContent = "Thiefs' Pancakes"),
                (Ne.textContent =
                  "Unlimited pancakes with creamy buttery and sweet syrup. These pancakes are so good you'll want to steal them!"),
                (De.textContent = "$8.99"),
                (Ue.src = p),
                (Ue.alt = "Thiefs' Pancakes"),
                (He.textContent = "Maiden Soufflé"),
                (Ke.textContent =
                  "A simple, elegant soufflé that is made by only the kindest of maidens. Served with a side of your choice."),
                (We.textContent = "$7.99"),
                (qe.src = h),
                (qe.alt = "Maiden Soufflé"),
                g.classList.add("d1"),
                E.classList.add("d2"),
                j.classList.add("menuImg"),
                A.classList.add("menuImg"),
                _.classList.add("menuImg"),
                Q.classList.add("menuImg"),
                ce.classList.add("menuImg"),
                me.classList.add("menuImg"),
                Ee.classList.add("menuImg"),
                we.classList.add("menuImg"),
                Te.classList.add("menuImg"),
                ze.classList.add("menuImg"),
                Ue.classList.add("menuImg"),
                qe.classList.add("menuImg"),
                t.classList.add("outer"),
                x.classList.add("outer"),
                z.classList.add("outer"),
                X.classList.add("outer"),
                L.classList.add("outer"),
                B.classList.add("outer"),
                F.classList.add("outer"),
                H.classList.add("outer"),
                te.classList.add("outer"),
                oe.classList.add("outer"),
                ue.classList.add("outer"),
                ve.classList.add("outer"),
                ke.classList.add("outer"),
                Pe.classList.add("outer"),
                Oe.classList.add("outer"),
                Ze.classList.add("outer"),
                n.classList.add("inner"),
                n.classList.add("header"),
                b.classList.add("inner"),
                O.classList.add("inner"),
                Y.classList.add("inner"),
                w.classList.add("inner"),
                T.classList.add("inner"),
                N.classList.add("inner"),
                K.classList.add("inner"),
                ne.classList.add("inner"),
                le.classList.add("inner"),
                he.classList.add("inner"),
                xe.classList.add("inner"),
                Ie.classList.add("inner"),
                Me.classList.add("inner"),
                Re.classList.add("inner"),
                _e.classList.add("inner"),
                v.classList.add("menuContainer"),
                G.classList.add("menuContainer"),
                V.classList.add("menuContainer"),
                n.appendChild(g),
                n.appendChild(f),
                n.appendChild(E),
                t.appendChild(n),
                b.appendChild(y),
                x.appendChild(b),
                w.appendChild(k),
                w.appendChild(I),
                w.appendChild(S),
                w.appendChild(j),
                L.appendChild(w),
                T.appendChild(P),
                T.appendChild(M),
                T.appendChild($),
                T.appendChild(A),
                B.appendChild(T),
                v.appendChild(x),
                v.appendChild(L),
                v.appendChild(B),
                O.appendChild(R),
                z.appendChild(O),
                N.appendChild(D),
                N.appendChild(U),
                N.appendChild(Z),
                N.appendChild(_),
                F.appendChild(N),
                K.appendChild(W),
                K.appendChild(q),
                K.appendChild(J),
                K.appendChild(Q),
                H.appendChild(K),
                G.appendChild(z),
                G.appendChild(F),
                G.appendChild(H),
                Y.appendChild(ee),
                X.appendChild(Y),
                ne.appendChild(de),
                ne.appendChild(ae),
                ne.appendChild(ie),
                ne.appendChild(ce),
                te.appendChild(ne),
                le.appendChild(re),
                le.appendChild(se),
                le.appendChild(pe),
                le.appendChild(me),
                oe.appendChild(le),
                he.appendChild(Ce),
                he.appendChild(fe),
                he.appendChild(ge),
                he.appendChild(Ee),
                ue.appendChild(he),
                xe.appendChild(be),
                xe.appendChild(ye),
                xe.appendChild(Le),
                xe.appendChild(we),
                ve.appendChild(xe),
                Ie.appendChild(Se),
                Ie.appendChild(je),
                Ie.appendChild(Be),
                Ie.appendChild(Te),
                ke.appendChild(Ie),
                Me.appendChild($e),
                Me.appendChild(Ae),
                Me.appendChild(Ge),
                Me.appendChild(ze),
                Pe.appendChild(Me),
                Re.appendChild(Fe),
                Re.appendChild(Ne),
                Re.appendChild(De),
                Re.appendChild(Ue),
                Oe.appendChild(Re),
                _e.appendChild(He),
                _e.appendChild(Ke),
                _e.appendChild(We),
                _e.appendChild(qe),
                Ze.appendChild(_e),
                V.appendChild(X),
                V.appendChild(te),
                V.appendChild(oe),
                V.appendChild(ue),
                V.appendChild(ve),
                V.appendChild(ke),
                V.appendChild(Pe),
                V.appendChild(Oe),
                V.appendChild(Ze),
                e.appendChild(t),
                e.appendChild(v),
                e.appendChild(G),
                e.appendChild(V);
            })(),
            U(G),
            U(O),
            Z(z);
        }),
        N.addEventListener("click", () => {
          D(A),
            (function () {
              const e = document.getElementById("content"),
                t = document.createElement("div"),
                n = document.createElement("div"),
                d = document.createElement("h1"),
                a = document.createElement("img"),
                i = document.createElement("img"),
                c = document.createElement("div"),
                o = document.createElement("div"),
                l = document.createElement("h3"),
                r = document.createElement("p"),
                s = document.createElement("p"),
                p = document.createElement("p"),
                m = document.createElement("img"),
                u = document.createElement("div"),
                h = document.createElement("div"),
                C = document.createElement("h3"),
                x = document.createElement("p"),
                b = document.createElement("p"),
                y = document.createElement("p"),
                L = document.createElement("img"),
                w = document.createElement("div"),
                k = document.createElement("div"),
                I = document.createElement("h3"),
                S = document.createElement("p"),
                j = document.createElement("p"),
                B = document.createElement("p"),
                T = document.createElement("img");
              (d.textContent = "Contact"),
                (a.src = v),
                (a.alt = "Wand"),
                (i.src = v),
                (i.alt = "Wand"),
                (l.textContent = "Gandalf"),
                (r.textContent = "Cashier"),
                (s.textContent = "666-676-6666"),
                (p.textContent = "Gdalf@fake.com"),
                (m.src = E),
                (m.alt = "Gandalf"),
                (C.textContent = "Artorias"),
                (x.textContent = "Manager"),
                (b.textContent = "676-666-6666"),
                (y.textContent = "art@fake.com"),
                (L.src = f),
                (L.alt = "Artorias"),
                (I.textContent = "Alonne"),
                (S.textContent = "Customer Service Representative"),
                (j.textContent = "666-666-6766"),
                (B.textContent = "Alonne@fake.com"),
                (T.src = g),
                (T.alt = "Alonne"),
                a.classList.add("d1"),
                i.classList.add("d2"),
                m.classList.add("contactImg"),
                L.classList.add("contactImg"),
                T.classList.add("contactImg"),
                t.classList.add("outer"),
                n.classList.add("inner"),
                n.classList.add("header"),
                c.classList.add("outer"),
                o.classList.add("inner"),
                u.classList.add("outer"),
                h.classList.add("inner"),
                w.classList.add("outer"),
                k.classList.add("inner"),
                n.appendChild(a),
                n.appendChild(d),
                n.appendChild(i),
                t.appendChild(n),
                o.appendChild(l),
                o.appendChild(r),
                o.appendChild(s),
                o.appendChild(p),
                o.appendChild(m),
                c.appendChild(o),
                h.appendChild(C),
                h.appendChild(x),
                h.appendChild(b),
                h.appendChild(y),
                h.appendChild(L),
                u.appendChild(h),
                k.appendChild(I),
                k.appendChild(S),
                k.appendChild(j),
                k.appendChild(B),
                k.appendChild(T),
                w.appendChild(k),
                e.appendChild(t),
                e.appendChild(c),
                e.appendChild(u),
                e.appendChild(w);
            })(),
            U(G),
            U(z),
            Z(O);
        });
    })();
})();

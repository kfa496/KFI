(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    338: function (e, a, n) {
      "use strict";
      n.r(a);
      var t = {
          name: "Checkmark",
          props: { value: { type: Boolean, default: !1 } },
        },
        c = n(40),
        l = Object(c.a)(
          t,
          function () {
            var e = this.$createElement,
              a = this._self._c || e;
            return a(
              "span",
              [
                this.value
                  ? a("b-icon-check-circle-fill", {
                      attrs: { variant: "success" },
                    })
                  : a("b-icon-x-circle-fill", { attrs: { variant: "danger" } }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      a.default = l.exports;
    },
  },
]);

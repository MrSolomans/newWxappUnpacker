Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    return a.apply(this, arguments);
};

var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../../../@babel/runtime/helpers/asyncToGenerator"), t = (n(require("./regenerator-runtime/runtime.js")), 
n(require("./promise")));

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function a() {
    return (a = r(e().mark(function r(n) {
        var a, u, o, s, i, c, p, l;
        return e().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = n.path, u = n.params, o = n.header, s = void 0 === o ? {} : o, i = n.method, 
                c = void 0 === i ? "POST" : i, e.prev = 1, e.next = 4, t.default.request({
                    url: a,
                    data: u,
                    method: c,
                    header: Object.assign({
                        "content-type": "application/x-www-form-urlencoded"
                    }, s)
                });

              case 4:
                return p = e.sent, l = p.data, e.abrupt("return", l);

              case 9:
                return e.prev = 9, e.t0 = e.catch(1), console.warn("".concat(a, "请求直接失败："), e.t0), 
                e.abrupt("return", null);

              case 13:
              case "end":
                return e.stop();
            }
        }, r, null, [ [ 1, 9 ] ]);
    }))).apply(this, arguments);
}
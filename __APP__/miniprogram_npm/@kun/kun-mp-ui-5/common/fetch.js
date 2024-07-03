Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    return a.apply(this, arguments);
};

var e, r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../../../@babel/runtime/helpers/asyncToGenerator"), n = (e = require("./promise")) && e.__esModule ? e : {
    default: e
};

function a() {
    return (a = t(r().mark(function e(t) {
        var a, u, o, s, c, p, i, l;
        return r().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.path, u = t.params, o = t.header, s = void 0 === o ? {} : o, c = t.method, 
                p = void 0 === c ? "POST" : c, e.prev = 1, e.next = 4, n.default.request({
                    url: a,
                    data: u,
                    method: p,
                    header: Object.assign({
                        "content-type": "application/x-www-form-urlencoded"
                    }, s)
                });

              case 4:
                return i = e.sent, l = i.data, e.abrupt("return", l);

              case 9:
                return e.prev = 9, e.t0 = e.catch(1), console.warn("".concat(a, "请求直接失败："), e.t0), 
                e.abrupt("return", null);

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 9 ] ]);
    }))).apply(this, arguments);
}
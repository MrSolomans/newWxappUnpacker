Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e;

(e = require("./regenerator-runtime/runtime.js")) && e.__esModule;

var r = [ "login", "request", "checkSession" ];

exports.default = r.reduce(function(e, r) {
    var n = wx[r];
    return n ? e[r] = "function" == typeof n ? function(e) {
        return (r = n, function(e) {
            return new Promise(function(n, t) {
                r(Object.assign(e || {}, {
                    success: n,
                    fail: t
                }));
            });
        })(e);
        var r;
    } : n : console.warn("funcArr数组中的元素".concat(r, "在wx对象中不存在")), e;
}, Object.assign({}, wx));
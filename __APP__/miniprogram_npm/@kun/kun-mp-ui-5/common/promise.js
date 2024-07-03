Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = [ "login", "request", "checkSession" ];

exports.default = e.reduce(function(e, n) {
    var t = wx[n];
    return t ? e[n] = "function" == typeof t ? function(e) {
        return (n = t, function(e) {
            return new Promise(function(t, r) {
                n(Object.assign(e, {
                    success: t,
                    fail: r
                }));
            });
        })(e);
        var n;
    } : t : console.warn("funcArr数组中的元素".concat(n, "在wx对象中不存在")), e;
}, Object.assign({}, wx));
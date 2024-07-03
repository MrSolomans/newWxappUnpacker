var e, r, n = [ "__esModule", "request", "assign", "reduce" ];

e = n, r = 241, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var t = function(e, r) {
    return n[e -= 0];
};

Object.defineProperty(exports, t("0x3"), {
    value: !0
}), exports.default = function() {
    return u[t("0x2")](function(e, r) {
        var n = wx[r];
        return n ? e[r] = "function" == typeof n ? function(e) {
            return function(e) {
                return function(r) {
                    return new Promise(function(n, t) {
                        e(Object.assign(r, {
                            success: n,
                            fail: t
                        }));
                    });
                };
            }(n)(e);
        } : n : console.warn("funcArr数组中的元素".concat(r, "在wx对象中不存在")), e;
    }, Object[t("0x1")]({}, wx));
};

var u = [ "switchTab", "navigateTo", "reLaunch", "redirectTo", t("0x0"), "requestSubscribeMessage", "getUserInfo", "getUserProfile" ];
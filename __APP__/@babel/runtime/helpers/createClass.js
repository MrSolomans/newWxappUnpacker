var e = require("./toPropertyKey");

function r(r, t) {
    for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(r, e(n.key), n);
    }
}

module.exports = function(e, t, o) {
    return t && r(e.prototype, t), o && r(e, o), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
};
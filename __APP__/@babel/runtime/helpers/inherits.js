var e = require("./setPrototypeOf");

module.exports = function(t, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(r && r.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), r && e(t, r);
};
var e = require("./typeof"), r = require("./assertThisInitialized");

module.exports = function(o, t) {
    if (t && ("object" === e(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return r(o);
};
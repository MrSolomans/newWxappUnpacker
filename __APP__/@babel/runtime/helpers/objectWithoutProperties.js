var e = require("./objectWithoutPropertiesLoose");

module.exports = function(r, t) {
    if (null == r) return {};
    var o, n, l = e(r, t);
    if (Object.getOwnPropertySymbols) {
        var p = Object.getOwnPropertySymbols(r);
        for (n = 0; n < p.length; n++) o = p[n], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(r, o) && (l[o] = r[o]);
    }
    return l;
};
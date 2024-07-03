module.exports = function(e, n) {
    if (null == e) return {};
    var r, t, u = {}, f = Object.keys(e);
    for (t = 0; t < f.length; t++) r = f[t], n.indexOf(r) >= 0 || (u[r] = e[r]);
    return u;
};
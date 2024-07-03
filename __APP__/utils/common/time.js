var t, e, r = [ "getMonth", "getFullYear", "getDate", "setDate", "map", ":" ];

t = r, e = 312, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var n = function(t, e) {
    return r[t -= 0];
};

function o(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.addFormatTime = function(t, e) {
    var r = new Date(t);
    r[n("0x3")](r.getDate() + e);
    var a = r[n("0x1")](), u = r.getMonth() + 1, i = r[n("0x2")]();
    return [ a, u, i ][n("0x4")](o).join("-");
}, exports.formatDate = function(t) {
    var e = t.getFullYear(), r = t.getMonth() + 1, n = t.getDate();
    return [ e, r, n ].map(o).join("-");
}, exports.formatTime = function(t) {
    var e = t.getFullYear(), r = t.getMonth() + 1;
    return [ e, r ].map(o).join("-");
}, exports.formatTimes = function(t) {
    var e = t.getFullYear(), r = t[n("0x0")]() + 1, a = t.getDate(), u = t.getHours(), i = t.getMinutes(), g = t.getSeconds();
    return [ e, r, a ].map(o).join("-") + " " + [ u, i, g ].map(o).join(n("0x5"));
};
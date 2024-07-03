var e, t, r = [ "defineProperty", "__esModule", "getRealtimeLogManager", "warn", "error" ];

e = r, t = 347, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var n = function(e, t) {
    return r[e -= 0];
};

Object[n("0x3")](exports, n("0x4"), {
    value: !0
}), exports.default = void 0;

var o = wx[n("0x0")] ? wx[n("0x0")]() : console, i = {
    debug: function() {
        o && o.debug.apply(o, arguments);
    },
    info: function() {
        o && o.info.apply(o, arguments);
    },
    warn: function() {
        o && o.warn.apply(o, arguments);
    },
    error: function() {
        o && o[n("0x2")].apply(o, arguments);
    },
    setFilterMsg: function(e) {
        o && (o.setFilterMsg ? "string" == typeof e && o.setFilterMsg(e) : console[n("0x1")](e));
    },
    addFilterMsg: function(e) {
        o && (o.addFilterMsg ? "string" == typeof e && o.addFilterMsg(e) : console.warn(e));
    }
};

exports.default = i;
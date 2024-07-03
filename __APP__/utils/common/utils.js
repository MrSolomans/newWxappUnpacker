var t, r, n = require("../../@babel/runtime/helpers/typeof"), e = [ "prototype", "object" ];

t = e, r = 236, function(r) {
    for (;--r; ) t.push(t.shift());
}(++r);

var o = function(t, r) {
    return e[t -= 0];
};

function u(t) {
    return (u = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(t) {
        return n(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t);
    })(t);
}

function l(t) {
    return "[object Array]" === toString.call(t);
}

function f(t, r) {
    if (null != t) if (u(t) !== o("0x1") && (t = [ t ]), l(t)) for (var n = 0, e = t.length; n < e; n++) r.call(null, t[n], n, t); else for (var f in t) Object[o("0x0")].hasOwnProperty.call(t, f) && r.call(null, t[f], f, t);
}

function c(t, r) {
    return function() {
        for (var n = new Array(arguments.length), e = 0; e < n.length; e++) n[e] = arguments[e];
        return t.apply(r, n);
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = {
    isArray: l,
    forEach: f,
    merge: function t() {
        var r = {};
        function n(n, e) {
            "object" === u(r[e]) && "object" === u(n) ? r[e] = t(r[e], n) : r[e] = n;
        }
        for (var e = 0, o = arguments.length; e < o; e++) f(arguments[e], n);
        return r;
    },
    bind: c,
    extend: function(t, r, n) {
        return f(r, function(r, e) {
            t[e] = n && "function" == typeof r ? c(r, n) : r;
        }), t;
    }
};

exports.default = i;
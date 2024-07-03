var r, e, t = require("../../../@babel/runtime/helpers/typeof"), n = [ "defineProperty", "call", "getOwnPropertySymbols", "symbol", "use strict", "filter", "keys", "@@toPrimitive must return a primitive value." ];

r = n, e = 333, function(e) {
    for (;--e; ) r.push(r.shift());
}(++e);

var o = function(r, e) {
    return n[r -= 0];
};

o("0x7");

var i = function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("../../../utils/redirectPage"));

function u(r) {
    return (u = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(r) {
        return t(r);
    } : function(r) {
        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? o("0x6") : t(r);
    })(r);
}

function c(r, e) {
    var t = Object[o("0x1")](r);
    if (Object.getOwnPropertySymbols) {
        var n = Object[o("0x5")](r);
        e && (n = n[o("0x0")](function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}

function f(r, e, t) {
    return (e = function(r) {
        var e = function(r, e) {
            if ("object" != u(r) || !r) return r;
            var t = r[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t[o("0x4")](r, e || "default");
                if ("object" != u(n)) return n;
                throw new TypeError(o("0x2"));
            }
            return ("string" === e ? String : Number)(r);
        }(r, "string");
        return "symbol" == u(e) ? e : e + "";
    }(e)) in r ? Object[o("0x3")](r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r;
}

Page(function(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? c(Object(t), !0).forEach(function(e) {
            f(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}({}, i.default));
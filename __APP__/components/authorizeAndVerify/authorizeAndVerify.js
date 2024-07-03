var r, e, t = require("../../@babel/runtime/helpers/typeof"), o = [ "@@toPrimitive must return a primitive value.", "getOwnPropertyDescriptor", "object", "prototype", "getOwnPropertyDescriptors", "toPrimitive", "default", "defineProperty" ];

r = o, e = 443, function(e) {
    for (;--e; ) r.push(r.shift());
}(++e);

var n = function(r, e) {
    return o[r -= 0];
}, i = require("../newAuthorize/controlNewAuthorize");

function u(r) {
    return (u = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(r) {
        return t(r);
    } : function(r) {
        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol[n("0x0")] ? "symbol" : t(r);
    })(r);
}

function c(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(r);
        e && (o = o.filter(function(e) {
            return Object[n("0x6")](r, e).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}

function b(r, e, t) {
    return (e = function(r) {
        var e = function(r, e) {
            if (n("0x7") != u(r) || !r) return r;
            var t = r[Symbol[n("0x2")]];
            if (void 0 !== t) {
                var o = t.call(r, e || n("0x3"));
                if ("object" != u(o)) return o;
                throw new TypeError(n("0x5"));
            }
            return ("string" === e ? String : Number)(r);
        }(r, "string");
        return "symbol" == u(e) ? e : e + "";
    }(e)) in r ? Object[n("0x4")](r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r;
}

Component(function(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? c(Object(t), !0).forEach(function(e) {
            b(r, e, t[e]);
        }) : Object[n("0x1")] ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}({
    behaviors: [ i.authorizeBehavior ]
}, i.commonAuthor));
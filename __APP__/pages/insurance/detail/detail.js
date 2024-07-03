var r, e, t = require("../../../@babel/runtime/helpers/typeof"), n = [ "defineProperty", "getOwnPropertySymbols", "object", "iterator", "string", "forEach" ];

r = n, e = 179, function(e) {
    for (;--e; ) r.push(r.shift());
}(++e);

var o = function(r, e) {
    return n[r -= 0];
}, i = function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("../../../utils/redirectPage"));

function u(r) {
    return (u = "function" == typeof Symbol && "symbol" == t(Symbol[o("0x4")]) ? function(r) {
        return t(r);
    } : function(r) {
        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : t(r);
    })(r);
}

function c(r, e) {
    var t = Object.keys(r);
    if (Object[o("0x2")]) {
        var n = Object.getOwnPropertySymbols(r);
        e && (n = n.filter(function(e) {
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
                var n = t.call(r, e || "default");
                if (o("0x3") != u(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(r);
        }(r, o("0x5"));
        return "symbol" == u(e) ? e : e + "";
    }(e)) in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r;
}

Page(function(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? c(Object(t), !0)[o("0x0")](function(e) {
            f(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(e) {
            Object[o("0x1")](r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}({}, i.default));
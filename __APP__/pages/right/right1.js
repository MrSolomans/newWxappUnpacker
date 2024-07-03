var e, r, t = require("../../@babel/runtime/helpers/typeof"), n = [ "string", "@babel/helpers - typeof", "apply", "default", "use strict", "length", "forEach", "iterator" ];

e = n, r = 311, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var o = function(e, r) {
    return n[e -= 0];
};

o("0x5");

var i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/redirectPage"));

function u(e) {
    return o("0x2"), (u = "function" == typeof Symbol && "symbol" == t(Symbol[o("0x0")]) ? function(e) {
        return t(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
    })(e);
}

function c(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push[o("0x3")](t, n);
    }
    return t;
}

function f(e, r, t) {
    return (r = function(e) {
        var r = function(e, r) {
            if ("object" != u(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t.call(e, r || "default");
                if ("object" != u(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(e);
        }(e, o("0x1"));
        return "symbol" == u(r) ? r : r + "";
    }(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

Page(function(e) {
    for (var r = 1; r < arguments[o("0x6")]; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? c(Object(t), !0).forEach(function(r) {
            f(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t))[o("0x7")](function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}({}, i[o("0x4")]));
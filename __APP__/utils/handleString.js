var t, r, e = require("../@babel/runtime/helpers/typeof"), n = [ "Set", "forEach", "string", "default", "toString", "__esModule", "constructor", "concat", "test", "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "split", "keys", "length" ];

t = n, r = 218, function(r) {
    for (;--r; ) t.push(t.shift());
}(++r);

var u = function(t, r) {
    return n[t -= 0];
};

function o(t) {
    return function(t) {
        if (Array.isArray(t)) return f(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || function(t, r) {
        if (t) {
            if (u("0x5") == e(t)) return f(t, r);
            var n = {}[u("0x7")].call(t).slice(8, -1);
            return "Object" === n && t[u("0x9")] && (n = t.constructor.name), "Map" === n || u("0x3") === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, r) : void 0;
        }
    }(t) || function() {
        throw new TypeError(u("0xc"));
    }();
}

function f(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = Array(r); e < r; e++) n[e] = t[e];
    return n;
}

Object.defineProperty(exports, u("0x8"), {
    value: !0
}), exports.default = void 0, exports.getStringArr = function(t) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
    if (!t) return [];
    for (var e = 2 * r, n = [], o = 0, f = 0, a = /[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F\u3002\uff1f\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5]/, i = 0, c = t.length; i < c; i++) if (0 === o && i > 0 && a[u("0xb")](t[i])) n[n.length - 1] += t[i], 
    f = i + 1; else if (t[i].charCodeAt(0) < 299 && !/[A-Z]/[u("0xb")](t[i]) ? o += 1 : o += 2, 
    o >= e - .5 || i === c - 1) {
        var l = i + 1;
        n.push(t.substring(f, l)), f = l, o = 0;
    }
    return n;
}, exports.getStringRealLength = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (!t) return 0;
    t = String(t);
    var r = 0;
    return o(t).forEach(function(t) {
        r += t.charCodeAt(0) < 299 ? 1 : 2;
    }), r;
};

var a = {
    getAllOptions: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments[u("0x2")] > 1 && void 0 !== arguments[1] ? arguments[1] : "", e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return Object[u("0x1")](t)[u("0x4")](function(n) {
            t[n] && (r += ""[u("0xa")](e && -1 !== e.indexOf("?") || r ? "&" : "?").concat(n, "=").concat(t[n]));
        }), r;
    },
    getQueryObj: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        t.indexOf("?") > -1 && (t = t[u("0x0")]("?")[1]), t = t[u("0x0")]("&");
        var r = {};
        return t.forEach(function(t) {
            var e = t.split("=");
            r[e[0]] = e[1];
        }), r;
    },
    isBase64Code: function(t) {
        return /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(t);
    }
};

exports[u("0x6")] = a;
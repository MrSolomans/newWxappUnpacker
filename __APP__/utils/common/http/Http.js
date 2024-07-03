var e, t, r = require("../../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../../@babel/runtime/helpers/typeof"), o = [ "getOwnPropertyDescriptor", "Set", "enumerable", "constructor", "1", "handleList", "getOnceHttp", "success", "call", "secret_token", "prev", "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "entries", "now", "stringify", "function", "log", "default", "Map", "next", "__esModule", "filter", "getOwnPropertySymbols", "globalData", "use strict", "push", "timer", "apply", "string", "isArray", "hopeResult", "warn", "needAbort", "data", "Object", "symbol" ];

e = o, t = 119, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var i = function(e, t) {
    return o[e -= 0];
};

i("0xd"), Object.defineProperty(exports, i("0x9"), {
    value: !0
}), exports[i("0x6")] = void 0;

var a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../utils.js"));

function u(e) {
    return (u = i("0x4") == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && i("0x18") == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
    })(e);
}

function c(e, t) {
    return function(e) {
        if (Array[i("0x12")](e)) return e;
    }(e) || function(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, a, u, c = [], l = !0, f = !1;
            try {
                if (a = (r = r.call(e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    l = !1;
                } else for (;!(l = (n = a[i("0x21")](r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                f = !0, o = e;
            } finally {
                try {
                    if (!l && null != r.return && (u = r.return(), Object(u) !== u)) return;
                } finally {
                    if (f) throw o;
                }
            }
            return c;
        }
    }(e, t) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return l(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return i("0x17") === r && e.constructor && (r = e[i("0x1c")].name), i("0x7") === r || i("0x1a") === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0;
        }
    }(e, t) || function() {
        throw new TypeError(i("0x0"));
    }();
}

function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}

function f(e, t, r, n, o, i, a) {
    try {
        var u = e[i](a), c = u.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    u.done ? t(c) : Promise.resolve(c).then(n, o);
}

function s(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, o) {
            var a = e[i("0x10")](t, r);
            function u(e) {
                f(a, n, o, u, c, "next", e);
            }
            function c(e) {
                f(a, n, o, u, c, "throw", e);
            }
            u(void 0);
        });
    };
}

function d(e, t) {
    var r = Object.keys(e);
    if (Object[i("0xb")]) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t)[i("0x1b")];
        })), r[i("0xe")].apply(r, n);
    }
    return r;
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? d(Object(r), !0).forEach(function(t) {
            p(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object[i("0x19")](r, t));
        });
    }
    return e;
}

function p(e, t, r) {
    return (t = h(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function y(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function x(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, h(n.key), n);
    }
}

function h(e) {
    var t = function(e, t) {
        if ("object" != u(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r[i("0x21")](e, t || "default");
            if ("object" != u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i("0x11") === t ? String : Number)(e);
    }(e, "string");
    return i("0x18") == u(t) ? t : t + "";
}

var v = function() {
    function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        y(this, e), this.defaults = t, this.request = null;
    }
    return function(e, t, r) {
        t && x(e.prototype, t), r && x(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        });
    }(e, [ {
        key: i("0x1f"),
        value: function(e, t, n) {
            var o = this, u = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], l = this.defaults, f = l.isNeedAbort, d = l[i("0x20")], p = l.fail, y = l[i("0x16")], x = void 0 === y ? {} : y, h = {};
            u && (h = {
                "X-PA-NONCESTR": i("0x1d")
            }), e.data = a[i("0x6")].merge(e.data, x, h);
            var v = null;
            if (t && n && (v = t.globalData[i("0x1e")].find(function(t) {
                return t.url === e.url && JSON.stringify(t[i("0x16")]) === JSON.stringify(e[i("0x16")]) && Date[i("0x2")]() - t[i("0xf")] < 3e4;
            })), v) return console[i("0x14")]("多次重复请求:", v), v.handle;
            console[i("0x5")]("请求的参数：", e), e.header.randoms = new Date().getTime();
            var m = new Promise(function(a) {
                var u;
                o.request = wx.request(b(b({}, e), {}, {
                    success: (u = s(r().mark(function n(u) {
                        var l, s, b, p, y;
                        return r().wrap(function(r) {
                            for (;;) switch (r[i("0x23")] = r.next) {
                              case 0:
                                if (l = u[i("0x16")], s = void 0 === l ? e[i("0x13")] : l, d && "function" == typeof d && d(), 
                                b = function(e) {
                                    return "[object object]" === Object.prototype.toString.call(e).toLowerCase();
                                }, y = function e(t, r) {
                                    t && Object[i("0x1")](t).forEach(function(t) {
                                        var n = c(t, 2), o = n[0], i = n[1];
                                        !r[o] || Array.isArray(r[o]) && 0 === r[o].length ? r[o] = i : b(i) && e(i, r[o]);
                                    });
                                }, (p = s || {}) && p !== e.hopeResult && b(p) && y(e.hopeResult, p), !e.header[i("0x22")] || 116 !== p.code && 107 !== p.code || !t.globalData.needLoginOut) {
                                    r.next = 10;
                                    break;
                                }
                                return t.globalData.needLoginOut = !1, r[i("0x8")] = 10, t.commonLoginOut();

                              case 10:
                                f || "need" === e[i("0x15")] ? a({
                                    response: p,
                                    httpInstance: o.request
                                }) : a(p);

                              case 11:
                              case "end":
                                return r.stop();
                            }
                        }, n);
                    })), function(e) {
                        return u.apply(this, arguments);
                    }),
                    fail: function(e) {
                        console.warn("请求发生错误：", e), p && "function" == typeof p && p(), a({});
                    }
                })), t && n && (t[i("0xc")].handleList = t[i("0xc")].handleList[i("0xa")](function(t) {
                    return t.url !== e.url && JSON.stringify(t.data) !== JSON[i("0x3")](e.data);
                }));
            });
            return t && n && t.globalData.handleList.push({
                url: e.url,
                data: e.data,
                timer: Date.now(),
                handle: m
            }), m;
        }
    }, {
        key: "getCommonHttp",
        value: function(e) {
            var t = e.path, r = e.data, n = this.defaults.baceUrl;
            return r = a[i("0x6")].merge(this.defaults.data, r), this.getOnceHttp({
                url: "".concat(n).concat(t),
                data: r
            });
        }
    } ]), e;
}();

exports.default = v;
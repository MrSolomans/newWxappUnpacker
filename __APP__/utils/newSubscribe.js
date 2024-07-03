var e, t, r = require("../@babel/runtime/helpers/regeneratorRuntime"), n = require("../@babel/runtime/helpers/typeof"), o = [ "string", "requestSubscribeMessage", "return", "carAndWaitTempIdObj", "concat", "object", "/uapi/cps-hcz-smallapp/serviceRemind/", "length", "iterator", "订阅消息出错：", "resolve", "app", "enumerable", "prototype", "symbol", "use strict", "code", "next", "function", "keys", "customerTrack", "defineProperty", "$http", "renew_insure", "t0", "apply", "mark", "catch", "abrupt", "getStorageSync", "end", "unionId", "prev", "uR-M3KIdZh3qeZiD2zuKrG4-QRThjaK7ZjzpMDPYXZs", "canIUse", "PACX_W39000144" ];

e = o, t = 261, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var u = function(e, t) {
    return o[e -= 0];
};

u("0x6"), Object[u("0xc")](exports, "__esModule", {
    value: !0
}), exports.carAndWaitTempIdList = function(e) {
    return Object.values(y(e));
}, exports[u("0x1e")] = y, exports.default = void 0;

var a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./proxyWX.js"));

function i(e) {
    return (i = u("0x9") == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && "symbol" == n(Symbol[u("0x23")]) ? function(e) {
        return n(e);
    } : function(e) {
        return e && u("0x9") == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && e.constructor === Symbol && e !== Symbol.prototype ? u("0x5") : n(e);
    })(e);
}

function c(e, t) {
    var r = Object[u("0xa")](e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t)[u("0x3")];
        })), r.push[u("0x10")](r, n);
    }
    return r;
}

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(Object(r), !0).forEach(function(t) {
            p(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function p(e, t, r) {
    return (t = b(t)) in e ? Object[u("0xc")](e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function f(e, t, r, n, o, a, i) {
    try {
        var c = e[a](i), s = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    c.done ? t(s) : Promise[u("0x1")](s).then(n, o);
}

function l(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, o) {
            var a = e[u("0x10")](t, r);
            function i(e) {
                f(a, n, o, i, c, "next", e);
            }
            function c(e) {
                f(a, n, o, i, c, "throw", e);
            }
            i(void 0);
        });
    };
}

function x(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object[u("0xc")](e, b(n.key), n);
    }
}

function b(e) {
    var t = function(e, t) {
        if ("object" != i(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if (u("0x20") != i(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    }(e, u("0x1b"));
    return "symbol" == i(t) ? t : t + "";
}

var d, m = require("./datatist.js"), v = function() {
    function e(t) {
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e), d = (0, a.default)(), this[u("0x2")] = getApp(), this.templateInfo = t;
    }
    return function(e, t, r) {
        t && x(e[u("0x4")], t), r && x(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        });
    }(e, [ {
        key: "$http",
        value: function() {
            var e = l(r()[u("0x11")](function e(t) {
                var n, o, a, i, c, s, p, f, l;
                return r().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = t.params, o = void 0 === n ? {} : n, a = t.path, i = void 0 === a ? "" : a, 
                        c = t.isCommon, s = void 0 === c || c, p = t.token, e.prev = 1, f = this.app.getRequestUrl(s ? u("0x21")[u("0x1f")](i) : i), 
                        e[u("0x8")] = 5, this.app.$http({
                            url: f,
                            data: o,
                            needToken: !0,
                            needLogin: !0,
                            token: p
                        });

                      case 5:
                        return l = e.sent, console.warn("请求成功，接口".concat(i, ",结果为:"), l), e.abrupt("return", l || {});

                      case 10:
                        return e.prev = 10, e.t0 = e[u("0x12")](1), console.warn("调用请求失败：", e[u("0xf")]), 
                        e[u("0x13")]("return", {});

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 10 ] ]);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }()
    }, {
        key: "applyMsgSubscription",
        value: function() {
            var e = l(r().mark(function e(t) {
                var n, o, a, i, c = this;
                return r().wrap(function(e) {
                    for (;;) switch (e.prev = e[u("0x8")]) {
                      case 0:
                        if (n = this.templateInfo, console.warn("tmplIds", n), o = {
                            xcxOpenid: wx.getStorageSync("openid"),
                            signature: wx[u("0x14")]("signature"),
                            timestamp: wx.getStorageSync("timestamp"),
                            nonce: wx.getStorageSync("nonce"),
                            unionId: wx.getStorageSync(u("0x16")),
                            signatureUnionid: wx.getStorageSync("signatureUnionid")
                        }, wx[u("0x19")]("requestSubscribeMessage")) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt(u("0x1d"), !1);

                      case 5:
                        return e[u("0x17")] = 5, m[u("0xb")]("PACX_W39000142", {}, null), e.next = 9, d[u("0x1c")]({
                            tmplIds: n.map(function(e) {
                                return e.id;
                            })
                        });

                      case 9:
                        if (!(a = e.sent)) {
                            e.next = 15;
                            break;
                        }
                        return Reflect.deleteProperty(a, "errMsg"), i = [], n.forEach(function() {
                            var e = l(r().mark(function e(n) {
                                var f, l, x;
                                return r().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (f = n.id, l = n.source, "accept" !== a[f]) {
                                            e.next = 10;
                                            break;
                                        }
                                        return m.customerTrack("PACX_W39000143", {}, null), e.next = 5, c[u("0xd")]({
                                            path: "/uapi/wechat/mqInfo/subSend",
                                            params: s(s({}, o), {}, {
                                                templateInfo: p({}, f, "accept"),
                                                source: l
                                            }),
                                            isCommon: !1
                                        });

                                      case 5:
                                        x = e.sent, console.log("id为"[u("0x1f")](f, "的订阅消息的结果："), x), (t && -1 !== t.indexOf(f) || !t) && i.push(Boolean(x)), 
                                        e.next = 11;
                                        break;

                                      case 10:
                                        m.customerTrack(u("0x1a"), {}, null);

                                      case 11:
                                      case u("0x15"):
                                        return e.stop();
                                    }
                                }, e);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }()), e.abrupt("return", i.every(function(e) {
                            return e;
                        }));

                      case 15:
                        e.next = 21;
                        break;

                      case 17:
                        return e[u("0x17")] = 17, e.t0 = e[u("0x12")](5), console.warn(u("0x0"), e.t0), 
                        e.abrupt("return", !1);

                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 5, 17 ] ]);
            }));
            return function(t) {
                return e[u("0x10")](this, arguments);
            };
        }()
    }, {
        key: "querySubIsAllow",
        value: function() {
            var e = l(r().mark(function e() {
                var t, n, o, a, i, c, s, p = arguments;
                return r().wrap(function(e) {
                    for (;;) switch (e.prev = e[u("0x8")]) {
                      case 0:
                        return t = p.length > 0 && void 0 !== p[0] ? p[0] : [], n = p[u("0x22")] > 1 ? p[1] : void 0, 
                        e.next = 4, this.$http({
                            path: "querySubIsAllow",
                            params: {
                                subSource: t
                            },
                            token: n
                        });

                      case 4:
                        return o = e.sent, a = o[u("0x7")], i = o.data, c = o.msg, s = o.reqId, console.warn("querySubIsAllow【1】:", t), 
                        console.warn("querySubIsAllow【2】:", a, i, c, s), e.abrupt("return", 0 === a && i ? i : {});

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e[u("0x10")](this, arguments);
            };
        }()
    } ]), e;
}();

function y(e) {
    return {
        car: {
            id: e ? "2I3cfDCPObyBQcvjVIf6p_1icauAqimxNOI2QE6rKLc" : u("0x18"),
            source: u("0xe")
        },
        wait: {
            id: e ? "H6qg6n0rBIg_25eu7lF4zCbKo7GqxU5H874ZmtcJ1G0" : "cLx61IDARIUBo_b0s3Yt8I-Lk_wCNTRoYuY3KHk8M2A",
            source: "to_be_paid"
        }
    };
}

exports.default = v;
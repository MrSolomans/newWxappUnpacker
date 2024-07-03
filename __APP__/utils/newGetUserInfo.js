var e, r, t = require("../@babel/runtime/helpers/regeneratorRuntime"), n = require("../@babel/runtime/helpers/typeof"), o = [ "check3rdSession", "return", "next", "stop", "removeStorageSync", "abrupt", "iv", "openid", "newThirdSession", "get3rdSession", "sent", "code参数无效", "prev", "iterator", "setStorageSync", "mark", "concat", "warn", "log", "globalData", "getInterface", "forEach", "headPortrait", "symbol", "PA_CXZZB_05", "app", "length", "getStorageSync", "null", "then", "setKeyAlias", "newGetUserInfo", "number", "ucp接口：newGetUserInfo => onlyGetPhoneNumber,得到授权手机号的加签参数", "object", "__esModule", "t0", "done", "openId", "wrap" ];

e = o, r = 432, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var s = function(e, r) {
    return o[e -= 0];
};

Object.defineProperty(exports, s("0x3"), {
    value: !0
}), exports.default = void 0;

var i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./log.js"));

function a(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}

function c(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? a(Object(t), !0).forEach(function(r) {
            u(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t))[s("0x1d")](function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}

function u(e, r, t) {
    return (r = function(e) {
        var r = function(e, r) {
            if ("object" != x(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t.call(e, r || "default");
                if (s("0x2") != x(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(e);
        }(e, "string");
        return "symbol" == x(r) ? r : r + "";
    }(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function f(e, r, t, n, o, i, a) {
    try {
        var c = e[i](a), u = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void t(e);
    }
    c[s("0x5")] ? r(u) : Promise.resolve(u).then(n, o);
}

function p(e) {
    return function() {
        var r = this, t = arguments;
        return new Promise(function(n, o) {
            var s = e.apply(r, t);
            function i(e) {
                f(s, n, o, i, a, "next", e);
            }
            function a(e) {
                f(s, n, o, i, a, "throw", e);
            }
            i(void 0);
        });
    };
}

function x(e) {
    return (x = "function" == typeof Symbol && "symbol" == n(Symbol[s("0x15")]) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? s("0x1f") : n(e);
    })(e);
}

var l = s("0x20"), d = {
    app: null,
    initApp: function(e) {
        this[s("0x21")] = e;
    },
    getInterface: function(e) {
        return this.app.getRequestUrl("/userInfo/".concat(e), "eimMinpro");
    },
    setKeyAlias: function(e, r) {
        wx.setStorageSync(r, e), this.app[s("0x1b")][r] = e;
    },
    quicklySetStorage: function(e) {
        var r = arguments[s("0x22")] > 1 && void 0 !== arguments[1] ? arguments[1] : "", t = arguments[s("0x22")] > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        if ("object" === x(e)) {
            for (var n = 0, o = Object.keys(e); n < o[s("0x22")]; n++) {
                var i = o[n];
                t !== i && (e[i] && ("undefined" === e[i] || e[i] === s("0x24")) && (e[i] = ""), 
                "thirdSession" !== i ? (wx.setStorageSync(i, e[i]), this.app.globalData[i] = e[i], 
                i === s("0x6") && (this.app.globalData.sdkOpenId = e[i], this.setKeyAlias(e[i], s("0xf"))), 
                "avatarUrl" === i && this[s("0x26")](e[i], s("0x1e"))) : this[s("0x26")](e[i], s("0x10")));
            }
            r && wx.setStorageSync(r, e);
        }
    },
    get3rdSession: function() {
        var e = this, r = s("0x11");
        return new Promise(function(t) {
            wx.login({
                success: function(n) {
                    var o = n.code;
                    o && e.$http(r, {
                        code: o,
                        weAppNo: l
                    })[s("0x25")](function(r) {
                        e.quicklySetStorage(r, "get3rdSession"), t(r);
                    });
                },
                fail: function() {
                    t(!1);
                }
            });
        });
    },
    onlyGetPhoneNumber: function(e) {
        var r = this;
        return p(t().mark(function n() {
            var o, i, a, c, u, f, p, x;
            return t().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, r.newGetUserInfo(e, "getPhoneNumber");

                  case 2:
                    if (o = t.sent, i = {
                        encPhoneNumber: "encPhoneNumber",
                        encPurePhoneNumber: "encPurePhoneNumber",
                        signature: "mobileSignature",
                        nonce: "mobileNonce",
                        timestamp: "mobileTimestamp",
                        phoneNumber: "phoneNumber",
                        purePhoneNumber: "purePhoneNumber"
                    }, o && "stop" !== o) for (console.warn(s("0x1"), o), a = 0, c = Object.keys(i); a < c.length; a++) u = c[a], 
                    wx[s("0x16")](i[u], o[u]); else if (!o || "stop" === o) for (f = 0, p = Object.keys(i); f < p.length; f++) x = p[f], 
                    wx[s("0xc")](i[x]);
                    return !o && wx[s("0xc")]("newThirdSession"), t.abrupt("return", o);

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, n);
        }))();
    },
    newGetUserInfo: function(e) {
        var r = arguments, n = this;
        return p(t().mark(function o() {
            var a, c, u, f, p, x, d, h, b, v, w;
            return t()[s("0x7")](function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a = r.length > 1 && void 0 !== r[1] ? r[1] : "", c = r.length > 2 && void 0 !== r[2] ? r[2] : "", 
                    u = function() {
                        return console[s("0x1a")]("e对象不存在或者里面的敏感信息不存在", e), i.default.warn("e对象不存在或者里面的敏感信息不存在", e), 
                        "stop";
                    }, e && e.detail) {
                        t.next = 5;
                        break;
                    }
                    return t[s("0xd")]("return", u());

                  case 5:
                    if (f = e.detail, p = f.encryptedData, x = void 0 === p ? "" : p, d = f[s("0xe")], 
                    h = void 0 === d ? "" : d, x && h) {
                        t.next = 8;
                        break;
                    }
                    return t.abrupt("return", u());

                  case 8:
                    if (t.t0 = wx[s("0x23")](s("0x10")), t.t0) {
                        t.next = 16;
                        break;
                    }
                    return t[s("0xa")] = 12, n.checkAndGetThirdSession();

                  case 12:
                    if (t.t1 = t.sent, t.t1) {
                        t.next = 15;
                        break;
                    }
                    t.t1 = {};

                  case 15:
                    t.t0 = t.t1.thirdSession;

                  case 16:
                    if (b = t[s("0x4")]) {
                        t.next = 21;
                        break;
                    }
                    return console[s("0x19")]("调用newGetUserInfo函数必须得到newThirdSession的缓存，且不能在此时重新获取"), 
                    i.default.warn("调用newGetUserInfo函数必须得到newThirdSession的缓存，且不能在此时重新获取"), t.abrupt("return", !1);

                  case 21:
                    return v = {
                        encryptedData: x,
                        iv: h,
                        weAppNo: l,
                        thirdSession: b,
                        executeName: a
                    }, c && (v[s("0x0")] = c), t[s("0xa")] = 25, n.$http(s("0x27"), v);

                  case 25:
                    if (w = t.sent) {
                        t.next = 33;
                        break;
                    }
                    return t.next = 29, n.get3rdSession();

                  case 29:
                    return v.thirdSession = wx.getStorageSync("newThirdSession"), t.next = 32, n.$http("newGetUserInfo", v);

                  case 32:
                    w = t.sent;

                  case 33:
                    return t.abrupt("return", w);

                  case 34:
                  case "end":
                    return t.stop();
                }
            }, o);
        }))();
    },
    check3rdSession: function() {
        var e = this;
        return p(t().mark(function r() {
            var n, o, i;
            return t().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (n = wx.getStorageSync("newThirdSession")) {
                        r.next = 3;
                        break;
                    }
                    return r.abrupt("return", !1);

                  case 3:
                    return o = {
                        thirdSession: n,
                        weAppNo: l
                    }, r.next = 6, e.$http(s("0x8"), o);

                  case 6:
                    return (i = r.sent) && e.quicklySetStorage(i, "check3rdSession"), r.abrupt("return", i);

                  case 9:
                  case "end":
                    return r[s("0xb")]();
                }
            }, r);
        }))();
    },
    getErrorMsg: function(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        switch (e = Number(e)) {
          case -1:
            return "ucp登陆态过期，需重新获取";

          case -2:
            return "必传参数缺少";

          case -3:
            return "调用redis错误，需重试";

          case 40029:
            return s("0x13");

          default:
            return r;
        }
    },
    checkAndGetThirdSession: function() {
        var e = this;
        return p(t().mark(function r() {
            return t().wrap(function(r) {
                for (;;) switch (r.prev = r[s("0xa")]) {
                  case 0:
                    return r.next = 2, e.check3rdSession();

                  case 2:
                    if (r[s("0x4")] = r.sent, r.t0) {
                        r[s("0xa")] = 7;
                        break;
                    }
                    return r.next = 6, e.get3rdSession();

                  case 6:
                    r.t0 = r[s("0x12")];

                  case 7:
                    return r.abrupt(s("0x9"), r.t0);

                  case 8:
                  case "end":
                    return r[s("0xb")]();
                }
            }, r);
        }))();
    },
    $http: function(e, r) {
        var n = this;
        return p(t().mark(function o() {
            var a;
            return t().wrap(function(o) {
                for (;;) switch (o[s("0x14")] = o.next) {
                  case 0:
                    return a = {}, "release" !== n.app.globalData.envVersion && (a.versionno = "grayTest"), 
                    o[s("0xd")]("return", new Promise(function(o) {
                        var u;
                        wx.request({
                            url: n.getInterface(e),
                            data: r,
                            method: "POST",
                            header: c({
                                "content-type": "application/x-www-form-urlencoded"
                            }, a),
                            success: (u = p(t().mark(function r(a) {
                                var c, u, f;
                                return t().wrap(function(r) {
                                    for (;;) switch (r[s("0x14")] = r.next) {
                                      case 0:
                                        if (c = a.data, u = c.errcode, f = c.errmsg, i.default.info(""[s("0x18")](n.getInterface(e), "接口获取到数据:"), a), 
                                        c && !u) {
                                            r.next = 7;
                                            break;
                                        }
                                        return console.warn(n.getErrorMsg(u, f), c), o(!1), r.abrupt("return");

                                      case 7:
                                        o(c);

                                      case 8:
                                      case "end":
                                        return r.stop();
                                    }
                                }, r);
                            })), function(e) {
                                return u.apply(this, arguments);
                            }),
                            fail: function(r) {
                                console[s("0x19")]("".concat(n[s("0x1c")](e), "请求直接失败："), r), o(!1);
                            }
                        });
                    }));

                  case 3:
                  case "end":
                    return o.stop();
                }
            }, o);
        }))();
    },
    commonAsyncFunc: function() {
        var e = this;
        return p(t()[s("0x17")](function r() {
            var n;
            return t().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r[s("0xa")] = 2, e.checkAndGetThirdSession();

                  case 2:
                    if (n = r.sent) {
                        r.next = 8;
                        break;
                    }
                    return console.warn("无法得到有效的thirdSession,只能再请求一次"), r.next = 7, e.checkAndGetThirdSession();

                  case 7:
                    n = r.sent;

                  case 8:
                    return r.abrupt("return", n);

                  case 9:
                  case "end":
                    return r.stop();
                }
            }, r);
        }))();
    }
};

exports.default = d;
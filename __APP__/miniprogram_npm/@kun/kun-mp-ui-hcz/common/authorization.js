Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../../@babel/runtime/helpers/classCallCheck"), n = require("../../../../@babel/runtime/helpers/createClass"), s = (i(require("./regenerator-runtime/runtime.js")), 
i(require("./fetch.js"))), a = i(require("./promise")), u = i(require("./api.config.js")), o = require("./authorization-util");

function i(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

exports.default = function() {
    function i(e) {
        r(this, i), this.commonHost = u.default.getApi(), this.weAppNo = (e || getApp().globalData).weAppNo || "PA_CXZZB_05";
    }
    var c, p, h, l, f, d, b, w, m, x;
    return n(i, [ {
        key: "getShowSubscribeConfig",
        value: (x = t(e().mark(function t() {
            var r, n, a;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, (0, s.default)({
                        path: "".concat(this.commonHost.SUBSCRIBE_CONFIG),
                        header: {
                            "Content-Type": "application/json"
                        },
                        params: {
                            parameterKey: "MOBILE_POPUP_BY_APPID",
                            "X-PA-NONCESTR": 1
                        }
                    });

                  case 2:
                    if (!(r = e.sent)) {
                        e.next = 8;
                        break;
                    }
                    if (n = r.resultCode, a = r.resultData, "999999" !== n || !a) {
                        e.next = 7;
                        break;
                    }
                    return e.abrupt("return", a);

                  case 7:
                    return e.abrupt("return", !1);

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function() {
            return x.apply(this, arguments);
        })
    }, {
        key: "subscribeFunc",
        value: function(e) {
            return new Promise(function(t, r) {
                o.WXUtil.messageSubscription(e).then(function() {
                    t();
                }).catch(function() {
                    r();
                });
            });
        }
    }, {
        key: "onlyGetPhoneNumber",
        value: (m = t(e().mark(function t(r) {
            var n, s, a, u, i, c, p, h;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.newGetUserInfo(r, "getPhoneNumber");

                  case 2:
                    if (n = e.sent, s = {
                        encPhoneNumber: "encPhoneNumber",
                        encPurePhoneNumber: "encPurePhoneNumber",
                        signature: "mobileSignature",
                        nonce: "mobileNonce",
                        timestamp: "mobileTimestamp",
                        phoneNumber: "phoneNumber",
                        purePhoneNumber: "purePhoneNumber"
                    }, n && "stop" !== n) for (console.warn("ucp接口：newGetUserInfo => onlyGetPhoneNumber,得到授权手机号的加签参数", n), 
                    a = 0, u = Object.keys(s); a < u.length; a++) i = u[a], o.WXUtil.setCache(s[i], n[i]); else if (!n || "stop" === n) for (c = 0, 
                    p = Object.keys(s); c < p.length; c++) h = p[c], o.WXUtil.clearCache(s[h]);
                    return n || o.WXUtil.clearCache("newThirdSession"), e.abrupt("return", n);

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function(e) {
            return m.apply(this, arguments);
        })
    }, {
        key: "onlyGetUserInfo",
        value: (w = t(e().mark(function t(r) {
            var n;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.newGetUserInfo(r, "getUserInfo");

                  case 2:
                    return (n = e.sent) && "stop" !== n ? o.JSUtil.quicklySetStorage(n, "userInfo") : n || o.WXUtil.clearCache("newThirdSession"), 
                    e.abrupt("return", n);

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function(e) {
            return w.apply(this, arguments);
        })
    }, {
        key: "onlyGetWeRunData",
        value: (b = t(e().mark(function t(r) {
            var n, s, a = arguments;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = a.length > 1 && void 0 !== a[1] ? a[1] : "", e.next = 3, this.newGetUserInfo(r, "getWeRunData", n);

                  case 3:
                    return (s = e.sent) && "stop" !== s && (console.warn("ucp接口：newGetUserInfo => onlyGetWeRunData,得到微信步数信息", s), 
                    o.WXUtil.setCache("weRunData", s)), s || o.WXUtil.clearCache("newThirdSession"), 
                    e.abrupt("return", s);

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function(e) {
            return b.apply(this, arguments);
        })
    }, {
        key: "newGetUserInfo",
        value: (d = t(e().mark(function t(r) {
            var n, s, u, i, c, p, h, l, f, d, b = arguments;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = b.length > 1 && void 0 !== b[1] ? b[1] : "", s = b.length > 2 && void 0 !== b[2] ? b[2] : "", 
                    u = r.detail, i = u.encryptedData, c = void 0 === i ? "" : i, p = u.iv, h = void 0 === p ? "" : p, 
                    c && h) {
                        e.next = 6;
                        break;
                    }
                    return a.default.showModal({
                        showCancel: !1,
                        title: "温馨提示",
                        content: "您点击了拒绝授权,将无法正常使用平安好车主的功能体验"
                    }), e.abrupt("return", "stop");

                  case 6:
                    if (l = o.WXUtil.getCache("newThirdSession")) {
                        e.next = 10;
                        break;
                    }
                    return console.warn("调用newGetUserInfo函数必须得到newThirdSession的缓存，且不能在此时重新获取"), e.abrupt("return", !1);

                  case 10:
                    return f = {
                        encryptedData: c,
                        iv: h,
                        weAppNo: this.weAppNo,
                        thirdSession: l,
                        executeName: n
                    }, s && (f.number = s), e.next = 14, (0, o.$http)("newGetUserInfo", f);

                  case 14:
                    return d = e.sent, e.abrupt("return", d);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function(e) {
            return d.apply(this, arguments);
        })
    }, {
        key: "sureUserAuthor",
        value: (f = t(e().mark(function t() {
            var r, n, s;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.commonAsyncFunc();

                  case 2:
                    return r = !1, e.next = 5, o.WXUtil.getUserInfoSetting();

                  case 5:
                    if (!e.sent) {
                        e.next = 9;
                        break;
                    }
                    return e.next = 8, o.LoginUtil.wxGetUserInfo();

                  case 8:
                    r = e.sent;

                  case 9:
                    if (r) {
                        e.next = 12;
                        break;
                    }
                    return console.warn("无法得到已授权的用户信息，需要手动授权用户信息。location:2"), e.abrupt("return", !1);

                  case 12:
                    return e.next = 14, this.onlyGetUserInfo(r);

                  case 14:
                    return n = e.sent, s = o.WXUtil.getCache("userInfo"), n && o.WXUtil.setCache("userInfo", n), 
                    e.abrupt("return", s);

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function() {
            return f.apply(this, arguments);
        })
    }, {
        key: "get3rdSession",
        value: (l = t(e().mark(function r() {
            var n, s, u, i, c = this;
            return e().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return n = "get3rdSession", s = o.WXUtil.getCache("loginCodeData"), u = function() {
                        var r = t(e().mark(function t(r) {
                            var s;
                            return e().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, (0, o.$http)(n, {
                                        code: r,
                                        weAppNo: c.weAppNo
                                    });

                                  case 2:
                                    return s = e.sent, console.log("传递的值", s), s ? (o.WXUtil.setCache("newThirdSession", s.thirdSession), 
                                    o.JSUtil.quicklySetStorage(s, n)) : o.WXUtil.clearCache("loginCodeData"), e.abrupt("return", s);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                        }));
                        return function(e) {
                            return r.apply(this, arguments);
                        };
                    }(), i = function() {
                        var r = t(e().mark(function t() {
                            var r, n;
                            return e().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.login();

                                  case 2:
                                    if (r = e.sent, !(n = r.code)) {
                                        e.next = 9;
                                        break;
                                    }
                                    return o.WXUtil.setCache("loginCodeData", n), e.next = 8, u(n);

                                  case 8:
                                    return e.abrupt("return", e.sent);

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                        }));
                        return function() {
                            return r.apply(this, arguments);
                        };
                    }(), r.prev = 5, console.log(999), r.next = 9, a.default.checkSession();

                  case 9:
                    if (!s) {
                        r.next = 13;
                        break;
                    }
                    return r.next = 12, u(s);

                  case 12:
                    return r.abrupt("return", r.sent);

                  case 13:
                    return r.next = 15, i();

                  case 15:
                    return r.abrupt("return", r.sent);

                  case 18:
                    return r.prev = 18, r.t0 = r.catch(5), console.log("ProxyWX.login失效，需要重新执行一遍", r.t0), 
                    r.next = 23, i();

                  case 23:
                    return r.abrupt("return", r.sent);

                  case 24:
                  case "end":
                    return r.stop();
                }
            }, r, null, [ [ 5, 18 ] ]);
        })), function() {
            return l.apply(this, arguments);
        })
    }, {
        key: "check3rdSession",
        value: (h = t(e().mark(function t() {
            var r, n, s;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = o.WXUtil.getCache("newThirdSession")) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", !1);

                  case 3:
                    return n = {
                        thirdSession: r,
                        weAppNo: this.weAppNo
                    }, e.next = 6, (0, o.$http)("check3rdSession", n);

                  case 6:
                    return (s = e.sent) && o.JSUtil.quicklySetStorage(s, "check3rdSession"), e.abrupt("return", s);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function() {
            return h.apply(this, arguments);
        })
    }, {
        key: "checkAndGetThirdSession",
        value: (p = t(e().mark(function t() {
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.check3rdSession();

                  case 2:
                    if (e.t0 = e.sent, e.t0) {
                        e.next = 7;
                        break;
                    }
                    return e.next = 6, this.get3rdSession();

                  case 6:
                    e.t0 = e.sent;

                  case 7:
                    return e.abrupt("return", e.t0);

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function() {
            return p.apply(this, arguments);
        })
    }, {
        key: "commonAsyncFunc",
        value: (c = t(e().mark(function t() {
            var r;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.checkAndGetThirdSession();

                  case 2:
                    if (r = e.sent) {
                        e.next = 8;
                        break;
                    }
                    return console.warn("无法得到有效的thirdSession,只能再请求一次"), e.next = 7, this.checkAndGetThirdSession();

                  case 7:
                    r = e.sent;

                  case 8:
                    return e.abrupt("return", r);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function() {
            return c.apply(this, arguments);
        })
    } ]), i;
}();
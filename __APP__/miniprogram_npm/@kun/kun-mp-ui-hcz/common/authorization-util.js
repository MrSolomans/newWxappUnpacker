Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mixing = exports.WXUtil = exports.LoginUtil = exports.JSUtil = exports.$http = void 0;

var e = require("../../../../@babel/runtime/helpers/objectWithoutProperties"), t = require("../../../../@babel/runtime/helpers/objectSpread2");

require("../../../../@babel/runtime/helpers/Objectentries");

var r = require("../../../../@babel/runtime/helpers/slicedToArray"), n = require("../../../../@babel/runtime/helpers/typeof"), a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), o = require("../../../../@babel/runtime/helpers/asyncToGenerator"), i = (p(require("./regenerator-runtime/runtime.js")), 
p(require("./api.config.js"))), s = p(require("./fetch.js")), c = p(require("./promise")), u = [ "appid", "sourceType", "inviteCode", "sceneId", "spartaId" ];

function p(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function f(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    switch (e = Number(e)) {
      case -1:
        return "ucp登陆态过期，需重新获取";

      case -2:
        return "必传参数缺少";

      case -3:
        return "调用redis错误，需重试";

      case 40029:
        return "code参数无效";

      default:
        return t;
    }
}

exports.$http = function() {
    var e = o(a().mark(function e(t, r) {
        var n, o, c, u;
        return a().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t, n = "".concat(i.default.getApi().EIM_MINI, "/userInfo/").concat(a), 
                e.prev = 1, e.next = 4, (0, s.default)({
                    path: n,
                    params: r
                });

              case 4:
                if (o = e.sent) {
                    e.next = 7;
                    break;
                }
                return e.abrupt("return", !1);

              case 7:
                if (c = o.errcode, u = o.errmsg, o && !c) {
                    e.next = 12;
                    break;
                }
                return console.warn("".concat(n, "接口没有获取到数据:"), o), console.warn(f(c, u), o), e.abrupt("return", !1);

              case 12:
                return e.abrupt("return", o);

              case 15:
                return e.prev = 15, e.t0 = e.catch(1), console.warn("".concat(n, "请求直接失败："), e.t0), 
                e.abrupt("return", !1);

              case 19:
              case "end":
                return e.stop();
            }
            var a;
        }, e, null, [ [ 1, 15 ] ]);
    }));
    return function(t, r) {
        return e.apply(this, arguments);
    };
}();

var d = exports.WXUtil = {
    getCache: c.default.getStorageSync,
    setCache: c.default.setStorageSync,
    clearCache: c.default.removeStorageSync,
    loopCacheList: function(e) {
        var t = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "some";
        return !!(e && e instanceof Array && "function" == typeof e[r]) && ("find" === r ? e.map(function(e) {
            return t.getCache(e);
        })[0] : e[r](function(e) {
            return t.getCache(e);
        }));
    },
    setCacheList: function(e, t) {
        var a = this;
        if (e && "object" === n(e)) return Object.entries(e).forEach(function(n) {
            var o = r(n, 2), i = o[0], s = o[1], c = e instanceof Array ? s : i, u = t[s];
            a.setCache(c, u);
        }, {});
    },
    getCacheList: function(e) {
        var t = this;
        if (e && "object" === n(e)) return Object.entries(e).reduce(function(n, a) {
            var o = r(a, 2), i = o[0], s = o[1], c = t.getCache(s);
            return e instanceof Array ? n[s] = c || "" : n[i] = c || "", n;
        }, {});
    },
    clearUcpInfo: function() {
        var e = this;
        [ "openid", "openId", "unionId", "timestamp", "signature", "nonce", "signatureUnionid" ].forEach(function(t) {
            return e.clearCache(t);
        });
    },
    clearHczInfo: function() {
        var e = this;
        [ "aopsid", "hczAccessToken", "reportId", "userphone" ].forEach(function(t) {
            return e.clearCache(t);
        });
    },
    clearUserLoginInfo: function(e) {
        200 !== e && (this.clearHczInfo(), 114 !== e && 109 !== e || this.clearUcpInfo());
    },
    getPhoneSystemInfo: function() {
        var e, t, r = c.default.getSystemInfoSync();
        return (/ios/i.test(r.system.toLowerCase()) || r.platform && -1 !== r.platform.indexOf("ios")) && (e = 1, 
        t = "ios"), (/android/i.test(r.system.toLowerCase()) || r.platform && -1 !== r.platform.indexOf("android")) && (e = 2, 
        t = "android"), {
            phoneOsType: e,
            phoneSystem: t
        };
    },
    messageSubscription: function(e) {
        var r = this;
        return new Promise(function(a, o) {
            if (!c.default.canIUse("requestSubscribeMessage") || !c.default.requestSubscribeMessage || "function" != typeof c.default.requestSubscribeMessage) return console.error("无法使用ProxyWX.requestSubscribeMessage方法：", n(c.default.requestSubscribeMessage)), 
            o();
            var u = e.tmplIds, p = e.params;
            c.default.requestSubscribeMessage({
                tmplIds: u,
                success: function(e) {
                    if (Reflect.deleteProperty(e, "errMsg"), Object.entries(e).find(function(e) {
                        return "reject" === e;
                    })) return o();
                    (0, s.default)({
                        path: i.default.getApi().SUBSCRIBE,
                        params: t(t({
                            "X-PA-NONCESTR": 1
                        }, r.getCacheList({
                            xcxOpenid: "openId",
                            signature: "signature",
                            timestamp: "timestamp",
                            nonce: "nonce",
                            unionId: "unionId",
                            signatureUnionid: "signatureUnionid",
                            nickName: "nickName"
                        })), {}, {
                            subscribeNewDtos: p
                        }),
                        header: {
                            "content-type": "application/json;charset=utf-8",
                            secret_token: r.getCache("hczAccessToken")
                        }
                    }).then(a).catch(o);
                },
                fail: function(e) {
                    console.log("订阅失败", e), o(e);
                }
            });
        });
    },
    getUserInfoSetting: function() {
        return new Promise(function(e) {
            c.default.getSetting({
                success: function(t) {
                    var r = t.authSetting["scope.userInfo"];
                    e(r);
                },
                fail: function() {
                    e(!1);
                }
            });
        });
    }
}, l = (exports.JSUtil = {
    formatDate: function(e) {
        return [ e.getFullYear(), e.getMonth() + 1, e.getDate() ].map(this.formatNumber).join("-");
    },
    formatNumber: function(e) {
        return (e = e.toString())[1] ? e : "0" + e;
    },
    quicklySetStorage: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        if (e && "object" === n(e)) {
            for (var a = 0, o = Object.keys(e); a < o.length; a++) {
                var i = o[a];
                r !== i && (!e[i] || "undefined" !== e[i] && "null" !== e[i] || (e[i] = ""), "thirdSession" !== i ? (d.setCache(i, e[i]), 
                "openId" === i && d.setCache("openid", e[i])) : d.setCache("newThirdSession", e[i]));
            }
            t && d.setCache(t, e);
        }
    }
}, exports.LoginUtil = {
    setLoginParams: function(e) {
        d.setCacheList({
            aopsid: "aopsid",
            hczAccessToken: "hczAccessToken",
            reportId: "reportId",
            encryOpenId: "closedd",
            encryUnionId: "zombiedd",
            refreshToken: "refreshToken",
            userphone: "userName"
        }, e);
    },
    checkLoginStatus: function() {
        var e = arguments;
        return o(a().mark(function r() {
            var n, o, c, u, p, f;
            return a().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (n = e.length > 0 && void 0 !== e[0] ? e[0] : "", o = d.loopCacheList([ "hczAccessToken", "secret_token" ], "find"), 
                    c = {
                        "content-type": "application/json"
                    }, o && (c.secret_token = o), d.loopCacheList([ "openId", "unionId", "userInfo" ], "every")) {
                        r.next = 7;
                        break;
                    }
                    return console.warn("小程序中不存在openId或unionId或userInfo的缓存，检查登录态失败【0】"), r.abrupt("return", Promise.reject());

                  case 7:
                    return r.next = 9, (0, s.default)({
                        path: i.default.getApi().CHECK,
                        header: c,
                        params: t(t({}, d.getCacheList([ "openId", "unionId", "timestamp", "signature", "nonce", "signatureUnionid" ])), {}, {
                            sourceType: n,
                            "X-PA-NONCESTR": 1
                        })
                    });

                  case 9:
                    if (u = r.sent, p = u.code, f = u.data, 200 !== p) {
                        r.next = 15;
                        break;
                    }
                    return l.setLoginParams(f), r.abrupt("return", f);

                  case 15:
                    return d.clearUserLoginInfo(Number(p)), console.warn("checkLoginStatus fail[1]:", p, f), 
                    r.abrupt("return", !1);

                  case 18:
                  case "end":
                    return r.stop();
                }
            }, r);
        }))();
    },
    getRegister: function(r) {
        return o(a().mark(function n() {
            var o, c, p, f, h, g, m, b, v, I, y, S, C, x, k, L, w, N, U, T;
            return a().wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (o = r.appid, c = void 0 === o ? "pa-car-insureance-sr" : o, p = r.sourceType, 
                    f = void 0 === p ? "" : p, h = r.inviteCode, g = void 0 === h ? "" : h, m = r.sceneId, 
                    b = void 0 === m ? "" : m, v = r.spartaId, I = void 0 === v ? "" : v, y = e(r, u), 
                    S = d.getCache("userInfo"), C = S.nickName, x = S.avatarUrl, k = d.getPhoneSystemInfo(), 
                    L = k.phoneOsType, w = t(t({
                        appid: c,
                        sourceType: f,
                        inviteCode: g,
                        phoneOsType: L,
                        sceneId: b,
                        spartaId: I
                    }, d.getCacheList([ "openId", "unionId", "timestamp", "nonce", "signature", "signatureUnionid", "encPhoneNumber", "encPurePhoneNumber", "mobileSignature", "mobileNonce", "mobileTimestamp" ])), {}, {
                        nickName: C,
                        picUrl: x,
                        "X-PA-NONCESTR": 1
                    }, y), console.log("一键授权手机号传递的参数", w), w.openId && w.unionId) {
                        n.next = 8;
                        break;
                    }
                    return console.error("静默登录的必要参数不存在", w), n.abrupt("return", Promise.reject(w));

                  case 8:
                    return n.prev = 8, n.next = 11, (0, s.default)({
                        path: i.default.getApi().LOGIN,
                        params: w,
                        header: {
                            "content-type": "application/json"
                        }
                    });

                  case 11:
                    if (!(N = n.sent)) {
                        n.next = 17;
                        break;
                    }
                    return U = N.code, T = N.data, console.log("一键授权手机号获取aopsid返回结果:", T), 200 === U && l.setLoginParams(T), 
                    n.abrupt("return", T);

                  case 17:
                    n.next = 22;
                    break;

                  case 19:
                    n.prev = 19, n.t0 = n.catch(8), console.warn("静默登陆失败2", n.t0);

                  case 22:
                  case "end":
                    return n.stop();
                }
            }, n, null, [ [ 8, 19 ] ]);
        }))();
    },
    wxGetUserInfo: function() {
        return o(a().mark(function e() {
            return a().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function(e) {
                        c.default.getUserInfo({
                            withCredentials: !0,
                            success: function(t) {
                                var r = t.encryptedData, n = t.iv, a = !1;
                                r && n && (a = {
                                    detail: {
                                        encryptedData: r,
                                        iv: n
                                    }
                                }), e(a);
                            },
                            fail: function() {
                                e(!1);
                            }
                        });
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        }))();
    }
});

exports.mixing = Behavior({
    options: {
        pureDataPattern: /^_/
    },
    data: {
        _afterLoginFuncName: "",
        _afterLoginDataset: null
    },
    onLoad: function() {
        return o(a().mark(function e() {
            return a().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    l.checkLoginStatus();

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        }))();
    },
    methods: {
        customTap: function(e) {
            var t = e.currentTarget.dataset, r = t.func;
            this.data._afterLoginFuncName = r, this.data._afterLoginDataset = t, this.selectComponent("#k-login").showAuthorUser();
        },
        afterLogin: function() {
            var e = this.data, t = e._afterLoginFuncName, r = e._afterLoginDataset;
            t && "function" == typeof this[t] && this[t](r);
        }
    }
});
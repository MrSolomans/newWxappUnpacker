var e, t, n = require("@babel/runtime/helpers/regeneratorRuntime"), o = require("@babel/runtime/helpers/typeof"), r = [ "7" ];

e = r, t = 222, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

!function(e, t) {
    e -= 0;
}("0x0");

var a = [ "resultData", "spartaId", "thirdFromWeibao", "next", "none", "clearLoginInfo", "返回 传给后台成功", "sourceType", "miniProgram", "extraData", "globalData", "string", "isShowAccreditWindow", "静默登录的必要参数不存在", "encryUnionId", "push", "accessToken", "cityCode", "获取登录态失败，错误码：", "$http", "东城区", "formatDate", "undefined", "phoneOsType", "config", "/uapi/cps-hcz-smallapp/other/focus/remind", "test", "envVersion", "538", "getLocation:fail authorize no response", "reportId", "code", "clearWxCacheInfo", "cpcBackUrl", "serviceKey", "info", "unionid", "city", "stop", "versionno", "isAgreePrivacy", "温馨提示", "getOwnPropertyDescriptor", "nickName", "lastCustomTime", "abrupt", "warn", "signatureUnionid", "getRegeo", "return", "getStorageSync", "订阅成功了吗---------", "handleList", "setStorageSync", "onNeedPrivacyAuthorization", "forEach", "wxInfoCache", "prev", "timestamp", "length", "function", "latitude", "0", "concat", "filter", "tmplIds", "zombiedd", "log", "用户授权了定位但高德地图无数据返回:", "wrap", "now", "object", "userName", "requestSubscribeMessage", "订阅时发送后端地址--\x3e", "silenceGetUserDefaultInfo", "removeStorageSync", "getRequestUrl", "closedd", "addressComponent", "msg", "reject", "授权登录的必要参数不存在", "privacyGet", "openid", "release", "verifyTokenTime", "isReportShareCode", "then", "longitude", "地图结果：:", "unionId", "订阅失败", "setUserProperty", "reportShareCode", "includes", "default", "PACX_W00380026", "/login/third-party/v1/xcx/logout", "value", "getAllOptions", "shareCode", "t0", "end", "post", "nonce", "data", "init", "PACX_W00001424", "sdkOpenId", "getHczUserInfo", "defineProperties", "wx.requestSubscribeMessage方法问题：", "inviteCode", "成功！", "{}", "/uapi/cps-hcz-smallapp/other/shareActComp/getShareCode", "hczAccessToken", "goNextPage", "application/json", "用户拒绝了授权定位", "clearUserLoginInfo", "jumpAuthorizePage", "showToast", "appId", "isTabPage", "PA_CXZZB_05", "redirectTo", "toPrimitive", "needLoginOut", "dynamicCode", "getOwnPropertyDescriptors", "errMsg", "application/x-www-form-urlencoded", "customerTrack", "分享赚钱 获取sharecode::", "call", "mark", "授权接口调用失败", "北京", "symbol", "grayTest", "path" ];

!function(e, t) {
    !function(t) {
        for (;--t; ) e.push(e.shift());
    }(++t);
}(a, 383);

var i = function(e, t) {
    return a[e -= 0];
}, c = S(require("./utils/newGetUserInfo")), s = require("./utils/compatible"), u = S(require("./utils/handleString")), d = require("./utils/pathManage"), l = require("./utils/smallTool.js"), x = S(require("./utils/common/method.js")), g = require("./utils/common/time.js"), p = S(require("./miniprogram_npm/@kun/kun-mp-ui-hcz/main/main.js")), f = S(require("./miniprogram_npm/@kun/kun-mp-ui-5/common/main.js")), h = S(require("./utils/start/start.js")), v = require("./utils/updateUserInfo.js"), y = S(require("./utils/log.js")), w = [ "appid", "sourceType", i("0x10"), "sceneId", "spartaId" ];

function S(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function m(e) {
    return (m = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(e) {
        return o(e);
    } : function(e) {
        return e && i("0x6a") == ("undefined" == typeof Symbol ? "undefined" : o(Symbol)) && e.constructor === Symbol && e !== Symbol.prototype ? i("0x2b") : o(e);
    })(e);
}

function b(e, t) {
    if (null == e) return {};
    var n, o, r = function(e, t) {
        if (null == e) return {};
        var n = {};
        for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
            if (t.indexOf(o) >= 0) continue;
            n[o] = e[o];
        }
        return n;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (o = 0; o < a[i("0x69")]; o++) n = a[o], t.indexOf(n) >= 0 || {}.propertyIsEnumerable[i("0x27")](e, n) && (r[n] = e[n]);
    }
    return r;
}

function I(e, t, n, o, r, a, c) {
    try {
        var s = e[a](c), u = s[i("0x2")];
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void n(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(o, r);
}

function k(e) {
    return function() {
        var t = this, n = arguments;
        return new Promise(function(o, r) {
            var a = e.apply(t, n);
            function i(e) {
                I(a, o, r, i, c, "next", e);
            }
            function c(e) {
                I(a, o, r, i, c, "throw", e);
            }
            i(void 0);
        });
    };
}

function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(t) {
            return Object[i("0x58")](e, t).enumerable;
        })), n.push.apply(n, o);
    }
    return n;
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? P(Object(n), !0).forEach(function(t) {
            C(e, t, n[t]);
        }) : Object[i("0x22")] ? Object[i("0xe")](e, Object.getOwnPropertyDescriptors(n)) : P(Object(n))[i("0x65")](function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}

function C(e, t, n) {
    return (t = function(e) {
        var t = function(e, t) {
            if (i("0x75") != m(e) || !e) return e;
            var n = e[Symbol[i("0x1f")]];
            if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" != m(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (i("0x39") === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == m(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var A = wx.getAccountInfoSync()[i("0x36")][i("0x1b")], O = "wxb45e54a8165df819" === A ? "3326" : i("0x4a"), D = require("utils/datatist.js"), _ = require("./monitor/minproc.min.js"), j = require("utils/amap-wx.js");

_[i("0x46")]({
    beacon: "appmonjs.pingan.com.cn/upload",
    key: "iRiIZP9b7eQ",
    id: O,
    sampleRate: 1
});

var q = !0;

(0, s.compatibleFunc)(), App(T(T({
    onLaunch: function() {
        var e = this.globalData, t = e.environment, n = e.proVersion, o = 0 === t;
        (0, p[i("0x8e")])({
            weAppNo: i("0x1d"),
            environment: t
        }), (0, f.default)({
            weAppNo: "PA_CXZZB_05",
            environment: t
        }), D.App.setPara({
            name: "sensors",
            server_url: o ? "https://test1-ant.pingan.com.cn/sa?project=SA_XHCZEQHBEKbYixRU" : "https://ant.pingan.com.cn/sa?project=SA_XHCZhTK4ywlRBMWj",
            autoTrack: {
                appLaunch: !0,
                appShow: !0,
                appHide: !0,
                pageShow: !0,
                pageShare: !0,
                mpClick: !0,
                mpFavorite: !0,
                pageLeave: !0
            },
            show_log: !!o
        }), D.App[i("0xa")]({
            appID: "wxf225684ee1536a5f",
            url_v2: this.getRequestUrl("/c.gif", "datatist"),
            siteId_v2: o ? "sbd1y8fELjKdXNBv" : "k4yovBqcEvIaMXng",
            projectId: o ? "PsfHQgfBo0yqEeiA" : "YluHymhlVYwE5Jx5",
            siteId_v2_new: o ? "WEIXINqf9D6nXJCj" : "WEIXIN9T61W7PBBL",
            projectId_new: o ? "XHCZEQHBEKbYixRU" : "XHCZhTK4ywlRBMWj",
            version: n,
            log: !1
        }), c[i("0x8e")].initApp(this);
    },
    onShow: function(e) {
        var t = this;
        console.log("===[app.js][onShow][ops]===", e);
        var n = "pages/privacyAuthorization/privacyAuthorization";
        this.globalData.thirdFromWeibao = "pages/rightMore/memberLevel/weiSure" == e.path, 
        this.checkWxApi("onNeedPrivacyAuthorization") && wx[i("0x64")](function(e, n) {
            console.log("触发本次事件的接口是：" + n.referrer), t.resolvePrivacyAuthorization = e;
        }), this.checkWxApi("getPrivacySetting") && wx.getPrivacySetting({
            success: function(o) {
                console.log("getPrivacySetting:", null == o ? void 0 : o.needAuthorization), null != o && o.needAuthorization && (t.globalData.needAuthorization = !0, 
                e.path !== n && (t[i("0x38")].privacyAuthorizationOps = e), wx.reLaunch({
                    url: "/".concat(n)
                }));
            },
            fail: function() {
                console.log(i("0x29"));
            }
        }), console.log("进入小程序参数appjs-onShow::", e), h.default.updateManager().then(function(e) {
            console.warn("小程序更新结果：", {
                1: "getUpdateManager方法不存在或者无法使用",
                2: "没有更新",
                3: "用户确定更新，即将更新小程序",
                4: "用户确定更新，小程序更新出",
                5: "新的版本下载失败"
            }[e]);
        }), wx.setStorageSync("getLaunchOptionsSync", e), this.newAuthor(), (0, l.getSystemInfo)(this);
        try {
            var r = e.referrerInfo, a = void 0 === r ? {} : r, s = e.query, u = void 0 === s ? "" : s, d = a[i("0x37")], x = void 0 === d ? {} : d, g = a.appId, p = void 0 === g ? "" : g;
            if (this.globalData.scene = e.scene, this[i("0x38")].authorizeCode = x.code, p === this.globalData.redirect_appid) {
                if (o(x) == i("0x44")) return;
                wx[i("0x63")]("signPayData", x), x.return_code && wx.redirectTo({
                    url: "/pages/pingan/epcis/cpc/wxSdkPay?callUpType=SIGN"
                });
            }
            if ("wxd8f3793ea3b935b8" === p) return void wx.redirectTo({
                url: "/pages/webview/webview?pageType=callTaxi"
            });
            if (p === this.globalData.unPay_appid || p === this[i("0x38")].cnPay_appid) {
                if ("" == p || "undefined" == p) return;
                var f = u[i("0x4f")];
                f && wx[i("0x1e")]({
                    url: "/pages/webview/webview?src=".concat(f)
                });
            }
            c[i("0x8e")].commonAsyncFunc().then(function() {
                t.globalData[i("0xc")] = wx[i("0x60")]("openId") || wx[i("0x60")]("openid") || "", 
                t.setUserProperty(u, e[i("0x2d")]);
            }), (0, v[i("0x79")])();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log("保存App里onShow参数发生错误", e);
        }
    },
    onError: function(e) {
        console.error("全局捕获未处理的错误：", e);
    },
    onHide: function() {
        this.globalData.isReportShareCode = !1, this.globalData.sessionStorage = {};
        var e = wx.getStorageSync("guideFollowShow");
        e && !0 === JSON.parse(e) && this.$http({
            url: this.getRequestUrl(i("0x47")),
            data: {
                moduleType: "0"
            },
            needToken: !0,
            needLogin: !0
        });
    }
}, x[i("0x8e")]), {}, {
    setUserProperty: function() {
        var e = this, t = arguments[i("0x69")] > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.openid, o = void 0 === n ? wx.getStorageSync("openid") : n, r = t[i("0x52")], a = void 0 === r ? wx.getStorageSync("unionId") : r, c = t.reportId, s = void 0 === c ? wx.getStorageSync("reportId") : c, u = t.activityShareCode, d = void 0 === u ? "" : u, l = t[i("0x4")], x = void 0 === l ? "" : l, g = t.ccShareCode, p = void 0 === g ? d || x : g, f = t.executionId, h = void 0 === f ? "" : f, v = t.execution_id, y = void 0 === v ? "" : v, w = arguments.length > 1 ? arguments[1] : void 0;
        if (o && a) {
            D.setOpenid(o);
            var S = {
                openid: o,
                unionid: a
            };
            this.globalData.setUserProperty = !0, this.loginInfo().then(function(t) {
                var n = t.data;
                !e.globalData.thirdFromWeibao && e[i("0xd")](n[i("0x14")]), q && !e[i("0x38")].thirdFromWeibao && e.storageMemberInfo(n.hczAccessToken).then(function() {
                    q = !1;
                }), S.reportId = n.reportId, console.log("设置画龙埋点用户信息01:有reportId"), D[i("0x8b")](T({}, S)), 
                D.trackLogin(S.reportId), p && e.getOpenidAndpoint(p), D.customerTrack("PACX_W39000213", {
                    session_id: e.globalData.scene,
                    aopsid: wx.getStorageSync("reportId") || "",
                    small_program_page_url_path: w,
                    execution_id: y || h
                }, null);
            }).catch(function() {
                e[i("0x38")].setUserProperty = !1, s && (S.reportId = s), D.setUserProperty(T({}, S)), 
                D.customerTrack("PACX_W39000213", {
                    session_id: e.globalData.scene,
                    aopsid: wx.getStorageSync(i("0x4c")) || "",
                    small_program_page_url_path: w,
                    execution_id: y || h
                }, null);
            });
        }
    },
    onPageNotFound: function(e) {
        var t = e.path, n = e.query;
        console[i("0x5c")](""[i("0x6d")](t, "页面未发现"));
        var o = u.default[i("0x3")](n);
        (0, d[i("0x15")])("/pages/notFoundPage/notFoundPage" + o, "reLaunch");
    },
    loginInfo: function() {
        var e = arguments, t = this;
        return k(n()[i("0x28")](function o() {
            var r, a, c, s, u, d, x, g, p, f, h;
            return n().wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    if (r = e.length > 0 && void 0 !== e[0] ? e[0] : "", a = e.length > 1 ? e[1] : void 0, 
                    wx.getStorageSync(i("0x84")), wx.getStorageSync("verifyToken"), c = (0, l.getWxCacheInfo)(), 
                    wx.getStorageSync("wxInfoCache"), wx.getStorageSync(i("0x82")) && wx.getStorageSync("unionId")) {
                        n[i("0x31")] = 9;
                        break;
                    }
                    return console.log("获取登录态失败：不存在openid或unionId"), n[i("0x5b")]("return", Promise.reject());

                  case 9:
                    return s = t.getRequestUrl("/login/third-party/v1/xcx/verifyToken", "hczhd"), n.next = 12, 
                    t.$http({
                        url: s,
                        needToken: !0,
                        data: T({
                            sourceType: r
                        }, c),
                        isLoginInfo: !0
                    });

                  case 12:
                    if (u = n.sent, d = u[i("0x4d")], x = u.data, g = u.msg, p = void 0 === g ? "" : g, 
                    f = u.status, 200 !== Number(d) || !x) {
                        n.next = 39;
                        break;
                    }
                    if (t.globalData.isAgreePrivacy = !0, wx.setStorageSync("verifyToken", {
                        code: d,
                        data: x,
                        msg: p
                    }), wx[i("0x63")]("verifyTokenTime", Date.now()), wx[i("0x63")](i("0x66"), c), h = {
                        aopsid: "aopsid",
                        hczAccessToken: "accessToken",
                        reportId: i("0x4c"),
                        encryOpenId: i("0x7c"),
                        encryUnionId: "zombiedd",
                        refreshToken: "refreshToken",
                        userphone: "userName"
                    }, Object.keys(h)[i("0x65")](function(e) {
                        var t = h[e];
                        wx.setStorageSync(e, x[t]);
                    }), y[i("0x8e")].info("verifyToken返回结果", x), !t[i("0x38")].getOpenIdAndPhone && !t.globalData[i("0x30")] && (0, 
                    l.bindOpenIdAndMobileNo)(t, x.accessToken), !t.globalData.setUserProperty && t[i("0x8b")]({
                        reportId: x.reportId
                    }), t[i("0x38")].userStatusIsLogin = !0, wx.setStorageSync("WISEAPM_UID", x.reportId), 
                    console[i("0x71")]("获取登录态成功:", x), setTimeout(function() {
                        D.customerTrack("PACX_W00001424", {
                            is_login: !0,
                            is_success: !0
                        }, null);
                    }, 1e3), setTimeout(function() {
                        D.customerTrack(i("0xb"), {
                            is_login: !0,
                            is_success: !0
                        }, null);
                    }, 1e3), "locationInfo" === a && t.privacyAdd({
                        openId: wx.getStorageSync("openid"),
                        unionId: wx.getStorageSync("unionId"),
                        agree: "1"
                    }), x[i("0x76")]) {
                        n.next = 38;
                        break;
                    }
                    return n.next = 37, t.commonLoginOut();

                  case 37:
                    return n.abrupt("return", Promise.reject());

                  case 38:
                    return n.abrupt("return", {
                        code: d,
                        data: x
                    });

                  case 39:
                    return setTimeout(function() {
                        D[i("0x25")]("PACX_W00001424", {
                            is_login: !1,
                            is_success: !1
                        }, null);
                    }, 1e3), t.globalData.userStatusIsLogin = !1, l.handleState[i("0x18")](Number(d)), 
                    console.log(i("0x40"), d, "错误消息：", p, f), y.default.info("获取登录态失败，错误码：", d, "错误消息：", p, f), 
                    3005 === f && (wx.setStorageSync("hczAccessToken", "") || wx.setStorageSync("secret_token", "")), 
                    t[i("0x38")].handleList = t.globalData.handleList && t.globalData[i("0x62")][i("0x6e")](function(e) {
                        return e.url !== s;
                    }), n.abrupt("return", Promise.reject());

                  case 47:
                  case "end":
                    return n.stop();
                }
            }, o);
        }))();
    },
    pickLoginMethod: function(e) {
        var t = arguments, o = this;
        return k(n().mark(function r() {
            var a, c, s, u, d;
            return n()[i("0x73")](function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return a = t.length > 1 && void 0 !== t[1] ? t[1] : "", c = t[i("0x69")] > 2 && void 0 !== t[2] ? t[2] : "pa-car-insureance-sr", 
                    s = t.length > 3 && void 0 !== t[3] ? t[3] : "", o.saveLoginParams(e, a, c), u = function() {
                        var t = k(n().mark(function t() {
                            var r, a;
                            return n()[i("0x73")](function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return r = wx.getStorageSync(i("0x14")) || wx.getStorageSync("secret_token"), a = {}, 
                                    r && (a.secret_token = r), t.abrupt("return", o.loginInfo("", !1).then(function(e) {
                                        return e;
                                    }).catch(function() {
                                        return console.warn("verifyToken失败[2]：newPickLoginMethod"), o[i("0x19")](e, "login", "redirectTo", s), 
                                        {};
                                    }));

                                  case 4:
                                  case "end":
                                    return t[i("0x54")]();
                                }
                            }, t);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(), r.next = 7, u();

                  case 7:
                    if ((d = r.sent).data) {
                        r.next = 10;
                        break;
                    }
                    return r.abrupt("return", Promise.reject("没有登录态"));

                  case 10:
                    return r[i("0x5b")]("return", d);

                  case 11:
                  case "end":
                    return r.stop();
                }
            }, r);
        }))();
    },
    commonLoginOut: function() {
        var e = this;
        return k(n().mark(function t() {
            var o, r, a;
            return n().wrap(function(t) {
                for (;;) switch (t.prev = t[i("0x31")]) {
                  case 0:
                    return t.next = 2, e.$http({
                        url: e.getRequestUrl(i("0x1"), "hczhd"),
                        data: T({
                            sourceType: "test"
                        }, (0, l.getWxCacheInfo)()),
                        needToken: !0,
                        needLogin: !0
                    });

                  case 2:
                    if (o = t.sent, r = o.code, a = o.data, console[i("0x71")]("小程序appjs 登出：退出统一登录::", r, a), 
                    e.globalData[i("0x20")] = !0, 200 !== r) {
                        t.next = 11;
                        break;
                    }
                    return D.trackLogout(), Promise.all([ (0, l.clearWxCacheInfo)(e), (0, l.clearPhone)(e), (0, 
                    l[i("0x33")])(e) ]).then(function() {
                        c.default.commonAsyncFunc();
                    }), t.abrupt("return", a);

                  case 11:
                    return (0, l.clearPhone)(e), (0, l[i("0x33")])(e), (0, l[i("0x4e")])(e), wx.removeStorageSync("sessionId"), 
                    wx.removeStorageSync("accessToken"), wx.removeStorageSync("userphone"), wx.removeStorageSync("aopsid"), 
                    t[i("0x5b")]("return", Promise[i("0x7f")]());

                  case 19:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    getLocationInfo: function() {
        var e = arguments, t = this;
        return k(n().mark(function o() {
            var r, a, s, u, d, l, x, g, p, f, h, v, w;
            return n().wrap(function(o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    if (r = e.length > 0 && void 0 !== e[0] ? e[0] : "detail", a = e.length > 1 ? e[1] : void 0, 
                    s = e.length > 2 && void 0 !== e[2] && e[2], u = e[i("0x69")] > 3 && void 0 !== e[3] && e[3], 
                    t.globalData[i("0x56")]) {
                        o.next = 23;
                        break;
                    }
                    if (!u) {
                        o.next = 7;
                        break;
                    }
                    return o.abrupt("return", Promise.resolve({}));

                  case 7:
                    if (d = wx.getStorageSync("openid") || "", l = wx.getStorageSync("unionId") || "", 
                    d && l) {
                        o[i("0x31")] = 12;
                        break;
                    }
                    return o[i("0x31")] = 12, c.default.checkAndGetThirdSession();

                  case 12:
                    return o.next = 14, t[i("0x81")]({
                        openId: d
                    });

                  case 14:
                    if (x = o.sent, g = x.code, p = x.data, (0 !== g || p.agree !== i("0x6c")) && 0 === g) {
                        o.next = 23;
                        break;
                    }
                    return o.next = 20, t.loginInfo("", "locationInfo").catch(function() {
                        return "";
                    });

                  case 20:
                    if ((f = o.sent) && (!f || 200 === f[i("0x4d")])) {
                        o.next = 23;
                        break;
                    }
                    return o.abrupt("return", Promise.resolve({
                        code: -3
                    }));

                  case 23:
                    if (h = wx.getStorageSync("gdMapAddressInfo"), v = !s && (h && Date.now() - h.lastCustomTime < 36e5), 
                    w = function() {
                        var e = k(n().mark(function e(o, a) {
                            var c, s, u, d, l, x, g, p, f, w, S, m, b, I;
                            return n().wrap(function(e) {
                                for (;;) switch (e[i("0x67")] = e.next) {
                                  case 0:
                                    if (c = o[i("0x87")], s = o[i("0x6b")], (u = o.location) && (c = u.lgn, s = u.lat), 
                                    "tude" !== r) {
                                        e.next = 5;
                                        break;
                                    }
                                    return a({
                                        longitude: c,
                                        latitude: s
                                    }), e[i("0x5b")]("return");

                                  case 5:
                                    if (!v) {
                                        e[i("0x31")] = 9;
                                        break;
                                    }
                                    e.t0 = h, e.next = 12;
                                    break;

                                  case 9:
                                    return e.next = 11, t.getGdMapCity(c, s).then(function(e) {
                                        return e[i("0x5a")] = Date[i("0x74")](), 0 !== c && 0 !== s && wx[i("0x63")]("gdMapAddressInfo", e), 
                                        e;
                                    });

                                  case 11:
                                    e.t0 = e.sent;

                                  case 12:
                                    if (d = e[i("0x5")], console.log("地图结果：---\x3e", d), y.default.info(i("0x88"), d), 
                                    l = d.regeocodeData, x = void 0 === l ? {} : l, g = d.name, p = x[i("0x7d")], w = (f = void 0 === p ? {} : p).province, 
                                    S = f[i("0x53")], m = f.district, b = void 0 === m ? "" : m, I = String(S), (!S || 0 === S.length || JSON.stringify(S) === i("0x12")) && (I = String(w)), 
                                    "city" !== r) {
                                        e.next = 24;
                                        break;
                                    }
                                    return wx.setStorageSync("cityName", I), a({
                                        city: I,
                                        des: g,
                                        longitude: c,
                                        latitude: s,
                                        lon: parseInt(1e5 * c, 10) / 1e5,
                                        lat: parseInt(1e5 * s, 10) / 1e5
                                    }), e.abrupt(i("0x5f"));

                                  case 24:
                                    "detail" === r && t.$http({
                                        url: t.getRequestUrl("/uapi/cps-hcz-smallapp/baseArea/getCodeByName"),
                                        data: {
                                            cityName: I
                                        }
                                    }).then(function(e) {
                                        var t = e.code, n = e.data, o = {
                                            city: I,
                                            longitude: c,
                                            latitude: s,
                                            des: g,
                                            province: w,
                                            district: b
                                        };
                                        if (0 === t && n) {
                                            var r = n[i("0x3f")];
                                            o[i("0x3f")] = r;
                                        }
                                        Object.keys(o)[i("0x65")](function(e) {
                                            "city" === e ? wx.setStorageSync("cityName", o[e]) : wx.setStorageSync(e, o[e]);
                                        }), y[i("0x8e")].info("获取城市编码返回:", e), a(o);
                                    });

                                  case 25:
                                  case i("0x6"):
                                    return e[i("0x54")]();
                                }
                            }, e);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }(), !v) {
                        o.next = 28;
                        break;
                    }
                    return o.abrupt("return", new Promise(function(e) {
                        console[i("0x71")]("使用缓存的经纬度:", h), y.default.info("使用缓存的经纬度:", h), w(h, e);
                    }));

                  case 28:
                    return o.abrupt("return", new Promise(function(e) {
                        wx.getLocation({
                            type: "gcj02",
                            success: function(t) {
                                var n = t.longitude, o = t.latitude;
                                console.log("获取地理位置授权:---\x3e", n, o), y.default.info("获取地理位置授权:", n, o), n && o ? w({
                                    longitude: n,
                                    latitude: o
                                }, e) : a ? w(a, e) : wx.showModal({
                                    title: i("0x57"),
                                    content: "获取地理位置失败"
                                });
                            },
                            fail: function(t) {
                                if (a) w(a, e); else {
                                    console.warn(i("0x17"), t), y.default[i("0x51")]("用户拒绝了授权定位:", t);
                                    var n = [ "getLocation:fail auth deny", "getLocation:fail:auth denied", i("0x4b") ], o = [ "getLocation:fail:ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF", "getLocation:fail system permission denied", "getLocation:fail:system permission denied" ];
                                    console.log("errArr1.includes(e.errMsg)=", n.includes(t.errMsg), "errArr2.includes(e.errMsg)=", o[i("0x8d")](t[i("0x23")])), 
                                    n.includes(t[i("0x23")]) ? e({
                                        code: -1
                                    }) : o[i("0x8d")](t.errMsg) ? e({
                                        code: -2
                                    }) : e({});
                                }
                            }
                        });
                    }));

                  case 29:
                  case "end":
                    return o.stop();
                }
            }, o);
        }))();
    },
    getGdMapCity: function() {
        var e = arguments[i("0x69")] > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return new Promise(function(n) {
            var o = [ {
                name: i("0x2a"),
                regeocodeData: {
                    addressComponent: {
                        province: "北京市",
                        city: "北京市",
                        district: i("0x42"),
                        cityCode: 110100
                    }
                },
                longitude: 116.407387,
                latitude: 39.904179
            } ];
            new j.AMapWX({
                key: "73431e0c5163bbf2779765a2efa5fec9"
            })[i("0x5e")]({
                location: "".concat(e, ",").concat(t),
                success: function(e) {
                    (!e || e.length < 1) && (console.warn("用户授权了定位但高德地图无数据返回"), y.default.info(i("0x72"), o), 
                    e = o), console.warn("得到高德地图信息--》", e), n(e[0]);
                },
                fail: function(e) {
                    console[i("0x71")]("地图请求失败回调：-》", e), y.default[i("0x51")]("地图请求失败回调：:", o[0]), 
                    n(o[0]);
                }
            });
        });
    },
    getRegister: function(e) {
        var t = this;
        return k(n()[i("0x28")](function o() {
            var r, a, c, s, u, d, x, g, p, f, h, v, S, m;
            return n()[i("0x73")](function(n) {
                for (;;) switch (n.prev = n[i("0x31")]) {
                  case 0:
                    return r = e.appid, a = void 0 === r ? "pa-car-insureance-sr" : r, c = e[i("0x35")], 
                    s = void 0 === c ? "" : c, u = e.inviteCode, d = void 0 === u ? "" : u, x = e.sceneId, 
                    g = void 0 === x ? "" : x, p = e[i("0x2f")], f = void 0 === p ? "" : p, h = b(e, w), 
                    y[i("0x8e")].setFilterMsg("进入授权手机号方法"), v = T(T(T({
                        appid: a,
                        sourceType: s,
                        inviteCode: d,
                        phoneOsType: t[i("0x38")][i("0x45")],
                        sceneId: g,
                        spartaId: f
                    }, (0, l.getWxCacheInfo)()), {}, {
                        nickName: wx.getStorageSync("userInfo")[i("0x59")],
                        picUrl: wx.getStorageSync("userInfo").avatarUrl
                    }, (0, l.getPhoneCache)()), {}, {
                        "X-PA-NONCESTR": 1
                    }, h), S = {}, t.globalData.envVersion !== i("0x83") && (S[i("0x55")] = "grayTest"), 
                    wx[i("0x7a")]("hczLoginTrace"), n.next = 8, t.getSpartaId();

                  case 8:
                    if (f = n.sent, v.spartaId = f, console.log("一键授权手机号传递的参数", v), v.openId && v.unionId) {
                        n.next = 15;
                        break;
                    }
                    return console.error(i("0x3b"), v), y.default.warn(i("0x80"), v), n.abrupt("return", Promise.reject(v));

                  case 15:
                    return y.default.info("一键授权手机号调用接口入参：", v), m = h.dynamicCode ? "/login/third-party/v1/xcx/sms/login" : "/login/third-party/v1/xcx/loginByMobile", 
                    "v2" == h.version ? m = "/login/third-party/v2/xcx/sms/login" : h.serviceKey && (m = "/cps-hcz-smallapp/xcxLogin/auth", 
                    h.isPolicy && (v.serviceType = "policy")), console.log("==OtherOptions==", h), n.abrupt("return", new Promise(function(e, n) {
                        wx.request({
                            url: t.getRequestUrl(m, "hczhd"),
                            method: "POST",
                            data: v,
                            header: T({
                                "Content-Type": i("0x16")
                            }, S),
                            success: function(o) {
                                var r, a, c, s, u, d, x, g, p;
                                (console.log("一键授权手机号获取aopsid返回结果:", o), y.default.info("一键授权手机号获取aopsid返回结果", o), 
                                200 === (null == o || null === (r = o.data) || void 0 === r ? void 0 : r.code)) ? (t.globalData.isAgreePrivacy = !0, 
                                wx.setStorageSync("secret_token", o.data.data.accessToken), wx[i("0x63")]("secretToken", o.data.data.accessToken), 
                                wx.setStorageSync(i("0x14"), o.data[i("0x9")].accessToken), wx.setStorageSync("reportId", o[i("0x9")].data.reportId), 
                                wx.setStorageSync("aopsid", o.data.data.aopsid), wx.setStorageSync("userphone", o.data.data.userName), 
                                wx[i("0x63")]("encryOpenId", o.data[i("0x9")].closedd), wx.setStorageSync(i("0x3c"), o[i("0x9")].data[i("0x70")]), 
                                !t.globalData.getOpenIdAndPhone && (0, l.bindOpenIdAndMobileNo)(t, o.data.data[i("0x3e")]), 
                                D.setUserId(o.data[i("0x9")].reportId), t.getHczUserInfo(o.data.data.accessToken), 
                                D[i("0x8b")]({
                                    reportId: o.data.data.reportId,
                                    register_source: o.data[i("0x9")].registerType
                                }), !h.serviceKey && t.storageMemberInfo(v.hczAccessToken).then(function() {
                                    q = !1;
                                }), setTimeout(function() {
                                    D[i("0x25")]("PACX_W00001423", {
                                        source: "xcx_mr",
                                        reportid: o.data.data.reportId
                                    }, null);
                                }, 100), t.privacyAdd({
                                    openId: wx.getStorageSync(i("0x82")),
                                    unionId: wx.getStorageSync(i("0x89")),
                                    agree: "1"
                                }), wx.removeStorageSync(i("0x3a")), e(o.data)) : 1061 === (null == o || null === (a = o.data) || void 0 === a ? void 0 : a.code) ? (y[i("0x8e")].info("触发双重验证发送短信验证码:"), 
                                console.log("触发双重验证发送短信验证码"), n(o)) : 1044 === (null == o || null === (c = o.data) || void 0 === c ? void 0 : c.code) || 1043 === (null == o || null === (s = o.data) || void 0 === s ? void 0 : s.code) ? (y.default.info("第三方登录授权失败:", null == o || null === (d = o.data) || void 0 === d ? void 0 : d[i("0x4d")]), 
                                console.log("第三方登录授权失败:", null == o || null === (x = o.data) || void 0 === x ? void 0 : x.code), 
                                n(o)) : -1 === (null == o || null === (u = o.data) || void 0 === u ? void 0 : u.code) && h[i("0x50")] ? (y.default[i("0x51")]("第三方登录授权失败:", null == o || null === (g = o.data) || void 0 === g ? void 0 : g.code), 
                                console[i("0x71")]("第三方登录授权失败:", null == o || null === (p = o.data) || void 0 === p ? void 0 : p[i("0x4d")]), 
                                wx.setStorageSync("thirdAuthLoginFail", !0), n(o)) : (console.warn("静默登陆失败1:", o), 
                                y.default.warn("授权登录失败：", o, v), o && o[i("0x9")] && -2e3 === o[i("0x9")][i("0x4d")] ? wx.showToast({
                                    title: o.data.result,
                                    icon: "none",
                                    mask: !0,
                                    duration: 2e3
                                }) : o && o.data && !h[i("0x21")] ? wx.showToast({
                                    title: "登录校验不通过（"[i("0x6d")](o.data.code, "）"),
                                    icon: i("0x32"),
                                    mask: !0,
                                    duration: 2e3
                                }) : !h.dynamicCode && wx.showToast({
                                    title: "服务异常，请稍后再试",
                                    icon: "none",
                                    mask: !0,
                                    duration: 2e3
                                }), n(o));
                            },
                            fail: function(e) {
                                y.default.warn("授权登录失败fail：", e), console.warn("静默登陆失败2", e), wx[i("0x1a")]({
                                    title: "服务异常，请稍后重试",
                                    icon: i("0x32"),
                                    duration: 2e3
                                }), n(e);
                            }
                        });
                    }));

                  case 20:
                  case i("0x6"):
                    return n.stop();
                }
            }, o);
        }))();
    },
    getShareInfo: function(e) {
        var t = this;
        return new Promise(function(n, o) {
            t.$http({
                url: t.getRequestUrl("/uapi/cps-hcz-smallapp/downloadGift/queryCard"),
                method: "POST",
                data: {
                    shareId: e
                },
                header: {
                    "Content-Type": i("0x24")
                },
                needToken: !0
            }).then(function(e) {
                console.log("获取分享内容：", e), e && "999999" === e.resultCode ? n(e[i("0x2e")]) : o();
            }).catch(function() {
                o();
            });
        });
    },
    getRecordInfo: function(e) {
        var t = this;
        return new Promise(function(n, o) {
            t.$http({
                url: t.getRequestUrl("/uapi/cps-hcz-smallapp/invite/getRecordInfo"),
                method: "POST",
                data: {
                    scene: e
                },
                needToken: !0
            }).then(function(e) {
                console.log("微运营分享接口返回：", e), e && "999999" === e.resultCode ? n(e[i("0x2e")]) : o();
            }).catch(function(e) {
                o(e);
            });
        });
    },
    goNewMainPages: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/pages/index/index2", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, n = arguments[i("0x69")] > 2 && void 0 !== arguments[2] && arguments[2], o = [ "/pages/index/index", "/pages/insurance/insurance", "/pages/right/right" ], r = o.find(function(t) {
            return new RegExp("^" + t + "(1|2|$|\\?)")[i("0x48")](e);
        });
        e = r ? r + "2" + e.replace(/^([^?]*)(.*)$/, function(e, t, n) {
            return n;
        }) : e;
        var a = r ? "reLaunch" : n ? "navigateTo" : "redirectTo";
        console.log("即将跳转", a, e, r), wx[a]({
            url: e,
            success: t
        });
    },
    showRedDot: function() {
        if ((0, l[i("0x1c")])()) {
            var e = wx.getStorageSync("hczAccessToken");
            wx.hideTabBarRedDot && "function" == typeof wx.hideTabBarRedDot && (e ? wx.hideTabBarRedDot({
                index: 3
            }) : wx.showTabBarRedDot({
                index: 3
            }));
        }
    },
    messageSubscription: function(e, t, r, a) {
        var c = this, s = 0 === this.globalData.environment ? e : t;
        return new Promise(function(e, t) {
            if (!wx.requestSubscribeMessage || "function" != typeof wx.requestSubscribeMessage) return console.error(i("0xf"), m(wx.requestSubscribeMessage)), 
            t();
            var u, d = function(e) {
                o(a) === i("0x6a") && a({
                    code: e
                });
            };
            d(1), wx.requestSubscribeMessage({
                tmplIds: s,
                success: (u = k(n().mark(function o(a) {
                    var s, u;
                    return n().wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return console.log("订阅成功---------", a), -1 !== JSON.stringify(a).indexOf("accept") ? d(2) : d(3), 
                            s = "xcxSendPay" === r ? "/uapi/wechat/mqInfo/subSend" : "/uapi/wechat/xcxSubscribe/subscribe", 
                            console.log("订阅时发送后端地址--\x3e", s), delete a.errMsg, n.next = 7, c[i("0x41")]({
                                url: c[i("0x7b")](s),
                                data: {
                                    xcxOpenid: wx.getStorageSync(i("0x82")),
                                    signature: wx.getStorageSync("signature"),
                                    timestamp: wx.getStorageSync(i("0x68")),
                                    nonce: wx.getStorageSync(i("0x8")),
                                    unionId: wx.getStorageSync("unionId"),
                                    signatureUnionid: wx[i("0x60")](i("0x5d")),
                                    templateInfo: a,
                                    source: r || "1"
                                },
                                needToken: !0
                            });

                          case 7:
                            (u = n.sent) && 0 === u[i("0x4d")] ? (console.log(i("0x34"), u), e(a)) : (console.log("返回 传给后台失败"), 
                            t(a));

                          case 9:
                          case "end":
                            return n.stop();
                        }
                    }, o);
                })), function(e) {
                    return u.apply(this, arguments);
                }),
                fail: function(e) {
                    console.log("订阅失败", e), t(e);
                }
            });
        });
    },
    newMessageSubscription: function(e, t) {
        var r = this, a = [], c = [];
        return t.forEach(function(t) {
            a[i("0x3d")]({
                source: e || "1",
                templateId: t[i("0x6f")],
                scenceID: t.scenceID
            }), c.push(t.tmplIds);
        }), new Promise(function(e, t) {
            if (!wx.requestSubscribeMessage || o(wx[i("0x77")]) !== i("0x6a")) return console.error("wx.requestSubscribeMessage方法问题：", m(wx.requestSubscribeMessage)), 
            t();
            var s;
            wx.requestSubscribeMessage({
                tmplIds: c,
                success: (s = k(n().mark(function o(c) {
                    var s, u, d, l, x;
                    return n()[i("0x73")](function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (console.log(i("0x61"), c), s = Object.entries(c).filter(function(e) {
                                return "accept" === e[1];
                            }), u = [], s.forEach(function(e) {
                                u.push(e[0]);
                            }), d = a.filter(function(e) {
                                return u.includes(e.templateId);
                            }), -1 === JSON.stringify(c).indexOf("accept")) {
                                n.next = 16;
                                break;
                            }
                            return l = "/uapi/wechat/mqInfo/subNewSend", console.log(i("0x78"), l), delete c.errMsg, 
                            n.next = 11, r.$http({
                                url: r[i("0x7b")](l),
                                data: {
                                    xcxOpenid: wx[i("0x60")]("openid"),
                                    signature: wx.getStorageSync("signature"),
                                    timestamp: wx.getStorageSync("timestamp"),
                                    nonce: wx.getStorageSync("nonce"),
                                    unionId: wx.getStorageSync(i("0x89")),
                                    signatureUnionid: wx.getStorageSync(i("0x5d")),
                                    subscribeNewDtos: d
                                },
                                needLogin: !0,
                                needToken: !0
                            });

                          case 11:
                            x = n.sent, console.log("data:::", x), x && 0 === x[i("0x4d")] ? (console.log("返回 传给后台成功"), 
                            e(x)) : (console.log("返回 传给后台失败"), t()), n.next = 17;
                            break;

                          case 16:
                            t(c);

                          case 17:
                          case i("0x6"):
                            return n[i("0x54")]();
                        }
                    }, o);
                })), function(e) {
                    return s.apply(this, arguments);
                }),
                fail: function(e) {
                    console.log(i("0x8a"), e), t(e);
                }
            });
        });
    },
    subscribeFunc: function(e, t, n, r, a, c, s) {
        if (c) {
            var u = wx.getStorageSync(a), d = (0, g.formatDate)(new Date());
            !u || u && d !== u ? this.messageSubscription(e, t, a, s)[i("0x86")](function(e) {
                wx.setStorageSync(a, d), "function" == typeof n && n(e);
            }).catch(function() {
                "function" == typeof r && r();
            }) : "function" == typeof n && n();
        } else this.messageSubscription(e, t, a)[i("0x86")](function(e) {
            "function" == typeof n && n(e);
        }).catch(function() {
            o(r) === i("0x6a") && r();
        });
    },
    newSubscribeFunc: function(e) {
        var t = e.sucFunc, n = void 0 === t ? function() {} : t, o = e.failFunc, r = void 0 === o ? function() {} : o, a = e.subscribeSource, c = void 0 === a ? "" : a, s = e.dailySubscribe, u = void 0 === s || s, d = e.dtos, l = void 0 === d ? [] : d;
        if (u) {
            var x = wx.getStorageSync(c), p = (0, g[i("0x43")])(new Date());
            !x || x && p !== x ? this.newMessageSubscription(c, l)[i("0x86")](function(e) {
                wx.setStorageSync(c, p), n(e);
            }, r) : n();
        } else this.newMessageSubscription(c, l).then(n, r);
    },
    queryConfigurePageInfo: function(e) {
        var t = this, n = {};
        return this[i("0x38")][i("0x49")] !== i("0x83") && (n.versionno = i("0x2c")), new Promise(function(o) {
            wx.request({
                url: t.getRequestUrl("/uapi/cps-hcz-smallapp/mobile/config/pageInfo/queryConfigurePageInfo"),
                data: T({
                    "X-PA-NONCESTR": 1
                }, e),
                method: i("0x7"),
                header: T({
                    "Content-Type": "application/json"
                }, n),
                success: function(e) {
                    var t = e.data.resultData, n = e.data.resultDesc;
                    o(!(!t || n !== i("0x11")) && t);
                },
                fail: function(e) {
                    console.warn("queryConfigurePageInfo接口请求失败,", e), o(!1);
                }
            });
        }).then(function(e) {
            return e;
        });
    },
    checkLoginForCache: function() {
        return wx.getStorageSync("openid") && wx.getStorageSync("hczAccessToken");
    },
    getShareCode: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return console.log("getShareCode--header", t, wx.getStorageSync("hczAccessToken")), 
        new Promise(function(r, a) {
            e.$http({
                url: e.getRequestUrl(i("0x13")),
                data: {
                    moduleController: t,
                    assemblyCode: n,
                    executeId: o
                },
                needLogin: !0,
                needToken: !0
            }).then(function(e) {
                console.log(i("0x26"), e);
                var t = e[i("0x4d")], o = e[i("0x9")], c = e[i("0x7e")];
                0 === t ? (console.log("得到分享赚钱的分享码——activityShareCode：", o.activityShareCode, n), 
                r(o.activityShareCode)) : a(c);
            }).catch(function() {
                a();
            });
        });
    },
    getOpenidAndpoint: function() {
        var e = arguments, t = this;
        return k(n().mark(function o() {
            var r, a;
            return n().wrap(function(n) {
                for (;;) switch (n[i("0x67")] = n.next) {
                  case 0:
                    r = e.length > 0 && void 0 !== e[0] ? e[0] : "", a = e.length > 1 && void 0 !== e[1] ? e[1] : {}, 
                    console.log("分享赚钱上报埋点", r, t.globalData.isReportShareCode, wx.getStorageSync("reportShareCode"), wx.getStorageSync(i("0x4c"))), 
                    r && wx[i("0x60")]("reportId") && (!t[i("0x38")].isReportShareCode || r !== wx.getStorageSync(i("0x8c"))) && (console.log("进入分享赚钱上报埋点"), 
                    D.customerTrack(i("0x0"), T({
                        share_code: r,
                        sharecode: r,
                        aopsid: wx[i("0x60")]("reportId")
                    }, a), null), t.globalData[i("0x85")] = !0, wx.setStorageSync("reportShareCode", r));

                  case 4:
                  case "end":
                    return n.stop();
                }
            }, o);
        }))();
    },
    getLevelUrl: function(e) {
        var t = this;
        return k(n().mark(function o() {
            return n().wrap(function(n) {
                for (;;) switch (n[i("0x67")] = n[i("0x31")]) {
                  case 0:
                    return n.abrupt("return", t.$http({
                        url: t.getRequestUrl("/uapi/cps-hcz-smallapp/common/page/levelUrl"),
                        data: {
                            tag: e
                        }
                    }));

                  case 1:
                  case "end":
                    return n.stop();
                }
            }, o);
        }))();
    },
    globalData: {
        handleList: [],
        bindCarIconShow: !0,
        thirdSessionHasEffective: !1,
        isCheckAuthorize: !1,
        environment: "wxf225684ee1536a5f" === A ? 1 : 0,
        appid: A,
        weAppNo: "PA_CXZZB_05",
        sdkOpenId: "",
        getOpenIdAndPhone: !1,
        userStatusIsLogin: !1,
        phoneOsType: 1,
        scene: "",
        isIPX: !1,
        statusBarHeight: 0,
        hasDiscernModel: !1,
        windowHeight: null,
        phoneSystem: null,
        userInfo: "",
        authorizeCode: "",
        sessionStorage: {},
        envVersion: wx.getAccountInfoSync().miniProgram.envVersion,
        isReportShareCode: !1,
        proVersion: wx.getAccountInfoSync().miniProgram.version,
        needLoginOut: !0,
        isAgreePrivacy: !1,
        privacyAuthorizationOps: {}
    }
}));
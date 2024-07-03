var e, t, a = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../@babel/runtime/helpers/typeof"), r = [ "data", "end", "prev", "warn", "wxTempId", "code", "route", "authorizeBehavior", "targetName", "showToast", "点击interceptLogin方法", "interceptLogin", "find", "onNext", "phoneOsType", "properties", "请阅读并同意协议", "forEach", "/pages/webview/webview?noShare=1&src=", "trackObj", "catch", "getOwnPropertyDescriptor", "done", "log", "setStorageSync", "appid", "needTrigger", "setData", "length", "phone", "globalData", "phoneVerifyChannel", "$http", "wxapp10016", "xcxNewGiftPack", "getOwnPropertyDescriptors", "application/json", "loginParams", "手机号格式有误", "truePhoneNumber", "PACX_W39000191", "abrupt", "cancel", "call", "return", "/login/third-party/v1/image/slide/code", "scenceId", "queryPageInfo", "thirdSessionHasEffective", "authorizeChannel", "subParams", "toPrimitive", "split", "准备展示手机号弹窗", "wrap", "eventObj", "symbol", "grayTest", "发送验证码", "info", "xcxBindCar_subscription", "indexOf", "next", "setFilterMsg", "object", "removeStorageSync", "verifLoginOn", "detail", "triggerEvent", "setCallback", "小程序首页_验证弹窗_点击不允许", "default", "function", "weixinkuaijie", "then", "手机验证码登录页_点击获取验证码", "iptVerifCode", "曝光手机验证码登录页", "hideLoading", "getTime", "isCheckSub", "goBack", "apply", "原生" ];

e = r, t = 178, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var o = function(e, t) {
    return r[e -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.commonAuthor = exports.authorizeCompAlert = exports[o("0x51")] = void 0, 
exports.getThirdSessionSuc = function(e) {
    wx.setStorageSync("headPortrait", e.avatarUrl), g[o("0x14")].isCheckAuthorize = !0, 
    g[o("0x14")][o("0x26")] = !0;
}, exports.pageAuthorizeBehavior = void 0;

var i = u(require("../../utils/newGetUserInfo")), s = u(require("../../utils/log")), c = require("../../utils/smallTool.js");

function u(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function h(e) {
    return (h = "function" == typeof Symbol && o("0x2e") == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
    })(e);
}

function l(e, t, a, n, r, i, s) {
    try {
        var c = e[i](s), u = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void a(e);
    }
    c[o("0xc")] ? t(u) : Promise.resolve(u)[o("0x40")](n, r);
}

function p(e) {
    return function() {
        var t = this, a = arguments;
        return new Promise(function(n, r) {
            var o = e.apply(t, a);
            function i(e) {
                l(o, n, r, i, s, "next", e);
            }
            function s(e) {
                l(o, n, r, i, s, "throw", e);
            }
            i(void 0);
        });
    };
}

function d(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push[o("0x48")](a, n);
    }
    return a;
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? d(Object(a), !0).forEach(function(t) {
            x(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object[o("0x19")](a)) : d(Object(a))[o("0x7")](function(t) {
            Object.defineProperty(e, t, Object[o("0xb")](a, t));
        });
    }
    return e;
}

function x(e, t, a) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != h(e) || !e) return e;
            var a = e[Symbol[o("0x29")]];
            if (void 0 !== a) {
                var n = a[o("0x21")](e, t || "default");
                if (o("0x36") != h(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == h(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var g = getApp(), v = null, m = require("../../utils/datatist.js"), b = function(e, t) {
    var a = {
        "曝光统一授权登录页": "PACX_W00069526",
        "统一授权登录页_点击勾选授权": "PACX_W39000189",
        "统一授权登录页_点击取消勾选授权": "PACX_W39000188",
        "小程序首页_授权弹窗_点击拒绝": "PACX_W39000179",
        "小程序首页_验证弹窗_点击允许": "PACX_W39000186",
        "小程序首页_验证弹窗_点击不允许": "PACX_W39000185",
        "统一授权登录页_点击登录方式": "PACX_W39000190",
        "曝光手机验证码登录页": "PACX_W39000193",
        "手机验证码登录页_点击手机号输入框": "PACX_W39000195",
        "手机验证码登录页_点击获取验证码": "PACX_W39000192",
        "手机验证码登录页_点击验证码输入框": "PACX_W39000194",
        "手机验证码登录页_点击登录": o("0x1e"),
        "手机验证码登录页_点击取消勾选授权": "PACX_W39000199",
        "手机验证码登录页_点击勾选授权": "PACX_W39000200"
    };
    a[e] && m.customerTrack(a[e], t, null);
};

var C = [ "pages/index/index2", "pages/insurance/insurance2", "pages/discovery/discovery", "pages/right/right2" ], A = {
    data: {
        commonAfterLoginHadDone: !1,
        isShowToast: "",
        needNext: "",
        eventObj: null,
        userStatusIsLogin: !1,
        isShowBtnGetUser: !1,
        isShowBtnGetPhone: !1,
        thirdSessionHasActive: !1,
        loginParams: {
            sourceType: 1e3,
            appid: "pa-car-insureance-sr",
            inviteCode: "",
            trace: ""
        },
        trackObj: {
            pagetype: "原生"
        }
    },
    methods: {
        onlyOnceUseAfterLogin: function() {
            var e = this;
            return p(a().mark(function t() {
                return a().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e.commonAfterLogin || n(e.commonAfterLogin) !== o("0x3e") || e[o("0x4a")].commonAfterLoginHadDone) {
                            t.next = 5;
                            break;
                        }
                        return e[o("0x4a")].commonAfterLoginHadDone = !0, t[o("0x34")] = 4, e.commonAfterLogin();

                      case 4:
                        return t.abrupt("return", t.sent);

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        interceptLogin: function(e) {
            var t = this;
            console[o("0xd")](o("0x1"), e), s.default[o("0x35")](o("0x0"));
            var n, r = e[o("0x39")] && e.detail.currentTarget ? e.detail : e, i = r.currentTarget.dataset.funcName, c = this.data, u = c[o("0x1b")], h = c.ccShareCode, l = (n = p(a().mark(function n(r) {
                var s;
                return a().wrap(function(a) {
                    for (;;) switch (a.prev = a[o("0x34")]) {
                      case 0:
                        return console.log("interceptLogin-success", e), a.next = 3, t.onlyOnceUseAfterLogin();

                      case 3:
                        if ("function" != typeof (s = a.sent)) {
                            a.next = 14;
                            break;
                        }
                        return a[o("0x4c")] = 5, a.next = 8, s();

                      case 8:
                        a.next = 14;
                        break;

                      case 10:
                        a.prev = 10, a.t0 = a.catch(5), console.log("函数返回值不是一个promise", a.t0), s();

                      case 14:
                        i && t[i] ? t[i](r) : console.log("仅仅只是实现登录的流程");

                      case 15:
                      case "end":
                        return a.stop();
                    }
                }, n, null, [ [ 5, 10 ] ]);
            })), function(e) {
                return n.apply(this, arguments);
            });
            u && h && this.setData({
                "loginParams.trace": JSON.stringify({
                    source: h
                })
            }), this.beforeShowPhone().then(function() {
                l(r);
            }, function() {
                t.showPhone("interceptLogin", r) ? l(r) : s[o("0x3d")][o("0x31")]("未登录登录出授权弹窗");
            });
        },
        changeBtnState: function(e) {
            var t = e.detail, a = {};
            "user" === t ? a.isShowBtnGetUser = !1 : t === o("0x13") && (a.isShowBtnGetPhone = !1), 
            this.setData(a);
        },
        setCallback: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this[o("0x11")]({
                needNext: e,
                eventObj: t
            });
        },
        beforeShowPhone: function() {
            return this.data.userStatusIsLogin ? Promise.resolve() : g.loginInfo();
        },
        showPhone: function(e) {
            var t = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (this[o("0x3b")](e, a), this.data.userStatusIsLogin) return !0;
            var n = wx.getStorageSync("encPhoneNumber") || "";
            s.default.info(o("0x2b"), n, this.data.isShowToast), console.log("准备展示手机号弹窗", n, this.data.isShowToast), 
            i[o("0x3d")].commonAsyncFunc().then(function() {
                s.default.info("未登录获取微信授权参数后弹窗");
                var e = getCurrentPages();
                if (e.length > 0) {
                    var a = e[e.length - 1];
                    -1 !== C.indexOf(a[o("0x50")]) && wx.hideTabBar();
                }
                t.data.trackObj.productID = t.data[o("0x1b")].appid, b("曝光统一授权登录页", t.data.trackObj), 
                t.setData({
                    isShowToast: o("0x13")
                });
            });
        },
        checkUserLogin: function() {
            var e = this;
            return p(a().mark(function t() {
                return a()[o("0x2c")](function(t) {
                    for (;;) switch (t[o("0x4c")] = t[o("0x34")]) {
                      case 0:
                        return t.abrupt("return", g.loginInfo().then(function() {
                            e.setData({
                                userStatusIsLogin: !0
                            });
                        })[o("0xa")](function() {
                            e[o("0x11")]({
                                userStatusIsLogin: !1
                            });
                        }));

                      case 1:
                      case o("0x4b"):
                        return t.stop();
                    }
                }, t);
            }))();
        }
    }
};

exports.authorizeCompAlert = A;

var P = Behavior(A);

exports.pageAuthorizeBehavior = P;

var w = Behavior({
    data: {
        needHideList: [],
        subSource: "",
        subParams: null,
        isCheckSub: !1,
        isNoGoSub: !1,
        iptPhoneNumber: "",
        truePhoneNumber: "",
        verifBtnTxt: "发送验证码",
        verifIptStatus: !0,
        iptVerifCode: "",
        startTime: 60,
        phoneVerifyChannel: !1,
        authorizeChannel: !0,
        getVeriCode: !0,
        verifFormDis: 0,
        verifLoginOn: !0,
        trackObj: {
            pagetype: o("0x49")
        },
        showPhoneClear: !1,
        showVerifClear: !1
    },
    attached: function() {
        var e = this;
        (function() {
            var e = {};
            return "release" !== g.globalData.envVersion && (e.versionno = o("0x2f")), new Promise(function(t) {
                wx.request({
                    url: g.getRequestUrl("/uapi/cps-hcz-smallapp/parameterConfig/getParameterByKey"),
                    data: {
                        parameterKey: "MOBILE_POPUP_BY_APPID",
                        "X-PA-NONCESTR": 1
                    },
                    method: "POST",
                    header: f({
                        "Content-Type": o("0x1a")
                    }, e),
                    success: function(e) {
                        var a = e.data, n = a.resultCode, r = a.resultData;
                        "999999" === n && r ? t(r) : t();
                    },
                    fail: function() {
                        t();
                    }
                });
            });
        })().then(function(t) {
            e.data.needHideList = t || [];
        }), this.verifLoginOn();
    },
    ready: function() {
        var e = this;
        console.log("是否请求配置的订阅内容：", this.data.loginSubscription), this.data.loginSubscription && g[o("0x25")]({
            source: "msgSubscription",
            tag: this.data.loginSubscription
        }).then(function(t) {
            if (t && t.length > 0) {
                var a = t[0].keyValue.formOtherData, n = [], r = a.map(function(t) {
                    return n.push(t[o("0x4e")]), !e.data.subSource && (e.data.subSource = t.origin), 
                    "#" === t.scenceId && (t[o("0x24")] = ""), {
                        source: t.origin,
                        templateId: t.ucpId,
                        scenceID: t.scenceId
                    };
                });
                e.data.subParams = {
                    tmplIds: n,
                    params: r
                };
            }
        });
    },
    methods: {
        subscribe: function() {
            var e = this;
            return p(a().mark(function t() {
                var n, r, i, s, c, u, h, l;
                return a().wrap(function(t) {
                    for (;;) switch (t[o("0x4c")] = t.next) {
                      case 0:
                        if (!e.data.authorizeChannel && b("统一授权登录页_点击登录方式", e.data.trackObj), !e.data.isNoGoSub) {
                            t[o("0x34")] = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        if (!e.data.isCheckSub) {
                            t.next = 5;
                            break;
                        }
                        return t.abrupt(o("0x22"));

                      case 5:
                        if (e.data[o("0x46")] = !0, setTimeout(function() {
                            e.data.isCheckSub = !1;
                        }, 500), n = e.data[o("0x1b")] || e.properties.loginParams, r = n[o("0xf")], i = e[o("0x4a")].needHideList[o("0x2")](function(e) {
                            return e.appid === r;
                        }), console.warn("静默登录的时候，是否隐藏订阅的弹窗：", r, Boolean(i)), !i) {
                            t.next = 14;
                            break;
                        }
                        return console[o("0x4d")]("obm配置appid：".concat(i[o("0xf")], "不展示订阅弹窗,页面名称：").concat(i[o("0x52")])), 
                        e[o("0x4a")].isGoPrevPagePath = !0, t.abrupt("return");

                      case 14:
                        s = {
                            0: {
                                tmplIds: [ "6t8-QCJc1ufT0u2hJNgvJMDEb3XmaIdgHTKR1-qc6EY", "xVgcFfY99VAYakKSmZEp82yuizRKGW623wJ9OJ5i7QY" ],
                                params: [ {
                                    source: "xcxBindCar",
                                    templateId: "XCX_REGISTER_BIND_CAR",
                                    scenceID: "wxapp10095"
                                }, {
                                    source: "xcxNewGiftPack",
                                    templateId: "XCX_NEWCOMER_GIFT_REMIND",
                                    scenceID: "wxapp10101"
                                } ]
                            },
                            1: {
                                tmplIds: [ "XB2INDFIhha1PPe7AKORDOMrRKhHgcL0kKMnClgsib8", "Rk1gYqNcrmBWeLc4kkzQIRUfF6pA41CUBsdRBYeCvow" ],
                                params: [ {
                                    source: "xcxBindCar",
                                    templateId: "XCX_REGISTER_BIND_CAR",
                                    scenceID: "wxapp10009"
                                }, {
                                    source: o("0x18"),
                                    templateId: "XCX_NEWCOMER_GIFT_REMIND",
                                    scenceID: o("0x17")
                                } ]
                            }
                        }, c = g.globalData.environment, u = new Date()[o("0x45")](), h = o("0x32"), "", 
                        e.data[o("0x28")] && e.data.subSource && (h = e.data.subSource), wx.getStorageSync(h) || "" ? e.data.isGoPrevPagePath = !0 : (l = function(e) {
                            m.customerTrack({
                                1: "PACX_W39000130",
                                2: "PACX_W39000131",
                                3: "PACX_W39000132"
                            }[e.code], {
                                source: ""
                            }, null);
                        }, g.msgSubscription(e.data[o("0x28")] || s[c], l)[o("0x40")](function() {
                            wx.setStorageSync(h, u), e[o("0x4a")].isLoginRight && e.goBack && e.goBack();
                        })[o("0xa")](function() {
                            e.data.isGoPrevPagePath = !0, wx[o("0xe")](h, u), e.data.isLoginRight && e[o("0x47")] && e[o("0x47")]();
                        }));

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        verifLoginOn: function() {
            var e = this;
            return p(a().mark(function t() {
                var n;
                return a().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, g.$http({
                            url: g.getRequestUrl("/cps-hcz-smallapp/other/xcx/grayLevel/oneLogin", "hczhd")
                        });

                      case 2:
                        n = t.sent, !0, 0 == n[o("0x4f")] ? (e.setData({
                            phoneVerifyChannel: !0,
                            authorizeChannel: !1,
                            verifLoginOn: !0
                        }), e.data.trackObj.scenetype = o("0x3f"), b("曝光统一授权登录页", e.data.trackObj)) : (e.setData({
                            phoneVerifyChannel: !1,
                            authorizeChannel: !0,
                            verifLoginOn: !1
                        }), e.data.trackObj.scenetype = "yanzhengma", b("曝光手机验证码登录页", e.data.trackObj));

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        setVerifForm: function() {
            var e = this;
            1 == g.globalData[o("0x4")] && this.setData({
                verifFormDis: 0 == this.data.verifFormDis ? 100 : 0
            }), setTimeout(function() {
                e.setData({
                    showVerifClear: !e.data.showVerifClear
                });
            }, 200), 0 == this.data.verifFormDis && b("手机验证码登录页_点击验证码输入框", this.data.trackObj), 
            this.setData({
                verifResTxt: ""
            });
        },
        onTapPhoneInput: function() {
            b("手机验证码登录页_点击手机号输入框", this[o("0x4a")].trackObj);
        },
        channleChangle: function() {
            this.data[o("0x38")] ? (this.data.trackObj.scenetype = "weixinkuaijie", this.setData({
                phoneVerifyChannel: !this.data.phoneVerifyChannel,
                authorizeChannel: !this.data.authorizeChannel
            })) : (this.data.trackObj.scenetype = "yanzhengma", this.setData({
                phoneVerifyChannel: !this.data[o("0x15")]
            })), this.data.authorizeChannel && b(o("0x43"), this.data.trackObj);
        },
        onInputPhoneNumber: function(e) {
            var t = e.detail.value;
            this.setData({
                iptPhoneNumber: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                    return e.replace(/(\W|\s)/g, "")[o("0x2a")](/^(\d{3})(\d{4})(\d{4})$/).filter(function(e) {
                        return e;
                    }).join(t);
                }(t),
                showPhoneClear: !0
            }), this[o("0x4a")].truePhoneNumber = t.replace(/\s+/g, "");
        },
        onClearPhoneNumber: function() {
            var e = this;
            setTimeout(function() {
                e.setData({
                    showPhoneClear: !e.data.showPhoneClear
                });
            }, 200), this.setData({
                verifResTxt: ""
            });
        },
        isPhoneNumberValid: function(e) {
            return e && 0 != e.length ? /^1[3-9]\d{9}$/.test(e) ? "ok" : (console.log("手机号格式有误:", e), 
            o("0x1c")) : "请输入手机号";
        },
        clearIpt: function(e) {
            "phone" === e.currentTarget.dataset.type ? this[o("0x11")]({
                iptPhoneNumber: "",
                showPhoneClear: !0,
                truePhoneNumber: ""
            }) : this.setData({
                iptVerifCode: "",
                showVerifClear: !0
            });
        },
        getVeriCode: function() {
            var e = this;
            return p(a().mark(function t() {
                var n, r, i, u, h, l, p;
                return a().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (b(o("0x41"), e.data.trackObj), n = e.data, r = n.truePhoneNumber, i = n.isChecked, 
                        u = n.getVeriCode, h = e.isPhoneNumberValid(r), i) {
                            t[o("0x34")] = 6;
                            break;
                        }
                        return e.showSeverWarn(), t.abrupt("return");

                      case 6:
                        if ("ok" === h) {
                            t.next = 9;
                            break;
                        }
                        return wx[o("0x53")]({
                            title: h,
                            icon: "none",
                            mask: !0
                        }), t.abrupt(o("0x22"));

                      case 9:
                        if (!u) {
                            t.next = 20;
                            break;
                        }
                        return wx.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), l = f(f({
                            appid: e.properties.loginParams.appid || e[o("0x4a")].loginParams.appid,
                            phoneOsType: g.globalData.phoneOsType
                        }, (0, c.getWxCacheInfo)()), {}, {
                            mobilePhone: r
                        }), s.default[o("0x31")]("短信验证入参：", l), t.next = 15, g[o("0x16")]({
                            url: g.getRequestUrl("/login/third-party/v2/xcx/sms/send", "hczhd"),
                            data: l,
                            needSpartaIdInBody: !0
                        });

                      case 15:
                        p = t.sent, s.default[o("0x31")]("短信验证结果：", p), console.log("获取验证码结果::", p), wx[o("0x44")](), 
                        200 == (null == p ? void 0 : p.code) ? (e.timer(), e[o("0x11")]({
                            verifIptStatus: !1,
                            getVeriCode: !1
                        })) : e.setData({
                            verifResTxt: (null == p ? void 0 : p.result) || "请稍后再试"
                        });

                      case 20:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        timer: function() {
            var e = this;
            clearInterval(v);
            var t = 60;
            v = setInterval(function() {
                t -= 1, e[o("0x11")]({
                    startTime: t
                }), t <= 0 && (e.setData({
                    startTime: 60,
                    verifBtnTxt: " 重新发送",
                    getVeriCode: !0
                }), clearInterval(v));
            }, 1e3);
        },
        onInputVerifCode: function(e) {
            var t = e.detail.value;
            this[o("0x11")]({
                iptVerifCode: t,
                showVerifClear: !0
            });
        },
        onConfirmTap: function() {
            var e = this, t = this.data, a = t[o("0x42")], n = t.isChecked, r = t.truePhoneNumber, i = t.trackObj, c = this.isPhoneNumberValid(r);
            b("手机验证码登录页_点击登录", i), n ? "ok" === c ? a.length <= 3 ? wx.showToast({
                title: "请输入正确格式的验证码",
                icon: "none",
                mask: !0
            }) : (wx.showLoading({
                title: "加载中...",
                mask: !0
            }), s.default.info("执行手机验证码登录验证的参数对比：", this.properties.loginParams, this[o("0x4a")].loginParams), 
            g.getRegister(f(f({}, this.properties[o("0x1b")]), {}, {
                dynamicCode: a,
                version: "v2",
                mobilePhone: r
            })).then(function() {
                e.triggerEvent(o("0x3"), e.properties.eventObj), wx.hideLoading(), e.veriCallBack();
            })[o("0xa")](function(t) {
                var a;
                wx.hideLoading(), e.setData({
                    verifResTxt: null == t || null === (a = t.data) || void 0 === a ? void 0 : a.result
                });
            })) : wx.showToast({
                title: c,
                icon: "none",
                mask: !0
            }) : this.showSeverWarn();
        },
        veriCallBack: function() {
            if (this.subscribe(), "function" == typeof this.goBack && this.goBack(), this.data[o("0x27")]) {
                var e = getCurrentPages();
                if (e.length > 0) {
                    var t = e[e[o("0x12")] - 1];
                    console.log("pages:", t.route), -1 !== C[o("0x33")](t.route) && wx.showTabBar();
                }
            }
            this[o("0x11")]({
                isShowToast: "",
                iptPhoneNumber: "",
                iptVerifCode: "",
                verifResTxt: "",
                verifBtnTxt: "发送验证码",
                phoneVerifyChannel: !1,
                authorizeChannel: !0,
                getVeriCode: !0,
                isChecked: !1,
                verifIptStatus: !0
            }), clearInterval(v), this.data[o("0x1d")] = "";
        },
        checkboxChange: function() {
            var e = this.data, t = e.trackObj, a = e.isChecked, n = e.authorizeChannel;
            this[o("0x11")]({
                isChecked: !a
            }, function() {
                b(n ? a ? "手机验证码登录页_点击勾选授权" : "手机验证码登录页_点击取消勾选授权" : a ? "统一授权登录页_点击勾选授权" : "统一授权登录页_点击取消勾选授权", t);
            });
        },
        showSeverWarn: function() {
            wx.showToast({
                title: o("0x6"),
                icon: "none",
                mask: !0
            });
        }
    }
});

exports.authorizeBehavior = w;

var k = {
    properties: {
        isShowToast: {
            type: String,
            value: ""
        },
        eventObj: {
            type: Object,
            value: null
        },
        loginParams: {
            type: Object,
            value: {
                appid: "pa-car-insureance-sr",
                sourceType: "1002"
            }
        },
        isNoGoSub: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isChecked: !1,
        uncheck: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB60lEQVRoQ+1YPUsrQRQ9lwTZkA/s/QEG0iTMgD5I5ytfobb2VtrrL9Beq9fb6issn11AhRmyTSD+AHsxCRkkYWSjgij7djY75rF4t92Zc+8958x+HELOL8p5/+AB/reCrAArkJGB72OhXq+3ZIzZBbBjrW0AqGYk7+P2ARH1AJwFQfC70Wg8ueA7KRCG4cpkMrkE0HQB9bAmLBaLv5rN5n0SVuIAEfPj8fj2tfk7Ijosl8t/6/X6IAk8zf1Op1MNgmADwDGAVQBhqVRaS1IicQCt9Z619gTAXaFQWG+1Wg9pGku7ttvtLk+n05toCCLaF0Kc/gvDZYBra+06gC0p5Z+0Dc2zXmu9Za09J6IbIcSPTAMopR6jA2uMqbXbba+2iWus3+9Xh8NhVHcgpaxlHcBGAFLKRLXmYTtuj1LKqW5iU65APpuPsFzr8gC+mX/DYwXSMuFbCVaAFcjoKbYQW4gtxN9CLx5wfRpkdMyn7a51+WPON/Npn36sACsQw4DPQzz7qa9UKjXfWVCceq8ZkZ+feq31LFYhom0hxMVXWeY9rlJqE8CFl1gl98HWx2gRwIEx5sp3RhRlQaPR6Ke19shrtBhJm+tw982buY7XF3Fw562R+CaeF3hR+3iARTEdV4cVYAUyMpB7Cz0DWOBQQItFN3oAAAAASUVORK5CYII=",
        check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACvUlEQVRoQ+2YTUhUURTHf28GByu1CKOFtCgpgoKSoKYIqabMSBgXZkgglJR90kLaFARu2jhaZIsSBiGYRRquchEEQYsa+yD7pIixRDMZ08YZzUpi4vIcBpz0XX3d0Ufv7Wbuuef8f+fce3jvaFj80SyuHxtgritoV8CugMkM/D9HKH4AFzkcAw4B64Bsk8mbvD0GvAECRGnSWvkl41+qAvFK8sjgDrBRxuk/sOlknBLtJp+NfBkCTGS+I43iE5o7ibLFqBLGAFWcBhqNMqFo/Yzm59p0vmUAHgFuRQKN3AY1P1vNAkQVXFgj4Yn1mOYnxyxAXDaaCjvNP/37mswRsgHMVMYaFVhTCOEQRFLb/vwGcLqg4irsqIYnLXDjYEqx5i/Akjw4cRvy3TAWhSv7IPTQIgCrC+F4CyxeDmPDcLkYuoJ/vSrzrwKes1BeB84M+B6Bhr3w6fGU91wdQGY2rPXAq3b4PW7caFwLobIJ3OJlFhgdgoYi6H427V51ACUXobQW3j+A62UQG5haSO4qONUGKzboNiODUL8Hep4bgqsDWJYPF4KQlQuD3dDohd4XqYLWF8PRACxaqq8J0Prd0PvSULwwUAcgvOdvg5p74FoAP0eh+TA8bZ0QpsH+8+CtBYdT/y8aBp8H+l5LiVcPICJsKoPqW+BwQDwO7Zfgrg+ONENBaVLocL8u/stbafHpARBRimqg3JcU9mMEMrOSvyN9uvj+dzMSnz4AEamiETzi22fS860X6nZB+MOMxacXQHPAyTYo8CaFDvVA3U4YCM1KfHoBRDTR68/dh5Wb9c4kxH/9OGvx6QcQEUVb3V4FHQEQx8fko7aNmhQns90GiFdh+Y96y49VLD7Y0oe61h0tik5h6eFuotVZerwu06/nysZwMjdXwmTj2gCymVJlZ1dAVWZl/doVkM2UKrs/NT3uMa/1OncAAAAASUVORK5CYII=",
        needLoginVeri: !1,
        loginVeriPhone: "",
        trackObj: {
            pagetype: "原生"
        }
    },
    methods: {
        stopMove: function() {
            return this.setData({
                isChecked: !1,
                isShowToast: ""
            }), !1;
        },
        cancel: function() {
            clearInterval(v), this.setData({
                isShowToast: "",
                iptPhoneNumber: "",
                iptVerifCode: "",
                verifResTxt: "",
                verifBtnTxt: o("0x30"),
                isChecked: !1,
                getVeriCode: !0,
                verifIptStatus: !0,
                startTime: 60
            }), this.data.truePhoneNumber = "", b("小程序首页_授权弹窗_点击拒绝", this.data[o("0x9")]);
            var e = getCurrentPages();
            if (e.length > 0) {
                var t = e[e.length - 1];
                -1 !== C.indexOf(t.route) && wx.showTabBar();
            }
            this[o("0x3a")]("cancel");
        },
        onGetPhoneNumber: function(e) {
            var t, n = this;
            this.triggerEvent("buringPoint"), i.default.onlyGetPhoneNumber(e).then((t = p(a().mark(function e(t) {
                return a().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!t) {
                            e[o("0x34")] = 10;
                            break;
                        }
                        if ("stop" !== t) {
                            e.next = 4;
                            break;
                        }
                        return b(o("0x3c"), n.data[o("0x9")]), e[o("0x1f")]("return");

                      case 4:
                        return b("小程序首页_验证弹窗_点击允许", n.data.trackObj), e.next = 7, i.default.checkAndGetThirdSession();

                      case 7:
                        g.getRegister(f({}, n[o("0x5")].loginParams))[o("0x40")](function(e) {
                            wx[o("0x37")]("otherLoginParams"), n[o("0x5")][o("0x10")] && n[o("0x3a")]("changeBtnState", "phone"), 
                            n[o("0x3a")]("onNext", n.properties.eventObj), n[o("0x20")] && n[o("0x20")]("GET-PHONE");
                        }).catch(function(e) {
                            var t;
                            console.log("静默登录失败"), 1061 != (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.code) ? n.setData({
                                isChecked: !1
                            }) : n.setData({
                                needLoginVeri: !0,
                                loginVeriPhone: e.data[o("0x4a")]
                            });
                        }), e.next = 11;
                        break;

                      case 10:
                        n.setData({
                            isChecked: !1
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
            })), function(e) {
                return t.apply(this, arguments);
            }));
        },
        jump: function(e) {
            var t = e.currentTarget.dataset.type, a = {
                1: "https://hcz-static.pingan.com.cn/fin-common/umc-uni-protocol/protocol.html#/treaty",
                2: "https://hcz-static.pingan.com.cn/fin-common/umc-uni-protocol/static/pages/generalLedger.html",
                3: "/pages/h5Embed/privacy/index"
            }, n = a[t];
            "3" !== t && (n = o("0x8") + encodeURIComponent(a[t])), wx.navigateTo({
                url: n
            });
        },
        needNext: function() {
            this.triggerEvent(o("0x3"), this.properties[o("0x2d")]), this.setData({
                isShowToast: o("0x13")
            });
        }
    }
};

exports.commonAuthor = k;
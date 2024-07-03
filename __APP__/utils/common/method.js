var e, t, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../@babel/runtime/helpers/typeof"), a = [ "下载失败：", "options", "length", "concat", "sent", "indexOf", "code", "token", "symbol", "return", "end", "signature", "/uploadfile/file/upload_save", "得到分享赚钱的分享码：", "wrap", "reject", "getOwnPropertyDescriptors", "needSpartaIdInBody", "secret_token", "log", "shift", "userInfo", "tempFilePath", "需要检测的微信的API", "grayTest", "thirdSessionHasEffective", "t0", "header", "next", "activityShareCode", "warn", "/uapi/cps-hcz-smallapp/my/iconNew/getIconInfo", "data", "defineProperty", "setPrevPagePath", "stringify", "catch", "getStorageSync", "订阅平台配置返回：", "use strict", "default", "999999", "downloadFile", "=", "getRequestUrl", "/uapi/cps-hcz-smallapp/other/shareActComp/getShareCode", "$http", "#", "redirectTo", "needNoncestr", "?needBtn=", "/uapi/wechat/queryUserInfo", "用户当前城市编码信息 =====>", "file", "wx.requestSubscribeMessage方法问题：", "constructor", "prev", "用户拒绝授权", "getOwnPropertyDescriptor", "error", "/uapi/cps-hcz-smallapp/myPage/getUserInfo", "setStorageSync", "activityImgUrl", "/uapi/cps-hcz-smallapp/memberInfo/send", "abrupt", "then", "lastSpartaIdTime", "login", "mark", "isCheckAuthorize", "/uapi/cps-hcz-smallapp/collocateConfig/list", "path", "canIUse", "stop" ];

e = a, t = 179, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var o = function(e, t) {
    return a[e -= 0];
};

o("0x8"), Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var u = l(require("../authorizeUtil.js")), i = l(require("./http/url.js")), c = l(require("../newGetUserInfo.js")), s = l(require("./http/Http.js")), p = l(require("../../utils/log"));

function l(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function d(e) {
    return (d = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e[o("0x18")] === Symbol && e !== Symbol.prototype ? o("0x33") : n(e);
    })(e);
}

function f(e, t, r, n, a, o, u) {
    try {
        var i = e[o](u), c = i.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(n, a);
}

function x(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, a) {
            var o = e.apply(t, r);
            function u(e) {
                f(o, n, a, u, i, "next", e);
            }
            function i(e) {
                f(o, n, a, u, i, "throw", e);
            }
            u(void 0);
        });
    };
}

function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}

function h(e) {
    for (var t = 1; t < arguments[o("0x2d")]; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? g(Object(r), !0).forEach(function(t) {
            m(e, t, r[t]);
        }) : Object[o("0x3b")] ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object[o("0x1b")](r, t));
        });
    }
    return e;
}

function m(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != d(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != d(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return o("0x33") == d(t) ? t : t + "";
    }(t)) in e ? Object[o("0x2")](e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var v = require("../paWX.min.js"), b = new s.default(), w = h(h({}, i.default), {}, {
    jumpAuthorizePage: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "login", r = arguments[o("0x2d")] > 2 && void 0 !== arguments[2] ? arguments[2] : o("0x11"), n = arguments.length > 3 ? arguments[3] : void 0, a = "/pages/authorizeAndLogin/authorizeAndLogin", u = n ? "&bgImg=".concat(n) : "", i = a + o("0x13")[o("0x2e")](t).concat(u);
        e && (i += "&backUrl=".concat(encodeURIComponent(e))), wx[r]({
            url: i
        });
    },
    justGoAuthorize: function(e) {
        var t, r, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o("0x24"), u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "redirectTo", i = getCurrentPages(), c = i[i[o("0x2d")] - 1];
        for (var s in e ? (t = e.query, r = e.path) : c ? (t = c[o("0x2c")], r = c.route) : (t = {}, 
        r = "pages/index/index2", u = "switchTab"), n = "/" + r + "?", t) n += s + o("0xc") + t[s] + "&";
        this.jumpAuthorizePage(n, a, u);
    },
    newAuthor: function() {
        var e = wx.getStorageSync("openid"), t = wx[o("0x6")]("unionId"), r = wx.getStorageSync("userInfo");
        e && t && r && "undefined" !== e && "undefined" !== t && "undefined" !== r && "null" !== e && "null" !== t && "null" !== r ? (this.globalData.isCheckAuthorize = !0, 
        this.globalData.thirdSessionHasEffective = !0) : (this.globalData[o("0x26")] = !1, 
        this.globalData[o("0x44")] = !1);
    },
    getShortLink: function(e, t) {
        return this.$http({
            url: this.getRequestUrl("/uapi/cps-hcz-smallapp/short/getShortCode"),
            data: {
                originValue: t,
                pre: e
            }
        }).then(function(e) {
            return !(!e || "999999" !== e.resultCode) && e.resultData;
        }, function() {
            return !1;
        });
    },
    getOriginValue: function(e) {
        return this[o("0xf")]({
            url: this[o("0xd")]("/uapi/cps-hcz-smallapp/short/getOriginValue"),
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                shortCode: e
            }
        }).then(function(e) {
            return !(!e || e.resultCode !== o("0xa")) && e.resultData;
        }, function() {
            return !1;
        });
    },
    saveLoginParams: function(e, t, r) {
        var n = r.split("&"), a = n[o("0x3f")](), i = n.reduce(function(e, t) {
            var r = t.split("="), n = r[1];
            return n && "undefined" !== n && (e[r[0]] = n), e;
        }, {});
        u.default.setLoginParams(h(h({
            appid: a
        }, i), {}, {
            sourceType: t
        })), u.default[o("0x3")](e);
    },
    getUuidByMobile: function() {
        var e = this;
        return x(r().mark(function t() {
            var n, a, u;
            return r().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t[o("0x47")] = 3, e.$http({
                        url: e.getRequestUrl(o("0x14")),
                        data: {
                            isQueryUser: !0,
                            isQueryContactMans: !0,
                            isQueryContactAddresses: !0,
                            isQueryUuid: !0
                        },
                        needToken: !0
                    });

                  case 3:
                    return n = t[o("0x2f")], a = n.code, u = n.data, 0 === a && u && wx.setStorageSync("mobileUuid", u.uuid), 
                    t.abrupt(o("0x34"), {
                        code: a,
                        data: u
                    });

                  case 10:
                    return t.prev = 10, t.t0 = t.catch(0), t.abrupt(o("0x34"), t[o("0x45")]);

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, null, [ [ 0, 10 ] ]);
        }))();
    },
    getMemberScore: function() {
        var e = this;
        return x(r().mark(function t() {
            return r().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e.$http({
                        url: e.getRequestUrl("/uapi/wechat/point/queryProfitAccount"),
                        needToken: !0
                    });

                  case 2:
                    return t.abrupt("return", t.sent);

                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    getFormId: function() {},
    $http: function(e) {
        var t = this;
        return x(r().mark(function n() {
            var a, u, i, c, s, p, l, d, f, x, g, m, v, w, y, S, k, P, I, U, q, j, T, z, C, R, O, A, D, $;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if (a = e.url, u = e.params, i = void 0 === u ? {} : u, c = e.data, s = void 0 === c ? {} : c, 
                    p = e[o("0x46")], l = void 0 === p ? {
                        "Content-Type": "application/json"
                    } : p, d = e.method, f = void 0 === d ? "POST" : d, x = e.timeout, g = void 0 === x ? 25e3 : x, 
                    m = e.needToken, v = void 0 !== m && m, w = e.needLogin, y = void 0 !== w && w, 
                    S = e.needSpartaId, k = void 0 !== S && S, P = e.hopeResult, I = void 0 === P ? null : P, 
                    U = e.isLoginInfo, q = void 0 !== U && U, j = e[o("0x32")], T = void 0 === j ? null : j, 
                    z = e.needGray, C = void 0 === z || z, R = e[o("0x12")], O = void 0 === R || R, 
                    A = e[o("0x3c")], D = T || wx[o("0x6")]("hczAccessToken") || wx.getStorageSync(o("0x3d")), 
                    !y || D) {
                        r.next = 4;
                        break;
                    }
                    return r.abrupt("return", Promise.reject());

                  case 4:
                    if ("release" !== ($ = t.globalData.envVersion) && C && (l.versionno = o("0x43")), 
                    "release" === $ && C && (l.webversion = t.globalData.proVersion), v && ("string" != typeof v && (v = "secret_token"), 
                    D && (l[v] = D)), !k) {
                        r.next = 12;
                        break;
                    }
                    return r.next = 11, t.getSpartaId();

                  case 11:
                    l.spartaId = r.sent;

                  case 12:
                    if (!A) {
                        r[o("0x47")] = 16;
                        break;
                    }
                    return r.next = 15, t.getSpartaId();

                  case 15:
                    i.spartaId = r.sent;

                  case 16:
                    return r.abrupt("return", b.getOnceHttp({
                        url: a,
                        header: l,
                        method: f,
                        timeout: g,
                        data: h(h({}, i), s),
                        hopeResult: I
                    }, t, q, O));

                  case 17:
                  case o("0x35"):
                    return r.stop();
                }
            }, n);
        }))();
    },
    getPhoneNumber: function(e) {
        return x(r().mark(function t() {
            var n, a, u, i, s, p;
            return r().wrap(function(t) {
                for (;;) switch (t.prev = t[o("0x47")]) {
                  case 0:
                    if (n = e.detail, a = n.encryptedData, u = void 0 === a ? "" : a, i = n.iv, s = void 0 === i ? "" : i, 
                    u && s) {
                        t.next = 4;
                        break;
                    }
                    throw console.warn("用户拒绝授权", e.detail), new Error(o("0x1a"));

                  case 4:
                    return t.next = 6, c.default.commonAsyncFunc();

                  case 6:
                    return !t.sent && console.warn("连续两次检查thirdSession失败。location:3"), t[o("0x47")] = 10, 
                    c[o("0x9")].onlyGetPhoneNumber(e);

                  case 10:
                    if (p = t.sent) {
                        t.next = 15;
                        break;
                    }
                    throw new Error("请求失败，无法获取服务器解密的数据");

                  case 15:
                    console[o("0x49")]("授权手机号成功，数据为", p);

                  case 16:
                    return t[o("0x21")]("return", {
                        data: p
                    });

                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    queryConfigurePageInfo: function(e) {
        var t = this;
        return x(r()[o("0x25")](function n() {
            var a, u, i;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, t.$http({
                        url: t.getRequestUrl("/uapi/cps-hcz-smallapp/mobile/config/pageInfo/queryConfigurePageInfo"),
                        data: h({}, e)
                    });

                  case 2:
                    return a = r.sent, u = a.resultData, i = a.resultCode, r[o("0x21")]("return", !(!u || "999999" !== String(i)) && u);

                  case 6:
                  case o("0x35"):
                    return r.stop();
                }
            }, n);
        }))();
    },
    getShareCode: function() {
        var e = arguments, t = this;
        return x(r().mark(function n() {
            var a, u, i, c, s, p;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return a = e.length > 0 && void 0 !== e[0] ? e[0] : "", u = e.length > 1 && void 0 !== e[1] ? e[1] : "", 
                    i = e.length > 2 && void 0 !== e[2] ? e[2] : "", r.next = 5, t.$http({
                        url: t.getRequestUrl(o("0xe")),
                        data: {
                            moduleController: a,
                            assemblyCode: u,
                            executeId: i
                        },
                        needToken: !0
                    });

                  case 5:
                    if (c = r.sent, s = c[o("0x31")], p = c[o("0x1")], 0 !== s || !p) {
                        r.next = 11;
                        break;
                    }
                    return console[o("0x3e")](o("0x38"), p[o("0x48")], u), r.abrupt("return", p.activityShareCode);

                  case 11:
                    return r.abrupt("return", Promise.reject());

                  case 12:
                  case "end":
                    return r.stop();
                }
            }, n);
        }))();
    },
    carBindEntrance: function() {
        var e = this;
        return x(r().mark(function t() {
            var n, a, u;
            return r().wrap(function(t) {
                for (;;) switch (t[o("0x19")] = t.next) {
                  case 0:
                    if (wx.getStorageSync("hczAccessToken")) {
                        t.next = 3;
                        break;
                    }
                    return t[o("0x21")]("return", Promise.reject());

                  case 3:
                    return t.next = 5, e[o("0xf")]({
                        url: e[o("0xd")]("/uapi/pg_activity/bind/car/queryEnterInfo"),
                        needToken: !0
                    });

                  case 5:
                    if (n = t.sent, a = n.code, u = n[o("0x1")], 0 !== a) {
                        t.next = 11;
                        break;
                    }
                    return console.log("根据后台配置是否展示绑车入口，后台配置：", u), t.abrupt(o("0x34"), {
                        data: u
                    });

                  case 11:
                    return t[o("0x21")]("return", Promise[o("0x3a")]());

                  case 12:
                  case o("0x35"):
                    return t.stop();
                }
            }, t);
        }))();
    },
    getSunCodeUrl: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxMini", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "pages/index/index2", r = "PA_CXZZB_05";
        return "https://eim-minpro.pingan.com.cn/wxSmallApp/getaqrcode?weAppNo=" + r + "&scene=" + e + "&type=wxacodeunlimit&path=" + (t = encodeURIComponent(t));
    },
    getRealAuthenticate: function() {
        var e = this;
        return x(r()[o("0x25")](function t() {
            var n, a, u;
            return r()[o("0x39")](function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (wx.getStorageSync("hczAccessToken")) {
                        t[o("0x47")] = 3;
                        break;
                    }
                    return t[o("0x21")]("return", Promise.reject());

                  case 3:
                    return t.next = 5, e.$http({
                        url: e[o("0xd")]("/uapi/cps-hcz-smallapp/my/real/getRealAuthenticate"),
                        needToken: !0
                    });

                  case 5:
                    if (n = t.sent, a = n.code, u = n.data, 0 !== a) {
                        t.next = 11;
                        break;
                    }
                    return console.log("查询用户是否实名验真：", u), t.abrupt("return", {
                        data: u
                    });

                  case 11:
                    return t.abrupt("return", Promise.reject());

                  case 12:
                  case o("0x35"):
                    return t.stop();
                }
            }, t);
        }))();
    },
    getGuidanceInfo: function(e) {
        var t = this;
        return x(r().mark(function n() {
            var a, u, i;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, t[o("0xf")]({
                        url: t.getRequestUrl("/uapi/pg_activity/guidDownLoad/queryGuideDownLoadProcessById"),
                        data: {
                            id: e
                        },
                        needToken: !0
                    });

                  case 2:
                    if (a = r.sent, u = a.code, i = a[o("0x1")], 0 !== u) {
                        r[o("0x47")] = 8;
                        break;
                    }
                    return console.log(" 获取 引导下载app/关注公众号 的配置", i), r[o("0x21")]("return", i);

                  case 8:
                    return r.abrupt("return", Promise[o("0x3a")]());

                  case 9:
                  case "end":
                    return r[o("0x2a")]();
                }
            }, n);
        }))();
    },
    getSpartaId: function() {
        return x(r().mark(function e() {
            var t, n;
            return r().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = wx.getStorageSync("lastSpartaId"), n = wx.getStorageSync(o("0x23")), t) {
                        e.next = 16;
                        break;
                    }
                    return e.prev = 3, e.next = 6, v.get();

                  case 6:
                    t = e.sent, wx[o("0x1e")]("lastSpartaId", t), e.next = 14;
                    break;

                  case 10:
                    e.prev = 10, e.t0 = e[o("0x5")](3), console.log("获取斯巴达Id失败：", e.t0), p.default.info("获取斯巴达Id失败：", e[o("0x45")]);

                  case 14:
                    e[o("0x47")] = 17;
                    break;

                  case 16:
                    if (Date.now() - n >= 33e5) {
                        wx.setStorageSync("lastSpartaIdTime", Date.now());
                        try {
                            v.get().then(function(e) {
                                wx.setStorageSync("lastSpartaId", e), t = e;
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            console.log("更新斯巴达Id失败：", e), p.default.info("更新斯巴达Id失败：", e);
                        }
                    }

                  case 17:
                    return p[o("0x9")].info("获取斯巴达Id：", t), e.abrupt("return", t);

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 3, 10 ] ]);
        }))();
    },
    historyBindCar: function() {
        var e = this;
        return x(r()[o("0x25")](function t() {
            var n, a, u;
            return r()[o("0x39")](function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e.$http({
                        url: e.getRequestUrl("/uapi/cps-hcz-smallapp/findPage/historyOne"),
                        needToken: !0
                    });

                  case 2:
                    if (n = t[o("0x2f")], a = n.code, u = n.data, 0 !== a) {
                        t.next = 8;
                        break;
                    }
                    return console.log("返回用户历史是否有绑过车", u), t.abrupt(o("0x34"), u);

                  case 8:
                    return t.abrupt("return", Promise.reject());

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    getFamilyEvaluationMsg: function(e) {
        var t = this;
        return x(r().mark(function n() {
            var a, u, i;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, t.$http({
                        url: t.getRequestUrl("/nci-family/family/home", "static"),
                        data: e,
                        needToken: !0
                    });

                  case 2:
                    if (a = r.sent, u = a.code, i = a.data, 0 !== u) {
                        r.next = 8;
                        break;
                    }
                    return console[o("0x3e")]("返回 家庭保障内容=》", i), r.abrupt("return", i);

                  case 8:
                    return r.abrupt("return", Promise[o("0x3a")]());

                  case 9:
                  case o("0x35"):
                    return r[o("0x2a")]();
                }
            }, n);
        }))();
    },
    queryPageInfo: function(e) {
        var t = this;
        return x(r().mark(function n() {
            var a, u, i;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r[o("0x47")] = 2, t.$http({
                        url: t.getRequestUrl(o("0x27")),
                        data: e
                    });

                  case 2:
                    if (a = r.sent, u = a.code, i = a.data, console.log(o("0x7"), i), 0 !== u) {
                        r.next = 9;
                        break;
                    }
                    return console.log("返回 查询服务配置内容=》", i), r.abrupt("return", i);

                  case 9:
                    return r.abrupt("return", Promise.reject());

                  case 10:
                  case "end":
                    return r.stop();
                }
            }, n);
        }))();
    },
    msgSubscription: function(e, t) {
        var n = this, a = e.tmplIds, u = e.params;
        return console[o("0x3e")]("tmplIds", e), new Promise(function(e, i) {
            (!wx.requestSubscribeMessage || "function" != typeof wx.requestSubscribeMessage || !a || !u) && (console[o("0x1c")](o("0x17"), d(wx.requestSubscribeMessage), a, u), 
            i());
            var c, s = function(e) {
                "function" == typeof t && t({
                    code: e
                });
            };
            s(1), wx.requestSubscribeMessage({
                tmplIds: a,
                success: (c = x(r().mark(function t(a) {
                    var c;
                    return r().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (console.log("订阅请求结果：", a), -1 === JSON[o("0x4")](a)[o("0x30")]("accept")) {
                                t[o("0x47")] = 9;
                                break;
                            }
                            return s(2), t.next = 5, n[o("0xf")]({
                                url: n.getRequestUrl("/uapi/wechat/mqInfo/subSendV3"),
                                data: {
                                    xcxOpenid: wx[o("0x6")]("openid"),
                                    signature: wx.getStorageSync(o("0x36")),
                                    timestamp: wx.getStorageSync("timestamp"),
                                    nonce: wx.getStorageSync("nonce"),
                                    unionId: wx[o("0x6")]("unionId"),
                                    signatureUnionid: wx.getStorageSync("signatureUnionid"),
                                    nickName: wx.getStorageSync("userInfo").nickName,
                                    subscribeNewDtos: u
                                },
                                needLogin: !0,
                                needToken: !0
                            })[o("0x5")](function() {
                                i();
                            });

                          case 5:
                            (c = t.sent) && 0 === c.code ? (console.log("返回 传给后台成功"), e({
                                code: c.code
                            })) : (console[o("0x3e")]("返回 传给后台失败"), i()), t.next = 11;
                            break;

                          case 9:
                            s(3), e({
                                code: 2
                            });

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                })), function(e) {
                    return c.apply(this, arguments);
                }),
                fail: function(e) {
                    console.warn("订阅请求失败：", e), i({
                        code: e.errCode
                    });
                }
            });
        });
    },
    updateSubStatus: function() {
        var e = this;
        return x(r()[o("0x25")](function t() {
            var n, a, u;
            return r().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e[o("0xf")]({
                        url: e.getRequestUrl("/uapi/cps-hcz-smallapp/common/clientContactList/query"),
                        data: {},
                        needLogin: !0,
                        needToken: !0
                    });

                  case 2:
                    if (n = t.sent, a = n.code, u = n[o("0x1")], 0 !== a) {
                        t.next = 7;
                        break;
                    }
                    return t[o("0x21")]("return", u);

                  case 7:
                    return t[o("0x21")]("return", Promise.reject());

                  case 8:
                  case o("0x35"):
                    return t.stop();
                }
            }, t);
        }))();
    },
    updateWxUserInfo: function() {
        var e = arguments, t = this;
        return x(r()[o("0x25")](function n() {
            var a, u, i, c;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r[o("0x47")]) {
                  case 0:
                    return a = e.length > 0 && void 0 !== e[0] ? e[0] : {}, r.next = 3, t.$http({
                        url: t.getRequestUrl("/uapi/cps-hcz-smallapp/myPage/updateUserInfo"),
                        data: a,
                        needLogin: !0,
                        needToken: !0
                    });

                  case 3:
                    return u = r.sent, i = u[o("0x31")], c = u.msg, 0 === i && console.log("修改头像昵称成功"), 
                    r.abrupt(o("0x34"), c);

                  case 8:
                  case "end":
                    return r.stop();
                }
            }, n);
        }))();
    },
    getHczUserInfo: function(e) {
        var t = this;
        return x(r().mark(function n() {
            var a, u, i, c, s, p, l;
            return r()[o("0x39")](function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, t.$http({
                        url: t.getRequestUrl(o("0x1d")),
                        data: {},
                        needLogin: !0,
                        needToken: !0,
                        token: e
                    });

                  case 2:
                    if (a = r.sent, u = a.code, i = a.data, c = a.msg, 0 !== u || !i) {
                        r.next = 15;
                        break;
                    }
                    return s = i.albumUrl, p = t.getRequestUrl("/cps/hcz-miniprogram/images/mine/avatar.png", "hczStatic"), 
                    s && -1 !== s[o("0x30")]("https://") && (p = s.split(o("0x10"))[0]), l = {
                        nickName: i.nickName || "好车主用户",
                        avatarUrl: p
                    }, console.log("获取用户信息", l), wx[o("0x1e")]("headPortrait", l.avatarUrl), wx.setStorageSync(o("0x40"), h(h({}, wx.getStorageSync("userInfo")), l)), 
                    r.abrupt(o("0x34"), l);

                  case 15:
                    return r.abrupt("return", c);

                  case 16:
                  case "end":
                    return r.stop();
                }
            }, n);
        }))();
    },
    updateUserInfo: function(e) {
        var t = this;
        return new Promise(function(r) {
            wx[o("0xb")]({
                url: e,
                success: function(n) {
                    console.warn("下载成功：：：", n[o("0x41")]), wx.uploadFile({
                        url: t.getRequestUrl(o("0x37"), "feedback"),
                        filePath: n.tempFilePath,
                        name: o("0x16"),
                        success: function(n) {
                            if (console[o("0x49")]("上传成功：：：", n), n && n.data) {
                                var a = JSON.parse(n[o("0x1")]), u = t.getRequestUrl(a[o("0x28")], o("0x1f"));
                                r(u), t.$http({
                                    url: t.getRequestUrl(o("0x0")),
                                    data: {
                                        albumUrlNew: u,
                                        albumUrl: e
                                    },
                                    needLogin: !0,
                                    needToken: !0
                                });
                            }
                        },
                        fail: function(e) {
                            r(), console.warn("上传失败：", e);
                        }
                    });
                },
                fail: function(e) {
                    r(), console.warn(o("0x2b"), e);
                }
            });
        });
    },
    getCodeByName: function(e) {
        var t = this;
        return new Promise(function(r) {
            t.$http({
                url: t.getRequestUrl("/uapi/cps-hcz-smallapp/baseArea/getCodeByName"),
                data: {
                    cityName: e
                }
            })[o("0x22")](function(e) {
                console.warn(o("0x15"), e);
                var t = e.code, n = e[o("0x1")];
                r(0 === t && n ? n : {});
            });
        });
    },
    storageMemberInfo: function(e) {
        var t = this;
        return new Promise(function(r) {
            t.$http({
                url: t[o("0xd")](o("0x20")),
                needLogin: !0,
                needToken: !0,
                token: e,
                data: {}
            }).then(function() {
                console.log("调用memberInfo/send接口成功"), r();
            });
        });
    },
    getSwitch: function(e) {
        var t = this;
        return new Promise(function(r) {
            t[o("0xf")]({
                url: t[o("0xd")]("/uapi/cps-hcz-smallapp/common/page/switch"),
                needToken: !0,
                data: {
                    switchType: e
                }
            }).then(function(e) {
                console.warn("获取阿波罗通用开关配置 =====>", e), e && 0 === e.code && e.data ? r(e[o("0x1")]) : r(!1);
            });
        });
    },
    privacyAdd: function(e) {
        return this.$http({
            url: this.getRequestUrl("/uapi/cps-hcz-smallapp/indexPage/popUp/privacy/add"),
            data: h({}, e),
            needToken: !0
        });
    },
    privacyGet: function(e) {
        var t = this;
        return new Promise(function(r) {
            t.$http({
                url: t.getRequestUrl("/uapi/cps-hcz-smallapp/indexPage/popUp/privacy/get"),
                needToken: !0,
                data: h({}, e)
            }).then(function(e) {
                console.log("获取用户个人信息弹窗状态和用户是否同意协议:", e), r(e || {});
            });
        });
    },
    getUserRedDot: function(e) {
        var t = this;
        return x(r().mark(function n() {
            var a, u, i;
            return r()[o("0x39")](function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, t.$http({
                        url: t.getRequestUrl("/uapi/cps-hcz-smallapp/my/eventPop/redPoint/get"),
                        data: e,
                        needToken: !0
                    });

                  case 2:
                    if (a = r.sent, u = a[o("0x31")], i = a.data, 0 !== u || !i) {
                        r[o("0x47")] = 7;
                        break;
                    }
                    return r.abrupt("return", i);

                  case 7:
                    return r.abrupt("return", Promise.reject());

                  case 8:
                  case "end":
                    return r.stop();
                }
            }, n);
        }))();
    },
    setRedDotStatus: function(e) {
        return this.$http({
            url: this[o("0xd")]("/uapi/cps-hcz-smallapp/my/eventPop/redPoint/add"),
            data: h({}, e),
            needToken: !0
        });
    },
    checkWxApi: function(e) {
        return console.log(o("0x42"), wx.canIUse(e)), wx[o("0x29")](e) && ("object" === d(wx[e]) || "function" == typeof wx[e]);
    }
});

exports.default = w;
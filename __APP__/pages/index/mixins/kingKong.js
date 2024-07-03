var e, t, n = require("../../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../../@babel/runtime/helpers/typeof"), i = [ "getOwnPropertyDescriptors", "t0", "mainServiceConfig", "url", "entryPageNew", "@@toPrimitive must return a primitive value.", "fZoG5zH5t8uys755zevIiVMcszjCc4Yz0t0ticBCbBU", "getOwnPropertySymbols", "/pages/entryGather/entryGather", "pageSize", "find", "订单确认和取消通知订阅弹窗_点击取消", "openEmbeddedMiniProgram", "claimIcon.png", "detail", "getCacheResult", "queryModuleList", "advert", "mainServicePoint", "defineProperty", "saveLatelyService", "call", "item", "一键代驾", "曝光服务ICON", "current", "endDate", "点击", "homePage", "forEach", "log", "0", "wxc8fdf4fe115b7258", "data", "source", "查保单", "$http", "currentTarget", "getRequestUrl", "saveMiddleIconJoined", "removeStorageSync", "apply", "toPrimitive", "middleIconServiceConfig", "kingKongMixins", "default", "首页", "setStorageSync", "constructor", "__esModule", "config", "length", "redState", "application/x-www-form-urlencoded", "then", "/pages/webview/webview?pageType=myCardTicket&source=pa18-mp-personal", "setData", "getImg", "rBR2Sjt4DKQkF0wBqIUlFdkiaytNXycOWfxXoCkWMYA", "serTag" ];

e = i, t = 103, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var o = function(e, t) {
    return i[e -= 0];
};

function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
        return r(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e[o("0x5")] === Symbol && e !== Symbol.prototype ? "symbol" : r(e);
    })(e);
}

Object.defineProperty(exports, o("0x6"), {
    value: !0
}), exports.kingKongMixins = exports.kingKong = void 0;

var c = require("../js/getImg");

function s(e, t) {
    var n = Object.keys(e);
    if (Object[o("0x18")]) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push[o("0x3a")](n, r);
    }
    return n;
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(n), !0).forEach(function(t) {
            g(e, t, n[t]);
        }) : Object[o("0x11")] ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}

function g(e, t, n) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != a(e) || !e) return e;
            var n = e[Symbol[o("0x3b")]];
            if (void 0 !== n) {
                var r = n[o("0x26")](e, t || o("0x2"));
                if ("object" != a(r)) return r;
                throw new TypeError(o("0x16"));
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == a(t) ? t : t + "";
    }(t)) in e ? Object[o("0x24")](e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function l(e, t, n, r, i, a, c) {
    try {
        var s = e[a](c), u = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void n(e);
    }
    s.done ? t(u) : Promise.resolve(u)[o("0xb")](r, i);
}

function f(e) {
    return function() {
        var t = this, n = arguments;
        return new Promise(function(r, i) {
            var o = e.apply(t, n);
            function a(e) {
                l(o, r, i, a, c, "next", e);
            }
            function c(e) {
                l(o, r, i, a, c, "throw", e);
            }
            a(void 0);
        });
    };
}

var p = getApp(), x = {
    data: {
        kingKong: {
            data: [],
            index: 0,
            count: 0,
            pageSize: 4
        },
        mainServiceList: [ {
            title: "买车险",
            trigger: "pageOnlineSale",
            iconUrl: (0, c[o("0xe")])("homePage", "vehicleIcon.png"),
            needLogin: !1,
            url: "/pages/h5Embed/onlineSale/onlineSale"
        }, {
            title: o("0x34"),
            trigger: "queryListPage",
            iconUrl: (0, c.getImg)("homePage", "insuranceIcon.png"),
            needLogin: !0,
            url: "/pages/webview/webview?pageType=policyCenter"
        }, {
            title: "办理赔",
            trigger: "myClaimPage",
            iconUrl: (0, c.getImg)(o("0x2d"), o("0x1e")),
            needLogin: !1,
            url: "/pages/myClaim/myClaim"
        }, {
            title: "用卡券",
            trigger: "myCardTicketPage",
            iconUrl: (0, c.getImg)("homePage", "cardTicketIcon.png"),
            needLogin: !0,
            url: o("0xc")
        } ]
    },
    methods: {
        goMainService: function(e) {
            var t = this, n = (e = e[o("0x1f")] && e.detail.currentTarget ? e.detail : e)[o("0x36")].dataset.item, r = n.title, i = n.needLogin, a = n.url, c = function() {
                t.jumpFun(a, o("0x2c").concat(r), {}, function() {
                    var e = wx.getStorageSync("mainServicePoint") || {
                        "买车险": !1,
                        "查保单": !1,
                        "办理赔": !1,
                        "用卡券": !1
                    };
                    e[r] = !0, wx.setStorageSync("mainServicePoint", e);
                });
            };
            i ? this.beforeShowPhone().then(function() {
                c();
            }, function(n) {
                console[o("0x2f")]("没有通过验证login-state和login-info的验证>>>>", n), t.showPhone("goMainService", e) && c();
            }) : c();
        },
        queryModuleList: function() {
            var e = this;
            return f(n().mark(function t() {
                var r, i, a, c, s, g, l, f, p, x;
                return n().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e[o("0x20")](o("0x21"));

                      case 2:
                        if (t[o("0x12")] = t.sent, t.t0) {
                            t.next = 5;
                            break;
                        }
                        t[o("0x12")] = {};

                      case 5:
                        r = t.t0, i = r.code, a = r[o("0x32")], 0 === i && a && (c = a[o("0x1b")](function(e) {
                            return e.plateType === o("0x30");
                        }) || {}, s = c.iconList, (g = void 0 === s ? [] : s) && g.length > 0 && (l = e.data.mainServiceList.map(function(e, t) {
                            return u(u({}, e), g[t]);
                        }), f = wx.getStorageSync(o("0x23")), 4 !== Object.keys(f).length && wx[o("0x39")]("mainServicePoint"), 
                        p = wx.getStorageSync(o("0x23")) || {
                            "买车险": !1,
                            "查保单": !1,
                            "办理赔": !1,
                            "用卡券": !1
                        }, x = wx.getStorageSync(o("0x13")) || {}, Object.keys(x).length > 0 && Object.keys(p)[o("0x2e")](function(e, t) {
                            var n = l[t], r = n.serTag + n.serIsShow + n.startDate + n.endDate;
                            x[e][o("0x7")] !== r && (p[e] = !1);
                        }), l.map(function(e) {
                            var t = e.title, n = e.serIsShow, r = e[o("0x10")], i = e.startDate, a = e[o("0x2b")];
                            x[t] = {
                                config: r + n + i + a,
                                time: new Date().getTime()
                            };
                            var c = "";
                            return !p[t] && "Y" === n && r && (c = r), e.showType = c, e;
                        }), wx[o("0x4")](o("0x23"), p), wx.setStorageSync("mainServiceConfig", x), e.setData({
                            mainServiceList: l
                        })));

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        getCacheResult: function(e) {
            var t = wx.getStorageSync(e), n = {
                queryModuleList: {
                    path: "/uapi/cps-hcz-smallapp/indexPage/getPlaList",
                    params: {
                        pageSize: 300
                    }
                }
            };
            return t ? (wx.removeStorageSync(e), Promise.resolve(t)) : p[o("0x35")]({
                url: p[o("0x37")](n[e].path),
                params: u({
                    "X-PA-NONCESTR": 1
                }, n[e].params),
                needToken: !0
            });
        },
        setKingKongService: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            e.length > 11 && e.splice(11);
            var t = Math.ceil((e.length + 1) / this.data.kingKong[o("0x1a")]);
            e = this.compareRedConfig(e), this.setData({
                "kingKong.data": e,
                "kingKong.count": t
            }), this.setTrack("曝光服务ICON", {
                source: this.data.source,
                page_hiberarchy: "1"
            });
        },
        entryPageNew: function(e) {
            var t = this, n = (e = e[o("0x1f")] && e.detail.currentTarget ? e.detail : e).currentTarget.dataset, r = n[o("0x22")], i = n[o("0x27")], a = i[o("0x14")], c = i.configId, s = i.isJumpOther, u = i.appid, g = i.envVersion, l = void 0 === g ? "release" : g, f = i.track, x = i.isNeedLogin, d = function() {
                setTimeout(function() {
                    t.setTrack("点击服务ICON", {
                        source: t.data.source,
                        serviceName: r
                    });
                }, 100), s && 1 === s && u ? u === o("0x31") && wx.openEmbeddedMiniProgram && "function" == typeof wx[o("0x1d")] ? wx.openEmbeddedMiniProgram({
                    appId: u,
                    path: a,
                    envVersion: l,
                    success: function() {
                        t[o("0x38")](c), t.saveLatelyService(c), f && t.setTrack(f, {
                            source: t[o("0x32")].source,
                            tagID: "首页"
                        });
                    },
                    fail: function() {
                        console.warn("拉起半屏失败：");
                    }
                }) : wx.navigateToMiniProgram({
                    appId: u,
                    path: a,
                    envVersion: l,
                    success: function() {
                        t[o("0x38")](c), t.saveLatelyService(c), f && t.setTrack(f, {
                            source: t.data.source,
                            tagID: o("0x3")
                        });
                    },
                    fail: function(e) {
                        console.log("跳转其他小程序失败：", e);
                    }
                }) : (p.goNewMainPages("".concat(a), null, !0), t.saveMiddleIconJoined(c), t[o("0x25")](c), 
                f && t.setTrack(f, {
                    source: t.data.source,
                    tagID: "首页"
                }));
            };
            if (x && 1 === x) this.beforeShowPhone().then(function() {
                d();
            }, function(n) {
                console.log("没有通过验证login-state和login-info的验证>>>>", n), t.showPhone(o("0x15"), e) && d();
            }); else {
                var m = function(e) {
                    var n = {
                        1: "曝光订单确认和取消通知订阅弹窗",
                        2: "订单确认和取消通知订阅弹窗_点击确定",
                        3: o("0x1c")
                    };
                    t.setTrack(n[e.code], {
                        source: t.data[o("0x33")]
                    });
                };
                switch (r) {
                  case o("0x28"):
                    p.subscribeFunc([ "D612WwD9y7yH8xHNfzTWMQzPLTF5M3JmRJFga7zpfKU", o("0x17") ], [ "n8yLcqrRzEKaeNRR5bPObDRB9NC1Oe4ab7jgROzwbmM", "s4MjangTbrlHY8L_xrCy11Py7YxAql6kv3Xb2icSefw" ], d, d, "djdy_subscription", !0, m);
                    break;

                  case "油卡充值":
                    p.subscribeFunc([ "cRsiRpnNg7u3gbBnU0MDtw0eNzcgf8CQbmGYQpLXCaQ" ], [ o("0xf") ], d, d, "ykcz_subscription", !0, m);
                    break;

                  default:
                    d();
                }
            }
        },
        saveLatelyService: function(e) {
            return f(n().mark(function t() {
                return n().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        p[o("0x35")]({
                            url: p.getRequestUrl("/uapi/cps-hcz-smallapp/indexPage/clickSer"),
                            data: {
                                serId: e
                            },
                            header: {
                                "Content-Type": o("0xa")
                            },
                            needToken: !0
                        });

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        saveMiddleIconJoined: function(e) {
            var t = wx.getStorageSync(o("0x0")) || {}, n = this[o("0x32")].kingKong[o("0x32")].filter(function(t) {
                return t.configId === e;
            })[0];
            t[e] = n[o("0x9")] + n.startTime + n.endTime, wx[o("0x4")]("middleIconServiceConfig", t);
        },
        compareRedConfig: function(e) {
            if (e && e[o("0x8")] > 0) {
                var t = wx.getStorageSync("middleIconServiceConfig") || {}, n = Object.keys(wx.getStorageSync(o("0x0"))) || [];
                return e.map(function(e) {
                    var r = "", i = e.configId, o = e.redState, a = e.startTime, c = e.endTime;
                    return !(i && n.indexOf(i) > -1 && t[i] === o + a + c) && (r = o), e.showType = r, 
                    u(u({}, e), {}, {
                        showType: r
                    });
                });
            }
            return [];
        },
        serviceHandleIndex: function(e) {
            var t = e.detail[o("0x2a")], n = t + 1;
            this[o("0xd")]({
                "kingKong.index": t
            }), this.setTrack(o("0x29"), {
                source: this[o("0x32")].source,
                page_hiberarchy: n.toString()
            });
        },
        openServiceMore: function() {
            this.jumpFun(o("0x19"), "点击服务ICON更多", {
                serviceName: "更多"
            });
        }
    }
};

exports[o("0x1")] = x;

var d = Behavior(x);

exports.kingKong = d;
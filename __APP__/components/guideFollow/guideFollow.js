var e, t, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = [ "use strict", "time", "data", "prev", "abrupt", "moduleType", "customerTrack", "queryPageInfo", "currentTarget", "windowCallback", "0", "default", "source", "dataset", "true", "catch", "closeFloatWindow", "return", "resolve", "next", "updateSubStatus", "sent", "PACX_O00000086", "mark" ];

e = n, t = 362, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return n[e -= 0];
};

a("0x16"), Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getImg = c;

var o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/datatist.js"));

function u(e, t, r, n, o, u, i) {
    try {
        var s = e[u](i), c = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    s.done ? t(c) : Promise[a("0x10")](c).then(n, o);
}

function i(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, a) {
            var o = e.apply(t, r);
            function i(e) {
                u(o, n, a, i, s, "next", e);
            }
            function s(e) {
                u(o, n, a, i, s, "throw", e);
            }
            i(void 0);
        });
    };
}

var s = getApp();

function c(e) {
    return s.getRequestUrl("/cps/hcz-miniprogram/images/guideFollow/".concat(e), "hczStatic");
}

var l = c("close.png"), d = c("icon.png");

Component({
    properties: {
        iconUrl: {
            type: String,
            value: d
        },
        title: {
            type: String,
            value: "关注公众号，福利通知早知道"
        },
        tips: {
            type: String,
            value: "功能上线优先知"
        },
        button: {
            type: String,
            value: "去关注"
        },
        hideClose: {
            type: Boolean,
            value: !1
        },
        source: {
            type: String,
            value: ""
        },
        bottom: {
            type: String,
            value: "20"
        },
        from: {
            type: String,
            value: "0"
        },
        loginStatus: {
            type: Boolean,
            value: !1
        },
        bubbleProp: {
            type: String,
            value: ""
        }
    },
    data: {
        show: !1,
        time: 0,
        timer: "",
        moduleType: "",
        closeUrl: l
    },
    methods: {
        getObmConfig: function() {
            return i(r().mark(function e() {
                var t, n;
                return r().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, s[a("0x5")]({
                            source: "other_guideFollow"
                        });

                      case 2:
                        return t = e.sent, n = "", n = t && t.length > 0 && t[0].keyValue ? t[0].keyValue.temporaryData[0].keyValueMap.status : a("0x8"), 
                        e[a("0x2")](a("0xf"), n);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        goFollow: function() {
            var e = this;
            return i(r().mark(function t() {
                return r().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return o.default[a("0x4")](a("0x14"), {
                            source: e.data.source
                        }, null), e.data.moduleType = "1", t.next = 4, e[a("0xe")]();

                      case 4:
                        wx.navigateTo({
                            url: "/pages/downloadHCZ/downloadHCZ?tag=Guanzhu&source=xcx_Guanzhu"
                        });

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        checkUser: function() {
            var e = this;
            return i(r().mark(function t() {
                var n, o, u;
                return r().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, s[a("0x12")]();

                      case 3:
                        if (t.t0 = t[a("0x13")], t.t0) {
                            t.next = 6;
                            break;
                        }
                        t.t0 = {};

                      case 6:
                        if (n = t.t0, o = n.subStatus, !(u = void 0 === o ? "" : o) || "1" === u) {
                            t.next = 15;
                            break;
                        }
                        return t.next = 12, e.getObmConfig();

                      case 12:
                        return "1" === t.sent ? e.checkStatus() : e.showTopGuide(), t.abrupt("return");

                      case 15:
                        e.windowCallback(), t.next = 21;
                        break;

                      case 18:
                        t.prev = 18, t.t1 = t[a("0xd")](0), e.windowCallback();

                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 18 ] ]);
            }))();
        },
        showTopGuide: function() {
            var e = getCurrentPages();
            e[e.length - 1].setData({
                showGuide: !0
            }), this[a("0x7")]();
        },
        checkStatus: function() {
            var e = this;
            return i(r().mark(function t() {
                var n, a, o;
                return r().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, s.$http({
                            url: s.getRequestUrl("/uapi/cps-hcz-smallapp/other/focus/remind/get"),
                            data: {},
                            needToken: !0,
                            needLogin: !0
                        });

                      case 2:
                        n = t.sent, a = n.code, o = n.data, 0 === a && "on" === o ? e.openFloatWindow() : e.showTopGuide();

                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        closeFloatWindow: function(e) {
            var t = this;
            return i(r()[a("0x15")](function n() {
                var o;
                return r().wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        if (t.data.timer) {
                            r.next = 2;
                            break;
                        }
                        return r.abrupt("return");

                      case 2:
                        return e && e.currentTarget && (t.data[a("0x3")] = e[a("0x6")][a("0xb")].moduletype), 
                        t.clearTimer(), wx.removeStorageSync("guideFollowTime"), wx.setStorageSync("guideFollowShow", "false"), 
                        o = t[a("0x0")].moduleType, r.next = 9, s.$http({
                            url: s.getRequestUrl("/uapi/cps-hcz-smallapp/other/focus/remind"),
                            data: {
                                moduleType: o
                            },
                            needToken: !0,
                            needLogin: !0
                        });

                      case 9:
                      case "end":
                        return r.stop();
                    }
                }, n);
            }))();
        },
        openFloatWindow: function() {
            var e = this;
            o[a("0x9")].customerTrack("PACX_O00000087", {
                source: this.data[a("0xa")]
            }, null), this.setData({
                show: !0,
                time: wx.getStorageSync("guideFollowTime") || 0
            }), wx.setStorageSync("guideFollowShow", a("0xc")), !this.data.timer && (this.data.timer = setInterval(function() {
                if (e.data[a("0x17")] += 1e3, 6e5 === e[a("0x0")].time) return e.data.moduleType = a("0x8"), 
                void e.closeFloatWindow();
            }, 1e3)), this.windowCallback();
        },
        clearTimer: function() {
            clearInterval(this.data.timer), this.setData({
                show: !1,
                time: 0,
                timer: ""
            });
        },
        saveTime: function() {
            0 !== this.data.time && (wx.setStorageSync("guideFollowTime", this.data[a("0x17")]), 
            this.clearTimer());
        },
        windowCallback: function() {
            var e = this.data.show;
            this.triggerEvent("callback", {
                isShowGuideFollow: e
            });
        }
    },
    pageLifetimes: {
        hide: function() {
            this.saveTime();
        }
    },
    observers: {
        bubbleProp: function(e) {
            var t = this;
            return i(r()[a("0x15")](function n() {
                return r().wrap(function(r) {
                    for (;;) switch (r[a("0x1")] = r[a("0x11")]) {
                      case 0:
                        if ("guideFollow" !== e) {
                            r.next = 14;
                            break;
                        }
                        if ("2" !== t[a("0x0")].from) {
                            r.next = 5;
                            break;
                        }
                        t.data.loginStatus ? t.checkUser() : t.windowCallback(), r[a("0x11")] = 14;
                        break;

                      case 5:
                        return r[a("0x1")] = 5, r.next = 8, s.loginInfo();

                      case 8:
                        t.checkUser(), r.next = 14;
                        break;

                      case 11:
                        r.prev = 11, r.t0 = r.catch(5), t[a("0x7")]();

                      case 14:
                      case "end":
                        return r.stop();
                    }
                }, n, null, [ [ 5, 11 ] ]);
            }))();
        }
    }
});
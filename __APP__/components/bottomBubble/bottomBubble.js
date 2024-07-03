var e, t, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), o = require("../../@babel/runtime/helpers/typeof"), n = [ "currentTarget", "NEW_USER_GIFT", "getOwnPropertyDescriptors", "/pages/webview/webview?pageType=22NpGiftPack", "resolve", "call", "setStorageSync", "clearTimer", "code", "hczStatic", "object", "string", "mark", "showPhone", "没有通过验证login-state和login-info的验证>>>>", "1", "dataset", "return", "0", "data" ];

e = n, t = 152, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var i = function(e, t) {
    return n[e -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getImg = f;

var a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/datatist.js")), u = require("../../components/newAuthorize/controlNewAuthorize.js"), l = require("../../utils/pathManage.js");

function s(e) {
    return (s = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(e) {
        return o(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : o(e);
    })(e);
}

function c(e, t, r, o, n, a, u) {
    try {
        var l = e[a](u), s = l.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    l.done ? t(s) : Promise[i("0xc")](s).then(o, n);
}

function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, o);
    }
    return r;
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p(Object(r), !0).forEach(function(t) {
            m(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object[i("0xa")](r)) : p(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function m(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if (i("0x12") != s(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var o = r[i("0xd")](e, t || "default");
                if ("object" != s(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, i("0x13"));
        return "symbol" == s(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function f(e) {
    return d.getRequestUrl("/cps/hcz-miniprogram/images/guideFollow/".concat(e), i("0x11"));
}

var d = getApp(), h = f("close.png"), g = f("icon.png");

Component({
    properties: {
        hideClose: {
            type: Boolean,
            value: !1
        },
        loginStatus: {
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
        bubbleProp: {
            type: String,
            value: ""
        },
        isNewUser: {
            type: Boolean,
            value: !1
        }
    },
    data: b({
        iconUrl: g,
        show: !1,
        openId: "",
        closeUrl: h,
        time: 0,
        timer: null,
        moduleType: ""
    }, u.authorizeCompAlert.data),
    methods: b(b({
        goNextPage: l.goNextPage
    }, u.authorizeCompAlert.methods), {}, {
        setBubble: function() {
            var e = this;
            return function(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(o, n) {
                        var i = e.apply(t, r);
                        function a(e) {
                            c(i, o, n, a, u, "next", e);
                        }
                        function u(e) {
                            c(i, o, n, a, u, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }(r()[i("0x0")](function t() {
                var o, n, a, u;
                return r().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!(o = wx.getStorageSync("openid") || "")) {
                            t.next = 10;
                            break;
                        }
                        return t.next = 4, d.$http({
                            url: d.getRequestUrl("/uapi/cps-hcz-smallapp/other/floatFrame/get"),
                            data: {
                                openId: o,
                                type: "NEW_USER_GIFT"
                            },
                            needToken: !0
                        });

                      case 4:
                        if (n = t.sent, a = n[i("0x10")], u = n.data, 0 !== a || "on" !== u) {
                            t.next = 10;
                            break;
                        }
                        return e.setData({
                            show: !0,
                            openId: o,
                            time: wx.getStorageSync("bottomBubbleTime") || 0
                        }), !e.data.timer && (e.data.timer = setInterval(function() {
                            if (e[i("0x7")].time += 1e3, 6e5 === e.data.time) return e[i("0x7")].moduleType = i("0x6"), 
                            void e.closeBubble();
                        }, 1e3)), t.abrupt(i("0x5"));

                      case 10:
                        e.triggerEvent("callback");

                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        closeBubble: function(e) {
            e && e[i("0x8")] && (this.data.moduleType = e[i("0x8")][i("0x4")].moduletype), this.clearTimer(), 
            wx.removeStorageSync("bottomBubbleTime"), d.$http({
                url: d.getRequestUrl("/uapi/cps-hcz-smallapp/other/floatFrame/set"),
                data: {
                    moduleType: this.data.moduleType,
                    openId: this.data.openId,
                    type: i("0x9")
                },
                needToken: !0
            });
        },
        jumpBubble: function(e) {
            var t = this, r = function() {
                var e = i("0xb");
                t.goNextPage(e, "navigateTo").then(function() {
                    a.default.customerTrack("", {
                        source: t.data.source
                    }, null), t[i("0x7")].moduleType = i("0x3"), t.closeBubble();
                });
            };
            this.beforeShowPhone().then(function() {
                r();
            }, function(o) {
                console.log(i("0x2"), o), t[i("0x1")]("jumpBubble", e) && r();
            });
        },
        clearTimer: function() {
            clearInterval(this.data.timer), this.setData({
                show: !1,
                time: 0,
                timer: null
            });
        },
        saveTime: function() {
            var e = this.data, t = e.time, r = e.timer;
            0 !== t && r && (wx[i("0xe")]("bottomBubbleTime", this.data.time), this.clearTimer());
        }
    }),
    pageLifetimes: {
        hide: function() {
            this.saveTime();
        }
    },
    observers: {
        bubbleProp: function(e) {
            if ("bottomBubble" === e && !this.data.show) {
                var t = this.data, r = t.loginStatus, o = t.isNewUser;
                if (r && !o) return this[i("0xf")](), void wx.removeStorageSync("bottomBubbleTime");
                this.setBubble();
            }
        }
    }
});
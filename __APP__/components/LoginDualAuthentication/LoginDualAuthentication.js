var e, t, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../@babel/runtime/helpers/typeof"), i = [ "use strict", "isDisabled", "veriCallBack", "result", "triggerEvent", "加载中...", "default", "@@toPrimitive must return a primitive value.", "getOwnPropertyDescriptors", "forEach", "getOwnPropertySymbols", "setData", "properties", "phoneOsType", "getPhoneCache", "执行双重登录验证", "data", "string", "catch", "请稍后再试", "length", "concat", "S", "getVeriCode", "constructor", "@babel/helpers - typeof", "appid" ];

e = i, t = 483, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var o = function(e, t) {
    return i[e -= 0];
};

function a(e) {
    return o("0x1"), (a = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e[o("0x0")] === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
    })(e);
}

o("0x3");

var s = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/log")), u = require("../../utils/smallTool.js");

function l(e, t) {
    var r = Object.keys(e);
    if (Object[o("0xd")]) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? l(Object(r), !0).forEach(function(t) {
            d(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object[o("0xb")](r)) : l(Object(r))[o("0xc")](function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function d(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != a(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != a(n)) return n;
                throw new TypeError(o("0xa"));
            }
            return ("string" === t ? String : Number)(e);
        }(e, o("0x14"));
        return "symbol" == a(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function f(e, t, r, n, i, o, a) {
    try {
        var s = e[o](a), u = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(n, i);
}

var p = getApp(), v = null;

Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        loginVeriPhone: {
            type: String,
            value: ""
        },
        loginParams: {
            type: Object,
            value: {}
        }
    },
    data: {
        getVeriCode: !0,
        veriCode: "",
        veriResTxt: "",
        isDisabled: !0,
        veriButtonText: "获取验证码"
    },
    methods: {
        getVeriCode: function() {
            var e = this;
            return function(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(n, i) {
                        var o = e.apply(t, r);
                        function a(e) {
                            f(o, n, i, a, s, "next", e);
                        }
                        function s(e) {
                            f(o, n, i, a, s, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }(r().mark(function t() {
                var n;
                return r().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e.data.getVeriCode) {
                            t.next = 9;
                            break;
                        }
                        return wx.showLoading({
                            title: "加载中..."
                        }), t.next = 4, p.$http({
                            url: p.getRequestUrl("/login/third-party/v1/xcx/sms/send", "hczhd"),
                            data: c(c({
                                appid: e[o("0xf")].loginParams[o("0x2")],
                                phoneOsType: p.globalData[o("0x10")]
                            }, (0, u.getWxCacheInfo)()), (0, u[o("0x11")])()),
                            needSpartaIdInBody: !0
                        });

                      case 4:
                        n = t.sent, s[o("0x9")].info("双重登录验证"), console.log("点击获取验证码结果::", n), wx.hideLoading(), 
                        200 === (null == n ? void 0 : n.code) ? (e[o("0x13")][o("0x1a")] = !1, e.timer(), 
                        e.data.isDisabled && e.setData({
                            isDisabled: !1,
                            veriResTxt: ""
                        })) : (e[o("0x13")][o("0x1a")] = !0, e.setData({
                            veriResTxt: (null == n ? void 0 : n[o("0x6")]) || o("0x16")
                        }));

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        onInputVeriCode: function(e) {
            var t = e.detail.value;
            this[o("0xe")]({
                veriCode: t
            });
        },
        onInputTap: function() {
            this[o("0x13")][o("0x4")] && this.setData({
                veriResTxt: "请获取验证码后输入"
            });
        },
        timer: function() {
            var e, t = this, r = 60;
            v = setInterval(function() {
                r -= 1, e = ""[o("0x18")](r, o("0x19")), t.setData({
                    veriButtonText: e
                }), r <= 0 && (t.setData({
                    veriButtonText: "重新获取"
                }), t.data.getVeriCode = !0, clearInterval(v));
            }, 1e3);
        },
        onCancelTap: function() {
            this[o("0x5")](), this.data.getVeriCode = !0, clearInterval(v);
        },
        onConfirmTap: function() {
            var e = this, t = this.data.veriCode;
            "" != t ? t[o("0x17")] <= 3 ? this.setData({
                veriResTxt: "请输入正确格式的验证码"
            }) : (s.default.info(o("0x12")), wx.showLoading({
                title: o("0x8")
            }), p.getRegister(c(c({}, this.properties.loginParams), {}, {
                dynamicCode: t
            })).then(function() {
                e.veriCallBack(), e[o("0x7")]("onNext");
            })[o("0x15")](function(t) {
                wx.hideLoading(), e.setData({
                    veriCode: "",
                    veriResTxt: t.data.result
                });
            })) : this.setData({
                veriResTxt: "请输入验证码"
            });
        },
        veriCallBack: function() {
            wx.hideLoading(), this.setData({
                show: !1,
                veriButtonText: "获取验证码",
                veriCode: "",
                veriResTxt: "",
                isDisabled: !0
            });
        }
    }
});
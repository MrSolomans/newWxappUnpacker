var e, t, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../@babel/runtime/helpers/typeof"), o = [ "]请求失败,错误:", "forEach", "throw", "setData", "function", "log", "getStorageSync", "prev", "symbol", "wrap", "没有传递必填参数moduleId", "页面切换太快，[", "e.currentTarget.dataset", "customerTrack", "msg", "stop", "next", "constructor", "dataset", "requestTask", "selectCity", "id", "alertCallback", "PACX_W00380020", "想要跳转的目标页面路径不存在！", "getRequireParams", "fetchData", "use strict", "grayTest", "concat", "globalData" ];

e = o, t = 191, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return o[e -= 0];
};

function i(e) {
    return (i = "function" == typeof Symbol && a("0x3") == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e[a("0xc")] === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
    })(e);
}

function c(e, t, r, n, o, a, i) {
    try {
        var c = e[a](i), s = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    c.done ? t(s) : Promise.resolve(s).then(n, o);
}

function s(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, o) {
            var i = e.apply(t, r);
            function s(e) {
                c(i, n, o, s, u, "next", e);
            }
            function u(e) {
                c(i, n, o, s, u, a("0x1c"), e);
            }
            s(void 0);
        });
    };
}

function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(r), !0).forEach(function(t) {
            p(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r))[a("0x1b")](function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function p(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != i(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != i(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == i(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

a("0x16");

var f = (0, function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/proxyWX")).default)(), h = require("../../utils/datatist.js"), g = getApp(), d = {
    home: "66",
    insurance: "67",
    discovery: "68",
    mine: "69"
};

Component({
    properties: {
        windowProp: {
            type: String,
            value: ""
        },
        pageType: {
            type: String,
            value: "home"
        },
        source: {
            type: String,
            value: ""
        }
    },
    data: {
        alertObj: {},
        isShowImgAni: !1,
        showAlert: !1,
        signalGet: {}
    },
    methods: {
        jump: function(e) {
            var t = this;
            console.warn(a("0x7"), e.currentTarget.dataset);
            var r = e.currentTarget[a("0xd")], n = r.targetUrl, o = void 0 === n ? "" : n, i = r.track;
            o ? f.navigateTo({
                url: o
            }).then(function() {
                h[a("0x8")]("PACX_W00380019", {
                    pagetype: t.data.source
                }, null), i && h.customerTrack(i, {}, null);
            }) : console.warn(a("0x13"));
        },
        showImg: function() {
            this.setData({
                isShowImgAni: !0
            });
        },
        closeAlert: function() {
            var e = this.data, t = e.showAlert, r = e.isShowImgAni, n = e.source;
            t && r && (h.customerTrack(a("0x12"), {
                pagetype: n
            }, null), this.reportPopInfo()), this.setData({
                showAlert: !1
            }), this[a("0x11")]();
        },
        fetchData: function(e, t, r, n) {
            var o = g.getRequestUrl("/uapi/cps-hcz-smallapp/toast/popbox/" + e), i = {};
            "release" !== g[a("0x19")].envVersion && (i.versionno = a("0x17")), n = n || wx[a("0x1")]("hczAccessToken");
            var c = {
                url: o,
                method: "POST",
                data: l({
                    "X-PA-NONCESTR": 1
                }, t),
                header: l({
                    "Content-Type": "application/json",
                    secret_token: n
                }, i)
            };
            return r ? new Promise(function(t) {
                var n = wx.request(l(l({}, c), {}, {
                    success: function(e) {
                        var r = e.data;
                        t(r);
                    },
                    fail: function(r) {
                        console.warn(a("0x6")[a("0x18")](e, "]请求太多,已中断请求："), r), t({});
                    }
                }));
                return r.requestTask = n, {};
            }) : f.request(c).then(function(e) {
                return e.data;
            }).catch(function(t) {
                return console.warn("[".concat(e, a("0x1a")), t), {};
            });
        },
        getRequireParams: function() {
            var e = this.properties.pageType, t = d[e];
            if (!e || !t) return console.warn(a("0x5")), !1;
            var r = wx.getStorageSync("openid");
            if (!r) return console.warn("没有传递必填参数openid"), !1;
            return {
                udid: r,
                os: g.globalData.phoneOsType,
                versionNo: "1.0.1",
                city: wx.getStorageSync(a("0xf")) || wx.getStorageSync("cityName").replace("市", "") || "全国",
                moduleId: t
            };
        },
        getPopInfo: function() {
            var e, t = this, n = this[a("0x14")]();
            n ? g.loginInfo().then((e = s(r().mark(function e(o) {
                var i, c, s;
                return r().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.fetchData("getTopPopBox", l(l({}, n), {}, {
                            appSource: 1
                        }), t.data.signalGet, o.data.hczAccessToken);

                      case 2:
                        i = e.sent, c = i.code, s = i.data, 0 === c && s && s.id ? (t[a("0x1d")]({
                            alertObj: s,
                            showAlert: !0
                        }), h.customerTrack("PACX_W00380018", {
                            pagetype: t.data.source,
                            popup_window_title: s.name
                        }, null)) : t.alertCallback();

                      case 5:
                      case "end":
                        return e[a("0xa")]();
                    }
                }, e);
            })), function(t) {
                return e.apply(this, arguments);
            })).catch(function() {
                t.alertCallback();
            }) : this.alertCallback();
        },
        reportPopInfo: function() {
            var e = this;
            return s(r().mark(function t() {
                var n, o, i, c, s;
                return r()[a("0x4")](function(t) {
                    for (;;) switch (t[a("0x2")] = t.next) {
                      case 0:
                        if (n = e.getRequireParams(), o = e.data.alertObj[a("0x10")], n && o) {
                            t.next = 5;
                            break;
                        }
                        return console[a("0x0")]("不满足上传弹窗的条件：params——".concat(n, "、popID——")[a("0x18")](o)), 
                        t.abrupt("return");

                      case 5:
                        return t[a("0xb")] = 7, e[a("0x15")]("reportPopBox", l(l({}, n), {}, {
                            popID: o
                        }));

                      case 7:
                        i = t.sent, c = i.code, s = i[a("0x9")], 0 !== c && console.error("上报弹窗失败：", s);

                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        alertCallback: function() {
            "home" === this.data.pageType && this.triggerEvent("callback");
        }
    },
    pageLifetimes: {
        hide: function() {
            var e = this.data.signalGet;
            e && e.requestTask && n(e[a("0xe")].abort) === a("0x1e") && e[a("0xe")].abort(), 
            this[a("0x1d")]({
                showAlert: !1
            });
        }
    },
    observers: {
        windowProp: function(e) {
            if ("showAlert" === e) {
                if (!wx.getStorageSync("hczAccessToken")) return void this.alertCallback();
                this.getPopInfo();
            }
        }
    }
});
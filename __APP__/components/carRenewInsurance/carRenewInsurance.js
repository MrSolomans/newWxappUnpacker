var e, t, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../@babel/runtime/helpers/typeof"), a = [ "url", "globalData", "accessToken", "applyMsgSubscription", "mediaSource", "use strict", "/pages/webview/webview?&pageType=oneKeyInsure&mediaSource=", "PACX_W00073346", "wait", "getQueryStringArgs", "default", "constructor", "renew_insure", "source", "object", "abrupt", "setData", "prototype", "end", "code", "getStorageSync", "customerTrack", "hczAccessToken", "return", "__esModule", "then", "environment", "properties", "$http", "set", "t0", "mark", "insuranceCacheObj", "prev", "next" ];

e = a, t = 377, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var u = function(e, t) {
    return a[e -= 0];
};

function o(e) {
    return (o = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e[u("0x13")] === Symbol && e !== Symbol[u("0x19")] ? "symbol" : n(e);
    })(e);
}

u("0xd");

var s = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/datatist.js")), i = function(e, t) {
    if (!t && e && e[u("0x20")]) return e;
    if (null === e || u("0x16") != o(e) && "function" != typeof e) return {
        default: e
    };
    var r = l(t);
    if (r && r.has(e)) return r.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in e) if ("default" !== s && {}.hasOwnProperty.call(e, s)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
        i && (i.get || i[u("0x2")]) ? Object.defineProperty(n, s, i) : n[s] = e[s];
    }
    return n.default = e, r && r.set(e, n), n;
}(require("../../utils/newSubscribe.js")), c = require("../../utils/util.js");

function l(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (l = function(e) {
        return e ? r : t;
    })(e);
}

function f(e, t, r, n, a, u, o) {
    try {
        var s = e[u](o), i = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    s.done ? t(i) : Promise.resolve(i).then(n, a);
}

function p(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, a) {
            var u = e.apply(t, r);
            function o(e) {
                f(u, n, a, o, s, "next", e);
            }
            function s(e) {
                f(u, n, a, o, s, "throw", e);
            }
            o(void 0);
        });
    };
}

var x = getApp(), w = x && x.globalData && 0 === x[u("0x9")][u("0x22")], d = (0, 
i.carAndWaitTempIdList)(w), m = (0, i.carAndWaitTempIdObj)(w), b = null;

Component({
    properties: {
        source: {
            type: String,
            value: ""
        },
        mediaSource: {
            type: String,
            value: ""
        },
        isHome: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        isShowInfo: "",
        renewalCarList: [],
        subscribe: null
    },
    methods: {
        openRemind: function() {
            var e = this;
            return p(r().mark(function t() {
                var n;
                return r().wrap(function(t) {
                    for (;;) switch (t.prev = t[u("0x7")]) {
                      case 0:
                        return 1 === wx.getStorageSync("querySubIsAllow").to_be_paid && (b.templateInfo = b.templateInfo.filter(function(e) {
                            return e.id !== m[u("0x10")].id;
                        })), t[u("0x7")] = 4, b[u("0xb")]();

                      case 4:
                        n = t.sent, e.setData({
                            isShowInfo: n ? 1 : 0
                        }), !e.properties.isHome && s.default.customerTrack("PACX_W00073345", {}, null);

                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        closeRemind: function() {
            var e = wx[u("0x1c")](u("0x5"));
            wx.setStorageSync("insuranceCacheObj", {
                time: Date.now(),
                count: (e.count || 0) + 1
            }), this[u("0x18")]({
                isShowInfo: ""
            }), !this.properties.isHome && s.default.customerTrack(u("0xf"), {}, null);
        },
        goToInsure: function(e) {
            var t = this, r = e.currentTarget.dataset[u("0x8")], n = (0, c[u("0x11")])(r).args[u("0xc")];
            r = u("0xe").concat(this.properties.mediaSource || n, "&source=").concat(this.properties[u("0x15")] || "ShouyeWodeYE-XuBaoTiXing"), 
            console.log("车险续保页面", r), wx.navigateTo({
                url: r,
                success: function() {
                    t[u("0x0")].isHome ? s.default[u("0x1d")]("PACX_O00072499", {}, null) : s.default.customerTrack("PACX_W00072502", {}, null);
                }
            });
        },
        queryIsRenewAll: function(e) {
            var t = this;
            return p(r()[u("0x4")](function n() {
                var a, o, s, i, c;
                return r().wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return a = function(e) {
                            return t.setData({
                                renewalCarList: []
                            }), console.warn("查询车辆可续保单错误", e), "error";
                        }, r.prev = 1, r.next = 4, b[u("0x1")]({
                            path: "queryIsRenewall",
                            token: e
                        });

                      case 4:
                        if (o = r.sent, s = o[u("0x1b")], i = o.data, c = o.msg, 0 !== s || !i) {
                            r.next = 13;
                            break;
                        }
                        if (!i.renewalCarList) {
                            r.next = 12;
                            break;
                        }
                        return t.setData({
                            renewalCarList: i.renewalCarList
                        }), r.abrupt("return", i.renewalCarList.length > 0 ? "success" : "fail");

                      case 12:
                        return r[u("0x17")]("return", "fail");

                      case 13:
                        return r.abrupt(u("0x1f"), a(c));

                      case 16:
                        return r.prev = 16, r.t0 = r.catch(1), r.abrupt("return", a(r[u("0x3")]));

                      case 19:
                      case "end":
                        return r.stop();
                    }
                }, n, null, [ [ 1, 16 ] ]);
            }))();
        },
        isShowBtn: function() {
            var e = this;
            return p(r().mark(function t() {
                return r().wrap(function(t) {
                    for (;;) switch (t[u("0x6")] = t.next) {
                      case 0:
                        if (wx.getStorageSync(u("0x1e"))) {
                            t.next = 4;
                            break;
                        }
                        return e.setData({
                            isShowInfo: "",
                            renewalCarList: []
                        }), t.abrupt("return");

                      case 4:
                        x.loginInfo()[u("0x21")](function() {
                            var t = p(r().mark(function t(n) {
                                var a, o, i, c, l, f, p, x;
                                return r().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        return a = n.data, t[u("0x7")] = 3, e.queryIsRenewAll(a[u("0xa")]);

                                      case 3:
                                        return "success" === (o = t.sent) && e.setData({
                                            isShowInfo: 1
                                        }), t[u("0x7")] = 7, b.querySubIsAllow([ "renew_insure", "to_be_paid" ], a.accessToken);

                                      case 7:
                                        (i = t.sent) && wx.setStorageSync("querySubIsAllow", i), "fail" === o && (c = i[u("0x14")], 
                                        (l = wx.getStorageSync("insuranceCacheObj")) && 0 === c && (c = "", f = l.time, 
                                        p = l.count, x = Date.now(), 864e5, p > 2 ? (2592e6, x - f >= 2592e6 && (c = 0)) : p <= 2 && x - f >= 864e5 && (c = 0)), 
                                        "number" == typeof c && e[u("0x18")]({
                                            isShowInfo: c
                                        }), 1 === c ? e.properties.isHome ? s[u("0x12")].customerTrack("PACX_O00072530", {}, null) : s.default[u("0x1d")]("PACX_O00072500", {}, null) : 0 === c && !e.properties.isHome && s[u("0x12")].customerTrack("PACX_W00073348", {}, null));

                                      case 10:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            }));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }()).catch(function() {});

                      case 5:
                      case u("0x1a"):
                        return t.stop();
                    }
                }, t);
            }))();
        }
    },
    lifetimes: {
        attached: function() {
            b = new i.default(d);
        }
    }
});
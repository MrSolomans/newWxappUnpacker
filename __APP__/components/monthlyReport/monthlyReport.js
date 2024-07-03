var e, t, n = require("../../@babel/runtime/helpers/regeneratorRuntime"), o = [ "formOtherData", "getStorageSync", "/uapi/cps-hcz-smallapp/collocateConfig/list", "monthlyTagClose", "keyValueMap", "$http", "close", "log", "keyValue", "queryPageInfo", "then", "getRequestUrl", "?pageType=monthlyReport", "push", "request warn:", "getMsg", "otherParams", "done", "用户可订阅", "handlerShowMonthly", "next", "保险页面——非车月报", "stop", "6631621492702816", "hideLoading", "t0", "data", "wrap", "scenceId", "end", "find", "temporaryData", "sent" ];

e = o, t = 282, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return o[e -= 0];
}, r = require("../../utils/pagePath.js"), s = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/handleString.js"));

function c(e, t, n, o, r, s, c) {
    try {
        var i = e[s](c), u = i.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void n(e);
    }
    i[a("0x20")] ? t(u) : Promise.resolve(u).then(o, r);
}

function i(e) {
    return function() {
        var t = this, n = arguments;
        return new Promise(function(o, a) {
            var r = e.apply(t, n);
            function s(e) {
                c(r, o, a, s, i, "next", e);
            }
            function i(e) {
                c(r, o, a, s, i, "throw", e);
            }
            s(void 0);
        });
    };
}

var u = require("../../utils/datatist.js"), l = getApp(), h = 0 === l.globalData.environment, g = a("0x12");

Component({
    data: {
        showClose: !1,
        showMonthly: !1,
        month: ""
    },
    methods: {
        close: function() {
            this.setData({
                showMonthly: !1
            }), wx.setStorageSync(g, this.getYearMonth());
        },
        goMonthlyPage: function() {
            var e = this.data[a("0x1f")], t = void 0 === e ? "" : e;
            wx.navigateTo({
                url: "".concat(r.WEBVIEW, a("0x1b")).concat(t),
                complete: function() {
                    u.customerTrack("PACX_W00001401", {
                        source: "xcx_bx"
                    }, null);
                }
            });
        },
        checkUserSubscription: function() {
            var e = this;
            return i(n().mark(function t() {
                var o, r, s;
                return n()[a("0x9")](function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, l[a("0x14")]({
                            url: l[a("0x1a")]("/uapi/cps-hcz-smallapp/insurePage/getSubViewState"),
                            needLogin: !0,
                            needToken: !0
                        });

                      case 3:
                        o = t.sent, r = o.code, s = o.data, 0 === r && 1 === s.state ? (console.log(a("0x0")), 
                        e.getPageInfo()) : (console.warn("用户不可订阅，直接跳转月报页"), e.goMonthlyPage()), t.next = 12;
                        break;

                      case 9:
                        t.prev = 9, t.t0 = t.catch(0), console.warn(a("0x1d") + t[a("0x7")]);

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 9 ] ]);
            }))();
        },
        getPageInfo: function() {
            var e = this;
            return i(n().mark(function t() {
                var o, r, s, c, i;
                return n().wrap(function(t) {
                    for (;;) switch (t.prev = t[a("0x2")]) {
                      case 0:
                        return wx.showLoading({
                            mask: !0
                        }), o = h ? "491621391326323" : a("0x5"), t.next = 4, l[a("0x18")]({
                            source: "msgSubscription",
                            tag: o
                        });

                      case 4:
                        if ((r = t[a("0xe")]) && !(r.length < 1)) {
                            t[a("0x2")] = 8;
                            break;
                        }
                        return wx.hideLoading(), t.abrupt("return");

                      case 8:
                        s = r[0].keyValue[a("0xf")], e.setData({
                            title: r[0].keyValue.titleText,
                            des: r[0].keyValue.desText,
                            isShowPage: !0
                        }), c = [], i = s.map(function(e) {
                            return c[a("0x1c")](e.wxTempId), "#" === e.scenceId && (e[a("0xa")] = ""), {
                                source: e.origin,
                                templateId: e.ucpId,
                                scenceID: e.scenceId
                            };
                        }), wx[a("0x6")](), e[a("0x1e")]({
                            tmplIds: c,
                            params: i
                        });

                      case 14:
                      case a("0xb"):
                        return t[a("0x4")]();
                    }
                }, t);
            }))();
        },
        getMsg: function(e) {
            var t = this;
            l.msgSubscription(e, function(e) {
                u.customerTrack({
                    1: "PACX_W39000127",
                    2: "PACX_W39000128",
                    3: "PACX_W39000129"
                }[e.code], {
                    source: "xcx_bx"
                }, null);
            }).then(function() {
                t.goMonthlyPage();
            }).catch(function() {
                t.goMonthlyPage();
            });
        },
        getCloseBtnConfig: function() {
            return l.$http({
                url: l.getRequestUrl(a("0x11")),
                data: {
                    source: "instance_monthly",
                    tag: "monthlyReport"
                }
            }).then(function(e) {
                var t = e.data;
                if (console.log(a("0x3"), t), t && t.length > 0) {
                    var n = t[0];
                    if (n && n.keyValue && n[a("0x17")][a("0xd")]) {
                        var o = n.keyValue.temporaryData[a("0xc")](function(e) {
                            return "47" === e.type;
                        });
                        if (o[a("0x13")]) {
                            var r = o.keyValueMap;
                            return {
                                close: r[a("0x15")],
                                startTime: r.startTime,
                                endTime: r.endTime
                            };
                        }
                    }
                }
            });
        },
        getYearMonth: function() {
            var e = new Date(), t = e.getFullYear(), n = e.getMonth() + 1;
            return "".concat(t, "-").concat(n);
        },
        handlerShowCloseBtn: function(e) {
            this.setData({
                showClose: "1" === e
            });
        },
        showMessageMonthly: function() {
            this.setData({
                showMonthly: !0
            });
        },
        handlerShowMonthly: function(e) {
            var t = this, n = wx.getStorageSync(g), o = this.getYearMonth(), r = wx.getStorageSync("monthlyTagMessage"), c = Date.now(), i = wx[a("0x10")]("monthlyData"), u = wx.getStorageSync("monthlyTagMonth"), h = i && u === o;
            if (e = Number(e), n !== o) {
                if (!(e && c - r > 864e5 * e && h)) return h ? (this.data.otherParams = i, void this.showMessageMonthly()) : void l.$http({
                    url: l.getRequestUrl("/uapi/cps-hcz-smallapp/insurePage/getReportUrl"),
                    needToken: !0
                })[a("0x19")](function(e) {
                    var n = e.code, r = e[a("0x8")];
                    if (0 === n && r) {
                        var i = s.default.getQueryObj(r);
                        if (console.log("非车月报读取到链接上的参数", i), i && i.year && String(i.month)) {
                            var u = i.year, l = i.month;
                            t[a("0x8")].otherParams = "&year=".concat(u, "&month=").concat(l);
                        }
                        t.showMessageMonthly(), wx.setStorageSync("monthlyData", t.data.otherParams), wx.setStorageSync("monthlyTagMonth", o), 
                        wx.setStorageSync("monthlyTagMessage", c);
                    }
                });
                console[a("0x16")]("从obm配置的天数：判断是否展示，不在天数内，不展示该消息条");
            } else console.log("读取缓存里上次关闭消息条的时间节点，如果存在且还在本月份，则不展示消息条 TAG_CLOSE");
        }
    },
    pageLifetimes: {
        show: function() {
            var e = this;
            l.loginInfo().then(function() {
                e.getCloseBtnConfig().then(function(t) {
                    if (t) {
                        var n = t.close, o = t.date;
                        e.handlerShowCloseBtn(n), e[a("0x1")](o);
                    }
                });
                var t = new Date().getMonth();
                e.setData({
                    month: t || 12
                });
            }).catch(function() {
                e.setData({
                    showMonthly: !1
                }), console.log("用户尚未登录，不用获取月报信息");
            });
        }
    }
});
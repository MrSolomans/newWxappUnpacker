var e, t, i = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = [ "小程序", "log", "done", "getRequestUrl", "stop", "unionId", "prev", "促下载", "进入企微的组件", "next", "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/qiwei/", "properties", "apply", "code", "wrap" ];

e = n, t = 222, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var o = function(e, t) {
    return n[e -= 0];
};

function r(e, t, i, n, r, a, s) {
    try {
        var c = e[a](s), u = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void i(e);
    }
    c[o("0x5")] ? t(u) : Promise.resolve(u).then(n, r);
}

var a = getApp(), s = a && a.globalData && 0 === a.globalData.environment ? o("0xd") : "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/qiwei/", c = require("../../utils/datatist.js");

Component({
    externalClasses: [ "qiwei-class" ],
    properties: {
        sceneId: {
            type: Number,
            value: 210
        },
        objective: {
            type: String,
            value: o("0xa")
        },
        qiweiTitle: {
            type: String,
            value: "您的专属服务管家"
        },
        qiweiSecondTitle: {
            type: String,
            value: "1对1服务，投保理赔更省心"
        }
    },
    data: {
        isShowQiwei: !0,
        qiweiMiniUrl: "",
        avatar: "".concat(s, "default-kefu@2x@1.5x.png")
    },
    lifetimes: {
        ready: function() {
            console[o("0x4")](o("0xb"));
            var e = this.properties, t = e.sceneId, i = e.objective, n = wx.getStorageSync("reportId") || "", r = wx.getStorageSync("unionId") || "";
            "" !== n && "" !== r && c.customerTrack("PACX_O27000302", {
                sysSource: o("0x3"),
                aopsid: n,
                UnionId: r,
                session_id: t,
                scenetype: i
            }, null);
        }
    },
    methods: {
        checkIsQiwei: function() {
            var e = this;
            return function(e) {
                return function() {
                    var t = this, i = arguments;
                    return new Promise(function(n, a) {
                        var s = e[o("0x0")](t, i);
                        function c(e) {
                            r(s, n, a, c, u, "next", e);
                        }
                        function u(e) {
                            r(s, n, a, c, u, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }(i().mark(function t() {
                var n, r;
                return i()[o("0x2")](function(t) {
                    for (;;) switch (t[o("0x9")] = t[o("0xc")]) {
                      case 0:
                        return t.next = 2, a.$http({
                            url: a[o("0x6")]("/uapi/cps-hcz-smallapp/my/acsShow/personGetStaffByAopsid"),
                            needToken: !0,
                            data: {
                                unionId: wx.getStorageSync(o("0x8")) || ""
                            }
                        });

                      case 2:
                        (n = t.sent) && 0 === n[o("0x1")] ? (console.log("加微接口返回数据:", n), e.setData({
                            qiweiMiniUrl: null == n || null === (r = n.data) || void 0 === r ? void 0 : r.miniUrl,
                            isShowQiwei: !0
                        })) : e.setData({
                            isShowQiwei: !1
                        });

                      case 4:
                      case "end":
                        return t[o("0x7")]();
                    }
                }, t);
            }))();
        },
        goToQiwei: function() {
            var e = this[o("0xe")], t = e.sceneId, i = e.objective, n = wx.getStorageSync("reportId") || "", r = wx.getStorageSync(o("0x8")) || "", a = "/pages/webview/webview?pageType=qwCustomer&id=".concat(t, "&objective=").concat(encodeURIComponent(i));
            "" !== n && "" !== r && c.customerTrack("PACX_W39000202", {
                sysSource: "小程序",
                aopsid: n,
                UnionId: r,
                session_id: t,
                scenetype: i
            }, null), wx.navigateTo({
                url: a
            });
        }
    }
});
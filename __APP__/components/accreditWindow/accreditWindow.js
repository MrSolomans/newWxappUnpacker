var e, a, t = require("../../@babel/runtime/helpers/regeneratorRuntime"), r = [ "0", "return", "accreditWindow", "showToast", "commonLoginOut", "globalData", "triggerEvent", "navigateTo", "/pages/start/start", "code", "isClick", "openid", "end", "授权弹窗同意之后跳转的地址：", "unionId", "use strict", "apply", "none", "setData", "授权页面获取到的进入小程序的参数：", "1", "next", "getStorageSync", "stop", "pages/insurance/insurance2", "callback", "dataset", "data" ];

e = r, a = 248, function(a) {
    for (;--a; ) e.push(e.shift());
}(++a);

var n = function(e, a) {
    return r[e -= 0];
};

n("0x13");

var i = require("../../utils/CommonTool"), o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/handleString"));

function c(e, a, t, r, n, i, o) {
    try {
        var c = e[i](o), s = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void t(e);
    }
    c.done ? a(s) : Promise.resolve(s).then(r, n);
}

function s(e) {
    return function() {
        var a = this, t = arguments;
        return new Promise(function(r, i) {
            var o = e[n("0x14")](a, t);
            function s(e) {
                c(o, r, i, s, u, n("0x19"), e);
            }
            function u(e) {
                c(o, r, i, s, u, "throw", e);
            }
            s(void 0);
        });
    };
}

var u = getApp();

Component({
    properties: {
        windowProp: {
            type: String,
            value: ""
        },
        loginStatus: {
            type: Boolean,
            value: null
        },
        wxPrivacyAuthor: {
            type: Boolean,
            value: null
        }
    },
    data: {
        show: !1,
        openId: "",
        unionId: "",
        refreshPage: !1,
        isClick: !1,
        popUpType: "0",
        isChecked: !1,
        uncheck: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB60lEQVRoQ+1YPUsrQRQ9lwTZkA/s/QEG0iTMgD5I5ytfobb2VtrrL9Beq9fb6issn11AhRmyTSD+AHsxCRkkYWSjgij7djY75rF4t92Zc+8958x+HELOL8p5/+AB/reCrAArkJGB72OhXq+3ZIzZBbBjrW0AqGYk7+P2ARH1AJwFQfC70Wg8ueA7KRCG4cpkMrkE0HQB9bAmLBaLv5rN5n0SVuIAEfPj8fj2tfk7Ijosl8t/6/X6IAk8zf1Op1MNgmADwDGAVQBhqVRaS1IicQCt9Z619gTAXaFQWG+1Wg9pGku7ttvtLk+n05toCCLaF0Kc/gvDZYBra+06gC0p5Z+0Dc2zXmu9Za09J6IbIcSPTAMopR6jA2uMqbXbba+2iWus3+9Xh8NhVHcgpaxlHcBGAFLKRLXmYTtuj1LKqW5iU65APpuPsFzr8gC+mX/DYwXSMuFbCVaAFcjoKbYQW4gtxN9CLx5wfRpkdMyn7a51+WPON/Npn36sACsQw4DPQzz7qa9UKjXfWVCceq8ZkZ+feq31LFYhom0hxMVXWeY9rlJqE8CFl1gl98HWx2gRwIEx5sp3RhRlQaPR6Ke19shrtBhJm+tw982buY7XF3Fw562R+CaeF3hR+3iARTEdV4cVYAUyMpB7Cz0DWOBQQItFN3oAAAAASUVORK5CYII=",
        check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACvUlEQVRoQ+2YTUhUURTHf28GByu1CKOFtCgpgoKSoKYIqabMSBgXZkgglJR90kLaFARu2jhaZIsSBiGYRRquchEEQYsa+yD7pIixRDMZ08YZzUpi4vIcBpz0XX3d0Ufv7Wbuuef8f+fce3jvaFj80SyuHxtgritoV8CugMkM/D9HKH4AFzkcAw4B64Bsk8mbvD0GvAECRGnSWvkl41+qAvFK8sjgDrBRxuk/sOlknBLtJp+NfBkCTGS+I43iE5o7ibLFqBLGAFWcBhqNMqFo/Yzm59p0vmUAHgFuRQKN3AY1P1vNAkQVXFgj4Yn1mOYnxyxAXDaaCjvNP/37mswRsgHMVMYaFVhTCOEQRFLb/vwGcLqg4irsqIYnLXDjYEqx5i/Akjw4cRvy3TAWhSv7IPTQIgCrC+F4CyxeDmPDcLkYuoJ/vSrzrwKes1BeB84M+B6Bhr3w6fGU91wdQGY2rPXAq3b4PW7caFwLobIJ3OJlFhgdgoYi6H427V51ACUXobQW3j+A62UQG5haSO4qONUGKzboNiODUL8Hep4bgqsDWJYPF4KQlQuD3dDohd4XqYLWF8PRACxaqq8J0Prd0PvSULwwUAcgvOdvg5p74FoAP0eh+TA8bZ0QpsH+8+CtBYdT/y8aBp8H+l5LiVcPICJsKoPqW+BwQDwO7Zfgrg+ONENBaVLocL8u/stbafHpARBRimqg3JcU9mMEMrOSvyN9uvj+dzMSnz4AEamiETzi22fS860X6nZB+MOMxacXQHPAyTYo8CaFDvVA3U4YCM1KfHoBRDTR68/dh5Wb9c4kxH/9OGvx6QcQEUVb3V4FHQEQx8fko7aNmhQns90GiFdh+Y96y49VLD7Y0oe61h0tik5h6eFuotVZerwu06/nysZwMjdXwmTj2gCymVJlZ1dAVWZl/doVkM2UKrs/NT3uMa/1OncAAAAASUVORK5CYII=",
        showWxPrivacyAuthor: !1
    },
    methods: {
        closeAccredit: function(e) {
            var a = this;
            return s(t().mark(function r() {
                var c, s, A, g, h, d, p, x, l;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t[n("0x19")]) {
                      case 0:
                        if (c = wx[n("0x1a")]("openid") || "", s = wx.getStorageSync(n("0x12")) || "", A = e.currentTarget[n("0x2")].agree, 
                        !a.data.wxPrivacyAuthor) {
                            t.next = 17;
                            break;
                        }
                        if (g = [ "pages/index/index2", "pages/insurance/insurance", "pages/right/right2", n("0x0"), n("0xc") ], 
                        a.data.showWxPrivacyAuthor = !0, console.log(n("0x17"), u[n("0x9")].privacyAuthorizationOps), 
                        h = u.globalData.privacyAuthorizationOps, d = h.path, p = h.query, x = "/".concat(d).concat(o.default.getAllOptions(p)), 
                        !c || !s) {
                            t[n("0x19")] = 14;
                            break;
                        }
                        return a.data.isClick = !0, t[n("0x19")] = 13, u.privacyAdd({
                            openId: c,
                            unionId: s,
                            agree: 1
                        });

                      case 13:
                        u.globalData.needAuthorization = !1;

                      case 14:
                        x = "undefined" === x ? "/".concat(g[0]) : x, console.log(n("0x11"), x), -1 !== g.indexOf(d) ? wx.switchTab({
                            url: x
                        }) : wx.reLaunch({
                            url: x
                        });

                      case 17:
                        if (!a.data.isClick) {
                            t.next = 19;
                            break;
                        }
                        return t.abrupt("return");

                      case 19:
                        if (a.data.popUpType !== n("0x18") || "1" !== A || a.data.isChecked) {
                            t.next = 22;
                            break;
                        }
                        return wx[n("0x7")]({
                            title: "请阅读并同意协议",
                            icon: n("0x15"),
                            duration: 2e3,
                            mask: !0
                        }), t.abrupt(n("0x5"));

                      case 22:
                        if (l = a.data.loginStatus, !c || !s) {
                            t.next = 39;
                            break;
                        }
                        return a.data[n("0xe")] = !0, u.globalData.isAgreePrivacy = "1" === A, t.next = 28, 
                        u.privacyAdd({
                            openId: c,
                            unionId: s,
                            agree: A
                        });

                      case 28:
                        if (A !== n("0x4")) {
                            t.next = 39;
                            break;
                        }
                        if (!l) {
                            t.next = 36;
                            break;
                        }
                        return t[n("0x19")] = 32, (0, i[n("0x8")])();

                      case 32:
                        a.data.refreshPage = !0, wx.setStorageSync("isShowAccreditWindow", !0), t.next = 39;
                        break;

                      case 36:
                        if (!wx.exitMiniProgram || "function" != typeof wx.exitMiniProgram) {
                            t.next = 39;
                            break;
                        }
                        return wx.exitMiniProgram(), t.abrupt(n("0x5"));

                      case 39:
                        a.setData({
                            show: !1,
                            isChecked: !1
                        }, function() {
                            a.data.isClick = !1, a.windowCallback();
                        });

                      case 40:
                      case n("0x10"):
                        return t.stop();
                    }
                }, r);
            }))();
        },
        checkAccredit: function() {
            var e = this;
            return s(t().mark(function a() {
                var r, i, o, c, s;
                return t().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (r = wx.getStorageSync(n("0xf")) || "", i = wx.getStorageSync("unionId") || "", 
                        !r || !i) {
                            a.next = 15;
                            break;
                        }
                        return a.next = 5, u.privacyGet({
                            openId: r
                        });

                      case 5:
                        if (o = a.sent, c = o[n("0xd")], s = o.data, 0 !== c || "0" !== s.status) {
                            a.next = 14;
                            break;
                        }
                        return u.globalData.isAgreePrivacy = !1, e[n("0x16")]({
                            show: !0,
                            popUpType: s.popUpType || "0"
                        }), e.data.openId = r, e.data.unionId = i, a.abrupt("return");

                      case 14:
                        u.globalData.isAgreePrivacy = !0;

                      case 15:
                        e.windowCallback();

                      case 16:
                      case "end":
                        return a[n("0x1b")]();
                    }
                }, a);
            }))();
        },
        goRules: function(e) {
            console.log("跳转各类规则协议", e);
            var a = e.currentTarget.dataset.type, t = {
                1: "https://hcz-static.pingan.com.cn/fin-common/umc-uni-protocol/protocol.html#/treaty",
                2: "https://hcz-static.pingan.com.cn/fin-common/umc-uni-protocol/static/pages/generalLedger.html",
                3: "/pages/h5Embed/privacy/index"
            }[a];
            +a < 3 && (t = "/pages/webview/webview?noShare=1&src=".concat(encodeURIComponent(t))), 
            4 != +a ? wx[n("0xb")]({
                url: t
            }) : wx.openPrivacyContract();
        },
        windowCallback: function() {
            var e = this.data.refreshPage;
            this[n("0xa")](n("0x1"), {
                refreshPage: e
            }), this.data.refreshPage = !1;
        },
        checkboxChange: function() {
            this.setData({
                isChecked: !this.data.isChecked
            });
        }
    },
    pageLifetimes: {
        hide: function() {
            this.data.wxPrivacyAuthor || this.setData({
                show: !1
            });
        }
    },
    observers: {
        windowProp: function(e) {
            if (!this[n("0x3")].showWxPrivacyAuthor && e === n("0x6") && !this.data.show) {
                var a = wx.getStorageSync("isShowAccreditWindow") || !1;
                if (this[n("0x3")].wxPrivacyAuthor) return void this[n("0x16")]({
                    show: !0
                });
                a ? this.windowCallback() : this.checkAccredit();
            }
        }
    }
});
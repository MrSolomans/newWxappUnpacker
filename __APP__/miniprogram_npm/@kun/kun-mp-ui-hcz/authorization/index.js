var e = require("../../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../../../@babel/runtime/helpers/asyncToGenerator"), r = s(require("../common/authorization.js")), a = require("../common/authorization-util.js"), o = s(require("../common/promise"));

function s(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var c = new r.default(), i = "userStatusIsLogin";

Component({
    properties: {
        loginParams: {
            type: Object,
            value: {
                appid: "pa-car-insureance-sr",
                sourceType: ""
            }
        },
        subscribeParamsObj: {
            type: Object,
            value: null
        },
        zIndex: {
            type: Number,
            value: 99999
        }
    },
    data: {
        needHideList: [],
        isShowToast: "",
        isChecked: !1,
        uncheck: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB60lEQVRoQ+1YPUsrQRQ9lwTZkA/s/QEG0iTMgD5I5ytfobb2VtrrL9Beq9fb6issn11AhRmyTSD+AHsxCRkkYWSjgij7djY75rF4t92Zc+8958x+HELOL8p5/+AB/reCrAArkJGB72OhXq+3ZIzZBbBjrW0AqGYk7+P2ARH1AJwFQfC70Wg8ueA7KRCG4cpkMrkE0HQB9bAmLBaLv5rN5n0SVuIAEfPj8fj2tfk7Ijosl8t/6/X6IAk8zf1Op1MNgmADwDGAVQBhqVRaS1IicQCt9Z619gTAXaFQWG+1Wg9pGku7ttvtLk+n05toCCLaF0Kc/gvDZYBra+06gC0p5Z+0Dc2zXmu9Za09J6IbIcSPTAMopR6jA2uMqbXbba+2iWus3+9Xh8NhVHcgpaxlHcBGAFLKRLXmYTtuj1LKqW5iU65APpuPsFzr8gC+mX/DYwXSMuFbCVaAFcjoKbYQW4gtxN9CLx5wfRpkdMyn7a51+WPON/Npn36sACsQw4DPQzz7qa9UKjXfWVCceq8ZkZ+feq31LFYhom0hxMVXWeY9rlJqE8CFl1gl98HWx2gRwIEx5sp3RhRlQaPR6Ke19shrtBhJm+tw982buY7XF3Fw562R+CaeF3hR+3iARTEdV4cVYAUyMpB7Cz0DWOBQQItFN3oAAAAASUVORK5CYII=",
        check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACvUlEQVRoQ+2YTUhUURTHf28GByu1CKOFtCgpgoKSoKYIqabMSBgXZkgglJR90kLaFARu2jhaZIsSBiGYRRquchEEQYsa+yD7pIixRDMZ08YZzUpi4vIcBpz0XX3d0Ufv7Wbuuef8f+fce3jvaFj80SyuHxtgritoV8CugMkM/D9HKH4AFzkcAw4B64Bsk8mbvD0GvAECRGnSWvkl41+qAvFK8sjgDrBRxuk/sOlknBLtJp+NfBkCTGS+I43iE5o7ibLFqBLGAFWcBhqNMqFo/Yzm59p0vmUAHgFuRQKN3AY1P1vNAkQVXFgj4Yn1mOYnxyxAXDaaCjvNP/37mswRsgHMVMYaFVhTCOEQRFLb/vwGcLqg4irsqIYnLXDjYEqx5i/Akjw4cRvy3TAWhSv7IPTQIgCrC+F4CyxeDmPDcLkYuoJ/vSrzrwKes1BeB84M+B6Bhr3w6fGU91wdQGY2rPXAq3b4PW7caFwLobIJ3OJlFhgdgoYi6H427V51ACUXobQW3j+A62UQG5haSO4qONUGKzboNiODUL8Hep4bgqsDWJYPF4KQlQuD3dDohd4XqYLWF8PRACxaqq8J0Prd0PvSULwwUAcgvOdvg5p74FoAP0eh+TA8bZ0QpsH+8+CtBYdT/y8aBp8H+l5LiVcPICJsKoPqW+BwQDwO7Zfgrg+ONENBaVLocL8u/stbafHpARBRimqg3JcU9mMEMrOSvyN9uvj+dzMSnz4AEamiETzi22fS860X6nZB+MOMxacXQHPAyTYo8CaFDvVA3U4YCM1KfHoBRDTR68/dh5Wb9c4kxH/9OGvx6QcQEUVb3V4FHQEQx8fko7aNmhQns90GiFdh+Y96y49VLD7Y0oe61h0tik5h6eFuotVZerwu06/nysZwMjdXwmTj2gCymVJlZ1dAVWZl/doVkM2UKrs/NT3uMa/1OncAAAAASUVORK5CYII="
    },
    lifetimes: {
        attached: function() {
            var e = this;
            a.WXUtil.clearCache(i), this.properties.subscribeParamsObj && c.getShowSubscribeConfig().then(function(t) {
                e.data.needHideList = t || [];
            });
        }
    },
    methods: {
        subscribe: function() {
            if (this.cancel(), this.properties.subscribeParamsObj) {
                var e = this.properties.loginParams.appid, t = this.data.needHideList.find(function(t) {
                    return t.appid === e;
                });
                if (console.warn("静默登录的时候，是否隐藏订阅的弹窗：", e, Boolean(t)), t) console.warn("obm配置appid：".concat(t.appid, "不展示订阅弹窗,页面名称：").concat(t.targetName)); else {
                    var n = this.properties.subscribeParamsObj, r = n.tmplIds, a = n.params, o = n.subSource, s = new Date().getTime();
                    wx.getStorageSync(o) || "" || (console.log("用户从未订阅过：绑车礼包订阅授权逻辑"), c.subscribeFunc({
                        tmplIds: r,
                        params: a
                    }).then(function() {
                        wx.setStorageSync(o, s);
                    }).catch(function() {
                        wx.setStorageSync(o, s);
                    }));
                }
            }
        },
        stopMove: function() {
            return !1;
        },
        cancel: function() {
            this.setData({
                isShowToast: ""
            });
        },
        afterLoginSuccess: function() {
            this.triggerEvent("afterLogin");
        },
        checkLogin: function() {
            var e = this;
            return n(t().mark(function n() {
                var r;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (r = !1, t.prev = 1, t.t0 = a.WXUtil.getCache(i), t.t0) {
                            t.next = 7;
                            break;
                        }
                        return t.next = 6, a.LoginUtil.checkLoginStatus();

                      case 6:
                        t.t0 = t.sent;

                      case 7:
                        if (!t.t0) {
                            t.next = 13;
                            break;
                        }
                        r = !0, console.log("checkLoginStatus检查登录态：已登录"), e.afterLoginSuccess(), t.next = 14;
                        break;

                      case 13:
                        console.log("checkLoginStatus检查登录态：未登录[1]");

                      case 14:
                        t.next = 19;
                        break;

                      case 16:
                        t.prev = 16, t.t1 = t.catch(1), console.log("checkLoginStatus检查登录态：未登录[2]", t.t1);

                      case 19:
                        return a.WXUtil.setCache(i, r), t.abrupt("return", r);

                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, n, null, [ [ 1, 16 ] ]);
            }))();
        },
        showAuthorUser: function() {
            var e = this;
            return n(t().mark(function n() {
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, c.commonAsyncFunc();

                      case 2:
                        if (a.WXUtil.getCache("userInfo")) {
                            t.next = 6;
                            break;
                        }
                        return e.setData({
                            isShowToast: "author"
                        }), t.abrupt("return");

                      case 6:
                        e.showAuthorPhone();

                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, n);
            }))();
        },
        onGetUserInfo: function(e) {
            var r = this;
            return n(t().mark(function n() {
                var a;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return o.default.showLoading({
                            title: "授权中…",
                            mask: !0
                        }), t.prev = 1, t.next = 4, c.onlyGetUserInfo(e);

                      case 4:
                        if (a = t.sent, o.default.hideLoading(), "stop" !== a && a) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return");

                      case 8:
                        r.showAuthorPhone(), t.next = 15;
                        break;

                      case 11:
                        t.prev = 11, t.t0 = t.catch(1), o.default.hideLoading(), console.warn("授权用户信息失败：", t.t0);

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, n, null, [ [ 1, 11 ] ]);
            }))();
        },
        showAuthorPhone: function() {
            var e = this;
            return n(t().mark(function n() {
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.checkLogin();

                      case 2:
                        t.sent || e.setData({
                            isShowToast: "phone"
                        });

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, n);
            }))();
        },
        onGetPhoneNumber: function(r) {
            var s = this;
            return n(t().mark(function n() {
                var u;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return o.default.showLoading({
                            title: "授权中",
                            mask: !0
                        }), t.prev = 1, t.next = 4, c.onlyGetPhoneNumber(r);

                      case 4:
                        if (u = t.sent, o.default.hideLoading(), !u) {
                            t.next = 16;
                            break;
                        }
                        if (s.cancel(), "stop" !== u && u) {
                            t.next = 10;
                            break;
                        }
                        return t.abrupt("return");

                      case 10:
                        return t.next = 12, a.LoginUtil.getRegister(e({}, s.properties.loginParams));

                      case 12:
                        a.WXUtil.setCache(i, !0), s.afterLoginSuccess(), t.next = 17;
                        break;

                      case 16:
                        console.warn("静默登录失败[2]", u);

                      case 17:
                        t.next = 23;
                        break;

                      case 19:
                        t.prev = 19, t.t0 = t.catch(1), o.default.hideLoading(), console.warn("静默登录失败[3]", t.t0);

                      case 23:
                      case "end":
                        return t.stop();
                    }
                }, n, null, [ [ 1, 19 ] ]);
            }))();
        },
        jump: function(e) {
            var t = e.currentTarget.dataset.type;
            wx.navigateTo({
                url: "/pages/webview/webview?noShare=1&src=" + encodeURIComponent({
                    1: "https://hcz-static.pingan.com.cn/fin-common/umc-uni-protocol/protocol.html#/treaty",
                    2: "https://hcz-static.pingan.com.cn/fin-common/umc-uni-protocol/static/pages/generalLedger.html"
                }[t])
            });
        },
        checkboxChange: function() {
            this.setData({
                isChecked: !this.data.isChecked
            });
        },
        showSeverWarn: function() {
            wx.showToast({
                title: "请阅读并同意协议",
                icon: "none",
                mask: !0
            });
        }
    }
});
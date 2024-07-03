var t, e, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = [ "memberAlert", "hczAccessToken", "end", "next", "sent", "giftList", "setData" ];

t = n, e = 329, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var a = function(t, e) {
    return n[t -= 0];
};

function i(t, e, r, n, a, i, o) {
    try {
        var s = t[i](o), c = s.value;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return void r(t);
    }
    s.done ? e(c) : Promise.resolve(c).then(n, a);
}

var o = getApp(), s = function(t) {
    return o.getRequestUrl("/cps/hcz-miniprogram/images/memberAlert/".concat(t, ".png"), "hczStatic");
};

Component({
    properties: {
        windowProp: {
            type: String,
            value: ""
        }
    },
    data: {
        alert_icon04: s("alert_icon04"),
        alert_bg: s("alert_bg"),
        alert_bg_b: s("alert_bg_b"),
        alert_btn_b: s("alert_btn_b"),
        alert_btn_s: s("alert_btn_s"),
        show: !1,
        giftCategoryId: "",
        giftList: [],
        month: ""
    },
    methods: {
        closeAlert: function() {
            this.data.show && o.$http({
                url: o.getRequestUrl("/uapi/cps-hcz-smallapp/indexPage/vip/closePopUp"),
                data: {},
                needLogin: !0,
                needToken: !0
            }), this[a("0x6")]({
                show: !1
            }), this.alertCallback();
        },
        getAlertInfo: function() {
            var t = this;
            return function(t) {
                return function() {
                    var e = this, r = arguments;
                    return new Promise(function(n, o) {
                        var s = t.apply(e, r);
                        function c(t) {
                            i(s, n, o, c, l, a("0x3"), t);
                        }
                        function l(t) {
                            i(s, n, o, c, l, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }(r().mark(function e() {
                var n, i;
                return r().wrap(function(e) {
                    for (;;) switch (e.prev = e[a("0x3")]) {
                      case 0:
                        return e[a("0x3")] = 2, o.$http({
                            url: o.getRequestUrl("/uapi/cps-hcz-smallapp/indexPage/vip/popUpAndGiftList"),
                            data: {},
                            needLogin: !0,
                            needToken: !0
                        });

                      case 2:
                        if (!(0 === (n = e[a("0x4")]).code && n.data && "9" === n.data.status && n.data.giftList && n.data[a("0x5")].length > 0)) {
                            e.next = 7;
                            break;
                        }
                        return i = new Date().getMonth() + 1, t.setData({
                            show: !0,
                            giftList: n.data.giftList,
                            month: i
                        }), e.abrupt("return");

                      case 7:
                        t.alertCallback();

                      case 8:
                      case a("0x2"):
                        return e.stop();
                    }
                }, e);
            }))();
        },
        alertCallback: function() {
            this.triggerEvent("callback");
        },
        goMemberGift: function() {
            wx.navigateTo({
                url: "/pages/rightMore/memberLevel/memberLevel?pageType=vipGift&giftCategoryId=10185"
            });
        }
    },
    pageLifetimes: {
        hide: function() {
            this[a("0x6")]({
                show: !1
            });
        }
    },
    observers: {
        windowProp: function(t) {
            if (t === a("0x0")) {
                if (!wx.getStorageSync(a("0x1"))) return void this.alertCallback();
                this.getAlertInfo();
            }
        }
    }
});
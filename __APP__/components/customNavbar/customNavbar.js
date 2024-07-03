var t, e, o = require("../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../@babel/runtime/helpers/typeof"), n = [ "detail", "navigationBarHeight", "#000000", "regionData", "model", "current", "selectCityCode", "stop", "navigateTo", "getRequestUrl", "height", "setSystemInfo", "getHotSearch", "selectCity", "length", "default", "getTime", "customerTrack", "selectProvince", "back", "globalData", "customHeight", "defineProperty", "POST", "return", "function", "mark", "keys", "$http", "prev", "data", "source", "#ffffff", "最终设置左上角胶囊的尺寸为：", "goNextPage", "concat", "properties", "@@iterator", "province", "toLowerCase", "fromPage", "iterator", "getUserLocation", "log", "forEach", "resolve", "from", "triggerEvent", "isArray", "wrap", "Arguments", "getMenuButtonBoundingClientRect", "setBtnSize", "call", "statusBarHeight", "request", "PACX_W00076133", "最终设置左上角胶囊的高度为：", "string", "reduce", "homePoint", "goApp", "/aops-search/hotword/searchByWeiXinMini", "cityCode", "constructor", "hotWord", "Map" ];

t = n, e = 163, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var a = function(t, e) {
    return n[t -= 0];
};

function i(t) {
    return (i = "function" == typeof Symbol && "symbol" == r(Symbol[a("0xc")]) ? function(t) {
        return r(t);
    } : function(t) {
        return t && a("0x3f") == ("undefined" == typeof Symbol ? "undefined" : r(Symbol)) && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t);
    })(t);
}

var c = require("../../utils/pathManage.js"), s = require("../../utils/smallTool.js");

function u(t, e) {
    var o = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), o.push.apply(o, r);
    }
    return o;
}

function l(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? u(Object(o), !0).forEach(function(e) {
            g(t, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : u(Object(o))[a("0xf")](function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
        });
    }
    return t;
}

function g(t, e, o) {
    return (e = function(t) {
        var e = function(t, e) {
            if ("object" != i(t) || !t) return t;
            var o = t[Symbol.toPrimitive];
            if (void 0 !== o) {
                var r = o.call(t, e || a("0x35"));
                if ("object" != i(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
        }(t, "string");
        return "symbol" == i(e) ? e : e + "";
    }(e)) in t ? Object[a("0x3c")](t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

function h(t, e, o, r, n, i, c) {
    try {
        var s = t[i](c), u = s.value;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return void o(t);
    }
    s.done ? e(u) : Promise[a("0x10")](u).then(r, n);
}

function p(t) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(r, n) {
            var a = t.apply(e, o);
            function i(t) {
                h(a, r, n, i, c, "next", t);
            }
            function c(t) {
                h(a, r, n, i, c, "throw", t);
            }
            i(void 0);
        });
    };
}

function f(t, e) {
    return function(t) {
        if (Array[a("0x13")](t)) return t;
    }(t) || function(t, e) {
        var o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t[a("0x8")];
        if (null != o) {
            var r, n, i, c, s = [], u = !0, l = !1;
            try {
                if (i = (o = o.call(t)).next, 0 === e) {
                    if (Object(o) !== o) return;
                    u = !1;
                } else for (;!(u = (r = i[a("0x18")](o)).done) && (s.push(r.value), s.length !== e); u = !0) ;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                l = !0, n = t;
            } finally {
                try {
                    if (!u && null != o.return && (c = o[a("0x3e")](), Object(c) !== c)) return;
                } finally {
                    if (l) throw n;
                }
            }
            return s;
        }
    }(t, e) || function(t, e) {
        if (t) {
            if (a("0x1d") == r(t)) return y(t, e);
            var o = {}.toString.call(t).slice(8, -1);
            return "Object" === o && t[a("0x23")] && (o = t.constructor.name), a("0x25") === o || "Set" === o ? Array[a("0x11")](t) : a("0x15") === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? y(t, e) : void 0;
        }
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function y(t, e) {
    (null == e || e > t.length) && (e = t[a("0x34")]);
    for (var o = 0, r = Array(e); o < e; o++) r[o] = t[o];
    return r;
}

var d = getApp(), v = require("../../utils/datatist.js"), m = require("../../utils/handleTime.js"), x = wx.getSystemInfoSync(), S = x[a("0x2a")], b = "ios" === x.platform || S[a("0xa")]().includes("iphone"), w = d.getRequestUrl("/cps/hcz-miniprogram/images/homePage/home-banner.png", "hczStatic"), B = function(t) {
    var e = wx.getSystemInfoSync(), o = e.platform, r = e.statusBarHeight, n = t.globalData.phoneSystem, a = 0;
    return ("number" != typeof (a = "ios" === o || "ios" === n ? r + 4 : r + 8) || isNaN(a)) && (a = 4), 
    a;
}, C = function(t, e) {
    return d[a("0x2f")]("/cps/hcz-miniprogram/images/"[a("0x6")](t, "/").concat(e), "hczStatic");
};

Component({
    properties: {
        backToAuthor: {
            type: Boolean,
            value: !1
        },
        iconColor: {
            type: String,
            value: "black"
        },
        titleText: {
            type: String,
            value: "平安好车主"
        },
        back: {
            type: Boolean,
            value: !0
        },
        goBackUrl: {
            type: String,
            value: ""
        },
        home: {
            type: Boolean,
            value: !0
        },
        bgColor: {
            type: String,
            value: "#fff"
        },
        isNeedBlackBg: {
            type: Boolean,
            value: !1
        },
        textColor: {
            type: String,
            value: "#000"
        },
        homePath: {
            type: String,
            value: "/pages/index/index2"
        },
        backPath: {
            type: String,
            value: ""
        },
        backPoint: {
            type: Object,
            value: {}
        },
        homePoint: {
            type: Object,
            value: {}
        },
        otherConColor: {
            type: String,
            value: ""
        },
        needBarHeight: {
            type: Boolean,
            value: !0
        },
        goApp: {
            type: String,
            value: ""
        },
        isFixed: {
            type: Boolean,
            value: !1
        },
        isAbsolute: {
            type: Boolean,
            value: !0
        },
        transitionType: {
            type: String,
            value: ""
        },
        isShowSearch: {
            type: Boolean,
            value: !1
        },
        fromPage: {
            type: String,
            value: ""
        },
        trackSource: {
            type: String,
            value: ""
        },
        inputBgColor: {
            type: String,
            value: "#ffffff"
        },
        navigationBarHave: {
            type: Boolean,
            value: !1
        },
        topBgImg: {
            type: String,
            value: ""
        },
        titleSize: {
            type: String,
            value: "37rpx"
        },
        showBackToast: {
            type: Boolean,
            value: !1
        },
        showCarInfo: {
            type: Boolean,
            value: !1
        },
        plateNum: {
            type: String,
            value: ""
        },
        carLogo: {
            type: String,
            value: ""
        },
        source: {
            type: String,
            value: ""
        },
        navScrollBgColor: {
            type: String,
            value: ""
        },
        isGetLocation: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        topBanner: w,
        homePageScrollColor: "",
        statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
        navigationBarHeight: d[a("0x3a")].customNavHeight,
        menuButtonBoundingClientRec: {},
        customWidth: b ? 88 : 96,
        customHeight: 32,
        customTop: B(d),
        onlyOneWidth: 64,
        isAndroid: !b,
        returnAppUrl: "",
        portalSourceConfig: {
            "首页": 1,
            "保险": 2,
            "发现": 3
        },
        searchValueList: "",
        currentValue: "",
        getHotSearchTimer: null,
        arrowDown: C("homePage", "arrow-down.png"),
        addCarIcon: C("homePage", "icon-add-car.png"),
        regionData: {
            province: "",
            cityName: "",
            district: "",
            longitude: NaN,
            latitude: NaN,
            cityCode: NaN,
            isReject: !1,
            selectCity: ""
        }
    },
    methods: {
        backHome: function(t) {
            var e = this;
            if (this.properties.showBackToast) this.triggerEvent("showBackDialog"); else {
                var o = this.properties.homePath;
                d.goNewMainPages(o, function() {
                    setTimeout(function() {
                        var o = e.properties, r = o[a("0x1f")], n = o.backPoint;
                        r.point && "back" !== t ? v.customerTrack(r.point, r.options, null) : "back" === t && v.customerTrack(n.point, n.options, null);
                    }, 30);
                });
            }
        },
        back: function() {
            var t = this, e = getCurrentPages(), o = this.properties, r = o.goBackUrl, n = o.showBackToast;
            o.backToAuthor ? this.triggerEvent("backToAuthor") : n ? this[a("0x12")]("showBackDialog") : r ? d.goNewMainPages(r) : 1 === e.length ? this.backHome(a("0x39")) : wx.navigateBack({
                delta: 1,
                success: function() {
                    var e = t[a("0x7")].backPoint;
                    e && e.point && v.customerTrack(e.point, e.options, null);
                }
            });
        },
        setBtnSize: function() {
            var t = this.data, e = t.customTop, o = t[a("0x3b")];
            e = B(d);
            var r = wx.getMenuButtonBoundingClientRect;
            if (wx.canIUse(a("0x16")) && "function" == typeof r && r()) {
                var n = r();
                e = n.top, o = n[a("0x30")];
            }
            e !== this.data.customTop ? (console.log(a("0x4"), e), console.log(a("0x1c"), o), 
            this.setData({
                customTop: e,
                customHeight: o
            })) : this.setData({
                customHeight: o
            });
        },
        setSystemInfo: function() {
            var t = wx.getSystemInfoSync(), e = t.statusBarHeight, o = t.version, r = {}, n = ((0, 
            s.compareVersion)(o, "6.6.0") >= 0 ? e + 43 : 0) + "px";
            n !== this.data.navigationBarHeight && (r.navigationBarHeight = n), e !== this.data[a("0x19")] && (r.statusBarHeight = e), 
            (r[a("0x27")] || r.statusBarHeight) && this.setData(r);
            var i = wx.getMenuButtonBoundingClientRect;
            if (wx.canIUse("getMenuButtonBoundingClientRect") && i && "function" == typeof i && i()) {
                var c = i(), u = this.properties.goBackUrl, l = c.left - (u ? 50 : 28), g = u ? 45 : 14;
                this.setData({
                    searchTop: c.top - this.data.statusBarHeight,
                    searchHeight: c.height,
                    searchRight: l,
                    searchLeft: g,
                    swiperLeft: 24
                });
            }
            this[a("0x17")]();
        },
        goAppSuccess: function() {
            console[a("0xe")]("成功返回APP，并打开页面：", this[a("0x7")].goApp, " returnAppUrl参数为：", this.data.returnAppUrl);
        },
        goAppFail: function(t) {
            console.warn("返回APP失败，错误: ", t), console.log("returnAppUrl参数为：", this.data.returnAppUrl);
        },
        setKeyWord: function(t) {
            var e = t[a("0x26")][a("0x2b")];
            if (e || 0 === e) {
                var o = this.data.searchValueList, r = ((void 0 === o ? [] : o)[e] || {}).hotWord;
                this.setData({
                    currentValue: r || ""
                });
            }
        },
        goToSearch: function() {
            var t = this;
            console[a("0xe")]("-------点击搜索框-----"), this.data.getHotSearchTimer && clearTimeout(this[a("0x1")].getHotSearchTimer), 
            this.data.getHotSearchTimer = setTimeout(function() {
                console[a("0xe")]("--0.5s后 真正执行请求--"), t[a("0x32")]().then(function() {
                    var e = t.data.currentValue, o = {
                        from: t[a("0x1")][a("0xb")],
                        source: t[a("0x1")].trackSource,
                        searchKeyWords: e
                    }, r = Object.entries(o)[a("0x1e")](function(t, e) {
                        var o = f(e, 2), r = o[0], n = o[1];
                        return n && (t += "&".concat(r, "=").concat(n)), t;
                    }, "/pages/webview/webview?pageType=globalSearch");
                    (0, c[a("0x5")])(r, a("0x2e")).then(function() {
                        console.log("触发埋点了PACX_W00076133,source为:", t.data.trackSource), v[a("0x37")](a("0x1b"), {
                            source: t[a("0x1")].trackSource || ""
                        }, null), setTimeout(function() {
                            v.customerTrack("PACX_W00076806", {
                                portalsource: t.data[a("0xb")] || ""
                            }, null);
                        }, 100), setTimeout(function() {
                            v.customerTrack("PACX_W00076809", {
                                portalsource: t.data.fromPage || "",
                                keywords: e
                            }, null);
                        }, 200);
                    });
                }).catch(function(t) {
                    console.warn("打开搜索页面错误：", t);
                });
            }, 500);
        },
        getHotSearch: function() {
            var t = this, e = wx.getStorageSync("cityName") || "", o = this.data.portalSourceConfig[this[a("0x1")].fromPage];
            return this[a("0x42")]({
                path: d.getRequestUrl(a("0x21"), "static"),
                params: {
                    city: e,
                    portalSource: o
                },
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function(e) {
                if (e && "00" === e.code && e.data) {
                    var o = e.data.hotword || [], r = {
                        searchValueList: o,
                        currentValue: (o[0] || {
                            hotWord: ""
                        }).hotWord
                    };
                    t.setData(r), wx.setStorageSync(a("0x24"), r), wx.setStorageSync("hotWordSetTime", m[a("0x36")]());
                }
            }).catch(function(t) {
                console.warn("err", t);
            });
        },
        setSelectCity: function() {
            var t = this;
            return p(o().mark(function e() {
                var r, n, i, s, u, l;
                return o().wrap(function(e) {
                    for (;;) switch (e[a("0x0")] = e.next) {
                      case 0:
                        r = t.data[a("0x29")], n = r.cityName, i = r.isReject, s = r[a("0x33")], u = i ? 2 : 0, 
                        l = "/pages/cityList/index?locationCity=".concat(i ? "" : n, "&city=").concat(s, "&locationStatue=").concat(u, "&source=").concat(t.data[a("0x2")]), 
                        (0, c.goNextPage)(l, "navigateTo");

                      case 5:
                      case "end":
                        return e[a("0x2d")]();
                    }
                }, e);
            }))();
        },
        getUserLocation: function() {
            var t = this;
            return p(o()[a("0x40")](function e() {
                var r, n, i, c, s, u, l, g, h, p, f, y, v, m, x, S, b, w, B, C;
                return o()[a("0x14")](function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = wx.getStorageSync(a("0x38")) || "", n = wx.getStorageSync("selectCity") || "", 
                        i = wx.getStorageSync("selectLon") || "", c = wx.getStorageSync("selectLat") || "", 
                        s = wx.getStorageSync(a("0x2c")) || "", e.next = 7, d.getLocationInfo(a("0x26"), null, !1, !0);

                      case 7:
                        u = e.sent, l = u[a("0x9")], g = void 0 === l ? "北京市" : l, h = u.city, p = void 0 === h ? "北京市" : h, 
                        f = u.district, y = void 0 === f ? "东城区" : f, v = u.longitude, m = void 0 === v ? 116.407387 : v, 
                        x = u.latitude, S = void 0 === x ? 39.904179 : x, b = u[a("0x22")], w = void 0 === b ? 110100 : b, 
                        B = !(!u.code || -3 === u.code) || 0 === Object[a("0x41")](u).length, C = p.split("市")[0], 
                        t.setData({
                            regionData: {
                                isReject: B,
                                province: g,
                                cityName: C,
                                district: y,
                                longitude: m,
                                latitude: S,
                                cityCode: w,
                                selectCity: n || C,
                                selectProvince: r || g,
                                lon: i || m,
                                lat: c || S,
                                selectCityCode: s || w
                            }
                        }), t.triggerEvent("region", {
                            regionData: t.data.regionData
                        }), console.warn("用户定位信息 ===>", t[a("0x1")].regionData);

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        $http: function(t) {
            var e = t.path, o = t.params, r = void 0 === o ? {} : o, n = t.header, i = void 0 === n ? {
                "Content-Type": "application/json"
            } : n;
            return new Promise(function(t, o) {
                wx[a("0x1a")]({
                    url: e,
                    header: i,
                    data: l({
                        "X-PA-NONCESTR": "1"
                    }, r),
                    method: a("0x3d"),
                    success: function(e) {
                        t(e.data);
                    },
                    fail: function(t) {
                        o(t);
                    }
                });
            });
        },
        checkBindCar: function() {
            !this[a("0x1")].plateNum && this.triggerEvent("goBindCar");
        },
        initShow: function() {
            this[a("0x7")].isGetLocation && this[a("0xd")](), this[a("0x31")]();
            var t = this.properties[a("0x20")];
            if (t && this.setData({
                returnAppUrl: "carowner://?url=".concat(encodeURIComponent(t))
            }), this.properties.isShowSearch) {
                var e = wx.getStorageSync("hotWord"), o = wx.getStorageSync("hotWordSetTime"), r = m.DateAddFormat(o, "h", 4, "yyyy-mm-dd hh:mm:ss");
                o && e && new Date(m.getTime()) < new Date(r) ? this.setData(e) : this.getHotSearch();
            }
        }
    },
    pageLifetimes: {
        show: function() {
            this.initShow();
        }
    },
    observers: {
        iconColor: function(t) {
            var e = [ this.properties, this.data ], o = e[0], r = o.iconColor, n = o.bgColor, i = e[1].frontColor, c = a("white" === t ? "0x3" : "0x28");
            i && t === i || (wx.setNavigationBarColor({
                backgroundColor: n,
                frontColor: c
            }), this[a("0x1")].frontColor = r);
        },
        isGetLocation: function(t) {
            t && this.getUserLocation();
        }
    }
});
var e = n(require("../behaviors/detect")), t = n(require("../behaviors/montior"));

n(require("../common/componentMap"));

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = wx.getSystemInfoSync(), i = a.model, o = "ios" === a.platform || i.toLowerCase().includes("iphone"), r = function() {
    var e = wx.getSystemInfoSync(), t = e.platform, n = e.statusBarHeight, a = 0;
    return ("number" != typeof (a = "ios" === t ? n + 4 : n + 8) || isNaN(a)) && (a = 4), 
    a;
}, s = function(e) {
    return "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/".concat(e);
};

Component({
    behaviors: [ t.default, e.default ],
    them: {
        type: String,
        value: "hcz-them"
    },
    properties: {
        navType: {
            type: String,
            value: "default"
        },
        iconColor: {
            type: String,
            value: "black"
        },
        titleText: {
            type: null,
            value: "",
            observer: function(e) {
                this.setData({
                    titleType: "string" == typeof e ? "string" : "array"
                });
            }
        },
        titleScreening: {
            type: Object,
            value: {},
            observer: function(e) {
                e.content && e.content.length > 0 && this.setData({
                    screeningList: e.content
                });
            }
        },
        subTitle: {
            type: String,
            value: ""
        },
        back: {
            type: Boolean,
            value: !1
        },
        home: {
            type: Boolean,
            value: !1
        },
        bgColor: {
            type: String,
            value: "#fff"
        },
        textColor: {
            type: String,
            value: "#000"
        },
        isNeedBlackBg: {
            type: Boolean,
            value: !1
        },
        homePath: {
            type: String,
            value: "/pages/index/index"
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
        isAbsolute: {
            type: Boolean,
            value: !1
        },
        transitionType: {
            type: String,
            value: ""
        },
        navigationBarHave: {
            type: Boolean,
            value: !1
        },
        topBgImg: {
            type: String,
            value: ""
        },
        searchHotWordList: {
            type: Array,
            value: []
        },
        searchPath: {
            type: String,
            value: ""
        },
        region: {
            type: Object,
            value: {
                type: "out",
                show: !1
            }
        },
        needWeather: {
            type: Boolean,
            value: !1
        },
        them: {
            type: String,
            value: "hcz-them",
            option: [ "hcz-them", "hbs-them", "qyb-them", "yh-them", "hsh-them", "cbw-them" ]
        },
        disable: {
            type: Boolean,
            value: !1
        },
        trackSource: {
            type: String,
            value: ""
        },
        goBackUrl: {
            type: String,
            value: ""
        },
        defaultSearchTxt: {
            type: String,
            value: "平安好车主"
        },
        className: {
            type: String
        }
    },
    data: {
        titleIndex: 0,
        titleType: "string",
        screeningShow: !1,
        screeningIndex: NaN,
        screeningList: [],
        screeningRadioLock: !1,
        statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
        navigationBarHeight: 0,
        menuButtonBoundingClientRec: {},
        customWidth: o ? 44 : 48,
        customHeight: 32,
        customTop: r(),
        onlyOneWidth: 32,
        isAndroid: !o,
        returnAppUrl: "",
        getHotSearchTimer: null,
        regionList: [ "广东省", "深圳市", "福田区" ],
        regionCity: {
            value: "深圳市",
            postcode: "518033",
            code: "440300"
        },
        weatherList: {
            name: "小雨",
            temperature: "12/24"
        },
        titleArrow: s("kun-ui/icon-title-arrow.png"),
        regionArrow: s("icon/icon-down-arrow.png"),
        searchValue: "",
        searchFocus: !1,
        componentId: "PACX_SEARCH",
        componentName: "搜索栏"
    },
    methods: {
        onBackHomeTap: function(e) {
            var t = this, n = this.properties.homePath;
            wx.reLaunch({
                url: n,
                success: function() {
                    "back" !== e ? t.triggerEvent("onBackHomeTap") : "back" === e && t.triggerEvent("onBackTap");
                }
            });
        },
        onBackTap: function() {
            var e = this;
            1 === getCurrentPages().length ? this.onBackHomeTap("back") : wx.navigateBack({
                delta: 1,
                success: function() {
                    e.triggerEvent("onBackTap");
                }
            });
        },
        setBtnSize: function() {
            var e = this.data, t = e.customTop, n = e.customHeight;
            t = r();
            var a = wx.getMenuButtonBoundingClientRect;
            if (wx.canIUse("getMenuButtonBoundingClientRect") && "function" == typeof a && a()) {
                var i = a();
                t = i.top, n = i.height;
            }
            t !== this.data.customTop ? (console.log("最终设置左上角胶囊的尺寸为：", t), console.log("最终设置左上角胶囊的高度为：", n), 
            this.setData({
                customTop: t,
                customHeight: n
            })) : this.setData({
                customHeight: n
            });
        },
        setSystemInfo: function() {
            var e = wx.getSystemInfoSync(), t = e.statusBarHeight, n = e.version, a = {}, i = (this.compareVersion(n, "6.6.0") >= 0 ? t + 43 : 0) + "px";
            i !== this.data.navigationBarHeight && (a.navigationBarHeight = i), t !== this.data.statusBarHeight && (a.statusBarHeight = t), 
            (a.navigationBarHeight || a.statusBarHeight) && this.setData(a);
            var o = wx.getMenuButtonBoundingClientRect;
            if (wx.canIUse("getMenuButtonBoundingClientRect") && o && "function" == typeof o && o()) {
                var r = o(), s = 270, c = this.properties.goBackUrl, h = r.left - (c ? 50 : 28), u = c ? 45 : 14, g = this.properties, l = g.back, p = g.home, d = g.needRegion;
                l || p ? (s = 230, p && l && (s = 175)) : d && (s = 200), this.setData({
                    searchTop: r.top - this.data.statusBarHeight,
                    searchHeight: r.height - 2,
                    searchWidth: s,
                    searchLeft: u,
                    searchRight: h,
                    swiperLeft: 24
                });
            }
            this.setBtnSize();
        },
        onGoAppSuccess: function() {
            console.log("成功返回APP，并打开页面：", this.properties.goApp, " returnAppUrl参数为：", this.data.returnAppUrl);
        },
        onGoAppFail: function(e) {
            console.warn("返回APP失败，错误: ", e), console.log("returnAppUrl参数为：", this.data.returnAppUrl);
        },
        bindConfirm: function() {
            this.triggerEvent("onGoToSearch", {
                searchValue: this.data.searchValue
            });
        },
        onGoToSearch: function() {
            console.log("搜索组件的点击事件"), this.data.getHotSearchTimer && clearTimeout(this.data.getHotSearchTimer);
            var e = this.properties.searchPath;
            if (e) {
                var t = e + e.indexOf("?") > -1 ? "&searchKeyWords=" : "?searchKeyWords=" + this.data.currentValue;
                this.data.getHotSearchTimer = setTimeout(function() {
                    wx.navigateTo({
                        url: t,
                        success: function() {}
                    });
                }, 500);
            } else this.triggerEvent("onGoToSearch", {
                currentValue: this.data.currentValue
            });
        },
        compareVersion: function(e, t) {
            e = e.split("."), t = t.split(".");
            for (var n = Math.max(e.length, t.length); e.length < n; ) e.push("0");
            for (;t.length < n; ) t.push("0");
            for (var a = 0; a < n; a++) {
                var i = parseInt(e[a]), o = parseInt(t[a]);
                if (i > o) return 1;
                if (i < o) return -1;
            }
            return 0;
        },
        intSearch: function() {
            if (this.triggerEvent("intSearch"), this.properties.isShowSearch) {
                var e = wx.getStorageSync("hotWord"), t = wx.getStorageSync("hotWordSetTime"), n = handleTime.DateAddFormat(t, "h", 4, "yyyy-mm-dd hh:mm:ss");
                t && e && (new Date(handleTime.getTime()), new Date(n));
            }
        },
        changeRegion: function(e) {
            var t = e.detail, n = t.code, a = t.postcode, i = t.value;
            this.setData({
                regionCity: {
                    code: n[1],
                    postcode: a,
                    value: i[1]
                }
            }), this.triggerEvent("region", this.data.regionCity);
        },
        getLocation: function() {
            wx.getLocation({
                type: "wgs84",
                success: function(e) {
                    var t = e.latitude, n = e.longitude;
                    console.log("经度", t), console.log("纬度", n), wx.request({
                        url: "https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(t, ",").concat(n, "&key=").concat(""),
                        success: function(e) {
                            if (e && e.data.result) {
                                var t = e.data.result.address;
                                console.log("通过经纬度得到的地址信息", t);
                            }
                        }
                    });
                }
            });
        },
        bindInput: function(e) {
            this.setData({
                searchValue: e.detail.value
            });
        },
        bindFocus: function() {
            this.setData({
                searchFocus: !1
            }), this.onGoToSearch();
        },
        searchCancel: function() {
            this.setData({
                searchFocus: !1,
                searchValue: ""
            });
        },
        clearValue: function() {
            this.setData({
                searchValue: ""
            });
        },
        changeTitle: function(e) {
            var t = e.currentTarget.dataset.index;
            this.setData({
                titleIndex: t
            }), this.triggerEvent("title");
        },
        selectScreening: function(e) {
            var t = this, n = e.currentTarget.dataset, a = n.index, i = n.item, o = this.data.titleScreening.type;
            if ("radio" === o) {
                if (this.data.screeningRadioLock) return;
                this.data.screeningRadioLock = !0, this.setData({
                    screeningIndex: a
                }), this.triggerEvent("screening", i), setTimeout(function() {
                    t.changeTitleScreening(), t.data.screeningRadioLock = !1;
                }, 200);
            } else if ("select" === o) {
                var r = this.data.screeningList.map(function(e, t) {
                    return a === t && (e.checked = !e.checked), e;
                });
                this.setData({
                    screeningList: r
                });
            }
        },
        changeTitleScreening: function() {
            var e = this.data.titleScreening;
            0 !== Object.keys(e).length && this.setData({
                screeningShow: !this.data.screeningShow
            });
        },
        screeningConfirm: function() {
            var e = this.data.screeningList.filter(function(e) {
                return e.checked;
            });
            this.triggerEvent("screening", e), this.changeTitleScreening();
        }
    },
    pageLifetimes: {
        show: function() {
            this.setSystemInfo();
            var e = this.properties.goApp;
            e && this.setData({
                returnAppUrl: "carowner://?url=".concat(encodeURIComponent(e))
            });
        }
    },
    lifetimes: {
        ready: function() {
            this.setSystemInfo(), this.intSearch();
        }
    },
    observers: {
        iconColor: function(e) {
            var t = [ this.properties, this.data ], n = t[0], a = n.iconColor, i = n.bgColor, o = t[1].frontColor, r = "white" === e ? "#ffffff" : "#000000";
            o && e === o || (wx.setNavigationBarColor({
                backgroundColor: i,
                frontColor: r
            }), this.data.frontColor = a);
        },
        needRegion: function(e) {
            if (e) {
                var t = this;
                wx.getSetting({
                    success: function(e) {
                        var n = "scope.userLocation";
                        e.authSetting[n] ? t.getLocation() : wx.authorize({
                            scope: n,
                            success: function() {
                                t.getLocation();
                            }
                        });
                    }
                });
            }
        },
        needWeather: function(e) {}
    }
});
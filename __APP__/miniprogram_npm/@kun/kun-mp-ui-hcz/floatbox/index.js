var t = require("../../../../@babel/runtime/helpers/defineProperty"), e = require("../common/authorization-util.js"), a = getApp();

Component({
    behaviors: [ e.mixing ],
    properties: {
        bannerList: {
            type: Array
        },
        showPage: {
            type: String,
            value: ""
        },
        width: {
            type: Number,
            value: 250
        },
        height: {
            type: Number,
            value: 150
        },
        isCircle: {
            type: Boolean,
            value: !1
        },
        closeWidth: {
            type: Number,
            value: 60
        },
        loginParams: {
            type: Object,
            value: {
                appid: "wx-xcx-yun-fuq",
                sourceType: "1000"
            }
        },
        subscribeParams: {
            type: Object
        }
    },
    observers: {
        bannerList: function(t) {
            console.log("bannerList observers data=", t, "index=", this.data.floatBoxIndex), 
            this.setData({
                floatBoxIndex: 0
            });
        }
    },
    data: {
        windowWidth: 0,
        windowHeight: 0,
        elemW: 0,
        elemH: 0,
        statusBarHeight: a.globalData.statusBarHeight,
        floatBoxIndex: -1,
        lastLeft: "",
        lastTop: "",
        funcControl: !0,
        floatBoxCidArr: ""
    },
    ready: function() {
        this.setData({
            elemW: this.properties.width / 2,
            elemH: this.properties.height / 2,
            floatBoxIndex: 0,
            floatBoxCidArr: wx.getStorageSync("".concat(this.properties.showPage, "floatBoxCidArr")) || []
        });
    },
    methods: {
        needLogin: function(t) {
            this.triggerEvent("loginAfter"), this.enterBanner(t);
        },
        enterBanner: function(t) {
            var e = void 0 !== t.url ? t.url : t.currentTarget.dataset.url;
            this.triggerEvent("trackPoint", {
                idx: this.data.floatBoxIndex,
                type: "click",
                floatBoxCidArr: this.data.floatBoxCidArr
            }), e && -1 !== e.indexOf("/pages") ? wx.navigateTo({
                url: e
            }) : console.warn("所配置的跳转链接不符合要求");
        },
        closeFloatBox: function() {
            var e = this;
            if (this.data.funcControl) {
                this.triggerEvent("trackPoint", {
                    idx: this.data.floatBoxIndex,
                    type: "close",
                    floatBoxCidArr: this.data.floatBoxCidArr
                }), this.data.funcControl = !1;
                var a = this.createSelectorQuery();
                a.select(".movable").boundingClientRect(), a.selectViewport().scrollOffset(), a.exec(function(a) {
                    var o;
                    a && (e.setData((t(o = {}, "bannerList[" + e.data.floatBoxIndex + "].hide", !0), 
                    t(o, "lastLeft", a[0].left), t(o, "lastTop", a[0].top), o)), e.data.floatBoxCidArr.push(e.data.bannerList[e.data.floatBoxIndex].configId), 
                    wx.setStorageSync("".concat(e.properties.showPage, "floatBoxCidArr"), e.data.floatBoxCidArr), 
                    setTimeout(function() {
                        e.setData({
                            floatBoxIndex: e.data.floatBoxIndex + 1
                        }, function() {
                            e.data.floatBoxIndex <= e.data.bannerList.length - 1 && e.triggerEvent("trackPoint", {
                                idx: e.data.floatBoxIndex,
                                type: "show"
                            }), e.data.funcControl = !0;
                        });
                    }, 450));
                });
            }
        }
    },
    pageLifetimes: {
        show: function() {
            var t = wx.getSystemInfoSync(), e = t.windowWidth, a = t.windowHeight;
            this.setData({
                windowWidth: e,
                windowHeight: a
            });
        }
    }
});
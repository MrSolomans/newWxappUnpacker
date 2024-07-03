var t, e, n = [ "environment", "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/appInvitation/", "setData", "triggerEvent", "globalData" ];

t = n, e = 151, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var o = function(t, e) {
    return n[t -= 0];
}, i = getApp(), a = i && i[o("0x3")] && 0 === i[o("0x3")][o("0x4")] ? "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/appInvitation/" : o("0x0");

Component({
    properties: {
        isShowTable: {
            type: Boolean,
            value: !1
        },
        isShowMovable: {
            type: Boolean,
            value: !0
        },
        isShowCollect: {
            type: Boolean,
            value: !0
        },
        appParameter: {
            type: String,
            value: ""
        },
        needShowOther: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        windowWidth: 0,
        windowHeight: 0,
        imgOrigin: a,
        statusBarHeight: i.globalData.statusBarHeight
    },
    methods: {
        openSharePop: function() {
            this.triggerEvent("openSharePop");
        },
        openAppRightBtn: function() {
            this.triggerEvent("openAppRightBtn");
        },
        openApp: function() {
            this.triggerEvent("openApp");
        },
        toDownload: function() {
            this[o("0x2")]("toDownload");
        },
        toCollect: function() {
            this[o("0x2")]("toCollect");
        }
    },
    pageLifetimes: {
        show: function() {
            var t = wx.getSystemInfoSync(), e = t.windowWidth, n = t.windowHeight;
            this[o("0x1")]({
                windowWidth: e,
                windowHeight: n
            });
        }
    }
});
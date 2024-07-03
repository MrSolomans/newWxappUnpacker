var e, t, i = [ "customNavHeight", "Public_Name", "includes" ];

e = i, t = 496, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return i[e -= 0];
}, r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/datatist.js"));

var n = getApp(), o = n && n.globalData && 0 === n.globalData.environment ? "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/shareCircle/" : "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/shareCircle/", s = o + "shareCircle.png", c = o + "shareClose.png", l = o + "shareArrow.png", g = wx.getSystemInfoSync(), u = g.model, h = "ios" === g.platform || u.toLowerCase().includes("iphone");

Component({
    properties: {
        Public_Name: {
            type: String,
            value: ""
        }
    },
    data: {
        isShowCircle: !1,
        topHeight: n.globalData[a("0x2")],
        circleIcon: s,
        closeIcon: c,
        arrowIcon: l,
        isIos: h
    },
    methods: {
        closeBox: function() {
            this.setData({
                isShowCircle: !1
            }), r.default.customerTrack("PACX_W00074905", {
                Public_Name: this.properties[a("0x0")]
            }, null);
        }
    },
    pageLifetimes: {
        show: function() {
            var e = getCurrentPages(), t = e[e.length - 1];
            if ([ "pages/insurance/insurance2", "pages/index/index2", "pages/right/right2" ][a("0x1")](t.route)) {
                var i = wx.getStorageSync("openid"), n = wx.getStorageSync("collectionCount"), o = wx.getStorageSync("startDurationStamp");
                if (!o && !n && i) return;
                var s = new Date(o).toDateString() === new Date().toDateString();
                if ((1 !== n || !s) && i) return;
            }
            "" === wx.getStorageSync("isShowCircle") ? (r.default.customerTrack("PACX_W00074902", {
                Public_Name: this.properties.Public_Name
            }, null), this.setData({
                isShowCircle: !0
            }, function() {
                wx.setStorageSync("isShowCircle", !1);
            })) : this.setData({
                isShowCircle: !1
            });
        }
    }
});
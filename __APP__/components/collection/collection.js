var t, e, o = [ "closeCollectionTip", "getStorageSync", "getCollectionTabShow", "endDurationStamp", "now", "setStorageSync", "collectionCount", "manualCloseCollect", "setCollectionTabUrl", "点这里，添加到我的小程序", "openCollectionTip", "startDurationStamp", "collectionCurrentPage" ];

t = o, e = 346, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var i = function(t, e) {
    return o[t -= 0];
};

Component({
    properties: {
        navigationBarHeight: {
            type: String,
            value: ""
        }
    },
    data: {
        textTip: i("0x1"),
        durationTime: 3e4,
        isShowTip: !1
    },
    pageLifetimes: {
        show: function() {
            var t = this;
            if (wx[i("0x6")]("openid")) {
                var e = wx.getStorageSync("collectionCount"), o = wx.getStorageSync(i("0x3"));
                if (o || e) {
                    var n = new Date(o).toDateString() === new Date().toDateString();
                    1 == e && n ? this[i("0x7")]() : (this[i("0x0")](), wx.setStorageSync(i("0xb"), 1), 
                    wx[i("0xa")]("startDurationStamp", Date[i("0x9")]()), this.openCollectionTip());
                } else this.setCollectionTabUrl(), wx.setStorageSync("collectionCount", 1), wx[i("0xa")]("startDurationStamp", Date.now()), 
                this.openCollectionTip();
                setTimeout(function() {
                    t[i("0x5")]();
                }, this.data.durationTime);
            }
        }
    },
    lifetimes: {
        attached: function() {
            wx.setStorageSync(i("0x8"), Date[i("0x9")]());
        }
    },
    methods: {
        setCollectionTabUrl: function() {
            var t = getCurrentPages(), e = t[t.length - 1];
            wx.setStorageSync("collectionCurrentPage", e.route);
        },
        getCollectionTabShow: function() {
            var t = wx.getStorageSync(i("0x4")), e = getCurrentPages();
            e[e.length - 1].route === t ? this.setCollectionDurationTime() : this.setData({
                isShowTip: !1
            });
        },
        setCollectionDurationTime: function() {
            var t = wx[i("0x6")]("endDurationStamp"), e = wx.getStorageSync("startDurationStamp");
            if (wx.getStorageSync("manualCloseCollect")) this.setData({
                isShowTip: !1
            }); else if (e && Date.now() - e > 3e4) this.closeCollectionTip(); else if (this[i("0x2")](), 
            e && t && t > e) {
                var o = 3e4 - (t - e);
                o >= 0 ? this.setData({
                    durationTime: o
                }) : this.closeCollectionTip();
            }
        },
        onCloseCollectionTip: function(t) {
            wx.setStorageSync("manualCloseCollect", !0), this.setData({
                isShowTip: !1
            });
        },
        closeCollectionTip: function(t) {
            wx[i("0xa")](i("0xc"), !1), this.setData({
                isShowTip: !1
            });
        },
        openCollectionTip: function() {
            this.setData({
                isShowTip: !0
            });
        }
    }
});
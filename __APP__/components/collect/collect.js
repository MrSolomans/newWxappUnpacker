var t, e, s = [ "getStorageSync", "stringify", "setStorageSync", "开始收集", "sendStrategy", "isCollecting", "application/x-www-form-urlencoded", "use strict" ];

t = s, e = 334, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var n = function(t, e) {
    return s[t -= 0];
};

n("0x1");

var a = getApp(), o = a.sensors[n("0x6")].send;

Component({
    data: {
        txt: "开始收集",
        isShowInput: !1,
        umCompass: ""
    },
    attached: function() {
        this.getCollectValue();
    },
    methods: {
        handleOk: function() {
            this.setCollectingValue(!0);
            var t = this.data.umCompass, e = o;
            a.sensors[n("0x6")].send = function() {
                var s = [ arguments[0] ], a = arguments[0].properties.projectid, o = "https://test1-ant.pingan.com.cn/compass_test?data_list=" + encodeURIComponent(JSON[n("0x3")](s)) + "&project_id=".concat(a, "&um_compass=").concat(t);
                wx.request({
                    url: o,
                    method: "POST",
                    hearder: {
                        "Content-Type": n("0x0")
                    },
                    success: function(t) {}
                }), e.apply(this, arguments);
            }, this.setData({
                txt: "结束收集",
                isShowInput: !1
            });
        },
        handleCancel: function() {
            this.setData({
                isShowInput: !1,
                umCompass: "",
                txt: n("0x5")
            }), this.setCollectingValue(!1);
        },
        showModal: function() {
            if (wx.getStorageSync(n("0x7"))) return this.setData({
                umCompass: "",
                txt: "开始收集"
            }), this.setCollectingValue(!1), void (a.sensors.sendStrategy.send = o);
            this.setData({
                isShowInput: !0
            });
        },
        fakecallback: function() {},
        setCollectingValue: function(t) {
            wx[n("0x4")]("isCollecting", t);
        },
        getCollectValue: function() {
            var t = wx[n("0x2")](n("0x7")) ? "结束收集" : "开始收集";
            this.setData({
                txt: t
            });
        }
    }
});
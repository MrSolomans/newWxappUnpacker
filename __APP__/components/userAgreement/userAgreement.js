var t, e, n = [ "type" ];

t = n, e = 398, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

Component({
    properties: {
        size: {
            type: Number,
            value: 28
        }
    },
    methods: {
        jump: function(t) {
            var e = t.currentTarget.dataset[function(t, e) {
                return n[t -= 0];
            }("0x0")];
            wx.navigateTo({
                url: "/pages/webview/webview?noShare=1&src=" + encodeURIComponent({
                    1: "https://hcz-static.pingan.com.cn/fin-common/umc-uni-protocol/protocol.html#/treaty",
                    2: "https://hcz-static.pingan.com.cn/fin-common/umc-uni-protocol/static/pages/generalLedger.html"
                }[e])
            });
        }
    }
});
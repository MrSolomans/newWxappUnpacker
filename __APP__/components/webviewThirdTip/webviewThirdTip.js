var e, t, i = [ "setData" ];

e = i, t = 399, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

Component({
    properties: {
        isShow: {
            type: Boolean,
            value: !1
        },
        thirdPageTips: {
            type: String,
            value: "您正在离开平安好车主，将要进入第三方页面，后续服务将由第三方为您服务"
        }
    },
    data: {
        isShowPage: !1
    },
    methods: {},
    observers: {
        isShow: function(e) {
            var t = this;
            setTimeout(function() {
                t[function(e, t) {
                    return i[e -= 0];
                }("0x0")]({
                    isShowPage: e
                });
            }, 500);
        }
    },
    pageLifetimes: {
        show: function() {
            var e = this;
            setTimeout(function() {
                e.triggerEvent("changeValue"), e.setData({
                    isShowPage: !1
                });
            }, 3e3);
        }
    }
});
var t, o, a = [ "bind", "opacity", "setData" ];

t = a, o = 262, function(o) {
    for (;--o; ) t.push(t.shift());
}(++o);

var i = function(t, o) {
    return a[t -= 0];
};

Component({
    options: {
        multipleSlots: !0
    },
    data: {
        animationData: {},
        content: "",
        toastIcon: "",
        isShowToast: !0
    },
    methods: {
        showToast: function(t, o) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, n = wx.createAnimation({
                duration: 300,
                timingFunction: "ease"
            });
            this.animation = n, n.opacity(1).step(), this[i("0x1")]({
                content: t,
                toastIcon: o,
                animationData: n.export(),
                isShowToast: !1
            }), setTimeout(function() {
                n[i("0x0")](0).step(), this.setData({
                    animationData: n.export(),
                    isShowToast: !0
                });
            }[i("0x2")](this), a);
        }
    }
});
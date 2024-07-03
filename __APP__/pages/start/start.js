var t, n, e = [ "hczStatic", "concat", "switchTab" ];

t = e, n = 237, function(n) {
    for (;--n; ) t.push(t.shift());
}(++n);

var r = function(t, n) {
    return e[t -= 0];
}, c = function(t) {
    return getApp().getRequestUrl("/cps/hcz-miniprogram/images/start/"[r("0x1")](t), r("0x0"));
};

Page({
    data: {
        top: c("rect-bg.jpg"),
        bottom: c("rect-an.png")
    },
    loadOver: function() {
        setTimeout(function() {
            wx[r("0x2")]({
                url: "/pages/index/index2"
            });
        }, 200);
    }
});
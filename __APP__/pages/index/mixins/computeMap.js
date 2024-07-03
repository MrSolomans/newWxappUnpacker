var t, e, n = [ "m", "小时", "concat", "toFixed", "computeMap", "computeMapMixins" ];

t = n, e = 499, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var i = function(t, e) {
    return n[t -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports[i("0x4")] = exports.computeMap = void 0;

var o = require("../../../utils/amap-wx.js"), r = {
    methods: {
        setComputeMap: function(t, e, n, r) {
            var a = this;
            return new Promise(function(s) {
                new o.AMapWX({
                    key: "73431e0c5163bbf2779765a2efa5fec9"
                }).getDrivingRoute({
                    origin: "".concat(t, ",").concat(e),
                    destination: ""[i("0x1")](n, ",").concat(r),
                    success: function(t) {
                        var e = t.paths[0], n = e.distance, i = e.duration;
                        s({
                            distance: a.setDrivingDistance(n),
                            duration: a.setDrivingTime(i)
                        });
                    },
                    fail: function(t) {
                        console.warn("高德距离计算失败回调：==========>", t), s({});
                    }
                });
            });
        },
        setDrivingTime: function(t) {
            return (t = parseFloat(t)) < 60 ? "小于1分钟" : t >= 60 && t < 3600 ? Math.round(t / 60) + "分钟" : t >= 3600 && t < 86400 ? Math.round(t / 60 / 60) + i("0x0") : Math.round(t / 60 / 60 / 24) + "天";
        },
        setDrivingDistance: function(t) {
            return (t = parseFloat(t)) < 100 ? t.toFixed(1) + i("0x5") : (t / 1e3)[i("0x2")](1) + "km";
        }
    }
};

exports.computeMapMixins = r;

var a = Behavior(r);

exports[i("0x3")] = a;
var t, e, a = [ "getStorageSync", "observe", "unionId", "goNextStep", "dataset", "data", "current", "observer", "pageStatus", "text", "type" ];

t = a, e = 488, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var n = function(t, e) {
    return a[t -= 0];
}, r = require("../../utils/datatist.js");

Component({
    data: {
        temporaryData: {}
    },
    properties: {
        type: {
            type: String,
            value: ""
        },
        contentData: {
            type: Array,
            value: []
        }
    },
    observers: {
        contentData: function(t) {
            t && t.length > 0 && "ready" === this[n("0x1")] && this.handlerReady();
        }
    },
    methods: {
        handlerReady: function() {
            var t = this.properties, e = t[n("0x6")], a = t.contentData;
            a && a.length > 0 && ("43" === e && this.handlerExposure(a[0]), a && a.length > 0 && ("41" === e || "45" === e) && this.beginExposure());
        },
        goNextStep: function(t) {
            var e = t.currentTarget.dataset, a = e.point, i = e.text, o = wx[n("0x7")](n("0x9"));
            a && setTimeout(function() {
                r.customerTrack(a, {
                    text: i,
                    unionId: o
                }, null);
            }, 100), this.triggerEvent(n("0xa"), t);
        },
        handlerExposure: function(t) {
            var e = t.boomPoint, a = t.name;
            this.checkOnce(e) && e && setTimeout(function() {
                var t = wx.getStorageSync(n("0x9"));
                console.log("触发活动中心轮播banner曝光埋点", e), r.customerTrack(e, {
                    text: a,
                    unionId: t
                }, null);
            }, 100);
        },
        exposureSwiper: function(t) {
            if ("hide" !== this.data.pageStatus) {
                var e = t.detail[n("0x2")], a = this.properties.contentData[e];
                this.handlerExposure(a);
            }
        },
        checkOnce: function(t) {
            var e = !this.data.temporaryData[t];
            return this.data.temporaryData[t] = !0, e;
        },
        beginExposure: function() {
            var t = this, e = this.data, a = e.pageStatus, i = e.observer, o = wx.getStorageSync("unionId");
            i && i.disconnect(), a && "hide" !== a && (this.data.observer = this.createIntersectionObserver({
                observeAll: !0,
                thresholds: [ 0, 1 ]
            }), this[n("0x1")][n("0x3")].relativeToViewport()[n("0x8")](".exposure-element", function(e) {
                if ("hide" !== t.data.pageStatus && e && e[n("0x0")]) {
                    var a = e.dataset, i = a.exposure, s = a[n("0x5")];
                    if (e.intersectionRatio > 0 && i && t.checkOnce(i)) {
                        var u = parseInt(1e3 * e.intersectionRatio);
                        setTimeout(function() {
                            console.log("触发滚动曝光埋点", i), r.customerTrack(i, {
                                text: s,
                                unionId: o
                            }, null);
                        }, u);
                    }
                }
            }));
        }
    },
    lifetimes: {
        ready: function() {
            this.data.pageStatus = "ready", this.handlerReady();
        }
    },
    pageLifetimes: {
        show: function() {
            this.data.pageStatus = "show";
        },
        hide: function() {
            this.data[n("0x4")] = "hide";
        }
    }
});
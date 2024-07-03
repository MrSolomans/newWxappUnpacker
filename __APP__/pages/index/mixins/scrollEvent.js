var r, e, i = [ "新", "曝光健康测评", "carArticles", "scrollEvent", "bindCar", ".scroll-event", "scrollContainer", "曝光视频", "serviceList", "曝光绑车栏目", "data", "isNeedUserGroup", "user_group", "曝光非车险", "skinObj", "carOriginal", "id", "曝光车主原创", "isTrack", "relativeTo" ];

r = i, e = 424, function(e) {
    for (;--e; ) r.push(r.shift());
}(++e);

var s = function(r, e) {
    return i[r -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scrollEventMixins = exports[s("0x13")] = void 0;

var a = {
    data: {
        scrollContainer: [ {
            id: s("0x0"),
            isTrack: !1,
            track: s("0x5"),
            isNeedUserGroup: !1
        }, {
            id: "residentActRight",
            isTrack: !1,
            track: "曝光常设活动右侧",
            isNeedUserGroup: !1
        }, {
            id: s("0x4"),
            isTrack: !1,
            track: "曝光服务有优惠栏目",
            isNeedUserGroup: !1
        }, {
            id: "freeInsure",
            isTrack: !1,
            track: "曝光非车险",
            isNeedUserGroup: !0
        }, {
            id: "noFreeInsure",
            isTrack: !1,
            track: s("0x9"),
            isNeedUserGroup: !0
        }, {
            id: "health",
            isTrack: !1,
            track: s("0x11"),
            isNeedUserGroup: !1
        }, {
            id: "insuranceClass",
            isTrack: !1,
            track: "曝光保险小课堂",
            isNeedUserGroup: !1
        }, {
            id: "family",
            isTrack: !1,
            track: "曝光家庭保障",
            isNeedUserGroup: !1
        }, {
            id: "video",
            isTrack: !1,
            track: s("0x3"),
            isNeedUserGroup: !1
        }, {
            id: s("0x12"),
            isTrack: !1,
            track: "曝光车主精选",
            isNeedUserGroup: !1
        }, {
            id: s("0xb"),
            isTrack: !1,
            track: s("0xd"),
            isNeedUserGroup: !1
        } ],
        navLimitSlip: !1
    },
    methods: {
        scrollObserver: function() {
            var r = this, e = this[s("0x6")], i = e.source, a = e.isNewUser, t = e[s("0xa")].navScrollBgColor;
            this.setScrollObserver = wx.createIntersectionObserver(this, {
                observeAll: !0
            }), this.setScrollObserver[s("0xf")](".observe-scroll").observe(s("0x1"), function(e) {
                var o = e.intersectionRatio, c = e[s("0xc")];
                o > 0 ? (r.data[s("0x2")].find(function(e, t) {
                    var o = e.track, n = e[s("0x7")], l = e.isTrack;
                    if (e.id === c && !l) {
                        var d = {
                            source: i
                        };
                        n && (d[s("0x8")] = "".concat(a ? s("0x10") : "老", "用户")), r.setTrack(o, d), r.data.scrollContainer[t][s("0xe")] = !0;
                    }
                }), "navScroll" === c && r[s("0x6")].navLimitSlip && (r.setData({
                    navbarCarInfo: !1,
                    navScrollBgColor: ""
                }), r.data.navLimitSlip = !1)) : "navScroll" === c && !r.data.navLimitSlip && (r.setData({
                    navbarCarInfo: !0,
                    navScrollBgColor: t
                }), r[s("0x6")].navLimitSlip = !0);
            });
        }
    }
};

exports.scrollEventMixins = a;

var t = Behavior(a);

exports.scrollEvent = t;
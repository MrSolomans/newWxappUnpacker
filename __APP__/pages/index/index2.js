var e, t, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../@babel/runtime/helpers/typeof"), a = [ "/micro-cps-ceps-pc/property/switch/switch/priceCalculator", "shareCardInfo", "residentAct", "sharePictureUrl", "sent", "return", "filter: grayscale(100%);-webkit-filter: grayscale(100%);", "getRequestUrl", "setData", "main_residentActLeft", "defineProperty", "keyValueMap", "pages/index/index2", "apply", "__esModule", "hasOwnProperty", "prev", "iterator", "symbol", "call", "warn", "disconnect", "setScrollObserver", "enumerable", "abrupt", "data", "wrap", "stop", "进入首页参数-----------\x3e", "scrollObserver", "string", "split", "xcx_sy2021", "getHczInformation", "isOpenShare", "t0", "mark", "source", "catch", "$http", "end", "authorizeCompAlert", "kingKong", "next", "getSkinConfig", "wx-xcx-yun-fuq", "methods", "get" ];

e = a, t = 107, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var i = function(e, t) {
    return a[e -= 0];
}, o = require("../../utils/CommonTool.js"), s = require("../../components/newAuthorize/controlNewAuthorize.js"), c = require("../../utils/pathManage.js"), u = require("./js/getImg"), l = require("./js/api"), f = require("./js/track"), p = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./env.path.js")), d = function(e, t) {
    if (!t && e && e[i("0x3")]) return e;
    if (null === e || "object" != P(e) && "function" != typeof e) return {
        default: e
    };
    var r = O(t);
    if (r && r.has(e)) return r[i("0x24")](e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e) if ("default" !== o && {}[i("0x4")][i("0x8")](e, o)) {
        var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o];
    }
    return n.default = e, r && r.set(e, n), n;
}(require("../../utils/resourceConfig.js")), g = require("./mixins/bindCar"), x = require("./mixins/kingKong"), h = require("./mixins/residentAct"), v = require("./mixins/serDiscounts"), m = require("./mixins/hczGuarantee"), w = require("./mixins/hczInformation"), b = require("./mixins/scrollEvent"), y = require("./mixins/computeMap"), k = require("./mixins/windowManage"), S = require("./mixins/skinManage");

function O(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), r = new WeakMap();
    return (O = function(e) {
        return e ? r : t;
    })(e);
}

function P(e) {
    return (P = "function" == typeof Symbol && "symbol" == n(Symbol[i("0x6")]) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? i("0x7") : n(e);
    })(e);
}

function j(e, t, r, n, a, i, o) {
    try {
        var s = e[i](o), c = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, a);
}

function C(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, a) {
            var o = e[i("0x2")](t, r);
            function s(e) {
                j(o, n, a, s, c, "next", e);
            }
            function c(e) {
                j(o, n, a, s, c, "throw", e);
            }
            s(void 0);
        });
    };
}

function D(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t)[i("0xc")];
        })), r.push.apply(r, n);
    }
    return r;
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? D(Object(r), !0).forEach(function(t) {
            T(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function T(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != P(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != P(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (i("0x13") === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == P(t) ? t : t + "";
    }(t)) in e ? Object[i("0x2f")](e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var q = getApp(), I = q.globalData.environment;

Page(A(A(A(A({
    behaviors: [ u.img, g.bindCar, x[i("0x1f")], h.residentAct, v.serDiscounts, m.hczGuarantee, w.hczInformation, b.scrollEvent, y.computeMap, k.windowManage, S.skinManage ],
    data: A(A(A({
        windowHeight: q.globalData.windowHeight,
        source: "",
        regionData: {},
        isNewUser: !1,
        loginStatus: null,
        loginUpdate: -1,
        aopsId: "",
        trackArr: [],
        shareCardInfo: {},
        timelineInfo: {},
        showGuide: !1,
        floatParams: {
            appid: i("0x22"),
            sourceType: "1000"
        },
        loginParams: {
            sourceType: 1e3,
            register_type: 906871e3,
            appid: "wx-xcx-home-page",
            trace: ""
        },
        navigationBarHeight: q.globalData.customNavHeight,
        environment: I,
        tempEntryList: [],
        swiperAutoplay: !1,
        isOpenShare: !1,
        navScrollBgColor: "",
        filterGrayColor: ""
    }, s.authorizeCompAlert.data), o.activityFunc.data), o.bannerFunc.data)
}, s[i("0x1e")][i("0x23")]), o.activityFunc.allFunc), o.bannerFunc.allFunc), {}, {
    setTrack: f.setTrack,
    getApiUrl: l.getApiUrl,
    goNextPage: c.goNextPage,
    onReady: function() {
        var e = this;
        return C(r()[i("0x19")](function t() {
            var n, a, o;
            return r().wrap(function(t) {
                for (;;) switch (t[i("0x5")] = t.next) {
                  case 0:
                    n = (0, p.default)(q), a = n.data, o = void 0 === a ? [] : a, e.setData({
                        tempEntryList: o
                    });

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    onLoad: function(e) {
        var t = this;
        return C(r().mark(function n() {
            var a, o, s, c;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return t.setPageFilerColor(), a = e.scene, r.next = 4, t.getSunOption(a);

                  case 4:
                    o = r[i("0x29")], e = Object.assign(e, o), console[i("0x9")](i("0x11"), e), s = e.source, 
                    c = void 0 === s ? i("0x15") : s, t.data.source = c, t.setShareCard(), t.setShareTimeline(), 
                    t[i("0x21")](), t[i("0x16")](), t.renderBanner("1"), q.showRedDot();

                  case 15:
                  case i("0x1d"):
                    return r.stop();
                }
            }, n);
        }))();
    },
    onShow: function() {
        this[i("0xe")].isOpenShare || (this.updatePage(), this.setTrack("曝光首页", {
            source: this.data[i("0x1a")]
        }));
    },
    onHide: function() {
        this.data.isOpenShare || (this[i("0xe")].scrollContainer.map(function(e) {
            return e.isTrack && (e.isTrack = !1), e;
        }), this.setData({
            currentWindow: {
                prop: "",
                sort: 0
            },
            currentBubble: {
                sort: 0,
                prop: ""
            },
            swiperAutoplay: !1,
            isGetLocation: !1
        }), this.changeFloatingLayer(!1), this.data.loginUpdate = -1, this.data[i("0x27")].trackObj = {}, 
        this[i("0xb")] && this.setScrollObserver[i("0xa")](), clearTimeout(this[i("0xe")].relatedTime));
    },
    updatePage: function() {
        var e = this;
        return C(r().mark(function t() {
            return r().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    e.checkLogin(), e.windowManage(), e.queryModuleList(), !e.data.swiperAutoplay && e.setData({
                        swiperAutoplay: !0
                    });

                  case 4:
                  case "end":
                    return t[i("0x10")]();
                }
            }, t);
        }))();
    },
    checkLogin: function() {
        var e = this;
        return C(r().mark(function t() {
            var n, a, o, s, c, u, l;
            return r().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return n = !1, a = !1, t[i("0x5")] = 2, t.next = 5, q.loginInfo();

                  case 5:
                    o = t[i("0x29")], s = o.data, c = s.aopsid, (u = e[i("0xe")].aopsId) && c !== u && (a = !0, 
                    wx.removeStorageSync("currentCar")), e[i("0xe")].aopsId = c, n = !0, e.checkNewUser(), 
                    e.getBindCarInfo(), t.next = 20;
                    break;

                  case 16:
                    t.prev = 16, t.t0 = t[i("0x1b")](2), e.data.aopsId = "", e.setData({
                        "currentCar.plateNum": "",
                        "currentCar.isNewEnergy": !1,
                        isNewUser: !0
                    });

                  case 20:
                    1 === (l = a || e.data.loginStatus !== n ? 1 : 0) && e.setData({
                        loginStatus: n
                    }), e.data.loginUpdate = l;

                  case 23:
                  case "end":
                    return t[i("0x10")]();
                }
            }, t, null, [ [ 2, 16 ] ]);
        }))();
    },
    regionEve: function(e) {
        var t = this;
        return C(r().mark(function n() {
            var a, o, s, c, u, l, f, p, d, g;
            return r()[i("0xf")](function(r) {
                for (;;) switch (r.prev = r[i("0x20")]) {
                  case 0:
                    if (!t.data.isOpenShare) {
                        r.next = 3;
                        break;
                    }
                    return t[i("0xe")][i("0x17")] = !1, r.abrupt(i("0x2a"));

                  case 3:
                    if (t.windowManage(), t.bubbleManage(), a = e.detail.regionData, o = a.lon, s = a.lat, 
                    c = a.selectCity, u = t.data.regionData, l = u.lon, f = u.lat, 0 !== t.data.loginUpdate || o !== l || s !== f) {
                        r.next = 12;
                        break;
                    }
                    return t.scrollObserver(), r.abrupt(i("0x2a"));

                  case 12:
                    return (wx.getStorageSync("loadingHomePage") || !1) && wx.showLoading({
                        mask: !0
                    }), wx.removeStorageSync("loadingHomePage"), t.data.regionData = a, t.getGasOrChargePrice(a), 
                    p = t.getResourceConfig(c), d = t.getSerDiscounts(a, t.data.currentCar.isNewEnergy), 
                    g = t.getHczGuarantee(c), r.next = 22, Promise.all([ p, d, g ]);

                  case 22:
                    t[i("0x12")](), wx.hideLoading();

                  case 24:
                  case "end":
                    return r.stop();
                }
            }, n);
        }))();
    },
    getResourceConfig: function(e) {
        var t = this;
        return C(r().mark(function n() {
            var a, o, s, c, u, l, f, p, g, x, h, v, m, w;
            return r().wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, (0, d.default)([ "main_carServeIcon", i("0x2e"), "main_residentActRight" ], e);

                  case 2:
                    (a = r.sent) && Object.keys(a).length > 0 && (o = a.main_residentActLeft, s = void 0 === o ? [] : o, 
                    c = a.main_residentActRight, u = void 0 === c ? [] : c, l = a.main_carServeIcon, 
                    p = (f = void 0 === l ? {} : l).spliceList, g = void 0 === p ? [] : p, x = f.allSerList, 
                    h = void 0 === x ? [] : x, v = g.length > 0 ? g : h, m = u.slice(0, 2), w = s.slice(0, 5), 
                    console.warn("获取左侧常设轮播活动、右侧活动", a), t.setData({
                        "residentAct.rightList": m
                    }), t.setKingKongService(v), t.changeResidentAct(w));

                  case 4:
                  case "end":
                    return r.stop();
                }
            }, n);
        }))();
    },
    checkNewUser: function() {
        var e = this;
        return C(r().mark(function t() {
            var n, a, o;
            return r()[i("0xf")](function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, q[i("0x1c")]({
                        url: e.getApiUrl("checkNewUser"),
                        data: {
                            intervalDay: 30
                        },
                        needToken: !0,
                        needLogin: !0
                    });

                  case 2:
                    n = t.sent, a = n.code, o = n.data, e.setData({
                        isNewUser: 0 === a && o
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    testEntrance: function(e) {
        var t = this, r = e.currentTarget.dataset.item, n = r.path, a = void 0 === n ? "" : n, i = r.track, o = void 0 === i ? "" : i;
        o && setTimeout(function() {
            t.setTrack(o, {
                source: t.data.source
            });
        }, 100), q.goNewMainPages(a, null, !0);
    },
    setShareCard: function() {
        var e = this;
        return C(r().mark(function t() {
            var n, a, o, s;
            return r().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return n = 1 === I ? "1000015" : "1000028", t[i("0x20")] = 3, q.getShareInfo(n);

                  case 3:
                    if (t[i("0x18")] = t.sent, t.t0) {
                        t.next = 6;
                        break;
                    }
                    t[i("0x18")] = {};

                  case 6:
                    a = t[i("0x18")], o = a.shareList, (s = void 0 === o ? [] : o).length > 0 && (e.data.shareCardInfo = s[0]);

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    compareSort: function(e) {
        return function(t, r) {
            return t[e] - r[e];
        };
    },
    jumpFun: function(e) {
        var t = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
        if (e) {
            var o = this[i("0xe")].source;
            this.goNextPage(e, "navigateTo").then(function() {
                r && t.setTrack(r, A({
                    source: o
                }, n)), a && a();
            });
        }
    },
    setPageFilerColor: function() {
        var e = this;
        return C(r().mark(function t() {
            var n, a, o;
            return r().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, q.$http({
                        url: q[i("0x2c")](i("0x25"), "static"),
                        needToken: !0
                    }).catch(function() {});

                  case 2:
                    n = t.sent, a = n.code, o = n[i("0xe")], 0 === a && o && e[i("0x2d")]({
                        filterGrayColor: i("0x2b")
                    });

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    setShareTimeline: function() {
        var e = this;
        return C(r().mark(function t() {
            var n;
            return r().wrap(function(t) {
                for (;;) switch (t[i("0x5")] = t.next) {
                  case 0:
                    return t.next = 2, (0, d.getShareTimelineInfo)({
                        tag: "home"
                    });

                  case 2:
                    if (n = t.sent) {
                        t[i("0x20")] = 6;
                        break;
                    }
                    return wx.hideShareMenu({
                        menus: [ "shareTimeline" ]
                    }), t[i("0xd")](i("0x2a"));

                  case 6:
                    e.data.timelineInfo = n[0] ? n[0][i("0x0")] : {};

                  case 7:
                  case i("0x1d"):
                    return t.stop();
                }
            }, t);
        }))();
    },
    bannerLoginAfter: function() {
        q.globalData.isAgreePrivacy = !0;
    },
    getSunOption: function(e) {
        return C(r().mark(function t() {
            var n, a, o;
            return r().wrap(function(t) {
                for (;;) switch (t[i("0x5")] = t.next) {
                  case 0:
                    if (n = {}, !e || -1 === e.indexOf("APPW")) {
                        t.next = 6;
                        break;
                    }
                    return t.next = 4, q.getOriginValue(e);

                  case 4:
                    (a = t[i("0x29")]) && (o = a.split("&"), console.warn("太阳码返回参数----\x3e", a), -1 !== a.indexOf("=") && o.forEach(function(e) {
                        var t = e[i("0x14")]("=");
                        n[t[0]] = t[1];
                    }));

                  case 6:
                    return t.abrupt("return", n);

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))();
    },
    onShareAppMessage: function() {
        var e = this[i("0xe")], t = e[i("0x26")], r = e[i("0x1a")], n = t.shareText, a = t.jumpUrl, o = t[i("0x28")], s = a || i("0x1"), c = "".concat(s, "?source=").concat(r);
        return this.data.isOpenShare = !0, {
            title: n || "平安好车主",
            path: c,
            imageUrl: o || ""
        };
    },
    onShareTimeline: function() {
        var e = this.data, t = e.timelineInfo, r = e.source, n = e[i("0x26")], a = t || {}, o = a.shareText, s = a.sharePictureUrl, c = n.shareText, u = n[i("0x28")];
        return {
            title: o || c,
            query: "source=".concat(r),
            imageUrl: s || u
        };
    }
}));
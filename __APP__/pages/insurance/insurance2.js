var e, t, a = require("../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../@babel/runtime/helpers/typeof"), o = [ "getHotSearchTimer", "setNavigationBarColor", "pageExposure", "planPath", "next", "isIPX", "currentTarget", "PACX_W00001374", "request", "observe", "top1.png", "HCZ-GDRK-XCXX-QTXXXX-3150", "hotword", "@@iterator", "#FF8727", "PACX_W00076133", "getRequestUrl", "&formId=", "detail", "/uapi/cps-hcz-smallapp/common/noncar/queryNonCarProductConfig", "dataset", "平安好车主-更多保障邀您了解~", "test", "log", "rulesId", "warn", "keyValueMap", "moduleStyleId", "indexOf", "constructor", "trackSource", "startTime", "nickName", "iterator", "bannerFunc", "PACX_W00014953", "xcx_bx", "sharePictureUrl", "temporaryData", "fromPage", "00", "source", "/", "homeColumn", "productId", "targeturl", "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "getOwnPropertyDescriptors", "textColor", "1000029", "hotWord", "猜你喜欢接口", "shareCardInfo", "then", "length", "concat", "observer", "/cps/hcz-miniprogram/images/insurance/education-foundation.png", "throw", "t0", "moduleObj", "call", "defineProperties", "#CCCCCC", "pages/insurance/insurance2", "globalData", "isShowSearch", "getFamilyEvaluationMsg", "familyAnalyze", "小程序", "navigateTo", "mySeckillTime", "hzcModule", "PACX_W00001373", "strategyId", "setData", "data", "/pages/insuranceMore/detail/detail?productUrl=", "name", "forEach", "static", "cLx61IDARIUBo_b0s3Yt8IztXwyAuQ-2b1DioljwUhw", "PACX_W00076806", "PACX_W39000121", "customerTrack", "$http", "done", "PACX_W00014223", "push", "windowHeight", "getStorageSync", "prev", "sort", "banner_no1", "#FFFFFF" ];

e = o, t = 499, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var n = function(e, t) {
    return o[e -= 0];
}, i = require("../../utils/handleTime.js"), c = require("../insurance/insurance_dataist.js"), u = require("../../utils/CommonTool.js"), s = require("../../components/newAuthorize/controlNewAuthorize.js"), l = require("../../utils/resourceConfig.js"), d = require("../../utils/pathManage.js");

function h(e) {
    return (h = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
        return r(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e);
    })(e);
}

function f(e, t) {
    return function(e) {
        if (Array.isArray(e)) return e;
    }(e) || function(e, t) {
        var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol[n("0x9")]] || e[n("0x54")];
        if (null != a) {
            var r, o, i, c, u = [], s = !0, l = !1;
            try {
                if (i = (a = a.call(e)).next, 0 === t) {
                    if (Object(a) !== a) return;
                    s = !1;
                } else for (;!(s = (r = i.call(a))[n("0x3e")]) && (u.push(r.value), u.length !== t); s = !0) ;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                l = !0, o = e;
            } finally {
                try {
                    if (!s && null != a.return && (c = a.return(), Object(c) !== c)) return;
                } finally {
                    if (l) throw o;
                }
            }
            return u;
        }
    }(e, t) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return m(e, t);
            var a = {}.toString[n("0x25")](e).slice(8, -1);
            return "Object" === a && e.constructor && (a = e[n("0x5")].name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/[n("0x5d")](a) ? m(e, t) : void 0;
        }
    }(e, t) || function() {
        throw new TypeError(n("0x16"));
    }();
}

function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
    return r;
}

function x(e, t, a, r, o, n, i) {
    try {
        var c = e[n](i), u = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void a(e);
    }
    c.done ? t(u) : Promise.resolve(u).then(r, o);
}

function g(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, r);
    }
    return a;
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? g(Object(a), !0).forEach(function(t) {
            b(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object[n("0x26")](e, Object[n("0x17")](a)) : g(Object(a))[n("0x37")](function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
    }
    return e;
}

function b(e, t, a) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != h(e) || !e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 !== a) {
                var r = a.call(e, t || "default");
                if ("object" != h(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == h(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var v = getApp(), y = v.globalData.environment, T = require("../../utils/datatist.js"), w = [ "H6qg6n0rBIg_25eu7lF4zM4ff1PBJKuTv-90HvME5MM", "3AcRlfAKQUGoTsPcTgBbJ10QtXdZm0AvLGHKlBweIAc" ], C = [ n("0x39"), "wT0rGtBYWOVLfKPjM96Z67GXXnFAXJ-iY47jHWgWGq4" ], S = 0 === v[n("0x29")].environment ? "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/insurance/" : "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/insurance/", P = S + n("0x51"), I = S + "top2.png", k = S + "top3.png", X = S + "insuranceMore.png", A = S + "familyTitleBg.png", D = v.getRequestUrl(n("0x21"), "hczStatic");

Page(p(p(p({
    data: p(p(p({}, u[n("0xa")][n("0x34")]), {}, {
        bannerLoginParams: {
            appid: "wx-xcx-yun-fuq",
            sourceType: "1002"
        },
        top1Png: P,
        top2Png: I,
        top3Png: k,
        insuranceMorePng: X,
        familyTitleBg: A
    }, s.authorizeCompAlert.data), {}, {
        directAccess: !1,
        navigationBarHeight: v[n("0x29")].customNavHeight,
        statusBarHeight: v.globalData.statusBarHeight,
        isIphoneX: v.globalData[n("0x4c")],
        specialTabBar: [],
        refreshTimeString: "",
        touchObj: {
            left: 0,
            top: 0
        },
        pageLayout: n("0x38"),
        setChangeX: 0,
        setChangeY: 0,
        hzcModule: "hczoi_wx_mp",
        backPoint: {},
        configList: [],
        topBannerArrInsurance: [],
        topBannerAutoplay: !0,
        topBannerInterval: 3500,
        topBannerDuration: 1500,
        moduleObj: {},
        moduleArr: [],
        windowWidth: 0,
        windowHeight: 0,
        shareCardInfo: {},
        triggerOnShowFirst: !1,
        source: "",
        pageName: "非车保险首页",
        timer: null,
        likeList: [],
        bannerBackColorTop: n("0x55"),
        textColor: n("0x46"),
        isShowSearch: !0,
        offerText: "",
        isShowFamilyModule: !1,
        avatar: "",
        userName: "",
        familyEvaluationList: [],
        goFamilyUrl: "",
        isShowPlan: !1,
        planBanner: "",
        planPath: "",
        annuityImg: D,
        timelineInfo: {},
        bubbleProp: ""
    })
}, u[n("0xa")].allFunc), {}, {
    onLoad: function(e) {
        var t = this, a = e[n("0x30")], r = e[n("0x11")], o = void 0 === r ? "" : r, i = e.inviteCode, c = void 0 === i ? "" : i;
        a && (this.data.hzcModule = a);
        var u = wx.getSystemInfoSync();
        this.setData({
            source: o,
            backPoint: {
                point: "PACX_W00014219",
                options: {
                    source: o,
                    tagID: this.data.pageName
                }
            },
            textColor: this.data.isShowSearch ? "#CCCCCC" : this.data[n("0x18")],
            searchInputBgColor: "#FFFFFF",
            windowWidth: u.windowWidth,
            windowHeight: u[n("0x41")]
        });
        var s = 1 === v.globalData.environment ? "1000016" : n("0x19");
        (0, l.getShareTimelineInfo)({
            tag: "insurance"
        })[n("0x1d")](function(e) {
            e ? t.data.timelineInfo = e[0] ? e[0].keyValueMap : {} : wx.hideShareMenu({
                menus: [ "shareTimeline" ]
            });
        }), v.getShareInfo(s)[n("0x1d")](function(e) {
            t.data.shareCardInfo = e.shareList[0], console.log("分享卡片参数", e);
        }), T.customerTrack(n("0xb"), {
            source: o,
            inviteCode: c
        }, null);
    },
    scroll: function(e) {
        e.detail.scrollTop > 70 ? (wx[n("0x48")]({
            frontColor: "#000000",
            backgroundColor: n("0x46")
        }), this.setData({
            bannerBackColorTop: "#FFFFFF",
            textColor: this.data[n("0x2a")] ? "#bbbbbb" : "#000000",
            searchInputBgColor: "#f0f0f0"
        })) : (wx[n("0x48")]({
            frontColor: "#ffffff",
            backgroundColor: "#FF8727"
        }), this[n("0x33")]({
            bannerBackColorTop: "#FF8727",
            textColor: this.data[n("0x2a")] ? n("0x27") : "#FFFFFF"
        }));
    },
    onShow: function() {
        var e = this;
        this.renderBanner("3"), v.loginInfo()[n("0x1d")](function(e) {
            return function() {
                var t = this, a = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, a);
                    function c(e) {
                        x(i, r, o, c, u, n("0x4b"), e);
                    }
                    function u(e) {
                        x(i, r, o, c, u, n("0x22"), e);
                    }
                    c(void 0);
                });
            };
        }(a().mark(function t() {
            var r, o, i, c, u;
            return a().wrap(function(t) {
                for (;;) switch (t[n("0x43")] = t.next) {
                  case 0:
                    return t.next = 2, v.queryPageInfo({
                        source: "instance_familyEvaluation"
                    });

                  case 2:
                    if (t[n("0x23")] = t.sent, t.t0) {
                        t[n("0x4b")] = 5;
                        break;
                    }
                    t.t0 = [];

                  case 5:
                    if (r = t.t0, !((o = r[0].keyValue) && o.temporaryData && o.temporaryData[0].keyValueMap && "1" === o.temporaryData[0][n("0x2")].insuranceIsShowFamilyModule)) {
                        t.next = 18;
                        break;
                    }
                    return e.data.goFamilyUrl = o[n("0xe")][0].keyValueMap.goFamilyUrl1, t.next = 11, 
                    v.getLocationInfo("city");

                  case 11:
                    i = t.sent, c = i.city, u = {
                        city: void 0 === c ? "深圳" : c,
                        hzcModule: "HCZ-GDRK-XCXX-QTXXXX-3348"
                    }, v[n("0x2b")](u).then(function(t) {
                        var a = wx[n("0x42")]("userInfo"), r = a.avatarUrl, o = a[n("0x8")], i = t.familyDetail, c = t[n("0x2c")], u = [];
                        u[n("0x1e")] = 2, e.setData({
                            isShowFamilyModule: !0,
                            avatar: r,
                            userName: o,
                            familyEvaluationList: u,
                            memberCount: i.memberCount,
                            orderCount: c.orderCount,
                            bubbleProp: "guideFollow"
                        }, function() {
                            T.customerTrack("PACX_O00000080", {
                                source: "xcx_bx"
                            }, null);
                        });
                    }), t.next = 19;
                    break;

                  case 18:
                    e.setData({
                        isShowFamilyModule: !1
                    });

                  case 19:
                    e.queryGuessInsurance();

                  case 20:
                  case "end":
                    return t.stop();
                }
            }, t);
        }))).catch(function() {
            e.setData({
                isShowFamilyModule: !1
            });
        }), this.getInstance_plan(), this.getBuyText(), this.getTopBannerMsg(), this.queryNonCarProductConfig().then(function() {
            for (var t = e.data.configList, a = 0, r = t.length; a < r; a++) {
                var o = t[a];
                if (3 === o[n("0x3")]) {
                    wx.setStorageSync(n("0x2f"), o.endDate), e.data.timer = setInterval(function() {
                        e.setData({
                            refreshTimeString: (0, i.refreshTime)("mySeckillTime", e.data.timer)
                        });
                    }, 1e3);
                    break;
                }
            }
            setTimeout(function() {
                e.data.observer && e[n("0x34")][n("0x20")].disconnect(), e.data.observer = e.createIntersectionObserver({
                    observeAll: !0
                }), e.data.observer.relativeTo(".scroll-view")[n("0x50")](".scroll-view-item", function(t) {
                    if (t.intersectionRatio > 0) {
                        var a = t[n("0x5b")], r = a[n("0x49")], o = a.moduleSource, i = a.productId, c = a.point, u = a.moduleId, s = e.data.moduleObj;
                        i && s && s[u] && !s[u].includes(i) && (e[n("0x34")][n("0x24")][u].push(i), T.customerTrack(r, {
                            moduleSource: o,
                            source: e.data.source,
                            productID: i,
                            point: c
                        }, null));
                        var l = t.dataset, d = l.id, h = l.text, f = l.track;
                        if (!f) return;
                        -1 === e.data.moduleArr[n("0x4")](d) && (e.data.moduleArr[n("0x40")](d), T.customerTrack(f, {
                            source: e.data.source,
                            Public_Name: h
                        }, null));
                    }
                });
            }, 100);
        }), v.showRedDot();
    },
    onHide: function() {
        this.data.moduleArr = [], wx.setStorageSync("directAccess", !1), this.data.observer && this.data.observer.disconnect();
    },
    onUnload: function() {
        clearInterval(this.data.timer), this.data.observer && this.data.observer.disconnect();
    }
}, s.authorizeCompAlert.methods), {}, {
    jump: function(e) {
        var t = this, a = e.currentTarget.dataset, r = a.path, o = a.point;
        r.indexOf("/insuranceMore") > -1 ? r += "?source=".concat(this.data.source, "&hzcModule=").concat(this.data.hzcModule) : r += "?hzcModule=".concat(this.data.hzcModule), 
        wx.navigateTo({
            url: r,
            success: function() {
                o && T.customerTrack(o, {
                    source: t.data.source
                }, null);
            }
        });
    },
    $http: function(e, t) {
        t = t || v[n("0x57")](n("0x5a"));
        var a = {};
        return "release" !== v.globalData.envVersion && (a.versionno = "grayTest"), new Promise(function(r, o) {
            wx[n("0x4f")]({
                url: t,
                data: p({
                    "X-PA-NONCESTR": 1,
                    pageSize: 1e3
                }, e),
                method: "post",
                header: p({
                    "Content-Type": "application/json;charset=utf-8"
                }, a),
                success: function(e) {
                    r(e.data || {});
                },
                fail: function(e) {
                    o(e);
                }
            });
        });
    },
    getBuyText: function() {
        var e = this, t = {
            source: n("0x13")
        }, a = v.getRequestUrl("/uapi/cps-hcz-smallapp/collocateConfig/list");
        this[n("0x3d")](t, a).then(function(t) {
            console.log("获取极速车险报价文案返回的参数", t.data[0].keyValue[n("0x36")]);
            var a = t[n("0x34")][n("0x1e")] > 0 ? t.data[0].keyValue.name : "";
            e[n("0x33")]({
                offerText: a
            });
        }).catch(function(e) {
            console[n("0x1")]("查询栏目列表失败：", e);
        });
    },
    queryNonCarProductConfig: function() {
        var e = this;
        return this.$http({
            hzcModule: this.data.hzcModule
        }).then(function(t) {
            if (console[n("0x5e")]("产品配置====>>>>", t), 0 === Number(t.code)) {
                var a = t.data, r = void 0 === a ? [] : a;
                r[n("0x44")](function(e, t) {
                    return e.moduleSort - t.moduleSort;
                }), e.setData({
                    configList: r
                });
                var o = {};
                r.forEach(function(e) {
                    o[e.moduleId] = [];
                }), e.data.moduleObj = o;
            } else wx.showModal({
                title: "温馨提示",
                content: "活动火爆，稍后再试～"
            });
        }).catch(function(e) {
            console.warn("请求失败", e);
        });
    },
    viewHotDetail: function(e) {
        var t = this, a = (e = e[n("0x59")] && e.detail[n("0x4d")] ? e.detail : e).currentTarget[n("0x5b")], r = a.productUrl, o = a.point, i = a[n("0x14")], u = a.productTagName, s = a.text, l = function() {
            var e = n("0x35") + encodeURIComponent(r);
            -1 === r.indexOf("hzcModule=") && (e += "&hzcModule=" + t.data.hzcModule), wx.navigateTo({
                url: e,
                success: function() {
                    console.log("触发了PACX_W00001374", s), T.customerTrack(n("0x4e"), {
                        Public_Name: s
                    }, null), T.customerTrack(o, {
                        productID: i,
                        source: t[n("0x34")][n("0x11")]
                    }, null), T.customerTrack((0, c.datatistFunc)(i), {
                        source: t.data.source,
                        productTagName: u
                    }, null);
                }
            });
        };
        v.subscribeFunc(w, C, l, l, "fcxts_subscription", !0, function(e) {
            var a = {
                1: n("0x3b"),
                2: "PACX_W39000122",
                3: "PACX_W39000123"
            };
            T.customerTrack(a[e.code], {
                source: t.data.source
            }, null);
        });
    },
    goAssemble: function() {
        var e = this, t = v.getRequestUrl("/nci/groupPurchase/index.html#orderList", "hczStatic1443");
        wx.navigateTo({
            url: "/pages/h5Embed/myAssemble/myAssemble?productUrl=" + encodeURIComponent(t),
            success: function() {
                T.customerTrack("PACX_W00014229", {
                    source: e.data.source,
                    tagID: e.data.pageName
                }, null);
            }
        });
    },
    goToOnlineSale: function() {
        var e = this;
        wx.navigateTo({
            url: "/pages/h5Embed/onlineSale/onlineSale",
            success: function() {
                T[n("0x3c")](n("0x3f"), {
                    source: e[n("0x34")].source
                }, null);
            }
        });
    },
    pageExposure: function(e) {
        var t = e[n("0x4d")].dataset, a = t.pageExposure, r = t.moduleSource;
        T.customerTrack(a, {
            moduleSource: r,
            source: this.data[n("0x11")]
        }, null);
    },
    catchTouchMove: function() {
        return !1;
    },
    getTopBannerMsg: function() {
        var e = this;
        return v.queryConfigurePageInfo({
            channel: n("0x2d"),
            page: "保险",
            place: n("0x45"),
            departmentCode: "0",
            mediaScoure: "0",
            pageInfoId: 0 === y ? "8ED1514BEDE05C37E0540010E0C0AEFC" : "8F992E81629315C5E054022128574717"
        }).then(function(t) {
            return t && e.setData({
                topBannerArrInsurance: t
            }), t;
        });
    },
    openBannerUrl: function(e) {
        var t = (e = e[n("0x59")] && e.detail.currentTarget ? e.detail : e).currentTarget.dataset[n("0x15")];
        console[n("0x5e")]("触发了PACX_W00001373"), T.customerTrack(n("0x31"), {
            source: this.data[n("0x11")]
        }, null), t && wx.navigateTo({
            url: t + n("0x58") + (e.detail.formId || ""),
            success: function() {}
        });
    },
    goToLikeMore: function() {
        var e = this;
        wx.navigateTo({
            url: "/pages/insuranceMore/likeMore/likeMore",
            success: function() {
                T.customerTrack("PACX_W00063659", {
                    source: e.data.source ? e.data.source : n("0xc")
                }, null);
            }
        });
    },
    queryGuessInsurance: function() {
        var e = this;
        v.$http({
            url: v[n("0x57")]("/uapi/cps-hcz-smallapp/insurePage/getRecommendProducts"),
            data: {
                hzcModule: n("0x52")
            },
            needToken: !0
        }).then(function(t) {
            e.setData({
                likeList: t.data || []
            }), console.log(n("0x1b"), t);
        }).catch(function(e) {
            console.log(e, "猜你喜欢接口err");
        });
    },
    goToLikeItem: function(e) {
        var t = this, a = (e = e.detail && e.detail.currentTarget ? e.detail : e).currentTarget[n("0x5b")], r = a.url, o = a.index;
        wx[n("0x2e")]({
            url: "/pages/insuranceMore/detail/detail?productUrl=" + encodeURIComponent(r),
            success: function() {
                T.customerTrack("PACX_W00063660", {
                    source: t.data[n("0x11")] ? t.data.source : "xcx_bx",
                    productID: t[n("0x34")].likeList[o][n("0x14")],
                    Public_ID: t.data.likeList[o][n("0x32")],
                    sort: o + 1,
                    rulesid: t.data.likeList[o][n("0x0")],
                    rulesname: t.data.likeList[o].rulesName,
                    hzcModule: "HCZ-GDRK-XCXX-QTXXXX-3150"
                }, null);
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data[n("0x1c")].shareText || "平安好车主-更多保障邀您了解~",
            path: this.data.shareCardInfo.jumpUrl || n("0x28"),
            imageUrl: this[n("0x34")].shareCardInfo.sharePictureUrl || ""
        };
    },
    onShareTimeline: function() {
        var e = this[n("0x34")].timelineInfo || {}, t = e.shareText, a = e.sharePictureUrl;
        return {
            title: t || this.data.shareCardInfo.shareText || n("0x5c"),
            query: "",
            imageUrl: a || this.data[n("0x1c")][n("0xd")]
        };
    },
    goFamilyPage: function(e) {
        var t = e.currentTarget[n("0x5b")].track;
        wx.navigateTo({
            url: this.data.goFamilyUrl || "/pages/webview/webview?pageType=familyEvaluation&source=xcx_bx&hzcModule=HCZ-GDRK-XCXX-QTXXXX-3348",
            success: function() {
                T.customerTrack(t, {
                    source: "xcx_bx"
                }, null);
            }
        });
    },
    getInstance_plan: function() {
        var e = this;
        v.queryPageInfo({
            source: "instance_plan"
        }).then(function(t) {
            var a = (t && t[0] || {}).keyValue, r = void 0 === a ? {} : a, o = r.pageUrl, i = r.temporaryData, c = void 0 === i ? [] : i, u = c[0] && c[0].keyValueMap || {}, s = u.banner, l = u[n("0x7")], d = u.endTime, h = new Date();
            o && l && d && h >= new Date(l.replace(/-/g, "/")) && h < new Date(d.replace(/-/g, n("0x12"))) ? (e.setData({
                isShowPlan: !0,
                planBanner: s
            }), e.data.planPath = o, T.customerTrack("PACX_W00001453", {
                source: "xcx_bx"
            }, null)) : e.setData({
                isShowPlan: !1
            });
        }).catch(function(e) {
            console.log("获取保障计划banner失败：", e);
        });
    },
    goAnnuity: function() {
        var e = v.globalData.envVersion;
        wx.navigateToMiniProgram({
            appId: "wx2e37236ce74c77a8",
            path: "/salesProject/featureSimpleAppointment/pages/detail/index?productSalesCode=BihePLwC&nodeCode=035&mediaSource=mobi12-pahaochezhu-ycbbnj-215",
            envVersion: e,
            fail: function() {}
        });
    },
    goInsurancePlan: function() {
        var e = this;
        wx[n("0x2e")]({
            url: this.data[n("0x4a")],
            success: function() {
                T.customerTrack("PACX_W00001452", {
                    source: e.data.source
                }, null);
            }
        });
    },
    setKeyWord: function(e) {
        var t = e[n("0x59")].current;
        if (t || 0 === t) {
            var a = this[n("0x34")].searchValueList, r = ((void 0 === a ? [] : a)[t] || {}).hotWord;
            this.setData({
                currentValue: r || ""
            });
        }
    },
    goToSearch: function() {
        var e = this;
        console[n("0x5e")]("-------点击搜索框-----"), this.data.getHotSearchTimer && clearTimeout(this.data[n("0x47")]), 
        this[n("0x34")].getHotSearchTimer = setTimeout(function() {
            console.log("--0.5s后 真正执行请求--"), e.getHotSearch().then(function() {
                var t = e.data.currentValue, a = {
                    from: e.data.fromPage,
                    source: e.data[n("0x6")],
                    searchKeyWords: t
                }, r = Object.entries(a).reduce(function(e, t) {
                    var a = f(t, 2), r = a[0], o = a[1];
                    return o && (e += "&".concat(r, "=")[n("0x1f")](o)), e;
                }, "/pages/webview/webview?pageType=globalSearch");
                (0, d.goNextPage)(r, "navigateTo").then(function() {
                    console.log("触发埋点了PACX_W00076133,source为:", e.data.trackSource), T.customerTrack(n("0x56"), {
                        source: e[n("0x34")].trackSource || ""
                    }, null), setTimeout(function() {
                        T.customerTrack(n("0x3a"), {
                            portalsource: e[n("0x34")].fromPage || ""
                        }, null);
                    }, 100), setTimeout(function() {
                        T[n("0x3c")]("PACX_W00076809", {
                            portalsource: e.data[n("0xf")] || "",
                            keywords: t
                        }, null);
                    }, 200);
                });
            }).catch(function(e) {
                console.warn("打开搜索页面错误：", e);
            });
        }, 500);
    },
    getHotSearch: function() {
        var e = this, t = {
            city: wx.getStorageSync("cityName") || "",
            portalSource: 1
        }, a = v.getRequestUrl("/aops-search/hotword/searchByWeiXinMini", "static");
        return this.$http(t, a).then(function(t) {
            if (t && t.code === n("0x10") && t.data) {
                var a = t[n("0x34")][n("0x53")] || [], r = {
                    searchValueList: a,
                    currentValue: (a[0] || {
                        hotWord: ""
                    })[n("0x1a")]
                };
                e.setData(r), wx.setStorageSync("hotWord", r), wx.setStorageSync("hotWordSetTime", handleTime.getTime());
            }
        }).catch(function(e) {
            console.warn("err", e);
        });
    }
}));
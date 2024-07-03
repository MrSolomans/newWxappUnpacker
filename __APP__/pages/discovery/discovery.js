var t, e, a = require("../../@babel/runtime/helpers/typeof"), o = [ "PACX_W00052148", "setData", "observer", "detail", "RimSpecialTop", "-", "PACX_W00052139", "code", "InsuranceStrategyTop", "isVideo", "showToast", "getRequestUrl", "PACX_W39000113", "warn", "globalData", "split", "FaXianYe-TouBaoGongLue", "=", "hotWordSetTime", "direction", "videoPageDate", "type", "onlineClaimList", "done", "current", "5", "symbol", "plateId", "windowHeight", "/pages/discoveryMore/serviceMore/serviceMore", "dataset", "flag", "data", "voteid", "moduleurl", "PACX_W00076806", "moduleList", "触发埋点了PACX_W00076133,source为:", "fromPage", "投票成功", "hotSpotList", "findImg.png", "log", "3", "push", "keyValue", "unionId", "getHotSearchTimer", "getShareTimelineInfo", "p6", "currentTarget", "length", "from", "p3", "PACX_W39000112", "p11", "p10Flag", "then", "p7", "insuranceStrategyList", "查询服务列表失败：", "navigateTo", "showPhone", "getHotSearch", "PACX_W00052138", "getOwnPropertyDescriptor", "9", "call", "PACX_W00052140", "authorizeCompAlert", "vote_left_count", "title", "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/findImg/", "catch", "text", "questionTop", "createSelectorQuery", "videoPage", "setStorageSync", "relativeTo", "isArray", "observe", "defineProperties", "vote_right_count", "list", "customerTrack", "moduleObj", "#FFFFFF", "beforeShowPhone", "$http", "discoverCircles", "enumerable", "forEach", "top", "&", "n8yLcqrRzEKaeNRR5bPObDRB9NC1Oe4ab7jgROzwbmM", "vote_title", "PACX_W00075910", "guideFollow", "topicId", "跳其它小程序", "/uapi/cps-hcz-smallapp/carcircle/vote/get", "@@iterator", "concat", "getOwnPropertyDescriptors", "filter", "msg", "source", "2", "queryModuleList", "PACX_W00052152", "goBackUrl", "p9", "plateType", "PACX_W00079418", "8", "120001", "none", "value", "select", "PACX_W00076133" ];

t = o, e = 246, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var i = function(t, e) {
    return o[t -= 0];
}, n = require("../../components/newAuthorize/controlNewAuthorize.js"), r = require("../../utils/CommonTool.js"), c = require("../../utils/resourceConfig.js"), s = require("../../utils/pathManage.js");

function u(t) {
    return (u = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function(t) {
        return a(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? i("0x16") : a(t);
    })(t);
}

function l(t, e) {
    return function(t) {
        if (Array[i("0x4c")](t)) return t;
    }(t) || function(t, e) {
        var a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t[i("0x62")];
        if (null != a) {
            var o, n, r, c, s = [], u = !0, l = !1;
            try {
                if (r = (a = a.call(t)).next, 0 === e) {
                    if (Object(a) !== a) return;
                    u = !1;
                } else for (;!(u = (o = r.call(a))[i("0x13")]) && (s.push(o[i("0x72")]), s.length !== e); u = !0) ;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                l = !0, n = t;
            } finally {
                try {
                    if (!u && null != a.return && (c = a.return(), Object(c) !== c)) return;
                } finally {
                    if (l) throw n;
                }
            }
            return s;
        }
    }(t, e) || function(t, e) {
        if (t) {
            if ("string" == typeof t) return d(t, e);
            var a = {}.toString[i("0x3f")](t).slice(8, -1);
            return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array[i("0x30")](t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? d(t, e) : void 0;
        }
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function d(t, e) {
    (null == e || e > t[i("0x2f")]) && (e = t[i("0x2f")]);
    for (var a = 0, o = Array(e); a < e; a++) o[a] = t[a];
    return o;
}

function h(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e)[i("0x57")];
        })), a.push.apply(a, o);
    }
    return a;
}

function p(t) {
    for (var e = 1; e < arguments[i("0x2f")]; e++) {
        var a = null != arguments[e] ? arguments[e] : {};
        e % 2 ? h(Object(a), !0).forEach(function(e) {
            g(t, e, a[e]);
        }) : Object.getOwnPropertyDescriptors ? Object[i("0x4e")](t, Object[i("0x64")](a)) : h(Object(a)).forEach(function(e) {
            Object.defineProperty(t, e, Object[i("0x3d")](a, e));
        });
    }
    return t;
}

function g(t, e, a) {
    return (e = function(t) {
        var e = function(t, e) {
            if ("object" != u(t) || !t) return t;
            var a = t[Symbol.toPrimitive];
            if (void 0 !== a) {
                var o = a.call(t, e || "default");
                if ("object" != u(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
        }(t, "string");
        return "symbol" == u(e) ? e : e + "";
    }(e)) in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var x = getApp(), f = require("../../utils/datatist.js"), m = 0, v = 0 === x.globalData.environment ? "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/findImg/" : i("0x44"), T = 0 === x.globalData.environment ? "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/discoveryVideo/" : "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/discoveryVideo/", b = v + i("0x25"), y = v + "hot.png", S = v + "AVATAR.png";

Page(p(p(p({
    data: p(p(p({}, r.bannerFunc.data), {}, {
        navigationBarHeight: x[i("0xa")].customNavHeight,
        bannerLoginParams: {
            appid: "wx-xcx-yun-fuq",
            sourceType: "1001"
        },
        imgOriginVideo: T,
        findImg: b,
        hot: y,
        avatar: S,
        loginStatus: "",
        currentIndex: 0,
        serviceList: [],
        moduleList: [],
        hotSpotList: [],
        claimList: [],
        insuranceClass: [],
        InsuranceStrategyList: [],
        OldDriverList: [],
        RimSpecialList: [],
        isShowHotSpot: !1,
        serviceTop: 0,
        teachingTop: 0,
        strategyTop: 0,
        hotSpotTop: 0,
        questionTop: 0,
        onlineClaimTop: 0,
        recordsTop: 0,
        InsuranceStrategyTop: 0,
        OldDriverTop: 0,
        RimSpecialTop: 0,
        RimTop: 0,
        idList: [ "p1", "p2", "p3", "p4", "p5", i("0x2d"), "p7", "p8", "p9", "p10", i("0x33") ],
        windowHeight: x.globalData.windowHeight - 64,
        customNavHeight: x.globalData.customNavHeight
    }, n.authorizeCompAlert[i("0x1c")]), {}, {
        source: "",
        unionId: wx.getStorageSync("unionId"),
        flag: !0,
        p1Flag: !0,
        p2Flag: !0,
        p3Flag: !0,
        p4Flag: !0,
        p5Flag: !0,
        p6Flag: !0,
        p7Flag: !0,
        p8Flag: !0,
        p9Flag: !0,
        p10Flag: !0,
        p11Flag: !0,
        moduleObj: [],
        shareOpt: {},
        slideHide: !1,
        carNumber: "",
        bannerBackColorTop: i("0x53"),
        textColor: "#FFFFFF",
        searchInputBgColor: "#F6F7F8",
        isShowSearch: !0,
        plateId: 1 === x.globalData.environment ? "90166" : "10030168",
        page: 1,
        count: 10,
        specialShow: !1,
        insuranceStrategyShow: !1,
        oldDriverShow: !1,
        recordsShow: !1,
        teachingShow: !1,
        classShow: !1,
        hotSpotShow: !1,
        onlineClaimShow: !1,
        rimShow: !1,
        specialPath: "/uapi/cps-hcz-smallapp/carcircleTheme/getPageCwjxThemeList",
        specialFilter: [ i("0x70") ],
        insuranceStrategyPath: "/uapi/cps-hcz-smallapp/carcircle/topic/hottopic",
        oldDriverPath: "/uapi/cps-hcz-smallapp/carcircle/question/getNewQuestionRecommendList",
        rimPath: "/uapi/cps-hcz-smallapp/open-carcircle/circle/mylist",
        isFromVideo: !1,
        moduleType: [],
        videoPage: 1,
        isVideoLoading: !1,
        addNewData: [],
        goBackUrl: "",
        showGuide: !1,
        timelineInfo: {},
        bubbleProp: ""
    })
}, r.bannerFunc.allFunc), {}, {
    enterVideo: function(t) {
        console.log("进入视频e.detail", t.detail);
        var e = t.detail.contentId, a = t.detail[i("0x43")];
        f.customerTrack(i("0x6e"), {
            source: this[i("0x1c")].source,
            Public_Name: a,
            Public_ID: e
        }, null), console.log("PACX_W00079418", a, e), wx.navigateTo({
            url: "/pages/appVideo/appVideo?contentId=".concat(e, "&source=FaXianYe")
        });
    },
    getVideoList: function() {
        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        return new Promise(function(o, n) {
            x.$http({
                url: x.getRequestUrl("/uapi/cps-hcz-smallapp/find/carcircle/video/getRecommendVideo"),
                data: {
                    page: e,
                    count: a
                },
                needToken: !0
            }).then(function(e) {
                console.log("请求视频列表数据", e), f.customerTrack("PACX_W00079419", {
                    source: t.data.source
                }, null), e ? o(e) : n(!1);
            })[i("0x45")](function(t) {
                n(t);
            });
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!this.data.isVideoLoading) if (this.data.moduleType.includes("10")) {
            this[i("0x76")]({
                isVideoLoading: !0
            });
            var e = wx.getStorageSync(i("0x10")), a = "".concat(new Date().getFullYear(), i("0x1")).concat(new Date().getMonth(), i("0x1")).concat(new Date().getDate());
            wx.setStorageSync("videoPageDate", a), a !== e && (this.data.videoPage = 1), wx.setStorageSync("videoPage", this.data.videoPage), 
            this.getVideoList(this.data[i("0x49")]).then(function(e) {
                t.setData({
                    addNewData: e.data
                }, function() {
                    t[i("0x1c")].videoPage++, t.setData({
                        isVideoLoading: !1
                    });
                });
            }).catch(function(e) {
                console[i("0x26")]("视频列表加载错误", e), t.setData({
                    isVideoLoading: !1
                });
            });
        } else this.setData({
            isVideoLoading: !1
        });
    },
    onLoad: function(t) {
        var e = this, a = t[i("0x6b")], o = void 0 === a ? "" : a, n = t.source, r = void 0 === n ? "" : n;
        this.setData({
            source: r,
            goBackUrl: decodeURIComponent(o),
            textColor: this.data.isShowSearch ? "#CCCCCC" : this.data.textColor
        });
        var s = 1 === x.globalData.environment ? "1000054" : "1000131";
        (0, c[i("0x2c")])({
            tag: "discovery"
        }).then(function(t) {
            t ? e.data.timelineInfo = t[0] ? t[0].keyValueMap : {} : wx.hideShareMenu({
                menus: [ "shareTimeline" ]
            });
        }), x.getShareInfo(s).then(function(t) {
            e.data.shareOpt = Object.assign({
                shareCardName: t.shareCardName
            }, t.shareList[0]);
        }).catch(function(t) {
            console.log("error", t);
        }), console.log("\b资讯模块-不显示的数据 --\x3e", this[i("0x1c")].specialFilter);
    }
}, n[i("0x41")].methods), {}, {
    $http: function(t) {
        var e = t.path, a = t.httpUrl, o = t.params, n = void 0 === o ? {} : o, r = t.otherParam, c = void 0 === r ? {} : r;
        return !a && (a = "/uapi/cps-hcz-smallapp/collocateConfig/"), new Promise(function(t, o) {
            x.$http(p({
                url: x.getRequestUrl(""[i("0x63")](a).concat(e)),
                data: n
            }, c)).then(function(a) {
                console[i("0x26")]("通用的请求模块：".concat(e), a), t(a);
            }).catch(function(t) {
                console.log("通用的请求模块失败：".concat(e), t), o(t);
            });
        });
    },
    queryServiceList: function() {
        var t = this;
        this.$http({
            path: "list",
            httpUrl: "",
            params: {
                source: "findService"
            }
        }).then(function(e) {
            if (0 === e.code && e.data) {
                var a = e.data;
                a.length >= 9 && (a = a.slice(0, 9)), t[i("0x76")]({
                    serviceList: a
                }), t.data.serviceList.length > 0 && f.customerTrack("PACX_W00052139", {
                    source: t.data.source,
                    UnionId: t.data.unionId,
                    Public_Name: "服务模块"
                }, null), t.data.serviceList[i("0x58")](function(t) {
                    f.customerTrack(t.boomPoint, {}, null);
                }), console[i("0x26")](t.data.serviceList, "服务列表");
            }
        })[i("0x45")](function(t) {
            console.warn(i("0x38"), t);
        });
    },
    goToService: function(t) {
        var e = this, a = (t = t.detail && t[i("0x78")].currentTarget ? t[i("0x78")] : t).currentTarget.dataset[i("0x1e")], o = t.currentTarget.dataset.clickpoint, n = {}, r = t.currentTarget.dataset[i("0x46")];
        if (f.customerTrack(o, {
            source: this.data.source,
            UnionId: this.data.unionId,
            serviceName: r
        }, null), console.log(a, i("0x1e")), a) {
            var c = a.split("#/")[0].split("?")[1];
            c && (c = c.split("&")).forEach(function(t) {
                var e = t[i("0xb")]("=");
                n[e[0]] = e[1];
            });
        }
        console[i("0x26")](n);
        var s, u = n.appId, l = n.envVersion, d = void 0 === l ? "release" : l, h = n[i("0x30")];
        if (console.log(u, d, h), u) s = h ? a.indexOf("?") > -1 ? "".concat(a, "&from=").concat(h) : ""[i("0x63")](a, "?from=").concat(h) : a, 
        console.log(i("0x60"), s), wx.navigateToMiniProgram({
            appId: u,
            path: s,
            envVersion: d,
            success: function() {}
        }); else {
            var p = function() {
                wx.navigateTo({
                    url: "".concat(a),
                    success: function() {
                        console.log("用车服务--Item--跳转的路径--\x3e", "".concat(a));
                    }
                });
            };
            if ("查保单" === r || "投保签名" === r || "停车缴费" === r) this[i("0x54")]().then(function() {
                p();
            }, function(a) {
                console.log("没有通过验证login-state和login-info的验证>>>>", a), e.showPhone("goToService", t) && p();
            }); else {
                var g = function(t) {
                    var a = {
                        "一键代驾": {
                            1: i("0x32"),
                            2: i("0x8"),
                            3: "PACX_W39000114"
                        },
                        "油卡充值": {
                            1: "PACX_W39000115",
                            2: "PACX_W39000116",
                            3: "PACX_W39000117"
                        }
                    };
                    f[i("0x51")](a[r][t.code], {
                        source: e.data.source
                    }, null);
                };
                switch (r) {
                  case "一键代驾":
                    x.subscribeFunc([ "D612WwD9y7yH8xHNfzTWMQzPLTF5M3JmRJFga7zpfKU", "fZoG5zH5t8uys755zevIiVMcszjCc4Yz0t0ticBCbBU" ], [ i("0x5b"), "s4MjangTbrlHY8L_xrCy11Py7YxAql6kv3Xb2icSefw" ], p, p, "djdy_subscription", !0, g);
                    break;

                  case "油卡充值":
                    x.subscribeFunc([ "cRsiRpnNg7u3gbBnU0MDtw0eNzcgf8CQbmGYQpLXCaQ" ], [ "rBR2Sjt4DKQkF0wBqIUlFdkiaytNXycOWfxXoCkWMYA" ], p, p, "ykcz_subscription", !0, g);
                    break;

                  default:
                    p();
                }
            }
        }
    },
    openServiceMore: function() {
        f.customerTrack(i("0x3c"), {
            source: this.data.source,
            UnionId: this.data.unionId
        }, null), wx[i("0x39")]({
            url: i("0x19")
        });
    },
    queryModuleList: function() {
        var t = this, e = {
            source: i("0x56")
        };
        this.$http({
            path: i("0x50"),
            httpUrl: "",
            params: e,
            otherParam: {
                needToken: !0
            }
        })[i("0x35")](function(e) {
            if (0 === e[i("0x3")] && e.data) {
                for (var a = e[i("0x1c")], o = [], n = {
                    1: {
                        type: "teachingList"
                    },
                    2: {
                        type: "insuranceStrategyList"
                    },
                    3: {
                        type: i("0x24")
                    },
                    4: {
                        type: "oldDriverList"
                    },
                    5: {
                        type: "onlineClaimList"
                    },
                    6: {
                        type: "recordsList"
                    },
                    7: {
                        type: "classList"
                    },
                    8: {
                        type: "specialList"
                    },
                    9: {
                        type: "rimList"
                    }
                }, r = [], c = [], s = 0; s < a.length; s++) {
                    o.push(a[s].keyValue.plateType);
                    var u = (a[s].keyValue || {}).plateType;
                    if (u && n[u]) switch (n[u][i("0x11")]) {
                      case "specialList":
                        t.setData({
                            specialShow: !0
                        }), t.getScrollOffset("p10");
                        break;

                      case i("0x37"):
                        t.setData({
                            insuranceStrategyShow: !0
                        }), t.getScrollOffset(i("0x6c"));
                        break;

                      case "oldDriverList":
                        t.setData({
                            oldDriverShow: !0
                        }), t.getScrollOffset("p8");
                        break;

                      case "recordsList":
                        t.setData({
                            recordsShow: !0
                        }), t.getScrollOffset("p7");
                        break;

                      case "teachingList":
                        t.setData({
                            teachingShow: !0
                        }), t.getScrollOffset("p2");
                        break;

                      case "classList":
                        t.setData({
                            classShow: !0
                        });
                        break;

                      case "hotSpotList":
                        t.setData({
                            hotSpotShow: !0
                        }), t.getScrollOffset("p4");
                        break;

                      case i("0x12"):
                        t.setData({
                            onlineClaimShow: !0
                        }), t.getScrollOffset("p6");
                        break;

                      case "rimList":
                        t.setData({
                            rimShow: !0
                        }), t.getScrollOffset("p11");
                    }
                }
                if (o.indexOf("5") > -1 && (r = a.filter(function(t) {
                    return "5" === t[i("0x29")][i("0x6d")];
                })[0].subs), o.indexOf("7") > -1 && (c = a[i("0x65")](function(t) {
                    return "7" === t.keyValue.plateType;
                })[0].subs)) {
                    for (var l = 0; l < c[i("0x2f")]; l++) c[l].keyValue[i("0x5")] = !1, c[l].keyValue.url.indexOf("appVideo") > -1 && (c[l][i("0x29")].isVideo = !0);
                    t.setData({
                        insuranceClass: c
                    });
                }
                t.setData({
                    moduleList: a
                }), t[i("0x1c")].claimList = r, t.data.moduleType = o, console.log(t.data.moduleList, t.data.hotSpotList, t.data.claimList, "栏目列表");
            }
        }).catch(function(t) {
            console[i("0x9")]("查询栏目列表失败：", t);
        });
    },
    queryHotSpot: function(t) {
        return new Promise(function(e) {
            x[i("0x55")]({
                url: x.getRequestUrl("/uapi/cps-hcz-smallapp/carcircle/vote/getinfo"),
                data: {
                    vote_id: t
                }
            }).then(function(t) {
                console.log("获取投票基本信息--success", t), 0 === t[i("0x3")] && e(t.data);
            }).catch(function(t) {
                console.log("获取投票基本信息--fail", t), e({
                    isShowHotSpot: !1
                });
            });
        });
    },
    queryHotSpotVoted: function(t) {
        return new Promise(function(e) {
            x.$http({
                url: x[i("0x7")](i("0x61")),
                data: {
                    vote_id: t
                },
                needToken: !0,
                needLogin: !0
            }).then(function(t) {
                if (console.log("获取投票后信息--success", t), 0 === t.code) {
                    if (t.data) {
                        var a = t.data;
                        a.left_width = a[i("0x42")] / (a.vote_left_count + a[i("0x4f")]) * 100;
                    }
                    e(t);
                }
            }).catch(function(t) {
                console.log("获取投票后信息--fail", t), e({});
            });
        });
    },
    goToTeachingMore: function(t) {
        var e = t.currentTarget.dataset.moreurl, a = t.currentTarget.dataset.text;
        f.customerTrack(i("0x40"), {
            source: this.data.source,
            UnionId: this[i("0x1c")].unionId,
            Public_Name: a
        }, null), wx.navigateTo({
            url: e
        });
    },
    goToTeaching: function(t) {
        var e = t.currentTarget.dataset.url, a = t.currentTarget.dataset.id, o = t.currentTarget.dataset[i("0x46")];
        f[i("0x51")]("PACX_W00052147", {
            source: this[i("0x1c")].source,
            UnionId: this[i("0x1c")][i("0x2a")],
            productID: a,
            Public_Name: o
        }, null);
        x.globalData.envVersion, x[i("0x55")]({
            url: x.getRequestUrl("/uapi/pg_activity/findPage/readNumAdd"),
            data: {
                id: a
            }
        }).then(function(t) {
            console[i("0x26")](t, "success");
        }).catch(function(t) {
            console.log(t, "err");
        }), wx.navigateTo({
            url: e
        });
    },
    goToStrategy: function(t) {
        var e = t[i("0x2e")][i("0x1a")].id, a = t.currentTarget[i("0x1a")].text;
        f[i("0x51")](i("0x75"), {
            source: this.data.source,
            UnionId: this.data.unionId,
            productID: e,
            Public_Name: a
        }, null);
    },
    currentHandleIndex: function(t) {
        var e = t.detail[i("0x14")], a = t.currentTarget.dataset.point, o = this[i("0x1c")].hotSpotList[e].voteId, n = this.data.hotSpotList[e][i("0x5c")];
        -1 === this.data[i("0x52")].indexOf(o) && (this.data.moduleObj[i("0x28")](o), f.customerTrack(a, {
            source: this.data.source,
            UnionId: this[i("0x1c")].unionId,
            productID: o,
            Public_Name: n
        }, null)), this.setData({
            currentIndex: e
        });
    },
    goToHotSpotDetail: function(t) {
        var e = t.currentTarget.dataset.voteid, a = t.currentTarget.dataset[i("0x46")];
        f.customerTrack("PACX_W00052149", {
            source: this.data.source,
            UnionId: this.data.unionId,
            productID: e,
            Public_Name: a
        }, null), wx[i("0x39")]({
            url: "/pages/appConcent/appVote/appVote?voteId="[i("0x63")](e)
        });
    },
    vote: function(t) {
        var e = this;
        t = t[i("0x78")] && t.detail[i("0x2e")] ? t.detail : t;
        var a = function() {
            var a = t.currentTarget[i("0x1a")][i("0x1d")], o = t.currentTarget.dataset.button, n = t.currentTarget[i("0x1a")][i("0xf")];
            f.customerTrack("PACX_W00052154", {
                source: e.data.source,
                UnionId: e[i("0x1c")].unionId,
                productID: a,
                buttonName: o
            }, null), x.$http({
                url: x.getRequestUrl("/uapi/cps-hcz-smallapp/carcircle/vote/set"),
                data: {
                    vote_id: a,
                    vote_direction: n
                },
                needToken: !0,
                needLogin: !0
            }).then(function(t) {
                console[i("0x26")]("获取投票返回：", t), 0 === t.code ? (wx.showToast({
                    title: i("0x23"),
                    icon: "none",
                    duration: 3e3
                }), setTimeout(function() {
                    wx.navigateTo({
                        url: "/pages/appConcent/appVote/appVote?voteId=".concat(a)
                    });
                }, 1e3)) : 52 === t[i("0x3")] && (wx[i("0x6")]({
                    title: t[i("0x66")],
                    icon: i("0x71"),
                    duration: 3e3
                }), e.setData({
                    loginStatus: "hczLogin"
                }), e[i("0x69")]());
            }).catch(function(t) {
                console.log("获取投票失败--fail", t);
            });
        };
        console[i("0x26")]("通过头像昵称的验证》》》》"), this.beforeShowPhone().then(function() {
            console.log("通过登录态的验证》》》》"), a();
        }, function(o) {
            console.log("没有通过验证login-state和login-info的验证>>>>", o), e[i("0x3a")]("vote", t) && a();
        });
    },
    goToQuestion: function(t) {
        var e = t.currentTarget[i("0x1a")].id, a = t.currentTarget[i("0x1a")].text;
        f.customerTrack("PACX_W00052150", {
            source: this[i("0x1c")].source,
            UnionId: this.data.unionId,
            productID: e,
            Public_Name: a
        }, null);
    },
    goToClaimList: function() {
        wx.showToast({
            title: "暂未开放,敬请期待！",
            icon: "none",
            duration: 2e3
        });
    },
    goToClaimMore: function(t) {
        var e = t[i("0x2e")].dataset.moreurl;
        wx.navigateTo({
            url: e
        });
    },
    showMoreComment: function() {
        wx.navigateTo({
            url: "/pages/appConcent/appCircle/appCircle?source=FaXianYe-tiaozhuan&circleId=".concat(this.data[i("0x17")])
        });
    },
    handleOnlineClaim: function(t) {
        var e = t.detail.current, a = t.currentTarget.dataset.point, o = this.data.claimList[e].id, n = this.data.claimList[e][i("0x46")];
        -1 === this[i("0x1c")][i("0x52")].indexOf(o) && (this.data.moduleObj[i("0x28")](o), 
        f.customerTrack(a, {
            source: this[i("0x1c")].source,
            UnionId: this[i("0x1c")].unionId,
            productID: o,
            Public_Name: n
        }, null));
    },
    goToRecordMore: function(t) {
        var e = t[i("0x2e")][i("0x1a")].moreurl;
        wx[i("0x39")]({
            url: e
        });
    },
    goToRecord: function(t) {
        var e = t.currentTarget.dataset.url, a = t.currentTarget.dataset.id, o = t.currentTarget.dataset.text;
        f.customerTrack(i("0x6a"), {
            source: this.data[i("0x67")],
            UnionId: this.data.unionId,
            productID: a,
            Public_Name: o
        }, null), wx.navigateTo({
            url: e
        });
    },
    getScrollOffset: function(t) {
        var e = wx[i("0x48")](), a = "#" + t, o = this;
        e[i("0x73")](a).boundingClientRect().selectViewport().scrollOffset().exec(function(e) {
            if (e[0]) switch (t) {
              case "p1":
                o.setData({
                    serviceTop: e[0][i("0x59")]
                });
                break;

              case "p2":
                o.setData({
                    teachingTop: e[0].top
                });
                break;

              case i("0x31"):
                o.setData({
                    strategyTop: e[0].top
                });
                break;

              case "p4":
                o.setData({
                    hotSpotTop: e[0].top
                });
                break;

              case "p5":
                o.setData({
                    questionTop: e[0].top
                });
                break;

              case i("0x2d"):
                o.setData({
                    onlineClaimTop: e[0].top
                });
                break;

              case i("0x36"):
                o.setData({
                    recordsTop: e[0][i("0x59")]
                });
                break;

              case "p8":
                o.setData({
                    OldDriverTop: e[0].top
                });
                break;

              case "p9":
                o[i("0x76")]({
                    InsuranceStrategyTop: e[0].top
                });
                break;

              case "p10":
                o.setData({
                    RimSpecialTop: e[0].top
                });
                break;

              case "p11":
                o.setData({
                    RimTop: e[0].top
                });
            }
        });
    },
    setKeyWord: function(t) {
        var e = t.detail[i("0x14")];
        if (e || 0 === e) {
            var a = this.data.searchValueList, o = ((void 0 === a ? [] : a)[e] || {}).hotWord;
            this.setData({
                currentValue: o || ""
            });
        }
    },
    goToSearch: function() {
        var t = this;
        console.log("-------点击搜索框-----"), this.data.getHotSearchTimer && clearTimeout(this.data[i("0x2b")]), 
        this.data.getHotSearchTimer = setTimeout(function() {
            console.log("--0.5s后 真正执行请求--"), t.getHotSearch().then(function() {
                var e = t.data.currentValue, a = {
                    from: t.data.fromPage,
                    source: t.data.trackSource,
                    searchKeyWords: e
                }, o = Object.entries(a).reduce(function(t, e) {
                    var a = l(e, 2), o = a[0], n = a[1];
                    return n && (t += i("0x5a").concat(o, i("0xd"))[i("0x63")](n)), t;
                }, "/pages/webview/webview?pageType=globalSearch");
                (0, s.goNextPage)(o, "navigateTo").then(function() {
                    console[i("0x26")](i("0x21"), t.data.trackSource), f[i("0x51")](i("0x74"), {
                        source: t.data.trackSource || ""
                    }, null), setTimeout(function() {
                        f.customerTrack(i("0x1f"), {
                            portalsource: t.data[i("0x22")] || ""
                        }, null);
                    }, 100), setTimeout(function() {
                        f.customerTrack("PACX_W00076809", {
                            portalsource: t.data[i("0x22")] || "",
                            keywords: e
                        }, null);
                    }, 200);
                });
            }).catch(function(t) {
                console[i("0x9")]("打开搜索页面错误：", t);
            });
        }, 500);
    },
    getHotSearch: function() {
        var t = this;
        console.log(i("0x3b"));
        var e = wx.getStorageSync("cityName") || "";
        return x[i("0x55")]({
            url: x.getRequestUrl("/aops-search/hotword/searchByWeiXinMini", "static"),
            data: {
                city: e,
                portalSource: 1
            }
        }).then(function(e) {
            if (e && "00" === e.code && e.data) {
                var a = e.data.hotword || [], o = {
                    searchValueList: a,
                    currentValue: (a[0] || {
                        hotWord: ""
                    }).hotWord
                };
                t.setData(o), wx.setStorageSync("hotWord", o), wx[i("0x4a")](i("0xe"), handleTime.getTime());
            }
        })[i("0x45")](function(t) {
            console.warn("err", t);
        });
    },
    onPageScroll: function(t) {
        var e = this, a = t.scrollTop;
        this.data[i("0x1b")] && (this.data.idList.map(function(t) {
            e.getScrollOffset(t);
        }), this.setData({
            flag: !1
        })), 0 !== this.data.teachingTop && this.data.p2Flag && this.data.teachingTop - a < this[i("0x1c")].windowHeight && (f.customerTrack("PACX_W00052139", {
            source: this[i("0x1c")].source,
            UnionId: this.data.unionId,
            Public_Name: this.data.moduleList.filter(function(t) {
                return "1" === t[i("0x29")].plateType;
            })[0].text
        }, null), this.setData({
            p2Flag: !1
        })), 0 !== this.data.strategyTop && this.data.p3Flag && this.data.strategyTop - a < this.data.windowHeight && (f.customerTrack("PACX_W00052139", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: this.data.moduleList.filter(function(t) {
                return "2" === t.keyValue.plateType;
            })[0][i("0x46")]
        }, null), this[i("0x76")]({
            p3Flag: !1
        })), 0 !== this[i("0x1c")].hotSpotTop && this.data.p4Flag && this.data.hotSpotTop - a < this.data.windowHeight && (f.customerTrack("PACX_W00052139", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: this.data.moduleList.filter(function(t) {
                return "3" === t[i("0x29")].plateType;
            })[0].text
        }, null), this.setData({
            p4Flag: !1
        })), 0 !== this[i("0x1c")][i("0x47")] && this.data.p5Flag && this[i("0x1c")].questionTop - a < this[i("0x1c")].windowHeight && (f.customerTrack("PACX_W00052139", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: this.data.moduleList[i("0x65")](function(t) {
                return "4" === t.keyValue.plateType;
            })[0].text
        }, null), this.setData({
            p5Flag: !1
        })), 0 !== this.data.onlineClaimTop && this.data.p6Flag && this.data.onlineClaimTop - a < this[i("0x1c")].windowHeight && (f.customerTrack(i("0x2"), {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: this.data.moduleList.filter(function(t) {
                return t.keyValue.plateType === i("0x15");
            })[0][i("0x46")]
        }, null), this.setData({
            p6Flag: !1
        })), 0 !== this.data.recordsTop && this.data.p7Flag && this[i("0x1c")].recordsTop - a < this.data.windowHeight && (f.customerTrack("PACX_W00052139", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: this.data.moduleList.filter(function(t) {
                return "6" === t.keyValue.plateType;
            })[0].text
        }, null), this.setData({
            p7Flag: !1
        })), 0 !== this[i("0x1c")][i("0x4")] && this.data.p9Flag && this.data.InsuranceStrategyTop - a < this[i("0x1c")][i("0x18")] && (f.customerTrack("PACX_W00069523", {
            source: this.data.source || i("0xc"),
            UnionId: this[i("0x1c")].unionId,
            Public_Name: this.data[i("0x20")].filter(function(t) {
                return t.keyValue[i("0x6d")] === i("0x68");
            })[0].text,
            productID: this.data.moduleList[i("0x65")](function(t) {
                return "2" === t[i("0x29")].plateType;
            })[0].id
        }, null), this.setData({
            p9Flag: !1
        })), 0 !== this[i("0x1c")][i("0x0")] && this.data[i("0x34")] && this.data.RimSpecialTop - a < this.data.windowHeight && (f.customerTrack("PACX_W00071724", {
            source: this.data[i("0x67")],
            Public_Name: this.data.moduleList.filter(function(t) {
                return "8" === t.keyValue[i("0x6d")];
            })[0].text,
            Public_ID: this.data.moduleList[i("0x65")](function(t) {
                return t.keyValue.plateType === i("0x6f");
            })[0].id
        }, null), this.setData({
            p10Flag: !1
        })), 0 !== this.data.RimTop && this.data.p11Flag && this.data.RimTop - a < this.data.windowHeight && (f.customerTrack(i("0x5d"), {
            source: this[i("0x1c")].source || "FaXianYe-QuanZiXiangQing",
            Public_Name: this[i("0x1c")].moduleList.filter(function(t) {
                return "9" === t.keyValue[i("0x6d")];
            })[0].text,
            Public_ID: this.data[i("0x20")].filter(function(t) {
                return t.keyValue.plateType === i("0x3e");
            })[0][i("0x5f")]
        }, null), this.setData({
            p11Flag: !1
        })), a > m ? this.setData({
            slideHide: !0
        }) : this.setData({
            slideHide: !1
        }), m = a;
    },
    onReady: function() {
        this.selectComponent("#waterfall") && this.onReachBottom();
    },
    onShow: function() {
        var t = this;
        if (this.data.isFromVideo) this.data.isFromVideo = !1; else {
            var e = this.selectComponent("#waterfall");
            e && (e.init(2), this.onReachBottom());
        }
        this.renderBanner("2"), this.setData({
            carNumber: i("0x27")
        }), x.loginInfo().then(function() {
            t.setData({
                loginStatus: "hczLogin",
                bubbleProp: i("0x5e")
            }), wx.setStorageSync("loginStatus", "hczLogin");
        }).catch(function() {
            t.setData({
                loginStatus: "noLogin"
            }), wx.setStorageSync("loginStatus", "noLogin");
        }), this.queryServiceList(), this.queryModuleList(), f.customerTrack("PACX_W00052134", {
            source: this.data.source,
            UnionId: this.data[i("0x2a")]
        }, null), setTimeout(function() {
            t[i("0x1c")].observer && t.data[i("0x77")].disconnect(), t.data.observer = t.createIntersectionObserver({
                observeAll: !0
            }), t[i("0x1c")][i("0x77")][i("0x4b")](".scroll-view")[i("0x4d")](".scroll-view-item", function(e) {
                if (e.intersectionRatio > 0) {
                    var a = e.dataset, o = a.point, n = a.id, r = a.text;
                    -1 === t.data.moduleObj.indexOf(n) && (t.data[i("0x52")].push(n), f.customerTrack(o, {
                        source: t.data[i("0x67")],
                        UnionId: t.data.unionId,
                        productID: n,
                        Public_Name: r
                    }, null));
                }
            });
        }, 2e3);
    },
    onHide: function() {
        this.setData({
            moduleObj: []
        }), this.data[i("0x77")] && this.data.observer.disconnect();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.shareOpt.shareText,
            path: this.data.shareOpt.jumpUrl,
            imageUrl: this.data.shareOpt.sharePictureUrl
        };
    },
    onShareTimeline: function() {
        var t = this.data.timelineInfo || {}, e = t.shareText, a = t.sharePictureUrl;
        return {
            title: e || this.data.shareOpt.shareText,
            query: "source=PengYouQuan",
            imageUrl: a || this.data.shareOpt.sharePictureUrl
        };
    }
}));
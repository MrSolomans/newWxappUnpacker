require("../../@babel/runtime/helpers/Arrayincludes");

var e = require("../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../@babel/runtime/helpers/asyncToGenerator"), n = require("../../@babel/runtime/helpers/objectSpread2"), a = g(require("../../utils/newSubscribe.js")), o = require("../../utils/pathManage.js"), r = require("../../utils/CommonTool.js"), i = g(require("../../utils/resourceConfig.js")), c = require("../../components/newAuthorize/controlNewAuthorize.js"), s = l(require("../../utils/log.js")), u = l(require("../../utils/util.js"));

function l(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function d(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(), n = new WeakMap();
    return (d = function(e) {
        return e ? n : t;
    })(e);
}

function g(e, t) {
    if (!t && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var n = d(t);
    if (n && n.has(e)) return n.get(e);
    var a = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var r in e) if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
        i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r];
    }
    return a.default = e, n && n.set(e, a), a;
}

var h = getApp(), f = require("../../utils/datatist.js"), m = h.globalData.environment, p = h.getRequestUrl("/cps/hcz-miniprogram/images/mine/", "hczStatic"), v = p + "myLicense.png", w = p + "myCommission.png", y = p + "myClaim.png", b = p + "myCar.png", S = p + "myOrder.png", I = p + "addBtn.png", P = p + "baseCarLogo.png", T = p + "avatar.png", x = h.getRequestUrl("/cps/hcz-miniprogram/images/springFestivalSkin/mineTopBg.png", "hczStatic"), C = null;

Page(n(n(n({
    data: n(n(n({}, r.bannerFunc.data), {}, {
        bannerLoginParams: {
            appid: "wx-xcx-yun-fuq",
            sourceType: "1003"
        }
    }, c.authorizeCompAlert.data), {}, {
        isIphoneX: h.globalData.isIPX,
        navigationBarHeight: h.globalData.customNavHeight,
        userInfo: {},
        userphone: "",
        memberLevelImg: "",
        memberLevel: "",
        cardAmount: "",
        carOwnerClubUrl: "",
        gradeUrl: "",
        score: "",
        effectivePoints: 0,
        unenforcedPoints: 0,
        gifts: 0,
        dotOnOff: !1,
        isGetPhoneNumber: !0,
        source: "",
        unionId: wx.getStorageSync("unionId"),
        activeBannerArr: [],
        loginStatus: "",
        loginParams: {
            appid: "wx-xcx-my-page",
            sourceType: 1e3
        },
        shareCardInfo: {},
        current: 0,
        bindSectorOutVo: {},
        carBenefits: [],
        toolSectorOutVo: {},
        vipInterestOutVo: {},
        hczWelfarePlanOutVoUrl: "",
        bindSectorOutVoUrl: "",
        isHasSign: !1,
        currentIndex: 0,
        isFollowAccount: !1,
        moduleObj: [],
        carNumber: "",
        activityIdMore: 1 === h.globalData.environment ? "ae8061f92ff043b2839752b9b8ecb2fb" : "8d6570b9389749eba695e923842315c7",
        myLicense: v,
        myCommission: w,
        myClaim: y,
        myCar: b,
        myOrder: S,
        addBtn: I,
        baseCarLogo: P,
        avatarImg: T,
        carNo: "",
        carVioNum: 0,
        carVioHandleUrl: "/pages/checkViolations/checkViolations",
        logo: "",
        vehicleDisplayName: "",
        mineTopBg: x,
        navigationBarHave: !1,
        backgroundPosition: "",
        familyTh: [ {
            count: 1,
            msg: "健康"
        }, {
            count: 2,
            msg: "意外"
        }, {
            count: 3,
            msg: "财产"
        }, {
            count: 4,
            msg: "车险"
        } ],
        isShowFamilyModule: !1,
        familyOverviewList: [],
        goFamilyUrl: "",
        familyList: [],
        showGuide: !1,
        options: {},
        observer: "",
        timelineInfo: {},
        bubbleProp: "",
        isShowUserRedDot: !1,
        skinObj: {
            bannerTopBg: "",
            navScrollBgColor: ""
        },
        currentNavScrollBgColor: "",
        sceneId: 1 === h.globalData.environment ? 127 : 210
    })
}, r.bannerFunc.allFunc), {}, {
    $http: function(e) {
        var t = e.path, a = e.params, o = void 0 === a ? {} : a, r = e.headers, i = void 0 === r ? {} : r, c = e.otherParam, s = void 0 === c ? {} : c;
        return new Promise(function(e, a) {
            h.$http(n({
                url: t,
                data: o,
                header: n({
                    "Content-Type": "application/json"
                }, i)
            }, s)).then(function(t) {
                e(t);
            }).catch(function(e) {
                a(e);
            });
        });
    },
    getSkinConfig: function() {
        var n = this;
        return t(e().mark(function t() {
            var a, o, r, i, c, s;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, h.$http({
                        url: h.getRequestUrl("/uapi/cps-hcz-smallapp/collocateConfig/list"),
                        data: {
                            source: "main_mineSkin"
                        },
                        needToken: !0
                    });

                  case 2:
                    a = e.sent, o = a.code, r = a.data, console.warn("获取换肤配置 ========>", a), 0 === o && r && r.length > 0 ? (i = r[0].keyValue || {}, 
                    c = i.bannerTopBg, s = i.bgColor, n.setData({
                        skinObj: {
                            bannerTopBg: c,
                            navScrollBgColor: s
                        }
                    })) : n.setData({
                        skinObj: {
                            bannerTopBg: "",
                            navScrollBgColor: "#FF8727"
                        }
                    });

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    onScroll: function(e) {
        var t = this.data.skinObj.navScrollBgColor, n = e && e.detail && e.detail.scrollTop;
        t && this.setData({
            currentNavScrollBgColor: n >= 34 ? t : ""
        });
    },
    queryPageInfo: function(e) {
        var t = this, a = {
            source: "myPageInfo",
            city: e
        };
        return this.$http({
            path: h.getRequestUrl("/uapi/cps-hcz-smallapp/collocateConfig/list"),
            params: a,
            otherParam: {
                needToken: !0
            }
        }).then(function(e) {
            if (e && 0 === e.code) {
                var a = e.data, o = a.hczWelfarePlanOutVo, r = a.bindSectorOutVo;
                o && (t.data.hczWelfarePlanOutVoUrl = o.url), r && (t.data.bindSectorOutVoUrl = r.url), 
                t.setData(n({}, a));
            } else -4 === e.code && console.log("没有配置信息");
        });
    }
}, c.authorizeCompAlert.methods), {}, {
    goToUserInfo: function() {
        var e = this;
        setTimeout(function() {
            f.customerTrack("PACX_W00054297", {
                source: e.data.source,
                UnionId: e.data.unionId
            }, null);
        }, 1e3);
        var t = this.data.userInfo, n = t.avatarUrl, a = void 0 === n ? "" : n, o = t.nickName, r = void 0 === o ? "" : o;
        wx.navigateTo({
            url: "/pages/rightMore/userInfo/userInfo",
            success: function() {
                f.customerTrack("PACX_W020001", {
                    avatar: a,
                    nickName: r
                }, null);
            }
        });
    },
    currentHandleIndex: function(e) {
        var t = e.detail.current;
        if (this.data.activeBannerArr && this.data.activeBannerArr.length > 0 && this.data.activeBannerArr[t]) {
            var n = this.data.activeBannerArr[t].id, a = this.data.activeBannerArr[t].advertName;
            -1 === this.data.moduleObj.indexOf(n) && (this.data.moduleObj.push(n), f.customerTrack("PACX_W00054309", {
                source: this.data.source,
                Public_Name: a,
                UnionId: this.data.unionId
            }, null));
        }
        this.setData({
            currentIndex: t
        });
    },
    memberLevelPage: function(e) {
        var t = this, n = (e = e.detail.currentTarget ? e.detail : e).currentTarget.dataset.type, a = e.currentTarget.dataset.content, o = e.currentTarget.dataset.button;
        "1" === n ? f.customerTrack("PACX_W00054299", {
            source: this.data.source,
            UnionId: this.data.unionId
        }, null) : "2" === n ? f.customerTrack("PACX_W00054302", {
            source: this.data.source,
            UnionId: this.data.unionId
        }, null) : "3" === n && f.customerTrack("PACX_W00054303", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: a,
            buttonName: o
        }, null);
        var r = function() {
            var e = "/pages/rightMore/memberLevel/memberLevel?carOwnerClubUrl=".concat(encodeURIComponent(t.data.carOwnerClubUrl));
            wx.navigateTo({
                url: e
            });
        };
        this.beforeShowPhone().then(function() {
            r();
        }, function(n) {
            console.log("没有通过验证login-state和login-info的验证>>>>", n), t.showPhone("memberLevelPage", e) && r();
        });
    },
    goToCheckIn: function() {
        f.customerTrack("PACX_W00054301", {
            source: this.data.source,
            UnionId: this.data.unionId
        }, null);
        var e = 0 === h.globalData.environment ? "2006884288729757093" : "6871594899367433";
        wx.navigateTo({
            url: "/pages/activity/knowledge/knowledge?activityId=".concat(e),
            success: function() {
                f.customerTrack("PACX_W00013708", {}, null);
            }
        });
    },
    bdcxpage: function() {
        var e = this, t = function() {
            wx.navigateTo({
                url: "/pages/webview/webview?pageType=policyCenter",
                success: function() {
                    f.customerTrack("PACX_W00054304", {
                        source: e.data.source,
                        UnionId: e.data.unionId,
                        Public_Name: "保单"
                    }, null);
                }
            });
        };
        this.beforeShowPhone().then(function() {
            t();
        }, function(n) {
            console.log("没有通过验证login-state和login-info的验证>>>>", n), e.showPhone("bdcxpage") && t();
        });
    },
    mylipinpage: function() {
        var e = this;
        f.customerTrack("PACX_W00054304", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: "卡券"
        }, null);
        var t = function() {
            wx.navigateTo({
                url: "/pages/webview/webview?pageType=myCardTicket&source=pa18-mp-personal",
                success: function() {}
            });
        };
        this.beforeShowPhone().then(function() {
            t();
        }, function(n) {
            console.log("没有通过验证login-state和login-info的验证>>>>", n), e.showPhone("mylipinpage") && t();
        });
    },
    memberScorePage: function(e) {
        var t = this;
        e = e.detail.currentTarget ? e.detail : e, f.customerTrack("PACX_W00054300", {
            source: this.data.source,
            UnionId: this.data.unionId
        }, null);
        var n = function() {
            wx.navigateTo({
                url: "/pages/rightMore/memberScore/memberScore",
                success: function() {
                    f.customerTrack("PACX_W140003", {}, null);
                }
            });
        };
        this.beforeShowPhone().then(function() {
            n();
        }, function(a) {
            console.log("没有通过验证login-state和login-info的验证>>>>", a), t.showPhone("memberScorePage", e) && n();
        });
    },
    goToWelfare: function(e) {
        var t = this, n = e.currentTarget.dataset.url, a = e.currentTarget.dataset.text;
        setTimeout(function() {
            f.customerTrack("PACX_W00001379", {
                source: t.data.source,
                UnionId: t.data.unionId,
                Public_Name: a
            }, null);
        }, 1e3), (0, o.goNextPage)(n, "navigateTo");
    },
    goToTools: function(e) {
        var t = ((e = e && e.detail && e.detail.currentTarget ? e.detail : e).currentTarget || {
            dataset: {}
        }).dataset, n = t.url, a = t.title;
        n && (n.indexOf("/pages/h5Embed/myAssemble/myAssemble") > -1 || n.indexOf("pages/h5Embed/oilRecharge/oilRecharge") > -1) || n ? (0, 
        o.goNextPage)(n, "navigateTo") : console.warn("url参数不存在无法跳转：", e), f.customerTrack("PACX_W00054306", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: a
        }, null);
    },
    goToFollow: function(e) {
        var t = e.currentTarget.dataset.title;
        f.customerTrack("PACX_W00054306", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: t
        }, null);
    },
    myOrdersPage: function() {
        var e = this, t = function() {
            wx.navigateTo({
                url: "/pages/h5Embed/myOrders/myOrders",
                success: function() {
                    f.customerTrack("PACX_W00054304", {
                        source: e.data.source,
                        UnionId: e.data.unionId,
                        Public_Name: "订单"
                    }, null);
                }
            });
        }, n = null, a = wx.getStorageSync("querySubIsAllow");
        a && (n = a.to_be_paid, wx.removeStorageSync("querySubIsAllow")), wx.getStorageSync("hczAccessToken") && 0 === n ? C.applyMsgSubscription().then(function() {
            t();
        }) : this.beforeShowPhone().then(function() {
            t();
        }, function(n) {
            console.log("没有通过验证login-state和login-info的验证>>>>", n), e.showPhone("myOrdersPage") && t();
        });
    },
    myMiddleFunPage: function(e) {
        var t = this, n = (e = e.detail.currentTarget ? e.detail : e).currentTarget.dataset, a = n.url, o = n.publicname;
        console.log(a, o), wx.navigateTo({
            url: a,
            success: function() {
                f.customerTrack("PACX_W00054304", {
                    source: t.data.source,
                    UnionId: t.data.unionId,
                    Public_Name: o
                }, null);
            }
        });
    },
    myCarPage: function() {
        var e = this, t = function() {
            h.getLocationInfo("city").then(function() {
                var t = wx.getStorageSync("cityName") || "深圳", n = "/pages/webview/webview?pageType=carIndex&source=186&city=".concat(t);
                wx.navigateTo({
                    url: n,
                    success: function() {
                        f.customerTrack("PACX_W00054304", {
                            source: e.data.source,
                            UnionId: e.data.unionId,
                            Public_Name: "车辆"
                        }, null);
                    }
                });
            });
        };
        this.beforeShowPhone().then(function() {
            t();
        }, function(n) {
            console.log("没有通过验证login-state和login-info的验证>>>>", n), e.showPhone("myCarPage") && t();
        });
    },
    onLoad: function(n) {
        var a = this;
        return t(e().mark(function t() {
            var o, c, s;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (console.log("我的页面 加载参数---\x3e", n), o = n.noncestr, c = n.reportid, "1" !== (null == n ? void 0 : n.cancelProtocol)) {
                        e.next = 7;
                        break;
                    }
                    return wx.showToast({
                        title: "正在退出...",
                        icon: "loading",
                        duration: 9e4
                    }), e.next = 6, (0, r.commonLoginOut)().catch(function(e) {
                        wx.removeStorageSync("sessionId"), wx.removeStorageSync("accessToken"), wx.removeStorageSync("userphone"), 
                        wx.removeStorageSync("aopsid"), wx.showToast({
                            title: e,
                            icon: "loading",
                            duration: 9e4
                        });
                    });

                  case 6:
                    wx.hideToast();

                  case 7:
                    o && c && wx.setStorageSync("hczLoginOriginalData", {
                        noncestr: o,
                        reportid: c
                    }), a.setData({
                        options: n,
                        source: n.source || "",
                        userInfo: wx.getStorageSync("userInfo"),
                        userphone: wx.getStorageSync("userphone"),
                        loginParams: {
                            appid: n.appid || "wx-xcx-my-page",
                            sourceType: n.sourceType || 1e3
                        },
                        backgroundPosition: "0px -".concat(a.data.navigationBarHeight)
                    }), n.openid && wx.setStorageSync("bindCardOpenId", n.openid), n.bindCardStatus && wx.setStorageSync("bindCardStatus", n.bindCardStatus), 
                    s = 1 === h.globalData.environment ? "1000065" : "1000087", (0, i.getShareTimelineInfo)({
                        tag: "mine"
                    }).then(function(e) {
                        e ? a.data.timelineInfo = e[0] ? e[0].keyValueMap : {} : wx.hideShareMenu({
                            menus: [ "shareTimeline" ]
                        });
                    }), h.getShareInfo(s).then(function(e) {
                        a.data.shareCardInfo = e.shareList[0], console.log("分享卡片参数", e);
                    }), a.getSkinConfig();

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    checkLoginStatus: function() {
        var e = this;
        h.newAuthor();
        var t = h.globalData, n = t.isCheckAuthorize, a = t.thirdSessionHasEffective;
        return n && a ? h.loginInfo().then(function() {
            return e.data.loginStatus = "hczLogin", !0;
        }).catch(function() {
            return e.data.loginStatus = "noLogin", !1;
        }) : (this.data.loginStatus = "noLogin", Promise.resolve(!1));
    },
    checkAuthor: function() {
        console.log(";;;;;checkAuthor;;;;;;;"), this.isShowDetail(!0), f.customerTrack("PACX_W00054298", {
            source: this.data.source,
            UnionId: this.data.unionId
        }, null);
    },
    isShowDetail: function(e) {
        var t = this;
        h.getLocationInfo("city").then(function(e) {
            var n = e && e.city ? e.city : "";
            t.queryPageInfo(n);
        }), e ? (h.showRedDot(), t.getNewLevel(!0), t.getMemberScore(), t.getFamilyModuleInfo(), 
        t.getCardAmount(), t.checkIsFollow(), t.checkIsQiwei(), t.queryPolicyList("queryEncryptPolicyListInfo", "1"), 
        t.queryPolicyList("queryEncryptPolicyListInfo", "2"), t.getBindCarInfo(), t.data.isGetPhoneNumber = !1, 
        t.setData({
            userphone: wx.getStorageSync("userphone"),
            userInfo: wx.getStorageSync("userInfo"),
            bubbleProp: "guideFollow"
        }), t.data.loginStatus = "hczLogin") : (this.setData({
            isShowFamilyModule: !1,
            userphone: "",
            memberLevel: "",
            score: "",
            cardAmount: "",
            unenforcedPoints: 0,
            effectivePoints: 0,
            isGetPhoneNumber: !0,
            carNo: "",
            isShowQiwei: 0
        }), this.data.loginStatus = "noLogin");
        var n = this.selectComponent("#car_renew");
        n && "function" == typeof n.isShowBtn && (n.isShowBtn(), console.log("更新续保状态,调用组件#car_renew的isShowBtn方法【right】")), 
        (wx.getStorageSync("openid") || wx.getStorageSync("openId")) && wx.getStorageSync("unionId") && h.getUserRedDot({
            openId: wx.getStorageSync("openid") || wx.getStorageSync("openId"),
            unionId: wx.getStorageSync("unionId")
        }).then(function(e) {
            e.find(function(e) {
                return "1" === e.redPointFlag;
            }) ? t.setData({
                isShowUserRedDot: !0
            }) : t.setData({
                isShowUserRedDot: !1
            });
        }).catch(function() {
            t.setData({
                isShowUserRedDot: !1
            });
        });
    },
    getMemberScore: function() {
        var e = this;
        h.getMemberScore().then(function(t) {
            t && 0 === t.code && t.data && (wx.setStorageSync("userScore", t.data.availableNumTotal || 0), 
            e.setData({
                score: t.data.availableNumTotal || 0
            }));
        });
    },
    getNewLevel: function() {
        var e = this, t = {
            data: {
                inside: "inside",
                systemSource: "pa18-mp"
            },
            url: h.getRequestUrl("/uapi/wechat/point/queryClientGradeByUuid"),
            needToken: !0
        };
        return h.$http(t).then(function(t) {
            if (t) {
                var n = t.code, a = t.data, o = {
                    memberLevel: "",
                    carOwnerClubUrl: "",
                    gradeUrl: ""
                };
                if (0 === n && a) {
                    switch (a.maxGrade) {
                      case "COMMON_2":
                        o.memberLevel = "普通用户";
                        break;

                      case "BRASS_2":
                        o.memberLevel = "黄铜会员";
                        break;

                      case "SILVER_2":
                        o.memberLevel = "白银会员";
                        break;

                      case "GOLD_2":
                        o.memberLevel = "黄金会员";
                        break;

                      case "PLATINUM_2":
                        o.memberLevel = "铂金会员";
                        break;

                      case "DIAMOND_2":
                        o.memberLevel = "钻石会员";
                        break;

                      case "BLACK_DIAMOND":
                        o.memberLevel = "黑钻会员";
                        break;

                      case "SUPER_BLACK_DIAMOND":
                        o.memberLevel = "至尊会员";
                    }
                    o.carOwnerClubUrl = t.data.url, o.gradeUrl = t.data.gradeUrl, e.setData(o);
                } else console.log("查看用户等级接口返回数据异常", a);
            }
        }, function(e) {
            console.log("会员等级请求失败", e);
        });
    },
    getCardAmount: function() {
        var e = this, t = {
            path: h.getRequestUrl("/uapi/cps-hcz-smallapp/my/coupon/getDetailList"),
            params: {
                "X-PA-NONCESTR": "1",
                inside: "inside",
                couponStatus: "0",
                couponType: 0
            },
            otherParam: {
                needToken: !0,
                needLogin: !0
            }
        };
        return this.$http(t).then(function(t) {
            console.log("获取卡券数量成功", t), t.data && (0 === t.code && t.data && t.data.selectedOffer ? (e.setData({
                cardAmount: t.data.selectedOffer.length
            }), e.getShowRedPoint()) : t.data && t.data.resultCode && "500" === t.data.resultCode ? console.warn("请求失败！") : (s.default.setFilterMsg("查看卡券数量接口返回数据异常"), 
            s.default.info(t.data), console.log("查看卡券数量接口返回数据异常", t.data)));
        }, function(e) {
            console.log("请求获取卡券的数量失败", e);
        });
    },
    getShowRedPoint: function() {
        var e = wx.getStorageSync("showRedPointTime"), t = u.default.formatDate(new Date());
        (!e || e && t !== e) && wx.setStorageSync("showRedPointTime", t);
    },
    getActiveBannerMsg: function() {
        return new Promise(function(e, t) {
            h.queryConfigurePageInfo({
                channel: "小程序",
                page: "首页",
                place: "热门活动",
                departmentCode: "0",
                mediaScoure: "0",
                pageInfoId: 0 === m ? "83F9F507E0C743CEE05490E2BADCE8C8" : "864078A551A439B5E054022128574717"
            }).then(function(t) {
                var n = t;
                t ? (n = (n = n.filter(function(e) {
                    return Object.prototype.hasOwnProperty.call(e, "choseNum");
                })).sort(function(e, t) {
                    return e.choseNum - t.choseNum;
                }).map(function(e) {
                    var t = e.targetUrl.split("#/"), n = t[0].split("?"), a = n[1];
                    e.search_cm = a || "", e.page_cm = n[0], e.hash_cm = t[1] || "";
                    var o = {};
                    return a && (a = a.split("&")).forEach(function(e) {
                        var t = e.split("=");
                        o[t[0] + "_cm"] = t[1];
                    }), Object.assign({}, o, e);
                }), e(n)) : e("");
            }).catch(function(e) {
                console.log(e), t(e);
            });
        });
    },
    redirectPages: function(e) {
        var t = (e = e.detail.currentTarget ? e.detail : e).currentTarget.dataset, n = t.page, a = t.source, o = t.track, r = t.activityId, i = t.title;
        f.customerTrack("PACX_W00054305", {
            source: this.data.source,
            UnionId: this.data.unionId,
            Public_Name: i
        }, null), a = this.data.source || a || "";
        var c = function() {
            h.goNewMainPages(n, function() {
                f.customerTrack(o, {
                    source: a,
                    activityId: r
                }, null);
            }, !0);
        };
        n.indexOf("/pages/freeStruggle/ensureEntryWeb/ensureEntryWeb") > -1 ? h.loginInfo().then(function() {
            c();
        }).catch(function() {
            n = "/pages/freeStruggle/ensureHome/ensureHome", c();
        }) : n.indexOf("/pages/freeInsurance/ensureEntryWeb/ensureEntryWeb") > -1 ? h.loginInfo().then(function() {
            c();
        }).catch(function() {
            n = "/pages/freeInsurance/ensureHome/ensureHome", c();
        }) : c();
    },
    goToMoreWelfare: function(e) {
        var t = this, n = function() {
            var e = t.data.hczWelfarePlanOutVoUrl;
            e += "&activityId=".concat(t.data.activityIdMore), wx.navigateTo({
                url: e,
                success: function(e) {
                    console.log("好车主福利更多跳转成功", e);
                }
            });
        };
        this.beforeShowPhone().then(function() {
            n();
        }, function(a) {
            console.log("没有通过验证login-state和login-info的验证>>>>", a), t.showPhone("goToMoreWelfare", e) && n();
        });
    },
    checkIsFollow: function() {
        var e = this, t = {
            params: {
                openId: wx.getStorageSync("openid") || "",
                nonce: wx.getStorageSync("nonce") || "",
                signature: wx.getStorageSync("signature") || "",
                signatureUnionid: wx.getStorageSync("signatureUnionid") || "",
                timestamp: wx.getStorageSync("timestamp") || "",
                unionId: wx.getStorageSync("unionId") || ""
            },
            path: h.getRequestUrl("/uapi/cps-hcz-smallapp/myPage/checkIsFollow"),
            otherParam: {
                needToken: !0,
                needLogin: !0
            }
        };
        this.$http(t).then(function(t) {
            if (console.log("是否关注公众号", t), t && 0 === t.code) e.setData({
                isFollowAccount: !0
            }); else {
                if (14 !== t.code) return;
                e.setData({
                    isFollowAccount: !1
                });
            }
        }, function(e) {
            console.log(e, "请求是否关注公众号失败");
        });
    },
    checkIsQiwei: function() {
        var e = this, t = {
            params: {
                unionId: wx.getStorageSync("unionId") || ""
            },
            path: h.getRequestUrl("/uapi/cps-hcz-smallapp/my/acsShow/personGetStaffByAopsid"),
            otherParam: {
                needToken: !0,
                needLogin: !0
            }
        };
        this.$http(t).then(function(t) {
            console.log("是否加企微:", t), t && 0 === t.code ? e.setData({
                qiweiData: null == t ? void 0 : t.data,
                isShowQiwei: 1
            }) : e.setData({
                isShowQiwei: 0
            });
        }, function(e) {
            console.log(e, "请求是否加企微失败");
        });
    },
    getBindCarInfo: function() {
        var e = this, t = {
            params: {},
            path: h.getRequestUrl("/uapi/cps-hcz-smallapp/my/acsShow/getBindCarInfo"),
            otherParam: {
                needToken: !0,
                needLogin: !0
            }
        };
        this.$http(t).then(function(t) {
            if (t && t.data) {
                var n = t.data, a = n.carNo, o = n.vehicleDisplayName, r = t.data.logo;
                r || (r = e.data.baseCarLogo), e.setData({
                    carNo: a,
                    logo: r,
                    vehicleDisplayName: o
                });
            }
        }, function(e) {
            console.log("绑车失败的返回", e);
        });
    },
    goCarCenter: function() {
        var e = this, t = function() {
            var t = e.data.bindSectorOutVoUrl;
            f.customerTrack("PACX_W00001377", {
                source: e.data.source,
                Public_Name: "aiche"
            }, null), e.data.bindSectorOutVoUrl ? h.getLocationInfo("city").then(function() {
                var e = wx.getStorageSync("cityName") || "深圳";
                t += (t.includes("?") ? "&" : "?") + "source=186&city=".concat(e), wx.navigateTo({
                    url: t,
                    success: function() {
                        console.log("跳转车中心成功");
                    }
                });
            }) : (t = "/pages/webview/webview?pageType=carIndex&source=186", wx.navigateTo({
                url: t
            }));
        };
        this.beforeShowPhone().then(function() {
            t();
        }, function(n) {
            console.log("没有通过验证login-state和login-info的验证>>>>", n), e.showPhone("goCarCenter") && t();
        });
    },
    handleBreakRule: function() {
        (0, o.goNextPage)(this.data.carVioHandleUrl, "navigateTo");
    },
    goOterServer: function(e) {
        var t = (e = e.detail.currentTarget ? e.detail : e).currentTarget.dataset.url;
        (0, o.goNextPage)(t, "navigateTo");
    },
    queryPolicyList: function(e, t) {
        var n = this, a = {
            params: {
                policyType: 0,
                personType: 0,
                statusType: t
            },
            path: h.getRequestUrl("/uapi/micro-cps-ceps-wechat/policy/" + e),
            otherParam: {
                needToken: !0,
                needLogin: !0,
                needNoncestr: !1
            }
        };
        return this.$http(a).then(function(e) {
            if (e && e.data) {
                var a = e.data, o = 0;
                for (var r in a) o += a[r].length;
                "1" === t ? n.setData({
                    effectivePoints: o
                }) : n.setData({
                    unenforcedPoints: o
                });
            }
        }, function(e) {
            console.log("保单数请求报错", e);
        });
    },
    onShow: function() {
        var n = this;
        return t(e().mark(function o() {
            return e().wrap(function(o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    n.data.carNumber = "4", n.renderBanner("4"), (0, i.default)([ "mine_carBenefits", "mine_moreBanner" ]).then(function(e) {
                        if (!e) return console.log("资源配置位没有数据【2】");
                        var t = e.mine_carBenefits, a = void 0 === t ? [] : t, o = e.mine_moreBanner, r = void 0 === o ? [] : o;
                        n.setData({
                            carBenefits: a,
                            activeBannerArr: r
                        });
                    }), h.showRedDot(), n.checkLoginStatus().then(function() {
                        var a = t(e().mark(function t(a) {
                            return e().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n.isShowDetail(a);

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                        }));
                        return function(e) {
                            return a.apply(this, arguments);
                        };
                    }()), C = new a.default([ (0, a.carAndWaitTempIdObj)(0 === h.globalData.environment).wait ]), 
                    f.customerTrack("PACX_W00014954", {
                        source: n.data.options.source || "",
                        inviteCode: n.data.options.inviteCode || ""
                    }, null), setTimeout(function() {
                        n.data.observer && n.data.observer.disconnect(), n.data.observer = n.createIntersectionObserver({
                            observeAll: !0
                        }), n.data.observer.relativeTo(".wrapper").observe(".wrapper_item", function(e) {
                            if (e.intersectionRatio > 0) {
                                var t = e.dataset, a = t.id, o = t.text, r = t.track;
                                -1 === n.data.moduleObj.indexOf(a) && (n.data.moduleObj.push(a), f.customerTrack(r, {
                                    source: n.data.source,
                                    UnionId: n.data.unionId,
                                    Public_Name: o
                                }, null));
                            }
                        });
                    }, 1e3);

                  case 8:
                  case "end":
                    return o.stop();
                }
            }, o);
        }))();
    },
    getFamilyModuleInfo: function() {
        var n = this;
        return t(e().mark(function t() {
            var a, o, r, i, c;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, h.queryPageInfo({
                        source: "instance_familyEvaluation"
                    });

                  case 2:
                    if (e.t0 = e.sent, e.t0) {
                        e.next = 5;
                        break;
                    }
                    e.t0 = [];

                  case 5:
                    if (a = e.t0, !((o = a[0].keyValue) && o.temporaryData && o.temporaryData[0].keyValueMap && "1" === o.temporaryData[0].keyValueMap.rightIsShowFamilyModule)) {
                        e.next = 18;
                        break;
                    }
                    return n.data.goFamilyUrl = o.temporaryData[0].keyValueMap.goFamilyUrl2, e.next = 11, 
                    h.getLocationInfo("city");

                  case 11:
                    r = e.sent, i = r.city, c = {
                        city: void 0 === i ? "深圳" : i,
                        hzcModule: "HCZ-GDRK-XCXX-QTXXXX-3348"
                    }, h.getFamilyEvaluationMsg(c).then(function(e) {
                        console.log("家庭保障内容", e);
                        var t = e.familyOverviewList, a = void 0 === t ? [] : t, o = {
                            "-1": "全家",
                            1: "本人",
                            3: "配偶",
                            4: "子女",
                            6: "父亲",
                            7: "母亲",
                            8: "配偶父亲",
                            9: "配偶母亲",
                            11: "其他"
                        };
                        if (a.length > 0) {
                            var r = a.filter(function(e) {
                                var t = e.healthInsuranceCount, n = e.accidentInsuranceCount, a = e.propertyInsuranceCount, o = e.carInsuranceCount;
                                return t > 0 || n > 0 || a > 0 || o > 0;
                            });
                            r.length > 0 ? a = r.map(function(e) {
                                var t = e.healthInsuranceCount, n = e.accidentInsuranceCount, a = e.propertyInsuranceCount, r = e.carInsuranceCount;
                                return e.ensureList = [ t, n, a, r ], e.relation = o[e.relationship], e;
                            }) : (a.length = 1, a[0].relation = "本人"), n.setData({
                                isShowFamilyModule: !0,
                                familyOverviewList: a,
                                familyList: r
                            }, function() {
                                f.customerTrack("PACX_W00001407", {
                                    source: "xcx_wd"
                                }, null);
                            });
                        }
                    }), e.next = 19;
                    break;

                  case 18:
                    n.setData({
                        isShowFamilyModule: !1
                    });

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, t);
        }))();
    },
    onHide: function() {
        this.data.moduleObj = [], this.data.observer && this.data.observer.disconnect();
    },
    onUnload: function() {
        this.data.observer && this.data.observer.disconnect();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.shareCardInfo.shareText,
            path: "/pages/right/right2?source=WoDeYe-FenXiang&appid=wx-xcx-my-page&sourceType=1001",
            imageUrl: this.data.shareCardInfo.sharePictureUrl
        };
    },
    onShareTimeline: function() {
        var e = this.data.timelineInfo || {}, t = e.shareText, n = e.sharePictureUrl;
        return {
            title: t || this.data.shareCardInfo.shareText,
            query: "source=PengYouQuan&appid=wx-xcx-my-page&sourceType=1001",
            imageUrl: n || this.data.shareCardInfo.sharePictureUrl
        };
    },
    goFamilyPage: function(e) {
        var t = e.currentTarget.dataset.track;
        wx.navigateTo({
            url: this.data.goFamilyUrl || "/pages/webview/webview?pageType=familyEvaluation&source=xcx_wd&hzcModule=HCZ-GDRK-XCXX-QTXXXX-3348",
            success: function() {
                f.customerTrack(t, {
                    source: "xcx_wd"
                }, null);
            }
        });
    }
}));
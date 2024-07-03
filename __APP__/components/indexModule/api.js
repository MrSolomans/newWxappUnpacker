var t, e, r = require("../../@babel/runtime/helpers/regeneratorRuntime"), a = require("../../@babel/runtime/helpers/typeof"), o = [ "获取投票后信息--fail", "rimList", "voteGetInfo", "hotSpotList", "home", "then", "vote_id", "ShouYe-TouBaoGongLue", "length", "navigateTo", "authorizeCompAlert", "currentTarget", "voteid", "scrollLeft", "page", "toPrimitive", "oldDriverList", "scrollWidth", "return", "use strict", "assign", "readNum", "onlineClaimList", "point", "FaXianYe-TouBaoGongLue", "setData", "Map", "filter", "abrupt", "oldDriver", "break", "Data", "stop", "toString", "detail", "none", "hczAccessToken", "getOwnPropertySymbols", "direction", "iterator", "push", "dataset", "getHot", "getStorageSync", "toFixed", "/pages/webview/webview?pageType=question&questionId=", "投票成功", "unionId", "t1", "count", "concat", "keyValue", "left_width", "hczStatic", "t0", "name", "showToast", "log", "10030168", "code", "isVoteSuccess", "indexOf", "$http", "circle_id", "circles", "teachingList", "next", "/uapi/cps-hcz-smallapp/findPage/readNumAdd", "forEach", "one", "plateId", "t2", "properties", "avatar", "source", "insuranceStrategyList[", "commonAuthor", "end", "themeTitle", "PACX_W00052149", "index", "sysSource", "introducePath", "data", "查询投保攻略/车圈专题列表失败：", "getRequestUrl", "parse", "questionAnswerResp", "isShowHotSpot" ];

t = o, e = 184, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var i = function(t, e) {
    return o[t -= 0];
};

function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == a(Symbol[i("0x21")]) ? function(t) {
        return a(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : a(t);
    })(t);
}

i("0xd"), Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.commonAuthor = void 0;

var s = require("../../components/newAuthorize/controlNewAuthorize.js");

function c(t) {
    return function(t) {
        if (Array.isArray(t)) return u(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || function(t, e) {
        if (t) {
            if ("string" == typeof t) return u(t, e);
            var r = {}[i("0x1b")].call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor[i("0x31")]), i("0x14") === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(t, e) : void 0;
        }
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function u(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, a = Array(e); r < e; r++) a[r] = t[r];
    return a;
}

function l(t, e) {
    var r = Object.keys(t);
    if (Object[i("0x1f")]) {
        var a = Object.getOwnPropertySymbols(t);
        e && (a = a.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), r.push.apply(r, a);
    }
    return r;
}

function d(t) {
    for (var e = 1; e < arguments[i("0x2")]; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? l(Object(r), !0).forEach(function(e) {
            p(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function p(t, e, r) {
    return (e = function(t) {
        var e = function(t, e) {
            if ("object" != n(t) || !t) return t;
            var r = t[Symbol[i("0x9")]];
            if (void 0 !== r) {
                var a = r.call(t, e || "default");
                if ("object" != n(a)) return a;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
        }(t, "string");
        return "symbol" == n(e) ? e : e + "";
    }(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

function h(t, e, r, a, o, n, s) {
    try {
        var c = t[n](s), u = c.value;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return void r(t);
    }
    c.done ? e(u) : Promise.resolve(u)[i("0x58")](a, o);
}

function m(t) {
    return function() {
        var e = this, r = arguments;
        return new Promise(function(a, o) {
            var n = t.apply(e, r);
            function s(t) {
                h(n, a, o, s, c, i("0x3c"), t);
            }
            function c(t) {
                h(n, a, o, s, c, "throw", t);
            }
            s(void 0);
        });
    };
}

var x = getApp(), f = require("../../utils/datatist.js"), g = x.getRequestUrl("/cps/hcz-miniprogram/images/findImg/findImg.png", i("0x2f")), y = x.getRequestUrl("/cps/hcz-miniprogram/images/findRimImg/findRimBg1.png", "hczStatic"), v = x.getRequestUrl("/cps/hcz-miniprogram/images/findRimImg/findRimBg2.png", "hczStatic"), b = Behavior({
    properties: {
        type: {
            type: String,
            value: ""
        },
        path: {
            type: String,
            value: ""
        },
        moduleName: {
            type: String,
            value: ""
        },
        moduleUrl: {
            type: String,
            value: ""
        },
        introducePath: {
            type: String,
            value: "home"
        },
        moduleData: {
            type: Array,
            value: []
        },
        loginStatus: {
            type: String,
            value: ""
        },
        specialFilter: {
            type: Array,
            value: []
        }
    },
    observers: {
        moduleData: function() {
            var t = m(r().mark(function t(e) {
                var a;
                return r().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        this.properties.type === i("0x56") && (a = wx.getStorageSync(i("0x1e")), this.data.firstLoad && (this.data.token = a), 
                        (!this.data.firstLoad && this[i("0x4d")].token !== a || this.data[i("0x36")]) && (this.data.token = a, 
                        this.data.isVoteSuccess = !1, console[i("0x33")]("登录注销操作时,父组件传入数据-传进来的投票数据--\x3e", e), 
                        this[i("0x24")](e)));

                      case 1:
                      case i("0x47"):
                        return t[i("0x1a")]();
                    }
                }, t, this);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()
    },
    data: d(d({}, s.authorizeCompAlert.data), {}, {
        specialList: [],
        insuranceStrategyList: [],
        moduleObj: [],
        oldDriverList: [],
        recordsList: [],
        classList: [],
        hotSpotList: [],
        onlineClaimList: [],
        rimList: [],
        myRimList: [],
        page: 1,
        count: 10,
        unionId: wx[i("0x25")]("unionId"),
        currentIndex: 0,
        findImg: g,
        lateId: 1 === x.globalData.environment ? "90166" : i("0x34"),
        source: "discoverCircles",
        findRimBgImg1: y,
        findRimBgImg2: v,
        token: "",
        firstLoad: !0,
        isVoteSuccess: !1
    }),
    pageLifetimes: {
        show: function() {
            this.data.firstLoad = !1, this.init();
        }
    },
    lifetimes: {
        attached: function() {
            this.init();
        }
    },
    methods: d(d({}, s[i("0x4")].methods), {}, {
        $http: function(t) {
            var e = t.path, r = t.params, a = void 0 === r ? {} : r;
            return new Promise(function(t, r) {
                x.$http({
                    url: e,
                    data: d({}, a),
                    needToken: !0
                }).then(function(e) {
                    t(e);
                }).catch(function(t) {
                    r(t);
                });
            });
        },
        init: function() {
            var t = this;
            return m(r().mark(function e() {
                var a, o, n, s, u, l, d;
                return r().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (a = {
                            page: t.properties.type === i("0xa") ? 2 : t[i("0x4d")][i("0x8")],
                            count: "oldDriverList" === t[i("0x42")].type ? 100 : t[i("0x4d")].count
                        }, o = t.properties.path, n = t.properties.type, s = wx.getStorageSync(""[i("0x2c")](n, i("0x19"))), 
                        u = function() {
                            var e = m(r().mark(function e() {
                                var n;
                                return r().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.prev = 0, e.next = 3, t[i("0x38")]({
                                            path: x.getRequestUrl(o),
                                            params: a
                                        });

                                      case 3:
                                        return n = e.sent, e.abrupt("return", n);

                                      case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.warn(i("0x4e"), e.t0), e.abrupt(i("0xc"), {});

                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, null, [ [ 0, 7 ] ]);
                            }));
                            return function() {
                                return e.apply(this, arguments);
                            };
                        }(), !o || "rimList" === n) {
                            e.next = 30;
                            break;
                        }
                        if (e[i("0x30")] = s, e.t0) {
                            e[i("0x3c")] = 8;
                            break;
                        }
                        return e.next = 7, u();

                      case 7:
                        e.t0 = e.sent;

                      case 8:
                        if (0 !== (l = e.t0).code || !l.data) {
                            e.next = 23;
                            break;
                        }
                        d = l.data.filter(function(t) {
                            return t[i("0x51")];
                        }), e[i("0x2a")] = n, e.next = "specialList" === e.t1 ? 14 : "insuranceStrategyList" === e[i("0x2a")] ? 16 : "oldDriverList" === e[i("0x2a")] ? 18 : 23;
                        break;

                      case 14:
                        return t.setData({
                            specialList: t.filterItemFinance(c(l.data))
                        }), e[i("0x16")]("break", 23);

                      case 16:
                        return t.setData({
                            insuranceStrategyList: l[i("0x4d")]
                        }), e[i("0x16")]("break", 23);

                      case 18:
                        return d = d.splice(0, 10), console.log("oldDriverList new list = ", d), f.customerTrack("PACX_O00000085", {
                            source: t[i("0x4d")].source
                        }, null), t.setData({
                            oldDriverList: d
                        }), e.abrupt("break", 23);

                      case 23:
                        if (!s) {
                            e.next = 27;
                            break;
                        }
                        return e.next = 26, u();

                      case 26:
                        l = e.sent;

                      case 27:
                        wx.setStorageSync("".concat(n, "Data"), l), e.next = 47;
                        break;

                      case 30:
                        e.t2 = n, e.next = "recordsList" === e.t2 ? 33 : e.t2 === i("0x3b") ? 35 : "classList" === e.t2 ? 38 : "hotSpotList" === e.t2 ? 40 : "onlineClaimList" === e.t2 ? 42 : e[i("0x41")] === i("0x54") ? 44 : 46;
                        break;

                      case 33:
                        return t[i("0x13")]({
                            recordsList: t[i("0x42")].moduleData
                        }), e[i("0x16")]("break", 46);

                      case 35:
                        return t.properties.moduleData[i("0x3e")](function(t) {
                            t.themeImg = t.keyValue.icon, t[i("0x48")] = t[i("0x2d")].text, t[i("0x43")] = t.keyValue.avatar, 
                            t.name = t.keyValue.authorName, t.readCount = t.configCountVos[0][i("0x2b")] + Number(t.keyValue[i("0xf")]);
                        }), t.setData({
                            teachingList: t.properties.moduleData
                        }), e.abrupt("break", 46);

                      case 38:
                        return t.setData({
                            classList: t[i("0x42")].moduleData
                        }), e.abrupt(i("0x18"), 46);

                      case 40:
                        return t.getHot(JSON[i("0x50")](JSON.stringify(t.properties.moduleData))), e.abrupt("break", 46);

                      case 42:
                        return t.setData({
                            onlineClaimList: t.properties.moduleData
                        }), e.abrupt("break", 46);

                      case 44:
                        return t.myRimList(t.properties.moduleData), e.abrupt("break", 46);

                      case 46:
                        wx.setStorageSync(""[i("0x2c")](n, "Data"), t.properties.moduleData);

                      case 47:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        filterItemFinance: function(t) {
            var e = t, r = this.data.specialFilter;
            return r && r.length > 0 && "[object string]" === Object.prototype.toString.call(this.data.specialFilter[0]).toLowerCase() && Number(this.data.specialFilter[0]) && (e = t[i("0x15")](function(t) {
                return !r.includes(t.themeId);
            })), e;
        },
        myRimList: function(t) {
            var e = this;
            this.$http({
                path: x[i("0x4f")]("/uapi/cps-hcz-smallapp/open-carcircle/circle/mylist"),
                params: {
                    circle_class_id: -1,
                    page: 1,
                    count: 10
                }
            }).then(function(r) {
                if (r) {
                    var a = 0 === r.code && r.data && r[i("0x4d")][i("0x3a")] ? r.data.circles : [];
                    e.filterList(t, a);
                }
            }).catch(function() {
                console.warn("我的圈子模块数据获取失败");
            });
        },
        filterList: function(t, e) {
            e.forEach(function(e) {
                var r = e[i("0x39")];
                t = t[i("0x15")](function(t) {
                    return Number(t[i("0x2d")].topicId) !== r;
                });
            }), this.setData({
                myRimList: e,
                rimList: t
            });
        },
        errorImg: function(t) {
            var e = t.currentTarget.dataset[i("0x4a")], r = t.currentTarget.dataset[i("0x3f")];
            this.setData(p({}, i("0x45").concat(r, "].user[").concat(e, "].avatar"), ""));
        },
        goToMoreUrl: function(t) {
            var e = this, r = t.currentTarget.dataset, a = r.moreurl, o = r.text, n = r.point, s = r.type, c = {
                insurance: {
                    sysSource: "home" === this.data.introducePath ? i("0x1") : ""
                },
                special: {
                    sysSource: "home" === this[i("0x4d")].introducePath ? "ShouYe-CheQuanZhuanTi" : ""
                },
                oldDriver: {
                    sysSource: ""
                },
                records: {
                    sysSource: ""
                },
                teaching: {
                    sysSource: ""
                },
                hotSpot: {
                    sysSource: ""
                },
                onlineClaim: {
                    sysSource: ""
                },
                rim: {
                    sysSource: ""
                }
            };
            "oldDriver" === s && f.customerTrack("PACX_O00000084", {
                source: this.data.source
            }, null), wx[i("0x3")]({
                url: a,
                complete: function() {
                    "hotSpotList" === e[i("0x42")].type && (e.data.isVoteSuccess = !0), n && f.customerTrack(n, {
                        sysSource: e.data.source || c[s][i("0x4b")],
                        Public_Name: o,
                        source: e[i("0x4d")][i("0x44")] || "",
                        UnionId: e.data.unionId
                    }, null);
                }
            });
        },
        goToDetails: function(t) {
            var e = this, r = t.currentTarget.dataset, a = r.id, o = r.text, n = r[i("0x11")], s = r.type, c = r.url, u = void 0 === c ? "" : c, l = r.title, d = {
                insurance: {
                    url: "/pages/appConcent/appTopic/appTopic?topic_id=".concat(a, "&source=").concat("home" === this.data.introducePath ? "ShouYe-TouBaoGongLue" : ""),
                    sysSource: this[i("0x4d")][i("0x4c")] === i("0x57") ? "ShouYe-TouBaoGongLue" : "FaXianYe-TouBaoGongLue"
                },
                special: {
                    url: "/pages/appConcent/carNews/carNews?news_id=".concat(a, "&title=").concat(o),
                    sysSource: "home" === this.data.introducePath ? "ShouYe-CheQuanZhuanTi" : ""
                },
                oldDriver: {
                    url: i("0x27")[i("0x2c")](a, "&title=").concat(l, "&source=").concat(this.data.source),
                    sysSource: ""
                },
                records: {
                    url: u,
                    sysSource: ""
                },
                teaching: {
                    url: u,
                    sysSource: ""
                },
                class: {
                    url: u,
                    sysSource: ""
                },
                rim: {
                    url: "/pages/appConcent/appCircle/appCircle?circleId=".concat(a),
                    sysSource: "home" === this.data.introducePath ? "" : "FaXianYe-QuanZiXiangQing"
                }
            };
            switch (s) {
              case "teaching":
                this.readRecords({
                    url: i("0x3d"),
                    params: {
                        configId: a,
                        source: this.data.source,
                        countType: "阅读量"
                    }
                });
            }
            s === i("0x17") && f.customerTrack("PACX_O00000090", {
                source: this[i("0x4d")].source,
                tagID: a,
                contentname: l
            }, null), wx.navigateTo({
                url: d[s].url,
                complete: function() {
                    f.customerTrack(n, {
                        sysSource: e.data.source || d[s].sysSource,
                        UnionId: e.data.unionId,
                        Public_Name: o,
                        source: e.data[i("0x44")] || d[s].sysSource,
                        Public_ID: a
                    }, null);
                }
            });
        },
        moduleTouchStart: function(t) {
            var e = this.data.insuranceStrategyList, r = t.detail[i("0xb")], a = t.detail.scrollLeft, o = t.currentTarget.dataset[i("0x11")], n = r / e.length, s = a / n <= 0 ? 0 : (a / n)[i("0x26")](0), c = e[s].topicId, u = e[s].title;
            -1 === this.data.moduleObj[i("0x37")](c) && (this.data.moduleObj[i("0x22")](c), 
            f.customerTrack(o, {
                sysSource: this.data.source || "home" === this.data.introducePath ? "ShouYe-TouBaoGongLue" : i("0x12"),
                UnionId: this.data.unionId,
                productID: c,
                Public_Name: u,
                source: this.data.source || "home" === this.data.introducePath ? i("0x1") : "FaXianYe-TouBaoGongLue"
            }, null));
        },
        OldDriverTouchStart: function(t) {
            var e = t.detail.scrollWidth, r = (t[i("0x1c")][i("0x7")] / (e / this.data.oldDriverList.length)).toFixed(0), a = this.data.oldDriverList[r] ? this.data.oldDriverList[r].content_id : "", o = this.data.oldDriverList[r] ? this.data.oldDriverList[r].question_title : "";
            -1 === this.data.moduleObj.indexOf(a) && (this[i("0x4d")].moduleObj.push(a), f.customerTrack("PACX_W00052144", {
                source: this.data.source || "FaXianYe-LaoSiJiWenDa",
                UnionId: this[i("0x4d")].unionId,
                productID: a,
                Public_Name: o
            }, null));
        },
        readRecords: function(t) {
            this.$http({
                path: x.getRequestUrl(t.url),
                params: t.params
            })[i("0x58")](function(t) {
                console[i("0x33")](t, "success");
            });
        },
        getHot: function(t) {
            var e = this;
            console.log("热点话题数组", t);
            var r = 0;
            t[i("0x3e")](function(a) {
                if (a.keyValue.isShowHotSpot = !1, a.keyValue[i("0x55")]) {
                    Object[i("0xe")](a.keyValue, a.keyValue.voteGetInfo), delete a.keyValue.voteGetInfo;
                    var o = function() {
                        if (r++, a.keyValue[i("0x0")] && !a.keyValue.isShowHotSpot && (a.keyValue.isShowHotSpot = !0), 
                        r === t.length) {
                            var o = (t = t.filter(function(t) {
                                return !0 === t.keyValue[i("0x52")];
                            })).filter(function(t) {
                                return !0 === t.keyValue.is_vote_recording;
                            }), n = t.filter(function(t) {
                                return !t.keyValue.is_vote_recording;
                            });
                            e.setData({
                                hotSpotList: n.concat(o),
                                isShowHotSpot: !0
                            });
                        }
                    };
                    "noLogin" === e[i("0x4d")].loginStatus ? o() : "hczLogin" === e.data.loginStatus && a.keyValue.voteInfo && (Object[i("0xe")](a.keyValue, a.keyValue.voteInfo), 
                    a.keyValue[i("0x2e")] = a.keyValue.vote_left_count / (a.keyValue.vote_left_count + a.keyValue.vote_right_count) * 100, 
                    delete a.keyValue.voteInfo, o());
                }
            }), wx.setStorageSync("hotSpotListsData", this.data.hotSpotList);
        },
        currentHandleIndex: function(t) {
            var e = t.detail.current, r = t.currentTarget.dataset.point, a = this.data.hotSpotList[e].voteId, o = this.data.hotSpotList[e].vote_title;
            -1 === this.data.moduleObj.indexOf(a) && (this.data.moduleObj.push(a), f.customerTrack(r, {
                source: this.data[i("0x44")],
                UnionId: this.data.unionId,
                productID: a,
                Public_Name: o
            }, null)), this.setData({
                currentIndex: e
            });
        },
        goToHotSpotDetail: function(t) {
            var e = t.currentTarget.dataset.voteid, r = t.currentTarget[i("0x23")].text;
            f.customerTrack(i("0x49"), {
                source: this[i("0x4d")].source,
                UnionId: this.data.unionId,
                productID: e,
                Public_Name: r
            }, null), wx.navigateTo({
                url: "/pages/appConcent/appVote/appVote?voteId=".concat(e)
            });
        },
        vote: function(t) {
            var e = this;
            t = t.detail && t.detail.currentTarget ? t.detail : t;
            var r = function() {
                var r = t[i("0x5")].dataset[i("0x6")], a = t.currentTarget.dataset.button, o = t.currentTarget[i("0x23")][i("0x20")];
                f.customerTrack("PACX_W00052154", {
                    source: e.data.source,
                    UnionId: e.data[i("0x29")],
                    productID: r,
                    buttonName: a
                }, null), e.$http({
                    path: x[i("0x4f")]("/uapi/cps-hcz-smallapp/carcircle/vote/set"),
                    params: {
                        vote_id: r,
                        vote_direction: o
                    }
                }).then(function(t) {
                    0 === t[i("0x35")] ? (e[i("0x4d")][i("0x36")] = !0, wx.showToast({
                        title: i("0x28"),
                        icon: i("0x1d"),
                        duration: 3e3
                    }), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/appConcent/appVote/appVote?voteId=".concat(r)
                        });
                    }, 1e3)) : 52 === t[i("0x35")] && (wx[i("0x32")]({
                        title: t.msg,
                        icon: "none",
                        duration: 3e3
                    }), e.setData({
                        loginStatus: "hczLogin"
                    }), e.triggerEvent("queryModuleList"));
                }).catch(function(t) {
                    console[i("0x33")](i("0x53"), t);
                });
            };
            this.beforeShowPhone().then(function() {
                console.log("通过登录态的验证》》》》"), r();
            }, function(a) {
                console.log("没有通过验证login-state和login-info的验证>>>>", a), e.showPhone("vote", t) && r();
            });
        },
        goToClaimList: function() {
            wx[i("0x32")]({
                title: "暂未开放,敬请期待！",
                icon: "none",
                duration: 2e3
            });
        },
        handleOnlineClaim: function(t) {
            var e = t.detail.current, r = t[i("0x5")].dataset.point, a = this.data.onlineClaimList[e].id, o = this.data[i("0x10")][e].text;
            -1 === this.data.moduleObj[i("0x37")](a) && (this[i("0x4d")].moduleObj.push(a), 
            f.customerTrack(r, {
                source: this.data.source,
                UnionId: this.data.unionId,
                productID: a,
                Public_Name: o
            }, null));
        },
        showMoreComment: function() {
            wx.navigateTo({
                url: "/pages/appConcent/appCircle/appCircle?source=FaXianYe-tiaozhuan&circleId=".concat(this.data[i("0x40")])
            });
        }
    })
});

exports[i("0x46")] = b;
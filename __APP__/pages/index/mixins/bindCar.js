var e, r, t = require("../../../@babel/runtime/helpers/regeneratorRuntime"), n = [ "logo", "navigateTo", "stationUrl", "hideLoading", "apply", "insureList", "jumpFun", "stop", "/pages/index/index2", "item", "plateNum", "goCarCenter", "setData", "没有通过验证login-state和login-info的验证>>>>", "next", "length", "currentCar", "url", "log", "find", "index", "获取今日油价、电价", "getApiUrl", "baseCarLogo", "/pages/webview/webview?pageType=addVehicleByPhone&source=375&goUrl=", "&isReLaunch=1", "params", "vehicleLicenceCode", "bindCarMixins", "prev", "carNo", "data", "args" ];

e = n, r = 388, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var a = function(e, r) {
    return n[e -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindCarMixins = exports.bindCar = void 0;

var i = require("../../../utils/util.js");

function o(e, r, t, n, a, i, o) {
    try {
        var c = e[i](o), s = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void t(e);
    }
    c.done ? r(s) : Promise.resolve(s).then(n, a);
}

function c(e) {
    return function() {
        var r = this, t = arguments;
        return new Promise(function(n, i) {
            var c = e[a("0xc")](r, t);
            function s(e) {
                o(c, n, i, s, u, "next", e);
            }
            function u(e) {
                o(c, n, i, s, u, "throw", e);
            }
            s(void 0);
        });
    };
}

var s = getApp(), u = {
    data: {
        navbarCarInfo: !1,
        carList: [],
        currentCar: {
            plateNum: "",
            carLogo: "",
            isNewEnergy: !1
        },
        oilPriceList: [],
        chargePileData: {
            price: "",
            stationUrl: ""
        },
        floatingLayer: {
            show: !1,
            tips: "切换车辆"
        }
    },
    methods: {
        goCarCenter: function() {
            var e = this, r = function() {
                e[a("0xe")]("/pages/webview/webview?pageType=carIndex&source=375", "点击绑车栏目", {
                    contentname: "点击添加车辆"
                });
            };
            this.beforeShowPhone().then(function() {
                r();
            }, function(t) {
                console[a("0x1a")](a("0x15"), t), e.showPhone(a("0x13")) && r();
            });
        },
        addCar: function() {
            var e = encodeURIComponent(a("0x10"));
            this[a("0xe")](a("0x20").concat(e, a("0x0")), "切换车辆内点击添加爱车"), this.changeFloatingLayer(!1);
        },
        getBindCarInfo: function() {
            var e = this;
            return c(t().mark(function r() {
                var n, i, o, c, u, g, x, l, d, f, h, p, w, v, b, C, y;
                return t().wrap(function(r) {
                    for (;;) switch (r[a("0x4")] = r.next) {
                      case 0:
                        return n = e.data[a("0x1f")], r.next = 3, s.$http({
                            url: e.getApiUrl("getBindCarInfo"),
                            data: {
                                bindCarSource: 375
                            },
                            needLogin: !0,
                            needToken: !0
                        }).catch(function() {});

                      case 3:
                        if (!(i = r.sent)) {
                            r.next = 27;
                            break;
                        }
                        if (o = i.code, c = i.data, console.warn("查询绑车、续保信息", i), 0 !== o || !c) {
                            r.next = 27;
                            break;
                        }
                        if (u = (c || {})[a("0xd")], g = void 0 === u ? [] : u, x = (c || {}).bindCarNewInfoList, 
                        !((l = void 0 === x ? [] : x) && l.length > 0)) {
                            r[a("0x16")] = 16;
                            break;
                        }
                        l = l.map(function(e, r) {
                            var t = e.carNo, i = e.logo, o = e.isNewEnergy, c = i && -1 !== i.indexOf("default.png") ? n : i, s = !1, u = "";
                            if (g && g.length > 0) {
                                var x = g.find(function(e) {
                                    return t === e.vehicleLicenceCode;
                                });
                                x && Object.keys(x).length > 0 && (u = x[a("0x19")], s = !0);
                            }
                            return {
                                index: r,
                                carLogo: c || "",
                                plateNum: t || "",
                                insureUrl: u,
                                isNeedInsure: s,
                                isNewEnergy: o
                            };
                        }), e.setData({
                            carList: l
                        }), e.setCurrentCar(), r.next = 27;
                        break;

                      case 16:
                        if (f = (d = c || {})[a("0x5")], h = d[a("0x8")], p = d.isNewEnergy, !f) {
                            r.next = 25;
                            break;
                        }
                        return w = h && -1 !== h.indexOf("default.png") ? n : h, v = g && g.length > 0 ? g[0][a("0x2")] : f, 
                        b = {
                            index: 0,
                            plateNum: v || "",
                            carLogo: w || "",
                            isNewEnergy: p,
                            isNeedInsure: g && g[a("0x17")] > 0,
                            insureUrl: g && g.length > 0 ? g[0].url : ""
                        }, (C = []).push(b), e[a("0x14")]({
                            currentCar: b,
                            carList: C
                        }), r.abrupt("return");

                      case 25:
                        y = wx.getStorageSync(a("0x18")) ? JSON.parse(wx.getStorageSync("currentCar")) : {}, 
                        Object.keys(y).length > 0 && (e[a("0x14")]({
                            "currentCar.plateNum": "",
                            carList: []
                        }), wx.removeStorageSync(a("0x18")));

                      case 27:
                      case "end":
                        return r.stop();
                    }
                }, r);
            }))();
        },
        setCurrentCar: function(e) {
            var r = this;
            return c(t().mark(function n() {
                var i, o, c, s, u, g, x, l, d, f, h, p;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (i = e && e.detail ? e.detail : {}, o = i[a("0x11")], c = i.index, s = r.data, 
                        u = s.carList, g = s.regionData, x = s.source, l = u[0], d = function() {
                            r.setData({
                                currentCar: l
                            }), wx.setStorageSync("currentCar", JSON.stringify(l));
                        }, !c && 0 !== c) {
                            t.next = 15;
                            break;
                        }
                        if (l = o, c === r.data.currentCar[a("0x1c")]) {
                            t.next = 13;
                            break;
                        }
                        return f = l.isNewEnergy, wx.showLoading({
                            mask: !0
                        }), t.next = 11, r.getSerDiscounts(g, f);

                      case 11:
                        d(), wx[a("0xb")]();

                      case 13:
                        return r.setTrack("点击切换车辆", {
                            source: x
                        }), t.abrupt("return");

                      case 15:
                        if (h = wx.getStorageSync("currentCar") ? JSON.parse(wx.getStorageSync("currentCar")) : {}, 
                        !(Object.keys(h).length > 0)) {
                            t[a("0x16")] = 23;
                            break;
                        }
                        if (p = u[a("0x1b")](function(e) {
                            return h.plateNum === e[a("0x12")];
                        }) || {}, !(Object.keys(p).length > 0)) {
                            t.next = 22;
                            break;
                        }
                        return l = p, d(), t.abrupt("return");

                      case 22:
                        r.getSerDiscounts(g, l.isNewEnergy);

                      case 23:
                        d();

                      case 24:
                      case "end":
                        return t[a("0xf")]();
                    }
                }, n);
            }))();
        },
        getGasOrChargePrice: function(e) {
            var r = this;
            return c(t().mark(function n() {
                var i, o, c, u, g, x, l, d, f, h;
                return t().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return i = e.lon, o = e.lat, c = e.selectCity, t[a("0x16")] = 3, s.$http({
                            url: r[a("0x1e")]("getGasOrChargePrice"),
                            data: {
                                city: c,
                                userLng: i,
                                userLat: o
                            },
                            needToken: !0,
                            needLogin: !0
                        });

                      case 3:
                        u = t.sent, g = u.code, x = u.data, console.warn(a("0x1d"), u), 0 === g && x && Object.keys(x).length > 0 && (l = x.chargePrice, 
                        d = void 0 === l ? {} : l, f = x.gasPrice, h = void 0 === f ? [] : f, r.setData({
                            chargePileData: d,
                            oilPriceList: h
                        }));

                      case 7:
                      case "end":
                        return t[a("0xf")]();
                    }
                }, n);
            }))();
        },
        changeFloatingLayer: function(e) {
            this.setData({
                "floatingLayer.show": e
            }), e && this.setTrack("曝光切换车辆弹窗", {
                source: this.data.source
            });
        },
        goToInsure: function() {
            var e = this[a("0x6")][a("0x18")].insureUrl, r = (0, i.getQueryStringArgs)(e);
            this.jumpFun("/pages/webview/webview?pageType=oneKeyInsure&mediaSource=".concat(r.args.mediaSource, "&params=").concat(r[a("0x7")][a("0x1")]), "点击绑车栏目", {
                contentname: "点击立即续保"
            });
        },
        entryOilDetail: function() {
            wx.navigateTo({
                url: "/pages/webview/webview?pageType=cheerGather"
            });
        },
        entryChargePileDetail: function() {
            var e = this[a("0x6")].chargePileData[a("0xa")];
            if (e) {
                var r = e.split("?")[1], t = "/pages/webview/webview?pageType=chargingStationDetail&entranceSource=PTX-CDXX-HCZX-XCXSYX-1012";
                r && (t += "&".concat(r), wx[a("0x9")]({
                    url: t
                }));
            }
        }
    }
};

exports[a("0x3")] = u;

var g = Behavior(u);

exports.bindCar = g;
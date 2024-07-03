var e, t, r = require("../../../@babel/runtime/helpers/regeneratorRuntime"), i = require("../../../@babel/runtime/helpers/typeof"), a = [ "&", "map", "data", "iterator", "length", "&userLatitude=", "&address=", "longitude", "hasService", "next", "sent", "附近油站", "relatedTime", "split", "defineProperties", "latitude", "updateRelatedList", "resolve", "find", "/pages/webview/webview?pageType=parkingDetail&id=", "&source=xcx_sy2021&entranceSource=xcx_sy", "indexOf", "concat", "address", "/pages/webview/webview?pageType=branches&outletId=", "end", "config", "then", "oriPrice", "washCarStores", "charge", "gasStation", "defineProperty", "&supplierCode=", "call", "lat", "secondTitle", "park", "serviceType", "duration", "keys" ];

e = a, t = 283, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var n = function(e, t) {
    return a[e -= 0];
};

function c(e) {
    return (c = "function" == typeof Symbol && "symbol" == i(Symbol[n("0x7")]) ? function(e) {
        return i(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : i(e);
    })(e);
}

function o(e, t) {
    var r = Object[n("0x3")](e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
    }
    return r;
}

function s(e) {
    for (var t = 1; t < arguments[n("0x8")]; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? o(Object(r), !0).forEach(function(t) {
            u(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object[n("0x12")](e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
            Object[n("0x24")](e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function u(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != c(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var i = r[n("0x26")](e, t || "default");
                if ("object" != c(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == c(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function d(e, t, r, i, a, c, o) {
    try {
        var s = e[c](o), u = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    s.done ? t(u) : Promise[n("0x15")](u)[n("0x1f")](i, a);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.serDiscountsMixins = exports.serDiscounts = void 0;

var l = getApp(), v = {
    data: {
        serDiscounts: {
            title: "",
            secondTitle: "",
            status: !1
        },
        relatedList: {
            actBg: "",
            actUrl: "",
            serviceBg: "",
            serviceUrl: ""
        },
        relatedOpacity: 0,
        relatedTime: null,
        serviceList: [],
        serviceIndex: 0
    },
    methods: {
        getSerDiscounts: function(e, t) {
            var i = this;
            return function(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(i, a) {
                        var n = e.apply(t, r);
                        function c(e) {
                            d(n, i, a, c, o, "next", e);
                        }
                        function o(e) {
                            d(n, i, a, c, o, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }(r().mark(function a() {
                var c, o, u, d, v, p, x, f, g, h, m, y, b, w, S, T, O, D, j, P, k, L, C, N, I, M, U, B, _, A, E, R, F, q, z, W, G, $, H, J, K, Q, V, X, Y, Z, ee, te, re, ie, ae, ne, ce;
                return r().wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return c = e.lat, o = e.lon, u = e.selectCity, d = e.selectCityCode, r.next = 3, 
                        l.$http({
                            url: i.getApiUrl("getSerDiscounts"),
                            data: {
                                source: "main_serDiscounts",
                                userLng: o,
                                userLat: c,
                                cityName: u,
                                cityCode: d,
                                isNewEnergy: t || "N"
                            },
                            needToken: !0
                        });

                      case 3:
                        if (v = r.sent, p = v.code, x = v.data, f = 0 === p && x && Object[n("0x3")](x)[n("0x8")] > 0, 
                        console.warn("服务有优惠配置 ==========> ", v), !f) {
                            r.next = 66;
                            break;
                        }
                        if (g = x[n("0x22")], h = void 0 === g ? {} : g, m = x[n("0x23")], y = void 0 === m ? {} : m, 
                        b = x[n("0x21")], w = void 0 === b ? {} : b, S = x[n("0x0")], T = void 0 === S ? {} : S, 
                        O = x.moduleConfig, j = (D = (void 0 === O ? {} : O) || {}).title, P = D[n("0x28")], 
                        k = [ s(s({}, h), {}, {
                            title: "附近充电站"
                        }), s(s({}, y), {}, {
                            title: n("0xf")
                        }), s(s({}, T), {}, {
                            title: "附近停车场"
                        }), s(s({}, w), {}, {
                            title: "附近门店"
                        }) ], L = [], k.forEach(function(e) {
                            var t = e[n("0x1e")], r = e.data, i = e.title;
                            if (t || r) {
                                var a = s(s(s({}, r), t), {}, {
                                    title: i,
                                    hasService: r && Object.keys(r).length > 0
                                });
                                L.push(a);
                            }
                        }), C = function(e) {
                            L[n("0x5")](function(t) {
                                return e.serviceType === t[n("0x1")] && (t = e), t;
                            });
                        }, !(N = L.find(function(e) {
                            return e.serviceType === n("0x22");
                        })) || !N.hasService) {
                            r.next = 35;
                            break;
                        }
                        return I = N.hczPrice, M = N[n("0x20")], U = N[n("0xb")], B = N.latitude, _ = N.tags, 
                        A = [], -1 !== (_ = _ ? _.split("|") : []).indexOf("地上") && A.push("地上"), -1 !== _[n("0x19")]("在线支付") && A.push("在线支付"), 
                        N.tags = A, N.hczPrice = I ? I.split("元/度")[0] : null, N.oriPrice = M ? M.split("元/度")[0] : null, 
                        r.next = 27, i.setComputeMap(o, c, U, B);

                      case 27:
                        E = r[n("0xe")], R = E.distance, F = void 0 === R ? "" : R, q = E.duration, z = void 0 === q ? "" : q, 
                        N.distance = F, N.duration = z, C(N);

                      case 35:
                        if ((W = L[n("0x16")](function(e) {
                            return "gas" === e.serviceType;
                        })) && W[n("0xc")] && ((G = W.drivTime) && -1 === G.indexOf("约") && (W.drivTime = "约".concat(G), 
                        C(W))), !($ = L[n("0x16")](function(e) {
                            return "carWash" === e.serviceType;
                        })) || !$.hasService) {
                            r.next = 50;
                            break;
                        }
                        return H = $.lon, J = $.lat, r.next = 42, i.setComputeMap(o, c, H, J);

                      case 42:
                        K = r[n("0xe")], Q = K.distance, V = void 0 === Q ? "" : Q, X = K.duration, Y = void 0 === X ? "" : X, 
                        $.distance = V, $.duration = Y, C($);

                      case 50:
                        if (!(Z = L.find(function(e) {
                            return "park" === e.serviceType;
                        })) || !Z.hasService) {
                            r.next = 63;
                            break;
                        }
                        return ee = Z.longitude, te = Z.latitude, r[n("0xd")] = 55, i.setComputeMap(o, c, ee, te);

                      case 55:
                        re = r.sent, ie = re.distance, ae = void 0 === ie ? "" : ie, ne = re[n("0x2")], 
                        ce = void 0 === ne ? "" : ne, Z.distance = ae, Z.duration = ce, C(Z);

                      case 63:
                        L.sort(i.compareSort("sort")), i.setData({
                            serviceList: L,
                            serDiscounts: {
                                status: f,
                                title: j,
                                secondTitle: P
                            },
                            serviceIndex: 0
                        }), i.updateRelatedList(i.data.serviceIndex);

                      case 66:
                      case n("0x1d"):
                        return r.stop();
                    }
                }, a);
            }))();
        },
        updateRelatedList: function(e) {
            var t = this.data.serviceList;
            if (t && t[n("0x8")] > 0) {
                var r = t[n("0x16")](function(t, r) {
                    return e === r;
                }) || {}, i = r.relatedActBg, a = void 0 === i ? "" : i, c = r.relatedActUrl, o = void 0 === c ? "" : c, s = r.relatedServiceBg, u = void 0 === s ? "" : s, d = r.relatedServiceUrl, l = {
                    actBg: a,
                    actUrl: o,
                    serviceBg: u,
                    serviceUrl: void 0 === d ? "" : d
                };
                this.setData({
                    relatedList: l,
                    relatedOpacity: 1
                }), clearTimeout(this.data[n("0x10")]);
            }
        },
        changeServiceIndex: function(e) {
            var t = this, r = e.detail, i = r.current, a = r.source, c = this[n("0x6")], o = c.serviceList, s = c.trackArr, u = o[n("0x16")](function(e, t) {
                return i === t;
            }) || {}, d = u.track, l = void 0 === d ? "" : d, v = u.title;
            ("autoplay" === a || "touch" === a) && (this.setData({
                serviceIndex: i,
                relatedOpacity: 0
            }), this[n("0x6")].relatedTime = setTimeout(function() {
                t[n("0x14")](i);
            }, 200), l && -1 === s[n("0x19")](l) && (this.data.trackArr.push(l), this.setTrack(l, {
                source: this.data.source,
                serviceName: v
            })));
        },
        entryServiceDetail: function(e) {
            var t = e.currentTarget.dataset.item, r = t.title, i = t.serviceType, a = t.outletNo, c = t.gasId, o = t.supplierCode, s = t.hasService, u = t.id, d = t.spSourceId, l = this.data.regionData, v = l[n("0x27")], p = l.lon;
            if (s) {
                var x = {
                    charge: "/pages/webview/webview?pageType=chargingStationDetail",
                    gas: "/pages/webview/webview?pageType=cheerGatherDetail&gasId=".concat(c, n("0x25")).concat(o, "&useScene=1&useSceneDetail=1&source=xcx_sy2021"),
                    park: n("0x17").concat(u, "&spSourceId=")[n("0x1a")](d, "&userLongitude=").concat(p, n("0x9")).concat(v, "&source=xcx_sy2021"),
                    carWash: n("0x1c")[n("0x1a")](a, n("0x18"))
                }[i];
                if ("charge" === i) {
                    var f = e.currentTarget.dataset.item.stationUrl[n("0x11")]("?")[1];
                    x += n("0x4")[n("0x1a")](f);
                }
                this.jumpFun(x, "点击服务有优惠栏目", {
                    serviceName: r,
                    modulelocation: "1"
                });
            }
        },
        entryServiceMore: function(e) {
            var t = e.currentTarget.dataset.item, r = t.moreUrl, i = t.title;
            this.jumpFun(r, "点击服务有优惠更多", {
                serviceName: i
            });
        },
        goNavigation: function(e) {
            var t = e.currentTarget.dataset.item, r = t[n("0x13")], i = t.longitude, a = t.parkName, c = t[n("0x1b")], o = "/pages/navigationMap/navigationMap?latitude=".concat(r, "&longitude=").concat(i, "&name=").concat(a, n("0xa")).concat(c);
            this.goNextPage(o, "navigateTo");
        },
        goCorrelation: function(e) {
            var t = e.currentTarget.dataset, r = t.url, i = t.module;
            this.jumpFun(r, "点击服务有优惠栏目", {
                modulelocation: i
            });
        }
    }
};

exports.serDiscountsMixins = v;

var p = Behavior(v);

exports.serDiscounts = p;
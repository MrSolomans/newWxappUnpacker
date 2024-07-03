var e, t, n = require("../@babel/runtime/helpers/typeof"), r = [ "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "getHours", "onlyOnce", "key", "00:00:00:00", "string", "floor", "__esModule", "enumerable", "post", "function", "concat", ":", "call", "Map", "sort", "获取弹窗配置失败", "&", "hadGoTo", "N", "default", "push", "-", "setHours", "showAlert", "getNowTime", "recodeTimeForPoint", "preData_pageInfo", "filter", "=", "toPrimitive", "hideRedPoint", "getOwnPropertyDescriptors", "search_cm", "秒种", "map", "count", "getTime", "nowTime", "forEach", "yyyy-mm-dd hh:mm:ss", "reduce", "timeSec", "handlePointCount", "assign", "code", "0", "后", "getTimeString", "getMonth", "getStorageSync", "小程序", "value", "length", "后台接口没有数据", "年", "timeMin", "split", "replace", "8B3587ABB03A6334E054022128574717", "downFlag", "getDate", "setYear" ];

e = r, t = 170, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var o = function(e, t) {
    return r[e -= 0];
};

Object.defineProperty(exports, o("0x1a"), {
    value: !0
}), exports.DateAddFormat = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "d", n = arguments[o("0x9")] > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0;
    switch (("string" == typeof e || "number" == typeof e) && (e = new Date(e)), t.toLocaleLowerCase()) {
      case "y":
        e[o("0x12")](e.getFullYear() + n);
        break;

      case "m":
        e.setMonth(e.getMonth() + n);
        break;

      case "h":
        e[o("0x2a")](e.getHours() + n);
        break;

      default:
        e.setDate(e.getDate() + n);
    }
    var a = y(e, r);
    return a;
}, exports.DateFormat = y, exports.computeCountdown = function(e, t) {
    var n = "00", r = "00", a = "00", c = "00";
    if (e > t) return {
        day: n,
        hour: r,
        minute: a,
        second: c
    };
    var i = Math.floor((t - e) / 1e3);
    return i / 86400 == 1 ? {
        day: n,
        hour: "24",
        minute: a,
        second: c
    } : (n = Math.floor(i / 86400), i %= 86400, r = (r = Math[o("0x19")](i / 3600)) >= 10 ? r : "0".concat(r), 
    i %= 3600, a = (a = Math.floor(i / 60)) >= 10 ? a : "0".concat(a), c = (c = i % 60) >= 10 ? c : "0".concat(c), 
    {
        day: n,
        hour: r,
        minute: a,
        second: c
    });
}, exports[o("0x27")] = void 0, exports.getActivityList = function() {
    return m({
        pageInfoId: 0 === x.globalData.environment ? "8B1AF6CB2B0A73C4E05490E2BADCE8C8" : "8B353A4FB6DE4186E054022128574717"
    }).then(function(e) {
        return e[o("0x22")](function(e, t) {
            return t.downFlag - e[o("0x10")];
        })[o("0x36")](function(e) {
            var t = e.targetUrl.split("?")[1], n = {};
            return t && (t = t.split("&")).forEach(function(e) {
                var t = e.split("=");
                n[t[0] + "_cm"] = t[1];
            }), Object.assign({}, n, e);
        });
    });
}, exports.getAlertInfo = function(e) {
    return m({
        pageInfoId: 0 === x.globalData.environment ? "8B039ADE957B7E7FE05490E2BADCE8C8" : o("0xf")
    }).then(function(t) {
        var n = {}, r = 0, c = 0;
        return t[o("0x3a")](function(t) {
            var i = a[o("0x27")].getQueryObj(t.advertName), u = i.count, s = i.type, l = i[o("0x15")];
            if (r += Number(l) || 0, c += l ? 1 : 0, n[o("0x37")] = Number(u), e === s) {
                Object.assign(n, t), !l && (r = 0);
                var f = t.showDayAll, g = t.showDayBegin, x = t.showDayEnd, d = t.showHourAll;
                if (f === d && "Y" === f && (n.showAlert = !0), f === o("0x26")) {
                    var p = new Date(h(g)).getTime(), m = new Date(h(x)).getTime(), v = new Date().getTime();
                    n[o("0x2b")] = v > p && v < m;
                }
            }
        }), (r = c ? r / c : 0) >= 1 ? (n.alertType = "主页通用弹窗", n.alertTotal = r) : (n.alertType = e, 
        n.alertTotal = n.count), n;
    }).catch(function(e) {
        return console.warn(o("0x23"), e), {};
    });
}, exports.getService = function(e) {
    var t = function(e) {
        var t = {};
        return Object.entries(e).reduce(function(e, n) {
            var r = function(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, c, i, u = [], s = !0, l = !1;
                        try {
                            if (c = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                s = !1;
                            } else for (;!(s = (r = c[o("0x20")](n)).done) && (u[o("0x28")](r.value), u.length !== t); s = !0) ;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            l = !0, a = e;
                        } finally {
                            try {
                                if (!s && null != n.return && (i = n.return(), Object(i) !== i)) return;
                            } finally {
                                if (l) throw a;
                            }
                        }
                        return u;
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return c(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), o("0x21") === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
                    }
                }(e, t) || function() {
                    throw new TypeError(o("0x13"));
                }();
            }(n, 2), a = r[0], i = r[1];
            return e[a] = function(e) {
                return e && e instanceof Array ? e[o("0x3c")](function(e, n) {
                    if (!n || !n.targetUrl) return e;
                    var r = n.targetUrl[o("0xd")]("#/"), a = r[0].split("?"), c = a[1];
                    n[o("0x34")] = c || "", n.page_cm = a[0], n.hash_cm = r[1] || "";
                    var i = {};
                    return c && (c = c.split(o("0x24")))[o("0x3a")](function(e) {
                        var t = e.split(o("0x30"));
                        i[t[0]] = t[1];
                    }), t.paramList = i, e.push(Object[o("0x0")]({}, t, n)), e;
                }, []) : [];
            }(i), e;
        }, {});
    }, n = wx.getStorageSync("preData_pageInfo");
    return n ? (wx.removeStorageSync(o("0x2e")), Promise.resolve(t(n.data))) : new Promise(function(n) {
        var r = {};
        "release" !== x.globalData.envVersion && (r.versionno = "grayTest"), wx.request({
            url: x.getRequestUrl("/uapi/cps-hcz-smallapp/indexPage/getSerList"),
            data: {
                "X-PA-NONCESTR": 1,
                channel: o("0x7"),
                departmentCode: "0",
                mediaScoure: "0",
                pageInfoId: e
            },
            method: o("0x1c"),
            header: u({
                "Content-Type": "application/json",
                secret_token: wx.getStorageSync("hczAccessToken") || wx.getStorageSync("secret_token") || ""
            }, r),
            success: function(e) {
                var r = e.data, a = r.data;
                0 === r[o("0x1")] && a ? n(t(a)) : (console.warn(o("0xa")), n(!1));
            },
            fail: function(e) {
                console.warn("queryConfigurePageInfo接口请求失败,", e), n(!1);
            }
        });
    }).then(function(e) {
        return e;
    });
}, exports.getTime = v, exports.getTimeStrForBefore = function(e) {
    var t;
    t = isNaN(Number(e)) ? new Date(h(e))[o("0x38")]() : Number(e);
    var n = Date.now() - t, r = n > 0 ? "前" : o("0x3"), a = Math.abs(n) / 1e3;
    if (a <= 1) return "1秒".concat(r);
    var c = a / 60;
    if (c < 1) return "".concat(parseInt(a, 10), o("0x35")).concat(r);
    var i = c / 60;
    if (i < 1) return "".concat(parseInt(c, 10), "分种").concat(r);
    var u = i / 24;
    if (u < 1) return "".concat(parseInt(i, 10), "小时")[o("0x1e")](r);
    var s = u / 365;
    return s < 1 ? "".concat(parseInt(u, 10), "天").concat(r) : ""[o("0x1e")](parseInt(s, 10), o("0xb"))[o("0x1e")](r);
}, exports[o("0x4")] = h, exports.getUseCarService = function(e, t) {
    return m({
        pageInfoId: e
    }).then(function(e) {
        console.log("用车服务聚合页--用车服务--\x3e", e);
        var n = {};
        return e[o("0x36")](function(e) {
            var r = e.targetUrl.split("#/"), a = r[0].split("?"), c = a[1];
            e.search_cm = c || "", e.page_cm = a[0], e.hash_cm = r[1] || "";
            var i = {};
            return c && (c = c.split("&")).forEach(function(e) {
                var t = e.split(o("0x30"));
                i[t[0]] = t[1];
            }), n.paramList = i, t && ("yes" === i.redPoint ? n.showThePoint = p(e.advertName, 1) : n.showThePoint = !1), 
            Object.assign({}, n, e);
        });
    });
}, exports[o("0x3e")] = p, exports[o("0x32")] = function(e) {
    var t = wx.getStorageSync("recodeTimeForPoint");
    t && t[e] && (t[e].hadGoTo = !0, wx.setStorageSync(o("0x2d"), t));
}, exports.queryConfigurePage = m, exports.refreshTime = function(e, t) {
    var n = arguments[o("0x9")] > 2 && void 0 !== arguments[2] ? arguments[2] : "string";
    if (!e) return "00:00:00:00";
    var r = wx[o("0x6")](e);
    r = r[o("0xe")](/-/g, "/"), e = r ? new Date(r) : new Date();
    var a = new Date(), c = e[o("0x38")]() - a.getTime(), i = parseInt(c / 1e3), u = Math.floor(i / 86400) || 0, s = Math.floor((i - 24 * u * 60 * 60) / 3600) || 0, l = Math.floor((i - 24 * u * 60 * 60 - 3600 * s) / 60) || 0, f = Math.floor(i - 24 * u * 60 * 60 - 3600 * s - 60 * l) || 0;
    if (u < 0 || 0 === u && 0 === s && 0 === l && 0 === f) return clearInterval(t), 
    o("0x17");
    var g = {};
    return g.timeDay = u < 10 ? o("0x2") + u : u, g.timeHour = s < 10 ? "0" + s : s, 
    g.timeMin = l < 10 ? "0" + l : l, g.timeSec = f < 10 ? "0" + f : f, n === o("0x18") ? "".concat(g.timeDay, ":").concat(g.timeHour, ":").concat(g[o("0xc")], ":").concat(g[o("0x3d")]) : g;
};

var a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./handleString"));

function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}

function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r[o("0x2f")](function(t) {
            return Object.getOwnPropertyDescriptor(e, t)[o("0x1b")];
        })), n.push.apply(n, r);
    }
    return n;
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(n), !0).forEach(function(t) {
            s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object[o("0x33")](n)) : i(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}

function s(e, t, n) {
    return (t = g(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function l(e) {
    return (l = o("0x1d") == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && "symbol" == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
    })(e);
}

function f(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, o("0x8") in r && (r.writable = !0), 
        Object.defineProperty(e, g(r[o("0x16")]), r);
    }
}

function g(e) {
    var t = function(e, t) {
        if ("object" != l(e) || !e) return e;
        var n = e[Symbol[o("0x31")]];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != l(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    }(e, "string");
    return "symbol" == l(t) ? t : t + "";
}

var x = getApp(), d = function() {
    function e() {
        !function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
    }
    return function(e, t, n) {
        t && f(e.prototype, t), n && f(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        });
    }(e, [ {
        key: o("0x2c"),
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "date";
            return this.handleTimeObj(new Date(), e);
        }
    }, {
        key: "handleTimeObj",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all", n = (e = new Date(e)).getFullYear(), r = this.handleTen(e.getMonth() + 1), a = e.getDate(), c = "".concat(n, o("0x29")).concat(r, o("0x29")).concat(a);
            if ("year-month" === t) return "".concat(n, o("0x29")).concat(r);
            if ("date" === t) return c;
            var i = e.getHours(), u = e.getMinutes(), s = e.getSeconds(), l = "".concat(i, o("0x1f")).concat(u, ":").concat(s);
            return "seconds" === t ? l : "all" === t ? "".concat(c, " ").concat(l) : "obj" === t ? {
                year: n,
                month: r,
                date: a,
                hours: i,
                minutes: u,
                seconds: s
            } : void 0;
        }
    }, {
        key: "handleTen",
        value: function(e) {
            return e > 10 ? String(e) : "0" + e;
        }
    } ]), e;
}();

function p() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "homeAlert", t = arguments[o("0x9")] > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 ? arguments[2] : void 0, r = wx.getStorageSync("recodeTimeForPoint") || {}, a = r[e] || {}, c = !1, i = new d(), u = i[o("0x2c")](), s = 0, l = !1;
    return a.nowTime ? (s = a.count || 0, l = a[o("0x25")] || !1, u !== a.nowTime ? (c = !0, 
    s = 0) : c = s < t || 1 === t && !n && !l) : c = !0, a[o("0x39")] = u, a.count = ++s, 
    a.hadGoTo = l, r[e] = a, wx.setStorageSync("recodeTimeForPoint", r), c;
}

function m() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new Promise(function(t, n) {
        x.queryConfigurePageInfo(u({
            channel: o("0x7"),
            departmentCode: o("0x2"),
            mediaScoure: o("0x2")
        }, e)).then(function(e) {
            e ? t(e) : n(e);
        }).catch(function(e) {
            n(e);
        });
    });
}

function h(e) {
    return e ? (e = (e = e[o("0xe")](/-/g, "/")).substr(0, 19)).replace(/-/g, "/") : "";
}

function v() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
    ("string" == typeof e || "number" == typeof e) && (e = new Date(e));
    var t = e.getFullYear(), n = e[o("0x5")]() + 1 < 10 ? o("0x2") + (e.getMonth() + 1) : e.getMonth() + 1, r = e[o("0x11")]() < 10 ? "0" + e.getDate() : e.getDate(), a = e[o("0x14")]() < 10 ? o("0x2") + e[o("0x14")]() : e.getHours(), c = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(), i = e.getSeconds() < 10 ? o("0x2") + e.getSeconds() : e.getSeconds(), u = "".concat(t, "-").concat(n, "-").concat(r, " ").concat(a, ":")[o("0x1e")](c, o("0x1f")).concat(i);
    return u;
}

function y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd", n = v(e), r = "";
    switch (t) {
      case o("0x3b"):
        r = n;
        break;

      default:
        r = n.match(/^(\d+)-(\d+)-(\d+)/i)[0];
    }
    return r;
}

exports.default = d;
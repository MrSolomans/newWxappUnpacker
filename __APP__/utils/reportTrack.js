var e, t, r = require("../@babel/runtime/helpers/typeof"), n = [ "projectId", "keys", "Page", "setStorageSync", "object", ".", "customerVar", "dtStat", "appId", "substring", "windowWidth", "detail", "sessiontime", "onload", "platform", "dtStatH5", "getDate", "@babel/helpers - typeof", "prefix", "deviceId", "version", "&", "done", "onReachBottom", "length", "trackEvent ok", "[a-zA-Z_0-9]+$", "getTime", "undefined", "orderAMT", "setUserProperty", "eventName", "seStartTime", "Arguments", "iterator", "event", "split", "projectid", "appID", "preCharge", "Data", "getStorageSync", "siteId_v2", "data", "userProperty", "stat", "pageview", "stat_onLoad", "onPullDownRefresh", "url_v1", "eventTime", ";", "hasOwnProperty", "join", "title", "isArray", "order", "?", "eventBody", "app_id", "symbol", "pop", "trackAddCart ok", "function", "random", "toString", "stat_pull_down_fresh", "=", "call", "url", "event1.0", "push", "request", "Event", "floor", "dtStatV1", "constructor", "deviceid", "referer", "url_v2", "productPage", "onshow", "indexOf", "__route__", "plugin", "statShareApp", "stringify" ];

e = n, t = 125, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return n[e -= 0];
};

function o(e) {
    return a("0x42"), (o = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
        return r(e);
    } : function(e) {
        return e && a("0x19") == ("undefined" == typeof Symbol ? "undefined" : r(Symbol)) && e.constructor === Symbol && e !== Symbol.prototype ? a("0x16") : r(e);
    })(e);
}

function u(e, t) {
    return function(e) {
        if (Array[a("0x11")](e)) return e;
    }(e) || function(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol[a("0x53")]] || e["@@iterator"];
        if (null != r) {
            var n, o, u, i, l = [], s = !0, c = !1;
            try {
                if (u = (r = r[a("0x1e")](e)).next, 0 === t) {
                    if (Object(r) !== r) return;
                    s = !1;
                } else for (;!(s = (n = u[a("0x1e")](r))[a("0x47")]) && (l.push(n.value), l[a("0x49")] !== t); s = !0) ;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                c = !0, o = e;
            } finally {
                try {
                    if (!s && null != r.return && (i = r.return(), Object(i) !== i)) return;
                } finally {
                    if (c) throw o;
                }
            }
            return l;
        }
    }(e, t) || l(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function i(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
        if (Array.isArray(e) || (r = l(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, o = function() {};
            return {
                s: o,
                n: function() {
                    return n >= e[a("0x49")] ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[n++]
                    };
                },
                e: function(e) {
                    throw e;
                },
                f: o
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var u, i = !0, s = !1;
    return {
        s: function() {
            r = r.call(e);
        },
        n: function() {
            var e = r.next();
            return i = e.done, e;
        },
        e: function(e) {
            s = !0, u = e;
        },
        f: function() {
            try {
                i || null == r.return || r.return();
            } finally {
                if (s) throw u;
            }
        }
    };
}

function l(e, t) {
    if (e) {
        if ("string" == typeof e) return s(e, t);
        var r = {}[a("0x1b")].call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e[a("0x26")].name), "Map" === r || "Set" === r ? Array.from(e) : a("0x52") === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0;
    }
}

function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}

var c = !1, f = !0, d = {
    app_id: "",
    url_v1: "",
    siteId_v1: "",
    url_v2: "",
    siteId_v2: "",
    prefix: "_datatist_",
    version: "",
    projectId: "",
    userProperty: "",
    stat_share_app: !1,
    stat_pull_down_fresh: !1,
    stat_reach_bottom: !1,
    stat_onLoad: 1,
    stat_onShow: 1,
    log: !0
}, v = {};

function g(e) {
    wx.getNetworkType({
        success: function(t) {
            e(t.networkType);
        }
    });
}

function p() {
    try {
        return wx.getStorageSync(d.prefix + "auid");
    } catch (e) {}
}

function x(e) {
    try {
        var t = e;
        return (null == t || null == t) && (t = N()), wx[a("0x34")](d.prefix + "auid", t), 
        t;
    } catch (e) {}
}

function h() {
    var e = getCurrentPages(), t = e[e.length - 1], r = t ? t.options : {};
    if (0 === Object[a("0x32")](r).length) return "";
    var n = "?";
    for (var o in r) {
        n += o + "=" + r[o] + "&";
    }
    return n = n.substring(0, n[a("0x49")] - 1);
}

function y() {
    return d[a("0x4")];
}

function _() {
    try {
        return wx.getStorageSync(d.prefix + a("0x56"));
    } catch (e) {}
}

function m() {
    try {
        return wx.getStorageSync(d.prefix + "h5projectid");
    } catch (e) {}
}

function S(e) {
    var t = m();
    if (t !== e && null != e && "" !== e) try {
        return (null == (t = e) || null == t) && (t = ""), wx.setStorageSync(d.prefix + "h5projectid", t), 
        t;
    } catch (e) {}
    if (null == t || null == t || "" == t) try {
        return (null == (t = e) || null == t) && (t = ""), wx.setStorageSync(d.prefix + "h5projectid", t), 
        t;
    } catch (e) {}
}

function w() {
    try {
        return wx.getStorageSync(d.prefix + "h5siteid");
    } catch (e) {}
}

function I(e) {
    try {
        return wx.setStorageSync(d.prefix + "h5siteid", e), e;
    } catch (e) {}
}

function P() {
    try {
        return wx.getStorageSync(d.prefix + a("0x27"));
    } catch (e) {}
}

function b() {
    try {
        return wx.getStorageSync(d.prefix + "sessionid");
    } catch (e) {}
}

function k() {
    var e = j(16);
    try {
        return wx.setStorageSync(d.prefix + "sessionid", e), function() {
            var e = new Date().getTime();
            try {
                wx[a("0x34")](d.prefix + a("0x3d"), e);
            } catch (e) {}
        }(), e;
    } catch (e) {}
}

function C() {
    try {
        return wx.getStorageSync(d.prefix + "sessiontime");
    } catch (e) {}
}

function O() {
    var e = b();
    (null == e || null == e || "" == e) && k();
    var t = new Date(), r = C(), n = new Date()[a("0x4c")]();
    return (t.getDate() != new Date(r)[a("0x41")]() || n - r > 18e5) && (k(), !0);
}

function N(e) {
    for (var t = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], r = 10; 1 < r; r--) {
        var n = Math[a("0x24")](10 * Math.random()), o = t[n];
        t[n] = t[r - 1], t[r - 1] = o;
    }
    for (r = n = 0; 5 > r; r++) n = 10 * n + t[r];
    return (e || "") + (n + "") + +new Date();
}

function j(e, t) {
    var r, n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[a("0x55")](""), u = [];
    if (t = t || o.length, e) for (r = 0; r < e; r++) u[r] = o[0 | Math[a("0x1a")]() * t]; else for (u[8] = u[13] = u[18] = u[23] = "-", 
    u[14] = "4", r = 0; r < 36; r++) !u[r] && (n = 0 | 16 * Math.random(), u[r] = o[19 == r ? 3 & n | 8 : n]);
    return u.join("");
}

function D() {
    try {
        var e = getCurrentPages(), t = "/";
        return 0 < e.length && (t = e[a("0x17")]().__route__), t;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        B("get current page path error:" + e);
    }
}

function R() {
    var e = {
        url: D(),
        userId: ""
    };
    return e.userId = p(), e;
}

function V() {
    var e = {
        userId: ""
    };
    return e.userId = p(), e;
}

function T() {
    var e = function() {
        var e = wx.getSystemInfoSync(), t = e.system.split(" "), r = void 0, n = void 0;
        if (null != t && null != t) {
            t[0];
            if (null != t[1] && null != t[1]) {
                var o = t[1][a("0x2c")](".");
                r = t[1].substring(0, o), n = t[1][a("0x3a")](o + 1);
            }
        }
        var u = e.version, i = u.indexOf(a("0x36"));
        return v.platform = e.platform, v.system = e.system, {
            uaDevice: e.model,
            resolution: e.windowWidth + "*" + e.windowHeight,
            language: e.language,
            uaOsMajor: null == r ? "" : r,
            uaOsMinor: null == n ? "" : n,
            uaMajor: u.substring(0, i),
            uaMinor: u.substring(i + 1),
            uaName: "wechatdevtools"
        };
    }();
    return g(function(e) {
        wx[a("0x34")](d.prefix + "ntdata", e);
    }), e.netType = wx.getStorageSync(d.prefix + "ntdata") || "4g", e;
}

function E() {
    var e = function() {
        var e = wx.getSystemInfoSync(), t = e.system.split(" "), r = void 0, n = void 0;
        if (null != t && null != t) {
            t[0];
            if (null != t[1] && null != t[1]) {
                var o = t[1].indexOf(".");
                r = t[1].substring(0, o), n = t[1].substring(o + 1);
            }
        }
        var u = e[a("0x45")], i = u.indexOf(".");
        return v[a("0x3f")] = e.platform, v.system = e.system, {
            uaDevice: e.model,
            resolution: e[a("0x3b")] + "*" + e.windowHeight,
            language: e.language,
            uaOsMajor: null == r ? "" : r,
            uaOsMinor: null == n ? "" : n,
            uaMajor: u[a("0x3a")](0, i),
            uaMinor: u.substring(i + 1),
            uaName: "wechatdevtools"
        };
    }();
    return g(function(e) {
        wx.setStorageSync(d.prefix + "ntdata", e);
    }), e.netType = wx.getStorageSync(d.prefix + "ntdata") || "4g", e;
}

function J() {
    var e, t = A.Data.userInfo, r = [];
    for (e in t) t.hasOwnProperty(e) && r.push(e + "=" + t[e]);
    return t = r.join(";"), v.appId = d[a("0x15")], v.appVersion = d.version + (null !== t && "" !== t ? ";ui=" + encodeURIComponent(t) : ""), 
    {};
}

function M(e) {
    for (var t = new Map(), r = 0, n = Object.keys(e); r < n[a("0x49")]; r++) {
        var o = n[r];
        t.set(o, e[o]);
    }
    return t;
}

function B(e) {
    1 == d.log && console.log(e);
}

var A = {
    App: {
        init: function(e) {
            a("0x0") in e && (d.app_id = e.appID), "url_v1" in e && (d.url_v1 = e.url_v1), "url_v2" in e && (d.url_v2 = e.url_v2), 
            "siteId_v1" in e && (d.siteId_v1 = e.siteId_v1), a("0x4") in e && (d.siteId_v2 = e.siteId_v2), 
            "version" in e && (d.version = e.version), a("0x2f") in e && (d.stat_share_app = e[a("0x2f")]), 
            "statPullDownFresh" in e && (d[a("0x1c")] = e.statPullDownFresh), "statReachBottom" in e && (d.stat_reach_bottom = e.statReachBottom), 
            "statLoad" in e && (d.stat_onLoad = e.onLoad), "statShow" in e && (d.stat_onShow = e.onShow), 
            "log" in e && (d.log = e.log), function(e) {
                var t = _();
                if (t !== e && null != e && "" !== e) try {
                    return (null == (t = e) || null == t) && (t = ""), wx[a("0x34")](d.prefix + a("0x56"), t), 
                    t;
                } catch (e) {}
                if (null == t || null == t || "" == t) try {
                    (null == (t = e) || null == t) && (t = ""), wx[a("0x34")](d[a("0x43")] + "projectid", t);
                } catch (e) {}
            }(e.projectId), function() {
                try {
                    var e = "s" + N();
                    wx.setStorageSync(d.prefix + "ssid", e);
                } catch (e) {}
            }(), k(), function(e) {
                var t = P();
                if (null == t || null == t || "" == t) try {
                    (null == (t = e) || null == t) && (t = j(16)), wx.setStorageSync(d.prefix + a("0x27"), t);
                } catch (e) {}
            }();
        },
        dtSetH5ProjectId: function(e) {
            S(e);
        },
        dtSetH5SiteId: function(e) {
            I(e);
        }
    },
    Page: {
        init: function(e) {
            var t, r = getCurrentPages()[getCurrentPages().length - 1];
            r.onShow && (t = r.onShow, r.onShow = function() {
                A[a("0x33")].stat(), t.call(this, arguments);
            }), d.stat_pull_down_fresh && r.onPullDownRefresh && function() {
                var e = r[a("0xa")];
                r.onPullDownRefresh = function() {
                    A.Event[a("0x7")](d[a("0x43")] + "pulldownfresh", {
                        url: r.__route__
                    }), e.call(this, arguments);
                };
            }(), d[a("0x9")] && r.onLoad && function() {
                var t = r.onLoad, n = "";
                null != e && null != e && (n = e.title || "");
                var o = getCurrentPages(), u = o[o[a("0x49")] - 1], i = void 0;
                if (o.length - 2 >= 0) {
                    var l = o[o.length - 2];
                    null != l && null != l && (i = l.route);
                }
                var s = {
                    eventName: "pageview",
                    title: n,
                    referrer: null == i ? "" : i,
                    eventBody: JSON[a("0x30")](s)
                };
                A.Event[a("0x38")](s, {
                    url: u[a("0x2d")]
                }), r.onLoad = function() {
                    A.Event.stat(d.prefix + a("0x3e"), {
                        url: r.__route__
                    }), t[a("0x1e")](this, arguments);
                };
            }(), d.stat_onShow && r.onShow && function() {
                var t = r.onShow, n = "";
                null != e && null != e && (n = e[a("0x10")] || "");
                var o = getCurrentPages(), u = o[o.length - 1], i = void 0;
                if (o.length - 2 >= 0) {
                    var l = o[o.length - 2];
                    null != l && null != l && (i = l.route);
                }
                var s = {
                    eventName: a("0x8"),
                    title: n,
                    referrer: null == i ? "" : i,
                    eventBody: JSON.stringify(s)
                };
                A.Event.dtStat(s, {
                    url: u.__route__
                }), r.onShow = function() {
                    A[a("0x23")][a("0x7")](d.prefix + a("0x2b"), {
                        url: r.__route__
                    }), t.call(this, arguments);
                };
            }(), d.stat_reach_bottom && r.onReachBottom && function() {
                var e = r[a("0x48")];
                r.onReachBottom = function() {
                    A.Event.stat(d.prefix + "reachbottom", {
                        url: r.__route__
                    }), e.call(this, arguments);
                };
            }(), d.stat_share_app && r.onShareAppMessage && function() {
                var e = r.onShareAppMessage;
                r.onShareAppMessage = function() {
                    return A.Event[a("0x7")](d.prefix + "shareapp", {
                        url: r.__route__
                    }), e.call(this, arguments);
                };
            }();
        },
        stat: function() {
            if ("" != d.app_id) {
                var e = [], t = J(), r = [ R(), t, T() ];
                A.Data.lanchInfo && (r.push({
                    ht: A.Data.lanchInfo.scene,
                    rdm: "/",
                    rurl: A.Data.lanchInfo.path
                }), A.Data.lanchInfo.query && A.Data.lanchInfo.query._datatist_ref_id && r.push({
                    rarg: A[a("0x2")].lanchInfo.query._datatist_ref_id
                }), 1 == A.Data.lanchInfo.landing && (t.ext += ";lp=1", A.Data.lanchInfo.landing = 0)), 
                r.push({
                    rand: +new Date()
                }), t = 0;
                for (var n = r.length; t < n; t++) for (var o in r[t]) r[t][a("0xe")](o) && e.push(o + "=" + (void 0 === r[t][o] ? "" : r[t][o]));
                wx.request({
                    url: d.url_v2 + "?" + e.join("&").toLowerCase(),
                    success: function(e) {
                        B(e);
                    },
                    fail: function(e) {
                        B(e);
                    },
                    complete: function(e) {
                        B(e);
                    }
                });
            }
        }
    },
    Event: {
        stat: function(e, t) {
            if ("" != d.event_id) {
                var r = [], n = R(), o = J();
                n.dm = "wxapps.click", n.url = e, o.r2 = d.event_id;
                var u, i = void 0 === t ? {} : t, l = [];
                for (u in i) i[a("0xe")](u) && l[a("0x21")](encodeURIComponent(u) + "=" + encodeURIComponent(i[u]));
                for (i = l.join(";"), o.r5 = i, i = 0, o = (n = [ n, o, T(), {
                    rand: +new Date()
                } ]).length; i < o; i++) for (var s in n[i]) n[i][a("0xe")](s) && r.push(s + "=" + (void 0 === n[i][s] ? "" : n[i][s]));
            }
        },
        dtStat: function(e, t) {
            if (0 != f) {
                O();
                var r = [], n = R(), o = J();
                n.url = t.url, n.eventTime = new Date().getTime(), n.siteId = d.siteId_v2, n.deviceId = P(), 
                n.sessionId = b(), n.seStartTime = C(), null != d.userProperty && "" != d.userProperty && (n.userProperty = d.userProperty), 
                n.projectId = _();
                var u = {
                    sdkVersion: "2.2.2",
                    appVersion: v.appVersion,
                    small_program_page_url_path: h()
                };
                n[a("0x37")] = JSON.stringify(u);
                var i, l = void 0 === t ? {} : t, s = [];
                for (i in l) l.hasOwnProperty(i) && s.push(encodeURIComponent(i) + "=" + encodeURIComponent(l[i]));
                for (l = s.join(";"), l = 0, o = (n = [ e, n, o, T() ]).length; l < o; l++) for (var g in n[l]) n[l].hasOwnProperty(g) && r.push(encodeURIComponent(g) + "=" + (void 0 === n[l][g] ? "" : encodeURIComponent(n[l][g])));
                1 == c && (c = !1, x(""));
                var p = {
                    url: d.url_v2 + "?" + r[a("0xf")]("&"),
                    success: function(e) {
                        B(e);
                    },
                    fail: function(e) {
                        B(e);
                    },
                    complete: function(e) {}
                };
                wx.request(p);
            }
        },
        dtStatV1: function(e, t) {
            var r = [], n = function() {
                var e = {
                    url: D(),
                    uid: ""
                };
                return e.uid = p(), e;
            }(), o = J();
            n[a("0x1f")] = t[a("0x1f")], n[a("0xc")] = new Date().getTime(), n.seStartTime = C(), 
            n.siteId = d.siteId_v1, n.deviceId = P(), n.sessionId = b(), console.log("small_program_page_url_path", 2);
            var u = {
                platform: v[a("0x3f")],
                system: v.system,
                sdkVersion: "2.2.2",
                appVersion: v.appVersion,
                appId: v[a("0x39")],
                small_program_page_url_path: h()
            };
            n.customerVar = JSON[a("0x30")](u);
            var i, l = void 0 === t ? {} : t, s = [];
            for (i in l) l.hasOwnProperty(i) && s.push(encodeURIComponent(i) + a("0x1d") + encodeURIComponent(l[i]));
            for (l = s[a("0xf")](a("0xd")), l = 0, o = (n = [ e, n, o, T() ]).length; l < o; l++) for (var c in n[l]) n[l].hasOwnProperty(c) && r.push(c + a("0x1d") + (void 0 === n[l][c] ? "" : n[l][c]));
            var f = {
                url: d[a("0xb")] + a("0x13") + r.join(a("0x46")),
                success: function(e) {
                    B(e);
                },
                fail: function(e) {
                    B(e);
                },
                complete: function(e) {}
            };
            B(f), wx.request(f);
        },
        dtDualStatH5: function(e, t) {
            if (0 != f) {
                O();
                var n = [], o = V(), u = J();
                o.url = t.url, o.eventTime = new Date().getTime(), o.siteId = w(), o[a("0x44")] = P(), 
                o.sessionId = b(), o[a("0x51")] = C(), o.projectId = m();
                var i = {
                    sourceProjectId: m(),
                    sourceSiteId: w(),
                    destProjectId: _(),
                    destSiteId: y()
                };
                o.bridgeInfo = JSON.stringify(i);
                var l = {
                    sdkVersion: "2.2.2",
                    appVersion: v.appVersion,
                    small_program_page_url_path: h()
                };
                o.customerVar = JSON.stringify(l);
                for (var s in e) "eventTime" === s ? o.eventTime = e[s] : s === a("0x2e") ? o.plugin = e[s] : "url" === s ? o.url = e[s] : "title" === s ? o.title = e[s] : "referer" === s ? o[a("0x28")] = e[s] : "customerVar" === s ? o.customerVar = e[s] : "eventName" === s ? o.eventName = e[s] : "eventBody" === s && (o.eventBody = e[s]);
                null != d[a("0x6")] && "" != d[a("0x6")] && (o.userProperty = d[a("0x6")]);
                var g, p = void 0 === t ? {} : t, S = [];
                for (g in p) p[a("0xe")](g) && S[a("0x21")](encodeURIComponent(g) + "=" + encodeURIComponent(p[g]));
                p = S.join(";"), p = 0;
                for (u = (o = [ o, u, E() ]).length; p < u; p++) for (var I in o[p]) o[p].hasOwnProperty(I) && n[a("0x21")](encodeURIComponent(I) + "=" + (a("0x4d") == r(o[p][I]) ? "" : encodeURIComponent(o[p][I])));
                1 == c && (c = !1, x(""));
                var k = {
                    url: d[a("0x29")] + "?" + n.join("&"),
                    success: function(e) {
                        B(e);
                    },
                    fail: function(e) {
                        B(e);
                    },
                    complete: function(e) {}
                };
                wx[a("0x22")](k);
            }
        },
        dtStatH5: function(e, t) {
            if (0 != f) {
                var r = !1;
                O();
                var n = [], o = V(), u = J();
                o.url = t.url, o.eventTime = new Date().getTime(), o.siteId = d.siteId_v2, o.deviceId = P(), 
                o.sessionId = b(), o[a("0x51")] = C(), o[a("0x31")] = _();
                var i = m(), l = w(), s = _(), g = y();
                null == s || s == a("0x4d") || s == i ? r = !1 : null != s && "undefined" != s && s != i && (r = !0);
                var p = {
                    sourceProjectId: i,
                    sourceSiteId: l,
                    destProjectId: s,
                    destSiteId: g,
                    dupFlag: 1
                };
                o.bridgeInfo = JSON[a("0x30")](p);
                var S = {
                    sdkVersion: "2.2.2",
                    appVersion: v.appVersion,
                    small_program_page_url_path: h()
                };
                o.customerVar = JSON.stringify(S);
                for (var I in e) "eventTime" === I ? o.eventTime = e[I] : I === a("0x2e") ? o[a("0x2e")] = e[I] : "url" === I ? o.url = e[I] : "title" === I ? o[a("0x10")] = e[I] : "referer" === I ? o.referer = e[I] : "customerVar" === I ? o.customerVar = e[I] : "eventName" === I ? o[a("0x50")] = e[I] : "eventBody" === I && (o[a("0x14")] = e[I]);
                null != d.userProperty && "" != d.userProperty && (o.userProperty = d.userProperty);
                var k, N = void 0 === t ? {} : t, j = [];
                for (k in N) N.hasOwnProperty(k) && j.push(encodeURIComponent(k) + "=" + encodeURIComponent(N[k]));
                N = j.join(a("0xd")), N = 0;
                for (u = (o = [ o, u, E() ])[a("0x49")]; N < u; N++) for (var D in o[N]) o[N].hasOwnProperty(D) && n.push(encodeURIComponent(D) + "=" + (void 0 === o[N][D] ? "" : encodeURIComponent(o[N][D])));
                1 == c && (c = !1, x(""));
                var R = this, T = {
                    url: d.url_v2 + "?" + n.join("&"),
                    success: function(n) {
                        B(n), r && R.dtDualStatH5(e, t);
                    },
                    fail: function(e) {
                        B(e);
                    },
                    complete: function(e) {}
                };
                wx.request(T);
            }
        }
    },
    getWebMessage: function(e) {
        if (null != e) {
            JSON.stringify(e[a("0x3c")][a("0x5")]);
            if (null != e.detail.data) {
                var t, r = i(M(e[a("0x3c")][a("0x5")]));
                try {
                    for (r.s(); !(t = r.n()).done; ) {
                        var n = u(t.value, 2), o = (n[0], n[1]);
                        this.h5RawTrack(o, null);
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    r.e(e);
                } finally {
                    r.f();
                }
            } else B("msg.detail.data is null");
        } else B("parameter is null");
    },
    getRandom: function(e) {
        return j(e);
    },
    Data: {
        userInfo: null,
        lanchInfo: null
    },
    setUserId: function(e) {
        null != e && null != e && x(e);
    },
    setEnable: function(e) {
        f = 1 == e && e;
    },
    getEnable: function() {
        return f;
    },
    trackPageview: function(e, t, r) {
        B("trackPageview");
        var n = null == e || null == e ? "" : e, o = {
            udVariable: t
        }, u = getCurrentPages(), i = u[u.length - 1], l = void 0;
        if (u.length - 2 >= 0) {
            var s = u[u.length - 2];
            null != s && null != s && (l = s.route);
        }
        var c = {
            eventName: a("0x8"),
            title: n,
            referrer: null == l ? "" : l,
            eventBody: JSON.stringify(o)
        };
        A.Event.dtStat(c, {
            url: i.__route__
        });
    },
    trackSearch: function(e, t, r, n, o) {
        B("trackSearch");
        var u = {
            keyword: e,
            recommendationSearchFlag: 1 == t ? 1 : 0,
            historySearchFlag: 1 == r ? 1 : 0,
            udVariable: n
        }, i = {
            eventName: "search",
            eventBody: JSON[a("0x30")](u)
        }, l = getCurrentPages()[getCurrentPages().length - 1];
        A[a("0x23")].dtStat(i, {
            url: l[a("0x2d")]
        });
    },
    trackRegister: function(e, t, r, n, o) {
        B("trackRegister");
        var u = {
            uid: e,
            type: t,
            authenticated: 1 == r ? 1 : 0,
            udVariable: n
        }, i = {
            eventName: "register",
            eventBody: JSON[a("0x30")](u)
        }, l = getCurrentPages()[getCurrentPages().length - 1];
        A.Event.dtStat(i, {
            url: l[a("0x2d")]
        });
    },
    trackLogin: function(e, t, r) {
        if (B("trackLogin"), null != e && null != e) {
            x(e);
            var n = {
                udVariable: t
            }, o = {
                eventName: "login",
                eventBody: JSON.stringify(n)
            }, u = getCurrentPages()[getCurrentPages()[a("0x49")] - 1];
            A.Event.dtStat(o, {
                url: u.__route__
            }), null != r && null != r && r("trackLogin ok");
        }
    },
    trackLogout: function(e, t, r) {
        if (B("trackLogout"), c = !0, null != e && null != e) {
            x(e);
            var n = {
                udVariable: t
            }, o = {
                eventName: "logout",
                eventBody: JSON.stringify(n)
            }, u = getCurrentPages()[getCurrentPages()[a("0x49")] - 1];
            A.Event.dtStat(o, {
                url: u.__route__
            }), null != r && null != r && r("trackLogout ok");
        }
    },
    trackProductPage: function(e, t, r, n, o, u, i, l) {
        if (B("trackProductPage"), null != e && null != e) {
            var s = {
                sku: e,
                productCategory1: t,
                productCategory2: r,
                productCategory3: n,
                productOriginalPrice: o,
                productRealPrice: u,
                udVariable: i
            }, c = {
                eventName: a("0x2a"),
                eventBody: JSON.stringify(s)
            }, f = getCurrentPages()[getCurrentPages().length - 1];
            A[a("0x23")].dtStat(c, {
                url: f.__route__
            }), null != l && null != l && l("trackProductPage ok");
        }
    },
    trackAddCart: function(e, t, r, n, o) {
        if (B("trackAddCart"), null != e && null != e) {
            var u = {
                sku: e,
                productQuantity: t,
                productRealPrice: r,
                udVariable: n
            }, i = {
                eventName: "addCart",
                eventBody: JSON.stringify(u)
            }, l = getCurrentPages()[getCurrentPages().length - 1];
            A.Event.dtStat(i, {
                url: l.__route__
            }), null != o && null != o && o(a("0x18"));
        }
    },
    trackOrder: function(e, t, r, n, o) {
        B("trackOrder");
        var u = {
            orderInfo: e,
            couponInfo: t,
            productInfo: r,
            udVariable: n
        }, i = {
            eventName: "order",
            eventBody: JSON.stringify(u)
        }, l = getCurrentPages()[getCurrentPages()[a("0x49")] - 1];
        A.Event.dtStat(i, {
            url: l.__route__
        }), null != o && null != o && o("trackOrder ok");
    },
    trackPayment: function(e, t, r, n, o, u) {
        B("trackPayment");
        var i = {
            orderID: e,
            payMethod: t,
            payStatus: 1 == r ? 1 : 0,
            payAMT: n,
            udVariable: o
        }, l = {
            eventName: "payment",
            eventBody: JSON.stringify(i)
        }, s = getCurrentPages()[getCurrentPages().length - 1];
        A[a("0x23")].dtStat(l, {
            url: s[a("0x2d")]
        }), null != u && null != u && u("trackPayment ok");
    },
    trackPreCharge: function(e, t, r, n, o, u) {
        B("trackPreCharge");
        var i = {
            chargeAMT: e,
            chargeMethod: t,
            payStatus: 1 == n ? 1 : 0,
            couponAMT: r,
            udVariable: o
        }, l = {
            eventName: a("0x1"),
            eventBody: JSON.stringify(i)
        }, s = getCurrentPages()[getCurrentPages().length - 1];
        A[a("0x23")].dtStat(l, {
            url: s.__route__
        }), null != u && null != u && u("trackPreCharge ok");
    },
    trackEvent: function(e, t, r) {
        B("trackEvent");
        var n = t;
        if (null != new RegExp(a("0x4b"), "ig").exec(e)) {
            var o = {
                eventName: e,
                eventBody: JSON[a("0x30")](n)
            }, u = getCurrentPages()[getCurrentPages()[a("0x49")] - 1];
            A.Event.dtStat(o, {
                url: u.__route__
            }), null != r && null != r && r("trackEvent ok");
        } else r("invalid eventName");
    },
    customerTrack: function(e, t, r) {
        B("customerTrack");
        var n = t, o = {
            eventName: e,
            eventBody: JSON.stringify(n)
        }, u = getCurrentPages()[getCurrentPages()[a("0x49")] - 1] || {
            __route: wx[a("0x3")]("getLaunchOptionsSync").path
        };
        A.Event.dtStat(o, {
            url: u[a("0x2d")]
        }), null != r && null != r && r(a("0x4a"));
    },
    h5RawTrack: function(e, t) {
        B("h5RawTrack");
        var r = e;
        for (var n in r) n === a("0x14") ? (o(r[n]) !== a("0x35") && (r[n] = JSON.parse(r[n])), 
        r[n] = JSON[a("0x30")](r[n])) : n === a("0x31") ? S(r[n]) : "siteId" === n && I(r[n]);
        var u = r, i = getCurrentPages()[getCurrentPages()[a("0x49")] - 1];
        A[a("0x23")][a("0x40")](u, {
            url: i.__route__
        }), null != t && null != t && t("trackEvent ok");
    },
    setUserProperty: function(e, t) {
        B(a("0x4f")), d.userProperty = JSON.stringify(e), null != t && null != t && t("trackEvent ok");
    }
};

module.exports = A;
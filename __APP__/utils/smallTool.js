var e, n, o = [ "encPurePhoneNumber", "length", "test", "clearStorageInfo", "warn", "route", "userphone", "?", "options", "mobileNonce", "signatureUnionid", "(", "goPageMode", "max", "1", "concat", "getUrlStrByObj", "android", "replace", "clearWxCacheInfo", "removeStorageSync", "6.6.0", "getSystemInfoSync", "/uapi/cps-hcz-smallapp/wxLogBindSource", "keys", "0", "timestamp", "nonce", "收集用户openid和手机号失败--【2】", "openId", "stringify", "phoneNumber", "unionId", "globalData", "replaceH5param", "platform", "openid", "encPhoneNumber", "reduce" ];

e = o, n = 318, function(n) {
    for (;--n; ) e.push(e.shift());
}(++n);

var t = function(e, n) {
    return o[e -= 0];
};

function r(e, n) {
    e = e.split("."), n = n.split(".");
    for (var o = Math[t("0x7")](e.length, n.length); e[t("0x22")] < o; ) e.push(t("0x13"));
    for (;n.length < o; ) n.push("0");
    for (var r = 0; r < o; r++) {
        var a = parseInt(e[r]), i = parseInt(n[r]);
        if (a > i) return 1;
        if (a < i) return -1;
    }
    return 0;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindOpenIdAndMobileNo = function(e, n) {
    var o = {
        unionId: wx.getStorageSync("unionId"),
        openId: wx.getStorageSync(t("0x1e")),
        signature: wx.getStorageSync("signature"),
        nonce: wx.getStorageSync("nonce"),
        timestamp: wx.getStorageSync("timestamp"),
        source: t("0x8"),
        type: "2"
    };
    e.$http({
        url: e.getRequestUrl(t("0x11")),
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: o,
        isLoginInfo: !0,
        needToken: !0,
        token: n
    }).then(function(n) {
        console.log("收集用户openid和手机号接口成功", n), "1" === n.code ? e.globalData.getOpenIdAndPhone = !0 : console.warn("收集用户openid和手机号失败--【1】");
    }).catch(function() {
        console[t("0x25")](t("0x16"));
    });
}, exports.clearLoginInfo = function(e) {
    var n = [ "aopsid", "hczAccessToken", "secretToken", "secret_token", "reportId", t("0x0"), "verifyToken" ];
    s(e, n);
}, exports.clearPhone = function(e) {
    var n = [ "encPhoneNumber", t("0x21"), "mobileSignature", "mobileNonce", "mobileTimestamp", t("0x19"), "purePhoneNumber" ];
    s(e, n);
}, exports[t("0x24")] = s, exports[t("0xd")] = function(e) {
    var n = [ "openid", "openId", t("0x1a"), "timestamp", "signature", "nonce", "signatureUnionid" ];
    s(e, n);
}, exports.compareVersion = r, exports.getCacheInfo = c, exports.getPhoneCache = function() {
    return c([ t("0x1f"), "encPurePhoneNumber", "mobileSignature", t("0x3"), "mobileTimestamp" ]);
}, exports.getSystemInfo = function(e) {
    var n = e.globalData, o = n.getSystemInfo, a = n.hasDiscernModel, i = wx[t("0x10")]();
    if (o && JSON[t("0x18")](o) === JSON.stringify(i) && a) return void console.log("已识别出设备的型号，设备信息未发生变化");
    var c = {
        windowWidth: "windowWidth",
        model: "mobileType",
        windowHeight: "windowHeight",
        screenHeight: "screenHeight",
        statusBarHeight: "statusBarHeight",
        platform: "phonePlatform"
    }, s = i.statusBarHeight;
    if (Object.keys(c).forEach(function(n) {
        e.globalData[c[n]] = i[n];
    }), e.globalData.customNavHeight = (r(i.version, t("0xf")) >= 0 ? s + 43 : 0) + "px", 
    (/ios/i.test(i.system.toLowerCase()) || i.platform && i[t("0x1d")].includes("ios")) && (e.globalData.phoneOsType = 1, 
    e.globalData.phoneSystem = "ios"), (/android/i[t("0x23")](i.system.toLowerCase()) || i[t("0x1d")] && i[t("0x1d")].includes("android")) && (e.globalData.phoneOsType = 2, 
    e[t("0x1b")].phoneSystem = t("0xb"), e[t("0x1b")].hasDiscernModel = !0), !i.model) return;
    var u = i.model.toLowerCase();
    if (u && u.includes("iphone")) {
        var d = function() {
            e.globalData.isIPX = !0, e[t("0x1b")].hasDiscernModel = !0;
        }, l = function() {
            e.globalData.isIP6 = !0, e.globalData.hasDiscernModel = !0;
        };
        if (u[t("0xc")](/\s*/g, "").indexOf("iphonex") > -1) return void d();
        var p = u.match(/\d{1,2}/g);
        if (!p || 0 === p.length) return void l();
        if (u.includes("unknown") && p.some(function(e) {
            return e >= 10;
        })) return void d();
        if (p.includes("10") && !u.includes("x")) return void l();
        l();
    }
}, exports[t("0xa")] = function(e) {
    var n = e[t("0x2")], o = e.exceptionalKey, r = void 0 === o ? "" : o, a = e.oldUrl, c = void 0 === a ? "" : a, s = Object[t("0x12")](n);
    if (!n || 0 === s.length) return c;
    for (var u = decodeURIComponent(c), d = [ "undefined", "null" ], l = 0, p = s; l < p.length; l++) {
        var x = p[l];
        x !== r && "sampshare" !== x && n[x] && !d.includes(n[x]) && (u = i({
            paramKey: x,
            h5Url: c,
            paramValue: n[x]
        }));
    }
    return u;
}, exports.getWxCacheInfo = function() {
    return c([ t("0x1e"), "openId", "unionId", t("0x14"), "signature", t("0x15"), t("0x4") ]);
}, exports.goAddCarPage = function(e) {
    var n = e.params, o = void 0 === n ? {} : n, r = e[t("0x6")], a = void 0 === r ? "navigateTo" : r, i = e.success, c = void 0 === i ? function() {} : i, s = Object[t("0x12")](o).reduce(function(e, n) {
        return n && (e += "".concat(n, "=").concat(o[n], "&")), e;
    }, "");
    s && (s = "?" + s.substr(0, s.length - 1)), wx[a]({
        url: "/pages/carManager/carManager".concat(s),
        success: c
    });
}, exports.goBackHomePage = function() {
    wx.switchTab({
        url: "/pages/index/index2"
    });
}, exports.goCardDetailPage = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    wx.redirectTo({
        url: "/pages/webview/webview?pageType=cardTicketDetail&profitExternalId="[t("0x9")](e)[t("0x9")](n)
    });
}, exports.handleState = void 0, exports.isTabPage = function() {
    var e = getCurrentPages(), n = e[e.length - 1][t("0x26")];
    return -1 !== [ "pages/index/index2", "pages/insurance/insurance2", "pages/right/right2" ].indexOf(n);
}, exports[t("0x1c")] = i;

var a = {
    clearUserLoginInfo: function(e) {
        200 !== e && ([ "aopsid", "hczAccessToken", "reportId", "userphone" ].forEach(wx.removeStorageSync), 
        (114 === e || 109 === e) && [ "openid", t("0x17"), "unionId", "timestamp", "signature", t("0x15"), t("0x4") ].forEach(wx.removeStorageSync));
    }
};

function i(e) {
    var n = e.paramKey, o = void 0 === n ? "hzcModule" : n, r = e.h5Url, a = void 0 === r ? "" : r, i = e.paramValue, c = void 0 === i ? "" : i;
    if (!a) return "";
    a = decodeURIComponent(a);
    var s = new RegExp(t("0x5").concat(o, ")=[^&]*"), "g"), u = a.replace(s, "$1=".concat(c));
    if (-1 === u.indexOf(o + "=")) {
        var d = u.split("#");
        u = d[0] + (-1 === d[0].indexOf(t("0x1")) ? "?" : "&") + "".concat(o, "=").concat(c) + (d[1] ? "#".concat(d[1]) : "");
    }
    return u;
}

function c(e) {
    return e[t("0x20")](function(e, n) {
        var o = wx.getStorageSync(n);
        return o && (e[n] = o), e;
    }, {});
}

function s(e, n) {
    n.forEach(function(n) {
        e[t("0x1b")][n] = "", wx[t("0xe")](n);
    });
}

exports.handleState = a;
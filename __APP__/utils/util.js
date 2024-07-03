var t, e, n = [ "split", "jumpAuthorizePage", "options", "showModal", "getMonth", "=", "-", "showLoading", "route", "您的身份证号格式有误", "toString", "#/", "getFullYear", "floor", "?", "post", "length", "15", "indexOf", "map", "log", "请输入正确格式的车架号", "request", "&", "1", "url组装入参arguments" ];

t = n, e = 114, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var o = function(t, e) {
    return n[t -= 0];
};

function r(t) {
    return (t = t[o("0x0")]())[1] ? t : "0" + t;
}

var i = {
    Post: function(t, e, n, r, i) {
        return new Promise(function(u, a) {
            wx[o("0xc")]({
                url: t,
                data: e,
                header: {
                    "Content-Type": "application/json"
                },
                success: function(t) {
                    u(t), n && n(t);
                },
                fail: function(t) {
                    a(t), r && r(t);
                },
                complete: function(t) {
                    u(t), i && i(t);
                }
            });
        });
    },
    Get: function(t, e, n, r) {
        return new Promise(function(i, u) {
            wx[o("0xc")]({
                url: t,
                header: {
                    "Content-Type": "application/json"
                },
                success: function(t) {
                    i(t), e && e(t);
                },
                fail: function(t) {
                    u(t), n && n(t);
                },
                complete: function(t) {
                    i(t), r && r(t);
                }
            });
        });
    }
}, u = {
    checkCarFormat: function(t) {
        switch (console[o("0xa")](t), t[o("0x6")]) {
          case 8:
            return !!/^[\u4e00-\u9fa5][A-Z](?![A-HJ-NP-Z]{6})[A-HJ-NP-Z\d]{6}$/.test(t) || void wx[o("0x13")]({
                showCancel: !1,
                title: "请输入正确格式的车牌号"
            });

          default:
            return !!/^[\u4e00-\u9fa5][A-Z](?![A-HJ-NP-Z]{5})[A-HJ-NP-Z\d]{5}$/.test(t) || void wx.showModal({
                showCancel: !1,
                title: "请输入正确格式的车牌号"
            });
        }
    },
    checkframeNoFormat: function(t) {
        return !!/^[a-zA-Z0-9]{17}/.test(t) || (wx.showModal({
            showCancel: !1,
            title: o("0xb")
        }), !1);
    },
    isChinese: function(t) {
        return /^[\u4e00-\u9fa5]+$/.test(t);
    },
    checkIdCard: function(t) {
        if (t.length === o("0x7")) {
            if (!/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(t)) return wx[o("0x13")]({
                title: o("0x19"),
                showCancel: !1
            }), !1;
        } else if (!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(t)) return wx.showModal({
            title: o("0x19"),
            showCancel: !1
        }), !1;
        return !0;
    }
};

var a = {
    stringify: function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = "", n = 0, o = Object.keys(t); n < o.length; n++) {
            var r = o[n];
            e += "".concat(r, "=").concat(t[r], "&");
        }
        return e.substr(0, e.length - 1);
    },
    parse: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = t.split("&"), n = {};
        return e.forEach(function(t) {
            var e = t.split("=");
            n[e[0]] = e[1];
        }), n;
    }
};

module.exports = {
    formatTime: function(t) {
        return [ t.getFullYear(), t[o("0x14")]() + 1 ].map(r).join("-");
    },
    formatDate: function(t) {
        return [ t[o("0x2")](), t.getMonth() + 1, t.getDate() ][o("0x9")](r).join("-");
    },
    addFormatTime: function(t, e) {
        var n = new Date(t);
        return n.setDate(n.getDate() + e), [ n.getFullYear(), n.getMonth() + 1, n.getDate() ].map(r).join("-");
    },
    supplyBirth: function(t) {
        var e, n = t;
        return 15 === n[o("0x6")] && (e = "19" + n.slice(6, 8) + "-" + n.slice(8, 10) + "-" + n.slice(10, 12)), 
        18 === n.length && (e = n.slice(6, 10) + "-" + n.slice(10, 12) + o("0x16") + n.slice(12, 14)), 
        e;
    },
    supplySex: function(t) {
        var e, n = t;
        return 15 === n.length && (e = parseInt(n.slice(13)) % 2 === o("0xe") ? "M" : "F"), 
        18 === n[o("0x6")] && (e = parseInt(n.slice(16, 17)) % 2 === "1" ? "M" : "F"), e;
    },
    timeStamp: function() {
        return String(parseInt(new Date().getTime() / 1e3));
    },
    randomString: function() {
        for (var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", e = t[o("0x6")], n = "", r = 0; r < 32; r++) n += t.charAt(Math[o("0x3")](Math.random() * e));
        return n;
    },
    get_cookie: function(t) {
        var e, n, r = t + "=", i = "";
        return document.cookie.length > 0 && (-1 !== (e = document.cookie[o("0x8")](r)) && (e += r.length, 
        -1 === (n = document.cookie.indexOf(";", e)) && (n = document.cookie.length), i = unescape(document.cookie.substring(e, n)))), 
        i;
    },
    formatTimes: function(t) {
        var e = t.getFullYear(), n = t.getMonth() + 1, o = t.getDate(), i = t.getHours(), u = t.getMinutes(), a = t.getSeconds();
        return [ e, n, o ].map(r).join("-") + " " + [ i, u, a ].map(r).join(":");
    },
    validator: u,
    Ajax: i,
    goToAuth: function() {
        var t = getCurrentPages(), e = t[t.length - 1][o("0x18")], n = t[t.length - 1][o("0x12")], r = "/" + e + o("0x4");
        for (var i in n) r = r + i + o("0x15") + n[i] + "&";
        r = r.substr(0, r.length - 1), console.log("backUrl", r), getApp()[o("0x11")](encodeURIComponent(r));
    },
    _http: function(t, e) {
        var n = arguments[o("0x6")] > 2 && void 0 !== arguments[2] ? arguments[2] : o("0x5"), r = arguments[o("0x6")] > 3 && void 0 !== arguments[3] ? arguments[3] : 25e3;
        return wx[o("0x17")]({
            title: "加载中..."
        }), new Promise(function(o, i) {
            (e = e || {})["X-PA-NONCESTR"] = 1, wx.request({
                url: getApp().getRequestUrl(t),
                method: n,
                timeout: r,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: e,
                success: function(t) {
                    o(t.data);
                },
                fail: function(e) {
                    console.log(t, e), i(e);
                }
            });
        });
    },
    _mobileHttp: function(t, e) {
        var n = arguments[o("0x6")] > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.method, i = void 0 === r ? "post" : r, u = n.timeout, a = void 0 === u ? 25e3 : u, l = n.loadingTitle, c = void 0 === l ? "加载中" : l, s = n.showTitle, d = void 0 === s || s;
        return d && wx.showLoading({
            title: c
        }), new Promise(function(n, o) {
            (e = e || {})["X-PA-NONCESTR"] = 1;
            var r = {
                "Content-Type": "application/x-www-form-urlencoded",
                secret_token: wx.getStorageSync("hczAccessToken")
            };
            wx.request({
                url: getApp().getRequestUrl(t),
                method: i,
                timeout: a,
                header: r,
                data: e,
                success: function(t) {
                    n(t.data);
                },
                fail: function(e) {
                    console.log(t, e), o(e);
                }
            });
        });
    },
    getQueryStringArgs: function() {
        var t = arguments[o("0x6")] > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        console.log("url解析入参url", t);
        var e = decodeURIComponent(t);
        if (-1 !== e.indexOf(o("0x4"))) {
            var n = e.split("#/"), r = 2 === n[0].split("?").length, i = r ? n[0].split("?")[1] : n[1].split("?")[1], u = n.length > 1 ? n[1] : "";
            u = u.indexOf("?") > -1 ? u.split("?")[0] : u;
            var a = r ? n[0].split("?")[0] : n[0], l = {}, c = i.length ? i[o("0x10")](o("0xd")) : [], s = null, d = null, f = null, g = 0, h = c.length;
            for (g = 0; g < h; g++) s = c[g][o("0x10")]("="), d = decodeURIComponent(s[0]), 
            f = decodeURIComponent(s[1]), d.length && (l[d] = f);
            return {
                path: a,
                hash: u,
                args: l,
                isFront: r
            };
        }
    },
    toQueryString: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        console.log(o("0xf"), arguments);
        var i = "?";
        for (var u in t) t[u] && (i += u + o("0x15") + t[u] + "&");
        i = i.substring(0, i[o("0x6")] - 1), n && (n = o("0x1") + n);
        var a = r ? e + i + n : e + n + i;
        return console.log("url组装retutn url", a), a;
    },
    qs: a
};
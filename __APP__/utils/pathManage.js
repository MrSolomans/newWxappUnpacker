var e, r, a = [ "warn", "__esModule", "indexOf", "length", "switchTab", "goNextPage方法跳转失败", "find", "home", "use strict" ];

e = a, r = 120, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var t = function(e, r) {
    return a[e -= 0];
};

t("0x5"), Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.goNextPage = function(e, r) {
    var a = s(e), u = a.path, c = a.type, o = r || c;
    return "switchTab" === c && (o = c), n[o]({
        url: u
    }).catch(function(e) {
        console[t("0x6")](t("0x2"), e), n.switchTab({
            url: i.home
        });
    });
}, exports.mainPagesUrl = void 0, exports.replaceOldUrl = s;

var n = (0, function(e) {
    return e && e[t("0x7")] ? e : {
        default: e
    };
}(require("./proxyWX.js")).default)(), i = Object.freeze({
    home: "/pages/index/index2",
    insurance: "/pages/insurance/insurance2",
    mine: "/pages/right/right2",
    productDetail: "/pages/insuranceMore/detail/detail"
});

function s(e) {
    var r = arguments[t("0x0")] > 1 && void 0 !== arguments[1] ? arguments[1] : "navigateTo", a = i[t("0x4")], n = a;
    if (!e) return {
        path: n,
        type: "switchTab"
    };
    var s = {
        "pages/index/index2": a,
        "pages/insurance/insurance": i.insurance,
        "pages/right/right1": i.mine,
        "pages/insurance/": "/pages/insuranceMore/",
        "pages/right/": "/pages/rightMore/"
    };
    e = e.replace(/^\//, "");
    var u = Object.keys(s)[t("0x3")](function(a) {
        var n = -1 !== e[t("0x8")](a), i = a === e;
        return r = i ? t("0x1") : "navigateTo", n || i;
    });
    return u && s[u] ? {
        path: n = e.replace(u, s[u]),
        type: r
    } : {
        path: "/" + e,
        type: r
    };
}

exports.mainPagesUrl = i;
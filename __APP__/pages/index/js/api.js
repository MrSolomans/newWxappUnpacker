var e, r, n = [ "/common/checkNewUser", "/indexPage/serDiscounts" ];

e = n, r = 152, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var t = function(e, r) {
    return n[e -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.apiUrlConfig = void 0, exports.getApiUrl = function(e) {
    return a.getRequestUrl("/uapi/cps-hcz-smallapp".concat(i[e]));
};

var a = getApp();

var i = {
    getBindCarInfo: "/my/carOwnerWelfarePage/queryBindCarAndInsure",
    getSerDiscounts: t("0x1"),
    getHczGuarantee: "/indexPage/hczGuarantee",
    getHczInformation: "/indexPage/hczInformation",
    getVideo: "/find/carcircle/video/getRecommendVideo",
    getGasOrChargePrice: "/indexPage/gasOrChargePrice",
    checkNewUser: t("0x0")
};

exports.apiUrlConfig = i;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../@babel/runtime/helpers/objectSpread2"), t = Object.freeze({
    BASE_HOST: "https://test-hcz-member.pingan.com.cn",
    SRC_HOST: "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images",
    EIM_MINI: "https://eim-minipro-stg.ocft.com",
    HCZ_MEMBER_MONITOR: "https://test-hcz-member.pingan.com.cn"
}), c = Object.freeze({
    BASE_HOST: "https://u.pingan.com",
    SRC_HOST: "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images",
    EIM_MINI: "https://eim-minpro.pingan.com.cn",
    HCZ_MEMBER_MONITOR: "https://test-hcz-member.pingan.com.cn"
}), i = Object.freeze({
    isDev: t,
    isProd: c
}), o = wx.getAccountInfoSync().miniProgram.envVersion;

exports.default = {
    env: "isDev",
    getApi: function() {
        var t = e({}, i[this.env]), c = t.BASE_HOST, n = t.EIM_MINI, a = t.SRC_HOST, s = t.HCZ_MEMBER_MONITOR;
        return {
            BASE_HOST: c,
            EIM_MINI: n,
            SRC_HOST: a,
            SUBSCRIBE: "".concat(c, "/uapi/wechat/xcxSubscribe/subscribe"),
            SUBSCRIBE_CONFIG: "".concat(c, "/uapi/carservices/parameterConfig/getParameterByKey"),
            CHECK: "".concat(c, "/uapi/micro-cps-mrum/ms/api/sso/v1/verifyToken"),
            LOGIN: "".concat(c, "/uapi/micro-cps-mrum/ms/api/sso/v1/xcx/loginByMobile"),
            UPLOADCOMPOENTITEM: "".concat(s, "/micro-api/base/monitor/uploadComponentItem"),
            UPLOADCOMPOENTALL: "".concat(s, "/micro-api/base/monitor/uploadComponent"),
            CITIES: "".concat(c, "/uapi/cps-hcz-smallapp/common/base/area/getAllCities"),
            ENVVERSION: o
        };
    }
};
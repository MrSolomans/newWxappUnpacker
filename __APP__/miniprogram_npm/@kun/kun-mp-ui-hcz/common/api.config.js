Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../@babel/runtime/helpers/objectSpread2"), t = Object.freeze({
    BASE_HOST: "https://test-hcz-member.pingan.com.cn/micro-api",
    SRC_HOST: "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images",
    EIM_MINI: "https://eim-minipro-stg.ocft.com",
    HCZ_HOST: "https://test-hcz-member.pingan.com.cn/micro-api"
}), c = Object.freeze({
    BASE_HOST: "https://u.pingan.com",
    SRC_HOST: "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images",
    EIM_MINI: "https://eim-minpro.pingan.com.cn",
    HCZ_HOST: "https://hcz-member.pingan.com.cn/micro-api"
}), i = wx.getAccountInfoSync().miniProgram.envVersion, n = Object.freeze({
    isDev: t,
    isProd: c
});

exports.default = {
    env: "isDev",
    getApi: function() {
        var t = e({}, n[this.env]), c = t.BASE_HOST, a = t.EIM_MINI, r = t.SRC_HOST, o = t.HCZ_HOST;
        return {
            BASE_HOST: c,
            EIM_MINI: a,
            SRC_HOST: r,
            HCZ_HOST: o,
            SUBSCRIBE: "".concat(c, "/uapi/wechat/mqInfo/subSendV3"),
            SUBSCRIBE_CONFIG: "".concat(c, "/uapi/cps-hcz-smallapp/parameterConfig/getParameterByKey"),
            CHECK: "".concat(o, "/login/third-party/v1/xcx/verifyToken"),
            LOGIN: "".concat(o, "/login/third-party/v1/xcx/loginByMobile"),
            CITIES: "".concat(c, "/uapi/cps-hcz-smallapp/common/base/area/getAllCities"),
            ENVVERSION: i
        };
    }
};
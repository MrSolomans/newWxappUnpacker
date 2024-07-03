var c, n, i = [ "dmzstg2.pa18.com", "icore-ucms.pingan.com.cn", "icore-pts-mobile.pingan.com.cn", "member.pingan.com.cn", "stg-icore-pap.pingan.com.cn", "padn-access.pa18.com", "icore-pap.pingan.com.cn", "environment", "mina-promotion.pingan.com", "prop", "https://", "globalData", "test-hcz-member.pingan.com.cn/micro-api", "length" ];

c = i, n = 384, function(n) {
    for (;--n; ) c.push(c.shift());
}(++n);

var a = function(c, n) {
    return i[c -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var o = {
    dev: {
        member: "test-member.pingan.com.cn",
        4008: "test-www.4008000000.com",
        eimPingan: "eim.pingan.com.cn",
        eimMinpro: "eim-minipro-stg.ocft.com:9443",
        dmzstg2: a("0x8"),
        icorepap: a("0xc"),
        datatist: "test1-ant.pingan.com.cn",
        insure: "test-hcz-member.pingan.com.cn",
        hczStatic: "test-hcz-static.pingan.com.cn",
        static: a("0x6"),
        hczStatic1443: "test-hcz-static.pingan.com.cn:1443",
        paHaoChe: "plugin.pahaoche.com",
        mpas: "icore-pfcs-stg1.pingan.com.cn:10713",
        claim: "test3-claim-service.pingan.com.cn",
        hczhd: "test-hcz-member.pingan.com.cn/micro-api",
        padn: "test-padn-access.pingan.com.cn:3080",
        zhiniao: "test1.zhi-niao.com:10516",
        activityImgUrl: "test-aopsmsg.pingan.com.cn:8020",
        ytestHczhd: "ytest1-icore-hczhd.pingan.com.cn:36443/micro-api",
        promotion: "mina-promotion-stg1.pingan.com/mina-promo",
        carShow: "icore-pts-mobile-test1.pingan.com.cn",
        claimNew: "test-claim-service.pingan.com.cn",
        default: "test-hcz-member.pingan.com.cn",
        feedback: "test-aopsmsg.pingan.com.cn:8020",
        groupBuyImg: "hcz-vass-img-test.pingan.com.cn:2443/vassClient/file/fileDownload/",
        icoreUcms: "test1-icore-ucms.pingan.com.cn",
        palite: "palite-stg.pingan.com.cn:7080"
    },
    prop: {
        member: a("0xb"),
        4008: "www.4008000000.com",
        eimPingan: "eim.pingan.com.cn",
        eimMinpro: "eim-minpro.pingan.com.cn",
        icorepap: a("0x0"),
        datatist: "ant.pingan.com.cn",
        insure: "hcz-member.pingan.com.cn",
        hczStatic: "hcz-static.pingan.com.cn",
        static: "hcz-member.pingan.com.cn/micro-api",
        hczStatic1443: "hcz-static.pingan.com.cn",
        paHaoChe: "plugin.pahaoche.com",
        mpas: "policycenter.pingan.com.cn",
        claim: "claim-service.pingan.com.cn",
        hczhd: "hcz-member.pingan.com.cn/micro-api",
        padn: a("0xd"),
        zhiniao: "www.zhi-niao.com",
        activityImgUrl: "aopsmsg.pingan.com.cn",
        ytestHczhd: "icore-hczhd.pingan.com.cn/micro-api",
        promotion: a("0x2"),
        carShow: a("0xa"),
        claimNew: "claim-service.pingan.com.cn",
        default: "u.pingan.com",
        feedback: "icore-aopsmsg.pingan.com.cn:443",
        groupBuyImg: "hcz-vass-img.pingan.com.cn/vassClient/file/fileDownload/",
        icoreUcms: a("0x9"),
        palite: "palite.pingan.com.cn"
    }
}, e = {
    getRequestUrl: function() {
        var c = arguments[a("0x7")] > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, i = 0 === this[a("0x5")][a("0x1")] ? "dev" : a("0x3"), e = o[i][n] || o[i].default;
        return a("0x4") + e + c;
    }
};

exports.default = e;
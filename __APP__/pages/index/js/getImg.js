var e, n, a = [ "https://u.pingan.com/upingan/upingan/minisw/images/version2/paking-service-190116.png", "avatar.png", "arrow-right.png", "icon-knowledge.png", "setImg", "change_car_icon.png", "homePage", "icon-family-member.png", "mine" ];

e = a, n = 259, function(n) {
    for (;--n; ) e.push(e.shift());
}(++n);

var g = function(e, n) {
    return a[e -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports[g("0x6")] = exports.img = exports.getImg = void 0;

var o = getApp(), i = function(e, n) {
    return o.getRequestUrl("/cps/hcz-miniprogram/images/".concat(e, "/").concat(n), "hczStatic");
};

exports.getImg = i;

var r = {
    data: {
        avatarImg: i("mine", g("0x3")),
        homeTopBg: i("homePage", "home-bg.png"),
        changeCarIcon: i("homePage", g("0x7")),
        carOriginalIcon: i(g("0x8"), "icon-car-original.png"),
        healthAssessmentIcon: i("homePage", "icon-health-assessment.png"),
        kingKongMoreIcon: i("home", "serviceMore.png"),
        insuranceIcon: i("homePage", "icon-insurance.png"),
        knowledgeIcon: i(g("0x8"), g("0x5")),
        playIcon: i(g("0x8"), "icon-play.png"),
        baseCarLogo: i(g("0x1"), "baseCarLogo.png"),
        arrowRight: i("homePage", g("0x4")),
        securityIcon: i("homePage", "icon-security.png"),
        addFamilyIcon: i("homePage", "icon-add-family.png"),
        familyIcon: i(g("0x8"), "icon-family.png"),
        navigationIcon: i("homePage", "icon-navigation.png"),
        insureTopBg: i(g("0x8"), "insure-top-bg.png"),
        healthImg: i("homePage", "health-img.png"),
        insuranceClassImg: i(g("0x8"), "insurance-class-img.png"),
        familyInsureIcon: i("homePage", "icon-family-insure.png"),
        familyMemberIcon: i("homePage", g("0x0")),
        iconServiceTitle: i("homePage", "icon-service-title.png"),
        newUserActImg: i("homePage", "new-user-act.png"),
        defaultGasBg: i("homePage", "default-gas-bg.png"),
        defaultParkBg: i("homePage", "default-park-bg.png"),
        defaultCarWashBg: i("homePage", "default-car-wash-bg.png"),
        arrowRightIcon: i("homePage", "icon-arrow-right.png"),
        defaultChargeBg: i("homePage", "default_charge_bg.png"),
        tempImg: g("0x2")
    }
};

exports.setImg = r;

var c = Behavior(r);

exports.img = c;
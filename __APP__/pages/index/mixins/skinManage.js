var e, t, n = require("../../../@babel/runtime/helpers/regeneratorRuntime"), r = [ "next", "skinManageMixins", "length", "skinManage" ];

e = r, t = 461, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var o = function(e, t) {
    return r[e -= 0];
};

function a(e, t, n, r, o, a, i) {
    try {
        var s = e[a](i), c = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void n(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(r, o);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.skinManageMixins = exports[o("0x2")] = void 0;

var i = getApp(), s = {
    data: {
        skinObj: {
            bannerTopBg: "",
            residentActTopBg: "",
            residentActBottomBg: "",
            navScrollBgColor: ""
        }
    },
    methods: {
        getSkinConfig: function() {
            var e = this;
            return function(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function s(e) {
                            a(i, r, o, s, c, "next", e);
                        }
                        function c(e) {
                            a(i, r, o, s, c, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }(n().mark(function t() {
                var r, a, s, c, g, u, l, p, d;
                return n().wrap(function(t) {
                    for (;;) switch (t.prev = t[o("0x3")]) {
                      case 0:
                        return t.next = 2, i.$http({
                            url: i.getRequestUrl("/uapi/cps-hcz-smallapp/collocateConfig/list"),
                            data: {
                                source: "main_homeSkin"
                            },
                            needToken: !0
                        });

                      case 2:
                        r = t.sent, a = r.code, s = r.data, 0 === a && s && s[o("0x1")] > 0 ? (c = s[0].keyValue || {}, 
                        g = c.bannerTopBg, u = c.residentActTopBg, l = c.residentActBottomBg, p = c.bgColor, 
                        d = p ? "linear-gradient(to top right, ".concat(p, ",").concat(p, ")") : "linear-gradient(to top right, rgba(255, 183, 58, 1),rgba(247, 118, 33, 1))", 
                        e.setData({
                            skinObj: {
                                bannerTopBg: g,
                                residentActTopBg: u,
                                residentActBottomBg: l,
                                navScrollBgColor: d
                            }
                        })) : e.setData({
                            "skinObj.navScrollBgColor": "linear-gradient(to top right, rgba(255, 183, 58, 1),rgba(247, 118, 33, 1))"
                        });

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        }
    }
};

exports[o("0x0")] = s;

var c = Behavior(s);

exports.skinManage = c;
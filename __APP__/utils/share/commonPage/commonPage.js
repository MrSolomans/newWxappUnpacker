var e, t, o = require("../../../@babel/runtime/helpers/regeneratorRuntime"), n = [ "goNext", "stop", "next", "scene", "data", "targetUrl", "wrap", "defineProperty" ];

e = n, t = 371, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var r = function(e, t) {
    return n[e -= 0];
};

Object[r("0x4")](exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var a = require("../../smallTool.js");

function i(e, t, o, n, r, a, i) {
    try {
        var s = e[a](i), u = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void o(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(n, r);
}

var s = getApp(), u = {
    onLoad: function(e) {
        this.data.options = e;
        var t = getCurrentPages();
        "pages/privacyAuthorization/privacyAuthorization" == t[0].route && t.shift(), this.data[r("0x5")] = 1 === t.length, 
        console.log("this.data.goNext:", t), console.log("this.data.goNext:", this.data.goNext);
    },
    onShow: function() {
        var e = this;
        return function(e) {
            return function() {
                var t = this, o = arguments;
                return new Promise(function(n, a) {
                    var s = e.apply(t, o);
                    function u(e) {
                        i(s, n, a, u, c, r("0x7"), e);
                    }
                    function c(e) {
                        i(s, n, a, u, c, "throw", e);
                    }
                    u(void 0);
                });
            };
        }(o().mark(function t() {
            var n, i, u, c, l;
            return o()[r("0x3")](function(t) {
                for (;;) switch (t.prev = t[r("0x7")]) {
                  case 0:
                    if (n = e[r("0x1")], i = n[r("0x5")], u = n.options, c = "", !i) {
                        t.next = 16;
                        break;
                    }
                    if (!u || !u[r("0x0")]) {
                        t[r("0x7")] = 11;
                        break;
                    }
                    return t.next = 6, s.getOriginValue(u.scene);

                  case 6:
                    l = t.sent, console.log("解悉太阳码得到的结果：", l), l && (c = decodeURIComponent(l)), t[r("0x7")] = 12;
                    break;

                  case 11:
                    c = (0, a.getUrlStrByObj)({
                        options: u,
                        exceptionalKey: r("0x2"),
                        oldUrl: u[r("0x2")]
                    });

                  case 12:
                    console.log("即将跳转的页面:", c), wx.navigateTo({
                        url: c,
                        success: function() {
                            e[r("0x1")].goNext = !1;
                        },
                        fail: function(e) {
                            console.log("跳转失败:", e);
                        }
                    }), t.next = 17;
                    break;

                  case 16:
                    wx.switchTab({
                        url: "/pages/index/index2"
                    });

                  case 17:
                  case "end":
                    return t[r("0x6")]();
                }
            }, t);
        }))();
    }
};

exports.default = u;
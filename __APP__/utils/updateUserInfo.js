var e, r, t = require("../@babel/runtime/helpers/regeneratorRuntime"), n = require("../@babel/runtime/helpers/typeof"), o = [ "mark", "silenceGetUserDefaultInfo", "isNeedUpdateInfo", "getOwnPropertyDescriptors", "getOwnPropertyDescriptor", "length", "defineProperties", "return", "好车主用户", "throw", "resolve", "now", "userInfo", "desc", "function", "getStorageSync", "处理用户拒绝授权或者获取信息失败或者getUserProfile不存在的情况：", "indexOf" ];

e = o, r = 388, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var i = function(e, r) {
    return o[e -= 0];
};

function a(e) {
    return (a = i("0x4") == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && "symbol" == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
    })(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    return O.apply(this, arguments);
}, exports.defaultUserInfo = void 0, exports.isGoAuthorize = function() {
    if (w()) return getApp().justGoAuthorize(null, "authorize"), !0;
}, exports[i("0xa")] = w, exports[i("0x9")] = function() {
    var e = wx.getStorageSync("userInfo");
    return e || h();
};

var u = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./proxyWX")), c = [ "nickName", "avatarUrl" ];

function f(e, r, t, n, o, i, a) {
    try {
        var u = e[i](a), c = u.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void t(e);
    }
    u.done ? r(c) : Promise.resolve(c).then(n, o);
}

function s(e) {
    return function() {
        var r = this, t = arguments;
        return new Promise(function(n, o) {
            var a = e.apply(r, t);
            function u(e) {
                f(a, n, o, u, c, "next", e);
            }
            function c(e) {
                f(a, n, o, u, c, i("0x11"), e);
            }
            u(void 0);
        });
    };
}

function l(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
    }
    return t;
}

function p(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? l(Object(t), !0).forEach(function(r) {
            v(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object[i("0xe")](e, Object[i("0xb")](t)) : l(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object[i("0xc")](t, r));
        });
    }
    return e;
}

function v(e, r, t) {
    return (r = function(e) {
        var r = function(e, r) {
            if ("object" != a(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t.call(e, r || "default");
                if ("object" != a(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(e);
        }(e, "string");
        return "symbol" == a(r) ? r : r + "";
    }(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var b = "zh_CN", y = (0, u.default)(), x = y.getUserInfo, d = y.getUserProfile, m = function() {
    var e = getApp();
    return {
        nickName: i("0x10"),
        avatarUrl: e.getRequestUrl("/cps/hcz-miniprogram/images/mine/avatar.png", "hczStatic")
    };
};

function g(e) {
    var r = e.userInfo, t = (r = void 0 === r ? m() : r).nickName, n = void 0 === t ? m().nickName : t, o = r.avatarUrl, a = void 0 === o ? m().avatarUrl : o, u = function(e, r) {
        if (null == e) return {};
        var t, n, o = function(e, r) {
            if (null == e) return {};
            var t = {};
            for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
                if (r.indexOf(n) >= 0) continue;
                t[n] = e[n];
            }
            return t;
        }(e, r);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++) t = a[n], r[i("0x7")](t) >= 0 || {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
        }
        return o;
    }(r, c), f = p({
        nickName: n,
        avatarUrl: a
    }, u);
    return console.log("处理获取到用户头像昵称的情况", f), ("微信用户" === f.nickName || "好车主用户" === f.nickName) && wx.setStorageSync(i("0x2"), p(p({}, f), {}, {
        avatarUrl: m().avatarUrl
    })), wx.setStorageSync("headPortrait", f.avatarUrl), f;
}

function h(e) {
    var r = wx[i("0x5")]("userInfo");
    return r ? Promise[i("0x0")](r) : (console.warn(i("0x6"), e), x({
        lang: b,
        desc: "更新头像昵称需要您的授权"
    }).then(g, g));
}

function O() {
    return (O = s(t()[i("0x8")](function e() {
        var r, n, o, a, u, c = arguments;
        return t().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = c[i("0xd")] > 0 && void 0 !== c[0] ? c[0] : {
                    desc: "更新头像昵称需要您的授权",
                    needCache: !0
                }, n = r[i("0x3")], o = void 0 === n ? "更新头像昵称需要您的授权" : n, a = r.needCache, u = void 0 === a || a, 
                d && "function" == typeof d) {
                    e.next = 3;
                    break;
                }
                return e.abrupt(i("0xf"), h());

              case 3:
                if (!w() && u) {
                    e.next = 6;
                    break;
                }
                return wx.setStorageSync("userInfoOldDate", Date[i("0x1")]()), e.abrupt(i("0xf"), d({
                    desc: o,
                    lang: b
                }).then(g, h));

              case 6:
                return e.abrupt("return", Promise.resolve(wx[i("0x5")]("userInfo")));

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function w() {
    var e = Date.now(), r = wx[i("0x5")]("userInfoOldDate"), t = wx.getStorageSync("userInfo");
    if (!r || e - r > 18e5 || !t) return !0;
}

exports.defaultUserInfo = m;
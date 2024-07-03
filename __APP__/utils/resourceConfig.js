var e, r, t = require("../@babel/runtime/helpers/regeneratorRuntime"), n = require("../@babel/runtime/helpers/typeof"), o = [ "push", "$http", "city", "getLocationInfo", "next", "t0", "return", "length", "getOwnPropertyDescriptor", "default", "abrupt", "/uapi/cps-hcz-smallapp/collocateConfig/list", "object" ];

e = o, r = 389, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var i = function(e, r) {
    return o[e -= 0];
};

function u(e) {
    return (u = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
    })(e);
}

function c(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t[i("0x1")].apply(t, n);
    }
    return t;
}

function a(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? c(Object(t), !0).forEach(function(r) {
            s(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object[i("0x9")](t, r));
        });
    }
    return e;
}

function s(e, r, t) {
    return (r = function(e) {
        var r = function(e, r) {
            if ("object" != u(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t.call(e, r || i("0xa"));
                if (i("0x0") != u(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(e);
        }(e, "string");
        return "symbol" == u(r) ? r : r + "";
    }(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function f(e, r, t, n, o, i, u) {
    try {
        var c = e[i](u), a = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void t(e);
    }
    c.done ? r(a) : Promise.resolve(a).then(n, o);
}

function p(e) {
    return function() {
        var r = this, t = arguments;
        return new Promise(function(n, o) {
            var i = e.apply(r, t);
            function u(e) {
                f(i, n, o, u, c, "next", e);
            }
            function c(e) {
                f(i, n, o, u, c, "throw", e);
            }
            u(void 0);
        });
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    return y.apply(this, arguments);
}, exports.getShareTimelineInfo = function(e) {
    return v.apply(this, arguments);
};

var l = getApp(), b = l.getRequestUrl(i("0xc"));

function y() {
    return (y = p(t().mark(function e() {
        var r, n, o, u, c, s, f = arguments;
        return t().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = f[i("0x8")] > 0 && void 0 !== f[0] ? f[0] : [], n = f[i("0x8")] > 1 && void 0 !== f[1] ? f[1] : "", 
                o = {
                    source: "resourcesPos",
                    secondSources: r
                }, r && 0 !== r[i("0x8")]) {
                    e.next = 5;
                    break;
                }
                return e.abrupt("return", Promise.resolve(!1));

              case 5:
                if (!n) {
                    e[i("0x5")] = 9;
                    break;
                }
                o.city = n, e.next = 16;
                break;

              case 9:
                return e[i("0x5")] = 11, l[i("0x4")]("city");

              case 11:
                u = e.sent, c = u[i("0x3")], s = (s = void 0 === c ? "北京" : c).split("市")[0], o.city = s;

              case 16:
                return e.abrupt(i("0x7"), l[i("0x2")]({
                    url: b,
                    params: o,
                    needToken: !0
                }).then(function(e) {
                    var r = e.code, t = e.data;
                    return !(0 !== r || !t) && a(a({}, t), {}, {
                        cityName: o.city
                    });
                }));

              case 17:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function v() {
    return (v = p(t().mark(function e(r) {
        var n, o, u;
        return t().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = a({
                    source: "other_shareTimeline"
                }, r), e.next = 3, l.queryPageInfo(n);

              case 3:
                if (e[i("0x6")] = e.sent, e.t0) {
                    e[i("0x5")] = 6;
                    break;
                }
                e.t0 = {};

              case 6:
                return o = e.t0, u = o.temporaryData, e[i("0xb")]("return", u);

              case 9:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}
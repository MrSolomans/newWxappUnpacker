var e, t, r = require("../../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../../@babel/runtime/helpers/typeof"), a = [ "concat", "&source=xcx_sy2021", "data", "healthAppraisal", "function", "name", "freeInsure", "点击家庭风险检测", "点击健康测评", "Arguments", "find", "wrap", "defineProperty", "title", "getOwnPropertySymbols", "健康险最受欢迎榜", "compareSort", "prev", "userConfig", "stop", "push", "hczGuarantee", "defineProperties", "moduleConfig", "item", "indexOf", "prototype", "products", "exFamilyProduct", "车主有保障配置 ======>", "length", "symbol", "done", "@@iterator", "/pages/webview/webview?pageType=familyReport&source=xcx_sy2021", "Object", "jumpFun" ];

e = a, t = 146, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var o = function(e, t) {
    return a[e -= 0];
};

function i(e) {
    return (i = o("0x6") == ("undefined" == typeof Symbol ? "undefined" : n(Symbol)) && "symbol" == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol[o("0x1c")] ? o("0x21") : n(e);
    })(e);
}

function u(e, t) {
    var r = Object.keys(e);
    if (Object[o("0x10")]) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r[o("0x16")].apply(r, n);
    }
    return r;
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(r), !0).forEach(function(t) {
            s(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object[o("0x18")](e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function s(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != i(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != i(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == i(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function l(e) {
    return function(e) {
        if (Array.isArray(e)) return f(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e[o("0x23")]) return Array.from(e);
    }(e) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return f(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return o("0x0") === r && e.constructor && (r = e.constructor[o("0x7")]), "Map" === r || "Set" === r ? Array.from(e) : o("0xb") === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0;
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function f(e, t) {
    (null == t || t > e.length) && (t = e[o("0x20")]);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}

function p(e, t, r, n, a, i, u) {
    try {
        var c = e[i](u), s = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void r(e);
    }
    c[o("0x22")] ? t(s) : Promise.resolve(s).then(n, a);
}

function d(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, a) {
            var o = e.apply(t, r);
            function i(e) {
                p(o, n, a, i, u, "next", e);
            }
            function u(e) {
                p(o, n, a, i, u, "throw", e);
            }
            i(void 0);
        });
    };
}

Object[o("0xe")](exports, "__esModule", {
    value: !0
}), exports.hczGuaranteeMixins = exports.hczGuarantee = void 0;

var x = getApp(), y = {
    data: {
        hczGuarantee: {
            title: "",
            secondTitle: "",
            status: !1
        },
        noFreeInsure: {
            config: {},
            data: []
        },
        freeInsure: [],
        insureIndex: 0,
        healthAppraisal: {},
        familyGuarantee: {},
        exFamilyProduct: {},
        rankObj: {
            A: "最受年轻人喜爱榜",
            B: o("0x11"),
            C: "车主最爱选购榜"
        }
    },
    methods: {
        getHczGuarantee: function(e) {
            var t = this;
            return d(r().mark(function n() {
                var a, i, u, s, f, p, d, y, m, v, b, h, g, w, j, O, P, I, S, A, F, T, z, G, k, _, C, D, U;
                return r()[o("0xd")](function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, x.$http({
                            url: t.getApiUrl("getHczGuarantee"),
                            data: {
                                source: "main_hczGuarantee",
                                city: e
                            },
                            needToken: !0
                        });

                      case 2:
                        a = r.sent, i = a.code, u = a[o("0x4")], console.warn(o("0x1f"), u), (s = 0 === i && u && Object.keys(u).length > 0) && (f = [], 
                        p = {}, d = {}, y = u[o("0x19")], m = void 0 === y ? {} : y, v = u[o("0x14")], b = void 0 === v ? {} : v, 
                        h = u[o("0x1d")], g = void 0 === h ? [] : h, w = u.familyGuarantee, j = void 0 === w ? {} : w, 
                        O = u[o("0x5")], P = void 0 === O ? {} : O, I = u.exFamilyProduct, S = void 0 === I ? {} : I, 
                        A = (b || {}).viewType, T = (F = m || {})[o("0xf")], z = F.secondTitle, g && g.length > 0 && ("1" === A ? (k = (null === (G = g[1]) || void 0 === G ? void 0 : G.data) || [], 
                        _ = g[0], C = _.data, D = void 0 === C ? [] : C, U = _.config, p = {
                            data: [][o("0x2")](l(k), l(D)),
                            config: U
                        }) : "0" === A && (f = g.map(function(e) {
                            return c(c({}, e.config), e.data);
                        })).sort(t[o("0x12")]("sort")), d = S || (g[0].data[0] || g[0].data)), t.setData({
                            freeInsure: f,
                            noFreeInsure: p,
                            exFamilyProduct: d,
                            healthAppraisal: P,
                            familyGuarantee: j,
                            hczGuarantee: {
                                title: T,
                                secondTitle: z,
                                status: s
                            },
                            insureIndex: 0
                        }));

                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, n);
            }))();
        },
        changeInsureIndex: function(e) {
            var t = e.detail, r = t.current, n = t.source, a = this.data, i = a[o("0x8")], u = a.trackArr, c = i[o("0xc")](function(e, t) {
                return r === t;
            }).track;
            ("autoplay" === n || "touch" === n) && (this.setData({
                insureIndex: r
            }), c && -1 === u[o("0x1b")](c) && (this.data.trackArr[o("0x16")](c), this.setTrack(c, {
                source: this.data.source
            })));
        },
        entryInsureDetail: function(e) {
            var t = e.currentTarget.dataset[o("0x1a")], r = t.url, n = t.productName;
            this.jumpFun("/pages/insuranceMore/detail/detail?productUrl="[o("0x2")](encodeURIComponent(r), o("0x3")), "点击非车险", {
                productname: n
            });
        },
        entryFamilyProduct: function() {
            var e = this;
            return d(r().mark(function t() {
                var n, a, i;
                return r().wrap(function(t) {
                    for (;;) switch (t[o("0x13")] = t.next) {
                      case 0:
                        n = e.data[o("0x1e")], a = n.url, i = n.productName, e[o("0x1")]("/pages/insuranceMore/detail/detail?productUrl="[o("0x2")](encodeURIComponent(a), "&source=xcx_sy2021"), "点击家庭保障推荐产品", {
                            productname: i
                        });

                      case 2:
                      case "end":
                        return t[o("0x15")]();
                    }
                }, t);
            }))();
        },
        addFamily: function() {
            this[o("0x1")]("/pages/webview/webview?pageType=myFamily&source=xcx_sy2021", "点击家庭保障添加家人");
        },
        goInsuranceClass: function() {
            this.jumpFun("/pages/webview/webview?pageType=insuranceClass&source=xcx_sy2021", "点击保险小课堂");
        },
        goQuizDetail: function() {
            this.jumpFun(o("0x24"), "点击家庭风险报告");
        },
        goFamilyQuiz: function() {
            var e = this.data.isNewUser;
            this.jumpFun("/pages/webview/webview?pageType=familyQuiz&source=xcx_sy2021", o(e ? "0xa" : "0x9"));
        }
    }
};

exports.hczGuaranteeMixins = y;

var m = Behavior(y);

exports[o("0x17")] = m;
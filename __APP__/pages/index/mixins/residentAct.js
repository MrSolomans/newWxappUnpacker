var e, t, r = require("../../../@babel/runtime/helpers/typeof"), n = [ "title", "trackObj", "enumerable", "url", "call", "/pages/webview/webview?pageType=", "includes", "bulletType", "点击常设活动左侧", "warn", "7", "data", "/pages/webview/webview?pageType=appArticle&", "getQueryObj", "prototype", "split", "use strict", "concat", "touch", "residentAct", "setResidentAct", "/pages/freeInsurance/ensureEntryWeb/ensureEntryWeb", "function", "__esModule", "?", "isNewUser", "keys" ];

e = n, t = 202, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var i = function(e, t) {
    return n[e -= 0];
};

i("0x3"), Object.defineProperty(exports, i("0xa"), {
    value: !0
}), exports.residentActMixins = exports.residentAct = void 0;

var o = function(e) {
    return e && e[i("0xa")] ? e : {
        default: e
    };
}(require("../../../utils/handleString"));

function c(e) {
    return (c = i("0x9") == ("undefined" == typeof Symbol ? "undefined" : r(Symbol)) && "symbol" == r(Symbol.iterator) ? function(e) {
        return r(e);
    } : function(e) {
        return e && i("0x9") == ("undefined" == typeof Symbol ? "undefined" : r(Symbol)) && e.constructor === Symbol && e !== Symbol[i("0x1")] ? "symbol" : r(e);
    })(e);
}

function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t)[i("0x10")];
        })), r.push.apply(r, n);
    }
    return r;
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(r), !0).forEach(function(t) {
            s(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function s(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != c(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r[i("0x12")](e, t || "default");
                if ("object" != c(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == c(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var d = {
    data: {
        residentAct: {
            leftList: [],
            rightList: [],
            index: 0,
            trackObj: {}
        }
    },
    methods: {
        currentHandleIndex: function(e) {
            var t = this, r = e.detail, n = r.current, o = r.source, c = this.data.residentAct, a = c.leftList, u = c[i("0xf")];
            a.find(function(e, r) {
                if (r === n && !u[r]) {
                    var o = e.executionId, c = void 0 === o ? "" : o, a = e.title, s = void 0 === a ? "" : a;
                    t.setTrack("曝光常设活动左侧", {
                        bannerName: s,
                        execution_id: c
                    }), t[i("0x19")][i("0x6")][i("0xf")][r] = !0;
                }
            }), ("autoplay" === o || o === i("0x5")) && this.setData({
                "residentAct.index": n
            });
        },
        goPermanentAct: function(e) {
            var t = (e = e.detail && e.detail.currentTarget ? e.detail : e).currentTarget.dataset.item, r = t.url, n = t.title, o = void 0 === n ? "" : n, c = t.executionId, a = void 0 === c ? "" : c, u = r;
            u && !this.data.loginStatus && (u.includes("/pages/freeStruggle/ensureEntryWeb/ensureEntryWeb") ? u = "/pages/freeStruggle/ensureHome/ensureHome" : u[i("0x14")](i("0x8")) && (u = "/pages/freeInsurance/ensureHome/ensureHome")), 
            this.jumpFun(u, i("0x16"), {
                bannerName: o,
                execution_id: a
            });
        },
        goToCommonActivity: function(e) {
            var t = e.currentTarget.dataset.item, r = t.url, n = t[i("0xe")];
            this.jumpFun(r, "点击常设活动右侧", {
                activeName: n
            });
        },
        changeResidentAct: function(e) {
            if (0 !== e.length) {
                var t = e.map(function(e) {
                    var t = e.linkType, r = void 0 === t ? "" : t, n = e[i("0x15")], c = void 0 === n ? "" : n, a = e.pageType, s = void 0 === a ? "" : a, d = e[i("0x11")], l = void 0 === d ? "" : d, p = (o.default[i("0x0")](l) || {}).executionId, f = void 0 === p ? "" : p, b = l;
                    if (l && ("H5" === r || c === i("0x18"))) {
                        var v = l.split("?")[1], x = l[i("0x2")]("#/")[1];
                        x && (v = x.split("?")[0] ? x.split("?")[1] : x.replace(i("0xb"), ""));
                        var y = {
                            1: i("0x1a").concat(v),
                            3: "/pages/insuranceMore/detail/detail?productUrl=".concat(encodeURIComponent(l)),
                            6: "/pages/h5Embed/hczActivityAiact/hczActivityAiact?productUrl=".concat(encodeURIComponent(l)),
                            7: i("0x13")[i("0x4")](s, "&executionId=").concat(f),
                            999: "/pages/webview/webview?src=".concat(encodeURIComponent(l), "&").concat(v, "&needLogin=true")
                        };
                        b = y[c] || y[999];
                    }
                    return u(u({}, e), {}, {
                        url: b,
                        executionId: f
                    });
                });
                this[i("0x7")](t);
            }
        },
        setResidentAct: function(e) {
            var t = this.data, r = (t.newUserActImg, t[i("0xc")]), n = t.residentAct.index, o = e.find(function(e) {
                return "新人有礼" === e.title;
            });
            o && Object[i("0xd")](o).length > 0 && !r && (e = e.slice(1, 6)), this.setData({
                "residentAct.leftList": e
            }), this.currentHandleIndex({
                detail: {
                    current: n,
                    source: "autoplay"
                }
            }), console[i("0x17")]("左侧常设活动接入个智改写链接后的数据 ==========>", this.data.residentAct.leftList);
        }
    }
};

exports.residentActMixins = d;

var l = Behavior(d);

exports.residentAct = l;
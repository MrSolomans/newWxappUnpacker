var e = require("../@babel/runtime/helpers/typeof"), t = [ "stringify", "split", "on", "expire", "getNetworkType", "server", "token", "onAppShow", "toPrimitive", "apply", "t", "join", "assign", "0", "getStorageSync", "default", ".log", "getTime", "xe", "fireEvent", "undefined", "brand", "&filename=", "uploadLog", ".", "handler", "h", "scene", "error", "&", " ", "ERROR", "reason", "timeout", "getSeconds", "-", "map", "statusCode", "jfsdk.user.cache", "request", "getMonth", "getSystemInfoSync", "https://jfvideo3-log", "getDate", "isConnected", "NETWORK_STATUS_CHANGE", "JFSDK.logs", "loadUserCache", "x", "\n", "uid", "promise", "onUnhandledRejection", "indexOf", "splice", "je", "sdkappid", "JFSDK", "callto", "symbol", "isNetworkDown", "_", "forEach", "JFSDK.uploadLog fail", "length", "delay", "replace", "jfvideo", "APP_SHOW", "log", "userType", "uuid", "concat", "@@toPrimitive must return a primitive value.", "S", "2.0.220908", "function", "set", "i", "max", "EVENT" ];

!function(e, t) {
    !function(t) {
        for (;--t; ) e.push(e.shift());
    }(++t);
}(t, 113);

var n = function(e, n) {
    return t[e -= 0];
};

function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, o(r.key), r);
    }
}

function o(e) {
    var t = function(e, t) {
        if ("object" != i(e) || !e) return e;
        var r = e[Symbol[n("0x39")]];
        if (void 0 !== r) {
            var o = r.call(e, t || n("0x40"));
            if ("object" != i(o)) return o;
            throw new TypeError(n("0x29"));
        }
        return ("string" === t ? String : Number)(e);
    }(e, "string");
    return "symbol" == i(t) ? t : t + "";
}

function i(t) {
    return (i = "function" == typeof Symbol && n("0x1b") == e(Symbol.iterator) ? function(t) {
        return e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
    })(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PromisePro = void 0;

var a, u = !1, c = !!wx[n("0x38")], s = !1, l = "", f = {
    env: "dev",
    sdkappid: "",
    server: "",
    logServer: "",
    callto: "",
    uuid: "",
    enableReport: !0,
    userType: 1,
    uid: "",
    token: "",
    expire: void 0,
    reqId: "",
    jfvideo: {
        timeout: 60,
        delayPull: 2,
        delayPull2: 6
    },
    jfmsg: {
        timeout: 60
    },
    EVENT: {
        NETWORK_STATUS_CHANGE: n("0xd"),
        APP_SHOW: "APP_SHOW",
        APP_HIDE: "APP_HIDE"
    }
};

function x() {
    var e = f.server[n("0x15")]("-stg") >= 0 || f.server.indexOf("-dev") >= 0;
    f.logServer = n("0xa") + (e ? "-stg" : "") + ".zgpajf.com.cn";
}

f.generateUUID = function() {
    var e = new Date().getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        var r = (e + 16 * Math.random()) % 16 | 0;
        return e = Math.floor(e / 16), (n("0x10") == t ? r : 3 & r | 8).toString(16);
    });
}, f.uuid = wx[n("0x3f")]("JFSDK.uuid"), f[n("0x27")] || (f.uuid = f.generateUUID(), 
wx.setStorageSync("JFSDK.uuid", f.uuid)), f[n("0x2d")] = function(e) {
    if (g("set", e), function(e, t, n) {
        if (e && t) for (var r in e) n.indexOf(r) >= 0 && (t[r] = e[r]);
    }(e, this, [ "env", "sdkappid", "server", "callto", "userType", "uid", "token", "reqId", n("0x34"), "enableReport" ]), 
    h(e[n("0x23")], this.jfvideo, [ n("0x1"), "delayPull", "delayPull2" ]), h(e.jfmsg, this.jfmsg, [ n("0x1") ]), 
    e.server && x(), e.uid && e[n("0x37")] && e[n("0x34")]) {
        var t = {
            version: n("0x2b"),
            env: this.env,
            sdkappid: this[n("0x18")],
            server: this.server,
            callto: this[n("0x1a")],
            userType: this[n("0x26")],
            uid: this.uid,
            token: this.token,
            expire: e.expire
        };
        g("cache", t), wx.setStorage({
            key: n("0x6"),
            data: t
        });
    }
    this.uploadLog(), this.xe();
}, f[n("0xf")] = function(e) {
    e = Object.assign({}, e);
    var t = !1, r = wx.getStorageSync("jfsdk.user.cache");
    do {
        if (!r) break;
        if ("2.0.220908" != r.version) break;
        if (this.env != r.env) break;
        if (e[n("0x18")] && e[n("0x18")] != r.sdkappid) break;
        if (e[n("0x36")] && e.server != r.server) break;
        if (e.callto && e.callto != r[n("0x1a")]) break;
        if (e.uid && e[n("0x12")] != r.uid) break;
        new Date()[n("0x42")]() < 1e3 * r[n("0x34")] - 72e5 && (this.sdkappid = r[n("0x18")], 
        this.server = r.server, this[n("0x1a")] = r.callto, this.userType = r.userType, 
        this.uid = r.uid, this[n("0x37")] = r.token, this.expire = r.expire, t = !0, x());
    } while (0);
    return g("loadUserCache", e, t), this.uploadLog(), this.xe(), t;
}, f.clearUserCache = function() {
    g("clearUserCache"), wx.removeStorage({
        key: "jfsdk.user.cache"
    });
};

var d = function() {
    for (;;) try {
        wx.setStorageSync("JFSDK.logs", a);
        break;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        if (u || a.length < 256) break;
        a.splice(0, parseInt(a.length / 4));
    }
};

function p(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function h(e, t, n) {
    if (e && t) for (var r in e) n.indexOf(r) >= 0 && (t[r] = (o = e[r], i = t[r], a = parseFloat(o), 
    isNaN(a) ? i : a));
    var o, i, a;
}

function g() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    f.log[n("0x3a")](f, [ n("0x19") ][n("0x28")](t));
}

f.log = function() {
    var e;
    a || (a = wx.getStorageSync(n("0xe")) || []);
    var t = f.now();
    (e = console).log.apply(e, [ t ].concat(Array.prototype.slice.call(arguments))), 
    t = [ t ][n("0x28")](Array.prototype.slice.call(arguments))[n("0x4")](function(e) {
        return "object" == i(e) ? JSON[n("0x31")](e) : String(e);
    }).join(" "), a.push(t), a.length > 5120 && !u && a.splice(0, a.length - 5120), 
    c && a.length % 32 != 0 || d(), a.length >= 128 && this.uploadLog();
}, f.uploadLog = function() {
    if (!s && (a || (a = wx.getStorageSync("JFSDK.logs") || []), !u && this.callto && this[n("0x12")] && this.uuid && 0 != a.length)) {
        u = !0;
        var e = new Date(), t = [ e = [ e.getFullYear(), e[n("0x8")]() + 1, e.getDate() ][n("0x4")](p).join(""), this.callto, this.uid, "wxlite", this.uuid ].join("_") + n("0x41");
        console.log(f.now(), "JFSDK.uploadLog", t);
        var r = a[n("0x20")], o = a.join("\r\n") + "\r\n", i = this.logServer + "/log/uploadText";
        i += "?callto=" + encodeURIComponent(this.callto), i += n("0x47") + encodeURIComponent(t);
        try {
            wx.request({
                url: i,
                data: o,
                method: "POST",
                success: function(e) {
                    200 == e.statusCode && 0 == e.data.code ? (console.log(f.now(), "JFSDK.uploadLog success", r), 
                    a.splice(0, r), d()) : console.log(f.now(), "JFSDK.uploadLog fail", e);
                },
                fail: function(e) {
                    console.log(f.now(), n("0x1f"), e);
                },
                complete: function() {
                    console[n("0x25")](f.now(), "JFSDK.uploadLog complete"), u = !1;
                }
            });
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console[n("0x4d")](e), u = !1;
        }
    }
}, f.compareVersion = function(e, t) {
    e = e.split(n("0x49")), t = t.split(".");
    for (var r = Math[n("0x2f")](e[n("0x20")], t.length); e.length < r; ) e.push("0");
    for (;t[n("0x20")] < r; ) t.push("0");
    for (var o = 0; o < r; o++) {
        var i = parseInt(e[o]), a = parseInt(t[o]);
        if (i > a) return 1;
        if (i < a) return -1;
    }
    return 0;
}, f.json2query = function(e) {
    return Object.keys(e).map(function(t) {
        return [ t, e[t] ][n("0x3c")]("=");
    }).join(n("0x4e"));
}, f._uid = function(e) {
    return [ this.callto, e || this.uid ].join(n("0x1d"));
}, f.__uid = function(e) {
    return f.split(e, "_", 2)[1];
}, f.now = function() {
    var e, t = new Date(), r = t.getFullYear(), o = t.getMonth() + 1, i = t[n("0xb")](), a = t.getHours(), u = t.getMinutes(), c = t[n("0x2")](), s = t.getMilliseconds();
    return [ r, o, i ].map(p).join(n("0x3")) + n("0x4f") + [ a, u, c ].map(p).join(":") + n("0x49") + ((e = (e = s).toString())[2] ? e : e[1] ? n("0x3e") + e : "00" + e);
};

var v = {};

f[n("0x33")] = function(e, t) {
    v[e] || (v[e] = []), v[e].push(t);
}, f.off = function(e, t) {
    var r = v[e];
    if (r) if (t) {
        for (var o = 0, i = r.length; o < i; o++) if (t == r[o]) {
            r[n("0x16")](o, 1);
            break;
        }
    } else delete v[e];
}, f.fireEvent = function(e) {
    for (var t = arguments[n("0x20")], r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
    v[e] && v[e][n("0x1e")](function(e) {
        return e.apply(void 0, r);
    });
};

var y = wx.getAccountInfoSync(), w = wx[n("0x9")](), m = {};

if (n("0x45") != ("undefined" == typeof __wxConfig ? "undefined" : e(__wxConfig))) {
    var S = [ "env", "appLaunchInfo" ];
    Object.keys(__wxConfig).filter(function(e) {
        return S[n("0x15")](e) < 0;
    })[n("0x1e")](function(e) {
        return m[e] = __wxConfig[e];
    });
}

f.platform = w.platform.toLowerCase(), f.o = "develop" === m.envVersion, f[n("0x17")] = "devtools" === f.platform, 
f.De = w.enableDebug, f.renderingMode = function() {
    return m && m.global && m.global.window && m.global.window.renderingMode;
}, g("version", n("0x2b")), g("sysInfo", w), g("appInfo", m), f.debug = function() {}, 
wx.onNetworkStatusChange(function(e) {
    g("onNetworkStatusChange", e), s = !e.isConnected, l = e.networkType, f[n("0x44")](f[n("0x30")].NETWORK_STATUS_CHANGE, {
        isConnected: e[n("0xc")],
        networkType: e.networkType
    });
}), wx[n("0x35")]({
    success: function(e) {
        g("getNetworkType", e), s = "none" == e.networkType, l = e.networkType;
    }
}), f.getNetworkType = function() {
    return l;
}, f[n("0x1c")] = function() {
    return s;
}, f.scene = 1e3, wx.onAppShow && wx.onAppShow(function(e) {
    f.scene = e[n("0x4c")], c = !0, f.fireEvent(f.EVENT[n("0x24")]), f.uploadLog();
}), wx.onAppHide && wx.onAppHide(function() {
    f[n("0x4c")] = 1e3, c = !1, f[n("0x44")](f.EVENT.APP_HIDE), d(), f.uploadLog();
}), f.i = function(e, t) {
    return e.indexOf(t) >= 0;
}, f.h = function(e) {
    return f.i(e, "camera");
}, f.p = function(e) {
    return f[n("0x2e")](e, "microphone");
}, f[n("0x2a")] = function(e) {
    return f[n("0x4b")](e) || f.p(e);
}, f.t = function(e, t) {
    f.i(e, t) || e.push(t);
}, f.v = function(e, t) {
    t && t.forEach(function(t) {
        return f[n("0x3b")](e, t);
    });
}, f.u = function(e, t) {
    var r = e[n("0x15")](t);
    r >= 0 && e.splice(r, 1);
}, f.g = function(e, t) {
    t && t[n("0x1e")](function(t) {
        return f.u(e, t);
    });
}, f.split = function(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
    if (1 == r) return [ e ];
    var o = e.split(t);
    return r > 1 && r < o.length && o.push(o[n("0x16")](r - 1, o.length - (r - 1)).join(t)), 
    o;
};

var k = {
    appId: y.miniProgram.appId,
    appName: m.accountInfo.nickname,
    appVersion: y.miniProgram.envVersion,
    sdkVersion: n("0x2b"),
    platform: "wechat-" + w.platform,
    system: w.system,
    brand: w[n("0x46")],
    model: w.model,
    uuid: f.uuid,
    wechatVersion: w.version,
    wechatSdkVersion: w.SDKVersion,
    jfServer: "",
    callto: "",
    uid: "",
    content: "",
    timestamp: 0,
    remark: ""
}, b = null, j = !1, T = null, E = function() {
    b || (b = wx[n("0x3f")]("JFSDK.errors") || []);
}, P = function() {
    try {
        wx.setStorageSync("JFSDK.errors", b);
    } catch (e) {}
}, O = /^(setKeepScreenOn|hideHomeButton|navigateBack|hideLoading|makePhoneCall)/;

f.logError = function(e) {
    if (e && f.server && f[n("0x1a")] && f.uid) {
        if ("[object Error]" === Object.prototype.toString.call(e)) e = e.message + n("0x11") + e.stack; else if ("string" != typeof e) {
            var t = e.errMsg;
            if ("string" == typeof t && O.test(t)) return;
            e = JSON.stringify(e);
        } else e = e;
        e = e[n("0x22")](/^MiniProgramError[\r\n]+/, "").replace(/\/?:\d+:\d+/g, "");
        var r = "";
        try {
            var o = getCurrentPages();
            o && o.length && (r = o[o[n("0x20")] - 1].route);
        } catch (e) {}
        var i = JSON[n("0x31")]({
            currentPage: r
        }), a = Object.assign({}, k, {
            jfServer: f.server,
            callto: f[n("0x1a")],
            uid: f.uid,
            content: e,
            timestamp: 1e3 * parseInt(Date.now() / 1e3),
            remark: i
        }), u = f.md5(JSON.stringify(a));
        u != T && (T = u, f.log("ERROR", "currentPage", r), f.log(n("0x50"), e), E(), b.push({
            md5: u,
            data: a
        }), b.length > 128 && b.splice(0, b.length - 128), P(), f.xe());
    }
}, f[n("0x43")] = function() {
    if (!s && (E(), !j && 0 != b.length)) {
        j = !0;
        var e = function() {
            return j = !1, f[n("0x48")](), !0;
        };
        !function t() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3, o = b[0];
            if (!o) return e();
            var i = function(n) {
                if (r <= 0) return e();
                setTimeout(function() {
                    t(r - 1);
                }, 1e3);
            };
            try {
                wx[n("0x7")]({
                    url: "https://jfvideo3-log.zgpajf.com.cn/apm/crashes?productId=jfrtc&requestId=".concat(o.md5),
                    method: "POST",
                    header: {
                        "content-type": "application/json"
                    },
                    data: o.data,
                    success: function(e) {
                        200 == e[n("0x5")] ? (b[0] === o && (b.splice(0, 1), P()), t()) : i();
                    },
                    fail: i
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return console.error(t), e();
            }
        }();
    }
}, f.o || (wx.onError && wx.onError(f.logError), wx.onUnhandledRejection && wx[n("0x14")](function(e) {
    return f.logError(e[n("0x0")]);
}), f[n("0x43")]()), f.md5 = require("./md5.min.js"), f.checkNull = function(e, t) {
    if (e) return e;
    var r = Error(t);
    try {
        var o = r.stack[n("0x32")](/[\r\n]+/g);
        o.splice(1, 1), r.stack = o.join("\r\n");
    } catch (e) {}
    throw r;
};

var D = function() {
    function e(t) {
        var n = this;
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, e), this.Se = !1, this.ke = null, this.ye = null, this.promise = new Promise(function(e, r) {
            t(function(t) {
                n.Se || (n.Se = !0, e(t));
            }, function(e) {
                n.Se || (n.Se = !0, r && r(e));
            }, n);
        });
    }
    return function(e, t, n) {
        t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        });
    }(e, [ {
        key: "cancel",
        value: function(e) {
            this.Se || (this.Se = !0, this.ye && this.ye(), this.ke && this.ke(e));
        }
    }, {
        key: "onCanceled",
        value: function(e) {
            if (e && "function" != typeof e) throw Error("callback is not a function");
            return this.ke = e, this;
        }
    }, {
        key: "then",
        value: function(e, t) {
            return this[n("0x13")].then(e, t);
        }
    }, {
        key: "catch",
        value: function(e) {
            return this.promise.catch(e);
        }
    }, {
        key: "finally",
        value: function(e) {
            return this.promise.finally(e);
        }
    } ]), e;
}();

function _(e) {
    return function(t) {
        return new D(function(r, o) {
            e(Object[n("0x3d")]({}, t, {
                success: r,
                fail: o
            }));
        });
    };
}

function C(e, t) {
    return function(r) {
        var o = (r = Object[n("0x3d")]({}, r))[n("0x4a")] || function(e) {
            return 200 == e.statusCode && e;
        }, i = r.retry || 0, a = r.delay || 0;
        return delete r.handler, delete r.retry, delete r.delay, t && !r.method && (r.method = r.data ? "POST" : "GET"), 
        new D(function(t, n, u) {
            var c = null, s = function() {
                try {
                    c = e(r);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    r.fail(e);
                }
            };
            r.success = function(e) {
                if (!u.Se) {
                    var n = o(e);
                    n ? t(n) : r.fail(e);
                }
            }, r.fail = function(e) {
                if (!u.Se) if ("request:fail url not in domain list" === e.errMsg) {
                    var t = /^https:\/\/[^\/\?]+/i.exec(r.url)[0];
                    g("未添加到服务器域名", t), wx.showModal({
                        title: "提示",
                        content: "".concat(t, " 未添加到服务器域名，打开调试模式再试"),
                        showCancel: !1
                    }), n(e);
                } else --i >= 0 ? f.delay(a).then(function() {
                    return !u.Se && s();
                }) : n(e);
            }, u.ye = function() {
                return c && c.abort && c.abort();
            }, s();
        });
    };
}

for (var N in exports.PromisePro = D, f[n("0x21")] = function(e) {
    return new D(function(t, n, r) {
        var o = setTimeout(function() {
            t(e);
        }, e);
        r.ye = function() {
            return clearTimeout(o);
        };
    });
}, f.wx = {
    request: C(wx.request, !0),
    uploadFile: C(wx.uploadFile),
    downloadFile: C(wx.downloadFile)
}, wx) f.wx[N] || (n("0x2c") == e(wx[N]) && !1 === /Sync$/.test(N) ? f.wx[N] = _(wx[N]) : f.wx[N] = wx[N]);

module.exports = f;
var e, t, n = require("../@babel/runtime/helpers/regeneratorRuntime"), o = require("../@babel/runtime/helpers/typeof"), r = [ "push", "join2", ",", "hash", "collectUserId", "clearSaveImg", "pagelocation", "text", "method", "发现页", "unionId", "other", "log", "long", "random", "getStorageSync", "setFontSize", "code", "/login/third-party/v1/xcx/logout", "trackPoint", "resolve", "border", "__esModule", "openid", "_set", "toPrimitive", "currentPageUrl=", "default", "timer", "color", "generateFixedPic", "bannerFunc", "reportId", "local_allPoster_", "enumerable", "hczhd", "setData", "url", "#d8d8d8", "post", "colorRGBtoHex", "split", "data", "replace", "获取图片信息失败，即将调用失败回调", "error", "catch", "setFillStyle", "getMyStorageAndClear", "head", "PACX_W00001365", "defineProperty", "wrap", "我的", "next", "componentBannerList", "currentBG_", "sent", "return", "indexOf", "tempFilePath", "width", "signatureUnionid", "clip", "times", "header", "getImageInfo", "--canvasToTempFilePath--success", "length", "getPicAll", "path", "forEach", "choose", "stop", "clearRect", "concat", "downOver", "sunCodeImg", "dataset", "showModal", "test", "name", "textObj", "end", "removeSavedFile", "/", "invite", "join", "fillText", "abrupt", "y", "activityId", "埋点标识", "=", "then", "floor", "_get", "登出失败，请稍后再试！", "&getQRcode=QRcode", "count", " —— ", "onlyRoute", "drawImage", "poster" ];

e = r, t = 491, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var i = function(e, t) {
    return r[e -= 0];
};

Object[i("0x50")](exports, "__esModule", {
    value: !0
}), exports[i("0x3c")] = exports.activityUtil = exports.activityFunc = exports.GetNeedImg = void 0, 
exports[i("0x45")] = w, exports.commonLoginOut = function() {
    return P.apply(this, arguments);
}, exports.default = void 0, exports.filterStrToArr = function() {
    var e = arguments[i("0x61")] > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.split("\n");
}, exports.goToWXSettingPage = k, exports.isEmptyObject = I, exports.matchUrl = function() {
    var e = arguments[i("0x61")] > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i("0x20");
    if ("onlySearch" === t) {
        var n = e[i("0x46")]("?");
        return {
            path: n[0],
            search: n[1] || "",
            hash: ""
        };
    }
    var o = e.split("#"), r = o[1] ? "#" + o[1] : "", a = o[0].split("?"), s = a[0] || "", c = a[1] || "";
    return {
        path: s,
        search: c,
        hash: r
    };
}, exports.recognitionBGColor = y;

var a = function(e) {
    return e && e[i("0x33")] ? e : {
        default: e
    };
}(require("./newGetUserInfo"));

function s(e) {
    return (s = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(e) {
        return o(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : o(e);
    })(e);
}

function c(e, t, n, o, r, i, a) {
    try {
        var s = e[i](a), c = s.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void n(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(o, r);
}

function l(e) {
    return function() {
        var t = this, n = arguments;
        return new Promise(function(o, r) {
            var a = e.apply(t, n);
            function s(e) {
                c(a, o, r, s, l, i("0x53"), e);
            }
            function l(e) {
                c(a, o, r, s, l, "throw", e);
            }
            s(void 0);
        });
    };
}

function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, o);
    }
    return n;
}

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(n), !0)[i("0x64")](function(t) {
            h(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n))[i("0x64")](function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}

function h(e, t, n) {
    return (t = p(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function d(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function g(e, t) {
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o[i("0x3f")] || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, p(o.key), o);
    }
}

function p(e) {
    var t = function(e, t) {
        if ("object" != s(e) || !e) return e;
        var n = e[Symbol[i("0x36")]];
        if (void 0 !== n) {
            var o = n.call(e, t || i("0x38"));
            if ("object" != s(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    }(e, "string");
    return "symbol" == s(t) ? t : t + "";
}

var f = getApp(), v = require("./datatist.js"), m = function() {
    function e() {
        var t = arguments[i("0x61")] > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.id, o = t.userId, r = void 0 === o ? i("0x21") : o, a = t.poster, s = void 0 === a ? "collectPosterPicList" : a, c = t.path, l = void 0 === c ? "pages/activity/collectPuzzles/collectPuzzles" : c;
        d(this, e), this._get = wx.getStorageSync, this._set = wx.setStorageSync, this[i("0x10")] = n, 
        this[i("0x18")] = 0, this.userId = r, this.poster = s, this.path = l, this.downOver = !0, 
        this.timer = null, this[i("0x5d")] = 0, this.clearSaveImg();
    }
    return function(e, t, n) {
        t && g(e.prototype, t), n && g(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        });
    }(e, [ {
        key: i("0x22"),
        value: function() {
            wx.removeStorageSync("local_headImg"), wx.removeStorageSync("local_sun_" + this.activityId), 
            wx.removeStorageSync("local_post_" + this.activityId), wx.removeStorageSync(i("0x55") + this.activityId), 
            this.getMyStorageAndClear("local_allPoster_" + this.activityId, "all");
        }
    }, {
        key: "getMyStorageAndClear",
        value: function(e, t) {
            var n = this._get(e);
            t ? "all" === t ? wx.getSavedFileList({
                success: function(t) {
                    t.fileList.forEach(function(e) {
                        var t = e.filePath;
                        wx.removeSavedFile({
                            filePath: t
                        });
                    }), wx.removeStorageSync(e);
                }
            }) : "long" === t && wx[i("0x9")]({
                filePath: n,
                success: function() {
                    wx.removeStorageSync(e);
                }
            }) : wx.removeStorageSync(e);
        }
    }, {
        key: "generateFixedPic",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.type, o = void 0 === n ? i("0x4e") : n, r = "local_sun_" + this.activityId, a = this._get(this.userId) || "", s = this.getSunCodeImg({
                scene: a,
                path: this[i("0x63")]
            }), c = "local_post_" + this.activityId, l = this._get(c) || [], u = this._get(this.poster) || [], x = function() {
                var t = u[e.count];
                return e.getTempFileUrl(t)[i("0x13")](function(t) {
                    return e.downOver = !0, l.push(t), e._set(c, l), e.count = e.count + 1, !0;
                });
            };
            switch (o) {
              case "head":
                return this._get("local_headImg") ? Promise.resolve(!0) : this.getTempFileUrl(this._get("headPortrait")).then(function(t) {
                    return e._set("local_headImg", t), !0;
                });

              case "sun":
                return this._get(r) ? Promise[i("0x31")](!0) : this.getTempFileUrl(s).then(function(t) {
                    return e[i("0x35")](r, t), !0;
                })[i("0x4b")](function(e) {
                    console.error(e);
                });

              case "post":
                return console.log("本地海报", l), console[i("0x29")]("远程海报", u), this[i("0x1")] || 0 !== u.length ? (this.downOver = !1, 
                u[i("0x61")] > 0 && u.length <= l.length && this.count === u.length ? (console[i("0x29")]("远程海报全部下载完毕了:", o), 
                this[i("0x1")] = !0, Promise[i("0x31")](!0)) : l.length >= 1 ? (this.downOver = !0, 
                x(), Promise[i("0x31")](!0)) : x()) : (console.warn("上一张远程海报还没下载完:", o, this._get("local_post_" + this[i("0x10")])), 
                Promise.resolve(!1));
            }
        }
    }, {
        key: "getPicAll",
        value: function(e) {
            var t = this, n = this._get("local_headImg"), o = this._get("local_sun_" + this.activityId), r = this._get("local_post_" + this.activityId);
            console[i("0x29")]("all pictures", n, o, r);
            var a = [];
            return !n && a.push(this[i("0x3b")]({
                type: i("0x4e")
            })), !o && a[i("0x1d")](this.generateFixedPic({
                type: "sun"
            })), a[i("0x1d")](this.generateFixedPic({
                type: i("0x44")
            })), Promise.all(a).then(function(n) {
                n.every(function(e) {
                    return !0 === e;
                }) ? e && e() : (wx.showLoading({
                    title: "loading…",
                    mask: !0
                }), console.log(n, "海报的三个关键图片还未加载完毕！"), t.checkDownOver(function() {
                    t[i("0x62")](e || void 0);
                }));
            });
        }
    }, {
        key: "checkDownOver",
        value: function(e, t) {
            var n = this;
            return this.timer ? (t && t(), !1) : (this[i("0x39")] = setInterval(function() {
                console.log("读取当前下载进度:", n[i("0x1")], n[i("0x15")](n.poster), n._get("local_post_" + n[i("0x10")])), 
                n.downOver || n.times >= 2 ? (wx.hideLoading(), clearInterval(n.timer), e && e()) : n.times += 1;
            }, 1e3), !0);
        }
    }, {
        key: "getTempFileUrl",
        value: function(e, t) {
            return new Promise(function(n, o) {
                console.log("开始下载图片》》》", t, e), !e && o(), wx.downloadFile({
                    url: e,
                    success: function(o) {
                        t !== i("0x2a") ? (console.log("临时保存图片成功", e, i("0x19"), o.tempFilePath), n(o[i("0x59")])) : wx.saveFile({
                            tempFilePath: o.tempFilePath,
                            success: function(t) {
                                console.log("长久保存图片成功", e, i("0x19"), t.savedFilePath), n(t.savedFilePath);
                            }
                        });
                    },
                    fail: function(t) {
                        console.error("下载临时文件失败: ", e, t), o(e);
                    }
                });
            });
        }
    }, {
        key: "getSunCodeImg",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.scene, o = void 0 === n ? "" : n, r = t.path, a = void 0 === r ? "pages/index/index2" : r, s = t.getTemp, c = void 0 !== s && s, l = t.weAppNo, u = void 0 === l ? "PA_CXZZB_05" : l, x = "https://eim-minpro.pingan.com.cn/wxSmallApp/getaqrcode?weAppNo=" + u + "&scene=" + o + "&type=wxacodeunlimit&path=" + encodeURIComponent(a);
            return c ? new Promise(function(t, n) {
                e.getTempFileUrl(x).then(function(e) {
                    t({
                        originPath: x,
                        tempFilePath: e
                    });
                })[i("0x4b")](function() {
                    console[i("0x4a")]("下载太阳码失败"), n({
                        originPath: x,
                        tempFilePath: x
                    });
                });
            }) : x;
        }
    }, {
        key: "initHaiBaoCanvas",
        value: function(e) {
            var t = e.canvasId, n = e.imgObj, o = e[i("0x7")], r = e.standW, a = e.standH, s = wx.createCanvasContext(t);
            s.clearRect(0, 0, r, a), s[i("0x4c")]("#fff"), s.fillRect(0, 0, r, a), s[i("0x1b")](n[i("0x1c")].url, 0, 0, n.poster[i("0x5a")], n.poster.height), 
            s.setFillStyle(o.commonColor), s.setFontSize(o[i("0xb")].size), s.fillText(o.invite.text, o.invite.x, o.invite.y), 
            s.setFontSize(o.join.size), s.fillText(o[i("0xc")].text, o.join.x, o.join[i("0xf")]), 
            s.setFillStyle(o.commonColor), s[i("0x2d")](o.nickName.size);
            var c = o.nickName[i("0x24")];
            c = c.length > 10 ? c.substring(0, 10) + "…" : c, s.fillText(c, o.nickName.x, o.nickName[i("0xf")]), 
            o[i("0x1e")] && (s.setFillStyle(o.commonColor), s[i("0x2d")](o.join2.size), s[i("0xd")](o.join2.text, o.join2.x, o.join2[i("0xf")]));
            var l = function(e, t, n, o, r, a, s) {
                e.save();
                var c = 2 * r, l = n + r, u = o + r;
                e.beginPath(), e.arc(l, u, r, 0, 2 * Math.PI), e.setStrokeStyle(a.color), e.setLineWidth(a[i("0x32")]), 
                e.stroke(), e.closePath(), e[i("0x5c")](), "sunCodeImg" === s ? (e.setFillStyle("#fff"), 
                e.fillRect(n, o, c + 2, c + 2), e.drawImage(t, n, o, c - 2, c - 2)) : e.drawImage(t, n, o, c, c), 
                e.restore();
            };
            l(s, n.sunCodeImg[i("0x42")], n[i("0x2")].x, n.sunCodeImg.y, n[i("0x2")].radius, n.sunCodeImg[i("0x28")], i("0x2"));
            var u = n.headImg.x, x = n.headImg.y, h = n.headImg.radius;
            return l(s, n.headImg.url, u, x, h, n.headImg.other, "headImg"), new Promise(function(e, n) {
                s.draw(!1, function() {
                    wx.canvasToTempFilePath({
                        canvasId: t,
                        width: r,
                        height: a,
                        destWidth: r,
                        destHeight: a,
                        quality: 1,
                        fileType: "jpg",
                        success: function(t) {
                            wx.saveFile({
                                tempFilePath: t.tempFilePath,
                                success: function(t) {
                                    wx.setStorageSync(i("0x3e") + self.activityId, t.savedFilePath), e(t.savedFilePath), 
                                    console[i("0x29")](i("0x60"), t.savedFilePath);
                                },
                                fail: function(n) {
                                    console.error("长时间保存图片失败", n), e(t.tempFilePath);
                                }
                            });
                        },
                        fail: function(e) {
                            s[i("0x67")](0, 0, r, a), console.error("--canvasToTempFilePath--fail", e), n(), 
                            wx.hideLoading();
                        }
                    });
                });
            });
        }
    }, {
        key: "initPoster",
        value: function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "saveHaiBaoCanvas", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0;
            if (r) t = r; else {
                var a = this._get("local_post_" + this.activityId) || [];
                t = a[Math[i("0x14")](Math.random() * a.length)];
            }
            this[i("0x4d")]("local_allPoster_" + this.activityId, "long");
            for (var s = this.activityId, c = wx[i("0x2c")]("local_post_" + s) || [], l = 0; l < c.length; l++) console[i("0x29")](c[l]);
            var u = c[Math.floor(Math[i("0x2b")]() * c.length)], h = wx.getStorageSync("local_sun_" + s), d = wx.getStorageSync("local_headImg"), g = wx[i("0x2c")]("userInfo").nickName;
            console[i("0x29")]("currentBG-------", u);
            var p = {
                defaultParam: x({
                    canvasId: n,
                    imgObj: {
                        poster: {
                            url: t,
                            width: 750,
                            height: 1220
                        },
                        sunCodeImg: {
                            url: this._get("local_sun_" + this.activityId),
                            x: 510,
                            y: 993,
                            radius: 80,
                            other: {
                                border: 1,
                                color: i("0x43")
                            }
                        },
                        headImg: {
                            url: this._get("local_headImg"),
                            x: 66,
                            y: 1061,
                            radius: 48.5,
                            other: {
                                border: 1,
                                color: "#fff"
                            }
                        }
                    },
                    textObj: {
                        commonColor: e,
                        invite: {
                            size: 24,
                            text: "邀您一起来参加",
                            x: 190,
                            y: 1147
                        },
                        join: {
                            size: 22,
                            text: "长按二维码参与活动",
                            x: 491,
                            y: 1184
                        },
                        nickName: {
                            size: 32,
                            text: wx.getStorageSync("userInfo").nickName,
                            x: 190,
                            y: 1101
                        }
                    },
                    standW: 750,
                    standH: 1205
                }, o),
                DMParam: {
                    canvasId: n,
                    imgObj: {
                        poster: {
                            url: u,
                            width: 750,
                            height: 921
                        },
                        sunCodeImg: {
                            url: h,
                            x: 557,
                            y: 880,
                            radius: 64.5,
                            other: {
                                border: 1,
                                color: i("0x43")
                            }
                        },
                        headImg: {
                            url: d,
                            x: 30,
                            y: 951,
                            radius: 40,
                            other: {
                                border: 1,
                                color: "#fff"
                            }
                        }
                    },
                    textObj: {
                        commonColor: e,
                        invite: {
                            size: 34,
                            text: "邀您一起来抽奖",
                            x: 126,
                            y: 1023
                        },
                        join: {
                            size: 28,
                            text: "长按识别小程序",
                            x: 524,
                            y: 1057
                        },
                        join2: {
                            size: 28,
                            text: "参与活动",
                            x: 572,
                            y: 1101
                        },
                        nickName: {
                            size: 28,
                            text: g,
                            x: 126,
                            y: 979
                        }
                    },
                    standW: 750,
                    standH: 1205
                }
            };
            o.type = o.type || "defaultParam";
            var f = p[o.type];
            return this.initHaiBaoCanvas(f);
        }
    } ]), e;
}();

function y() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.canvasId, n = e.imgUrl, o = e.successBack, r = e.failBack, a = wx.createCanvasContext(t);
    wx[i("0x5f")]({
        src: n,
        success: function(e) {
            var n = e[i("0x5a")], r = e.height, s = e.path;
            n /= 4, r /= 4, a[i("0x1b")](s, 0, 0, n, r), a.draw(!1, function() {
                wx.canvasGetImageData({
                    canvasId: t,
                    x: 1,
                    y: r - 1,
                    width: 1,
                    height: 1,
                    success: function(e) {
                        var t = e[i("0x47")];
                        t[3] /= 255;
                        var n = "rgba(" + t.join(",") + ")";
                        console.log(n), o && o(n);
                    }
                });
            });
        },
        fail: function(e) {
            console.error(i("0x49")), r && r(e);
        }
    });
}

function w(e) {
    var t = e.split(i("0x1f"));
    return "#" + ((1 << 24) + (parseInt(t[0].split("(")[1]) << 16) + (parseInt(t[1]) << 8) + parseInt(t[2][i("0x46")](")")[0])).toString(16).slice(1);
}

exports.GetNeedImg = m;

var S = {
    setBackground: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e = "string" == typeof e ? {
            color: e,
            top: e,
            bottom: e
        } : e, wx.setBackgroundColor ? wx.setBackgroundColor({
            backgroundColor: e[i("0x3a")],
            backgroundColorTop: e.top,
            backgroundColorBottom: e.bottom
        }) : console.warn("基础库低于2.1.0，不支持wx.setBackgroundColor方法");
    },
    jumpQRCodePage: function(e) {
        return new Promise(function(t) {
            wx.navigateTo({
                url: "/pages/activity/preRegistration/QRCode?inviteCode=" + e + i("0x17"),
                success: function() {
                    t();
                }
            });
        });
    },
    insertNumber: function(e) {
        return e[i("0x48")]("${number}", "\n");
    }
};

exports.activityUtil = S;

var b = {
    data: {
        change: !1,
        maskStatus: !1,
        showMask: {
            mask: !1,
            main: ""
        },
        needUpdateCommon: !1
    },
    allFunc: {
        changeShow: function() {
            this.setData({
                change: !0,
                maskStatus: !0
            });
        },
        changeHide: function() {
            this[i("0x41")]({
                change: !1,
                maskStatus: !1
            });
        },
        showMaskView: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i("0x65"), t = this[i("0x47")].showMask;
            t.mask = !0, t.main = e, this.setData({
                showMask: t,
                maskStatus: !0
            });
        },
        hideMaskView: function() {
            var e = this.data.showMask;
            e.mask = !1, e.main = "", this.setData({
                showMask: e,
                maskStatus: !1
            });
        },
        getCurrentPageInfo: function(e) {
            var t = e[i("0x1a")], n = void 0 !== t && t, o = getCurrentPages(), r = o[o.length - 1];
            if (r) {
                var a = r.route;
                if (n) return a;
                for (var s = r.options, c = i("0xa") + a + "?", l = 0, u = Object.keys(s); l < u.length; l++) {
                    var x = u[l];
                    c = c + x + i("0x12") + s[x] + "&";
                }
                return c = c.substr(0, c.length - 1);
            }
            return "";
        },
        getPhoneNumberCommon: function(e) {
            var t = this, n = e.currentTarget.dataset[i("0x53")];
            f.getPhoneNumber(e).then(function(o) {
                o.data.phoneNumber ? t[n] && t[n](e) : (console.error("解密失败", o), wx[i("0x4")]({
                    title: "温馨提示",
                    content: "授权失败，请稍后再试"
                }));
            });
        }
    }
};

function P() {
    return (P = l(n().mark(function e() {
        var t, o;
        return n()[i("0x51")](function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = {
                    openId: wx.getStorageSync("openid"),
                    unionId: wx.getStorageSync(i("0x27")),
                    sourceType: i("0x5"),
                    timestamp: wx.getStorageSync("timestamp"),
                    signature: wx.getStorageSync("signature"),
                    nonce: wx.getStorageSync("nonce"),
                    signatureUnionid: wx[i("0x2c")](i("0x5b")),
                    "X-PA-NONCESTR": 1
                }, e.next = 3, f.$http({
                    url: f.getRequestUrl(i("0x2f"), i("0x40")),
                    needToken: !0,
                    data: t
                });

              case 3:
                return o = e.sent, e[i("0xe")]("return", new Promise(function() {
                    var e = l(n().mark(function e(t, r) {
                        var s;
                        return n().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (200 !== (null == o ? void 0 : o.code)) {
                                    e.next = 12;
                                    break;
                                }
                                return v.trackLogout(), s = [ "aopsid", "hczAccessToken", "secretToken", "secret_token", "reportId", "userphone" ], 
                                [ "openid", "openId", "unionId", "timestamp", "signature", "nonce", "signatureUnionid" ][i("0x64")](function(e) {
                                    f.globalData[e] = "", wx.removeStorageSync(e);
                                }), s.forEach(function(e) {
                                    f.globalData[e] = "", wx.removeStorageSync(e);
                                }), f.globalData.userStatusIsLogin = !1, e.next = 9, a.default.commonAsyncFunc();

                              case 9:
                                t(o), e.next = 14;
                                break;

                              case 12:
                                console.log(i("0x16")), r(o);

                              case 14:
                              case i("0x8"):
                                return e.stop();
                            }
                        }, e);
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }()));

              case 5:
              case i("0x8"):
                return e[i("0x66")]();
            }
        }, e);
    }))).apply(this, arguments);
}

function I(e) {
    return "{}" === JSON.stringify(e);
}

exports.activityFunc = b;

var _ = {
    data: {
        componentBannerList: []
    },
    allFunc: {
        bannerLoginAfter: function(e) {
            var t = wx.getStorageSync(i("0x3d"));
            t && (f.setUserProperty({
                reportId: t
            }), v.customerTrack("PACX_W00001423", {
                source: "xcx_mr",
                reportid: t
            }, null)), "4" === e.currentTarget[i("0x3")].showpage && this.isShowDetail(!0), 
            this.renderBanner(e.currentTarget[i("0x3")].showpage);
        },
        renderBanner: function(e) {
            var t = this;
            return l(n().mark(function o() {
                var r, a, s, c, l;
                return n().wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n[i("0x53")] = 2, t.bannerHttp({
                            url: f.getRequestUrl("/uapi/cps-hcz-smallapp/collocateConfig/list"),
                            params: {
                                source: "floatingWindow"
                            }
                        });

                      case 2:
                        if (r = n[i("0x56")], a = r[i("0x2e")], s = r[i("0x47")], console.log("悬浮运营位配置", s), 
                        0 === a && s && Array.isArray(s)) {
                            n.next = 9;
                            break;
                        }
                        return console.warn("后台返回数据有误"), n.abrupt(i("0x57"));

                      case 9:
                        t.data.componentBannerList = s.filter(function(t) {
                            return t.keyValue.showPage === e;
                        }), c = wx.getStorageSync("".concat(e, "floatBoxCidArr")), console.log("本地存储已关闭的数组", c), 
                        l = {
                            1: "首页",
                            2: i("0x26"),
                            3: "保险页",
                            4: i("0x52")
                        }, c && c[i("0x61")] > 0 && (t.data[i("0x54")] = t.data.componentBannerList.filter(function(e) {
                            return -1 === c[i("0x58")](e.configId);
                        }), console.log("筛选一下本地存储数组中不包含的数据：", t.data.componentBannerList)), t.setData({
                            componentBannerList: t.data.componentBannerList
                        }), t.data[i("0x23")] = l[e] || "", t.data.componentBannerList.length > 0 && t[i("0x30")]({
                            detail: {
                                idx: 0,
                                type: "show"
                            }
                        });

                      case 17:
                      case "end":
                        return n.stop();
                    }
                }, o);
            }))();
        },
        trackPoint: function(e) {
            var t = e.detail || {}, n = t.idx, o = t.type;
            if ("close" === o) return v.customerTrack("PACX_W00001367", {
                openid1: wx.getStorageSync("openid"),
                zombiedd: wx.getStorageSync("unionId")
            }, null), void console[i("0x29")](i("0x11"), "PACX_W00001367", "埋点类型", o, "openid1", wx.getStorageSync(i("0x34")), "zombiedd", wx.getStorageSync("unionId"));
            v.customerTrack("click" === o ? i("0x4f") : "PACX_W00001366", {
                bannerName: this.data.componentBannerList[n].keyValue[i("0x6")],
                pagelocation: this[i("0x47")][i("0x23")],
                page_name: this[i("0x47")][i("0x23")]
            }, null), console.log("埋点标识", "click" === o ? "PACX_W00001365" : "PACX_W00001366", "埋点类型", o, this.data.componentBannerList[n].keyValue.name, "页面：", this.data[i("0x23")]);
        },
        bannerHttp: function(e) {
            var t = e.url, n = e.params, o = void 0 === n ? {} : n, r = e[i("0x5e")], a = void 0 === r ? {
                "Content-Type": "application/json"
            } : r, s = e[i("0x25")], c = void 0 === s ? i("0x44") : s, l = e.timeout, u = void 0 === l ? 25e3 : l;
            return "release" !== f.globalData.envVersion && (a.versionno = "grayTest"), wx[i("0x2c")]("hczAccessToken") && (a.secret_token = wx[i("0x2c")]("hczAccessToken")), 
            new Promise(function(e) {
                wx.request({
                    url: t,
                    method: c,
                    timeout: u,
                    header: a,
                    data: x(x({}, o), {}, {
                        "X-PA-NONCESTR": 1
                    }),
                    success: function(t) {
                        e(t[i("0x47")]);
                    },
                    fail: function(n) {
                        console.log(""[i("0x0")](t, "请求失败:"), n), e(!1);
                    }
                });
            });
        }
    }
};

function k() {
    var e = arguments[i("0x61")] > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "必须获得授权才能正常访问页面，点击确定管理授权信息", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], a = getCurrentPages(), s = a[a.length - 1], c = s.route;
    return console.log(i("0x37"), c, "path=", o), new Promise(function(i) {
        "" !== o && o !== c ? i() : wx.showModal({
            title: e,
            content: t,
            success: function(e) {
                e.confirm && -1 === n ? (wx.openSetting(), i(!0)) : (i(!1), r && wx.switchTab({
                    url: "/pages/index/index2"
                }));
            },
            fail: function() {
                i(!1);
            }
        });
    });
}

exports.bannerFunc = _;

var C = {
    recognitionBGColor: y,
    colorRGBtoHex: w,
    GetNeedImg: m,
    isEmptyObject: I,
    goToWXSettingPage: k
};

exports.default = C;
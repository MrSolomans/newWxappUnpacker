var e, t, s = require("../../@babel/runtime/helpers/regeneratorRuntime"), n = [ "globalData", "properties", "closeSave", "posterText", "&scene=", "drawImage", "createCanvasContext", "PI", "data", "showToast", "log", "triggerEvent", "您点击了拒绝授权,将无法正常保存图片,点击确定重新获取授权", "posterCanvas", "imgs", "userAvatar", "scene", "avatarUrl", "setData", "#fff", "forEach", "clip", "fillRect", "return", "beginPath", "openPoster", "showLoading", "sunImg", "setFillStyle", "#FFFFFF", "save", "draw", "hideLoading", "lineTo" ];

e = n, t = 450, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return n[e -= 0];
};

function o(e, t, s, n, a, o, r) {
    try {
        var i = e[o](r), l = i.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void s(e);
    }
    i.done ? t(l) : Promise.resolve(l).then(n, a);
}

var r = getApp();

Component({
    properties: {
        modalType: {
            type: String,
            value: ""
        },
        shareBg: {
            type: String,
            value: "https://pimg1.4008000000.com/app_images/4008000000/m/Software/appAticle/bg_c.png"
        },
        posterBg: {
            type: String,
            value: "https://pimg1.4008000000.com/app_images/4008000000/m/Software/appAticle/bg_d.png"
        },
        sunUrl: {
            type: String,
            value: ""
        },
        sunScene: {
            type: String,
            value: a("0x8")
        },
        shareText: {
            type: String,
            value: ""
        },
        posterText: {
            type: String,
            value: ""
        }
    },
    data: {
        sunImg: "",
        userAvatar: "",
        userName: "",
        clickTag: 0,
        posterMsg1: "",
        posterMsg2: ""
    },
    methods: {
        openPoster: function() {
            var e = this;
            wx[a("0x12")]({
                title: "Loading..."
            });
            var t = this.properties[a("0x1d")];
            if (console.log("sss", t), t.length > 12) {
                var s = t.substring(0, 12), n = t.substring(12, 22);
                this.properties.posterText.length > 24 && (n = t.substring(11, 23) + "..."), this.setData({
                    posterMsg1: s,
                    posterMsg2: n
                });
            } else this[a("0xa")]({
                posterMsg1: t
            });
            var o = wx.getStorageSync("userInfo").nickName, i = wx.getStorageSync("userInfo") ? wx.getStorageSync("userInfo")[a("0x9")] : wx.getStorageSync(a("0x7"));
            o.length > 11 && (o = o.substring(0, 10) + "..."), this[a("0xa")]({
                userAvatar: i,
                userName: o
            });
            var l = this.properties, c = l.sunScene, g = l.sunUrl;
            r.getShortLink("APPW", c).then(function(t) {
                if (t) {
                    console.log("加密太阳码得到参数", t);
                    var s = r[a("0x1a")].weAppNo, n = g || encodeURIComponent("pages/index/index2"), o = "https://eim-minpro.pingan.com.cn/wxSmallApp/getaqrcode?weAppNo=" + s + a("0x1e") + t + "&type=wxacodeunlimit&path=" + n;
                    console.log(o), e.setData({
                        sunImg: o
                    }, function() {
                        e.setData({
                            modalType: "poster"
                        });
                    });
                }
                wx.hideLoading();
            }), this.triggerEvent(a("0x11"));
        },
        savePoster: function() {
            var e = this;
            if (0 == this[a("0x0")].clickTag) {
                this.data.clickTag = 1, wx.showLoading({
                    title: "正在保存"
                });
                var t = this[a("0x17")]();
                Promise.all([ t ]).then(function() {
                    console.log("draw done..."), wx.canvasToTempFilePath({
                        canvasId: "posterCanvas",
                        destWidth: 690,
                        destHeight: 892,
                        quality: 1,
                        success: function(t) {
                            wx.hideLoading(), wx.saveImageToPhotosAlbum({
                                filePath: t.tempFilePath,
                                success: function() {
                                    wx[a("0x1")]({
                                        title: "保存成功",
                                        success: function() {
                                            setTimeout(function() {
                                                e[a("0x1c")]();
                                            }, 800);
                                        }
                                    }), e.data.clickTag = 0;
                                },
                                fail: function() {
                                    wx.hideLoading(), wx.showModal({
                                        content: a("0x4"),
                                        success: function(t) {
                                            t.confirm && wx.openSetting(), e.data.clickTag = 0;
                                        }
                                    });
                                }
                            });
                        },
                        fail: function(t) {
                            console.log(t), wx[a("0x18")](), wx.showToast({
                                icon: "fail",
                                title: "保存失败，请重试！"
                            }), e[a("0x0")].clickTag = 0;
                        }
                    }, e);
                }), this.triggerEvent("savePoster");
            }
        },
        draw: function() {
            var e = this;
            return function(e) {
                return function() {
                    var t = this, s = arguments;
                    return new Promise(function(n, a) {
                        var r = e.apply(t, s);
                        function i(e) {
                            o(r, n, a, i, l, "next", e);
                        }
                        function l(e) {
                            o(r, n, a, i, l, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }(s().mark(function t() {
                var n, o, r, i, l, c, g, u, p, x;
                return s().wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n = 1, t.next = 3, e.download();

                      case 3:
                        return o = t.sent, r = wx[a("0x20")](a("0x5"), e), i = o.userAvatar, l = o.posterBg, 
                        c = o.qrcode, console[a("0x2")]("qrcode", o), g = e.data, u = g.userName, p = g.posterMsg1, 
                        x = g.posterMsg2, e.properties.posterText, r.setFillStyle(a("0x15")), r[a("0xe")](0, 0, 345 * n, 446 * n), 
                        r.drawImage(l, 0, 0, 345 * n, 334 * n), r[a("0x16")](), r[a("0x10")](), r.arc(33 * n, 367 * n, 18 * n, 0, 2 * Math[a("0x21")]), 
                        r.setStrokeStyle(a("0xb")), r.setLineWidth(1), r.stroke(), r.closePath(), r.clip(), 
                        r.drawImage(i, 14 * n, 349 * n, 37 * n, 37 * n), r.restore(), u.length > 11 && (u = u.substring(0, 10) + "..."), 
                        r.beginPath(), r.setFillStyle("#828A93"), r.setFontSize(14 * n), r.fillText(u, 56 * n, 362 * n), 
                        r.setFillStyle("#828A93"), r.setFontSize(14 * n), r.fillText(p, 56 * n, 381 * n), 
                        x ? (r.fillText(x, 56 * n, 401 * n), r.setFillStyle("#FFE8C1"), r.moveTo(27 * n, 412 * n), 
                        r.lineTo(194 * n, 412 * n), r.arc(194 * n, 425 * n, 13 * n, 3 * Math.PI / 2, Math.PI / 2), 
                        r.lineTo(27 * n, 438 * n), r.arc(27 * n, 425 * n, 13 * n, Math[a("0x21")] / 2, 3 * Math.PI / 2), 
                        r.setFillStyle("#FFE8C1"), r.fill(), r[a("0x14")]("#FF8727"), r.setFontSize(14 * n), 
                        r.fillText("扫描或长按识别小程序查看", 27 * n, 430 * n)) : (r.setFillStyle("#FFE8C1"), r.moveTo(27 * n, 405 * n), 
                        r.lineTo(194 * n, 405 * n), r.arc(194 * n, 418 * n, 13 * n, 3 * Math.PI / 2, Math.PI / 2), 
                        r[a("0x19")](27 * n, 431 * n), r.arc(27 * n, 418 * n, 13 * n, Math.PI / 2, 3 * Math.PI / 2), 
                        r[a("0x14")]("#FFE8C1"), r.fill(), r.setFillStyle("#FF8727"), r.setFontSize(14 * n), 
                        r.fillText("扫描或长按识别小程序查看", 27 * n, 423 * n)), r.closePath(), r[a("0x10")](), r[a("0x1f")](c, 251 * n, 352 * n, 76 * n, 76 * n), 
                        r.arc(289 * n, 390 * n, 42 * n, 0, 2 * Math[a("0x21")]), r.setStrokeStyle("#D8D8D8"), 
                        r.stroke(), r.closePath(), r[a("0xd")](), t.abrupt(a("0xf"), new Promise(function(e) {
                            r.draw(!1, function() {
                                e();
                            });
                        }));

                      case 40:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        download: function() {
            var e = {
                userAvatar: wx.getStorageSync("userInfo") ? wx.getStorageSync("userInfo").avatarUrl : wx.getStorageSync("userAvatar"),
                posterBg: this[a("0x1b")].posterBg,
                qrcode: this[a("0x0")][a("0x13")]
            };
            console.log(a("0x6"), e);
            var t = {}, s = 0;
            return new Promise(function(n, o) {
                Object.keys(e)[a("0xc")](function(a) {
                    wx.downloadFile({
                        url: e[a],
                        success: function(e) {
                            t[a] = e.tempFilePath, 3 == ++s && n(t);
                        },
                        fail: function() {
                            o(a);
                        }
                    });
                });
            });
        },
        shareFriend: function() {
            this[a("0x3")]("shareFriend");
        },
        closePoster: function() {
            this.setData({
                modalType: ""
            }), this.triggerEvent("closePoster");
        },
        closeSave: function() {
            this[a("0xa")]({
                modalType: ""
            }), this.triggerEvent(a("0x1c"));
        }
    }
});
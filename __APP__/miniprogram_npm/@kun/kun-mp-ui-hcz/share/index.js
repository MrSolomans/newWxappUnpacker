var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../../../@babel/runtime/helpers/asyncToGenerator");

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
            value: "https://pimg1.4008000000.com/app_images/4008000000/m/Software/appAticle/bg_c.png"
        },
        sunUrl: {
            type: String,
            value: ""
        },
        shareText: {
            type: String,
            value: ""
        },
        sharePopText: {
            type: String,
            value: ""
        },
        posterText: {
            type: String,
            value: ""
        },
        isShareFriend: {
            type: Boolean,
            value: !0
        },
        needShareBgText: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        userAvatar: "",
        userName: "",
        posterPreviewImg: ""
    },
    observers: {
        modalType: function(e) {
            var t = this;
            if ("poster" === e) {
                wx.showLoading({
                    title: "正在生成...",
                    mask: !0
                });
                var a = this.draw();
                Promise.all([ a ]).then(function() {
                    wx.canvasToTempFilePath({
                        canvasId: "posterCanvas",
                        destWidth: 690,
                        destHeight: 892,
                        quality: 1,
                        success: function(e) {
                            t.setData({
                                posterPreviewImg: e.tempFilePath
                            }), wx.hideLoading();
                        },
                        fail: function(e) {
                            console.log(e), wx.hideLoading(), wx.showToast({
                                icon: "none",
                                title: "生成失败，请重试"
                            }), t.setData({
                                modalType: "share"
                            });
                        }
                    }, t);
                });
            }
        }
    },
    methods: {
        openPoster: function() {
            this.getUserInfo(), this.triggerEvent("openPoster");
        },
        getUserInfo: function() {
            var e = wx.getStorageSync("userInfo").nickName || "平安好车主", t = wx.getStorageSync("userInfo") ? wx.getStorageSync("userInfo").avatarUrl : wx.getStorageSync("userAvatar") || "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/mine/avatar.png";
            this.setData({
                userAvatar: t,
                userName: e
            });
        },
        savePoster: function() {
            var e = this;
            wx.showLoading({
                title: "正在保存",
                mask: !0
            });
            var t = this.data.posterPreviewImg;
            wx.saveImageToPhotosAlbum({
                filePath: t,
                success: function() {
                    wx.showToast({
                        title: "保存成功",
                        success: function() {
                            setTimeout(function() {
                                e.closeSave();
                            }, 800);
                        }
                    });
                },
                fail: function() {
                    wx.hideLoading(), wx.showModal({
                        content: "您点击了拒绝授权,将无法正常保存图片,点击确定重新获取授权",
                        success: function(e) {
                            e.confirm && wx.openSetting();
                        }
                    });
                }
            }), this.triggerEvent("savePoster");
        },
        draw: function() {
            var a = this;
            return t(e().mark(function t() {
                var r, s, o, n, i, l, c, h, u, g;
                return e().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = 1, e.next = 3, a.download();

                      case 3:
                        s = e.sent, o = wx.createCanvasContext("posterCanvas", a), n = s.userAvatar, i = s.posterBg, 
                        l = s.qrcode, c = a.data.userName, h = a.properties.posterText, o.setFillStyle("#FFFFFF"), 
                        o.fillRect(0, 0, 345 * r, 446 * r), o.drawImage(i, 0, 0, 345 * r, 334 * r), o.save(), 
                        o.beginPath(), o.arc(33 * r, 367 * r, 18 * r, 0, 2 * Math.PI), o.setStrokeStyle("#fff"), 
                        o.setLineWidth(1), o.stroke(), o.closePath(), o.clip(), o.drawImage(n, 14 * r, 349 * r, 37 * r, 37 * r), 
                        o.restore(), u = "", g = "";
                        try {
                            Object.keys(h).forEach(function(e) {
                                if (o.measureText(u).width < 120 ? u += h[e] : g += h[e], o.measureText(g).width > 100) throw g += "...", 
                                Error();
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            console.warn("文案已达显示上限");
                        }
                        return c.length > 11 && (c = c.substring(0, 10) + "..."), o.setFillStyle("#828A93"), 
                        o.setFontSize(14 * r), o.fillText(c, 56 * r, 362 * r), o.setFillStyle("#828A93"), 
                        o.setFontSize(14 * r), o.fillText(u, 56 * r, 381 * r), g ? (o.setFillStyle("#828A93"), 
                        o.setFontSize(14 * r), o.fillText(g, 56 * r, 401 * r), o.beginPath(), o.setFillStyle("#FFE8C1"), 
                        o.moveTo(27 * r, 412 * r), o.lineTo(194 * r, 412 * r), o.arc(194 * r, 425 * r, 13 * r, 3 * Math.PI / 2, Math.PI / 2), 
                        o.lineTo(27 * r, 438 * r), o.arc(27 * r, 425 * r, 13 * r, Math.PI / 2, 3 * Math.PI / 2), 
                        o.closePath(), o.fill(), o.setFillStyle("#FF8727"), o.setFontSize(14 * r), o.fillText("扫描或长按识别小程序查看", 27 * r, 430 * r)) : (o.beginPath(), 
                        o.setFillStyle("#FFE8C1"), o.moveTo(27 * r, 405 * r), o.lineTo(194 * r, 405 * r), 
                        o.arc(194 * r, 418 * r, 13 * r, 3 * Math.PI / 2, Math.PI / 2), o.lineTo(27 * r, 431 * r), 
                        o.arc(27 * r, 418 * r, 13 * r, Math.PI / 2, 3 * Math.PI / 2), o.closePath(), o.fill(), 
                        o.setFillStyle("#FF8727"), o.setFontSize(14 * r), o.fillText("扫描或长按识别小程序查看", 27 * r, 423 * r)), 
                        o.beginPath(), o.drawImage(l, 251 * r, 352 * r, 76 * r, 76 * r), o.arc(289 * r, 390 * r, 42 * r, 0, 2 * Math.PI), 
                        o.setStrokeStyle("#D8D8D8"), o.stroke(), o.closePath(), o.clip(), e.abrupt("return", new Promise(function(e) {
                            o.draw(!1, function() {
                                e();
                            });
                        }));

                      case 40:
                      case "end":
                        return e.stop();
                    }
                }, t);
            }))();
        },
        download: function() {
            var e = {
                userAvatar: this.data.userAvatar,
                posterBg: this.properties.posterBg,
                qrcode: this.properties.sunUrl
            };
            console.log("imgs", e);
            var t = {}, a = 0;
            return new Promise(function(r, s) {
                Object.keys(e).forEach(function(o) {
                    wx.downloadFile({
                        url: e[o],
                        success: function(e) {
                            t[o] = e.tempFilePath, 3 == ++a && r(t);
                        },
                        fail: function() {
                            s(o);
                        }
                    });
                });
            });
        },
        shareFriend: function() {
            this.triggerEvent("shareFriend");
        },
        closePoster: function() {
            this.setData({
                modalType: ""
            }), this.triggerEvent("closePoster");
        },
        closeSave: function() {
            this.setData({
                modalType: ""
            }), this.triggerEvent("closeSave");
        }
    }
});
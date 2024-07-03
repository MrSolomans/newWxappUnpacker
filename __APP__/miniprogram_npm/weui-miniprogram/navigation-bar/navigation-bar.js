module.exports = require("../_commons/0.js")([ {
    ids: [ 17 ],
    modules: {
        3: function(t, e, a) {
            t.exports = a(58);
        },
        58: function(t, e) {
            Component({
                options: {
                    multipleSlots: !0,
                    addGlobalClass: !0
                },
                properties: {
                    extClass: {
                        type: String,
                        value: ""
                    },
                    title: {
                        type: String,
                        value: ""
                    },
                    background: {
                        type: String,
                        value: ""
                    },
                    color: {
                        type: String,
                        value: ""
                    },
                    back: {
                        type: Boolean,
                        value: !0
                    },
                    loading: {
                        type: Boolean,
                        value: !1
                    },
                    animated: {
                        type: Boolean,
                        value: !0
                    },
                    show: {
                        type: Boolean,
                        value: !0,
                        observer: "_showChange"
                    },
                    delta: {
                        type: Number,
                        value: 1
                    }
                },
                data: {
                    displayStyle: ""
                },
                attached: function() {
                    var t = this, e = !!wx.getMenuButtonBoundingClientRect, a = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
                    wx.getSystemInfo({
                        success: function(n) {
                            var i = !!(n.system.toLowerCase().search("ios") + 1);
                            t.setData({
                                ios: i,
                                statusBarHeight: n.statusBarHeight,
                                innerWidth: e ? "width:".concat(a.left, "px") : "",
                                innerPaddingRight: e ? "padding-right:".concat(n.windowWidth - a.left, "px") : "",
                                leftWidth: e ? "width:".concat(n.windowWidth - a.left, "px") : ""
                            });
                        }
                    });
                },
                methods: {
                    _showChange: function(t) {
                        var e = "";
                        e = this.data.animated ? "opacity: ".concat(t ? "1" : "0", ";-webkit-transition:opacity 0.5s;transition:opacity 0.5s;") : "display: ".concat(t ? "" : "none"), 
                        this.setData({
                            displayStyle: e
                        });
                    },
                    back: function() {
                        var t = this.data;
                        t.delta && wx.navigateBack({
                            delta: t.delta
                        }), this.triggerEvent("back", {
                            delta: t.delta
                        }, {});
                    }
                }
            });
        }
    },
    entries: [ [ 3, 0 ] ]
} ]);
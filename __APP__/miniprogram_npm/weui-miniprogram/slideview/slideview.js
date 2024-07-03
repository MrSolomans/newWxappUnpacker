module.exports = require("../_commons/0.js")([ {
    ids: [ 19 ],
    modules: {
        13: function(t, e, n) {
            t.exports = n(134);
        },
        134: function(t, e) {
            Component({
                options: {
                    addGlobalClass: !0,
                    multipleSlots: !0
                },
                properties: {
                    extClass: {
                        type: String,
                        value: ""
                    },
                    buttons: {
                        type: Array,
                        value: [],
                        observer: function() {
                            this.addClassNameForButton();
                        }
                    },
                    disable: {
                        type: Boolean,
                        value: !1
                    },
                    icon: {
                        type: Boolean,
                        value: !1
                    },
                    show: {
                        type: Boolean,
                        value: !1
                    },
                    duration: {
                        type: Number,
                        value: 350
                    },
                    throttle: {
                        type: Number,
                        value: 40
                    },
                    rebounce: {
                        type: Number,
                        value: 0
                    }
                },
                data: {
                    size: null
                },
                ready: function() {
                    this.updateRight(), this.addClassNameForButton();
                },
                methods: {
                    updateRight: function() {
                        var t = this, e = this.data;
                        wx.createSelectorQuery().in(this).select(".left").boundingClientRect(function(n) {
                            wx.createSelectorQuery().in(t).selectAll(".btn").boundingClientRect(function(o) {
                                t.setData({
                                    size: {
                                        buttons: o,
                                        button: n,
                                        show: e.show,
                                        disable: e.disable,
                                        throttle: e.throttle,
                                        rebounce: e.rebounce
                                    }
                                });
                            }).exec();
                        }).exec();
                    },
                    addClassNameForButton: function() {
                        var t = this.data, e = t.buttons, n = t.icon;
                        e.forEach(function(t) {
                            n ? t.className = "" : "warn" === t.type ? t.className = "weui-slideview__btn-group_warn" : t.className = "weui-slideview__btn-group_default";
                        }), this.setData({
                            buttons: e
                        });
                    },
                    buttonTapByWxs: function(t) {
                        this.triggerEvent("buttontap", t, {});
                    },
                    hide: function() {
                        this.triggerEvent("hide", {}, {});
                    },
                    show: function() {
                        this.triggerEvent("show", {}, {});
                    },
                    transitionEnd: function() {}
                }
            });
        }
    },
    entries: [ [ 13, 0 ] ]
} ]);
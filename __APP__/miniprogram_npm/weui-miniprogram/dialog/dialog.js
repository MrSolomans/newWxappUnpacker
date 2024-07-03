module.exports = require("../_commons/0.js")([ {
    ids: [ 7 ],
    modules: {
        15: function(t, e, a) {
            t.exports = a(150);
        },
        150: function(t, e) {
            Component({
                options: {
                    virtualHost: !0,
                    multipleSlots: !0,
                    addGlobalClass: !0
                },
                properties: {
                    title: {
                        type: String,
                        value: ""
                    },
                    extClass: {
                        type: String,
                        value: ""
                    },
                    maskClosable: {
                        type: Boolean,
                        value: !0
                    },
                    mask: {
                        type: Boolean,
                        value: !0
                    },
                    show: {
                        type: Boolean,
                        value: !1,
                        observer: "_showChange"
                    },
                    buttons: {
                        type: Array,
                        value: []
                    }
                },
                data: {
                    wrapperShow: !1,
                    innerShow: !1
                },
                ready: function() {
                    var t = this.data.buttons, e = t.length;
                    t.forEach(function(t, a) {
                        t.className = 1 === e ? "weui-dialog__btn_primary" : 0 === a ? "weui-dialog__btn_default" : "weui-dialog__btn_primary";
                    }), this.setData({
                        buttons: t
                    }), this._showChange(this.data.show);
                },
                methods: {
                    _showChange: function(t) {
                        var e = this;
                        t ? this.setData({
                            wrapperShow: !0,
                            innerShow: !0
                        }) : (this.setData({
                            innerShow: !1
                        }), setTimeout(function() {
                            e.setData({
                                wrapperShow: !1
                            });
                        }, 300));
                    },
                    buttonTap: function(t) {
                        var e = t.currentTarget.dataset.index;
                        this.triggerEvent("buttontap", {
                            index: e,
                            item: this.data.buttons[e]
                        }, {});
                    },
                    close: function() {
                        this.data.maskClosable && (this.setData({
                            show: !1
                        }), this.triggerEvent("close", {}, {}));
                    },
                    stopEvent: function() {}
                }
            });
        }
    },
    entries: [ [ 15, 0 ] ]
} ]);
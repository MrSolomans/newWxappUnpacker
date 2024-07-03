module.exports = require("../_commons/0.js")([ {
    ids: [ 1 ],
    modules: {
        1: function(e, t, a) {
            e.exports = a(42);
        },
        42: function(e, t) {
            Component({
                options: {
                    multipleSlots: !0,
                    addGlobalClass: !0
                },
                properties: {
                    title: {
                        type: String,
                        value: ""
                    },
                    showCancel: {
                        type: Boolean,
                        value: !0
                    },
                    cancelText: {
                        type: String,
                        value: "取消"
                    },
                    maskClass: {
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
                    actions: {
                        type: Array,
                        value: [],
                        observer: "_groupChange"
                    }
                },
                data: {
                    wrapperShow: !1,
                    innerShow: !1
                },
                lifetimes: {
                    ready: function() {
                        this._showChange(this.data.show);
                    }
                },
                methods: {
                    _showChange: function(e) {
                        var t = this;
                        e ? this.setData({
                            wrapperShow: !0,
                            innerShow: !0
                        }) : (this.setData({
                            innerShow: !1
                        }), setTimeout(function() {
                            t.setData({
                                wrapperShow: !1
                            });
                        }, 300));
                    },
                    _groupChange: function(e) {
                        e.length > 0 && "string" != typeof e[0] && !(e[0] instanceof Array) && this.setData({
                            actions: [ this.data.actions ]
                        });
                    },
                    buttonTap: function(e) {
                        var t = e.currentTarget.dataset, a = t.value, o = t.groupindex, s = t.index;
                        this.triggerEvent("actiontap", {
                            value: a,
                            groupindex: o,
                            index: s
                        });
                    },
                    closeActionSheet: function(e) {
                        var t = e.currentTarget.dataset.type;
                        (this.data.maskClosable || t) && (this.setData({
                            show: !1
                        }), this.triggerEvent("close"));
                    }
                }
            });
        }
    },
    entries: [ [ 1, 0 ] ]
} ]);
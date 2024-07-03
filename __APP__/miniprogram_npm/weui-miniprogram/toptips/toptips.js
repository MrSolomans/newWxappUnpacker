module.exports = require("../_commons/0.js")([ {
    ids: [ 21 ],
    modules: {
        8: function(t, e, s) {
            t.exports = s(94);
        },
        94: function(t, e) {
            var s = {
                warn: "weui-toptips_warn",
                info: "weui-toptips_info",
                success: "weui-toptips_success",
                error: "weui-toptips_error"
            };
            Component({
                options: {
                    addGlobalClass: !0
                },
                properties: {
                    type: {
                        type: String,
                        value: "error",
                        observer: "_typeChange"
                    },
                    show: {
                        type: Boolean,
                        value: !1,
                        observer: "_showChange"
                    },
                    msg: {
                        type: String,
                        value: ""
                    },
                    delay: {
                        type: Number,
                        value: 2e3
                    },
                    extClass: {
                        type: String,
                        value: ""
                    }
                },
                data: {
                    wrapperShow: !1,
                    innerShow: !1
                },
                lifetimes: {
                    ready: function() {
                        this._showChange(this.data.show);
                    },
                    attached: function() {
                        this._typeChange(this.data.type);
                    }
                },
                methods: {
                    _typeChange: function(t) {
                        this.setData({
                            className: s[t] || ""
                        });
                    },
                    _showChange: function(t) {
                        t ? this._showToptips() : this._hideToptips();
                    },
                    _showToptips: function() {
                        var t = this;
                        this.data.delay && setTimeout(function() {
                            t._hideToptips(), t.setData({
                                show: !1
                            }, function() {
                                t.triggerEvent("hide", {}, {});
                            });
                        }, this.data.delay), this.setData({
                            wrapperShow: !0,
                            innerShow: !0
                        });
                    },
                    _hideToptips: function() {
                        var t = this;
                        this.data.innerShow && (this.setData({
                            innerShow: !1
                        }), setTimeout(function() {
                            t.setData({
                                wrapperShow: !1
                            });
                        }, 300));
                    }
                }
            });
        }
    },
    entries: [ [ 8, 0 ] ]
} ]);
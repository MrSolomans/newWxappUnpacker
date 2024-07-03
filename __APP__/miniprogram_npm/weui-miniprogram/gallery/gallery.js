module.exports = require("../_commons/0.js")([ {
    ids: [ 10 ],
    modules: {
        166: function(e, t) {
            Component({
                options: {
                    addGlobalClass: !0
                },
                properties: {
                    imgUrls: {
                        type: Array,
                        value: [],
                        observer: function(e) {
                            this.setData({
                                currentImgs: e
                            });
                        }
                    },
                    showDelete: {
                        type: Boolean,
                        value: !0
                    },
                    show: {
                        type: Boolean,
                        value: !0,
                        observer: "_showChange"
                    },
                    current: {
                        type: Number,
                        value: 0
                    },
                    hideOnClick: {
                        type: Boolean,
                        value: !0
                    },
                    extClass: {
                        type: String,
                        value: ""
                    }
                },
                data: {
                    wrapperShow: !1,
                    innerShow: !1,
                    currentImgs: []
                },
                ready: function() {
                    this._showChange(this.data.show);
                    var e = this.data;
                    this.setData({
                        currentImgs: e.imgUrls
                    });
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
                    change: function(e) {
                        this.setData({
                            current: e.detail.current
                        }), this.triggerEvent("change", {
                            current: e.detail.current
                        }, {});
                    },
                    deleteImg: function() {
                        var e = this.data, t = e.currentImgs, r = t.splice(e.current, 1);
                        this.triggerEvent("delete", {
                            url: r[0],
                            index: e.current
                        }, {}), 0 !== t.length ? this.setData({
                            current: 0,
                            currentImgs: t
                        }) : this.hideGallery();
                    },
                    hideGallery: function() {
                        this.data.hideOnClick && (this.setData({
                            show: !1
                        }), this.triggerEvent("hide", {}, {}));
                    }
                }
            });
        },
        17: function(e, t, r) {
            e.exports = r(166);
        }
    },
    entries: [ [ 17, 0 ] ]
} ]);
module.exports = require("../_commons/0.js")([ {
    ids: [ 18 ],
    modules: {
        198: function(t, e) {
            Component({
                options: {
                    addGlobalClass: !0,
                    writeIdToDOM: !0
                },
                properties: {
                    extClass: {
                        type: String,
                        value: ""
                    },
                    focus: {
                        type: Boolean,
                        value: !1
                    },
                    placeholder: {
                        type: String,
                        value: "搜索"
                    },
                    value: {
                        type: String,
                        value: "",
                        observer: "valueChange"
                    },
                    search: {
                        type: null,
                        value: null
                    },
                    throttle: {
                        type: Number,
                        value: 500
                    },
                    cancelText: {
                        type: String,
                        value: "取消"
                    },
                    cancel: {
                        type: Boolean,
                        value: !0
                    }
                },
                data: {
                    result: []
                },
                lastSearch: Date.now(),
                lifetimes: {
                    attached: function() {
                        this.data.focus && this.setData({
                            searchState: !0
                        });
                    }
                },
                methods: {
                    valueChange: function() {
                        this.data.value && this.setData({
                            searchState: !0
                        });
                    },
                    clearInput: function() {
                        this.setData({
                            value: "",
                            focus: !1,
                            result: []
                        }), this.triggerEvent("clear");
                    },
                    inputFocus: function(t) {
                        this.triggerEvent("focus", t.detail);
                    },
                    inputBlur: function(t) {
                        this.setData({
                            focus: !1
                        }), this.triggerEvent("blur", t.detail);
                    },
                    showInput: function() {
                        this.setData({
                            focus: !0,
                            searchState: !0
                        });
                    },
                    hideInput: function() {
                        this.setData({
                            searchState: !1
                        }), this.triggerEvent("cancel");
                    },
                    inputChange: function(t) {
                        var e = this;
                        this.setData({
                            value: t.detail.value
                        }), this.triggerEvent("input", t.detail), Date.now() - this.lastSearch < this.data.throttle || "function" == typeof this.data.search && (this.lastSearch = Date.now(), 
                        this.timerId = setTimeout(function() {
                            e.data.search(e.data.value).then(function(t) {
                                e.setData({
                                    result: t
                                });
                            }).catch(function(t) {
                                console.error("search error", t);
                            });
                        }, this.data.throttle));
                    },
                    selectResult: function(t) {
                        var e = t.currentTarget.dataset.index, a = this.data.result[e];
                        this.triggerEvent("selectresult", {
                            index: e,
                            item: a
                        });
                    }
                }
            });
        },
        21: function(t, e, a) {
            t.exports = a(198);
        }
    },
    entries: [ [ 21, 0 ] ]
} ]);
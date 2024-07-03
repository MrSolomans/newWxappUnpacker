module.exports = require("../_commons/0.js")([ {
    ids: [ 20 ],
    modules: {
        10: function(e, t, r) {
            e.exports = r(110);
        },
        110: function(e, t) {
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
                    list: {
                        type: Array,
                        value: []
                    },
                    current: {
                        type: Number,
                        value: 0
                    },
                    reactive: {
                        type: Boolean,
                        value: !0
                    }
                },
                methods: {
                    tabChange: function(e) {
                        var t = e.currentTarget.dataset.index;
                        t !== this.data.current && (this.setData({
                            current: t
                        }), this.triggerEvent("change", {
                            index: t,
                            item: this.data.list[t]
                        }));
                    }
                }
            });
        }
    },
    entries: [ [ 10, 0 ] ]
} ]);
module.exports = require("../_commons/0.js")([ {
    ids: [ 6 ],
    modules: {
        182: function(t, e) {
            Component({
                options: {
                    addGlobalClass: !0,
                    multipleSlots: !0
                },
                properties: {
                    multi: {
                        type: Boolean,
                        value: !0
                    },
                    checked: {
                        type: Boolean,
                        value: !1
                    },
                    value: {
                        type: String,
                        value: ""
                    },
                    label: {
                        type: String,
                        value: "label"
                    },
                    extClass: {
                        type: String,
                        value: ""
                    },
                    disabled: {
                        type: Boolean,
                        value: !1
                    }
                },
                data: {},
                relations: {
                    "../checkbox-group/checkbox-group": {
                        type: "ancestor",
                        linked: function(t) {
                            this.data.group = t;
                        },
                        unlinked: function() {
                            this.data.group = null;
                        }
                    }
                },
                methods: {
                    setMulti: function(t) {
                        this.setData({
                            multi: t
                        });
                    },
                    setOuterClass: function(t) {
                        this.setData({
                            outerClass: t
                        });
                    },
                    checkedChange: function() {
                        if (!this.data.disabled) {
                            if (this.data.multi) {
                                var t = !this.data.checked;
                                this.setData({
                                    checked: t
                                }), this.data.group && this.data.group.checkedChange(t, this);
                            } else {
                                var e = this.data.checked;
                                if (e) return;
                                this.setData({
                                    checked: !0
                                }), this.data.group && this.data.group.checkedChange(e, this);
                            }
                            this.triggerEvent("change", {
                                value: this.data.value,
                                checked: this.data.checked
                            });
                        }
                    }
                }
            });
        },
        19: function(t, e, a) {
            t.exports = a(182);
        }
    },
    entries: [ [ 19, 0 ] ]
} ]);
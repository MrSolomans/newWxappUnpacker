module.exports = require("../_commons/0.js")([ {
    ids: [ 11 ],
    modules: {
        174: function(e, t) {
            var n = {
                target: "self",
                url: "",
                openType: "navigate",
                delta: 1,
                appId: "",
                path: "",
                extraData: "",
                version: "release",
                hoverClass: "navigator-hover",
                hoverStopPropagation: !1,
                hoverStartTime: 50,
                hoverStayTime: 600,
                bindsuccess: function() {},
                bindfail: function() {},
                bindcomplete: function() {}
            };
            Component({
                options: {
                    addGlobalClass: !0,
                    pureDataPattern: /^_/
                },
                properties: {
                    extClass: {
                        type: String,
                        value: ""
                    },
                    grids: {
                        type: Array,
                        value: [],
                        observer: "_onGridsChange"
                    }
                },
                data: {
                    innerGrids: []
                },
                ready: function() {},
                methods: {
                    _onGridsChange: function(e) {
                        e && this.setData({
                            innerGrids: e.map(function(e) {
                                return Object.assign({}, n, e);
                            })
                        });
                    }
                }
            });
        },
        18: function(e, t, n) {
            e.exports = n(174);
        }
    },
    entries: [ [ 18, 0 ] ]
} ]);
var e, t = require("../../../../@babel/runtime/helpers/defineProperty"), a = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../../../@babel/runtime/helpers/asyncToGenerator");

Component({
    properties: {
        lineNumber: {
            type: Number,
            value: 2
        },
        scrollHeight: {
            type: Number,
            value: 500
        },
        addNewData: {
            type: Array,
            value: []
        },
        itemWidth: {
            type: Number,
            value: 100
        },
        isShowTitle: {
            type: Boolean,
            value: !1
        },
        isShowAuthor: {
            type: Boolean,
            value: !1
        },
        isVideoLoading: {
            type: Boolean,
            value: !1
        },
        isPageBottom: {
            type: Boolean,
            value: !1
        },
        styleMode: {
            type: String,
            value: ""
        }
    },
    observers: {
        addNewData: (e = r(a().mark(function e(t) {
            var r;
            return a().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (console.log("监听到从父组件传入的新增数据", t), Array.isArray(t) && 0 !== t.length) {
                        e.next = 4;
                        break;
                    }
                    return console.warn("瀑布流渲染数据错误:要求数组类型且不为空"), e.abrupt("return");

                  case 4:
                    r = 0;

                  case 5:
                    if (!(r < t.length)) {
                        e.next = 11;
                        break;
                    }
                    return e.next = 8, this.renderNewData(t, r);

                  case 8:
                    r++, e.next = 5;
                    break;

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(t) {
            return e.apply(this, arguments);
        }),
        lineNumber: function(e) {
            console.log("监听到从父组件传入的列数", e), this.init(e);
        }
    },
    data: {
        newWaterfallData: []
    },
    ready: function() {},
    methods: {
        init: function(e) {
            var t = [];
            t.length = e || this.properties.lineNumber, t = Array.from(t), this.setData({
                newWaterfallData: t.map(function() {
                    return [];
                })
            }), console.log("newWaterfallData初始值，二维数组：", this.data.newWaterfallData), this.triggerEvent("reachBottom");
        },
        reachBottom: function() {
            console.log("触发了子组件内部的reachBottom"), this.triggerEvent("reachBottom");
        },
        renderNewData: function(e, a) {
            var r = this, n = this.createSelectorQuery();
            return this.data.newWaterfallData.forEach(function(e, t) {
                n.select(".lineClass".concat(t, "-").concat(e.length - 1)).boundingClientRect();
            }), n.selectViewport().scrollOffset(), new Promise(function(i, l) {
                n.exec(function(n) {
                    if (n) {
                        for (var o = [], s = 0; s < r.data.newWaterfallData.length; s++) {
                            if (!n[s]) return r.setData(t({}, "newWaterfallData[" + s + "][" + r.data.newWaterfallData[s].length + "]", e[a])), 
                            void i();
                            o.push(n[s].top);
                        }
                        if (o.length < r.data.newWaterfallData.length) i(); else {
                            var u = Math.min.apply(Math, o), c = o.findIndex(function(e) {
                                return u === e;
                            }), h = r.data.newWaterfallData[c].length;
                            r.setData(t({}, "newWaterfallData[" + c + "][" + h + "]", e[a]), function() {
                                i();
                            });
                        }
                    } else l();
                });
            });
        },
        videoCoverLoad: function(e) {
            var a = e.currentTarget.dataset.lineidx, r = e.currentTarget.dataset.rowidx;
            e.detail.width / e.detail.height > 1 && this.setData(t({}, "newWaterfallData[" + a + "][" + r + "].imgResize", e.detail.width / e.detail.height + .05));
        },
        clickItem: function(e) {
            var t = e.currentTarget.dataset.item;
            this.triggerEvent("clickItem", t);
        }
    },
    pageLifetimes: {
        show: function() {}
    }
});
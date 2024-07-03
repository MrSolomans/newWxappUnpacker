var t, o, e = [ "accreditWindow", "prop", "use strict", "运营弹窗组件", "updatePage", "detail", "find" ];

t = e, o = 150, function(o) {
    for (;--o; ) t.push(t.shift());
}(++o);

var r = function(t, o) {
    return e[t -= 0];
};

r("0x6"), Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.windowManageMixins = exports.windowManage = void 0;

var i = {
    data: {
        windowList: [ {
            name: "个人信息",
            prop: "accreditWindow",
            sort: 1
        }, {
            name: "会员礼包",
            prop: "memberAlert",
            sort: 2
        }, {
            name: r("0x0"),
            prop: "showAlert",
            sort: 3
        } ],
        currentWindow: {
            prop: "",
            sort: 0
        },
        bubbleList: [ {
            name: "引导关注公众号",
            prop: "guideFollow",
            sort: 1
        }, {
            name: "\b新人有礼",
            prop: "bottomBubble",
            sort: 2
        } ],
        currentBubble: {
            prop: "",
            sort: 0
        },
        isGetLocation: !1
    },
    methods: {
        windowManage: function(t) {
            var o = this, e = this.data, i = e.currentWindow, n = e.windowList, a = i[r("0x5")], s = i.sort, u = (t && t.detail ? t[r("0x2")] : {}).refreshPage;
            if (void 0 !== u && u && this[r("0x1")](), a !== r("0x4") || this.data.isGetLocation) {
                var d = s + 1;
                if (!(d > n.length)) {
                    var p = (n[r("0x3")](function(t) {
                        return t.sort === d;
                    }) || {})[r("0x5")], c = void 0 === p ? "" : p;
                    c && setTimeout(function() {
                        o.setData({
                            currentWindow: {
                                sort: d,
                                prop: c
                            }
                        });
                    }, 300);
                }
            } else this.setData({
                isGetLocation: !0
            });
        },
        bubbleManage: function(t) {
            var o = this, e = (t && t[r("0x2")] ? t.detail : {}).isShowGuideFollow, i = void 0 !== e && e, n = this.data, a = n.currentBubble, s = n.bubbleList, u = a.sort;
            if (!i) {
                var d = u + 1;
                if (!(d > s.length)) {
                    var p = (s[r("0x3")](function(t) {
                        return t.sort === d;
                    }) || {}).prop, c = void 0 === p ? "" : p;
                    c && setTimeout(function() {
                        o.setData({
                            currentBubble: {
                                sort: d,
                                prop: c
                            }
                        });
                    }, 300);
                }
            }
        }
    }
};

exports.windowManageMixins = i;

var n = Behavior(i);

exports.windowManage = n;
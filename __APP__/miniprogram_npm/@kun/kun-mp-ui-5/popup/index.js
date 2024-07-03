var t = require("../../../../@babel/runtime/helpers/objectSpread2"), e = n(require("../behaviors/zIndex")), o = n(require("../behaviors/validator"));

function n(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Component({
    behaviors: [ e.default, o.default ],
    externalClasses: [ "k-bg-class", "k-panel-class", "k-class" ],
    properties: {
        show: {
            type: Boolean,
            value: !0
        },
        animation: {
            type: Boolean,
            value: !1
        },
        transition: {
            type: Boolean,
            value: null
        },
        direction: {
            type: String,
            value: null,
            options: [ "top", "right", "left", "bottom", "center" ]
        }
    },
    lifetimes: {
        attached: function() {
            this._init();
        }
    },
    pageLifetimes: {
        show: function() {
            this._init();
        }
    },
    data: {
        status: "show"
    },
    methods: {
        _init: function() {
            var e = this;
            wx.kun = wx.kun || {}, wx.kun.showPopup = function(o) {
                var n = t({}, o), i = n.zIndex, a = void 0 === i ? 99 : i, s = n.animation, u = void 0 === s || s, r = n.contentAlign, h = void 0 === r ? "center" : r, l = n.locked, d = void 0 !== l && l;
                e.setData({
                    zIndex: a,
                    animation: u,
                    contentAlign: h,
                    locked: d,
                    show: !0
                });
            }, wx.kun.hidePopup = function() {
                e.setData({
                    status: "hide"
                }), setTimeout(function() {
                    e.setData({
                        show: !1
                    });
                }, 300);
            };
        },
        doNothingMove: function() {
            return !1;
        },
        doNothingTap: function() {},
        onPopupTap: function() {
            var t = this;
            !0 !== this.data.locked && (this.data.show ? (this.setData({
                status: "hide"
            }), setTimeout(function() {
                t.setData({
                    show: !1,
                    status: "show"
                });
            }, 300)) : this.setData({
                show: !0,
                status: "show"
            })), this.triggerEvent("kuntap", !0, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});
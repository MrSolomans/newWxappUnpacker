var t = n(require("../behaviors/computeOffset")), e = n(require("../behaviors/zIndex")), a = n(require("../behaviors/montior")), i = n(require("../behaviors/detect"));

function n(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = getApp(), s = function(t) {
    return o.getRequestUrl("/cps/hcz-miniprogram/images/kun/toast/".concat(t), "hczStatic");
};

Component({
    behaviors: [ t.default, e.default, a.default, i.default ],
    externalClasses: [ "k-bg-class", "k-icon-class", "k-class", "k-image-class", "k-title-class " ],
    properties: {
        location: {
            type: String,
            value: "center"
        },
        show: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: "none"
        },
        customizeIcon: {
            type: String,
            value: ""
        },
        head: {
            type: String,
            value: ""
        },
        duration: {
            type: Number,
            value: 0
        },
        zIndex: {
            type: Number,
            value: 999
        },
        mask: {
            type: Boolean,
            value: !1
        },
        button: {
            type: Object,
            value: {
                text: "",
                bgColor: "",
                fontColor: ""
            }
        },
        them: {
            type: String,
            value: "hcz-them",
            option: [ "hcz-them", "hbs-them", "qyb-them", "yh-them", "hsh-them", "cbw-them" ]
        },
        width: {
            type: Number,
            value: 0
        },
        className: {
            type: String
        }
    },
    data: {
        componentId: "PACX_TOAST",
        componentName: "轻提示",
        iconList: [ {
            type: "success",
            fontName: "toast-complete"
        }, {
            type: "error",
            fontName: "toast-fail"
        }, {
            type: "loading",
            url: s("cx-toast-refresh@3x.png")
        }, {
            type: "warning",
            fontName: "toast-warn"
        }, {
            type: "abnormal",
            fontName: "toast-abnormal"
        } ],
        closeUrl: s("close-toast.png"),
        iconUrl: "",
        iconName: "",
        status: !1,
        transition: !1,
        timer: ""
    },
    methods: {
        btnEvent: function() {
            this.triggerEvent("click");
        },
        closeToast: function() {
            var t = this;
            this.setData({
                transition: !1
            }), setTimeout(function() {
                t.setData({
                    status: !1,
                    iconUrl: "",
                    iconName: ""
                });
            }, 200), clearTimeout(this.data.timer), this.data.timer = "", this.triggerEvent("close");
        }
    },
    observers: {
        icon: function(t) {
            if (t) {
                var e = this.data.iconList.find(function(e) {
                    return e.type === t;
                });
                e && (e.url && this.setData({
                    iconUrl: e.url
                }), e.fontName && this.setData({
                    iconName: e.fontName
                }));
            }
        },
        show: function(t) {
            var e = this;
            t && (clearTimeout(this.data.timer), this.setData({
                status: !0,
                timer: ""
            }), setTimeout(function() {
                e.setData({
                    transition: t
                });
            }, 200)), this.triggerEvent("open");
        },
        status: function(t) {
            var e = this, a = this.data.duration;
            t && a && 0 !== a && (this.data.timer = setTimeout(function() {
                e.setData({
                    transition: !1
                }), setTimeout(function() {
                    e.setData({
                        status: !1,
                        iconUrl: "",
                        iconName: ""
                    }), e.triggerEvent("close");
                }, 200);
            }, a));
        }
    },
    attached: function() {},
    pageLifetimes: {
        show: function() {}
    }
});
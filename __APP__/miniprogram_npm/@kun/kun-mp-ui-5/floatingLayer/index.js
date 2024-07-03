Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        list: {
            type: Array,
            value: [ {
                text: String,
                icon: String,
                textColor: String
            } ]
        },
        listKey: {
            type: String,
            value: "text"
        },
        selectColor: {
            type: String,
            value: ""
        },
        tips: {
            type: String,
            value: ""
        },
        emptyText: {
            type: String,
            value: ""
        },
        btnText: {
            type: String,
            value: "取消"
        },
        them: {
            type: String,
            value: "hcz-them",
            option: [ "hcz-them", "hbs-them", "qyb-them", "yh-them", "hsh-them", "cbw-them" ]
        },
        selectIndex: {
            type: Number,
            value: 0
        }
    },
    data: {
        status: !1,
        transition: !1,
        selectedIcon: "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/icon/selected-layer.png"
    },
    methods: {
        selectEvent: function(t) {
            var e = this, i = t.currentTarget.dataset, n = i.item, s = i.index;
            this.setData({
                selectIndex: s
            }), this.triggerEvent("select", {
                item: n,
                index: s
            }), setTimeout(function() {
                e.closeFloat();
            }, 400);
        },
        closeFloat: function() {
            this.setData({
                show: !1,
                transition: !1
            }), this.triggerEvent("close");
        }
    },
    observers: {
        show: function(t) {
            var e = this;
            t && setTimeout(function() {
                e.setData({
                    transition: !0
                }), e.triggerEvent("open");
            }, 50);
        }
    }
});
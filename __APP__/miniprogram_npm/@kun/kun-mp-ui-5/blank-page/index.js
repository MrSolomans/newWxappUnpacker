var t = 0 === getApp().globalData.environment ? "https://test-hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/kun/blank" : "https://hcz-static.pingan.com.cn/cps/hcz-miniprogram/images/kun/blank";

Component({
    data: {
        imgOrigin: t,
        type: ""
    },
    properties: {
        type: {
            type: String,
            value: "no_car"
        },
        title: {
            type: String,
            value: "页面未发现"
        },
        btnMain: {
            type: String,
            value: "主要操作"
        },
        btnSecondary: {
            type: String,
            value: "次要操作"
        },
        useSlotBtn: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        triggerMain: function() {
            this.triggerEvent("mainEvent");
        },
        triggerSecondary: function() {
            this.triggerEvent("secondaryEvent");
        },
        triggerUseBtn: function() {
            this.triggerEvent("useEvent");
        }
    }
});
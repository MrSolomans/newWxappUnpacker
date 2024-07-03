var e = n(require("../behaviors/montior")), t = n(require("../behaviors/detect"));

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    externalClasses: [ "k-button-class", "outline-class" ],
    options: {
        multipleSlots: !0
    },
    behaviors: [ t.default, e.default ],
    data: {
        componentId: "PACX_BUTTON",
        componentName: "按钮"
    },
    properties: {
        them: {
            type: String,
            value: "hcz-them"
        },
        name: {
            type: String,
            value: "KUN"
        },
        size: {
            type: String,
            value: "",
            option: [ "normal", "large", "small", "tiny" ]
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        outline: {
            type: Boolean,
            value: !1
        },
        type: {
            type: String,
            value: "",
            option: [ "default", "gray", "warning", "loading", "black" ]
        },
        loading: {
            type: Boolean,
            value: !1
        },
        iconName: {
            type: String
        },
        iconSize: {
            type: Number
        },
        distance: {
            type: Boolean,
            value: !1
        },
        className: {
            type: String
        },
        openType: String,
        width: Number,
        height: Number,
        color: String,
        background: String,
        outlineColor: String
    },
    methods: {
        handleTap: function() {
            if (this.data.disabled) return !1;
            this.triggerEvent("kun-tap", {
                e: 1
            }, {});
        },
        openTypeEvent: function(e) {
            this.triggerEvent(e.type, e.detail, {});
        }
    }
});
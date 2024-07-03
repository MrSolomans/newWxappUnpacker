var e = n(require("../behaviors/validator")), t = n(require("../behaviors/detect")), o = n(require("../behaviors/montior")), a = n(require("../common/componentMap"));

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    externalClasses: [ "k-class", "k-select-class", "k-image-class" ],
    behaviors: [ e.default, o.default, t.default ],
    properties: {
        name: String,
        cell: Object,
        type: {
            type: String,
            value: "touch",
            options: [ "reading", "touch" ]
        },
        bgColor: {
            type: String,
            value: "#FF6300"
        },
        fontColor: {
            type: String,
            value: "#FFF"
        },
        borderColor: {
            type: String,
            value: "#FFF"
        },
        disable: Boolean,
        shape: {
            type: String,
            value: "square",
            options: [ "square", "circle" ]
        },
        select: Boolean,
        plain: Boolean,
        size: {
            type: String,
            value: "medium",
            options: [ "large", "medium", "mini", "super-mini" ]
        },
        location: {
            type: String,
            value: "left",
            options: [ "left", "right" ]
        },
        icon: String,
        iconSize: {
            type: String,
            value: "20"
        },
        iconColor: {
            type: String,
            value: "#3683D6"
        },
        height: Number,
        className: {
            type: String
        }
    },
    data: {
        show: !0,
        componentId: "PACX_TAG",
        componentName: a.default.componentMap.find(function(e) {
            return "PACX_TAG" == e.componentId;
        }).componentName
    },
    methods: {
        handleTap: function() {
            if (!this.data.disable) {
                var e = {
                    name: this.data.name,
                    cell: this.data.cell,
                    select: this.data.select
                };
                this.triggerEvent("kun-tap", e, {
                    bubbles: !0,
                    composed: !0
                });
            }
        },
        onClose: function() {
            this.setData({
                show: !1
            });
        }
    }
});
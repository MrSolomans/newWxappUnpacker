var t = o(require("../behaviors/validator")), e = o(require("../behaviors/montior")), a = o(require("../common/componentMap")), i = o(require("../behaviors/detect"));

function o(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Component({
    externalClasses: [ "k-class", "k-badge-class" ],
    behaviors: [ i.default, t.default, e.default ],
    properties: {
        dot: {
            type: Boolean,
            value: !1
        },
        shape: {
            type: String,
            value: "horn",
            options: [ "horn", "circle" ]
        },
        value: {
            type: String,
            value: "0"
        },
        mode: {
            type: String,
            value: "number",
            options: [ "number", "text" ]
        },
        maxCount: {
            type: Number,
            value: 99
        },
        numberType: {
            type: String,
            value: "overflow",
            options: [ "overflow", "limit", "ellipsis" ]
        },
        show: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        finalCount: 0,
        componentId: "PACX_BADGE",
        componentName: a.default.PACX_BADGE
    },
    observers: {
        value: function() {
            this.finalCount();
        }
    },
    methods: {
        finalCount: function() {
            isNaN(Number(this.data.value)) || "text" === this.data.mode ? this.setData({
                finalCount: this.data.value
            }) : this.switchType();
        },
        switchType: function() {
            switch (console.log(this.data.numberType), this.data.numberType) {
              case "overflow":
                this.setData({
                    finalCount: Number(this.data.value) > Number(this.data.maxCount) ? "".concat(this.data.maxCount, "+") : this.data.value
                });
                break;

              case "ellipsis":
                this.setData({
                    finalCount: Number(this.data.value) > Number(this.data.maxCount) ? "..." : this.data.value
                });
                break;

              case "limit":
                console.log(this.data.numberType), this.setData({
                    finalCount: Number(this.data.value) > 999 ? Number(this.data.value) >= 9999 ? Math.floor(this.data.value / 1e4 * 100) / 100 + "w" : Math.floor(this.data.value / 1e3 * 100) / 100 + "k" : this.data.value
                });
                break;

              default:
                this.setData({
                    finalCount: Number(this.data.value)
                });
            }
        },
        handleTap: function() {
            this.triggerEvent("kun-tap", {}, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});
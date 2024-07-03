var e = o(require("../behaviors/montior")), t = o(require("../behaviors/detect"));

function o(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    externalClasses: [ "k-icon-class" ],
    behaviors: [ e.default, t.default ],
    properties: {
        name: String,
        color: {
            type: String,
            value: "#ffffff"
        },
        size: {
            type: String,
            value: "40"
        },
        width: {
            type: String,
            value: "100%"
        },
        height: {
            type: String,
            value: "100%"
        },
        childComponents: {
            type: Boolean,
            value: "false"
        },
        nopositon: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        componentId: "PACX_ICON",
        componentName: "图标"
    }
});
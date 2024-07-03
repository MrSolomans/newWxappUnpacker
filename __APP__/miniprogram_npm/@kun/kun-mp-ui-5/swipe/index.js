var e = n(require("../behaviors/detect")), t = n(require("../behaviors/montior")), o = n(require("../common/componentMap"));

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ t.default, e.default ],
    properties: {
        them: {
            type: String,
            value: "hcz-them"
        },
        swiperItemData: {
            type: Array,
            optionalTypes: [ Object, Array, Number ],
            value: []
        },
        swiperIndex: {
            type: Number,
            value: 0
        },
        itemShape: {
            type: String,
            value: "dot"
        },
        whiteBg: {
            type: Boolean,
            value: !1
        },
        className: {
            type: String
        }
    },
    data: {
        componentId: "PACX_SWIPE",
        componentName: o.default.componentMap.find(function(e) {
            return "PACX_SWIPE" == e.componentId;
        }).componentName
    }
});
var e = require("../../../../@babel/runtime/helpers/defineProperty"), t = o(require("../common/api.config.js")), n = o(require("../behaviors/detect")), r = o(require("../behaviors/montior")), a = o(require("../common/componentMap"));

function o(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ r.default, n.default ],
    externalClasses: [ "k-tab-class", "k-tab-line", "k-class" ],
    properties: {
        tabList: {
            type: Array,
            value: []
        },
        screenList: {
            type: Array,
            value: []
        },
        navTabBgColor: {
            type: String,
            value: "#ffffff"
        },
        navTagBgColor: {
            type: String,
            value: "#ffffff"
        },
        navTermBgColor: {
            type: String,
            value: "#ffffff"
        },
        moreDetail: {
            type: Boolean,
            value: !1
        },
        tagMoreDetail: {
            type: Boolean,
            value: !1
        },
        type: {
            type: Number,
            value: !1
        },
        width: Number,
        checkTermIndex: {
            type: Number,
            value: 0
        },
        showBadge: {
            type: Boolean,
            value: !1
        },
        them: {
            type: String,
            value: "hcz-theme"
        }
    },
    data: {
        checkTabIndex: 0,
        checkTagIndex: 0,
        cdnHost: t.default.getApi().SRC_HOST + "/kun/newScreen/",
        componentId: "PACX_TAB",
        componentName: a.default.componentMap.find(function(e) {
            return "PACX_TAB" == e.componentId;
        }).componentName
    },
    methods: {
        onCheckTabs: function(e) {
            var t = this, n = e.currentTarget.dataset, r = n.index, a = n.tab;
            this.setData({
                checkTabIndex: r,
                checkTagIndex: 0
            }, function() {
                t.triggerEvent("onCheckTabs", {
                    index: r,
                    item: a
                });
            });
        },
        onCheckTags: function(e) {
            var t = this, n = e.currentTarget.dataset, r = n.index, a = n.tag, o = n.parentIndex;
            this.setData({
                checkTagIndex: r
            }, function() {
                t.triggerEvent("onCheckTags", {
                    parentIndex: o,
                    index: r,
                    item: a
                });
            });
        },
        onClickMoreDetail: function() {
            this.triggerEvent("onClickMoreDetail");
        },
        onClickTagMoreDetail: function() {
            this.triggerEvent("onClickTagMoreDetail");
        },
        onCheckTerm: function(t) {
            var n = this, r = t.currentTarget.dataset, a = r.index, o = r.type, c = r.term, i = r.parentIndex, s = this.properties.tabList;
            if ("1" === c.checkArrow && this.data.checkTermIndex === a ? c.checkArrow = "2" : c.checkArrow = "1", 
            "2" === o) {
                var u = "screenList[".concat(a, "].checkArrow");
                s && s.length > 0 && s[i] && s[i].screenList && (u = "tabList[".concat(i, "].screenList[").concat(a, "].checkArrow")), 
                this.setData(e({}, u, c.checkArrow));
            }
            this.setData({
                checkTermIndex: a
            }, function() {
                n.triggerEvent("onCheckTerm", {
                    parentIndex: i,
                    index: a,
                    item: c
                });
            });
        }
    }
});
var e, t = (e = require("../behaviors/hover")) && e.__esModule ? e : {
    default: e
};

Component({
    behaviors: [ t.default ],
    relations: {
        "../list/index": {
            type: "parent",
            linked: function() {},
            linkChanged: function() {},
            unlinked: function() {}
        }
    },
    options: {
        multipleSlots: !0
    },
    externalClasses: [ "k-class", "k-class-icon", "k-icon-class", "k-class-image", "k-image-class", "k-class-right", "k-class-content", "k-content-class", "k-class-desc", "k-desc-class" ],
    properties: {
        icon: String,
        iconColor: {
            type: String,
            value: "#3963BC"
        },
        iconSize: {
            type: String,
            value: "28"
        },
        image: String,
        title: String,
        desc: String,
        tagPosition: {
            type: String,
            value: "left"
        },
        tagContent: String,
        tagShape: {
            type: String,
            value: "square"
        },
        tagColor: String,
        tagPlain: Boolean,
        badgePosition: {
            type: String,
            value: "left"
        },
        dotBadge: Boolean,
        badgeCount: Number,
        badgeMaxCount: {
            type: Number,
            value: 99
        },
        badgeCountType: {
            type: String,
            value: "overflow"
        },
        rightDesc: String,
        gap: Number,
        leftGap: Number,
        rightGap: Number,
        isLink: {
            type: Boolean,
            value: !0
        },
        linkType: {
            type: String,
            value: "navigateTo"
        },
        url: String
    },
    methods: {
        tapcell: function(e) {
            console.log("list-e", e);
            var t = e.currentTarget.dataset, n = t.linkType, a = t.url;
            a && wx[n]({
                url: a
            }), this.triggerEvent("k-list-tap", {
                e: e
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});
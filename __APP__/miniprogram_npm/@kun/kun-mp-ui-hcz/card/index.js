Component({
    properties: {
        cardItem: {
            type: Object,
            val: {}
        },
        itemHeight: {
            type: String,
            val: "284"
        },
        itemWidth: {
            type: String,
            val: "400"
        },
        imageHeight: {
            type: String,
            val: "170"
        },
        titleColor: {
            type: String,
            val: "#222222"
        },
        titleSize: {
            type: String,
            val: "28"
        },
        countColor: {
            type: String,
            val: "#828A93"
        },
        countSize: {
            type: String,
            val: "24"
        },
        isShowTitle: {
            type: Boolean,
            val: !0
        },
        titleLine: {
            type: Number,
            val: 1
        },
        isShowDetail: {
            type: Boolean,
            val: !0
        },
        isShowAuthor: {
            type: Boolean,
            val: !1
        },
        isShowIssue: {
            type: Boolean,
            val: !1
        },
        detailMode: {
            type: String,
            val: "issue"
        },
        cardType: {
            type: String,
            val: "special"
        }
    },
    data: {},
    ready: function() {},
    methods: {
        goToDetails: function(t) {
            this.triggerEvent("goToDetails", t);
        }
    },
    pageLifetimes: {
        show: function() {}
    }
});
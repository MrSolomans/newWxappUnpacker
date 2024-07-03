var t, e, i = [ "goToDetails", "teaching", "type", "#222222", "keyValue", "dataset" ];

t = i, e = 355, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var o = function(t, e) {
    return i[t -= 0];
}, a = require("../api.js");

Component({
    behaviors: [ a.commonAuthor ],
    data: {
        itemWidth: 570,
        itemHeight: 400,
        imageHeight: 220,
        isShowTitle: !0,
        isShowDetail: !0,
        detailMode: "author",
        titleColor: o("0x2"),
        titleSize: 28,
        titleLine: 2,
        countColor: "#828A93",
        countSize: 24
    },
    methods: {
        goToDetailsByKun: function(t) {
            var e = t.detail, i = e.currentTarget.dataset.item;
            e.currentTarget[o("0x4")] = {
                id: i.configId,
                text: i[o("0x3")].text,
                point: "home" === this.data.introducePath ? "" : "PACX_W00052147",
                type: o("0x0") || e.currentTarget.dataset[o("0x1")],
                url: i.keyValue.url
            }, console.log(e), this[o("0x5")](e);
        }
    }
});
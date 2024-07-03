var t, e, i = [ "issue", "themeId", "item", "PACX_W00075166", "commonAuthor", "use strict", "PACX_W00071723", "currentTarget" ];

t = i, e = 497, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var o = function(t, e) {
    return i[t -= 0];
};

o("0x4");

var a = require("../api.js");

Component({
    behaviors: [ a[o("0x3")] ],
    data: {
        itemWidth: 400,
        itemHeight: 284,
        imageHeight: 170,
        isShowTitle: !0,
        isShowDetail: !0,
        detailMode: o("0x7"),
        titleColor: "#222222",
        titleSize: 28,
        titleLine: 1,
        countColor: "#828A93",
        countSize: 24
    },
    methods: {
        goToDetailsByKun: function(t) {
            var e = t.detail, i = e.currentTarget.dataset[o("0x1")];
            e.currentTarget.dataset = {
                id: i[o("0x0")],
                text: i.themeTitle,
                point: "home" === this.data.introducePath ? o("0x2") : o("0x5"),
                type: "special"
            }, console.log(e), this.goToDetails(e);
        }
    }
});
var t, e, o = [ "use strict", "#CCCCCC" ];

t = o, e = 334, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var n = function(t, e) {
    return o[t -= 0];
};

n("0x0"), Component({
    properties: {
        isAbsolute: {
            type: Boolean,
            value: !1
        },
        isPadding: {
            type: Boolean,
            value: !0
        },
        textColor: {
            type: String,
            value: n("0x1")
        }
    },
    data: {},
    methods: {}
});
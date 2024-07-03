var r, t, s = [ "use strict", "errImg" ];

r = s, t = 317, function(t) {
    for (;--t; ) r.push(r.shift());
}(++t);

var e = function(r, t) {
    return s[r -= 0];
};

e("0x1"), Component({
    properties: {
        src: {
            type: String
        },
        errImg: {
            type: String
        }
    },
    data: {
        isErr: !1
    },
    methods: {
        handleErr: function() {
            this.data[e("0x0")];
            this.setData({
                isErr: !0
            });
        }
    }
});
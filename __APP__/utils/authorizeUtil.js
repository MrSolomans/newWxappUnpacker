var t, e, s = [ "setVal", "use strict", "defineProperty", "KEY" ];

t = s, e = 292, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var r = function(t, e) {
    return s[t -= 0];
};

r("0x1"), Object[r("0x2")](exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var a = Object.freeze({
    KEY: "authorizeAndLogin",
    setVal: wx.setStorageSync,
    setLoginParams: function(t) {
        this[r("0x0")](this[r("0x3")] + "Params", t);
    },
    setPrevPagePath: function(t) {
        this.setVal(this[r("0x3")] + "Path", t);
    }
});

exports.default = a;
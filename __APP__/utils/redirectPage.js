var e, t, r = [ "length" ];

e = r, t = 283, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var u = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./handleString")), n = require("./pathManage");

var o = {
    onLoad: function(e) {
        var t = getCurrentPages(), o = t[t[function(e, t) {
            return r[e -= 0];
        }("0x0")] - 1].route, a = o + u.default.getAllOptions(e, "", o);
        (0, n.goNextPage)(a, "redirectTo");
    }
};

exports.default = o;
function n(n, t, o, r, e, i, u) {
    try {
        var c = n[i](u), v = c.value;
    } catch (n) {
        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
        return void o(n);
    }
    c.done ? t(v) : Promise.resolve(v).then(r, e);
}

module.exports = function(t) {
    return function() {
        var o = this, r = arguments;
        return new Promise(function(e, i) {
            var u = t.apply(o, r);
            function c(t) {
                n(u, e, i, c, v, "next", t);
            }
            function v(t) {
                n(u, e, i, c, v, "throw", t);
            }
            c(void 0);
        });
    };
};
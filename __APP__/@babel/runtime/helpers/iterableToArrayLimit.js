module.exports = function(l, r) {
    var e = null == l ? null : "undefined" != typeof Symbol && l[Symbol.iterator] || l["@@iterator"];
    if (null != e) {
        var t, n, u, f, i = [], o = !0, a = !1;
        try {
            if (u = (e = e.call(l)).next, 0 === r) {
                if (Object(e) !== e) return;
                o = !1;
            } else for (;!(o = (t = u.call(e)).done) && (i.push(t.value), i.length !== r); o = !0) ;
        } catch (l) {
            l = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(l);
            a = !0, n = l;
        } finally {
            try {
                if (!o && null != e.return && (f = e.return(), Object(f) !== f)) return;
            } finally {
                if (a) throw n;
            }
        }
        return i;
    }
};
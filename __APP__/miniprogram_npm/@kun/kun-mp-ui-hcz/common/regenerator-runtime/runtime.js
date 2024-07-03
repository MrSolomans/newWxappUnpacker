var t = require("../../../../../@babel/runtime/helpers/typeof");

!function(e) {
    var r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag", u = "object" === ("undefined" == typeof module ? "undefined" : t(module)), h = e.regeneratorRuntime;
    if (h) u && (module.exports = h); else {
        (h = e.regeneratorRuntime = u ? module.exports : {}).wrap = y;
        var f = {}, s = {};
        s[i] = function() {
            return this;
        };
        var l = Object.getPrototypeOf, p = l && l(l(O([])));
        p && p !== r && n.call(p, i) && (s = p);
        var d = w.prototype = g.prototype = Object.create(s);
        m.prototype = d.constructor = w, w.constructor = m, w[c] = m.displayName = "GeneratorFunction", 
        h.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
        }, h.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, c in t || (t[c] = "GeneratorFunction")), 
            t.prototype = Object.create(d), t;
        }, h.awrap = function(t) {
            return {
                __await: t
            };
        }, x(L.prototype), L.prototype[a] = function() {
            return this;
        }, h.AsyncIterator = L, h.async = function(t, e, r, n) {
            var o = new L(y(t, e, r, n));
            return h.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                return t.done ? t.value : o.next();
            });
        }, x(d), d[c] = "Generator", d[i] = function() {
            return this;
        }, d.toString = function() {
            return "[object Generator]";
        }, h.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(), function r() {
                for (;e.length; ) {
                    var n = e.pop();
                    if (n in t) return r.value = n, r.done = !1, r;
                }
                return r.done = !0, r;
            };
        }, h.values = O, j.prototype = {
            constructor: j,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), 
                !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;
                function r(r, n) {
                    return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), 
                    !!n;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o], a = i.completion;
                    if ("root" === i.tryLoc) return r("end");
                    if (i.tryLoc <= this.prev) {
                        var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                        } else if (c) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break;
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                f) : this.complete(a);
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                f;
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), f;
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            _(r);
                        }
                        return o;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: O(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), f;
            }
        };
    }
    function y(t, e, r, n) {
        var o = e && e.prototype instanceof g ? e : g, i = Object.create(o.prototype), a = new j(n || []);
        return i._invoke = function(t, e, r) {
            var n = "suspendedStart";
            return function(o, i) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return k();
                }
                for (r.method = o, r.arg = i; ;) {
                    var a = r.delegate;
                    if (a) {
                        var c = E(a, r);
                        if (c) {
                            if (c === f) continue;
                            return c;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var u = v(t, e, r);
                    if ("normal" === u.type) {
                        if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
                        return {
                            value: u.arg,
                            done: r.done
                        };
                    }
                    "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg);
                }
            };
        }(t, r, a), i;
    }
    function v(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return {
                type: "throw",
                arg: t
            };
        }
    }
    function g() {}
    function m() {}
    function w() {}
    function x(t) {
        [ "next", "throw", "return" ].forEach(function(e) {
            t[e] = function(t) {
                return this._invoke(e, t);
            };
        });
    }
    function L(e) {
        var r;
        this._invoke = function(o, i) {
            function a() {
                return new Promise(function(r, a) {
                    !function r(o, i, a, c) {
                        var u = v(e[o], e, i);
                        if ("throw" !== u.type) {
                            var h = u.arg, f = h.value;
                            return f && "object" === t(f) && n.call(f, "__await") ? Promise.resolve(f.__await).then(function(t) {
                                r("next", t, a, c);
                            }, function(t) {
                                r("throw", t, a, c);
                            }) : Promise.resolve(f).then(function(t) {
                                h.value = t, a(h);
                            }, function(t) {
                                return r("throw", t, a, c);
                            });
                        }
                        c(u.arg);
                    }(o, i, r, a);
                });
            }
            return r = r ? r.then(a, a) : a();
        };
    }
    function E(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
            if (e.delegate = null, "throw" === e.method) {
                if (t.iterator.return && (e.method = "return", e.arg = void 0, E(t, e), "throw" === e.method)) return f;
                e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return f;
        }
        var n = v(r, t.iterator, e.arg);
        if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, 
        f;
        var o = n.arg;
        return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
        e.arg = void 0), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
        e.delegate = null, f);
    }
    function b(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
        this.tryEntries.push(e);
    }
    function _(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function j(t) {
        this.tryEntries = [ {
            tryLoc: "root"
        } ], t.forEach(b, this), this.reset(!0);
    }
    function O(t) {
        if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var r = -1, o = function e() {
                    for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                    return e.value = void 0, e.done = !0, e;
                };
                return o.next = o;
            }
        }
        return {
            next: k
        };
    }
    function k() {
        return {
            value: void 0,
            done: !0
        };
    }
}(function() {
    return this || "object" === ("undefined" == typeof self ? "undefined" : t(self)) && self;
}() || Function("return this")());
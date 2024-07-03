module.exports = require("../_commons/0.js")([ {
    ids: [ 9 ],
    modules: {
        199: function(e, r, u) {
            function t(e) {
                e.data.prop && (this.data.formItems[e.data.prop] = e), e.setInForm && e.setInForm(), 
                this.data.firstItem || (this.data.firstItem = e);
            }
            function n(e) {
                e.data.prop && delete this.data.formItems[e.data.prop];
            }
            u.r(r);
            var a = u(22), F = u.n(a), i = u(23), o = u.n(i), s = function() {
                for (var e, r = arguments.length, u = new Array(r), t = 0; t < r; t++) u[t] = arguments[t];
                var n, a, F = u[0] || "", i = u.length - 1;
                if (i < 1) return F;
                for (e = 1; e < i + 1; ) F = F.replace(/%s/, "{#" + e + "#}"), e++;
                for (F.replace("%s", ""), e = 1; void 0 !== (n = u[e]); ) a = new RegExp("{#" + e + "#}", "g"), 
                F = F.replace(a, n), e++;
                return F;
            }, d = {
                required: function(e, r) {
                    return !1 === e.required ? "" : function(e) {
                        return 0 !== e && !1 !== e && !e;
                    }(r) ? s(e.message || "%s必填", e.name) : "";
                },
                minlength: function(e, r) {
                    var u = e.minlength;
                    return (r = r || "").length < u ? s(e.message || "长度最少为%s", u) : "";
                },
                maxlength: function(e, r) {
                    var u = e.maxlength;
                    return (r = r || "").length > u ? s(e.message || "长度最大为%s", u) : "";
                },
                rangelength: function(e, r) {
                    var u = e.rangelength;
                    return (r = r || "").length > u[1] || r.length < u[0] ? s(e.message || "长度在%s和%s之间", u[0], u[1]) : "";
                },
                min: function(e, r) {
                    var u = e.min;
                    return r < u ? s(e.message || "值最小为%s", u) : "";
                },
                max: function(e, r) {
                    var u = e.max;
                    return r > u ? s(e.message || "值最大为%s", u) : "";
                },
                range: function(e, r) {
                    var u = e.range;
                    return r < u[0] || r > u[1] ? s(e.message || "值的范围为%s和%s之间", u[0], u[1]) : "";
                },
                mobile: function(e, r) {
                    return r = r || "", !1 === e.mobile ? "" : 11 !== r.length ? s(e.message || "请输入正确的手机号") : "";
                },
                email: function(e, r) {
                    return !1 === e.email || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(r) ? "" : s(e.message || "请输入正确的电子邮件");
                },
                url: function(e, r) {
                    return !1 === e.url || /^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(r) ? "" : e.message || "请输入正确的URL地址";
                },
                equalTo: function(e, r, u, t) {
                    return r !== t[e.equalTo] ? s(e.message || "值和字段%s不相等", e.name) : "";
                },
                bytelength: function(e, r, u) {
                    return u = e.param, (r = r || "").replace(/[^\x00-\xff]/g, "**").length > u ? s(e.message || "最多只能输入%s个字", u) : "";
                }
            }, l = function(e, r) {
                if (!e && r || e && !r) return !0;
                for (var u in r) if (e[u] !== r[u]) return !0;
                for (var t in e) if (e[t] !== r[t]) return !0;
                return !1;
            }, f = Object.prototype.toString, c = function(e, r) {
                for (var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, n = "", a = Object.keys(e), F = 0, i = a.length; F < i; ++F) {
                    var o = a[F];
                    if ("name" !== o && "message" !== o) {
                        var s = void 0 !== e.validator ? e.validator : d[o];
                        if ("function" == typeof s && (n = s(e, r, u, t))) return n;
                    }
                }
                return n;
            }, h = function() {
                function e(r, u) {
                    F()(this, e), this.models = void 0, this.rules = void 0, this.errors = void 0, this.models = r, 
                    this.rules = u, this.errors = {};
                }
                return o()(e, [ {
                    key: "validate",
                    value: function(e) {
                        var r = this;
                        return new Promise(function(u) {
                            var t = 0, n = r.errors, a = r.models;
                            Object.keys(r.rules).forEach(function(e) {
                                var u = n[e];
                                r._innerValidateField(e, a[e], function(r, a) {
                                    r || t++, l(u, a) && (n[e] = a);
                                });
                            }), Object.keys(n).forEach(function(e) {
                                n[e] || delete n[e];
                            }), u({
                                isValid: !t,
                                errors: t ? n : void 0
                            }), e && e(!t, t ? n : void 0);
                        });
                    }
                }, {
                    key: "validateField",
                    value: function(e, r, u) {
                        var t = this;
                        return new Promise(function(n) {
                            t._innerValidateField(e, r, function(r, a) {
                                var F = {};
                                F[e] = a, n({
                                    valid: r,
                                    error: r ? void 0 : a
                                }), u && u(r, r ? void 0 : F);
                                var i = t.errors[e];
                                l(i, a) && (a || delete t.errors[e], t.errors[e] = a);
                            });
                        });
                    }
                }, {
                    key: "_innerValidateField",
                    value: function(e, r, u) {
                        var t = this.rules[e];
                        if (!t) return console.warn("[form-validator] rule name ".concat(e, " not exists.")), 
                        void u(!0);
                        "function" == typeof r && (u = r, r = void 0);
                        var n = !1, a = this.models;
                        if ("[object Array]" === f.call(t)) t.forEach(function(t) {
                            t.name = e;
                            var F = c(t, r || a[e], t.param, a);
                            F && !n && (n = !0, u(!1, F ? {
                                message: F,
                                rule: t
                            } : void 0));
                        }), n || u(!n); else {
                            var F = t;
                            F.name = e;
                            var i = c(F, r || a[e], F.param, a);
                            i && (n = !0), u(!n, i ? {
                                message: i,
                                rule: F
                            } : void 0);
                        }
                    }
                }, {
                    key: "setModel",
                    value: function(e) {
                        this.models = e;
                    }
                }, {
                    key: "setRules",
                    value: function(e) {
                        this.rules = e;
                    }
                } ], [ {
                    key: "addMethod",
                    value: function(e, r) {
                        d[e] = r;
                    }
                } ]), e;
            }();
            Component({
                properties: {
                    models: {
                        type: Object,
                        value: {},
                        observer: "_modelChange"
                    },
                    rules: {
                        type: Array,
                        value: [],
                        observer: "_rulesChange"
                    },
                    extClass: {
                        type: String,
                        value: ""
                    }
                },
                data: {
                    errors: {},
                    formItems: {},
                    firstItem: null
                },
                relations: {
                    "../cell/cell": {
                        type: "descendant",
                        linked: t,
                        unlinked: n
                    },
                    "../checkbox-group/checkbox-group": {
                        type: "descendant",
                        linked: t,
                        unlinked: n
                    }
                },
                attached: function() {
                    this.initRules(), this.formValidator = new h(this.data.models, this.data.newRules);
                },
                methods: {
                    initRules: function(e) {
                        var r = {};
                        return (e || this.data.rules).forEach(function(e) {
                            e.name && e.rules && (r[e.name] = e.rules || []);
                        }), this.setData({
                            newRules: r
                        }), r;
                    },
                    _modelChange: function(e, r) {
                        var u = this;
                        if (!this.formValidator) return e;
                        this.formValidator.setModel(e);
                        var t = function(e, r) {
                            if (!e && r) return r;
                            if (!r && e) return e;
                            var u = {}, t = !1;
                            for (var n in r) e[n] !== r[n] && (t = !0, u[n] = r[n]);
                            for (var a in e) e[a] !== r[a] && (t = !0, u[a] = r[a]);
                            return t ? u : null;
                        }(r, e);
                        if (t) {
                            var n = !0, a = [], F = {};
                            Object.keys(t).forEach(function(e) {
                                u.formValidator.validateField(e, t[e], function(r, u) {
                                    u && u[e] && (a.push(u[e]), F[e] = u[e]), n = r;
                                });
                            }), this._showErrors(t, F), this.triggerEvent(n ? "success" : "fail", n ? {
                                trigger: "change"
                            } : {
                                errors: a,
                                trigger: "change"
                            });
                        }
                        return e;
                    },
                    _rulesChange: function(e) {
                        var r = this.initRules(e);
                        return this.formValidator && this.formValidator.setRules(r), e;
                    },
                    _showAllErrors: function(e) {
                        var r = this;
                        Object.keys(this.data.newRules).forEach(function(u) {
                            r._showError(u, e && e[u]);
                        });
                    },
                    _showErrors: function(e, r) {
                        var u = this;
                        Object.keys(e).forEach(function(e) {
                            u._showError(e, r && r[e]);
                        });
                    },
                    _showError: function(e, r) {
                        var u = this.data.formItems[e];
                        u && u.data.showError && u.setError(r);
                    },
                    validate: function(e) {
                        var r = this;
                        return this.formValidator.validate(function(u, t) {
                            r._showAllErrors(t);
                            var n = r.handleErrors(t);
                            r.triggerEvent(u ? "success" : "fail", u ? {
                                trigger: "validate"
                            } : {
                                errors: n,
                                trigger: "validate"
                            }), e && e(u, n);
                        });
                    },
                    validateField: function(e, r) {
                        var u = this, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        };
                        return this.formValidator.validateField(e, r, function(r, n) {
                            u._showError(e, n);
                            var a = u.handleErrors(n);
                            u.triggerEvent(r ? "success" : "fail", r ? {
                                trigger: "validate"
                            } : {
                                errors: a,
                                trigger: "validate"
                            }), t && t(r, a);
                        });
                    },
                    handleErrors: function(e) {
                        if (e) {
                            var r = [];
                            return this.data.rules.forEach(function(u) {
                                e[u.name] && (e[u.name].name = u.name, r.push(e[u.name]));
                            }), r;
                        }
                        return e;
                    },
                    addMethod: function(e, r) {
                        return this.formValidator.addMethod(e, r);
                    }
                }
            }), r.default = h;
        },
        22: function(e, r) {
            e.exports = function(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
            };
        },
        23: function(e, r) {
            function u(e, r) {
                for (var u = 0; u < r.length; u++) {
                    var t = r[u];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
                    Object.defineProperty(e, t.key, t);
                }
            }
            e.exports = function(e, r, t) {
                return r && u(e.prototype, r), t && u(e, t), e;
            };
        },
        4: function(e, r, u) {
            e.exports = u(199);
        }
    },
    entries: [ [ 4, 0 ] ]
} ]);
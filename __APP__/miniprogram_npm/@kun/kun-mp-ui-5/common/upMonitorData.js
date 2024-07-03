Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../../../@babel/runtime/helpers/classCallCheck"), n = require("../../../../@babel/runtime/helpers/createClass"), a = s(require("./fetch.js")), o = s(require("./api.config.js")), u = s(require("./componentMap.js"));

function s(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

exports.default = function() {
    function s() {
        r(this, s), this.commonHost = o.default.getApi();
    }
    var i, p;
    return n(s, [ {
        key: "uploadComponentItem",
        value: (p = t(e().mark(function t(r, n, o) {
            var u, s, i;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, (0, a.default)({
                        path: "".concat(this.commonHost.UPLOADCOMPOENTITEM),
                        header: {
                            "content-type": "application/json"
                        },
                        params: {
                            app: "hcz",
                            client: "mini-apps",
                            clientVersion: 20220630,
                            recordList: [ {
                                appVersion: "1.0.3",
                                componentId: r,
                                componentName: n,
                                className: o || "kun-mp-ui-5/build",
                                componentSdkVersion: "1.0.3"
                            } ]
                        }
                    });

                  case 2:
                    if (!(u = e.sent)) {
                        e.next = 8;
                        break;
                    }
                    if (s = u.resultCode, i = u.resultData, "0" !== s || !i) {
                        e.next = 7;
                        break;
                    }
                    return e.abrupt("return", i);

                  case 7:
                    return e.abrupt("return", !1);

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function(e, t, r) {
            return p.apply(this, arguments);
        })
    }, {
        key: "uploadComponent",
        value: (i = t(e().mark(function t() {
            var r, n, o;
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, (0, a.default)({
                        path: "".concat(this.commonHost.UPLOADCOMPOENTALL),
                        header: {
                            "Content-Type": "application/json"
                        },
                        params: {
                            app: "hcz",
                            client: "mini-apps",
                            clientVersion: u.default.clientVersion,
                            recordList: u.default.componentMap
                        }
                    });

                  case 2:
                    if (!(r = e.sent)) {
                        e.next = 8;
                        break;
                    }
                    if (n = r.resultCode, o = r.resultData, "0" !== n || !o) {
                        e.next = 7;
                        break;
                    }
                    return e.abrupt("return", o);

                  case 7:
                    return e.abrupt("return", !1);

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, t, this);
        })), function() {
            return i.apply(this, arguments);
        })
    } ]), s;
}();
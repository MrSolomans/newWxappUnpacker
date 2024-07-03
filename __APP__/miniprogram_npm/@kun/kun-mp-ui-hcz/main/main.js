Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.environment, n = 1 === t;
    return i.default.env = n ? "isProd" : "isDev", new o({
        isProd: n
    }), r(r({}, e), i.default.getApi());
};

var e, r = require("../../../../@babel/runtime/helpers/objectSpread2"), i = (e = require("../common/api.config.js")) && e.__esModule ? e : {
    default: e
};

var o = require("../common/security-onion.b3ebcdb68427e7e0.min.js");
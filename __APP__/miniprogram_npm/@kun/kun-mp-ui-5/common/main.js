Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = e.environment, u = 1 === i;
    return t.default.env = u ? "isProd" : "isDev", r(r({}, e), t.default.getApi());
};

var e, r = require("../../../../@babel/runtime/helpers/objectSpread2"), t = (e = require("./api.config.js")) && e.__esModule ? e : {
    default: e
};
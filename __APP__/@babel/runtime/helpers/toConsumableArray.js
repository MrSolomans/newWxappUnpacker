var r = require("./arrayWithoutHoles"), e = require("./iterableToArray"), u = require("./unsupportedIterableToArray"), a = require("./nonIterableSpread");

module.exports = function(o) {
    return r(o) || e(o) || u(o) || a();
};
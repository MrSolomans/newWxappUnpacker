var r = require("./arrayLikeToArray");

module.exports = function(a) {
    if (Array.isArray(a)) return r(a);
};
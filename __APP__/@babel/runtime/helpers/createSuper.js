var r = require("./getPrototypeOf"), t = require("./isNativeReflectConstruct"), e = require("./possibleConstructorReturn");

module.exports = function(o) {
    var u = t();
    return function() {
        var t, i = r(o);
        if (u) {
            var s = r(this).constructor;
            t = Reflect.construct(i, arguments, s);
        } else t = i.apply(this, arguments);
        return e(this, t);
    };
};
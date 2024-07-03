var o, r, t = [ "use strict" ];

o = t, r = 492, function(r) {
    for (;--r; ) o.push(o.shift());
}(++r);

!function(o, r) {
    o -= 0;
}("0x0");

var i = require("../api.js");

Component({
    behaviors: [ i.commonAuthor ]
});
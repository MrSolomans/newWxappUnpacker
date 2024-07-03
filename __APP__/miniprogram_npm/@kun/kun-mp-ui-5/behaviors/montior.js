var e;

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var o = new (((e = require("../common/upMonitorData.js")) && e.__esModule ? e : {
    default: e
}).default)();

exports.default = Behavior({
    ready: function() {
        var e = this.data, t = e.componentId, n = e.componentName, a = this.properties.className;
        "release" !== wx.getAccountInfoSync().miniProgram.envVersion && o.uploadComponentItem(t, n, a).then(function(e) {
            console.log("【".concat(n, "】组件数据上报成功'"));
        });
    }
});
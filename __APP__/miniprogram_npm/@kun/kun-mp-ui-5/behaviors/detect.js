Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = Behavior({
    data: {
        detectBg: "detect-before",
        componentsAry: [],
        detectBorder: ""
    },
    ready: function() {
        var e = getCurrentPages(), t = e[e.length - 1].options, o = wx.getStorageSync("componentsAry") || [], r = this.data.componentId;
        r && o.indexOf(r) < 0 && (console.log("检测到的组件：", r), o.push(this.data.componentId), 
        wx.setStorageSync("componentsAry", o), console.log("组件检测数量：", o.length)), 1 == ~~t.isDetect && this.setData({
            detectBorder: "detect-border",
            detectBg: "detect-after",
            componentsAry: o
        });
    }
});
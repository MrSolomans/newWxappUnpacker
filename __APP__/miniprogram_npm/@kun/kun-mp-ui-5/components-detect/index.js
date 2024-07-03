var e, t = (e = require("../behaviors/detect")) && e.__esModule ? e : {
    default: e
};

Component({
    data: {
        isShowDetect: !1
    },
    behaviors: [ t.default ],
    pageLifetimes: {
        show: function() {
            var e = wx.getAccountInfoSync().miniProgram.envVersion, t = wx.getStorageSync("showDetectNum");
            wx.setStorageSync("showDetectNum", ++t), "release" !== e && t <= 1 && this.setData({
                isShowDetect: !0
            });
        },
        hide: function() {
            wx.removeStorageSync("showDetectNum"), wx.removeStorageSync("componentsAry");
        }
    },
    ready: function() {
        wx.removeStorageSync("showDetectNum");
    },
    detached: function() {
        wx.removeStorageSync("showDetectNum");
    },
    methods: {
        viewTouchMove: function(e) {
            this.setData({
                left: e.touches[0].clientX - 60,
                top: e.touches[0].clientY - 60
            });
        },
        showBorder: function() {
            var e = getCurrentPages(), t = e[e.length - 1].route, o = e[e.length - 1].options, c = "";
            if (0 == Object.keys(o).length) c = "?isDetect=1"; else {
                for (var n in o) "isDetect" !== n && (c += "&" + n + "=" + o[n]);
                c = c.replace(/&/, "?"), c += "".concat("" == c ? "?" : "&", "isDetect=").concat(1 == ~~o.isDetect ? 0 : 1);
            }
            wx.reLaunch({
                url: "/" + t + c
            });
        }
    }
});
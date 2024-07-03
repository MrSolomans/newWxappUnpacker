var t, e, n = [ "prototype", "includes", "zh_CN" ];

t = n, e = 232, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var o = function(t, e) {
    return n[t -= 0];
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.compatibleFunc = function() {
    !String.prototype.includes && (String.prototype[o("0x0")] = function(t) {
        return this.indexOf(t) > -1;
    }), !Array[o("0x2")][o("0x0")] && (Array.prototype.includes = function(t) {
        return this.indexOf(t) > -1;
    });
    for (var t = {
        getAccountInfoSync: function() {
            return {
                miniProgram: {
                    appId: "wxf225684ee1536a5f"
                }
            };
        },
        getLaunchOptionsSync: function() {
            return wx.getStorageSync("getLaunchOptionsSync") || {};
        },
        setBackgroundColor: function() {},
        getSystemInfoSync: function() {
            return {
                batteryLevel: 100,
                benchmarkLevel: 1,
                brand: "devtools",
                deviceOrientation: "portrait",
                devicePixelRatio: 2,
                enableDebug: !1,
                fontSizeSetting: 16,
                language: o("0x1"),
                model: "iPhone 6/7/8",
                pixelRatio: 2,
                platform: "devtools",
                safeArea: {
                    right: 375,
                    bottom: 667,
                    left: 0,
                    top: 20,
                    width: 375
                },
                screenHeight: 667,
                screenWidth: 375,
                statusBarHeight: 20,
                system: "iOS 10.0.1",
                version: "7.0.4",
                windowHeight: 619,
                windowWidth: 375
            };
        }
    }, e = 0, n = Object.keys(t); e < n.length; e++) {
        var r = n[e];
        !wx[r] && (wx[r] = t[r]);
    }
};
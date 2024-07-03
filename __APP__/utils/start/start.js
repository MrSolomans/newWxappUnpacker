var e, t, n = require("../../@babel/runtime/helpers/typeof"), o = [ "canIUse", "now", "getUpdateManager", "preData_h5Config", "resolve", "symbol", "setStorageSync", "onUpdateFailed", "function", "preData_time" ];

e = o, t = 350, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return o[e -= 0];
};

function c(e) {
    return (c = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? a("0x5") : n(e);
    })(e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = {
    updateManager: function() {
        if (!wx[a("0x0")]("getUpdateManager") || "function" === !c(wx[a("0x2")])) return Promise.resolve(1);
        var e = wx.getUpdateManager();
        return e ? new Promise(function(t) {
            e.onCheckForUpdate(function(n) {
                if (!n.hasUpdate) return t(2);
                e.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(n) {
                            n.confirm && (e.applyUpdate(), t(3));
                        },
                        fail: function(e) {
                            console.warn("小程序更新出错", e), t(4);
                        }
                    });
                }), e[a("0x7")](function() {
                    wx.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    }), t(5);
                });
            });
        }) : Promise[a("0x4")](1);
    },
    setBackgroundFetchToken: function() {
        wx.canIUse("setBackgroundFetchToken") && !wx.getStorageSync("isSetBackgroundFetchToken") && "function" == typeof wx.setBackgroundFetchToken && wx.setBackgroundFetchToken({
            token: "some_token_996",
            success: function() {
                wx[a("0x6")]("isSetBackgroundFetchToken", !0);
            },
            fail: function() {
                console.log("设置token失败");
            }
        });
    },
    getBackgroundFetchData: function() {
        wx.canIUse("getBackgroundFetchData") && n(wx.getBackgroundFetchData) === a("0x8") && wx.getBackgroundFetchData({
            fetchType: "pre",
            success: function(e) {
                if (e.fetchedData) try {
                    var t = JSON.parse(e.fetchedData);
                    wx.setStorageSync("preData_pageInfo", {
                        code: 0,
                        data: t.pageInfo
                    }), wx.setStorageSync(a("0x3"), t.h5Config), wx.setStorageSync(a("0x9"), Date[a("0x1")]());
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.warn("存放预加载的数据错误：", e);
                }
            },
            fail: function(e) {
                console.warn("接受失败：", e);
            }
        });
    }
};

exports.default = r;
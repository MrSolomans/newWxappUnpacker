var e, r, t = require("../../../@babel/runtime/helpers/typeof"), n = [ "PACX_W00053038", "symbol", "PACX_W00053045", "forEach", "PACX_W00001518", "function", "getStorageSync", "PACX_W00001495", "PACX_W39000120", "PACX_W00001498", "defineProperty", "PACX_W00001517", "push", "customerTrack", "PACX_W39000101", "PACX_W00053039" ];

e = n, r = 413, function(r) {
    for (;--r; ) e.push(e.shift());
}(++r);

var o = function(e, r) {
    return n[e -= 0];
};

function i(e) {
    return (i = "function" == typeof Symbol && o("0x4") == t(Symbol.iterator) ? function(e) {
        return t(e);
    } : function(e) {
        return e && o("0x8") == ("undefined" == typeof Symbol ? "undefined" : t(Symbol)) && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
    })(e);
}

function u(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t[o("0xf")].apply(t, n);
    }
    return t;
}

function P(e, r, t) {
    return (r = function(e) {
        var r = function(e, r) {
            if ("object" != i(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t.call(e, r || "default");
                if ("object" != i(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(e);
        }(e, "string");
        return "symbol" == i(r) ? r : r + "";
    }(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

Object[o("0xd")](exports, "__esModule", {
    value: !0
}), exports.setTrack = function(e, r) {
    var t = function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? u(Object(t), !0).forEach(function(r) {
                P(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t))[o("0x6")](function(r) {
                Object[o("0xd")](e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }({
        OpenId: wx.getStorageSync("openid"),
        UnionId: wx[o("0x9")]("unionId")
    }, r);
    e && (_[e] ? c.customerTrack(_[e], t, null) : c[o("0x0")](e, t, null));
};

var c = require("../../../utils/datatist.js"), _ = {
    "曝光首页": "PACX_W00053036",
    "曝光绑车栏目": "PACX_W00001499",
    "点击绑车栏目": o("0xc"),
    "曝光切换车辆弹窗": "PACX_W39000102",
    "点击切换车辆": o("0x1"),
    "切换车辆内点击添加爱车": "PACX_W39000100",
    "点击买车险": "PACX_W00053037",
    "点击查保单": o("0x3"),
    "点击办理赔": o("0x2"),
    "点击用卡券": "PACX_W00053040",
    "曝光服务ICON": "PACX_W00001497",
    "点击服务ICON": o("0x5"),
    "点击服务ICON更多": "PACX_W00053046",
    "曝光常设活动左侧": "PACX_W00056034",
    "曝光常设活动右侧": "PACX_W00053047",
    "点击常设活动左侧": "PACX_W00056033",
    "点击常设活动右侧": "PACX_W00001496",
    "曝光服务有优惠栏目": o("0xa"),
    "点击服务有优惠栏目": "PACX_W00001500",
    "点击服务有优惠更多": "PACX_W00001501",
    "曝光非车险": "PACX_W00001515",
    "点击非车险": "PACX_W00001514",
    "曝光健康测评": "PACX_W00001513",
    "点击健康测评": "PACX_W00001512",
    "曝光保险小课堂": "PACX_W00001511",
    "点击保险小课堂": "PACX_W00001510",
    "曝光家庭保障": "PACX_W00001509",
    "点击家庭保障添加家人": "PACX_W00001516",
    "点击家庭风险检测": "PACX_W00001519",
    "点击家庭风险报告": o("0x7"),
    "点击家庭保障推荐产品": "PACX_W00001508",
    "曝光视频": "PACX_W00001507",
    "点击视频": "PACX_W00001506",
    "曝光车主精选": "PACX_W00001505",
    "点击车主精选": "PACX_W00001504",
    "曝光车主原创": "PACX_W00001503",
    "点击车主原创": "PACX_W00001502",
    "点击城市控件": o("0xe"),
    "曝光订单确认和取消通知订阅弹窗": "PACX_W39000118",
    "订单确认和取消通知订阅弹窗_点击确定": "PACX_W39000119",
    "订单确认和取消通知订阅弹窗_点击取消": o("0xb")
};
var t = require("../../../../@babel/runtime/helpers/objectSpread2"), e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper");

require("../../../../@babel/runtime/helpers/Arrayincludes");

var a = n(require("../common/api.config.js")), i = n(require("../common/COHomeCity"));

function n(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var s = getApp(), c = wx.getSystemInfoSync(), o = wx.getMenuButtonBoundingClientRect(), r = o.height, y = void 0 === r ? 32 : r, l = o.top, u = c.statusBarHeight + y + 2 * (l - c.statusBarHeight), h = wx.getSystemInfoSync().windowHeight, d = a.default.getApi();

Component({
    properties: {
        city: {
            type: String,
            value: ""
        },
        locationCity: {
            type: String,
            value: ""
        },
        locationStatue: {
            type: Number,
            value: 1
        },
        locationCityObj: {
            type: Object,
            value: {}
        }
    },
    data: {
        customNavHeight: u,
        windowHeight: h,
        srcHost: d.SRC_HOST,
        hotCities: [ "北京", "上海", "广州", "深圳", "杭州", "重庆" ],
        hotCitiesObj: [],
        nearbySelCity: [],
        locationCity: "",
        city: "",
        cityKey: "",
        showMask: !1,
        inputValue: "",
        searchCitys: [],
        tbasicBaseCityList: [],
        letterData: {
            A: [],
            B: [],
            C: [],
            D: [],
            E: [],
            F: [],
            G: [],
            H: [],
            I: [],
            J: [],
            K: [],
            L: [],
            M: [],
            N: [],
            O: [],
            P: [],
            Q: [],
            R: [],
            S: [],
            T: [],
            U: [],
            V: [],
            W: [],
            X: [],
            Y: [],
            Z: []
        }
    },
    attached: function() {
        var t = wx.getStorageSync("nearbySelCity");
        this.setData({
            nearbySelCity: t || []
        }), this.getAllCities();
    },
    ready: function() {},
    methods: {
        getTbasicBaseCityList: function(t) {
            var e = this.data, a = e.letterData, i = e.locationCity, n = e.hotCities, s = e.hotCitiesObj, c = this.data.locationCityObj, o = t;
            for (var r in o) for (var y in a) o[r].cityInitialLetter === y && (o[r].city = o[r].cityName.includes("市") ? o[r].cityName.replace("市", "") : o[r].cityName, 
            o[r].cityProvince = o[r].city + "，" + o[r].provinceName, a[y].push(o[r]), i && i === o[r].city && (c = o[r]), 
            n.includes(o[r].city) && s.push(o[r]));
            for (var l in a) a[l] && 0 !== a[l].length || delete a[l];
            this.setData({
                letterData: a,
                hotCitiesObj: s,
                locationCityObj: c,
                tbasicBaseCityList: o
            });
        },
        cityClick: function(t) {
            var e = this, a = t.currentTarget.dataset.datas;
            if (a) {
                i.default.forEach(function(t) {
                    t.cityName === a.cityName && (a.lat = t.latitude, a.lon = t.longitude);
                });
                var n = this.data.nearbySelCity, c = void 0 === n ? [] : n, o = !0;
                c.length > 0 ? (c.forEach(function(t) {
                    t.city === a.city && (o = !1);
                }), o && (c.length >= 8 && c.shift(), c.push(a))) : c.push(a), this.setData({
                    nearbySelCity: c
                }, function() {
                    console.log("nearbySelCity", c), wx.setStorageSync("nearbySelCity", c), s.globalData.cityTemp = a.city, 
                    s.globalData.cityCodeTemp = a.cityCode, e.triggerEvent("cityClick", a), wx.navigateBack();
                });
            }
        },
        onFocus: function(t) {
            var e = t.currentTarget.dataset.bool;
            this.setData({
                showMask: e
            }), e || this.setData({
                inputValue: ""
            });
        },
        onInput: function(t) {
            var a, i = t.detail.value, n = this.data.tbasicBaseCityList, s = [], c = i.toLowerCase(), o = i.toUpperCase(), r = e(n);
            try {
                for (r.s(); !(a = r.n()).done; ) {
                    var y = a.value;
                    !i || 0 !== y.cityName.indexOf(i) && 0 !== y.citySpellName.indexOf(c) && 0 !== y.cityInitialName.indexOf(o) || s.push(y);
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                r.e(t);
            } finally {
                r.f();
            }
            for (var l in s) s[l] && (s[l].city = s[l].cityName.includes("市") ? s[l].cityName.replace("市", "") : s[l].cityName);
            this.setData({
                inputValue: i,
                searchCitys: s
            });
        },
        clearInput: function() {
            this.setData({
                inputValue: ""
            });
        },
        onTouchMove: function(t) {
            var e = this.data.letterData, a = t.touches[0].pageY, i = Math.floor((a - 170) / 15);
            i = Math.min(Object.keys(e).length + 1, Math.max(i, 0));
            var n = Object.keys(e)[i - 2];
            i < 2 && (n = "HOT"), n !== this.data.cityKey && this.onTouchStart(n);
        },
        onTouchStart: function(t) {
            this.setData({
                cityKey: t.currentTarget ? t.currentTarget.dataset.id : t
            });
        },
        getAllCities: function() {
            var e = this, a = {};
            "release" !== d.ENVVERSION && (a.versionno = "grayTest"), wx.request({
                url: d.CITIES,
                header: t({
                    "Content-Type": "application/json"
                }, a),
                method: "POST",
                data: {
                    "X-PA-NONCESTR": 1
                },
                success: function(t) {
                    var a = t.data, i = a.code, n = a.data;
                    0 === i && n && n.tbasicBaseCityList.length > 0 && (e.data.tbasicBaseCityList = n.tbasicBaseCityList, 
                    e.getTbasicBaseCityList(n.tbasicBaseCityList));
                }
            });
        },
        getLocationInfo: function() {
            var t = this;
            this.setData({
                locationStatue: 1
            }, function() {
                t.triggerEvent("getLocationInfo", t.data.tbasicBaseCityList);
            });
        }
    }
});
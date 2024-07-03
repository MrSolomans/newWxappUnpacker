var t, e, a = [ "name", "https://restapi.amap.com/v3/weather/weatherInfo", "sdkversion", "adcode", "fail", "keywords", "AMapWX", "origin", "aois", "%", "request", "status", "getStorage", "pois", "GET", "location", "城市", "s", "prototype", "length", "s=", "info", "route", "application/json", "key", "district", "data", "forecasts", "getWxLocation", "roads", "天气", "getInputtips", "infocode", "streetNumber", "requestConfig", "errMsg", "push", "regeocode", "cityd", "split", "sdkversion=", "size", "userLocation", "taxi_cost", "logversion", "addressComponent" ];

t = a, e = 172, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var o = function(t, e) {
    return a[t -= 0];
};

function s(t) {
    this[o("0x24")] = t.key, this.requestConfig = {
        key: t.key,
        s: "rsx",
        platform: "WXJS",
        appname: t.key,
        sdkversion: "1.2.0",
        logversion: "2.0"
    };
}

s.prototype.getWxLocation = function(t, e) {
    wx.getLocation({
        type: "gcj02",
        success: function(t) {
            var a = t.longitude + "," + t.latitude;
            wx.setStorage({
                key: "userLocation",
                data: a
            }), e(a);
        },
        fail: function(a) {
            wx[o("0x18")]({
                key: o("0x8"),
                success: function(t) {
                    t.data && e(t.data);
                }
            }), t.fail({
                errCode: "0",
                errMsg: a.errMsg || ""
            });
        }
    });
}, s.prototype.getRegeo = function(t) {
    function e(e) {
        var s = a.requestConfig;
        wx.request({
            url: "https://restapi.amap.com/v3/geocode/regeo",
            data: {
                key: a.key,
                location: e,
                extensions: "all",
                s: s.s,
                platform: s.platform,
                appname: a.key,
                sdkversion: s.sdkversion,
                logversion: s.logversion
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                var s, i, r, n, c, d, p, u, l;
                a[o("0x26")].status && "1" == a[o("0x26")].status ? (i = (s = a.data.regeocode)[o("0xb")], 
                r = [], n = "", s && s.roads[0] && s.roads[0].name && (n = s[o("0x29")][0][o("0xc")] + "附近"), 
                c = e.split(",")[0], d = e.split(",")[1], s[o("0x19")] && s.pois[0] && (n = s.pois[0][o("0xc")] + "附近", 
                (p = s.pois[0].location) && (c = parseFloat(p.split(",")[0]), d = parseFloat(p.split(",")[1]))), 
                i.provice && r.push(i.provice), i.city && r.push(i.city), i[o("0x25")] && r[o("0x2")](i.district), 
                i.streetNumber && i.streetNumber.street && i.streetNumber.number ? (r.push(i.streetNumber.street), 
                r.push(i[o("0x2d")].number)) : (u = "", s && s[o("0x29")][0] && s[o("0x29")][0][o("0xc")] && (u = s.roads[0].name), 
                r.push(u)), r = r.join(""), l = [ {
                    iconPath: t.iconPath,
                    width: t.iconWidth,
                    height: t.iconHeight,
                    name: r,
                    desc: n,
                    longitude: c,
                    latitude: d,
                    id: 0,
                    regeocodeData: s
                } ], t.success(l)) : t.fail({
                    errCode: a.data.infocode,
                    errMsg: a.data.info
                });
            },
            fail: function(e) {
                t.fail({
                    errCode: "0",
                    errMsg: e.errMsg || ""
                });
            }
        });
    }
    var a = this;
    t.location ? e(t.location) : a[o("0x28")](t, function(t) {
        e(t);
    });
}, s[o("0x1e")].getWeather = function(t) {
    function e(e) {
        var i = "base";
        t.type && "forecast" == t.type && (i = "all"), wx.request({
            url: o("0xd"),
            data: {
                key: a.key,
                city: e,
                extensions: i,
                s: s.s,
                platform: s.platform,
                appname: a.key,
                sdkversion: s.sdkversion,
                logversion: s[o("0xa")]
            },
            method: "GET",
            header: {
                "content-type": o("0x23")
            },
            success: function(e) {
                var a, s, i;
                e.data.status && "1" == e.data[o("0x17")] ? e.data.lives ? (a = e.data.lives) && a.length > 0 && (a = a[0], 
                i = a, (s = {
                    city: {
                        text: o("0x1c"),
                        data: i.city
                    },
                    weather: {
                        text: o("0x2a"),
                        data: i.weather
                    },
                    temperature: {
                        text: "温度",
                        data: i.temperature
                    },
                    winddirection: {
                        text: "风向",
                        data: i.winddirection + "风"
                    },
                    windpower: {
                        text: "风力",
                        data: i.windpower + "级"
                    },
                    humidity: {
                        text: "湿度",
                        data: i.humidity + o("0x15")
                    }
                }).liveData = a, t.success(s)) : e.data.forecasts && e.data.forecasts[0] && t.success({
                    forecast: e.data[o("0x27")][0]
                }) : t.fail({
                    errCode: e.data[o("0x2c")],
                    errMsg: e.data.info
                });
            },
            fail: function(e) {
                t.fail({
                    errCode: "0",
                    errMsg: e.errMsg || ""
                });
            }
        });
    }
    var a = this, s = a.requestConfig;
    t.city ? e(t.city) : a.getWxLocation(t, function(i) {
        !function(i) {
            wx.request({
                url: "https://restapi.amap.com/v3/geocode/regeo",
                data: {
                    key: a.key,
                    location: i,
                    extensions: "all",
                    s: s.s,
                    platform: s.platform,
                    appname: a.key,
                    sdkversion: s.sdkversion,
                    logversion: s[o("0xa")]
                },
                method: "GET",
                header: {
                    "content-type": "application/json"
                },
                success: function(a) {
                    var s, i;
                    a.data.status && "1" == a[o("0x26")].status ? ((i = a.data[o("0x3")]).addressComponent ? s = i.addressComponent.adcode : i[o("0x14")] && i[o("0x14")].length > 0 && (s = i.aois[0][o("0xf")]), 
                    e(s)) : t.fail({
                        errCode: a.data.infocode,
                        errMsg: a[o("0x26")][o("0x21")]
                    });
                },
                fail: function(e) {
                    t.fail({
                        errCode: "0",
                        errMsg: e.errMsg || ""
                    });
                }
            });
        }(i);
    });
}, s.prototype.getPoiAround = function(t) {
    function e(e) {
        var i = {
            key: a.key,
            location: e,
            s: s[o("0x1d")],
            platform: s.platform,
            appname: a.key,
            sdkversion: s[o("0xe")],
            logversion: s.logversion
        };
        t.querytypes && (i.types = t.querytypes), t.querykeywords && (i[o("0x11")] = t.querykeywords), 
        wx.request({
            url: "https://restapi.amap.com/v3/place/around",
            data: i,
            method: o("0x1a"),
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                var a, s, i, r;
                if (e.data.status && "1" == e.data[o("0x17")]) {
                    if ((e = e.data) && e[o("0x19")]) {
                        for (a = [], s = 0; s < e[o("0x19")][o("0x1f")]; s++) i = 0 == s ? t.iconPathSelected : t.iconPath, 
                        a.push({
                            latitude: parseFloat(e.pois[s].location[o("0x5")](",")[1]),
                            longitude: parseFloat(e.pois[s].location.split(",")[0]),
                            iconPath: i,
                            width: 22,
                            height: 32,
                            id: s,
                            name: e[o("0x19")][s].name,
                            address: e.pois[s].address
                        });
                        r = {
                            markers: a,
                            poisData: e.pois
                        }, t.success(r);
                    }
                } else t[o("0x10")]({
                    errCode: e.data.infocode,
                    errMsg: e.data.info
                });
            },
            fail: function(e) {
                t.fail({
                    errCode: "0",
                    errMsg: e.errMsg || ""
                });
            }
        });
    }
    var a = this, s = a.requestConfig;
    t.location ? e(t[o("0x1b")]) : a.getWxLocation(t, function(t) {
        e(t);
    });
}, s.prototype.getStaticmap = function(t) {
    function e(e) {
        i.push("location=" + e), t.zoom && i.push("zoom=" + t.zoom), t.size && i[o("0x2")]("size=" + t[o("0x7")]), 
        t.scale && i[o("0x2")]("scale=" + t.scale), t.markers && i[o("0x2")]("markers=" + t.markers), 
        t.labels && i.push("labels=" + t.labels), t.paths && i[o("0x2")]("paths=" + t.paths), 
        t.traffic && i[o("0x2")]("traffic=" + t.traffic);
        var a = r + i.join("&");
        t.success({
            url: a
        });
    }
    var a, s = this, i = [], r = "https://restapi.amap.com/v3/staticmap?";
    i.push("key=" + s.key), a = s.requestConfig, i.push(o("0x20") + a[o("0x1d")]), i[o("0x2")]("platform=" + a.platform), 
    i.push("appname=" + a.appname), i.push(o("0x6") + a.sdkversion), i.push("logversion=" + a.logversion), 
    t.location ? e(t[o("0x1b")]) : s.getWxLocation(t, function(t) {
        e(t);
    });
}, s.prototype[o("0x2b")] = function(t) {
    var e = this, a = e.requestConfig, s = {
        key: e.key,
        s: a.s,
        platform: a.platform,
        appname: e.key,
        sdkversion: a.sdkversion,
        logversion: a.logversion
    };
    t.location && (s.location = t.location), t.keywords && (s.keywords = t[o("0x11")]), 
    t.type && (s.type = t.type), t.city && (s.city = t.city), t.citylimit && (s.citylimit = t.citylimit), 
    wx.request({
        url: "https://restapi.amap.com/v3/assistant/inputtips",
        data: s,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            e && e.data && e.data.tips && t.success({
                tips: e[o("0x26")].tips
            });
        },
        fail: function(e) {
            t.fail({
                errCode: "0",
                errMsg: e.errMsg || ""
            });
        }
    });
}, s.prototype.getDrivingRoute = function(t) {
    var e = this, a = e[o("0x0")], s = {
        key: e.key,
        s: a.s,
        platform: a.platform,
        appname: e.key,
        sdkversion: a.sdkversion,
        logversion: a.logversion
    };
    t.origin && (s.origin = t[o("0x13")]), t.destination && (s.destination = t.destination), 
    t.strategy && (s.strategy = t.strategy), t.waypoints && (s.waypoints = t.waypoints), 
    t.avoidpolygons && (s.avoidpolygons = t.avoidpolygons), t.avoidroad && (s.avoidroad = t.avoidroad), 
    wx.request({
        url: "https://restapi.amap.com/v3/direction/driving",
        data: s,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            e && e.data && e.data.route && t.success({
                paths: e.data.route.paths,
                taxi_cost: e.data.route[o("0x9")] || ""
            });
        },
        fail: function(e) {
            t.fail({
                errCode: "0",
                errMsg: e[o("0x1")] || ""
            });
        }
    });
}, s.prototype.getWalkingRoute = function(t) {
    var e = this, a = e.requestConfig, s = {
        key: e.key,
        s: a.s,
        platform: a.platform,
        appname: e.key,
        sdkversion: a[o("0xe")],
        logversion: a.logversion
    };
    t.origin && (s.origin = t[o("0x13")]), t.destination && (s.destination = t.destination), 
    wx[o("0x16")]({
        url: "https://restapi.amap.com/v3/direction/walking",
        data: s,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            e && e.data && e.data.route && t.success({
                paths: e.data.route.paths
            });
        },
        fail: function(e) {
            t[o("0x10")]({
                errCode: "0",
                errMsg: e.errMsg || ""
            });
        }
    });
}, s[o("0x1e")].getTransitRoute = function(t) {
    var e = this, a = e.requestConfig, s = {
        key: e[o("0x24")],
        s: a[o("0x1d")],
        platform: a.platform,
        appname: e.key,
        sdkversion: a.sdkversion,
        logversion: a.logversion
    };
    t.origin && (s.origin = t.origin), t.destination && (s.destination = t.destination), 
    t.strategy && (s.strategy = t.strategy), t.city && (s.city = t.city), t.cityd && (s.cityd = t[o("0x4")]), 
    wx[o("0x16")]({
        url: "https://restapi.amap.com/v3/direction/transit/integrated",
        data: s,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            if (e && e.data && e.data[o("0x22")]) {
                var a = e.data[o("0x22")];
                t.success({
                    distance: a.distance || "",
                    taxi_cost: a.taxi_cost || "",
                    transits: a.transits
                });
            }
        },
        fail: function(e) {
            t.fail({
                errCode: "0",
                errMsg: e.errMsg || ""
            });
        }
    });
}, s.prototype.getRidingRoute = function(t) {
    var e = this, a = e[o("0x0")], s = {
        key: e[o("0x24")],
        s: a[o("0x1d")],
        platform: a.platform,
        appname: e.key,
        sdkversion: a.sdkversion,
        logversion: a.logversion
    };
    t.origin && (s.origin = t.origin), t.destination && (s.destination = t.destination), 
    wx.request({
        url: "https://restapi.amap.com/v4/direction/bicycling",
        data: s,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            e && e[o("0x26")] && e.data.data && t.success({
                paths: e.data[o("0x26")].paths
            });
        },
        fail: function(e) {
            t.fail({
                errCode: "0",
                errMsg: e.errMsg || ""
            });
        }
    });
}, module.exports[o("0x12")] = s;
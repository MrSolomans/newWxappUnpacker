var t, e, r = [ "小程序", "init", "exports", "track", "getWebMessage", "register" ];

t = r, e = 152, function(e) {
    for (;--e; ) t.push(t.shift());
}(++e);

var i = function(t, e) {
    return r[t -= 0];
}, n = require("./reportTrack.js"), s = require("./sensorsdata.min.js"), o = {
    App: {
        setPara: function(t) {
            s.setPara(t);
        },
        init: function(t) {
            n.App.init(t), s[i("0x5")](), s.register({
                projectid: t.projectId_new,
                siteid: t.siteId_v2_new,
                data_source: i("0x4")
            });
        },
        dtSetH5ProjectId: function(t) {
            n.App.dtSetH5ProjectId(t);
        },
        dtSetH5SiteId: function(t) {
            n.App.dtSetH5SiteId(t);
        }
    },
    setOpenid: function(t) {
        s.setOpenid(t);
    },
    setUserProperty: function(t, e) {
        n.setUserProperty(t, e), s.setProfile(t), s[i("0x1")]("trackProfile", {
            download_channel_name: JSON.stringify(t)
        });
    },
    setUserId: function(t) {
        this._setUserId(t), s.login(t), s.track("register", {});
    },
    _setUserId: function(t) {
        n.setUserId(t), s[i("0x3")]({
            userid: t
        });
    },
    customerTrack: function(t, e, r) {
        n.customerTrack(t, e, r), ("PACX_W00001424" == t || "PACX_H29000441" == t) && s[i("0x1")](t, e);
    },
    getWebMessage: function(t) {
        n[i("0x2")](t);
    },
    trackPageview: function(t, e) {
        n.trackPageview(t, e);
    },
    trackLogin: function(t) {
        s.register({
            userid: t
        }), s.login(t), s.track("login", {});
    },
    trackLogout: function() {
        s.logout(), this.setUserId(""), s.track("logout", {});
    }
};

module[i("0x0")] = o;
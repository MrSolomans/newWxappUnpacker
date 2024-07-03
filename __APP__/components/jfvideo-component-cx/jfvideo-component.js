var e, t, s = [ "players", "updateZIndex", "bigView", "pusher", "setData", "forEach", "jfVideoRoom", "concat", "data", "startsWith", "setProperty", "triggerEvent" ];

e = s, t = 225, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var i = function(e, t) {
    return s[e -= 0];
}, a = require("../../jfjs/JFVideoRoom"), o = require("../constant/Constant.js");

getApp();

Component({
    properties: {},
    data: {
        showSmallViews: !0,
        playerShow: !0,
        playerLandscapeType: !1,
        soundMode: "speaker"
    },
    observers: {
        showSmallViews: function() {
            this.updateZIndex(), this.data.jfVideoRoom.updateUI();
        }
    },
    lifetimes: {
        created: function() {
            this.data.jfVideoRoom = new a.JFVideoRoom(this), this.data.jfVideoRoom.pusher.zindex = -1, 
            console.log("lifetimes::this.data.jfVideoRoom", this[i("0xb")].jfVideoRoom);
        },
        detached: function() {
            this.data[i("0x9")].stop();
        }
    },
    pageLifetimes: {
        show: function() {
            this.data[i("0x9")].onShow();
        },
        hide: function() {
            this.data[i("0x9")].onHide();
        }
    },
    methods: {
        getJFVideoRoom: function() {
            return this.data.jfVideoRoom;
        },
        initPusher: function() {
            return {
                classes: [ "smallView0" ]
            };
        },
        addPlayer: function(e) {
            return 0 == this.data.jfVideoRoom.players.length ? (this.data[i("0x9")][i("0x6")][i("0x1")]({
                classes: [ "smallView0" ]
            }), {
                zindex: this[i("0xb")].jfVideoRoom.pusher.zindex - 1,
                classes: [ "bigView" ]
            }) : {
                zindex: this.data.jfVideoRoom.pusher.zindex + 1,
                classes: [ "smallView"[i("0xa")](this.data.jfVideoRoom[i("0x3")].length) ]
            };
        },
        updateUI: function() {
            var e = this.data.jfVideoRoom.pusher.classes.includes("bigView");
            !e && (e = Boolean(this.data[i("0x9")].players.find(function(e) {
                return e.classes.includes(i("0x5"));
            }))), !e && this.data.jfVideoRoom.pusher.setProperty({
                classes: [ "bigView" ]
            });
            var t = [];
            [ this.data[i("0x9")].pusher ].concat(this.data[i("0x9")].players)[i("0x8")](function(e) {
                e.classes.forEach(function(s) {
                    s[i("0x0")]("smallView") && (t[parseInt(s.substring(9))] = e);
                });
            });
            for (var s = 0; s < t.length - 1; s++) if (!t[s]) for (var a = s + 1; a < t.length; a++) if (t[a]) {
                t[s] = t[a], t[a] = null, t[s].setProperty({
                    classes: [ "smallView" + s ]
                });
                break;
            }
            this.updateZIndex();
        },
        updateZIndex: function() {
            var e = this, t = this.data.showSmallViews ? 1 : -1;
            this.data.jfVideoRoom.pusher.classes.includes("bigView") ? this.data.jfVideoRoom.players.forEach(function(s) {
                s.setProperty({
                    zindex: e.data.jfVideoRoom[i("0x6")].zindex + t
                });
            }) : this.data[i("0x9")].players.forEach(function(s) {
                s.classes.includes("bigView") ? s[i("0x1")]({
                    zindex: e.data.jfVideoRoom.pusher.zindex - t
                }) : s[i("0x1")]({
                    zindex: e.data.jfVideoRoom.pusher.zindex
                });
            });
        },
        toggleWindow: function(e, t) {
            console.warn("this.data.toggleWindow-orientation::", t);
            var s = [ this.data.jfVideoRoom.pusher ].concat(this.data.jfVideoRoom[i("0x3")]), a = s.find(function(t) {
                return t.id == e.currentTarget.dataset.id;
            }), n = s.find(function(e) {
                return e.classes.includes("bigView");
            });
            if (a.id != n.id) {
                var d = a.classes;
                a.classes = n.classes, n.classes = d, this[i("0x4")](), this.data.jfVideoRoom.updateUI();
            } else this.postEvent({
                code: o.ROOM.MAIN_WINDOW_CLICKED,
                message: "",
                data: {
                    id: a.id
                }
            });
        },
        postEvent: function(e) {
            this[i("0x2")]("RoomEvent", e, {});
        },
        toggleShowPlayer: function(e) {
            this.setData({
                playerShow: e
            });
        },
        playerLandscape: function(e) {
            this.setData({
                playerLandscapeType: e
            });
        },
        toggleSoundModeSpeaker: function(e) {
            this[i("0x7")]({
                soundMode: e ? "speaker" : "ear"
            });
        }
    }
});
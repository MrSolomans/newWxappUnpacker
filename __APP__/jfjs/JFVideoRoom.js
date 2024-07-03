var e, t, s = require("../@babel/runtime/helpers/typeof"), i = [ "getStorageSync", "jfplayer-", "gs", "NETWORK_ERROR", "as", "invalidAuths", "be", "toggleTorch fail", "callingTone", "用户断开", "].muteVideo", "findIndex", "stop", "auths", "soundMode", "Ts", "players", "updateUI", "quality", "getPusherVideoOrientation", "error", "createLivePusherContext", "fs", "streamType", "F", "OnAuthsCanceled", "ts", "OnAudienceList", "音视频进房失败", "now", "platform", "Bs", "&", "sendCustomMessage", "mode", "D", "呼叫失败请重试", "use strict", "uid", "playurl", "Ms", "event_wxlite_enter_video_room_success", "用户取消隐身", "add", "hasVideo", "A", "isArray", "filter", "vs", "allMuted", "De", "Vs", "from", "getPushURL", "OnInvalidToken", "data", "Rs", "hiding", "onUserVolumeChange", "$s", "key", "ys", "orientation", "Ns", "close", "U", "Hs", "autoEndCall", "Ps", "tid", "rtc", "ignoreAuths", "play", "X", "object", "android", "Cs", "ROOM", "M", "then", "setData", "没有开启麦克风的权限", "userid", "].data", "push", "onUserVideoSizeChanged", "iid", "onUserHide", "onAuths", "k", "iterator", "isMuted", "Pe", "J", "isOnline", "OnResume", "].isOnline", "enableMic", "onRoomEvent", "assign", "UserIdle", "constructor", "substring", "START_PLAY", "Ve", "Client", "setProperty", "concat", "roomType", "JFVideo.lastHangUpRID", "USER_EVENT.onUserVolumeChange", "remoteMuted", "function", "j", "R", "hide", "myInfo", "RenewToken", "name", "H", "call", "USER_EVENT", "muted", "L", "userType", "symbol", "has", "forEach", "initPusher", "KICKEDOUT_BY_OTHERS", "OnAuthsReqList", "destroy", "js", "Ee", "用户禁止使用录音", "id", "T", "raw", "contain", "detail", "checkAuth", "rid 不存在", "Ss", "isEnableCamera", "用户离线", "grantAuths", "os", "K", "rid", "roomData", ".", "users", "B", "用户退出", "Es", "Server", "length", "microphone", "players[", "ps", "video", "W", "Map", "onPushNetStatus", "snapshot fail", "high", "scene", "isPlayerMuteVideo", "RTC", "setRoomData", "value", "I", "Ws", "setPlayerSoundMode", "InvitationInfo", "volume", "getPlayerVideoOrientation", "fillCrop", "delete", "snapshot success", "$", "].orientation", "ERROR_JOIN_ROOM", "Z", "pusher", "ue", "target", "fail phone is calling", "isMutedRemote", "i", "defineProperty", "ls", "ROOM_DATA", "__uid", "find", "getContext", "showSilentUsers", "event", "As", "sid", "url", "prototype", "hasAudio", "Command", "mutedAll", "writable", "defaultPlayer", "onUserEnterRoom", "enableCamera" ];

e = i, t = 227, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return i[e -= 0];
};

function n(e) {
    return (n = "function" == typeof Symbol && "symbol" == s(Symbol.iterator) ? function(e) {
        return s(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e[a("0x53")] === Symbol && e !== Symbol.prototype ? a("0x6b") : s(e);
    })(e);
}

function r(e) {
    return function(e) {
        if (Array[a("0x1c")](e)) return o(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol[a("0x48")]] || null != e["@@iterator"]) return Array[a("0x22")](e);
    }(e) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return o(e, t);
            var s = {}.toString.call(e).slice(8, -1);
            return "Object" === s && e[a("0x53")] && (s = e.constructor[a("0x64")]), a("0x90") === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? o(e, t) : void 0;
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function o(e, t) {
    (null == t || t > e.length) && (t = e[a("0x8a")]);
    for (var s = 0, i = Array(t); s < t; s++) i[s] = e[s];
    return i;
}

function u(e, t, s) {
    return (t = c(t)) in e ? Object[a("0xac")](e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}

function h(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function d(e, t) {
    for (var s = 0; s < t.length; s++) {
        var i = t[s];
        i.enumerable = i.enumerable || !1, i.configurable = !0, a("0x98") in i && (i[a("0xbb")] = !0), 
        Object.defineProperty(e, c(i[a("0x2a")]), i);
    }
}

function l(e, t, s) {
    return t && d(e.prototype, t), s && d(e, s), Object.defineProperty(e, a("0xb7"), {
        writable: !1
    }), e;
}

function c(e) {
    var t = function(e, t) {
        if ("object" != n(e) || !e) return e;
        var s = e[Symbol.toPrimitive];
        if (void 0 !== s) {
            var i = s.call(e, t || "default");
            if (a("0x38") != n(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    }(e, "string");
    return "symbol" == n(t) ? t : t + "";
}

a("0x13"), Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.User = exports.Pusher = exports.Player = exports.JFVideoRoom = void 0;

var f = require("./JFSDK.js"), x = require("./JFVideo.js"), v = require("../components/constant/Constant.js");

function p(e, t) {
    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "uid";
    return e[a("0xca")](function(e) {
        return e[s] == t[s];
    });
}

function y() {
    for (var e = arguments[a("0x8a")], t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
    f.log.apply(f, [ "JFVideoRoom" ].concat(t));
}

var m = function() {
    function e(t) {
        h(this, e), Object.assign(this, {
            id: "jfpusher",
            mode: a("0x96"),
            url: "",
            userType: "",
            data: {},
            enableCamera: !0,
            enableMic: !0,
            enableAgc: !1,
            enableAns: !1,
            enableEarMonitor: !1,
            enableAutoFocus: !0,
            enableZoom: !1,
            minBitrate: 400,
            maxBitrate: 800,
            videoWidth: 360,
            videoHeight: 480,
            beauty: 0,
            whiteness: 0,
            videoOrientation: "vertical",
            videoAspect: "3:4",
            devicePosition: "front",
            enableRemoteMirror: !1,
            localMirror: "auto",
            enableBackgroundMute: !1,
            audioQuality: a("0x93"),
            audioVolumeType: "voicecall",
            audioReverbType: 0,
            hiding: !1,
            U: !1,
            waitingImage: "",
            waitingImageHash: ""
        }, t);
    }
    return l(e, [ {
        key: "setProperty",
        value: function(e) {
            Object[a("0x51")](this, e);
        }
    }, {
        key: "getContext",
        value: function(e) {
            return this.R || (this.R = wx[a("0x3")]("jfpusher", e)), this.R;
        }
    }, {
        key: "start",
        value: function(e) {
            var t = this;
            return new Promise(function(s, i) {
                t.getContext(e).start({
                    success: function(e) {
                        return s(e);
                    },
                    fail: function(e) {
                        return i(e);
                    }
                });
            });
        }
    }, {
        key: a("0xcb"),
        value: function() {
            if (!this.R) return Promise.resolve();
            var e = this;
            return new Promise(function(t) {
                e.R.stop({
                    success: function(e) {
                        return t(e);
                    },
                    fail: function(e) {
                        return t(e);
                    }
                }), e[a("0x60")] = null;
            });
        }
    }, {
        key: "snapshot",
        value: function(e) {
            var t = this;
            return y("snapshot", e), (e = "string" == typeof e ? {
                quality: e
            } : Object[a("0x51")]({}, e)).quality = e[a("0x0")] || a("0x77"), e.sourceType = e.sourceType || "view", 
            new Promise(function(s, i) {
                e.success = function(e) {
                    y(a("0xa1"), e), s(e);
                }, e.fail = function(e) {
                    y(a("0x92"), e), i(e);
                }, t.R.snapshot(e);
            });
        }
    }, {
        key: "toggleTorch",
        value: function() {
            var e = this;
            return y("toggleTorch"), new Promise(function(t, s) {
                e.R.toggleTorch({
                    success: function(e) {
                        y("toggleTorch success", e), t(e);
                    },
                    fail: function(e) {
                        y(a("0xc6"), e), s(e);
                    }
                });
            });
        }
    } ]), e;
}();

exports.Pusher = m;

var O = l(function e(t) {
    h(this, e), this.uid = "", this.userType = "", this[a("0x4c")] = !1, this[a("0x27")] = !1;
});

exports.User = O;

var R = function() {
    function e(t) {
        h(this, e), Object.assign(this, {
            id: "",
            url: "",
            uid: "",
            userType: "",
            data: {},
            streamType: "",
            hasVideo: !1,
            hasAudio: !1,
            volume: 0,
            isSpeaking: !1,
            isOnline: !1,
            isPlaying: !1
        }, t);
    }
    return l(e, [ {
        key: a("0x58"),
        value: function(e) {
            Object[a("0x51")](this, e);
        }
    }, {
        key: a("0xb1"),
        value: function(e) {
            return this[a("0x60")] || (this.R = wx.createLivePlayerContext(this[a("0x75")], e)), 
            this.R;
        }
    }, {
        key: a("0x36"),
        value: function(e) {
            this[a("0xb1")](e).play();
        }
    }, {
        key: a("0xcb"),
        value: function() {
            if (!this.R) return Promise.resolve();
            var e = this.R;
            return this.R = null, new Promise(function(t) {
                e.stop({
                    fail: function() {},
                    complete: function() {
                        return t();
                    }
                });
            });
        }
    } ]), e;
}();

exports.Player = R;

var g = function() {
    function e(t) {
        var s = this;
        h(this, e), this[a("0x10")] = "rtc", this.R = t, t.onPush = function(e) {
            return s.V(e);
        }, t.onPushError = function(e) {
            return s.P(e);
        }, t.onPlay = function(e) {
            return s.C(e);
        }, t[a("0x91")] = function(e) {
            return s.$s(e);
        }, t.onNetStatus = function(e) {
            return s.O(e);
        }, t.onPlayAudioVolumeNotify = function(e) {
            return s.k(e);
        }, this[a("0x82")] = "", this.tid = "", this.users = [], this.M = [], this.pusher = new m(), 
        this.players = [], this.stopped = !0, this.j = !1, this.roomInfo = {}, this[a("0x83")] = {}, 
        this.autoEndCall = !0, this.autoStartVideo = !0, this.pureAudioPushMod = 0, this.T = -1, 
        this.A = !1, this.F = !1, this.Js = 0, this.Ue = 0, this[a("0xc5")] = null, this[a("0x5d")] = !1, 
        this.allMuted = !1, this.I = void 0, this.callingTone = "", wx.setInnerAudioOption({
            obeyMuteSwitch: !1,
            fail: function() {}
        }), this.isSpeakingThreshold = 50, this.defaultPlayer = {
            muteAudio: !1,
            muteVideo: !1,
            orientation: "vertical",
            objectFit: "fillCrop",
            enableBackgroundMute: !1,
            minCache: .1,
            maxCache: .3,
            soundMode: "speaker",
            enableRecvMessage: "false",
            autoPauseIfNavigate: !0,
            autoPauseIfOpenNative: !0
        }, this.D = void 0, this.H = 1, this.showHidingUsers = !1, this.showSilentUsers = 1, 
        this.Ss = new Set([ "USER_EVENT.onUserVolumeChange" ]), this.Ts = void 0, this[a("0xa7")] = new Set(), 
        this.Ns = "", this.Bs = !1, this.Ws = !1;
    }
    return l(e, [ {
        key: "registerEvent",
        value: function(e) {
            y("registerEvent", e), this.Ss.delete(e);
        }
    }, {
        key: "unregisterEvent",
        value: function(e) {
            y("unregisterEvent", e), this[a("0x7c")].add(e);
        }
    }, {
        key: "As",
        value: function(e) {
            var t = e.split(".")[0];
            return !(this.Ss.has(t) || t != e && this[a("0x7c")][a("0x6c")](e));
        }
    }, {
        key: a("0x7a"),
        value: function(e) {
            return !!this.qs || !this.Ts || f[a("0xab")](this.Ts, e);
        }
    }, {
        key: "J",
        value: function(e) {
            switch (this[a("0xb2")]) {
              case 0:
                return !1;

              case 1:
                return !0;

              case 2:
                return 2 == e.userType;

              case 3:
                return 1 == e[a("0x6a")];

              default:
                return !0;
            }
        }
    }, {
        key: "setData",
        value: function(e, t, s) {
            var i = this;
            if (!s) return new Promise(function(s) {
                i.R.setData(u({}, "jfVideoRoom."[a("0x59")](e), t), function() {
                    s();
                });
            });
            this.R[a("0x3e")](u({}, "jfVideoRoom.".concat(e), t), s);
        }
    }, {
        key: "hideSelf",
        value: function(e) {
            this.setData("pusher.hiding", e), x.sendMessage({
                cmd: x.Command[a("0x57")].HIDING,
                rid: this.rid,
                data: {
                    hiding: e
                }
            });
        }
    }, {
        key: "setProperty",
        value: function(e) {
            Object.assign(this, e);
        }
    }, {
        key: "start",
        value: function(e) {
            y("start", e), this.mode = e.mode = e.mode || "rtc";
            var t = "meeting" == e.mode && e.audience;
            e.auths || (e.auths = t ? [] : [ "camera", a("0x8b") ]), this.Ts = e.auths, this.stopped = !1, 
            e.scene = e.scene || 0, e.data = e.data || {}, e.oid && (e[a("0x25")].mode = e[a("0x10")]), 
            t || (e.data.roomType = e.data.roomType || a("0x8e")), this.$ = e, 2 == e.scene && e[a("0x82")] == wx[a("0xbf")]("JFVideo.lastHangUpRID") && wx.setStorageSync(a("0x5b"), ""), 
            x[a("0x2e")](), x.setMessageHandler(this.q, this), x.connect({
                rid: e.rid,
                sid: e[a("0xb5")]
            }), 1 == f.userType && 0 == e[a("0x94")] && this[a("0x86")](), this.qs = !!e[a("0x35")];
        }
    }, {
        key: "q",
        value: function(e) {
            var t = this;
            y("handleWebSocket", e);
            var s = e.cmd;
            if (s != x.Command.OnError) if (s != x.Command[a("0x4d")]) if (s != x.Command.OnTimeout) if (s != x.Command[a("0x24")]) if (1 != s || e.req != x[a("0xb9")].Client.IS_EXISTS_ROOM) if (1 != s) {
                if (s == x.Command.Server[a("0x52")]) switch (parseInt(this.$.scene)) {
                  case 0:
                    if (this.rid) return void (this.tid ? this.W({
                        scene: v.ROOM.HANGUP_BY_OTHERS,
                        hangUpReason: "对方已挂断"
                    }) : this[a("0x5f")] ? this.W({
                        scene: v.ROOM.REJECT_BY_OTHERS,
                        hangUpReason: "对方已挂断"
                    }) : this.W({
                        scene: v[a("0x3b")].NO_ANSWER,
                        hangUpReason: "通话已结束"
                    }));
                    if (this.$.oid) {
                        x.pe(this[a("0xa2")].oid, this.$.data, this.$.auths);
                        break;
                    }
                    if ("meeting" == this.$.mode) {
                        x.re(this[a("0xa2")].data, this.$.auths);
                        break;
                    }
                    x.startCall(this.$.data, this[a("0xa2")].uids);
                    break;

                  case 1:
                    break;

                  case 2:
                    if (this.rid && y("尝试重新加入房间"), "meeting" == this.$.mode && this.$.audience) {
                        x.ce(this.$.rid, this[a("0xa2")].data, this[a("0xa2")].auths), this.setData("pusher.data", this.$[a("0x25")] || {});
                        break;
                    }
                    x.acceptCall(this.$.rid, this.$.data, this.$.auths);
                }
                if (s != x.Command.Server.ForceLogout) {
                    if (s == x[a("0xb9")].Server.CancelInvitation) this.j |= "拒接" == e.msg, this.K({
                        code: v.ROOM.REJECT_BY_OTHERS,
                        message: e.msg
                    }); else if (s == x.Command.Server[a("0x9c")]) x.acceptCall(e.rid, this.$.data); else if (s == x.Command[a("0x89")].RoomInfo) {
                        var i = !this.rid;
                        this.setData(a("0x83"), e.data[a("0x83")] || {}), this.roomInfo = Object.assign({}, e[a("0x25")]), 
                        this.roomInfo.roomType = this.roomInfo[a("0x5a")] || a("0x8e");
                        var n = e.data.mode || a("0x34");
                        if (n !== this[a("0x10")] && !this.qs) throw Error("房间模式错误, local=".concat(this[a("0x10")], ", remote=")[a("0x59")](n));
                        if (this.mode = e.data.mode || "rtc", this.setData("pusher.mode", "meeting" == this[a("0x10")] ? "live" : "RTC"), 
                        e[a("0x25")] && e[a("0x25")].myInfo && e.data.myInfo[a("0xcc")] || (this.qs = !0), 
                        this.Ts && !this.qs) {
                            var o = null, u = null;
                            if (e[a("0x25")] && e.data.myInfo) {
                                var h = e.data.myInfo.auths || [];
                                if (i) this[a("0xce")] = h, this[a("0xa7")] = new Set(e.data.myInfo[a("0xc4")]); else {
                                    var d = this.Ts;
                                    this[a("0xce")] = h, o = new Set(this.Ts), d.forEach(function(e) {
                                        return o.delete(e);
                                    }), o = o.size ? r(o) : null, u = new Set(d), h[a("0x6d")](function(e) {
                                        return u.delete(e);
                                    }), u = u.size ? r(u) : null;
                                }
                            }
                            f.h(this[a("0xce")]) || this[a("0xa6")].enableCamera && this.enableCamera(!1), f.p(this.Ts) || this.pusher.enableMic && this.muted(!0), 
                            u && this.K({
                                code: v.ROOM.OnAuthsCanceled,
                                message: "",
                                iid: "",
                                auths: u
                            }), o && (this.K({
                                code: v.ROOM.OnAuths,
                                message: "",
                                iid: "",
                                auths: o
                            }), o.forEach(function(e) {
                                return t[a("0xa7")][a("0xa0")](e);
                            }));
                        }
                        this.rid = e.rid, this.tid = e[a("0x33")], this.oid = e.oid, this[a("0x3e")]("pusher.hiding", !!(e.data && e.data[a("0x62")] && e.data.myInfo.hiding)), 
                        this.Z(e[a("0x85")]), this.K({
                            code: v.ROOM.ROOM_INFO,
                            message: "",
                            mode: this[a("0x10")],
                            rid: this.rid,
                            tid: this.tid,
                            oid: e.oid,
                            data: this.roomInfo
                        }), this.tid && this.autoStartVideo && this.startVideo();
                    } else if (s == x.Command.Server.AddMember) this.G(e); else if (s == x.Command.Server.RemoveMember) this.L(e); else if (s == x.Command.Server.OnKickedOut) this.W({
                        scene: v.ROOM.KICKEDOUT_BY_OTHERS,
                        hangUpReason: "你已被踢出"
                    }); else if (s == x.Command.Server.Hangup) this[a("0x33")] ? this.W({
                        scene: v.ROOM.HANGUP_BY_OTHERS,
                        hangUpReason: "对方已挂断"
                    }) : this.j ? this.W({
                        scene: v.ROOM.REJECT_BY_OTHERS,
                        hangUpReason: "对方已挂断"
                    }) : this[a("0x8f")]({
                        scene: v.ROOM.NO_ANSWER,
                        hangUpReason: "通话已结束"
                    }); else if (s == x.Command.Server.RoomMessage) this.X(e); else if (s == x.Command.Server.ReceiveRoomData) this.setData("roomData", e.data || {}), 
                    this.K({
                        code: v.ROOM[a("0xae")],
                        message: "",
                        data: e
                    }); else if (s == x.Command.Server.ReceiveUserData) {
                        if (!e.userType) {
                            var l = this.Y(e.uid);
                            l && (e.userType = l.userType);
                        }
                        var c = p(this.players, e);
                        c >= 0 && this.setData(a("0x8c") + c + a("0x41"), e.data);
                        var m = p(this.users, e);
                        m >= 0 && this.setData("users[" + m + "].data", e.data), this[a("0x81")]({
                            code: v.ROOM.USER_DATA,
                            message: "",
                            data: e
                        });
                    } else if (s == x.Command.Server.CustomMessage) {
                        if (e.rid != this[a("0x82")]) return;
                        if (e[a("0x25")] && e[a("0x25")].__sdk_command__) return void this[a("0x30")](e);
                        if (null == e.userType || "" == e.userType) {
                            var O = this.Y(e.from);
                            e[a("0x6a")] = O ? O.userType : 0;
                        }
                        this.K({
                            code: v.ROOM.CUSTOM_MESSAGE,
                            message: "",
                            rid: e.rid,
                            from: e.from,
                            userType: e.userType,
                            to: e.to || "",
                            data: e.data
                        });
                    } else if (s == x[a("0xb9")].Server.QueueInfo) {
                        var R, g = parseInt(e.data);
                        !isNaN(g) && g >= 0 && (this[a("0x76")] < 0 || g <= this[a("0x76")]) && (this.T = g, 
                        R = g > 0 ? ""[a("0x59")](g, "人排队中，预计等待")[a("0x59")](g, "分钟") : 0 == g ? "客服即将为您服务，请稍候" : "", 
                        this.K({
                            code: v.ROOM.QUEUE_INFO,
                            message: R,
                            data: {
                                position: g
                            }
                        }));
                    } else if (s == x.Command[a("0x89")][a("0x63")]) this.K({
                        code: v[a("0x3b")].RENEW_TOKEN,
                        message: "",
                        data: e.data
                    }); else if (s == x[a("0xb9")].Server.OnAudienceJoin) this[a("0x81")]({
                        code: v.ROOM.OnAudienceJoin,
                        message: "",
                        uid: e.uid,
                        data: e.data
                    }); else if (s == x.Command.Server.OnAudienceExit) this[a("0x81")]({
                        code: v[a("0x3b")].OnAudienceExit,
                        message: "",
                        uid: e.uid,
                        data: e.data
                    }); else if (s == x.Command.Server.OnReqAuths) this.K({
                        code: v.ROOM.OnReqAuths,
                        message: "",
                        uid: e.uid,
                        auths: e.auths,
                        data: e.data
                    }); else if (s == x.Command[a("0x89")].OnAuthsRejected) e.auths && e.auths.forEach(function(e) {
                        return t.ue.delete(e);
                    }), this.K({
                        code: v.ROOM.OnAuthsRejected,
                        message: "",
                        iid: e.iid,
                        auths: e.auths
                    }); else if (s == x.Command.Server.OnAuths) this[a("0x16")](e); else if (s == x[a("0xb9")].Server.OnAuthsCanceled) this.js(e); else if (s == x.Command.Server.OnPersonCountChanged) this.K({
                        code: v.ROOM.OnPersonCountChanged,
                        message: "",
                        data: e.data
                    }); else if (s == x[a("0xb9")][a("0x89")][a("0x9")]) this.K({
                        code: v.ROOM.OnAudienceList,
                        message: "",
                        data: e.data
                    }); else if (s == x.Command.Server.OnAuthsReqList) this.K({
                        code: v.ROOM[a("0x70")],
                        message: "",
                        data: e.data
                    }); else if (s == x.Command[a("0x89")].OnCancelReqAuths) this.K({
                        code: v[a("0x3b")].OnRequestAuthsCanceled,
                        message: "",
                        data: e[a("0x25")]
                    }); else if (s == x.Command[a("0x89")].RoutingInvitationInfo) {
                        if (e[a("0x82")] != this.rid) return;
                        this[a("0x81")]({
                            code: v.ROOM.OnRoutingInvitationInfo,
                            message: "",
                            data: e.data
                        });
                    }
                } else this.W({
                    scene: v.ROOM.ERROR_FORCE_LOGOUT,
                    hangUpReason: e.msg
                });
            } else this.ts(e); else {
                var b = e[a("0x25")].exists;
                this.W({
                    scene: b ? v.ROOM.LEAVE_TIMEOUT : v.ROOM.HANGUP_BY_OTHERS,
                    hangUpReason: "通话已结束"
                });
            } else this.W({
                scene: v.ROOM.ERROR_INVALID_TOKEN,
                hangUpReason: "呼叫失败请重试"
            }); else this.W({
                scene: v[a("0x3b")].ERROR_NETWORK_TIMEOUT,
                hangUpReason: "网络异常,连接超时"
            }); else this.K({
                code: v.ROOM.NETWORK_RESUME,
                message: "重新连接视频"
            }); else this.K({
                code: v.ROOM[a("0xc2")],
                message: "您的网络异常"
            });
        }
    }, {
        key: "Hs",
        value: function(e) {
            var t = e.data.__sdk_command__, i = e.data.__sdk_command_params__ || {};
            this[t] && a("0x5e") == s(this[t]) && this[t].call(this, i);
        }
    }, {
        key: a("0x8"),
        value: function(e) {
            0 != e.error && 101017 != e.error && (101051 != e.error ? e.req != x[a("0xb9")].Client.StartCall && e.req != x.Command.Client.DirectCall ? e.req != x.Command.Client.AnswerCall && e.req != x[a("0xb9")][a("0x57")].JoinMeeting ? this.K({
                code: v.ROOM.SERVER_MESSAGE,
                message: e.info,
                data: e
            }) : this.W({
                scene: v[a("0x3b")].ANSWER_FAILED,
                hangUpReason: "加入房间失败",
                error: e[a("0x2")],
                msg: e.msg
            }) : this[a("0x8f")]({
                scene: v.ROOM.CALL_FAILED,
                hangUpReason: a("0x12"),
                error: e.error,
                msg: e.msg
            }) : this.W({
                scene: v.ROOM.SERVER_BUSY,
                hangUpReason: "服务繁忙，请稍后再试",
                error: e.error,
                msg: e.msg
            }));
        }
    }, {
        key: "W",
        value: function(e) {
            y("hangUp", e);
            var t = [ v.ROOM.CALL_FAILED, v.ROOM.ANSWER_FAILED, v[a("0x3b")].NO_ANSWER, v.ROOM.REJECT_BY_OTHERS, v[a("0x3b")].HANGUP_BY_OTHERS, v.ROOM[a("0x6f")], v.ROOM.LEAVE_TIMEOUT, v[a("0x3b")].ERROR_NETWORK_TIMEOUT, v.ROOM.ERROR_INVALID_TOKEN, v.ROOM.ERROR_FORCE_LOGOUT, v[a("0x3b")].SERVER_BUSY ].indexOf(e[a("0x94")]) >= 0;
            this.stop(t), this.K({
                code: v.ROOM.EXIT,
                message: "通话结束",
                data: e
            });
        }
    }, {
        key: "switchCamera",
        value: function() {
            y("switchCamera"), this[a("0xa6")].getContext().switchCamera(), this.pusher.U = !this[a("0xa6")][a("0x2f")];
        }
    }, {
        key: a("0x7d"),
        value: function() {
            return this.pusher.enableCamera;
        }
    }, {
        key: "enableCamera",
        value: function(e) {
            var t = this;
            if (y("enableCamera", e), e && !this.checkAuth("camera")) return y("没有开启摄像头的权限"), 
            void this.K({
                code: v[a("0x3b")].CAMERA_OFF,
                message: ""
            });
            e && this.H++, this.setData("pusher.enableCamera", e, function() {
                !e && t.K({
                    code: v.ROOM.CAMERA_OFF,
                    message: ""
                });
            });
        }
    }, {
        key: a("0x49"),
        value: function() {
            return !this.pusher.enableMic;
        }
    }, {
        key: "muted",
        value: function(e) {
            y(a("0x68"), e), e || this.checkAuth(a("0x8b")) ? this.setData("pusher.enableMic", !e) : y(a("0x3f"));
        }
    }, {
        key: a("0xaa"),
        value: function() {
            return this.remoteMuted;
        }
    }, {
        key: "mutedRemote",
        value: function(e) {
            y("mutedRemote", e), this.setData("remoteMuted", e);
        }
    }, {
        key: "isMutedAll",
        value: function() {
            return this.allMuted;
        }
    }, {
        key: a("0xba"),
        value: function(e) {
            y(a("0xba"), e), this.setData(a("0x1f"), e);
        }
    }, {
        key: "stop",
        value: function(e) {
            this.es(), this.stopped || (this.stopped = !0, y("stop, quietly=", !!e), this.hs(), 
            !e && this[a("0x31")] && x.endCall(), x.close(), this[a("0x56")]());
        }
    }, {
        key: "Pe",
        value: function() {
            var e = this, t = 1e4;
            f[a("0x20")] && (t += 2e4), (this.be = f.delay(t)).then(function() {
                e.Ee(2);
            });
        }
    }, {
        key: "Ve",
        value: function() {
            this.be && this.be.cancel(), this.be = null;
        }
    }, {
        key: "K",
        value: function(e) {
            var t = !(arguments[a("0x8a")] > 1 && void 0 !== arguments[1]) || arguments[1], s = e.code;
            if (a("0x67") == s && e.data && e.data[a("0xb3")] && (s = s + a("0x84") + e.data[a("0xb3")]), 
            this.As(s)) if (t && y(a("0x50"), e), this.R[a("0x50")]) this.R.onRoomEvent.call(this.R, {
                detail: e
            }); else {
                if (!this[a("0x60")].triggerEvent) throw Error("onRoomEvent not found");
                this.R.triggerEvent("RoomEvent", e, {});
            }
        }
    }, {
        key: "startVideo",
        value: function() {
            this.pusher.url || ("function" == typeof this.R.initPusher && Object.assign(this.pusher, this.R.initPusher.call(this.R)), 
            this.pusher.userType = f.userType, this[a("0xa6")].data = this.getUserData()[f[a("0x14")]] || {}, 
            this.pusher.url = x[a("0x23")]({
                mode: this.mode,
                pureAudioPushMod: this.pureAudioPushMod
            }), this.H = this[a("0xa6")][a("0xbe")] ? 1 : 0, this.setData("pusher", this.pusher), 
            y(a("0x6e"), this.pusher), 0 == this.Js && (this.Js = 1, y("音视频进房开始"), this.Ue = Date.now(), 
            this[a("0x4a")]()));
        }
    }, {
        key: "hs",
        value: function() {
            this.pusher[a("0xcb")](), this.players.forEach(function(e) {
                return e.stop();
            });
        }
    }, {
        key: "Ms",
        value: function(e) {
            var t = this;
            if (e.users[0].uid == f.uid) f.v(this.Ts, e[a("0xcc")]), this[a("0x81")]({
                code: v.ROOM.OnAuths,
                message: "",
                iid: e.iid,
                auths: e.auths
            }), e.auths.forEach(function(e) {
                return t.ue.delete(e);
            }); else {
                var s = this.Y(e.users[0].uid);
                s ? (s.auths = s.auths || [], f.v(s.auths, e[a("0xcc")]), this[a("0x26")]("onAuths", s.uid)) : f.S(e.auths) && this.G(e, "onAuths");
            }
        }
    }, {
        key: a("0x72"),
        value: function(e) {
            var t = this;
            e.uids.forEach(function(s) {
                if (s == f.uid) f.g(t[a("0xce")], e.auths), f.h(e.auths) && t.pusher.enableCamera && t.enableCamera(!1), 
                f.p(e.auths) && t[a("0xa6")].enableMic && t.muted(!0), t.K({
                    code: v.ROOM[a("0x7")],
                    message: "",
                    iid: e[a("0x44")],
                    auths: e[a("0xcc")]
                }); else {
                    var i = t.Y(s);
                    i && (i.auths = i.auths || [], f.g(i.auths, e.auths), f.S(e[a("0xcc")]) && !f.S(i[a("0xcc")]) && t.L({
                        uid: s
                    }));
                }
            });
        }
    }, {
        key: a("0xa5"),
        value: function(e) {
            var t = this, s = this[a("0x85")];
            this[a("0x3e")]("users", e), e[a("0x6d")](function(e) {
                if (e[a("0x25")]) {
                    var s = p(t.players, e);
                    s >= 0 && t.setData(a("0x8c") + s + "].data", e.data);
                }
            });
            var i = s.filter(function(t) {
                return p(e, t) < 0;
            }), n = e.filter(function(e) {
                return p(s, e) < 0;
            });
            i.length && this.rs(i), n.length && this.os(n);
        }
    }, {
        key: "G",
        value: function(e) {
            var t = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "onUserEnterRoom", i = e[a("0x85")][a("0x1d")](function(e) {
                return p(t.users, e) < 0;
            });
            i[a("0x6d")](function(e) {
                return t[a("0x85")].push(e);
            }), i[a("0x8a")] && this.os(i, s), this.setData("users", this.users);
        }
    }, {
        key: a("0x69"),
        value: function(e) {
            var t = this, s = e[a("0x85")] || [];
            e[a("0x14")] && s.push({
                uid: e[a("0x14")]
            }), s = s[a("0x1d")](function(e) {
                return p(t.users, e) >= 0;
            }).map(function(e) {
                return t.Y(e.uid);
            }), this.users = this.users.filter(function(e) {
                return p(s, e) < 0;
            });
            var i = [];
            this.players = this.players.filter(function(e) {
                return !(p(t[a("0x85")], e) < 0 && (e.stop(), i[a("0x42")](e), 1));
            }), i.length && (this.R.updateUI && this[a("0x60")].updateUI.call(this[a("0x60")]), 
            this.as(i), this[a("0xd0")]()), this.setData("users", this.users), s.length && this.rs(s);
        }
    }, {
        key: a("0x37"),
        value: function(e) {
            var t = this.Y(e.uid);
            if (101027 != e[a("0x2")]) if (101028 != e.error) {
                if (101056 != e.error) 101057 != e[a("0x2")] ? this.K({
                    code: v.ROOM.SERVER_MESSAGE,
                    message: e.msg,
                    data: e
                }) : t && t.hiding && (t.hiding = !1, this.showHidingUsers || (this.ns(t), this[a("0xd0")]()), 
                this.ls([ t ])); else if (t && !t.hiding) {
                    if (t.hiding = !0, !this.showHidingUsers) {
                        var s = [];
                        this.players = this.players[a("0x1d")](function(e) {
                            return e.uid != t[a("0x14")] || (e.stop(), s.push(e), !1);
                        }), s.length && (this.R.updateUI && this.R.updateUI[a("0x66")](this.R), this.as(s), 
                        this.updateUI());
                    }
                    this.ds([ t ]);
                }
            } else t && !t.isOnline && (t.isOnline = !0, this.us([ t ])); else t && t.isOnline && (t[a("0x4c")] = !1, 
            this.cs([ t ]));
        }
    }, {
        key: "fs",
        value: function(e) {
            var t, s = this;
            try {
                t = JSON.parse(e.detail.message);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return coonsole.error(e), null;
            }
            return t && t.userlist && Array.isArray(t.userlist) ? t.userlist.filter(function(e) {
                return e.userid.startsWith(f.callto + "_");
            }).map(function(e) {
                if (e.uid = f[a("0xaf")](e[a("0x40")]), delete e[a("0x40")], null != e.playurl) {
                    e.url = e.playurl, delete e[a("0x15")], e[a("0x5")] = e.url.substring(e.url.indexOf("streamtype=") + 11);
                    var t = e.streamType.indexOf(a("0xe"));
                    t >= 0 && (e.streamType = e[a("0x5")].substring(0, t)), e[a("0x75")] = a("0xc0") + [ e.uid, e[a("0x5")] ].join("_"), 
                    delete e.streamtype;
                }
                if (null != e.hasvideo && (e[a("0x1a")] = e.hasvideo, delete e.hasvideo), null != e.hasaudio && (e[a("0xb8")] = e.hasaudio, 
                delete e.hasaudio), null != e[a("0x1a")] || null != e.hasAudio) {
                    var i = p(s[a("0x3c")], e);
                    i >= 0 && Object.assign(s.M[i], e);
                }
                return e;
            }) : null;
        }
    }, {
        key: "ms",
        value: function() {
            this.ps(this[a("0xcf")][a("0x1d")](function(e) {
                return !0;
            }));
        }
    }, {
        key: "gs",
        value: function(e) {
            var t = this, s = this[a("0x4")](e);
            s && s[a("0x6d")](function(e) {
                p(t[a("0x3c")], e) < 0 && t.M.push(e);
            });
        }
    }, {
        key: "Us",
        value: function(e) {
            var t = this.fs(e);
            this.ps(t);
        }
    }, {
        key: a("0x8d"),
        value: function(e, t) {
            var s = this;
            if (e && e.length) {
                t || (this.M = this.M.filter(function(t) {
                    return p(e, t) < 0;
                }));
                var i = [];
                this[a("0xcf")] = this.players.filter(function(t) {
                    return !(p(e, t) >= 0 && (i.push(t), s.J(t) ? (t.hasVideo = !1, t.hasAudio = !1, 
                    t.url = "", t.stop(), 0) : (t.stop(), 1)));
                }), i[a("0x8a")] && (this.as(i), i.forEach(function(e) {
                    x.reportPlayerLeave(e[a("0x14")], e[a("0x5")]);
                }), t || (this.R.updateUI && this[a("0x60")].updateUI[a("0x66")](this.R), this.updateUI()));
            }
        }
    }, {
        key: a("0x2b"),
        value: function(e, t) {
            var s = this, i = this.fs(e).filter(function(e) {
                return p(s[a("0x85")], e) >= 0;
            });
            if (i && i.length) {
                var n = !1, r = !1, o = [];
                i.forEach(function(e) {
                    if (s.showHidingUsers || !s.Y(e.uid)[a("0x27")]) {
                        var i = p(s.players, e, a("0x75"));
                        if (i >= 0) {
                            if (0 == e.hasAudio && s.As(a("0x5c")) && s.vs(e.uid, 0), r = !0, Object.assign(s.players[i], e), 
                            s.setData("players[".concat(i, "]"), s.players[i]), s[a("0xcf")][i].hasVideo || s[a("0xcf")][i].hasAudio) (e.hasVideo || e[a("0xb8")]) && s.players[i].play(s.R); else {
                                if (!s.J(s[a("0xcf")][i])) return s.ps([ s.players[i] ], !0), void (n = !0);
                                s[a("0xcf")][i].stop();
                            }
                            1033 == t ? o.push({
                                uid: s.players[i].uid,
                                userType: s.players[i].userType,
                                event: "onUserVideoChange",
                                hasVideo: s.players[i].hasVideo
                            }) : 1034 == t && o.push({
                                uid: s.players[i].uid,
                                userType: s[a("0xcf")][i][a("0x6a")],
                                event: "onUserAudioChange",
                                hasAudio: s[a("0xcf")][i].hasAudio
                            });
                        } else p(s.M, e) >= 0 && (r |= s.ns(e));
                    }
                }), n && this.R[a("0xd0")] && this.R.updateUI.call(this[a("0x60")]), r && this.updateUI(), 
                o[a("0x6d")](function(e) {
                    s.K({
                        code: v[a("0x3b")].USER_EVENT,
                        message: "",
                        data: e
                    });
                });
            }
        }
    }, {
        key: "ns",
        value: function(e) {
            if (e.hiding && !this.showHidingUsers) return !1;
            if (p(this.players, e) >= 0) return !1;
            var t = this.M.find(function(t) {
                return t.uid == e.uid;
            });
            e[a("0xb6")] = e[a("0xb6")] || t && t.url, e.hasVideo = t && t.hasVideo || !1, e.hasAudio = t && t.hasAudio || !1, 
            e.id = e[a("0x75")] || "jfplayer-".concat(e.uid, "_main"), y("addPlayer", e);
            var i = this.Y(e.uid);
            if (i) {
                e.userType = i[a("0x6a")], e.data = this.getUserData()[e.uid] || {};
                var n = {
                    uid: e.uid,
                    userType: e.userType,
                    data: e.data
                };
                n = a("0x5e") == s(this.R.addPlayer) ? this.R.addPlayer.call(this.R, n) : {}, n = Object[a("0x51")]({}, this.defaultPlayer, n, e);
                var r = new R(n);
                return a("0x61") == this.Ns && "android" == f[a("0xc")] && (r.Ds = !0), this.players.push(r), 
                !0;
            }
            return !1;
        }
    }, {
        key: "updateUI",
        value: function() {
            y("updateUI"), this.R.setData({
                jfVideoRoom: this
            });
        }
    }, {
        key: a("0x80"),
        value: function(e) {
            var t = this, s = arguments[a("0x8a")] > 1 && void 0 !== arguments[1] ? arguments[1] : "onUserEnterRoom";
            y(s, e);
            var i = !1;
            e.forEach(function(e) {
                t[a("0x4b")](e) && (i |= t.ns(e)), t.Rs(s, e.uid);
            }), i && this[a("0xd0")]();
        }
    }, {
        key: "rs",
        value: function(e) {
            var t = this;
            y("onUserExitRoom", e), e.forEach(function(e) {
                t.K({
                    code: v.ROOM.USER_EVENT,
                    message: "用户退出",
                    data: {
                        uid: e.uid,
                        userType: e.userType,
                        isOnline: e[a("0x4c")],
                        hiding: e.hiding,
                        event: "onUserExitRoom"
                    }
                });
            });
        }
    }, {
        key: "us",
        value: function(e) {
            var t = this;
            y("onUserOnline", e), e[a("0x6d")](function(e) {
                var s = p(t[a("0xcf")], e);
                s >= 0 && t.setData(a("0x8c") + s + "].isOnline", !0), t.Rs("onUserOnline", e.uid);
            });
        }
    }, {
        key: "cs",
        value: function(e) {
            var t = this;
            y("onUserOffline", e), e[a("0x6d")](function(e) {
                var s = p(t[a("0xcf")], e);
                s >= 0 && t.setData(a("0x8c") + s + a("0x4e"), !1), t.Rs("onUserOffline", e.uid);
            });
        }
    }, {
        key: "ds",
        value: function(e) {
            var t = this;
            y("onUserHide", e), e[a("0x6d")](function(e) {
                var s = p(t.players, e);
                s >= 0 && t.setData("players[" + s + "].hiding", !0), t[a("0x26")](a("0x45"), e.uid);
            });
        }
    }, {
        key: a("0xad"),
        value: function(e) {
            var t = this;
            y("onUserShow", e), e[a("0x6d")](function(e) {
                var s = p(t.players, e);
                s >= 0 && t[a("0x3e")]("players[" + s + "].hiding", !1), t.Rs("onUserShow", e.uid);
            });
        }
    }, {
        key: "_s",
        value: function(e) {
            if (this[a("0x6")] || (this.es(), this[a("0x6")] = !0, this[a("0x81")]({
                code: v.ROOM[a("0x55")],
                message: ""
            })), e[a("0x21")] = 0, e.Ps = 0, !e.isPlaying) {
                var t = p(this.players, e);
                this[a("0x3e")]("players[" + t + "].isPlaying", !0), y("onUserEnterVideo", e.uid), 
                this.Rs("onUserEnterVideo", e.uid, e.streamType);
            }
        }
    }, {
        key: "as",
        value: function(e) {
            var t = this;
            e.forEach(function(e) {
                if (e.Vs = 0, e[a("0x32")] = 0, e.isPlaying) {
                    var s = p(t.players, e);
                    s >= 0 && t.setData("players[" + s + "].isPlaying", !1), y("onUserExitVideo", e.uid), 
                    t[a("0x26")]("onUserExitVideo", e[a("0x14")], e.streamType);
                }
            });
        }
    }, {
        key: "ws",
        value: function(e) {
            var t = this;
            y("onUserVideoError", e), e[a("0x6d")](function(e) {
                t.Rs("onUserVideoError", e.uid);
            });
        }
    }, {
        key: "V",
        value: function(e) {
            var t, s = this;
            if (!this.stopped && (this.pusher.getContext(this.R), 1020 != (t = e.detail ? e.detail.code : e))) {
                this.Ws = 4999 == t;
                try {
                    y("onPush", e.detail.code, e.detail.message, "id=" + e.currentTarget.id);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    y("onPush", e);
                }
                switch (!this[a("0x1b")] && this[a("0x33")] && t > 0 && 5e3 != t && 1022 != t && (this.A = !0, 
                this.K({
                    code: v.ROOM.INITED,
                    message: "",
                    rid: this.rid,
                    tid: this[a("0x33")],
                    oid: this.oid,
                    data: this.roomInfo
                })), t) {
                  case 1003:
                    if (!this.H) break;
                    this.H--, this[a("0x81")]({
                        code: v[a("0x3b")].CAMERA_ON,
                        message: ""
                    });
                    break;

                  case -1301:
                    if (!this.H) break;
                    this[a("0x65")]--, this.setData("pusher.enableCamera", !1, function() {
                        s.K({
                            code: v.ROOM.CAMERA_OFF,
                            message: ""
                        });
                    });
                    break;

                  case 1018:
                    this.Oe(), this.ms();
                    break;

                  case 1022:
                    this.Ee(1);
                    break;

                  case 1031:
                    this[a("0xc1")](e);
                    break;

                  case 1032:
                    this.Us(e);
                    break;

                  case 1033:
                  case 1034:
                    this.ys(e, t);
                }
            }
        }
    }, {
        key: "P",
        value: function(e) {
            if (!this.stopped) {
                var t = e.details || e.detail, s = t.errno, i = t.errMsg, n = t.errorCode, r = t.errorMsg;
                if (10004 != n && y("推流错误:", t), 1107001 != s) {
                    switch (n) {
                      case 10001:
                        y("用户禁止使用摄像头"), r = "未获取到摄像头功能权限，请删除小程序后重新打开";
                        break;

                      case 10002:
                        y(a("0x74")), r = "未获取到录音功能权限，请删除小程序后重新打开";
                        break;

                      default:
                        return;
                    }
                    this.W({
                        scene: v.ROOM.ERROR_CAMERA_MIC_PERMISSION,
                        hangUpReason: r || "未获取到摄像头、录音功能权限，请删除小程序后重新打开"
                    });
                } else a("0xa9") === i ? this.Ee(3) : "fail voip is calling" === i && this[a("0x73")](4);
            }
        }
    }, {
        key: "C",
        value: function(e) {
            var t = this;
            if (!this.stopped) {
                try {
                    y("onPlay", e.detail.code, e.detail.message, "id=" + e.currentTarget.id);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    y("onPlay", e);
                }
                this.players[a("0x6d")](function(s) {
                    if (e.currentTarget.id == s.id) switch (s[a("0xb1")](t.R), e[a("0x79")].code) {
                      case 2105:
                      case 2003:
                      case 2004:
                        t._s(s);
                    }
                });
            }
        }
    }, {
        key: a("0x29"),
        value: function(e) {
            if (!this.stopped) {
                y("onNetStatus", e.target.id, e.detail.info);
                var t = e.detail.info.audioBitrate;
                "hide" != this.Ns && (this[a("0xd")] ? t > 1 && (this.Bs = !1, y("音视频恢复"), this.onShow()) : 1 == t && this[a("0x9a")] && (this[a("0xd")] = !0, 
                y("音视频中断"), this.onHide(!1)));
            }
        }
    }, {
        key: "O",
        value: function(e) {
            if ("jfpusher" != e.target.id) {
                if (!this.stopped) {
                    y("onNetStatus", e.target.id, e.detail.info);
                    var t = this[a("0xcf")].filter(function(t) {
                        return t.id == e.target.id;
                    })[0];
                    if (t) {
                        var s = e.detail.info.videoWidth, i = e[a("0x79")].info.videoHeight;
                        t[a("0x88")] === s && t.xs === i || (t[a("0x88")] = s, t.xs = i, this[a("0x26")]("onUserVideoSizeChanged", t.uid));
                        var n = e.detail.info.netSpeed;
                        0 == n && t.isPlaying ? (t.Vs = t.Vs || 0, t.Vs++, t.Vs > 2 && this[a("0xc3")]([ t ])) : n > 5 && !t.isPlaying && (t.Ps = t.Ps || 0, 
                        t[a("0x32")]++, t.Ps > 1 && this._s(t));
                        var r = this[a("0x3a")](e.target.id);
                        x.reportPlayerStatus(e, r[0], r[1]);
                    }
                }
            } else this.$s(e);
        }
    }, {
        key: a("0xf"),
        value: function(e, t) {
            x.sendCustomMessage(e, t);
        }
    }, {
        key: "setRoomData",
        value: function(e) {
            return y(a("0x97"), e), this.rid ? (e = e || {}, x.sendMessage({
                cmd: x.Command.Client.SetRoomData,
                rid: this.rid,
                data: e
            }), this.setData(a("0x83"), e), !0) : (y(a("0x7b")), !1);
        }
    }, {
        key: "setUserData",
        value: function(e) {
            e = e || {}, x.setUserData(e), this.setData("pusher.data", e);
        }
    }, {
        key: "getUserData",
        value: function() {
            return x.getUserData();
        }
    }, {
        key: "Rs",
        value: function(e, t, s) {
            var i = this.Y(t);
            if (i) {
                if (!this.showHidingUsers) if ("onUserShow" == e) e = "onUserEnterRoom"; else if ("onUserHide" == e) e = "onUserExitRoom"; else if (i[a("0x27")]) return;
                var n = "";
                switch (e) {
                  case a("0x46"):
                    n = "用户授权";
                    break;

                  case "onAuthsCanceled":
                    n = "用户授权取消";
                    break;

                  case a("0xbd"):
                    n = "用户进入";
                    break;

                  case "onUserOnline":
                    n = "用户上线";
                    break;

                  case "onUserEnterVideo":
                    n = "用户接通";
                    break;

                  case "onUserVideoError":
                    n = "通话异常";
                    break;

                  case "onUserExitVideo":
                    n = a("0xc8");
                    break;

                  case "onUserOffline":
                    n = a("0x7e");
                    break;

                  case "onUserExitRoom":
                    n = a("0x87");
                    break;

                  case "onUserShow":
                    n = a("0x18");
                    break;

                  case "onUserHide":
                    n = "用户隐身";
                }
                var r = {
                    uid: t,
                    userType: i.userType,
                    isOnline: i.isOnline,
                    hiding: i.hiding,
                    event: e
                };
                if (s && (r.streamType = s), a("0x43") == e) {
                    var o = this[a("0xcf")].find(function(e) {
                        return e.uid == t;
                    });
                    r.videoWidth = o.Es, r.videoHeight = o.xs;
                }
                this.K({
                    code: v[a("0x3b")][a("0x67")],
                    message: n,
                    data: r
                });
            }
        }
    }, {
        key: "Os",
        value: function() {
            var e = this;
            if (!this.stopped && this.pusher.url) {
                var t = f.platform, s = this.R, i = this.pusher;
                i.start(s).catch(function(e) {
                    y("pusher.restart", e), i.stop().then(function() {
                        return i.start(s);
                    });
                }).then(function() {
                    y("pusher.restart", "success"), a("0x39") == t && "seperated" != f.renderingMode() && e.pusher.enableCamera ? e.setData("pusher.enableCamera", !1, function() {
                        setTimeout(function() {
                            e.setData("pusher.enableCamera", !0);
                        }, 500);
                    }) : "ios" == t && e.pusher.enableMic && (y("重启麦克风"), e.setData("pusher.enableMic", !1, function() {
                        e.setData("pusher.enableMic", !0);
                    }));
                }).catch(function(e) {
                    y("pusher.restart", "fail", e);
                }), this[a("0xcf")].forEach(function(t) {
                    t.Ds && (delete t.Ds, t[a("0xcb")]()[a("0x3d")](function() {
                        return t.play(e.R);
                    }));
                });
            }
        }
    }, {
        key: "onShow",
        value: function() {
            this.D && (clearInterval(this.D), this.D = void 0), this.D = setInterval(function() {
                wx.setKeepScreenOn({
                    keepScreenOn: !0,
                    fail: function(e) {}
                });
            }, 1e4), this.ks(), this.Os(), this[a("0x2d")] = "";
        }
    }, {
        key: "onHide",
        value: function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.D && (clearInterval(this[a("0x11")]), this.D = void 0), wx.setKeepScreenOn({
                keepScreenOn: !1,
                fail: function(e) {}
            }), this[a("0x9a")] = !1, e && (this[a("0x2d")] = "hide", this.Bs = !1);
        }
    }, {
        key: a("0x86"),
        value: function() {
            this.es(), this[a("0xc7")] && (y("playCallingTone", this.callingTone), this[a("0x99")] = wx.createInnerAudioContext(), 
            this.I.autoplay = !0, this[a("0x99")].loop = !0, this.I.src = this.callingTone);
        }
    }, {
        key: "es",
        value: function() {
            this.I && (y("stopCallingTone"), this.I.stop(), this[a("0x99")][a("0x71")](), this.I = void 0);
        }
    }, {
        key: "ks",
        value: function() {
            this.I && (y("resumeCallingTone"), this[a("0x99")].play());
        }
    }, {
        key: "setPlayerFillMode",
        value: function(e, t) {
            var s = a(e ? "0x9f" : "0x78");
            if (t) {
                y("setPlayerFillMode", e, t);
                for (var i = 0; i < this.players.length; i++) this.players[i].uid == t && this.setData("players[" + i + "].objectFit", s);
            } else for (y("setPlayerFillMode", e), this.defaultPlayer.objectFit = s, i = 0; i < this.players[a("0x8a")]; i++) this.setData("players[" + i + "].objectFit", s);
        }
    }, {
        key: "setPlayerSoundMode",
        value: function(e) {
            y.apply(void 0, [ a("0x9b") ][a("0x59")](Array.prototype.slice.call(arguments))), 
            this.defaultPlayer.soundMode = e;
            for (var t = [], s = 0; s < this.players.length; s++) t[s] = this.setData("players[" + s + "].soundMode", e);
            return Promise.all(t);
        }
    }, {
        key: "getPlayerSoundMode",
        value: function() {
            return this.defaultPlayer[a("0xcd")];
        }
    }, {
        key: a("0x9e"),
        value: function(e) {
            if (!e) return this.defaultPlayer.orientation;
            var t = this[a("0xcf")].find(function(t) {
                return t.uid == e;
            });
            return t && t.orientation || this.defaultPlayer[a("0x2c")];
        }
    }, {
        key: "setPlayerVideoOrientation",
        value: function(e) {
            var t = this, s = e.orientation, i = e.uid;
            if (y.apply(void 0, [ "setPlayerVideoOrientation" ].concat(Array.prototype.slice.call(arguments))), 
            i) {
                var n = this.players.findIndex(function(e) {
                    return e.uid == i;
                });
                n >= 0 && this.setData(a("0x8c").concat(n, a("0xa3")), s);
            } else this[a("0xbc")][a("0x2c")] = s, this.players.forEach(function(e, i) {
                t.setData("players[".concat(i, "].orientation"), s);
            });
        }
    }, {
        key: a("0x95"),
        value: function(e) {
            if (!e) return this[a("0xbc")].muteVideo;
            for (var t = 0; t < this.players.length; t++) if (this.players[t].uid == e) return this[a("0xcf")][t].muteVideo;
            return this.defaultPlayer.muteVideo;
        }
    }, {
        key: "setPlayerMuteVideo",
        value: function(e, t) {
            var s = this;
            t ? (y("setPlayerMuteVideo", e, t), this[a("0xcf")].forEach(function(i, n) {
                i.uid == t && s.setData("players["[a("0x59")](n, a("0xc9")), e);
            })) : (y("setPlayerMuteVideo", e), this[a("0xbc")].muteVideo = e, this[a("0xcf")].forEach(function(t, i) {
                s.setData("players[".concat(i, "].muteVideo"), e);
            }));
        }
    }, {
        key: a("0x47"),
        value: function(e) {
            if (this[a("0xb4")](a("0x5c"))) {
                var t = this.Cs(e[a("0xa8")].id)[0], s = e.detail[a("0x9d")];
                this[a("0x1e")](t, s);
            }
        }
    }, {
        key: "vs",
        value: function(e, t) {
            for (var s = 0; s < this.players.length; s++) if (this[a("0xcf")][s].uid == e && "main" == this.players[s][a("0x5")]) {
                this.players[s].volume != t && (this.setData("players[" + s + "].volume", t), this.setData(a("0x8c") + s + "].isSpeaking", t > this.isSpeakingThreshold)), 
                this[a("0x81")]({
                    code: v.ROOM[a("0x67")],
                    message: "",
                    data: {
                        uid: e,
                        userType: this.players[s].userType,
                        event: a("0x28"),
                        volume: t,
                        isSpeaking: t > this.isSpeakingThreshold
                    }
                }, !1);
                break;
            }
        }
    }, {
        key: "Cs",
        value: function(e) {
            var t = (e = e[a("0x54")](9)).lastIndexOf("_");
            return [ e.substring(0, t), e.substring(t + 1) ];
        }
    }, {
        key: "Y",
        value: function(e) {
            return this[a("0x85")][a("0xb0")](function(t) {
                return t.uid == e;
            });
        }
    }, {
        key: "getReqAuths",
        value: function() {
            return this.ue;
        }
    }, {
        key: "reqAuths",
        value: function(e) {
            var t = this;
            e && ((e = e.filter(function(e) {
                return t[a("0xce")].indexOf(e) < 0 && !t[a("0xa7")].has(e);
            })).length < 1 || (e[a("0x6d")](function(e) {
                return t.ue[a("0x19")](e);
            }), x.ue(e)));
        }
    }, {
        key: "cancelAuthsRequest",
        value: function(e) {
            var t = this;
            e ? (e = e.filter(function(e) {
                return t.ue.has(e);
            })).forEach(function(e) {
                return t.ue.delete(e);
            }) : (e = r(this.ue), this.ue.clear()), e.length < 1 || x.we(e);
        }
    }, {
        key: "rejectAuths",
        value: function(e) {
            x.ae(e);
        }
    }, {
        key: a("0x7f"),
        value: function(e, t) {
            var s = this.Y(e.uid);
            f.S(t) && (s || ((s = JSON.parse(JSON.stringify(e))).auths = s.auths || [], f.v(s[a("0xcc")], t), 
            this.G({
                users: [ s ]
            }))), s && (s.auths = s.auths || [], f.v(s.auths, t)), x.de(e[a("0x14")], t);
        }
    }, {
        key: "cancelAuths",
        value: function(e, t) {
            var s = this;
            (e || this[a("0x85")].map(function(e) {
                return e.uid;
            })).forEach(function(e) {
                var i = s.Y(e);
                i && (i.auths = i.auths || [], f.g(i[a("0xcc")], t), f.S(t) && !f.S(i.auths) && s[a("0x69")]({
                    uid: e
                }));
            }), x.se(e, t);
        }
    }, {
        key: "cancelSelfAuths",
        value: function(e) {
            x.fe(e), f.g(this[a("0xce")], e), f.h(e) && this.pusher.enableCamera && this[a("0xbe")](!1), 
            f.p(e) && this.pusher[a("0x4f")] && this.muted(!0);
        }
    }, {
        key: "kickOut",
        value: function(e) {
            x.le(e);
        }
    }, {
        key: "queryAudience",
        value: function(e) {
            x.ve(e);
        }
    }, {
        key: "queryAuthsReq",
        value: function(e) {
            x.me(e);
        }
    }, {
        key: "inviteViaRouting",
        value: function(e) {
            x._e(e);
        }
    }, {
        key: "cancelInvitationViaRouting",
        value: function(e) {
            x.Re(e);
        }
    }, {
        key: "rotatePusherScreen",
        value: function() {
            var e = this.pusher.videoOrientation;
            e = "vertical" == e ? "horizontal" : "vertical", this.setData("pusher.videoOrientation", e);
        }
    }, {
        key: a("0x1"),
        value: function() {
            return this.pusher.videoOrientation;
        }
    }, {
        key: "setPusherVideoOrientation",
        value: function(e) {
            y.apply(void 0, [ "setPusherVideoOrientation" ].concat(Array.prototype.slice.call(arguments))), 
            this[a("0x3e")]("pusher.videoOrientation", e);
        }
    }, {
        key: "Oe",
        value: function() {
            if (1 == this.Js) {
                this.Js = 2, this.Ve();
                var e = Date[a("0xb")]() - this.Ue;
                y("音视频进房成功", e), x.report(a("0x17"), {
                    error: 0,
                    message: "音视频进房成功",
                    time: e
                });
            }
        }
    }, {
        key: "Ee",
        value: function(e) {
            if (1 == this.Js) if (this.Js = 3, this.Ve(), f.je) this[a("0x8f")]({
                scene: v.ROOM[a("0xa4")],
                hangUpReason: "开发者工具不支持"
            }); else {
                var t, s;
                1 == e ? (t = v.ROOM[a("0xa4")], s = "音视频异常") : 2 == e ? (t = v.ROOM.ERROR_JOIN_ROOM, 
                s = "音视频超时") : 3 == e ? (t = v.ROOM.FAIL_PHONE_IS_CALLING, s = "正在打电话") : 4 == e && (t = v[a("0x3b")].FAIL_VOIP_IS_CALLING, 
                s = "正在音视频通话");
                var i = Date.now() - this.Ue;
                y(a("0xa"), s, i), this.W({
                    scene: t,
                    hangUpReason: s
                }), x.report("event_wxlite_enter_video_room_fail", {
                    error: e,
                    message: s,
                    time: i
                });
            }
        }
    } ]), e;
}();

exports.JFVideoRoom = g;
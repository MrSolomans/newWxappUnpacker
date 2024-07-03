var e, t, n = require("../@babel/runtime/helpers/typeof"), o = [ "length", "jfvideo", "sendMessage", "grantAuths", "cameraAuthorized", "reportPlayerLeave", "event_room_network_error", "success", "data", "rid已存在，不能发起呼叫", "CustomMessage", "catch", "json2query", "videocall", "parse", "event_video_call_start", "endCall", "oid", "WebSocket关闭失败", "getStorageSync", "cancelMeetingOrder", " complete", "SetUserData", "videoBitrate", "callto", "HeartBeat", "server", "rid不存在", "https://", "uploadLog", "/", "join", "number", "onError", "se", "slice", "oe", "report", "uid", "event_calltype_video_hd", "sid", "_", "/get?callto=", "/cancel?callto=", "connectSocket", "rid", "users", "&roomid=", "setUserData", "getPushURL", "token", "CancelSelfAuths", "&", "jfvideo3", "ie", "split", "Server", "ve", "iid", "sdkappid", "groupType", "getRidFromServer", "event_video_receive_fail", "&usersig=", "send", "InviteViaRouting", "error", "Command", "isConnected", "he", "?", "pullurls", "forEach", "getTime", "pushurl", "POST", "cancelSelfAuths", "prototype", "cmd", "startDatetimeStart", "RoomMessage", ", iid=", "call", "wx", "sendCustomMessage", "statusCode", "delayPull", "request", "floor", "info", "请授权访问", "setMessageHandler", "startDatetime", "reportPlayerStatus", "symbol", "push", "clearUserCache", "use strict", "QueryAuthsReq", " 00:00:00", "pureAudioPushMod", "now", "concat", "OnTimeout", "-", "uuid", "Str_uc_params", "sid: ", "req", "pause", "getStreamIDFromURL", "re", "hangUp", "Client", "tid", "indexOf", "会议开始时间不能为空", "Hangup", "CreateAndJoinOrderRoom", "ne", "detail", "code", "userType", "close", "apply", "te", "reqAuths", "_e", "connect", "wx.authorize: " ];

e = o, t = 288, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var i = function(e, t) {
    return o[e -= 0];
};

function a(e) {
    return (a = "function" == typeof Symbol && i("0x42") == n(Symbol.iterator) ? function(e) {
        return n(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? i("0x42") : n(e);
    })(e);
}

i("0x45");

var r = require("./JFSDK.js");

function d() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    r.log.apply(r, [ "JFVideo" ].concat(t));
}

var c, s, u, l, m, f = {
    checkAuthorize: function(e) {},
    setMessageHandler: function(e) {},
    connect: function() {},
    close: function() {},
    pause: function() {},
    resume: function() {},
    sendMessage: function(e) {},
    log: function(e) {},
    isConnected: function() {},
    getStreamIDFromURL: function(e) {},
    getUIDFromURL: function(e) {},
    Command: {
        OnConnected: -1,
        OnError: -2,
        OnResume: -3,
        OnTimeout: -4,
        OnInvalidToken: -5,
        Client: {
            StartCall: 1e3,
            AnswerCall: 1001,
            Hangup: 1002,
            Invite: 1003,
            QueryInvitation: 1004,
            CancelInvitation: 1005,
            AcceptInvitation: 1006,
            DirectCall: 1007,
            RefuseInvitation: 1008,
            SetUserData: 1009,
            CustomMessage: 1012,
            RenewToken: 1018,
            IS_EXISTS_ROOM: 1019,
            HIDING: 1021,
            SetRoomData: 1022,
            InviteViaRouting: 1028,
            CancelInvitationViaRouting: 1029,
            CreateMeeting: 1100,
            JoinMeeting: 1101,
            ReqAuths: 1103,
            RejectAuths: 1104,
            GrantAuths: 1105,
            CancelAuths: 1106,
            CancelSelfAuths: 1107,
            KickOut: 1108,
            QueryAudience: 1110,
            QueryAuthsReq: 1111,
            CancelReqAuths: 1112,
            CreateAndJoinOrderRoom: 1024
        },
        Server: {
            HeartBeat: 0,
            UserIdle: 2,
            ForceLogout: 3,
            RoomInfo: 2e3,
            AddMember: 2001,
            RemoveMember: 2002,
            Hangup: 2003,
            InvitationInfo: 2004,
            CallResult: 2005,
            CancelInvitation: 2006,
            RoomMessage: 2007,
            ReceiveUserData: 2009,
            CustomMessage: 2012,
            QueueInfo: 2017,
            RenewToken: 2018,
            ReceiveRoomData: 2022,
            RoutingInvitationInfo: 2028,
            OnAudienceJoin: 2101,
            OnAudienceExit: 2102,
            OnReqAuths: 2103,
            OnAuthsRejected: 2104,
            OnAuths: 2105,
            OnAuthsCanceled: 2106,
            OnKickedOut: 2108,
            OnPersonCountChanged: 2109,
            OnAudienceList: 2110,
            OnAuthsReqList: 2111,
            OnCancelReqAuths: 2112
        }
    },
    tid: "",
    groupType: ""
}, x = "JFVideo.lastHangUpRID", p = void 0, v = function(e) {}, g = v, h = v, C = v, y = v, S = [], R = !1, I = !1, A = !1, M = !1, w = !1, _ = 0, O = void 0, k = 0, D = [], T = void 0, b = !1;

f.rid = "";

var U = {}, q = {}, P = "meeting/order";

function j() {
    setTimeout(function() {
        r[i("0x1")]();
    }, 2e3);
}

function E() {
    if (f.rid = "", m = "", U = {}, R = !1, I = !1, _ = 0, r.uploadLog(), !A) {
        g = function(e) {
            d("SocketOpen"), f[i("0x9")]("event_video_websocket_success"), u = !0, l = !1, R = !0, 
            _ = 0, F(), setTimeout(function() {
                for (;S.length; ) {
                    var e = S.shift();
                    if (!f.sendMessage(e)) break;
                }
            }, 0);
        };
        var e = function() {
            N(), Q();
            var e = p;
            R = !1, p = null, e && e[i("0x5f")]({
                fail: function(e) {
                    return d(i("0x78"), e);
                }
            }), function() {
                if (!O && !I && !w) {
                    var e = new Date().getTime();
                    if (0 == _) k = e + 1e3 * r.jfvideo.timeout; else if (e >= k) return L({
                        cmd: f.Command[i("0x4b")]
                    }), void f.report("event_video_conn_timeout", {
                        timeout: r.jfvideo.timeout
                    });
                    b ? (b = !1, _--) : (L({
                        cmd: f[i("0x27")].OnError
                    }), 0 == _ && f.report(i("0x6c"), {
                        networkType: r.getNetworkType()
                    })), O = setTimeout(function() {
                        O = void 0, _++, J();
                    }, 1e3);
                }
            }();
        };
        y = function(t) {
            d[i("0x60")](void 0, [ "SocketClose" ][i("0x4a")](Array.prototype[i("0x7")].call(arguments))), 
            e();
        }, h = function(t) {
            d("SocketError", t), e();
        }, C = function(e) {
            if (!I) {
                var t = JSON[i("0x74")](e.data);
                L(t), t.cmd != f.Command.Server.HeartBeat && (u = !1);
            }
        }, A = !0;
    }
}

function H() {
    p && y();
}

function J() {
    I || w || p || (d(i("0x10"), _), r.isNetworkDown() ? h({
        errMsg: "network is down"
    }) : f.ee().then(function(e) {
        return f[i("0x61")](e);
    }));
}

function L(e) {
    d("onMessage", e);
    var t = e.cmd;
    if (3100 != t) {
        if (1 == t) switch (parseInt(e.req)) {
          case f.Command.Client.StartCall:
          case f.Command.Client.DirectCall:
            0 == e[i("0x26")] ? ("string" == typeof e.data && (f.rid = e.data), f.report("event_video_call_success")) : f.report("event_video_call_fail", e);
            break;

          case f.Command.Client.AnswerCall:
          case f.Command[i("0x55")].AcceptInvitation:
          case f.Command.Client.JoinMeeting:
            0 == e.error ? f.report("event_video_receive_success") : f.report(i("0x22"), e);
        }
        if (t == f.Command.Server.HeartBeat) return f.sendMessage(e), void F(e);
        if (t == f.Command.Server.UserIdle && (f[i("0x11")] = "", m = "", U = {}, f.tid = ""), 
        t == f.Command.Server.InvitationInfo && (f.rid = e.rid, m = e[i("0x1e")], U = {}, 
        f.tid = ""), t == f[i("0x27")].Server.RoomInfo && (f.rid = e.rid, m = "", U = {}, 
        q = {}, f.tid = e.tid || "", f[i("0x20")] = e.groupType || "Public", r.expire && e.data.sessionTimeout && new Date()[i("0x2d")]() + 1e3 * e.data.sessionTimeout >= 1e3 * r.expire && f[i("0x68")]({
            cmd: f.Command.Client.RenewToken
        }), e.users && e[i("0x12")][i("0x2c")](function(e) {
            e.data && (U[e.uid] = e[i("0x6e")]);
        })), t == f.Command.Server.RenewToken && r.set({
            uid: r.uid,
            token: e.data.token,
            expire: e.data.expire
        }), t == f[i("0x27")].Server.ReceiveUserData && e.rid == f.rid && (U[e[i("0xa")]] = e.data), 
        t == f.Command.Server.Hangup || t == f.Command.Server.OnKickedOut) {
            if (e.rid != f.rid) return;
            f.rid = "", m = "", U = {}, f.tid = "", N(), j();
        }
        if (t >= 2e3 && t < 3e3 && f.sendMessage({
            cmd: 1,
            error: 0,
            msg: "OK",
            req: t
        }), c) {
            if (u && 1 == t && 101051 == e.error && (I = !0), 1 == t && 101017 == e.error) return I = !0, 
            r[i("0x44")](), c.call(s, {
                cmd: f[i("0x27")].OnInvalidToken
            }), void j();
            if (t == f.Command.Server.ForceLogout && (f[i("0x9")]("event_video_force_logout"), 
            I = !0, r.clearUserCache(), j()), u) if (t == f[i("0x27")][i("0x1c")].RoomInfo) {
                if (e.rid == wx.getStorageSync(x)) return d("自动挂断", e.rid), l = !0, void f.sendMessage({
                    cmd: f.Command.Client[i("0x59")],
                    rid: e.rid
                });
            } else wx.setStorageSync(x, "");
            if (1 == t && e[i("0x50")] == f.Command.Client.Hangup && 0 == e[i("0x26")] && wx.getStorageSync(x) && (wx.setStorageSync(x, ""), 
            l)) return l = !1, void L({
                cmd: f.Command.Server.UserIdle.toString()
            });
            if (r.jfvideo.delayPull <= 0 || !f.isRtmp()) t == f[i("0x27")].Server.RoomInfo && (e.m = !0); else {
                var n = null, o = r.jfvideo.delayPull;
                if (t == f.Command.Server.RoomInfo && (e.pullurls && e.pullurls.length ? ((n = JSON[i("0x74")](JSON.stringify(e))).cmd = f[i("0x27")].Server.AddMember, 
                n.m = !0, delete e.pullurls, delete n[i("0x2e")], u && (o = r[i("0x67")].delayPull2)) : e.m = !0), 
                (t == f.Command.Server.AddMember || t == f[i("0x27")].Server.RoomMessage && 101028 == e.error && e.pullurls && e[i("0x2b")].length) && (t == f[i("0x27")][i("0x1c")][i("0x34")] && 101028 == e.error && (o = r[i("0x67")].delayPull2), 
                n = e, e = null), n) {
                    d("addAsyncTask", D[i("0x66")], n);
                    var a = setTimeout(function() {
                        d("execAsyncTask", n), c.call(s, n), N(a);
                    }, Math[i("0x3c")](1e3 * o));
                    D.push(a);
                }
            }
            e && c.call(s, e);
        }
    } else e.data && e.data.goodHost && f[i("0x5b")](e.data.goodHost);
}

function N(e) {
    if (!(r.jfvideo[i("0x3a")] <= 0)) {
        var t = D[i("0x66")];
        if (e) {
            for (var n = 0; n < t; n++) if (D[n] == e) {
                D.splice(n, 1), d("clearAsyncTask", n);
                break;
            }
        } else {
            for (d("clearAsyncTask, all:", t), n = 0; n < t; n++) clearTimeout(D[n]);
            D.splice(0, t);
        }
    }
}

f[i("0x28")] = function() {
    return R;
}, f.checkAuthorize = function(e) {
    d.apply(void 0, [ "checkAuthorize" ].concat(Array.prototype.slice.call(arguments)));
    var t = function(t) {
        t ? (d("checkAuthorize", i("0x6d")), e.success && e[i("0x6d")]()) : (d("checkAuthorize", "fail"), 
        e.fail && e.fail());
    };
    if (r.je) t(!0); else {
        var n = e.scopes || [ "scope.camera", "scope.record" ], o = n.map(function(e) {
            return "scope.camera" == e ? "摄像头" : "麦克风";
        }).join("和"), a = e.message;
        a || (a = i("0x3e").concat(o));
        var c = wx.getSystemInfoSync();
        if (n.indexOf("scope.camera") >= 0 && !1 === c[i("0x6a")] || n.indexOf("scope.record") >= 0 && !1 === c.microphoneAuthorized) wx.showModal({
            title: "",
            showCancel: !1,
            content: "请在手机系统中授权微信访问".concat(o),
            success: function(e) {
                t(!1);
            }
        }); else {
            var s = Array.from(n);
            wx.getSetting({
                success: function(e) {
                    for (var o in d("wx.getSetting", e.authSetting), e.authSetting) if (e.authSetting[o]) for (var r = 0; r < n.length; r++) if (n[r] == o) {
                        n.splice(r, 1);
                        break;
                    }
                    if (0 != n.length) {
                        var c = n.length, u = !0, l = function() {
                            var e = n[r];
                            d("wx.authorize: " + e), wx.authorize({
                                scope: e,
                                success: function() {
                                    d(i("0x65") + e + " success");
                                },
                                fail: function() {
                                    d(i("0x65") + e + " fail"), u = !1;
                                },
                                complete: function() {
                                    if (d("wx.authorize: " + e + i("0x7b")), 0 == --c) {
                                        if (u) return void t(!0);
                                        wx.showModal({
                                            title: "",
                                            content: a,
                                            success: function(e) {
                                                e.cancel ? t(!1) : wx.openSetting({
                                                    success: function(e) {
                                                        u = !0;
                                                        for (var n = 0; n < s.length; n++) e.authSetting[s[n]] || (u = !1);
                                                        t(u);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }
                            });
                        };
                        for (r = 0; r < n[i("0x66")]; r++) l();
                    } else t(!0);
                }
            });
        }
    }
}, f[i("0x3f")] = function(e, t) {
    c = e, s = t;
}, f[i("0x64")] = function(e) {
    if (d.apply(void 0, [ "connect" ].concat(Array.prototype.slice.call(arguments))), 
    f.isRtc() && !r.sdkappid) throw d("无sdkappid"), j(), Error("无sdkappid");
    M || (T && (b = new Date().getTime() - T < 100), this.ie = e || {}, M = !0, E(), 
    J());
}, f[i("0x5b")] = function(e) {
    d("reconnect", e), this.ie[i("0xc")] = e, b = !0, H(), j();
}, f.close = function() {
    T = p ? new Date().getTime() : void 0, d("close"), O && (clearTimeout(O), O = void 0), 
    Q(), I = !0, M = !1, w = !1, c = void 0, s = void 0, S = [], H(), j();
}, f.pause = function() {}, f.resume = function() {}, r.on(r.EVENT.APP_HIDE, function() {
    w = !0, M && d(i("0x51"));
}), r.on(r.EVENT.APP_SHOW, function() {
    w && (w = !1, M && (d("resume", "scene=".concat(r.scene)), setTimeout(function() {
        return M && J();
    }, 200)));
}), f.sendMessage = function(e) {
    if (d("sendMessage", e), !I) return e.cmd != f[i("0x27")].Client.DirectCall && e[i("0x32")] != f.Command.Client.StartCall || (e[i("0x6e")] || (e[i("0x6e")] = {}), 
    e[i("0x6e")].uuid = r.uuid, e[i("0x6e")].reqId = r.reqId, f.report(i("0x75"), e)), 
    e.cmd != f.Command.Client.AnswerCall && e.cmd != f[i("0x27")].Client.AcceptInvitation && e.cmd != f[i("0x27")].Client.JoinMeeting || f.report("event_video_receive_start", e), 
    e.cmd == f.Command.Client.Hangup && (N(), wx.setStorageSync(x, e.rid), j()), e.cmd != f.Command[i("0x55")].RefuseInvitation && e[i("0x32")] != f.Command.Client.Hangup || (f.report("event_video_active_hangup"), 
    f.rid = "", m = "", U = {}, f[i("0x56")] = ""), R ? (p[i("0x24")]({
        data: JSON.stringify(e),
        fail: function(t) {
            0 != e.cmd && S.push(e), d("WebSocket消息发送失败", t), h(t);
        }
    }), !0) : (0 != e.cmd && S[i("0x43")](e), f.connect(), !1);
    d("Socket已关闭, 消息发送失败");
}, f.log = function() {
    d.apply(void 0, arguments);
}, f.te = function(e) {
    F();
    try {
        var t = "wss://" + r.server;
        f.isRtmp() ? t += "/wxws" : t += "/rtcws";
        var n = {
            callto: encodeURIComponent(r[i("0x7e")]),
            uid: encodeURIComponent(r.uid),
            token: encodeURIComponent(r.token),
            uuid: encodeURIComponent(r[i("0x4d")]),
            reqId: encodeURIComponent(r.reqId)
        };
        e && (d(i("0x4f") + e), n.sid = e), t = t + i("0x2a") + r.json2query(n);
        var o = p = wx.connectSocket({
            url: t
        });
        p.onOpen(function(e) {
            o === p && g(e);
        }), p.onClose(function(e) {
            o === p && y(e);
        }), p.onMessage(function(e) {
            o === p && C(e);
        }), p[i("0x5")](function(e) {
            o === p && h(e);
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        h(e);
    }
};

var V = 11e3, z = void 0;

function F(e) {
    Q(), e && e[i("0x32")] == f.Command[i("0x1c")][i("0x7f")] && ("string" != typeof e.data && i("0x4") != n(e.data) || (V = 2 * parseInt(e.data) + 1e3)), 
    z = setTimeout(function() {
        d("WebSocket连接假死,开始重新连接", !!p), H();
    }, V);
}

function Q() {
    z && (clearTimeout(z), z = void 0);
}

f[i("0x52")] = function(e) {
    if (!e) return null;
    var t = e[i("0x57")]("?");
    return t > 0 && (e = e.substring(0, t)), (t = e.lastIndexOf(i("0x2"))) < 0 ? null : e.substring(t + 1);
}, f.getUIDFromURL = function(e) {
    var t = f.getStreamIDFromURL(e);
    if (!t) return null;
    var n = t[i("0x1b")]("_");
    return n.splice(0, 3), n[i("0x3")]("_");
}, f.startCall = function(e, t) {
    if (d("startCall", e, t), d("rid=" + f.rid + i("0x35") + m), f.rid) throw Error(i("0x6f"));
    if (e.uuid && e.uuid != r.uuid) throw Error("JFVideo.startCall: data不能包含uuid");
    if (e.reqId && e.reqId != r.reqId) throw Error("JFVideo.startCall: data不能包含reqId");
    t && t[i("0x66")] && t[0] ? f.sendMessage({
        cmd: f.Command.Client.DirectCall,
        uids: t,
        data: e
    }) : f.sendMessage({
        cmd: f[i("0x27")].Client.StartCall,
        data: e
    });
}, f.acceptCall = function(e, t, n) {
    f.rid = f[i("0x11")] || e, d("acceptCall"), d("rid=" + f.rid + i("0x35") + m + ", data=" + JSON.stringify(t)), 
    this.oe() && (m ? f.sendMessage({
        cmd: f[i("0x27")].Client.AcceptInvitation,
        rid: f.rid,
        iid: m,
        data: t,
        auths: n
    }) : f[i("0x68")]({
        cmd: f.Command[i("0x55")].AnswerCall,
        rid: f.rid,
        data: t,
        auths: n
    }));
}, f[i("0x76")] = function() {
    d("endCall"), d("rid=" + f.rid + ", iid=" + m), this.oe() && (m ? f.sendMessage({
        cmd: f[i("0x27")].Client.RefuseInvitation,
        rid: f.rid,
        iid: m
    }) : f.sendMessage({
        cmd: f.Command.Client.Hangup,
        rid: f.rid
    }));
}, f.setUserData = function(e) {
    return d(i("0x14"), e), f.rid ? (e || (e = {}), U[r.uid] = e, f.sendMessage({
        cmd: f.Command.Client[i("0x7c")],
        rid: f.rid,
        data: e
    }), !0) : (d("rid 不存在"), !1);
}, f.getUserData = function() {
    return U;
}, f[i("0x38")] = function(e, t) {
    f.sendMessage({
        cmd: f.Command[i("0x55")][i("0x70")],
        rid: f.rid,
        data: e,
        to: t || ""
    });
}, f.getPushURL = function(e) {
    d(i("0x15"), e);
    var t = "room://cloud.tencent.com/rtc?sdkappid=" + r[i("0x1f")] + i("0x13") + f.tid + "&userid=" + r._uid() + i("0x23") + r.token + "&appscene=" + ("live" == e.mode || "meeting" == e.mode ? "live" : i("0x73")) + "&encsmall=0&cloudenv=PRO";
    if (e.pureAudioPushMod || e.recordId) {
        var n = {
            Str_uc_params: {}
        };
        e[i("0x48")] && (n[i("0x4e")].pure_audio_push_mod = e.pureAudioPushMod), e.recordId && (n.Str_uc_params.record_id = e.recordId), 
        t += "&bizbuf=" + encodeURIComponent(JSON.stringify(n));
    }
    return t;
}, f[i("0x21")] = function(e) {
    var t = (e = Object.assign({}, e)).success;
    delete e.success;
    var n = r[i("0x37")][i("0x3b")]({
        url: i("0x0").concat(r.server, "/jfrtc/room/rid?callto=").concat(r.callto, "&uid=").concat(r.uid, "&token=").concat(encodeURIComponent(r[i("0x16")])),
        retry: 3,
        delay: 1e3
    }).then(function(e) {
        return e[i("0x6e")].data == wx[i("0x79")](x) && (e.data.data = null), d("getRidFromServer", e.data), 
        e[i("0x6e")];
    })[i("0x71")](function(e) {
        return d(i("0x21"), e), {
            code: e.statusCode ? -1 : -2,
            msg: "服务异常",
            data: e
        };
    });
    if (!t) return n;
    n.then(function(e) {
        return t(e);
    });
}, f[i("0x54")] = function(e) {
    d(i("0x54"), e);
    var t = (e = Object.assign({}, e))[i("0x6d")];
    delete e[i("0x6d")];
    var n = r[i("0x37")].request({
        url: i("0x0")[i("0x4a")](r.server, "/wechat/hangUp?callto=").concat(r.callto),
        header: {
            "content-type": "application/json"
        },
        data: {
            callto: r.callto,
            userID: r.uid,
            rid: e.rid,
            token: r.token
        },
        retry: 3,
        delay: 1e3
    }).then(function(e) {
        return d(i("0x54"), e.data), e.data;
    }).catch(function(e) {
        return d("hangUp", e), {
            code: e.statusCode ? -1 : -2,
            msg: "服务异常",
            data: e
        };
    });
    if (!t) return n;
    n.then(function(e) {
        return t(e);
    });
}, f.isRtmp = function() {
    return r.server[i("0x57")](i("0x19")) >= 0;
}, f.isRtc = function() {
    return r.server.indexOf("jfvideo3") < 0;
}, f.report = function(e, t, n) {
    if (r[i("0x80")] && r.enableReport) {
        d("report", e, t = null == t ? "" : "object" == a(t) ? JSON.stringify(t) : String(t));
        var o = "https://".concat(r.server, "/data/collection?callto=")[i("0x4a")](r[i("0x7e")]), c = {
            callto: r.callto,
            eventType: e,
            rid: f[i("0x11")],
            tid: f.tid,
            uid: r[i("0xa")],
            userType: r[i("0x5e")],
            deviceType: 1,
            uploadTime: r[i("0x49")](),
            content: t
        };
        Object.assign(c, n), r.wx[i("0x3b")]({
            url: o,
            data: c,
            header: {
                "content-type": "application/json"
            },
            retry: 3,
            delay: 1e3
        }).catch(function(e) {
            d("report fail", e);
        });
    }
}, f[i("0x41")] = function(e, t, n) {
    n = "aux" == n ? "aux" : "main";
    var o, a = e.detail[i("0x3d")][i("0x7d")], r = Math.max(e.detail.info.videoWidth, e.detail.info.videoHeight), d = Math.min(e[i("0x5c")][i("0x3d")].videoWidth, e.detail.info.videoHeight);
    o = a <= 0 || r <= 0 && d <= 0 ? "event_calltype_audio" : r <= 640 && d <= 480 ? "event_calltype_video_sd" : r <= 1280 && d <= 720 ? i("0xb") : r <= 1920 && d <= 1080 ? "event_calltype_video_xhd" : "event_calltype_video_xxhd";
    var c = [ t, n ].join(i("0xd"));
    q[c] != o && (q[c] = o, f.report(o, {
        uid: t,
        streamType: "aux" == n ? 2 : 0
    }));
}, f[i("0x6b")] = function(e, t) {
    var n = "event_calltype_none", o = [ e, t = "aux" == t ? "aux" : "main" ].join("_");
    q[o] != n && (q[o] = n, f.report(n, {
        uid: e,
        streamType: "aux" == t ? 2 : 0
    }));
}, f.getQueueLenByVQ = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return new Promise(function(n, o) {
        var a = i("0x0") + r.server + "/agentGroup/getQueueLenByVQ?VQ=" + encodeURIComponent(e);
        !function e(t) {
            wx[i("0x3b")]({
                url: a,
                method: "POST",
                success: function(i) {
                    200 == i.statusCode && 0 == i.data.code ? n(i.data) : t > 0 ? setTimeout(function() {
                        return e(--t);
                    }, 500) : (d("getQueueLenByVQ fail", i.data), o(i));
                },
                fail: function(n) {
                    t > 0 ? setTimeout(function() {
                        return e(--t);
                    }, 500) : (d("getQueueLenByVQ fail", n.data), o(n));
                }
            });
        }(t);
    });
}, f[i("0x53")] = function(e, t) {
    if (d("createMeeting", e, t), f.rid) throw "rid已存在，不能创建会议";
    f.sendMessage({
        cmd: f.Command.Client.CreateMeeting,
        data: e,
        auths: t
    });
}, f.ce = function(e, t, n) {
    f.rid = f.rid || e, d("joinMeeting", f.rid, t, n), this.oe() && (U[r.uid] = t || {}, 
    f.sendMessage({
        cmd: f.Command.Client.JoinMeeting,
        rid: f.rid,
        data: t,
        auths: n
    }));
}, f.pe = function(e, t, n) {
    f.oid = e || f.oid, d("createAndJoinOrderRoom", f[i("0x77")], t, n), U[r.uid] = t || {}, 
    f.sendMessage({
        cmd: f.Command[i("0x55")][i("0x5a")],
        oid: f[i("0x77")],
        data: t,
        auths: n
    });
}, f.ue = function(e) {
    d(i("0x62"), e), this.oe() && f.sendMessage({
        cmd: f.Command.Client.ReqAuths,
        rid: f.rid,
        auths: e
    });
}, f.we = function(e) {
    d("cancelAuthsRequest", e), this[i("0x8")]() && e && 0 != e.length && f.sendMessage({
        cmd: f.Command.Client.CancelReqAuths,
        rid: f.rid,
        auths: e
    });
}, f.ae = function(e) {
    d("rejectAuths", f[i("0x11")], e), this.oe() && f.sendMessage({
        cmd: f.Command[i("0x55")].RejectAuths,
        rid: f.rid,
        uids: e
    });
}, f.de = function(e, t) {
    d.apply(void 0, [ i("0x69") ].concat(Array.prototype.slice.call(arguments))), this.oe() && f.sendMessage({
        cmd: f.Command.Client.GrantAuths,
        rid: f.rid,
        uid: e,
        auths: t
    });
}, f[i("0x6")] = function(e, t) {
    d.apply(void 0, [ "cancelAuths" ].concat(Array.prototype.slice.call(arguments))), 
    this[i("0x8")]() && f.sendMessage({
        cmd: f.Command[i("0x55")].CancelAuths,
        rid: f.rid,
        uids: e,
        auths: t
    });
}, f.fe = function(e) {
    d.apply(void 0, [ i("0x30") ][i("0x4a")](Array[i("0x31")].slice.call(arguments))), 
    this[i("0x8")]() && f.sendMessage({
        cmd: f.Command[i("0x55")][i("0x17")],
        rid: f.rid,
        auths: e
    });
}, f.le = function(e) {
    d("kickOut", f[i("0x11")], e), this[i("0x8")]() && f.sendMessage({
        cmd: f.Command.Client.KickOut,
        rid: f.rid,
        uid: e
    });
}, f[i("0x1d")] = function(e) {
    d("queryAudience", f.rid, e), this.oe() && f.sendMessage({
        cmd: f[i("0x27")].Client.QueryAudience,
        rid: f.rid,
        data: e
    });
}, f.me = function(e) {
    d("queryAuthsReq", f.rid, e), this[i("0x8")]() && f[i("0x68")]({
        cmd: f.Command.Client[i("0x46")],
        rid: f.rid,
        data: e
    });
}, f.oe = function() {
    return !!f.rid || (d(i("0x81")), !1);
}, f.ee = function() {
    var e = this;
    if (this.ie.sid) return Promise.resolve(this[i("0x1a")].sid);
    var t = f.rid || this.ie.rid || "";
    return t ? (d("query sid from server, rid=" + t), r.wx.request({
        url: "https://"[i("0x4a")](r.server, "/jfrtc/room/sid?callto=").concat(r[i("0x7e")], "&rid=").concat(t, "&uid=")[i("0x4a")](r[i("0xa")], "&token=").concat(encodeURIComponent(r.token)),
        retry: 1
    }).then(function(t) {
        return t.data && 0 == t.data.code && t.data.data ? (e[i("0x1a")].sid = t.data.data, 
        e.ie.sid) : "";
    }).catch(function(e) {
        return "";
    })) : Promise.resolve("");
}, f[i("0x63")] = function(e) {
    d.apply(void 0, [ "inviteViaRouting" ].concat(Array.prototype.slice.call(arguments))), 
    this[i("0x8")]() && f.sendMessage({
        cmd: f.Command.Client[i("0x25")],
        rid: f.rid,
        data: e
    });
}, f.Re = function(e) {
    d.apply(void 0, [ "cancelInvitationViaRouting" ].concat(Array[i("0x31")][i("0x7")][i("0x36")](arguments))), 
    this.oe() && f.sendMessage({
        cmd: f.Command.Client.CancelInvitationViaRouting,
        rid: f.rid,
        data: e
    });
}, f[i("0x29")] = function() {
    return {
        "h-uid": r.uid,
        "h-token": encodeURIComponent(r.token)
    };
}, f.createMeetingOrder = function(e) {
    return new Promise(function(t, n) {
        !e.startDatetime && n("会议开始时间不能为空"), !e.endDatetime && n("会议结束时间不能为空"), e.callto = r[i("0x7e")], 
        e.uid = r.uid;
        var o = {
            callto: r.callto,
            uid: r.uid,
            startDatetime: e.startDatetime,
            endDatetime: e.endDatetime,
            meetName: e.meetName
        };
        d("createMeetingOrder", o);
        !function e(a) {
            wx.request({
                header: f.he(),
                url: "https://".concat(r[i("0x80")], "/").concat(P, "/create?callto=")[i("0x4a")](r.callto),
                method: "POST",
                data: o,
                success: function(e) {
                    200 == e.statusCode && 0 == e.data[i("0x5d")] ? t(e.data.data) : n(e.data);
                },
                fail: function(t) {
                    if (--a < 0) return console.error(t), void n(t);
                    e(a);
                }
            });
        }(1);
    });
}, f.updateMeetingOrder = function(e) {
    return new Promise(function(t, n) {
        !e.oid && n("预约会议号不能为空"), !e[i("0x40")] && n(i("0x58")), !e.endDatetime && n("会议结束时间不能为空");
        var o = {
            oid: e.oid,
            callto: r.callto,
            uid: r.uid,
            startDatetime: e.startDatetime,
            endDatetime: e.endDatetime,
            meetName: e.meetName
        };
        d("updateMeetingOrder", o);
        !function e(a) {
            wx.request({
                header: f.he(),
                url: "https://".concat(r.server, "/").concat(P, "/update?callto=").concat(r.callto),
                method: i("0x2f"),
                data: o,
                success: function(e) {
                    200 == e.statusCode && 0 == e.data.code ? t(e[i("0x6e")].data) : n(e[i("0x6e")]);
                },
                fail: function(t) {
                    if (--a < 0) return console.error(t), void n(t);
                    e(a);
                }
            });
        }(1);
    });
}, f.cancelMeetingOrder = function(e) {
    return new Promise(function(t, n) {
        !e && n("预约会议号不能为空"), d(i("0x7a"), e);
        var o = {
            oid: e,
            callto: r.callto,
            uid: r.uid
        };
        !function e(a) {
            wx.request({
                header: f.he(),
                url: "https://".concat(r.server, "/")[i("0x4a")](P, i("0xf")).concat(r.callto),
                data: o,
                method: "POST",
                success: function(e) {
                    200 == e.statusCode && 0 == e.data.code ? t(e[i("0x6e")].data) : n(e.data);
                },
                fail: function(t) {
                    if (--a < 0) return console.error(t), void n(t);
                    e(a);
                }
            });
        }(1);
    });
}, f.getMeetingOrderInfo = function(e) {
    return new Promise(function(t, n) {
        !e && n("预约会议号不能为空"), d("getMeetingOrderInfo", e);
        !function o(a) {
            wx[i("0x3b")]({
                header: f.he(),
                url: "https://".concat(r[i("0x80")], i("0x2")).concat(P, i("0xe")).concat(r.callto, "&&oid=").concat(e),
                method: "GET",
                success: function(e) {
                    200 == e[i("0x39")] && 0 == e.data[i("0x5d")] ? t(e.data.data) : n(e.data);
                },
                fail: function(e) {
                    if (--a < 0) return console.error(e), void n(e);
                    o(a);
                }
            });
        }(1);
    });
}, f.getMeetingOrderList = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        pageNum: 1,
        pageSize: 10,
        startDatetimeStart: "",
        startDatetimeEnd: ""
    };
    return new Promise(function(t, n) {
        var o = e.pageNum > 0 ? e.pageNum : 1, a = e.pageSize > 0 ? e.pageSize : 10;
        if (e.startDatetimeStart) e[i("0x33")] = encodeURIComponent(e[i("0x33")]); else {
            var c = new Date();
            e.startDatetimeStart = encodeURIComponent(c.getFullYear() + i("0x4c") + (c.getMonth() + 1) + "-" + c.getDate() + i("0x47"));
        }
        e.startDatetimeEnd && (e.startDatetimeEnd = encodeURIComponent(e.startDatetimeEnd)), 
        d("getMeetingOrderList", {
            pageNum: o,
            pageSize: a
        });
        !function o(a) {
            wx.request({
                header: f.he(),
                url: "https://".concat(r.server, i("0x2")).concat(P, "/list?callto=")[i("0x4a")](r[i("0x7e")], "&uid=").concat(r.uid, i("0x18")).concat(r[i("0x72")](e)),
                method: "GET",
                success: function(e) {
                    200 == e[i("0x39")] && 0 == e.data[i("0x5d")] ? t(e.data.data) : n(e.data);
                },
                fail: function(e) {
                    if (--a < 0) return console.error(e), void n(e);
                    o(a);
                }
            });
        }(1);
    });
}, module.exports = f;
var R, E, O = [ "OnRoutingInvitationInfo", "CUSTOM_MESSAGE", "ERROR_REQUEST_PUSH_URL", "INITED", "OnReqAuths", "NETWORK_ERROR", "QUEUE_INFO", "NO_ANSWER", "NETWORK_RESUME", "SERVER_BUSY" ];

R = O, E = 188, function(E) {
    for (;--E; ) R.push(R.shift());
}(++E);

var _ = function(R, E) {
    return O[R -= 0];
}, A = {
    ROOM: {
        ROOM_INFO: "ROOM_INFO",
        INITED: _("0x5"),
        USER_EVENT: "USER_EVENT",
        START_PLAY: "START_PLAY",
        MAIN_WINDOW_CLICKED: "MAIN_WINDOW_CLICKED",
        NETWORK_ERROR: _("0x7"),
        NETWORK_RESUME: _("0x0"),
        SERVER_MESSAGE: "SERVER_MESSAGE",
        ROOM_DATA: "ROOM_DATA",
        USER_DATA: "USER_DATA",
        CUSTOM_MESSAGE: _("0x3"),
        EXIT: "EXIT",
        QUEUE_INFO: _("0x8"),
        RENEW_TOKEN: "RENEW_TOKEN",
        CAMERA_ON: "CAMERA_ON",
        CAMERA_OFF: "CAMERA_OFF",
        OnAudienceJoin: "OnAudienceJoin",
        OnAudienceExit: "OnAudienceExit",
        OnReqAuths: _("0x6"),
        OnAuthsRejected: "OnAuthsRejected",
        OnAuths: "OnAuths",
        OnAuthsCanceled: "OnAuthsCanceled",
        OnKickedOut: "OnKickedOut",
        OnPersonCountChanged: "OnPersonCountChanged",
        OnAudienceList: "OnAudienceList",
        OnAuthsReqList: "OnAuthsReqList",
        OnRequestAuthsCanceled: "OnRequestAuthsCanceled",
        OnRoutingInvitationInfo: _("0x2"),
        CALL_FAILED: "CALL_FAILED",
        ANSWER_FAILED: "ANSWER_FAILED",
        NO_ANSWER: _("0x9"),
        REJECT_BY_OTHERS: "REJECT_BY_OTHERS",
        HANGUP_BY_OTHERS: "HANGUP_BY_OTHERS",
        KICKEDOUT_BY_OTHERS: "KICKEDOUT_BY_OTHERS",
        LEAVE_TIMEOUT: "LEAVE_TIMEOUT",
        ERROR_NETWORK_TIMEOUT: "ERROR_NETWORK_TIMEOUT",
        ERROR_INVALID_TOKEN: "ERROR_INVALID_TOKEN",
        ERROR_FORCE_LOGOUT: "ERROR_FORCE_LOGOUT",
        ERROR_REQUEST_PUSH_URL: _("0x4"),
        ERROR_CAMERA_MIC_PERMISSION: "ERROR_CAMERA_MIC_PERMISSION",
        FAIL_PHONE_IS_CALLING: "FAIL_PHONE_IS_CALLING",
        FAIL_VOIP_IS_CALLING: "FAIL_VOIP_IS_CALLING",
        ERROR_OPEN_CAMERA: "ERROR_OPEN_CAMERA",
        ERROR_OPEN_MIC: "ERROR_OPEN_MIC",
        ERROR_JOIN_ROOM: "ERROR_JOIN_ROOM",
        SERVER_BUSY: _("0x1")
    },
    BOARD: {
        LOADED: "LOADED",
        ERROR_LOAD: "ERROR_LOAD"
    }
};

module.exports = A;
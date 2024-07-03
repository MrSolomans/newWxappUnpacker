var e, t, n = require("../../../@babel/runtime/helpers/regeneratorRuntime"), i = [ "replace", "内饰造型变化不大，新款宝马X3内饰及空间解析", "__esModule", "data", "点击车主精选", "concat", "code", "/pages/webview/webview?pageType=appArticle&contentId=", "currentTarget", "videoData", "https://iobs.pingan.com.cn/download/icore-aops-base-dmz-prd/portal-icore-apps-content-1610511213488-265B54843B86468FA67DBF93F69204F8-39017896?yiyouliao_channel=7c6852c1526b_image", "getApiUrl", "apply", "getHczInformation", "next", "warn", "阅" ];

e = i, t = 275, function(t) {
    for (;--t; ) e.push(e.shift());
}(++t);

var a = function(e, t) {
    return i[e -= 0];
};

function o(e, t, n, i, a, o, r) {
    try {
        var c = e[o](r), s = c.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void n(e);
    }
    c.done ? t(s) : Promise.resolve(s).then(i, a);
}

Object.defineProperty(exports, a("0x10"), {
    value: !0
}), exports.hczInformationMixins = exports.hczInformation = void 0;

var r = getApp(), c = {
    data: {
        hczInformation: {
            obmConfig: {},
            status: !1,
            title: "",
            secondTitle: ""
        },
        originalList: [],
        articleList: {},
        videoData: {},
        defaultVideo: {
            avatar: a("0x7"),
            contentId: "VQJDxKb7Pj0ALo5HkFXIkpEN5a8w9L",
            image: "https://iobs.pingan.com.cn/download/icore-aops-base-dmz-prd/ppshkK410678949590876160?yiyouliao_channel=7c6852c1526b_image#w=1920;h=1080",
            nickName: "驾享慢生活",
            readCnt: "11.3+万阅",
            title: a("0xf")
        }
    },
    methods: {
        getHczInformation: function() {
            var e = this;
            return function(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(i, r) {
                        var c = e[a("0x9")](t, n);
                        function s(e) {
                            o(c, i, r, s, d, a("0xb"), e);
                        }
                        function d(e) {
                            o(c, i, r, s, d, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }(n().mark(function t() {
                var i, o, c, s, d, p, u, l, v, m, f, h, x, g, b, w, I, y, z, T, F, k, j, A, C, _, D;
                return n().wrap(function(t) {
                    for (;;) switch (t.prev = t[a("0xb")]) {
                      case 0:
                        return t.next = 2, r.$http({
                            url: e[a("0x8")](a("0xa")),
                            data: {
                                source: "main_hczInformation"
                            },
                            needToken: !0
                        });

                      case 2:
                        i = t.sent, o = i[a("0x3")], c = i[a("0x0")], console[a("0xc")]("好车主资讯配置 ======>", c), 
                        (s = 0 === o && c && Object.keys(c).length > 0) && (d = c.hczOriginal, p = void 0 === d ? {} : d, 
                        u = c.moduleConfig, l = void 0 === u ? {} : u, v = c.article, m = void 0 === v ? {} : v, 
                        f = c.video, h = void 0 === f ? {} : f, g = (x = p || {}).config, b = void 0 === g ? {} : g, 
                        w = x.data, I = void 0 === w ? [] : w, z = (y = l || {}).title, T = void 0 === z ? "" : z, 
                        F = y.secondTitle, k = void 0 === F ? "" : F, j = (m || {}).data, A = void 0 === j ? {} : j, 
                        C = h.data, _ = void 0 === C ? {} : C, A && A.summary && (A.summary = A.summary[a("0xe")](/&nbsp;/g, " ")), 
                        _ && Object.keys(_).length > 0 ? (D = _.readCnt, _.readCnt = D >= 1e4 ? (D - D % 1e3) / 1e4 + "+万阅" : D + a("0xd")) : _ = e.data.defaultVideo, 
                        e.setData({
                            originalList: I,
                            hczInformation: {
                                status: s,
                                obmConfig: b,
                                title: T,
                                secondTitle: k
                            },
                            articleList: A,
                            videoData: _
                        }));

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
            }))();
        },
        openArticle: function(e) {
            var t = e.currentTarget.dataset.contentid;
            this.jumpFun("/pages/webview/webview?pageType=appArticle&contentId=".concat(t), a("0x1"), {
                source: this[a("0x0")].source
            });
        },
        openCarOriginal: function(e) {
            var t = e[a("0x5")].dataset.item, n = t.contentId, i = t.title;
            this.jumpFun(a("0x4").concat(n), "点击车主原创", {
                articleTitle: i
            });
        },
        enterVideo: function() {
            var e = this.data[a("0x6")], t = e.contentId, n = e.title;
            this.jumpFun("/pages/appVideo/appVideo?contentId="[a("0x2")](t, "&source=FaXianYe"), "点击视频", {
                articleTitle: n
            });
        }
    }
};

exports.hczInformationMixins = c;

var s = Behavior(c);

exports.hczInformation = s;
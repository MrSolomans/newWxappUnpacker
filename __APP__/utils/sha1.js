var r, n, t = [ "0123456789ABCDEF", "charAt", "abc", "length" ];

r = t, n = 259, function(n) {
    for (;--n; ) r.push(r.shift());
}(++n);

function u(r) {
    return i(e(h(r), 8 * r.length));
}

function e(r, n) {
    r[n >> 5] |= 128 << 24 - n % 32, r[15 + (n + 64 >> 9 << 4)] = n;
    for (var t = Array(80), u = 1732584193, e = -271733879, h = -1732584194, i = 271733878, A = -1009589776, v = 0; v < r.length; v += 16) {
        for (var l = u, s = e, g = h, d = i, y = A, b = 0; b < 80; b++) {
            t[b] = b < 16 ? r[v + b] : f(t[b - 3] ^ t[b - 8] ^ t[b - 14] ^ t[b - 16], 1);
            var p = c(c(f(u, 5), a(b, e, h, i)), c(c(A, t[b]), o(b)));
            A = i, i = h, h = f(e, 30), e = u, u = p;
        }
        u = c(u, l), e = c(e, s), h = c(h, g), i = c(i, d), A = c(A, y);
    }
    return Array(u, e, h, i, A);
}

function a(r, n, t, u) {
    return r < 20 ? n & t | ~n & u : r < 40 ? n ^ t ^ u : r < 60 ? n & t | n & u | t & u : n ^ t ^ u;
}

function o(r) {
    return r < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514;
}

function c(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function f(r, n) {
    return r << n | r >>> 32 - n;
}

function h(r) {
    for (var n = Array(), t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << 24 - t % 32;
    return n;
}

function i(r) {
    for (var n = "0123456789abcdef", t = "", u = 0; u < 4 * r.length; u++) t += n.charAt(r[u >> 2] >> 8 * (3 - u % 4) + 4 & 15) + n.charAt(r[u >> 2] >> 8 * (3 - u % 4) & 15);
    return t;
}

module.exports = {
    sha1: u
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarpVlessError = void 0;
class WarpVlessError extends Error {
    isWarpVlessError = true;
    sdk = 'WarpVless';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WarpVlessError = WarpVlessError;
//# sourceMappingURL=WarpVlessError.js.map
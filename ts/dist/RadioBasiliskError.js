"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioBasiliskError = void 0;
class RadioBasiliskError extends Error {
    isRadioBasiliskError = true;
    sdk = 'RadioBasilisk';
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
exports.RadioBasiliskError = RadioBasiliskError;
//# sourceMappingURL=RadioBasiliskError.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/health", (req, res, next) => {
    res.send("service status ok");
});
exports.default = router;
//# sourceMappingURL=index.js.map
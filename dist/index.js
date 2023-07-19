"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./src/router"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
});
app.use(express_1.default.json({ limit: "50mb" })).use("/api", router_1.default);
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map
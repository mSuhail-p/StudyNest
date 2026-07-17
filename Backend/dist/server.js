"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env.GEMINI_AI, "it is gemini key");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/", user_route_1.default);
app.listen(3000, () => {
    console.log("server is listening port 3000");
});

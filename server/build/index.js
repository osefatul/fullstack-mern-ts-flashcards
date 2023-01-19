"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const deckRoute = require("./route/deckRoute");
app.use((0, cors_1.default)({ origin: "*", }));
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
//test
app.get("/", (req, res) => {
    res.send("working");
});
app.use("/v1/api", deckRoute);
mongoose_1.default.set('strictQuery', true);
console.log("Connected to MongoDB");
mongoose_1.default.connect(process.env.MONGO_URL).then().catch(err => console.error(err));
app.listen(PORT, () => {
    console.log("Service listening on port", PORT);
});

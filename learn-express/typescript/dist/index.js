"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_js_1 = __importDefault(require("./routes/routes.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const DB_1 = __importDefault(require("./config/DB"));
dotenv_1.default.config();
const port = process.env.PORT;
// mongoose
//   .connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
//   .then(() => {
//     const app = express();
//     app.use(express.json());
//     app.use("/api", routes);
//     app.listen(4500, () => {
//       console.log("Server has started!");
//     });
//   });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routes_js_1.default);
(0, DB_1.default)();
app.listen(port, () => {
    console.log("Server has started!");
});
exports.default = app;

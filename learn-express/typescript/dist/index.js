"use strict";
<<<<<<< HEAD
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
=======
>>>>>>> 03f34f19d7f7839299ec935a253b06a6590ddcc1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const DB_1 = __importDefault(require("./config/DB"));
<<<<<<< HEAD
const swaggerDocument = __importStar(require("./swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
=======
>>>>>>> 03f34f19d7f7839299ec935a253b06a6590ddcc1
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
app.use("/api", routes_1.default);
(0, DB_1.default)();
app.listen(port, () => {
    console.log("Server has started!");
});
<<<<<<< HEAD
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
=======
>>>>>>> 03f34f19d7f7839299ec935a253b06a6590ddcc1
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema2 = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: { type: String },
    title: { type: String },
    image: { type: String, required: false },
    content: { type: String },
    likes: { type: Number, default: 0 }
});
exports.schema2 = new mongoose_1.default.Schema({
    id: { type: String },
    likes: { type: Number, default: 0 }
});
exports.default = mongoose_1.default.model("Post", schema);

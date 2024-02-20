"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentval = void 0;
const joi_1 = __importDefault(require("joi"));
exports.commentval = joi_1.default.object({
    author: joi_1.default.string().min(3).required(),
    email: joi_1.default.string().min(6).required(),
    content: joi_1.default.string().min(8).required(),
    blog: joi_1.default.string().required(),
    createdAt: joi_1.default.number(),
});

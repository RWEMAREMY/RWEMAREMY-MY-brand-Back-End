"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postval = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postval = joi_1.default.object({
    id: joi_1.default.string().min(5).required(),
    title: joi_1.default.string().min(5).required(),
    content: joi_1.default.string().min(5).required(),
});

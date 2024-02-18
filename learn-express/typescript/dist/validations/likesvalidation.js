"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeval = void 0;
const joi_1 = __importDefault(require("joi"));
exports.likeval = joi_1.default.object({
    name: joi_1.default.string().min(3).required(),
    content: joi_1.default.string().min(10).required()
});

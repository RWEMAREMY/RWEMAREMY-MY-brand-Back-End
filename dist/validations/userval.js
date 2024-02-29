"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectedLogin = exports.expectedNewUser = void 0;
const joi_1 = __importDefault(require("joi"));
exports.expectedNewUser = joi_1.default.object({
    userName: joi_1.default.string().min(3).max(30).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/).message("Please provide a strong password")
});
exports.expectedLogin = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/).message("Please provide a valid password")
});

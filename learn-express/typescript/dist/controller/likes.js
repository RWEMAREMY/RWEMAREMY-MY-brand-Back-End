"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSinglelikes = exports.alllikes = exports.createlike = void 0;
const likes_1 = __importDefault(require("../models/likes"));
const likesvalidation_1 = require("../validations/likesvalidation");
const createlike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { like } = req.body;
        const { error } = likesvalidation_1.likeval.validate({ like });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const blog = yield likes_1.default.create({ like });
        res.status(201).json(blog);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.createlike = createlike;
const alllikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield likes_1.default.find();
        res.json(blog);
        const comment = new likes_1.default({ like: req.body.like });
        yield comment.save();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.alllikes = alllikes;
const getSinglelikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield likes_1.default.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Not found, may be deleted / never created' });
        }
        res.status(200).send(blog);
    }
    catch (err) {
        res.status(400).json({ message: "Ooops not found ! Check Typo?" });
    }
});
exports.getSinglelikes = getSinglelikes;

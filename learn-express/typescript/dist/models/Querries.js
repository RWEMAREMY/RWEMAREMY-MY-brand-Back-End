"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// interface IQuerry extends Document {
//     author: Types.ObjectId;
//     email:string;
//     content: string;
//     createdAt: Date;
//   }
const querryschema = new mongoose_1.Schema({
    author: String,
    email: String,
    content: String,
    createdAt: String,
});
const Querry = (0, mongoose_1.model)('querry', querryschema);
exports.default = Querry;

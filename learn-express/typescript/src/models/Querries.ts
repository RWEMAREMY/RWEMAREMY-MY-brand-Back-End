import {Schema,model} from "mongoose";


// interface IQuerry extends Document {
  
//     author: Types.ObjectId;
//     email:string;
//     content: string;
//     createdAt: Date;
//   }
  const querryschema = new Schema({
    author:String,
    email:String,
    content:String,
    createdAt:String,
  });
  const Querry=model('querry',querryschema);
  export default Querry;
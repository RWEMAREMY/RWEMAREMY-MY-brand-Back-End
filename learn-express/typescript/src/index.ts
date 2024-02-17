
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

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
const app = express();
app.use(express.json());
app.use("/api", routes);
const connectToDB = async () => {
 
  
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/acmedb?useNewUrlParser=true"
    )
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
};
connectToDB();
app.listen(4000, () => {
  console.log("Server has started!");
});

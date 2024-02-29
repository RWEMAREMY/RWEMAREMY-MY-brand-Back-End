
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes";
import dotenv from "dotenv";
import DB from "./config/DB";

dotenv.config();
 const port=process.env.PORT;

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

DB();
app.listen(port, () => {
  console.log("Server has started!");
});


export default app;
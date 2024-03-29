import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes";
import * as swaggerDocument from "./swagger.json";
import swaggerUI from "swagger-ui-express";
import cors from "cors";

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
app.use(cors());
app.use("/api", routes);

app.use("/remy", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default app;

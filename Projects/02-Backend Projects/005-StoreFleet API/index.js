import "./env.js";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./src/product/routes/product.routes.js";
import {
  errorHandlerMiddleware,
  handleUncaughtError,
} from "./middlewares/errorHandlerMiddleware.js";
import userRoutes from "./src/user/routes/user.routes.js";
import cookieParser from "cookie-parser";
import orderRoutes from "./src/order/routes/order.routes.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.get("/", (req, res) => {
  res
    .status(200)
    .redirect(
      "https://www.postman.com/aviation-geoscientist-41373396/storefleets-jaydatt-render/collection/pktp0fj/storefleet-jaydatt-render"
    );
});
// configure routes
server.use("/api/storefleet/product", productRoutes);
server.use("/api/storefleet/user", userRoutes);
server.use("/api/storefleet/order", orderRoutes);

// errorHandlerMiddleware
server.use(errorHandlerMiddleware);

server.use((req, res) => {
  res.status(404).send("API not Found......! ");
});

server.listen(process.env.PORT, async (err) => {
  if (err) {
    console.log(`server failed with error ${err}`);
  } else {
    console.log(`server is running at http://localhost:${process.env.PORT}`);
    await connectDB();
  }
});

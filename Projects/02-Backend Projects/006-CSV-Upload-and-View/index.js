// Added the all modules
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectMongoose from "./src/config/mongoose.js";
import expressLayouts from "express-ejs-layouts";
import bodyparser from "body-parser";
import session from "express-session";
import flash from "connect-flash";
import router from "./src/routes/routes.js";
import setFlash from "./src/config/middleware.js";

const app = express();
//middleware to use assets
app.use(express.static("./src/assets"));
app.use(express.urlencoded());
app.use(expressLayouts);

//extract styles and scripts from layouts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//setting view engine as ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");

//to create an duse sessions
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

//using connect-flash to display flash notification in FE
app.use(flash());
app.use(setFlash);

//router
app.use("/", router);

// handle all errors
app.use((err, req, res, next) => {
  console.log(err);
  res.send("Something went wrong...!");
});

// handle undefined routes
app.use((req, res) => {
  res.status(404).send("Route not found......!");
});

//Port Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // Database Connection
  connectMongoose();
  console.log(`Server is listening on  ${PORT}`);
});

// Author : Jaydatt Patel

import express from "express";
import EJSLayouts from "express-ejs-layouts";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";
import controller from "./src/controllers/controller.js";
import UserControl from "./src/controllers/userController.js";
// import { validateForm } from './src/middlewares/validateForm.js';
import { uploadFile } from "./src/middlewares/file-upload-config.js";
// import { userValidation } from './src/middlewares/userValidate.js';
import { auth } from "./src/middlewares/authorization.js";
import { setLastVisit } from "./src/middlewares/lastVisited.js";

const app = express();
//make public folder static for accessible files and also css file
app.use(express.static("public"));
// setup view engine settings
app.set("view engine", "ejs");
// set views path of our views folder
app.set("views", path.join(path.resolve(), "src", "views"));
// add middleware EJSlayout
app.use(EJSLayouts);
// for receive post request data in json
app.use(express.json());
//urlencoded for parse form data to get original information.
app.use(express.urlencoded({ extended: true }));
// set cookie parser
app.use(cookieParser());

// create session key
app.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, //session for http ot https
  })
);

const control = new controller();
const userControl = new UserControl();

app.post("/register", userControl.postRegister);
app.get("/login", userControl.getLogin);
app.post("/login", userControl.postLogin);
app.get("/logout", userControl.logout);

app.get("/", control.getHome);

app.get("/jobs", setLastVisit, control.getJobs);
app.get("/job/:id", control.getJobInfo);
app.get("/job/:id/update", auth, control.getJobUpdate);
app.post("/job/:id/update", auth, control.postJobUpdate);
app.get("/job/:id/delete", auth, control.getJobDelete);
app.get("/job/:id/applicants", auth, control.getJobApplicants);
app.post("/apply/:id", uploadFile.single("resume"), control.postAddApplicant);
app.get("/postjob", auth, control.getPostJob);
app.post("/job", auth, control.postPostJob);

app.post("/search", control.postSearch);

app.listen(3000, () => {
  console.log("Server listening on port 3000......");
});

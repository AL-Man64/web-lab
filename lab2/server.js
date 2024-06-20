import ejs from "ejs";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import cartRouter from "./routes/cart.routes.js";
import data from "./data/mydata.js";
import homeRouter from "./routes/home.routes.js";
import sessionManager from "./sessionManagement.js";

// create app

const app = express();
const port = 3000;

// set up session middleware

app.use(cookieParser());

app.use((req, res, next) => {
  if (req.cookies.sessionId === undefined) {
    res.cookie("sessionId", sessionManager.createSession().id());
  }
  next();
});

// set up views

app.engine(".ejs", ejs.__express);

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.get("/sessionExpired", (_, res) => res.render("sessionExpired"));

// set up static files

app.use(express.static(path.join(import.meta.dirname, "public")));

// set up routes

app.use("/home", homeRouter);
app.use("/cart", cartRouter);

// home and cart

app.get("/", (_, res) => res.render("home", { categories: data.categories }));
app.get("/cart", (req, res) => {
  let session = sessionManager.getSession(req.cookies.sessionId);
  if (session === undefined) {
    res.render("sessionExpired");
    return;
  }
  res.render("cart", {
    items: session.items(),
    categories: data.categories,
  });
});

// listen

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

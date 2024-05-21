import express from "express";
import { join } from "path";

// create app

const app = express();
const port = 3000;

// setup views

app.engine(".ejs", require("ejs").__express);

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// setup static

app.use(express.static(join(__dirname, "public")));

// setup routes

app.get("/", (_, res) => {
  res.render("home", {});
});

app.get("/cart", (_, res) => {
  res.render("cart", {});
});

// listen

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));


app.get("/", homeController.showIndex);

app.get("/users", homeController.showUsers);

app.post("/users/submit", homeController.addUsers);

app.get("/contact", homeController.postSignUpForm);


app.listen(app.get("port"), () => {console.log(`Server running at http://localhost:${app.get("port")}`);});
const express = require("express");
const bodyParser = require("body-parser");//para el require necesitas instalar el paquete

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");


//Parseing: para poder recibir cosas como lo vistos, si no lo pones va a ser mas dificil
//Configurar el ejs
//Static content, para definir ek public folder
// TODO: configure the express server



const longContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

let posts = [];
let name;

app.get("/", (req, res) => { 
  // este render no manda el name variable
  res.render("index", {name: name});
});

app.post("/login", (req, res) => { //post la informacion no va en el url, en el .get si
  name = req.body.name;
  redirect("/home")
 });

 app.post("/home", (req, res) => { //post la informacion no va en el url, en el .get si
  posts.push({title: "My title", content: longContent});
  res.render("home", {name: name, posts});
 });

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});

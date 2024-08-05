const express = require("express");
const app = express();
const port = 3300;
const path = require("path");

const filepath = path.join(__dirname, "data.html");

app.use("/datafile", express.static(path.join(__dirname, "public")));

// use get method
app.get("/", (req, res) => {
  res.send("<h1>Hello welcome to express form backend</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Hello about section</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<p>Hello contact section of backend shows p tag</p>");
});

// app.get("/filehtml", (req, res) => {     // it was given to the error
//   res.sendFile("data.html");
// });

app.get("/filehtml", (req, res) => {
  //it can be given the output
  res.sendFile(filepath);
});

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});

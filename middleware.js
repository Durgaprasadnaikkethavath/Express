const express = require("express");
const app = express();
const port = 3600;

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Enter Your age");
    // } else if (!req.query.age < 14) {
    //   res.send("<h1>Your are not allowed to visited these website</h1>");
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.send("<h1>hello middleware</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about of middleware section</h1>");
});
app.use(reqFilter);

app.get("/contact", (req, res) => {
  res.send("<h1>contact section of middleware</h1>");
});

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});

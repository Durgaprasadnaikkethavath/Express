const { log } = require("console");
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/contact") {
      res.write("<h1>http of backend for contact</h1>");
      res.end();
    } else if (req.url == "/about") {
      res.end("<h2>about section of http for h2 tag</h2>");
    }
  })
  .listen(3400, () => {
    console.log("listening");
  });

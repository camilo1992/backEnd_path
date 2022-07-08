var url = require("url");
var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    // var q = url.parse(req.url, true).query;
    var q = url.parse(req.url, true);
    console.log(q.pathname);
    var fileName = "." + q.pathname;
    if (fileName === "./") fileName = "./index.html"; // creatting a default filenmae value

    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text-hmtl" });
        return res.end("error 404");
      }
      res.writeHead(200, { "Content-Type": "text-hmtl" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);

console.log("Node is running on port 8080");

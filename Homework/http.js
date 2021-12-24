const http = require("http");

http
  .createServer((request, response) => {
      response.setHeader("Content-Type", "text/html");
      response.write("<h1>Node.js is awesome</h1>");
      response.end();
  })
  .listen(3000);
const http = require("http");

// Create Server
http
  .createServer((req, res) => {
    res.write("<h1>Home</h1>");
    res.end();
  })
  .listen(5000, () => console.log("Server running on port:5000"));

/** Simple Person Class */
// const Person = require("./person");

// const person1 = new Person("Ashish Dhanorkar", 40);

// person1.greetings();

/** Simple Logger */
// const Logger = require("./reference/events/logger");

// const logger = new Logger();

// logger.on("logMessage", (data) => console.log("Called Listener - ", data));

// logger.log("Hello world!!!");
// logger.log("This is Ashish Dhanorkar");
// logger.log("Wish you happy coding");

/** File Logger */
// const Logger = require("./reference/events/logger");
// const fs = require("fs");
// const path = require("path");

// const logger = new Logger();

// logger.on("logMessage", (data) => {
//   fs.appendFile(
//     path.join(__dirname, "/reference/test/logs.txt"),
//     `${data.id} - ${data.msg}\n`,
//     (err) => {
//       if (err) {
//         throw err;
//       }
//     }
//   );
// });

// logger.log("Hello world!!!");
// logger.log("This is Ashish Dhanorkar");
// logger.log("Wish you happy coding");

/** Server which server static html pages */

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  /** Below code just to understand how server works, not actual practical way */
  // let contentFile = "";
  // if (req.url === "/") {
  //   contentFile = "home.html";
  // } else if (req.url === "/about") {
  //   contentFile = "about.html";
  // } else if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Ashish Dhanorkar", age: 40 },
  //     { name: "Anisha Dhanorkar", age: 4 },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // } else {
  //   res.writeHead(404, { "Content-Type": "text/html" });
  //   res.end();
  // }
  // fs.readFile(path.join(__dirname, "public", contentFile), (err, content) => {
  //   if (err) {
  //     if (err.errno === -21) {
  //       res.writeHead(404, { "Content-Type": "text/html" });
  //       res.end();
  //     } else {
  //       throw err;
  //     }
  //   } else {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(content);
  //   }
  // });
  /* ******************************************************* */
  /** Dynamic Way */
  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filePath);
  // Extension of file
  let extName = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check extension and set content type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        //404 - Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) {
              res.writeHead(404);
              res.end(`Page not found - ${err.code}`);
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // Some Server Error
        res.writeHead(500);
        res.end(`Server Error - ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port:${PORT}`));

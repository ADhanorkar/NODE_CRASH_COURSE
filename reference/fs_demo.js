const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("folder created...");
// });

// Create file and write text in it
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World !!!",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("file created and text written");

//     //append text to same file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love nodeJS",
//       (err) => {
//         console.log("text appended to same file...");
//       }
//     );
//   }
// );

// Read file
// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   }
// );

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File renamed...");
  }
);

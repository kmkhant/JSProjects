const fs = require("fs");

// reading files
// fs.readFile("./docs/blog12.txt", (err, data) => {
//   if (err) {
//     console.log("GOT ERROR");
//   } else {
//     console.log(data.toString());
//   }
// });
// ASYNC
// console.log("last line");

// writing files
// fs.writeFile("./docs/blog1.txt", "hello, world", () => {
//   console.log("file was written");
// });

// fs.writeFile("./docs/blog2.txt", "hello, again", () => {
//   console.log("created blog 2");
// });

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder deleted");
    }
  });
}

// deleting files
if (fs.existsSync("./docs/delete.txt")) {
  fs.unlink("./docs/delete.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}


//promisified FS
exports.getFileContents = function (path) {
  const fs = require("fs");
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(console.error(err));
        return;
      }
      resolve(data);
    });
  });
};

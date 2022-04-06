const { getFileContents } = require("../lib/lib");
const htmlTemplate = "./templates/default.txt";

exports.defaultResponse = async function (req, res) {
  console.log(`default web response`);
  getFileContents(htmlTemplate)
    .then((data) => {
      res.status(500).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

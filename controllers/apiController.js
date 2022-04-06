exports.defaultResponse = function (req, res) {
  res.status(500).send({ status: "success", message: "default api response" });
  console.log(`default api response`);
};

//dependencies
const express = require("express");
const config = require("./config");
const app = express();

//config

const port = config.port;
// app.use(express.static("backgrounds"));
// app.use(express.static("videos"));

//middleware
//app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Hello from the middleware`);
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//routing

//routes
const apiRouter = require("./routes/apiRoutes");
const webRouter = require("./routes/webRoutes");
app.use("", webRouter);
app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`app running on Port: ${port}`);
});

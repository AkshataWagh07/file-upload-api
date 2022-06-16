const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const initRoutes = require("./server/route/app");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8082;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

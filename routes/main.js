// routes/main.js
const mainRoute = require("express").Router();

mainRoute.get("/", (req, res) => {
  res.status(200).send("<h1>Скоро тут будет интерфейс</h1>");
});

module.exports = mainRoute;

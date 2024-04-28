// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const {
  sendAllGames,
  deleteGame,
  addGameController,
} = require("../controllers/games"); // Контроллеры
const { getAllGames } = require("../middlewares/games"); // Мидлеварс

gamesRouter.post("/games", getAllGames, addGameController);
gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);

module.exports = gamesRouter;

const { parse } = require("url");
const lightRouter = require("./light.routes");
const usersRouter = require("./users.routes");
const ErrorController = require("../controller/error.controller");
const logger = require("../middleware/logger.middleware");

module.exports = (req, res) => {
  const { pathname } = parse(req.url || "", true);
  const segments = pathname.split("/").filter(Boolean);
  logger.http(req.url);
  if (segments[0] === "api") {
    if (segments[1] === "light") lightRouter(req, res);
    if (segments[1] === "users") usersRouter(req, res);
  } else ErrorController.NotFound(req, res);
};

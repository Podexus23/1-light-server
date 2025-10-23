const errorController = require("../controller/error.controller");
const lightController = require("../controller/light.controller");

module.exports = lightRouter = async (req, res) => {
  switch (req.url) {
    case "/api/light":
      lightController.getLight(req, res);
      break;
    case "/api/light/send":
      lightController.updateLightDB(req, res);
      break;
    case "/api/light/check":
      lightController.getLightDB(req, res);
      break;

    default:
      errorController.NotFound(req, res);
  }
};

const errorController = require("../controller/error.controller");
const usersController = require("../controller/users.controller");

module.exports = async (req, res) => {
  switch (req.url) {
    //register user
    case "/api/users": {
      if (req.method === "POST") usersController.register(req, res);
      //get all users if logged
      if (req.method === "GET") usersController.getAll(req, res);
      break;
    }
    case "/api/users/login":
      //login user
      usersController.login(req, res);
      break;
    case "/api/users/logout":
      //logout user
      usersController.logout(req, res);
      break;
    case "/api/users/delete":
      //remove user
      usersController.remove(req, res);
      break;

    default:
      errorController.NotFound(req, res);
  }
};

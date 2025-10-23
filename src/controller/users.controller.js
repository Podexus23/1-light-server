const parseBodyHelper = require("../helpers/parseBody.helper");
const usersService = require("../service/users.service");
const errorController = require("./error.controller");

class UsersController {
  async register(req, res) {
    //get data
    try {
      const { email, password } = await parseBodyHelper(req);
      await usersService.register(email, password);

      res.writeHead(200, { "Content-type": "application/json" });
      res.end(
        JSON.stringify({ data: `User: ${email} - created successfully` })
      );
    } catch (error) {
      errorController.BadRequest(req, res, error.message);
    }
  }
  login(req, res) {}
  logout(req, res) {}
  getAll(req, res) {}
  remove(req, res) {}
}

module.exports = new UsersController();

const parseBodyHelper = require("../helpers/parseBody.helper");
const usersService = require("../service/users.service");

class UsersController {
  async register(req, res) {
    //get data
    const { email, password } = await parseBodyHelper(req);
    const user = await usersService.register(email, password);
    //check that there is no suh users
    //hash password
    //send data to DB

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: "Hello from register" }));
  }
  login(req, res) {}
  logout(req, res) {}
  getAll(req, res) {}
  remove(req, res) {}
}

module.exports = new UsersController();

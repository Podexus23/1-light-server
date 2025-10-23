const errorController = require("../controller/error.controller");
const loggerMiddleware = require("../middleware/logger.middleware");
const supabaseService = require("./supabase.service");
const bcrypt = require("bcrypt");

class UsersService {
  async register(email, password) {
    const data = await supabaseService.findOne("users", "email", email);
    if (data.count) {
      throw new Error("User Already registered");
    }
    const passwordHash = await bcrypt.hash(password, 5);
    const user = await supabaseService.insertOne("users", [
      { email, passwordHash },
    ]);
    loggerMiddleware.info(JSON.stringify(user));
  }
}

module.exports = new UsersService();

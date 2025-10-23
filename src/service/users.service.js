const errorController = require("../controller/error.controller");
const loggerMiddleware = require("../middleware/logger.middleware");
const supabaseService = require("./supabase.service");
const bcrypt = require("bcrypt");

class UsersService {
  async register(email, password) {
    const { data } = await supabaseService.findOne("users", "email", email);

    if (data && data.length > 0) {
      throw new Error(`User ${email} already registered`);
    }

    const passwordHash = await bcrypt.hash(password, 5);
    const user = await supabaseService.insertOne("users", [
      { email, passwordHash },
    ]);

    if (user.error) {
      loggerMiddleware.error("Problem with DB");
      throw new Error("Problem with DB");
    }

    loggerMiddleware.info(`Email: ${email} - registered`);
    return user;
  }
}

module.exports = new UsersService();

const loggerMiddleware = require("../middleware/logger.middleware");

module.exports = parsedBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        loggerMiddleware.info(`Body: ${JSON.stringify(parsed)}`);
        resolve(parsed);
      } catch (err) {
        loggerMiddleware.error("Invalid JSON");
        reject(new Error("Invalid JSON"));
      }
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
};

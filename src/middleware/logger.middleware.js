class Logger {
  warn() {
    //yellow
    console.log("\x1b[33m%s\x1b[0m", `WARN: ${text}`);
  }
  error() {
    //red
    console.log("\x1b[31m%s\x1b[0m", `ERROR: ${text}`);
  }
  info() {
    //green
    console.log("\x1b[32m%s\x1b[0m", `INFO: ${text}`);
  }
  http(text) {
    //blue
    console.log("\x1b[34m%s\x1b[0m", `HTTP: ${text}`);
  }

  test() {
    console.log("\x1b[35m%s\x1b[0m", "Фиолетовый текст");
    console.log("\x1b[36m%s\x1b[0m", "Бирюзовый текст");
  }
}

module.exports = new Logger();

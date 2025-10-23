class ErrorController {
  NotFound(req, res) {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: "hello, page not found" }));
  }
}

module.exports = new ErrorController();

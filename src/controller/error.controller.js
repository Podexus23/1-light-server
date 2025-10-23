class ErrorController {
  NotFound(req, res, message) {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: message || "hello, page not found" }));
  }

  BadRequest(req, res, message) {
    res.writeHead(401, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: message || "hello, page not found" }));
  }
}

module.exports = new ErrorController();

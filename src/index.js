require("dotenv").config();
const http = require("http");
const LightService = require("./service/light.service");
const mainRouter = require("./routes/index");
const corsHelper = require("./helpers/cors.helper");

const PORT = process.env.PORT || 5050;

LightService.startGenerateLight();

const app = http.createServer(async (req, res) => {
  corsHelper(req, res);

  mainRouter(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is working on localhost:${PORT}`);
});

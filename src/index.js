require("dotenv").config();
const http = require("http");
const LightService = require("./service/light.service");
const SupabaseService = require("./service/supabase.service");
const mainRouter = require("./routes/index");

const PORT = process.env.PORT || 5050;

LightService.startGenerateLight();

const app = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Обработка preflight-запросов
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  mainRouter(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is working on localhost:${PORT}`);
});

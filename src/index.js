require("dotenv").config();
const http = require("http");
const LightService = require("./service/light.service");
const SupabaseService = require("./service/supabase.service");

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

  if (req.url === "/api/light") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: { light: LightService.getLight() } }));
  } else if (req.url === "/api/light/send") {
    const data = await SupabaseService.sendLight(LightService.getLight());
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data }));
  } else if (req.url === "/api/light/check") {
    const data = await SupabaseService.getLastLight();
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data }));
  } else {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: "hello" }));
  }
});

app.listen(PORT, () => {
  console.log(`Server is working on localhost:${PORT}`);
});

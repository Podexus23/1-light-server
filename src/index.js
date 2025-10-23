require("dotenv").config();
const http = require("http");
const LightService = require("./service/light.service");
const SupabaseService = require("./service/supabase.service");

const PORT = 5000;

LightService.startGenerateLight();

const app = http.createServer(async (req, res) => {
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

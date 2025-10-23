require("dotenv").config();
const http = require("http");
const LightService = require("./service/light.service");
const SupabaseService = require("./service/supabase.service");

const PORT = 5000;

const lighter = new LightService();
lighter.startGenerateLight();

const app = http.createServer((req, res) => {
  if (req.url === "/api/light") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: { light: lighter.getLight() } }));
  } else {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: "hello" }));
  }
});

async function appStart() {
  app.listen(PORT, () => {
    console.log(`Server is working on localhost:${PORT}`);
  });
  let lastOne = await SupabaseService.getLastLight();
  console.log(lastOne);
}

appStart();

const LightService = require("../service/light.service");
const SupabaseService = require("../service/supabase.service");

class LightController {
  getLight(req, res) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data: { light: LightService.getLight() } }));
  }

  async updateLightDB(req, res) {
    const data = await SupabaseService.sendLight(LightService.getLight());
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data }));
  }

  async getLightDB(req, res) {
    const data = await SupabaseService.getLastLight();
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ data }));
  }
}

module.exports = new LightController();

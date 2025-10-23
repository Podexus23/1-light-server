const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

class SupabaseService {
  constructor() {
    this.base = createClient(supabaseUrl, supabaseKey);
  }

  async getLastLight() {
    const { data, error } = await this.base.from("light").select("*");
    return data.at(-1);
  }

  async sendLight(quantity) {
    const { data, error } = await this.base
      .from("light")
      .insert([{ quantity }])
      .select();
    return { data, error };
  }
}

module.exports = new SupabaseService();

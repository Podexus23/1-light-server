module.exports = class LightService {
  light = 0;
  generator;
  speed = 1000;

  constructor(light, speed) {
    this.light = light || this.light;
    this.speed = speed || this.speed;
  }

  startGenerateLight() {
    this.generator = setInterval(() => {
      this.light += 1;
    }, this.speed);
  }

  getLight() {
    return this.light;
  }

  stopGenerateLight() {
    clearInterval(this.generator);
  }
};

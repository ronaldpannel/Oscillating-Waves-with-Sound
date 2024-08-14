class Block {
  constructor(freq, y, hue, note) {
    this.angle = 0;
    this.freq = freq;
    this.x = amp * cos(this.angle * this.freq);
    this.y = y;
    this.hue = hue;
    this.s = 255;
    this.b = 255;
    this.margin = 2;

    this.note = note;

    this.ocs = new p5.Oscillator();
    this.ocs.start();
    this.ocs.freq(midiToFreq(this.note));
    this.ocs.amp(0);
  }
  update() {
    if (this.collision()) {
      this.b = 255;
      this.s = 0;
      this.ocs.amp(1, 0.5);
    } else {
      this.b = 50;
      this.s = 255;
      this.ocs.amp(0, 0.5);
    }
    this.x = amp * cos(this.angle * this.freq);
    this.angle += 0.01;
  }
  draw() {
    noFill();
    stroke(this.hue, 255, this.b);
    rect(0, this.y, amp, size / 2 - this.margin);
    fill(this.hue, this.s, 255);
    noStroke();
    rect(this.x, this.y, size / 2 - this.margin, size / 2 - this.margin);
  }
  collision() {
    if (this.x + size / 2 >= amp) {
      return true;
    } else {
      return false;
    }
  }
}

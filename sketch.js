const playBtn = document.getElementById("btn");
let amp, size, margin, num;
let freq_mult;
let blocks;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(RADIUS);
  colorMode(HSB)
  margin = 20;
  amp = (width - 2 * margin) / 2;
  num = 60;
  size = (height - 2 * margin) / num;
  freq_mult = 0.2

  blocks = [];

  for (let i = 0; i < num; i++) {
    let freq = (i + 1) * freq_mult;
    let y = (margin + size / 2) + i * size
    let hue = 255/num * i
    let note = 50 + i
    blocks.push(new Block(freq, y, hue, note));
  }
}

function draw() {
  background(240, 100, 60);

  playBtn.addEventListener("click", () => {
    if (getAudioContext().state !== "running") {
      getAudioContext().resume();
    }
  });

  translate(width / 2, 0);
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].update();
    blocks[i].draw();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeigh);
}

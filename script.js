// (function () {
let canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d'),
  w = canvas.width = innerWidth,
  h = canvas.height = innerHeight,
  particles = [],
  properties = {
    bgColor: 'rgba(17, 17, 19, 1)',
    particleColor: 'rgba(255, 40, 40, 1)',
    particleRadius: 3,
    particleCount: 60,
    particleMaxVelocity: 0.5,

  };

document.querySelector('body').appendChild(canvas);

window.onresize = () => {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
}

class Particle {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
    this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
  }
  position() {
    if (this.x > w || this.x < 0) this.velocityX *= -1
    if (this.y > h || this.y < 0) this.velocityY *= -1
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
  reDraw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = properties.particleColor;
    ctx.fill();
  }
}

function reDrawBackgroud() {
  ctx.fillStyle = properties.bgColor;
  ctx.fillRect(0, 0, w, h);
}

// function 

function reDrawParticles() {
  for (let i in particles) {
    particles[i].position();
    particles[i].reDraw();
  }
}

function loop() {
  reDrawBackgroud();
  reDrawParticles();
  requestAnimationFrame(loop);
}

function init() {
  for (let i = 0; i < properties.particleCount; i++) {
    particles.push(new Particle);
  }

  loop();
}

init();

// }())
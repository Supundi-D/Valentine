/* Typing Effect */
const text = "Will you be my Valentine? ❤️";
let i = 0;
const speed = 100;
const typeText = document.getElementById("typeText");

function typing() {
  if (i < text.length) {
    typeText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}
typing();

/* Button Logic */
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

yesBtn.onclick = () => {
  response.innerHTML = "Yayyy! You just made my heart the happiest 💕🥰";
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
};

/* Heart Particles */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
  }
  draw() {
    ctx.font = this.size + "px Arial";
    ctx.fillText("❤️", this.x, this.y);
  }
  update() {
    this.y -= this.speed;
    this.draw();
  }
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.05) hearts.push(new Heart());
  hearts.forEach((heart, i) => {
    heart.update();
    if (heart.y < -20) hearts.splice(i, 1);
  });
  requestAnimationFrame(animateHearts);
}
animateHearts();

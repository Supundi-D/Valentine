/* Elements */
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("start");

const typeText = document.getElementById("typeText");
const subText = document.getElementById("subText");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

/* Start Button */
startBtn.onclick = () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Please enter your name 💕");
    return;
  }

  intro.classList.add("hidden");
  main.classList.remove("hidden");

  startTyping(name);
};

/* Typing Effect */
function startTyping(name) {
  const text = `Hey ${name} ❤️ Will you be my Valentine?`;
  let i = 0;
  typeText.innerHTML = "";

  function typing() {
    if (i < text.length) {
      typeText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 80);
    }
  }
  typing();

  subText.innerHTML = `${name}, you make my heart smile every single day ✨`;
}

/* Buttons */
yesBtn.onclick = () => {
  response.innerHTML = "Yayyy! 💕 This just became my favorite Valentine ever 🥰";
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

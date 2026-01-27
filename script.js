document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const main = document.getElementById("main");
  const startBtn = document.getElementById("start");
  const nameInput = document.getElementById("nameInput");

  const typeText = document.getElementById("typeText");
  const subText = document.getElementById("subText");
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");

  const modal = document.getElementById("loveModal");
  const closeModal = document.getElementById("closeModal");
  const letterText = document.getElementById("letterText");

  const bgMusic = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");

  let userName = "";
  let musicPlaying = false;

  /* Vibration */
  function vibrate(p) {
    if (navigator.vibrate) navigator.vibrate(p);
  }

  /* Fade Music */
  function fadeInMusic() {
    bgMusic.volume = 0;
    bgMusic.play();
    let v = 0;
    const fade = setInterval(() => {
      v += 0.02;
      bgMusic.volume = Math.min(v, 0.6);
      if (v >= 0.6) clearInterval(fade);
    }, 100);
  }

  function fadeOutMusic() {
    let v = bgMusic.volume;
    const fade = setInterval(() => {
      v -= 0.02;
      bgMusic.volume = Math.max(v, 0);
      if (v <= 0) {
        bgMusic.pause();
        clearInterval(fade);
      }
    }, 100);
  }

  /* Sparkles */
  function sparkle(x, y) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.innerText = "💖";
    s.style.left = x + "px";
    s.style.top = y + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 2000);
  }

  /* Typing Effect */
  function typeWriter(el, text, speed = 80, cb) {
    let i = 0;
    el.innerHTML = "";

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.innerText = "|";
    el.appendChild(cursor);

    function type() {
      if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text.charAt(i));
        i++;
        setTimeout(type, speed);
      } else if (cb) cb();
    }
    type();
  }

  /* START */
  startBtn.onclick = () => {
    userName = nameInput.value.trim();
    if (!userName) return alert("Enter your name ❤️");

    vibrate([100, 50, 100]);
    intro.classList.add("hidden");
    main.classList.remove("hidden");

    if (!musicPlaying) {
      fadeInMusic();
      musicPlaying = true;
      musicToggle.innerText = "🔊";
    }

    typeWriter(typeText, `Hey ${userName} ❤️`, 90, () => {
      typeWriter(subText, "Will you be my Valentine?", 70);
    });
  };

  /* YES */
  yesBtn.onclick = (e) => {
    vibrate([200,100,200,100,300]);

    for (let i = 0; i < 8; i++) {
      sparkle(
        e.clientX + Math.random() * 40 - 20,
        e.clientY + Math.random() * 40 - 20
      );
    }

    letterText.innerHTML = `
    Dear ${userName},<br><br>
    From the moment you entered my life, everything began to change in
    the most beautiful way. The world felt warmer, brighter, and full
    of meaning because of you. 💕<br><br>
  
    You are my calm on the loudest days, my joy in the simplest moments,
    and the person my heart always finds its way back to. Every smile,
    every word, and every second with you feels like something I want
    to hold onto forever.<br><br>
  
    Thank you for being you, for choosing me, and for making my days
    better just by being in them. I can't imagine my world without you. ❤️<br><br>
  
    Happy Valentine's Day, my favorite person 🌹
  `;
  

    modal.classList.remove("hidden");
  };

  /* NO */
  noBtn.onmouseover = () => {
    vibrate(80);
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
  };

  /* Music Toggle */
  musicToggle.onclick = () => {
    if (musicPlaying) {
      fadeOutMusic();
      musicToggle.innerText = "🔈";
    } else {
      fadeInMusic();
      musicToggle.innerText = "🔊";
    }
    musicPlaying = !musicPlaying;
  };

  /* Close Modal */
  closeModal.onclick = () => modal.classList.add("hidden");
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };

});

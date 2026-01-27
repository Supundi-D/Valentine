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

  let userName = "";

  /* Vibration */
  function vibrate(p) {
    if (navigator.vibrate) navigator.vibrate(p);
  }

  /* Sparkle */
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
  function typeWriter(element, text, speed = 80, callback) {
    let i = 0;
    element.innerHTML = "";

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.innerHTML = "|";
    element.appendChild(cursor);

    function type() {
      if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text.charAt(i));
        i++;
        setTimeout(type, speed);
      } else {
        if (callback) callback();
      }
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

    typeWriter(
      typeText,
      `Hey ${userName} ❤️`,
      90,
      () => {
        typeWriter(
          subText,
          "Will you be my Valentine?",
          70
        );
      }
    );
  };

  /* YES */
  yesBtn.onclick = (e) => {
    vibrate([200, 100, 200, 100, 300]);

    for (let i = 0; i < 8; i++) {
      sparkle(
        e.clientX + Math.random() * 40 - 20,
        e.clientY + Math.random() * 40 - 20
      );
    }

    letterText.innerHTML = `
      Dear ${userName},<br><br>
      From the moment you came into my life,
      everything felt warmer and brighter.
      You are my favorite thought, my calm,
      and my happiness 💕<br><br>
      Thank you for choosing me.<br>
      Happy Valentine's Day ❤️
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

  /* MODAL CLOSE */
  closeModal.onclick = () => modal.classList.add("hidden");

  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };

});

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

  function vibrate(p) {
    if (navigator.vibrate) navigator.vibrate(p);
  }

  startBtn.onclick = () => {
    userName = nameInput.value.trim();
    if (!userName) return alert("Enter your name ❤️");

    vibrate([100,50,100]);
    intro.classList.add("hidden");
    main.classList.remove("hidden");

    typeText.innerText = `Hey ${userName} ❤️`;
    subText.innerText = "Will you be my Valentine?";
  };

  yesBtn.onclick = () => {
    vibrate([200,100,200]);
    letterText.innerHTML = `
      Dear ${userName},<br><br>
      You make my days brighter and my heart happier.
      Thank you for being you 💕<br><br>
      Happy Valentine’s Day ❤️
    `;
    modal.classList.remove("hidden");
  };

  closeModal.onclick = () => modal.classList.add("hidden");

  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };

  noBtn.onmouseover = () => {
    vibrate(100);
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  };

});

const PASSWORD = "loveforever";

function checkPassword() {
  const input = document.getElementById("password").value;
  const wrong = document.getElementById("wrong");

  if (input === PASSWORD) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
  } else {
    wrong.innerHTML = "❌ Wrong password, try again ❤️";
  }
}

// Days together (change this date)
const startDate = new Date("2026-06-23");
const today = new Date();
const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

const days = document.getElementById("days");
if (days) days.innerHTML = diff;

// Love letter
const message =
"Happy One Month, My Love ❤️ Thank you for making every day special. I love every smile, every laugh, and every memory we share. I can't wait to create many more beautiful memories together. ❤️";

let i = 0;

document.getElementById("letterBtn").onclick = function () {
  document.getElementById("letter").style.display = "block";

  function type() {
    if (i < message.length) {
      document.getElementById("typing").innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  if (i === 0) type();
};

// Gift surprise
document.getElementById("giftBtn").onclick = function () {
  document.getElementById("giftMessage").style.display = "block";
};

// Music button
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function () {
  if (music.paused) {
    music.play();
    musicBtn.innerHTML = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.innerHTML = "🎵 Play Music";
  }
};

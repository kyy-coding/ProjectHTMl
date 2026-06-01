/* ==========================================
   GIFT STORY — main.js
   ========================================== */

/* ==========================
   CONFIG — Ubah isi ini
========================== */

const CONFIG = {

  music: "https://kyy-coding.github.io/ProjectHTMl/Music/music.mp3",

  pages: [
    {
      background: "https://kyy-coding.github.io/ProjectHTMl/background/background1.jpeg",
      sticker:    "https://kyy-coding.github.io/ProjectHTMl/Sticker/Sticker2.gif",
      title:      "Halo 👋",
      text:       "Ini adalah halaman pertama dengan background dan stiker yang berbeda."
    },
    {
      background: "https://kyy-coding.github.io/ProjectHTMl/background/background5.jpeg",
      sticker:    "https://kyy-coding.github.io/ProjectHTMl/Sticker/Sticker1.gif",
      title:      "Terima Kasih ❤️",
      text:       "Halaman kedua menggunakan efek mengetik. Setiap huruf akan muncul satu per satu.",
      typewriter: true
    },
    {
      background: "https://kyy-coding.github.io/ProjectHTMl/background/background3.jpeg",
      sticker:    "https://kyy-coding.github.io/ProjectHTMl/Sticker/Sticker3.gif",
      title:      "NEGRO",
      text:       "Ibaratnya itu kayak hukum coulomb, tau kan yak definisi nya hukum coulomb"
    },
    {
      background: "https://kyy-coding.github.io/ProjectHTMl/background/background4.jpeg",
      sticker:    "https://kyy-coding.github.io/ProjectHTMl/Sticker/Sticker4.gif",
      title:      "Hadiah Untukmu 🎁",
      text:       "Klik tombol kado untuk melihat pesan terakhir."
    }
  ],

  finalPage: {
    background: "https://kyy-coding.github.io/ProjectHTMl/background/background5.jpeg",
    title:      "🎉 Selamat 🎉",
    text:       "Terima kasih sudah mencoba. Kamu selalu spesial. 🌸"
  }

};

/* ==========================
   ELEMENT REFS
========================== */

const bg        = document.getElementById("bg");
const sticker   = document.getElementById("sticker");
const titleEl   = document.getElementById("title");
const textEl    = document.getElementById("text");
const nextBtn   = document.getElementById("nextBtn");
const giftBtn   = document.getElementById("giftBtn");
const music     = document.getElementById("music");

/* ==========================
   LOADING OVERLAY
========================== */

window.addEventListener("load", () => {
  const ov = document.getElementById("loading-overlay");
  setTimeout(() => {
    ov.classList.add("hidden");
    setTimeout(() => ov.remove(), 900);
  }, 1200);
});

/* ==========================
   MUSIC
========================== */

music.src = CONFIG.music;

document.body.addEventListener("click", () => {
  music.play().catch(() => {});
}, { once: true });

/* ==========================
   PAGE SYSTEM
========================== */

let current = 0;

function loadPage(index) {
  const page = CONFIG.pages[index];

  // fade bg
  bg.style.opacity = "0";
  setTimeout(() => {
    bg.style.backgroundImage = `url(${page.background})`;
    bg.style.opacity = "1";
  }, 400);

  // sticker
  sticker.style.opacity = "0";
  setTimeout(() => {
    sticker.src     = page.sticker;
    sticker.style.opacity = "1";
  }, 400);

  titleEl.textContent = page.title;

  if (page.typewriter) {
    textEl.textContent = "";
    typeWriter(textEl, page.text, 35);
  } else {
    textEl.textContent = page.text;
  }

  // show/hide buttons
  const isLast = index === CONFIG.pages.length - 1;
  nextBtn.style.display  = isLast ? "none"  : "block";
  giftBtn.style.display  = isLast ? "block" : "none";

  // scroll arrow
  const arrow = document.getElementById("scrollArrow");
  if (arrow) arrow.classList.toggle("visible", !isLast);
}

nextBtn.onclick = () => {
  current++;
  loadPage(current);
};

/* ==========================
   TYPEWRITER
========================== */

function typeWriter(element, textValue, speed) {
  let i = 0;
  function typing() {
    if (i < textValue.length) {
      element.textContent += textValue.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

/* ==========================
   GIFT BUTTON — Flower bloom
========================== */

giftBtn.onclick = () => {
  // Final page
  bg.style.opacity = "0";
  setTimeout(() => {
    bg.style.backgroundImage = `url(${CONFIG.finalPage.background})`;
    bg.style.opacity = "1";
  }, 300);

  sticker.style.display = "none";
  titleEl.textContent = CONFIG.finalPage.title;
  textEl.textContent  = CONFIG.finalPage.text;
  giftBtn.style.display = "none";

  // Hide scroll arrow
  const arrow = document.getElementById("scrollArrow");
  if (arrow) arrow.classList.remove("visible");

  // Trigger effects
  createConfetti();
  startFlowerBloom();
  startHearts();
};

/* ==========================
   PARTICLES (rain drops)
========================== */

(function initParticles() {
  const container = document.getElementById("particles");
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left             = Math.random() * 100 + "vw";
    p.style.animationDuration = (4 + Math.random() * 6) + "s";
    p.style.animationDelay   = Math.random() * 5 + "s";
    container.appendChild(p);
  }
})();

/* ==========================
   CONFETTI
========================== */

function createConfetti() {
  const container = document.getElementById("confetti");
  for (let i = 0; i < 150; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left       = Math.random() * 100 + "vw";
    c.style.background = `hsl(${Math.random() * 360},100%,55%)`;
    c.style.animationDelay = Math.random() * 0.8 + "s";
    container.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ==========================
   FLOWER BLOOM — main effect
========================== */

const FLOWER_COLORS = ["pink", "red", "lilac", "peach", "white"];

function createFlower(x, y) {
  const wrap = document.createElement("div");
  wrap.className = "flower-wrap " + FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)];
  wrap.style.left   = x + "px";
  wrap.style.bottom = (window.innerHeight - y) + "px";

  // Tangkai
  const stem = document.createElement("div");
  stem.className = "flower-stem";

  // Daun
  const leafL = document.createElement("div");
  leafL.className = "leaf left";
  const leafR = document.createElement("div");
  leafR.className = "leaf right";
  stem.appendChild(leafL);
  stem.appendChild(leafR);

  // Kepala bunga
  const head = document.createElement("div");
  head.className = "flower-head";

  // 8 kelopak
  for (let i = 0; i < 8; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    head.appendChild(petal);
  }

  // Tengah
  const center = document.createElement("div");
  center.className = "flower-center";
  head.appendChild(center);

  // Serbuk sari bertebaran
  const pollenAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  pollenAngles.forEach(angle => {
    const pol = document.createElement("div");
    pol.className = "pollen";
    const rad  = (angle * Math.PI) / 180;
    const dist = 20 + Math.random() * 15;
    pol.style.setProperty("--dx", Math.cos(rad) * dist + "px");
    pol.style.setProperty("--dy", Math.sin(rad) * dist + "px");
    pol.style.animationDelay = (1.4 + Math.random() * 0.3) + "s";
    head.appendChild(pol);
  });

  wrap.appendChild(head);
  wrap.appendChild(stem);

  document.getElementById("flowers").appendChild(wrap);

  // Hapus setelah animasi selesai
  setTimeout(() => wrap.remove(), 4000);
}

function startFlowerBloom() {
  const W = window.innerWidth;
  const H = window.innerHeight;

  // Gelombang bunga — muncul bertahap
  let launched = 0;
  const total  = 35;

  const interval = setInterval(() => {
    if (launched >= total) {
      clearInterval(interval);
      return;
    }

    // Posisi acak tapi lebih banyak dari bawah
    const x = Math.random() * W;
    const y = H * 0.6 + Math.random() * H * 0.4;

    createFlower(x, y);
    launched++;
  }, 80);

  // Gelombang kedua lebih besar setelah 1.5s
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const x = Math.random() * W;
        const y = H * 0.5 + Math.random() * H * 0.5;
        createFlower(x, y);
      }, i * 100);
    }
  }, 1500);
}

/* ==========================
   HEARTS (dari Gabut.html)
========================== */

function startHearts() {
  let count = 0;
  const maxHearts = 60;

  const heartInterval = setInterval(() => {
    if (count >= maxHearts) {
      clearInterval(heartInterval);
      return;
    }

    const heart = document.createElement("div");
    heart.className = "fa-heart-custom";
    heart.textContent = "♥";
    heart.style.left             = Math.random() * 90 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.animationDelay   = "0s";
    heart.style.fontSize          = (14 + Math.random() * 20) + "px";

    document.body.appendChild(heart);
    count++;

    setTimeout(() => heart.remove(), 5000);
  }, 150);
}

/* ==========================
   START
========================== */

loadPage(0);

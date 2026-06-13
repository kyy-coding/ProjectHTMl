   const CONFIG = {
    pages: [
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg", 
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker1.gif",  
      title: "HALO NURIN", 
      text: "Hari ini tanggal 14 Juni 2026 yak, pasti sudah tau lah yak ini apa. Seperti biasa aku gak bermaksud apa-apa dari html, cuma merayakan ulang tahun teman lewat html. Yuk diklik tombol lanjutnya.", 
      type: "welcome"
      },
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg", 
      title: "🎮 Memori Game 🎮", 
      text: "Cocokkan semua kartu untuk lanjut!", 
      type: "memory" 
      },
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg", 
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker2.gif", 
      title: "Wakil Ketua Kelas", 
      text: "Wakil ketua kelas IX-A yang patut dijadikan motivasi bagi orang lain. Mampu memimpin teater IX-A dengan baik.", 
      type: "quote" 
      },
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg",
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker4.gif",    
      title: "Sosok Hanna", 
      text: "Pasti gak asing kan yak dengan nama Hanna. Yak, pemeran utama selain Marry di teater IX-A yang memiliki makna mendalam.", 
      type: "quote"
      },
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg",
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker5.gif",    
      text: "Walaupun hasilnya mungkin belum terlalu maksimal, tentunya kamu udah ngelakuin yang terbaik untuk kelas IX-A. Pengalaman tersebut bisa berguna di masa depan yang akan mendatang.", 
      type: "quote"
      }, 
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg",
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker6.gif",    
      text: "Yahh, udah mau sampe di halaman terakhir yaa. Kalo gitu, sebelumnya aku minta maaf kalo ada salah selama di semester 1-2 kelas 9. Daripada kelamaan, yuk klik tombol lanjutnya buat ngeliat sesuatu", 
      type: "quote"
      },  
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg", 
      type: "gift"
      },
      {
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg", 
       sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker7.gif",       
      title: "Happy Birthday Raisa Nurin Nabila", 
      text: "Semoga sehat selalu, panjang umur, menjadi teladan bagi orang lain, berbakti kepada kedua orang tua, dan keterima di sekolah impian.", 
      type: "ending" 
      }
    ]
  };

  const kartuData = [
    { id:1, icon:'🎉' },{ id:2, icon:'🥳' },{ id:3, icon:'🌺' },{ id:4, icon:'💝' },
    { id:5, icon:'🎁' },{ id:6, icon:'💘' },{ id:1, icon:'🎉' },{ id:2, icon:'🥳' },
    { id:3, icon:'🌺' },{ id:4, icon:'💝' },{ id:5, icon:'🎁' },{ id:6, icon:'💘' }
  ];

  const audioEl = document.getElementById("bgAudio");
  const nextBtn = document.getElementById("nextBtn");
  const titleEl = document.getElementById("title");
  const textEl = document.getElementById("text");
  const bgOverlay = document.getElementById("bgOverlay");
  const storyContainer = document.getElementById("story-container");
  const hal1 = document.getElementById("hal1");
  const memoryContainer = document.getElementById("memory-container");
  const giftContainer = document.getElementById("gift-container");
  const papanGame = document.getElementById("papanGame");
  const tiupBtn = document.getElementById("tiupBtn");
  const apiLilin = document.getElementById("apiLilin");
  const stickerImg = document.getElementById("sticker");
  const particleCanvas = document.getElementById("particleCanvas");
  let ctx = null;
  let particles = [];
  let animationId = null;
  let particleActive = false;

  // ========== PARTIKEL ==========
  function initParticleCanvas() {
    if (!particleCanvas) return;
    ctx = particleCanvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  }

  function resizeCanvas() {
    if (particleCanvas) {
      particleCanvas.width = window.innerWidth;
      particleCanvas.height = window.innerHeight;
    }
  }

  function startParticleEffect() {
    if (!ctx) initParticleCanvas();
    if (animationId) cancelAnimationFrame(animationId);
    particles = [];
    particleActive = true;
    for (let i = 0; i < 160; i++) {
      particles.push({
        x: Math.random() * particleCanvas.width,
        y: Math.random() * particleCanvas.height,
        radius: Math.random() * 6 + 2,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 1.2) * 0.6 - 0.3,
        color: `hsl(${Math.random() * 60 + 40}, 80%, 65%)`,
        alpha: Math.random() * 0.7 + 0.3,
        life: 1,
        decay: 0.002 + Math.random() * 0.005
      });
    }
    animateParticles();
  }

  function animateParticles() {
    if (!particleActive || !ctx) return;
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    let allDead = true;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (p.life <= 0) continue;
      allDead = false;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      p.alpha = p.life * 0.8;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.beginPath();
      for (let s = 0; s < 5; s++) {
        const angle = (s * 72 - 90) * Math.PI / 180;
        const x1 = p.x + Math.cos(angle) * p.radius * 0.9;
        const y1 = p.y + Math.sin(angle) * p.radius * 0.9;
        if (s === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
      }
      ctx.closePath();
      ctx.fillStyle = "#fff9c4";
      ctx.globalAlpha = p.alpha * 0.6;
      ctx.fill();
    }
    if (allDead) {
      cancelAnimationFrame(animationId);
      particleActive = false;
      return;
    }
    animationId = requestAnimationFrame(animateParticles);
  }

  function stopParticleEffect() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    particleActive = false;
    if (ctx) ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  }

  // ========== LOGIKA UTAMA ==========
  let currentPage = -1;
  let gameActive = false;
  let kartuDibuka = [];
  let pasanganCocok = 0;
  let currentCards = [];

  function animatePageTransition() {
    storyContainer.classList.add("page-transition");
    setTimeout(() => storyContainer.classList.remove("page-transition"), 500);
  }

  function pindahHal(index) {
    if (index >= CONFIG.pages.length) return;
    currentPage = index;
    const page = CONFIG.pages[currentPage];
    
    // Ganti background
    if (page.background) bgOverlay.style.backgroundImage = `url('${page.background}')`;
    titleEl.textContent = page.title || "";
    textEl.textContent = page.text || "";
    
    // Sembunyikan kontainer khusus
    memoryContainer.classList.add("sembunyi");
    giftContainer.classList.add("sembunyi");
    
    // Atur stiker: tampilkan hanya jika halaman bukan memory/gift dan properti sticker ada
    if (stickerImg) {
      if (page.type !== "memory" && page.type !== "gift" && page.sticker && page.sticker !== "") {
        stickerImg.src = page.sticker;
        stickerImg.style.display = "block";
      } else {
        stickerImg.style.display = "none";
        stickerImg.src = ""; // kosongkan src agar tidak request broken
      }
    }
    
    // Partikel hanya di halaman ending
    if (page.type !== "ending") {
      stopParticleEffect();
    } else {
      setTimeout(() => startParticleEffect(), 100);
    }
    
    // Navigasi sesuai tipe
    if (page.type === "memory") {
      memoryContainer.classList.remove("sembunyi");
      nextBtn.style.display = "none";
      mulaiGameMemory();
    } else if (page.type === "gift") {
      giftContainer.classList.remove("sembunyi");
      nextBtn.style.display = "none";
      if (apiLilin) {
        apiLilin.classList.remove("mati");
        apiLilin.style.animation = "flicker 0.4s infinite alternate";
        apiLilin.style.visibility = "visible";
      }
    } else {
      if (page.type === "ending") {
        nextBtn.style.display = "none";
      } else {
        nextBtn.style.display = "inline-block";
      }
    }
    animatePageTransition();
  }

  // ========== MEMORY GAME ==========
  function acakKartu(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function mulaiGameMemory() {
    gameActive = true;
    kartuDibuka = [];
    pasanganCocok = 0;
    currentCards = acakKartu([...kartuData]);
    papanGame.innerHTML = "";
    currentCards.forEach((card, idx) => {
      const kartuDiv = document.createElement("div");
      kartuDiv.className = "kartu";
      kartuDiv.dataset.id = card.id;
      kartuDiv.innerHTML = `<div class="dalemKartu"><div class="depanKartu"></div><div class="belakangKartu">${card.icon}</div></div>`;
      kartuDiv.addEventListener("click", () => balikKartu(kartuDiv, card, idx));
      papanGame.appendChild(kartuDiv);
    });
    document.getElementById("statusGame").innerText = "";
  }

  function balikKartu(elemen, card, idx) {
    if (!gameActive || elemen.classList.contains("balik") || kartuDibuka.length >= 2) return;
    elemen.classList.add("balik");
    kartuDibuka.push({ elemen, card, idx });
    if (kartuDibuka.length === 2) {
      const [k1, k2] = kartuDibuka;
      if (k1.card.id === k2.card.id) {
        pasanganCocok++;
        kartuDibuka = [];
        if (pasanganCocok === 6) {
          gameActive = false;
          document.getElementById("statusGame").innerText = "Wuih, jago nih";
          setTimeout(() => pindahHal(currentPage + 1), 800);
        }
      } else {
        setTimeout(() => {
          k1.elemen.classList.remove("balik");
          k2.elemen.classList.remove("balik");
          kartuDibuka = [];
        }, 700);
      }
    }
  }

  // ========== TIUP LILIN ==========
  tiupBtn.addEventListener("click", () => {
    if (apiLilin && !apiLilin.classList.contains("mati")) {
      apiLilin.classList.add("mati");
      apiLilin.style.animation = "padam 0.8s forwards";
      setTimeout(() => pindahHal(currentPage + 1), 1000);
    }
  });

  // ========== TOMBOL LANJUT ==========
  nextBtn.addEventListener("click", () => {
    if (currentPage >= 0 && CONFIG.pages[currentPage].type !== "memory" && CONFIG.pages[currentPage].type !== "gift") {
      if (CONFIG.pages[currentPage].type !== "ending") {
        pindahHal(currentPage + 1);
      }
    }
  });

  // ========== BUKA AMPLOP ==========
  document.getElementById("btnBuka").addEventListener("click", () => {
    audioEl.play().catch(e=>console.log);
    const envelope = document.getElementById("envelope");
    envelope.classList.remove("close");
    envelope.classList.add("open");
    document.querySelector(".reset").style.transform = "scale(0)";
    setTimeout(() => {
      envelope.style.transform = "scale(0)";
      envelope.style.opacity = "0";
      setTimeout(() => {
        hal1.style.display = "none";
        storyContainer.classList.remove("sembunyi");
        pindahHal(0);
      }, 500);
    }, 1000);
  });

  // Inisialisasi
  initParticleCanvas();
  storyContainer.classList.add("sembunyi");
  memoryContainer.classList.add("sembunyi");
  giftContainer.classList.add("sembunyi");
  nextBtn.style.display = "none";
  // Sembunyikan stiker awal
  if (stickerImg) stickerImg.style.display = "none";

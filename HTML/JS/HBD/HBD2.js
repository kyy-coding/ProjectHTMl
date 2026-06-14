   const CONFIG = {
    pages: [
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg", 
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker1.gif",  
      title: "HALO NURIN", 
      text: "Hari ini tanggal 16 Juni 2026 yak, pasti sudah tau lah yak ini apa. Seperti biasa aku gak bermaksud apa-apa dari html ini, cuma merayakan ulang tahun teman lewat html. Yuk diklik tombol lanjutnya.", 
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
      text: "Wakil ketua kelas IX-A yang patut dijadikan motivasi bagi orang lain. Mampu memimpin dan berakting dengan baik dalam teater IX-A. Terutama, dalam memberikan ide pada bagian properti. Momen saat membuat properti seru toh?, well i miss that day.", 
      type: "quote" 
      },
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg",
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker4.gif",    
      title: "Sosok Hanna Yang Berusaha", 
      text: "Pasti gak asing kan yak dengan nama Hanna. Yak, pemeran utama selain Marry di teater IX-A yang memiliki makna mendalam. Walaupun, terdapat sedikit masalah teknis pada bagian properti, sound dan lighting, aku salut kepada semua aktor dan aktris, terutama aktris utama yang mampu untuk improvisasi.", 
      type: "quote"
      },
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg",
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker5.gif",    
      text: "Walaupun hasilnya mungkin belum terlalu maksimal, tentunya kamu udah ngelakuin yang terbaik untuk kelas IX-A. Bukan cuman aktor dan aktris, kru, operator sound dan lighting juga berusaha semaksimal mungkin untuk IX-A. Pengalaman tersebut bisa berguna di masa depan yang akan mendatang.", 
      type: "quote"
      }, 
      { 
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Background.jpg",
      sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker6.gif",    
      text: "Yahh, udah mau sampe di halaman terakhir yaa. Kalo gitu, sebelumnya aku minta maaf kalo ada salah selama di semester 1-2 kelas 9. Daripada kelamaan, yuk klik tombol lanjutnya buat ngeliat sesuatu.", 
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

  // ========== PASSWORD ==========
  const correctPassword = "140626RA";
  const passwordPage = document.getElementById("passwordPage");
  const passwordInput = document.getElementById("passwordInput");
  const submitPassBtn = document.getElementById("submitPassword");
  const passwordError = document.getElementById("passwordError");

  submitPassBtn.addEventListener("click", () => {
    if (passwordInput.value === correctPassword) {
      passwordPage.style.display = "none";
      hal1.style.display = "flex";
    } else {
      passwordError.textContent = "❌ Kode salah, coba lagi!";
      passwordInput.value = "";
    }
  });
  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") submitPassBtn.click();
  });

  // ========== PARTIKEL PEGUNUNGAN ==========
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
    const colorPalette = ["#a0d4f0","#b8e2f2","#8fcae3","#6bb5d0","#9bc4a0","#b8d9b0","#7faa7a","#e0f0f5","#f0f8ff","#ffffff"];
    for (let i = 0; i < 180; i++) {
      particles.push({
        x: Math.random() * particleCanvas.width,
        y: Math.random() * particleCanvas.height,
        radius: Math.random() * 8 + 2,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 1.0) * 0.5 - 0.2,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        alpha: Math.random() * 0.6 + 0.2,
        life: 1,
        decay: 0.0015 + Math.random() * 0.004,
        shape: Math.random() > 0.6 ? "star" : "circle"
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
      p.alpha = p.life * 0.7;
      ctx.globalAlpha = p.alpha;
      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      } else {
        ctx.beginPath();
        for (let s = 0; s < 5; s++) {
          const angle = (s * 72 - 90) * Math.PI / 180;
          const x1 = p.x + Math.cos(angle) * p.radius;
          const y1 = p.y + Math.sin(angle) * p.radius;
          if (s === 0) ctx.moveTo(x1, y1);
          else ctx.lineTo(x1, y1);
        }
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    }
    if (allDead) {
      cancelAnimationFrame(animationId);
      particleActive = false;
      return;
    }
    animationId = requestAnimationFrame(animateParticles);
  }
  function stopParticleEffect() {
    if (animationId) cancelAnimationFrame(animationId);
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
    if (page.background) bgOverlay.style.backgroundImage = `url('${page.background}')`;
    titleEl.textContent = page.title || "";
    textEl.textContent = page.text || "";
    memoryContainer.classList.add("sembunyi");
    giftContainer.classList.add("sembunyi");
    
    if (stickerImg) {
      if (page.type !== "memory" && page.type !== "gift" && page.sticker && page.sticker !== "") {
        stickerImg.src = page.sticker;
        stickerImg.style.display = "block";
      } else {
        stickerImg.style.display = "none";
        stickerImg.src = "";
      }
    }
    
    if (page.type !== "ending") stopParticleEffect();
    else setTimeout(() => startParticleEffect(), 100);
    
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
      nextBtn.style.display = (page.type === "ending") ? "none" : "inline-block";
    }
    animatePageTransition();
  }

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

  tiupBtn.addEventListener("click", () => {
    if (apiLilin && !apiLilin.classList.contains("mati")) {
      apiLilin.classList.add("mati");
      apiLilin.style.animation = "padam 0.8s forwards";
      setTimeout(() => pindahHal(currentPage + 1), 1000);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage >= 0 && CONFIG.pages[currentPage].type !== "memory" && CONFIG.pages[currentPage].type !== "gift") {
      if (CONFIG.pages[currentPage].type !== "ending") pindahHal(currentPage + 1);
    }
  });

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

  initParticleCanvas();
  storyContainer.classList.add("sembunyi");
  memoryContainer.classList.add("sembunyi");
  giftContainer.classList.add("sembunyi");
  nextBtn.style.display = "none";
  if (stickerImg) stickerImg.style.display = "none";

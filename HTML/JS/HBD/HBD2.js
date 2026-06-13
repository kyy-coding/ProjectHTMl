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
      background: "https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background1.jpeg", 
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
      text: "Yahh, udah sampe di halaman terakhir yaa. Kalo gitu, sebelumnya aku minta maaf kalo ada salah selama di semester 1-2 kelas 9. Daripada kelamaan, yuk klik tombol lanjutnya buat ngeliat sesuatu", 
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
    const stickerImg = document.getElementById("sticker");
    if (stickerImg) {
      if (page.sticker && page.sticker !== "") {
      stickerImg.src = page.sticker;
      stickerImg.classList.remove("sembunyi");
    } else {
      stickerImg.classList.add("sembunyi");
    }
} 
    memoryContainer.classList.add("sembunyi");
    giftContainer.classList.add("sembunyi");
    
    if (page.type === "memory") {
      memoryContainer.classList.remove("sembunyi");
      nextBtn.style.display = "none";
      mulaiGameMemory();
    } else if (page.type === "gift") {
      giftContainer.classList.remove("sembunyi");
      nextBtn.style.display = "none";
      // Reset api lilin (pastikan tidak dalam keadaan mati)
      if (apiLilin) {
        apiLilin.classList.remove("mati");
        // Hapus style inline jika ada, dan reset animasi
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
          document.getElementById("statusGame").innerText = "✨ Wuih jago tuh ✨";
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

  // Event untuk tiup lilin
  tiupBtn.addEventListener("click", () => {
    if (apiLilin && !apiLilin.classList.contains("mati")) {
      apiLilin.classList.add("mati");
      // Matikan animasi agar efek padam berjalan
      apiLilin.style.animation = "padam 0.8s forwards";
      setTimeout(() => {
        pindahHal(currentPage + 1);
      }, 1000);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage >= 0 && CONFIG.pages[currentPage].type !== "memory" && CONFIG.pages[currentPage].type !== "gift") {
      if (CONFIG.pages[currentPage].type !== "ending") {
        pindahHal(currentPage + 1);
      }
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

  storyContainer.classList.add("sembunyi");
  memoryContainer.classList.add("sembunyi");
  giftContainer.classList.add("sembunyi");
  nextBtn.style.display = "none";

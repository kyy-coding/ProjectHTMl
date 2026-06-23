   // ========== KONFIGURASI ==========
        const CONFIG = {
            pages: [{
                background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
                sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker1.gif",
                title: "🌲 Selamat Datang Dyah! 🌲",
                text: "Hari ini tanggal 29 Juni 2026.\nSurat ini membawa keajaiban dari hutan Ghibli.\nKlik lanjut untuk memulai petualangan.",
                type: "welcome"
            }, {
                background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
                title: "",
                text: "",
                type: "memory"
            }, {
                background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
                sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker2.gif",
                title: "📜 Kenangan Pertama 📜",
                text: "Siapa sih yang gak kenal Dyah?, murid dari kelas IX-A yang benar benar pintar.",
                type: "quote"
            }, {
                background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
                sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker4.gif",
                title: "📜 Kenangan Kedua 📜",
                text: "Hal yang aku apresiasi dari kamu, yaitu kamu kalo kulihat tidak pernah sombong dengan kepintaranmu.",
                type: "quote"
            }, {
                background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
                sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker5.gif",
                text: "Kamu juga orangnya gak terlalu pendiam, masih bergaul dengan teman teman yang lain di kelas IX-A maupun diluar IX-A.",
                type: "quote"
            }, {
                background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
                sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker6.gif",
                text: "Wahh, udah mau sampe dihalaman terakhir yaa. Kalo gitu aku gak banyak basa basi lagi. Sebelumnya aku minta maaf ya kalo ada salah dikelas IX, daripada kelamaan, yuk diklik tombol lanjutnya.",
                type: "quote"
            }, {
                background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
                type: "gift"
            }, {
                background: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
                sticker: "https://kyy-coding.github.io/ProjectHTMl/Sticker/Cute/Sticker7.gif",
                title: "Happy Birthday Dyah Hanum Puspaningrum",
                text: "Semoga sehat selalu, panjang umur, menjadi teladan bagi orang lain, berbakti kepada kedua orang tua, dan keterima di sekolah impian.\n\n— Dari Hutan Ghibli —",
                type: "ending"
            }]
        };

        // ===== CONSTELLATION DATA =====
        const constellationStars = [
            { x: 0.22, y: 0.18 },
            { x: 0.40, y: 0.10 },
            { x: 0.58, y: 0.20 },
            { x: 0.72, y: 0.38 },
            { x: 0.65, y: 0.58 },
            { x: 0.48, y: 0.70 },
            { x: 0.30, y: 0.62 },
            { x: 0.16, y: 0.45 }
        ];

        // DOM Elements
        const audioEl = document.getElementById("bgAudio");
        const clickSoundEl = document.getElementById("clickSound");
        const nextBtn = document.getElementById("nextBtn");
        const titleEl = document.getElementById("title");
        const textEl = document.getElementById("text");
        const bgOverlay = document.getElementById("bgOverlay");
        const storyContainer = document.getElementById("story-container");
        const hal1 = document.getElementById("hal1");
        const memoryContainer = document.getElementById("memory-container");
        const giftContainer = document.getElementById("gift-container");
        const tiupBtn = document.getElementById("tiupBtn");
        const apiLilin = document.getElementById("apiLilin");
        const stickerImg = document.getElementById("sticker");
        const particleCanvas = document.getElementById("particleCanvas");
        let ctx = null;
        let particles = [];
        let animationId = null;
        let particleActive = false;

        // ===== CLICK SOUND =====
        function playClick() {
            try {
                const s = document.getElementById("clickSound");
                if (s) {
                    s.currentTime = 0;
                    s.play().catch(() => {});
                }
            } catch (_) {}
        }

        // ===== PARTIKEL =====
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
            const colors = ["#A3D9A5", "#5E8C61", "#d4e87a", "#F7F3E9", "#c4d4a0"];
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * particleCanvas.width,
                    y: Math.random() * particleCanvas.height,
                    radius: Math.random() * 4 + 2,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.8) * 0.25 - 0.12,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    alpha: Math.random() * 0.4 + 0.15,
                    life: 1,
                    decay: 0.001 + Math.random() * 0.003,
                    shape: Math.random() > 0.7 ? "star" : "circle"
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
                p.alpha = p.life * 0.4;
                ctx.globalAlpha = p.alpha;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 10;
                if (p.shape === "circle") {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    for (let s = 0; s < 5; s++) {
                        const angle = (s * 72 - 90) * Math.PI / 180;
                        const x1 = p.x + Math.cos(angle) * p.radius * 1.2;
                        const y1 = p.y + Math.sin(angle) * p.radius * 1.2;
                        if (s === 0) ctx.moveTo(x1, y1);
                        else ctx.lineTo(x1, y1);
                    }
                    ctx.closePath();
                    ctx.fillStyle = p.color;
                    ctx.fill();
                }
            }
            ctx.shadowBlur = 0;
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

        // ===== CONSTELLATION GAME =====
        let constellationGame = {
            canvas: null,
            cctx: null,
            stars: [],
            connected: [],
            currentIndex: 0,
            totalStars: 8,
            gameActive: false,
            gameFinished: false,
            width: 0,
            height: 0,
            glowPulse: 0,
            starParticles: [],
            animFrame: null,
            errorFlash: 0,
            completed: false
        };

        function initConstellationGame() {
            const canvas = document.getElementById("constellationCanvas");
            if (!canvas) return;
            const rect = canvas.parentElement.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + "px";
            canvas.style.height = rect.height + "px";
            const cctx = canvas.getContext("2d");
            cctx.scale(dpr, dpr);

            constellationGame.canvas = canvas;
            constellationGame.cctx = cctx;
            constellationGame.width = rect.width;
            constellationGame.height = rect.height;
            constellationGame.currentIndex = 0;
            constellationGame.connected = [];
            constellationGame.gameFinished = false;
            constellationGame.completed = false;
            constellationGame.errorFlash = 0;
            constellationGame.starParticles = [];

            // Map star positions to canvas coords
            constellationGame.stars = constellationStars.map((s, i) => ({
                x: s.x * rect.width,
                y: s.y * rect.height,
                index: i,
                radius: 18,
                connected: false,
                glow: 0
            }));

            // Generate background star particles
            for (let i = 0; i < 80; i++) {
                constellationGame.starParticles.push({
                    x: Math.random() * rect.width,
                    y: Math.random() * rect.height,
                    r: Math.random() * 2 + 0.5,
                    a: Math.random() * 0.6 + 0.1,
                    speed: 0.002 + Math.random() * 0.004,
                    phase: Math.random() * Math.PI * 2
                });
            }

            document.getElementById("gameProgress").textContent = "Bintang terhubung: 0 dari " + constellationGame.totalStars;
            document.getElementById("gameStatus").textContent = "✨ Klik bintang secara berurutan ✨";
            document.getElementById("gameStatus").className = "game-status";
            document.getElementById("gameOverReveal").style.display = "none";

            constellationGame.gameActive = true;
            constellationGame.gameFinished = false;

            if (constellationGame.animFrame) cancelAnimationFrame(constellationGame.animFrame);
            renderConstellation();

            canvas.addEventListener("click", onCanvasClick);
            canvas.addEventListener("touchstart", onCanvasTouch, { passive: true });
        }

        function onCanvasClick(e) {
            if (!constellationGame.gameActive || constellationGame.gameFinished) return;
            const rect = constellationGame.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            handleStarClick(x, y);
        }

        function onCanvasTouch(e) {
            if (!constellationGame.gameActive || constellationGame.gameFinished) return;
            const touch = e.touches[0];
            if (!touch) return;
            const rect = constellationGame.canvas.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            handleStarClick(x, y);
        }

        function handleStarClick(x, y) {
            const stars = constellationGame.stars;
            const idx = constellationGame.currentIndex;

            // Find closest star within radius
            let closest = -1;
            let closestDist = 40;
            for (let i = 0; i < stars.length; i++) {
                if (stars[i].connected) continue;
                const dx = stars[i].x - x;
                const dy = stars[i].y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            }

            if (closest === -1) return;

            // Check if this is the correct next star
            if (closest === idx) {
                // Correct!
                playClick();
                stars[closest].connected = true;
                constellationGame.connected.push(closest);
                constellationGame.currentIndex++;

                const progress = document.getElementById("gameProgress");
                progress.textContent = "Bintang terhubung: " + constellationGame.connected.length + " dari " + constellationGame
                    .totalStars;

                // Check if all connected
                if (constellationGame.connected.length === constellationGame.totalStars) {
                    constellationGame.completed = true;
                    constellationGame.gameActive = false;
                    constellationGame.gameFinished = true;
                    document.getElementById("gameStatus").textContent = "🌟 Konstelasi selesai! 🌟";
                    document.getElementById("gameStatus").className = "game-status win";
                    setTimeout(() => {
                        showConstellationComplete();
                    }, 600);
                } else {
                    document.getElementById("gameStatus").textContent = "✅ Bintang " + (constellationGame.connected
                    .length) + " terhubung! Lanjutkan.";
                    document.getElementById("gameStatus").className = "game-status win";
                }
                renderConstellation();
            } else {
                // Wrong!
                playClick();
                constellationGame.errorFlash = 30;
                document.getElementById("gameStatus").textContent = "❌ Urutan salah! Coba lagi dari awal.";
                document.getElementById("gameStatus").className = "game-status lose";
                // Reset progress
                constellationGame.stars.forEach(s => s.connected = false);
                constellationGame.connected = [];
                constellationGame.currentIndex = 0;
                document.getElementById("gameProgress").textContent = "Bintang terhubung: 0 dari " + constellationGame
                    .totalStars;
                renderConstellation();

                // Reset status after a moment
                setTimeout(() => {
                    if (!constellationGame.gameFinished) {
                        document.getElementById("gameStatus").textContent = "✨ Klik bintang secara berurutan ✨";
                        document.getElementById("gameStatus").className = "game-status";
                    }
                }, 1500);
            }
        }

        function showConstellationComplete() {
            document.getElementById("gameStatus").textContent = "🌟 Konstelasi selesai! 🌟";
            document.getElementById("gameStatus").className = "game-status win";
            const reveal = document.getElementById("gameOverReveal");
            reveal.style.display = "block";
            document.getElementById("finalMessage").textContent = "🌟 Konstelasi Selesai!";
            document.getElementById("finalSub").textContent = "Kamu berhasil menemukan konstelasi nya! ✨";
            document.getElementById("gameContinueBtn").style.display = "inline-block";
            renderConstellation();
        }

        function renderConstellation() {
            const cctx = constellationGame.cctx;
            const w = constellationGame.width;
            const h = constellationGame.height;
            if (!cctx) return;

            cctx.clearRect(0, 0, w, h);

            // Draw background star particles
            const time = Date.now() / 1000;
            constellationGame.starParticles.forEach(p => {
                const alpha = p.a * (0.6 + 0.4 * Math.sin(time * p.speed + p.phase));
                cctx.globalAlpha = alpha;
                cctx.beginPath();
                cctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                cctx.fillStyle = "#fff";
                cctx.shadowColor = "#A3D9A5";
                cctx.shadowBlur = 6;
                cctx.fill();
            });
            cctx.shadowBlur = 0;
            cctx.globalAlpha = 1;

            // Draw connected lines with glow
            const connected = constellationGame.connected;
            if (connected.length > 0) {
                const stars = constellationGame.stars;
                for (let i = 0; i < connected.length - 1; i++) {
                    const s1 = stars[connected[i]];
                    const s2 = stars[connected[i + 1]];
                    cctx.beginPath();
                    cctx.moveTo(s1.x, s1.y);
                    cctx.lineTo(s2.x, s2.y);
                    cctx.strokeStyle = "#A3D9A5";
                    cctx.lineWidth = 3;
                    cctx.shadowColor = "#A3D9A5";
                    cctx.shadowBlur = 20;
                    cctx.stroke();
                }
                // Also draw a line from last connected to next target hint (soft)
                if (connected.length < stars.length && connected.length > 0) {
                    const last = stars[connected[connected.length - 1]];
                    const next = stars[connected.length];
                    if (next) {
                        cctx.beginPath();
                        cctx.moveTo(last.x, last.y);
                        cctx.lineTo(next.x, next.y);
                        cctx.strokeStyle = "rgba(163, 217, 165, 0.15)";
                        cctx.lineWidth = 1.5;
                        cctx.shadowBlur = 0;
                        cctx.setLineDash([6, 8]);
                        cctx.stroke();
                        cctx.setLineDash([]);
                    }
                }
            }

            // Draw all stars
            const stars = constellationGame.stars;
            const glow = 0.6 + 0.4 * Math.sin(Date.now() / 800);

            stars.forEach((s, i) => {
                const isConnected = s.connected;
                const isCurrent = (i === constellationGame.currentIndex && !constellationGame.gameFinished);
                const isCompleted = constellationGame.completed;

                // Star glow
                let radius = s.radius;
                let color = "#fff";
                let shadowColor = "#A3D9A5";
                let shadowBlur = 15;

                if (isConnected) {
                    color = "#A3D9A5";
                    shadowColor = "#A3D9A5";
                    shadowBlur = 25 + 15 * glow;
                } else if (isCurrent && !constellationGame.gameFinished) {
                    color = "#f5f0d0";
                    shadowColor = "#d4e87a";
                    shadowBlur = 30 + 20 * glow;
                    radius = s.radius + 4 * glow;
                } else if (isCompleted) {
                    color = "#A3D9A5";
                    shadowColor = "#A3D9A5";
                    shadowBlur = 35 + 20 * glow;
                    radius = s.radius + 2 * glow;
                }

                // Error flash
                if (constellationGame.errorFlash > 0) {
                    color = "#ff6b6b";
                    shadowColor = "#ff6b6b";
                    shadowBlur = 40;
                    radius = s.radius + 6;
                    constellationGame.errorFlash--;
                }

                cctx.shadowColor = shadowColor;
                cctx.shadowBlur = shadowBlur;

                // Star body
                const grad = cctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, radius);
                grad.addColorStop(0, color);
                grad.addColorStop(0.6, color);
                grad.addColorStop(1, "rgba(255,255,255,0)");
                cctx.beginPath();
                cctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
                cctx.fillStyle = grad;
                cctx.fill();

                // Star cross
                if (isConnected || isCurrent || isCompleted) {
                    cctx.shadowBlur = 0;
                    cctx.strokeStyle = color;
                    cctx.lineWidth = 1.5;
                    const cr = radius * 0.5;
                    cctx.beginPath();
                    cctx.moveTo(s.x - cr, s.y);
                    cctx.lineTo(s.x + cr, s.y);
                    cctx.moveTo(s.x, s.y - cr);
                    cctx.lineTo(s.x, s.y + cr);
                    cctx.stroke();
                }

                // Number indicator for connected stars
                if (isConnected) {
                    const idx = constellationGame.connected.indexOf(i);
                    if (idx !== -1) {
                        cctx.shadowBlur = 0;
                        cctx.fillStyle = "#2F5233";
                        cctx.font = "bold 11px 'Quicksand', sans-serif";
                        cctx.textAlign = "center";
                        cctx.textBaseline = "middle";
                        cctx.fillText(idx + 1, s.x, s.y + 1);
                    }
                }

                // Pulsing ring for current target
                if (isCurrent && !constellationGame.gameFinished && !constellationGame.completed) {
                    cctx.shadowBlur = 0;
                    cctx.beginPath();
                    cctx.arc(s.x, s.y, radius + 10 + 6 * glow, 0, Math.PI * 2);
                    cctx.strokeStyle = "rgba(212, 232, 122, 0.25)";
                    cctx.lineWidth = 2;
                    cctx.stroke();
                }
            });

            cctx.shadowBlur = 0;
            cctx.globalAlpha = 1;

            // If completed, draw extra glow overlay
            if (constellationGame.completed) {
                cctx.shadowColor = "#A3D9A5";
                cctx.shadowBlur = 60;
                cctx.beginPath();
                cctx.arc(w / 2, h / 2, Math.min(w, h) * 0.3, 0, Math.PI * 2);
                cctx.fillStyle = "rgba(163, 217, 165, 0.04)";
                cctx.fill();
                cctx.shadowBlur = 0;
            }

            constellationGame.animFrame = requestAnimationFrame(renderConstellation);
        }

        // ===== NAVIGASI =====
        let currentPage = -1;

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
                // Init constellation game after DOM render
                setTimeout(() => {
                    if (constellationGame.animFrame) cancelAnimationFrame(constellationGame.animFrame);
                    initConstellationGame();
                }, 50);
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

        // ===== EVENT LISTENERS =====
        document.getElementById("gameContinueBtn").addEventListener("click", () => {
            if (constellationGame.animFrame) cancelAnimationFrame(constellationGame.animFrame);
            pindahHal(currentPage + 1);
        });

        tiupBtn.addEventListener("click", () => {
            if (apiLilin && !apiLilin.classList.contains("mati")) {
                apiLilin.classList.add("mati");
                apiLilin.style.animation = "padam 0.8s forwards";
                setTimeout(() => pindahHal(currentPage + 1), 1000);
            }
        });

        nextBtn.addEventListener("click", () => {
            if (currentPage >= 0 && CONFIG.pages[currentPage].type !== "memory" && CONFIG.pages[currentPage].type !==
                "gift") {
                if (CONFIG.pages[currentPage].type !== "ending") pindahHal(currentPage + 1);
            }
        });

        // ===== BUKA SURAT =====
        document.getElementById("btnBuka").addEventListener("click", () => {
            audioEl.play().catch(e => console.log);
            const envelope = document.getElementById("ghibliEnvelope");
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
                });
            }, 1000);
        });

        // ===== INIT =====
        initParticleCanvas();
        storyContainer.classList.add("sembunyi");
        memoryContainer.classList.add("sembunyi");
        giftContainer.classList.add("sembunyi");
        nextBtn.style.display = "none";
        if (stickerImg) stickerImg.style.display = "none";

        // Handle resize for constellation
        window.addEventListener("resize", () => {
            if (!memoryContainer.classList.contains("sembunyi")) {
                const canvas = document.getElementById("constellationCanvas");
                if (canvas && constellationGame.cctx) {
                    const rect = canvas.parentElement.getBoundingClientRect();
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;
                    canvas.style.width = rect.width + "px";
                    canvas.style.height = rect.height + "px";
                    constellationGame.cctx.scale(dpr, dpr);
                    constellationGame.width = rect.width;
                    constellationGame.height = rect.height;
                    // Update star positions
                    constellationGame.stars.forEach((s, i) => {
                        s.x = constellationStars[i].x * rect.width;
                        s.y = constellationStars[i].y * rect.height;
                    });
                }
            }
        });

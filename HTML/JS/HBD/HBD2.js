// config background, stiker, musik dan teks
const audio =
document.getElementById("linkmp3");
const nextBtn =
document.getElementById("nextBtn");
const title =
document.getElementById("title");
const text =
document.getElementById("text");
const sticker =
document.getElementById("sticker");
const bg =
document.querySelector(".background-overlay");
//>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<//
const CONFIG = {
pages: [
{
 background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background9.jpeg",
 sticker:"",
 title:"HAAAA",
 text:"hehehehehehee",
 type:"welcome"
},
{
 background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background3.jpeg",
 sticker:"",
 title:"HAIIIII",
 text:"",
 type:"memory"
},
{
 background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background4.jpeg",
 sticker:"",
 title:"HHHDHSHUHD",
 text:"hehehehe",
 type:"quote"
},
{
 background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background5.jpeg",
 sticker:"",
 title:"AAAAAA",
 text:"hehehehheheheh",
 type:"quote"
},
{
 background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background6.jpeg",
 type:"gift"
},
{
 background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background7.jpeg",
 sticker:"",
 title:"ARAHABAKIIIII",
 text:"hehehehehe",
 type:"ending"
        }
    ]
};

// Buka Envelope
    function bukaEnvelope() {
      audio.play();
      const envelope = document.getElementById('envelope');
      envelope.classList.remove('close');
      envelope.classList.add('open');
      document.querySelector(".reset").style="transform:scale(0);opacity:0;transition:all .7s ease";
      setTimeout(() => {
        document.querySelector("#envelope").style="transform:scale(0);opacity:0;transition:all .7s ease";
        setTimeout(() => {
        	pindahHal(0);
            envelope.classList.remove('open');
            envelope.classList.add('close');
        }, 700);
      }, 1200); // Transition to hal2 after animation
    }

    // Halaman 2: Memory Game
    let kartuDibuka = [];
    let pasanganCocok = 0;
    let gameJalan = false;

    function acakKartu(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function mulaiHal2() {
	  kartuDibuka = [];
	  pasanganCocok = 0;
	  gameJalan = true;
	  document.getElementById('kotakPesan').innerHTML = '';
	  document.getElementById('lanjut').classList.add('sembunyi');
	  document.getElementById('ulang').classList.add('sembunyi');
	
	  const papanGame = document.getElementById('papanGame');
	  papanGame.innerHTML = '';
  	  const kartuAcak = acakKartu([...kartu]);

  	  kartuAcak.forEach((card, index) => {
	    const elemenKartu = document.createElement('div');
	    elemenKartu.className = 'kartu';
	    elemenKartu.dataset.id = card.id;
	    elemenKartu.innerHTML = `
	      <div class="dalemKartu">
	        <div class="depanKartu"></div>
	        <div class="belakangKartu">${card.icon}</div>
	      </div>
	    `;
	    elemenKartu.addEventListener('click', () => balikKartu(elemenKartu, card, index));
	    papanGame.appendChild(elemenKartu);
	  });
	
	  //mulaiKelopak('game-canvas');
	  //   setTimeout(() => {
	  //     if (pasanganCocok < 6 && gameJalan) selesaiGame(false);
	  //   }, 60000);
	}

    function balikKartu(elemenKartu, card, index) {
      if (!gameJalan || kartuDibuka.length >= 2 || elemenKartu.classList.contains('balik')) return;
      elemenKartu.classList.add('balik');
      kartuDibuka.push({ elemen: elemenKartu, card, index });

      if (kartuDibuka.length === 2) {
        const [kartu1, kartu2] = kartuDibuka;
        if (kartu1.card.id === kartu2.card.id) {
          pasanganCocok++;
          
          kartuDibuka = [];
          if (pasanganCocok === 6) selesaiGame(true); 
        } else {
          setTimeout(() => {
            kartu1.elemen.classList.remove('balik');
            kartu2.elemen.classList.remove('balik');
            kartuDibuka = [];
          }, 570);
        }
      }
    }

    function selesaiGame(sukses) {
     gameJalan = false;
      if (sukses) {
        setTimeout(() => {
         pindahHal(2);
    }, 700);
  } 
  else {
    document
      .getElementById('ulang')
      .classList.remove('sembunyi');
  }
}
    // Fungsi Tiup Lilin
    function tiupLilin() {
      const api = document.getElementById('apiLilin');
      api.classList.add('mati');
      setTimeout(() => {
        pindahHal(5);
      }, 1200); // Waktu setelah animasi mati selesai
    }
    // Navigasi Halaman
    let currentPage = -1;

    loadPage(0);

    function pindahHal(index){
    if(index >= CONFIG.pages.length){
        return;
    }
    currentPage = index;
    loadPage(index);
    } 
//Fungsi loadPage
   function loadPage(index){
 document
  .getElementById("story-container")
  .classList.remove("sembunyi");
	   
 const page = CONFIG.pages[index];

 title.textContent = page.title || "";

 text.textContent = page.text || "";

 if(page.sticker){
    sticker.src = page.sticker;
 }

 bg.style.backgroundImage =
 `url(${page.background})`;

 // MEMORY GAME
 if(page.type === "memory"){

    document
      .getElementById("memory-container")
      .classList.remove("sembunyi");

    document
      .getElementById("gift-container")
      .classList.add("sembunyi");

    mulaiHal2();

 }

 // HALAMAN HADIAH
 else if(page.type === "gift"){

    document
      .getElementById("memory-container")
      .classList.add("sembunyi");

    document
      .getElementById("gift-container")
      .classList.remove("sembunyi");

 }

 // HALAMAN BIASA
 else{

    document
      .getElementById("memory-container")
      .classList.add("sembunyi");

    document
      .getElementById("gift-container")
      .classList.add("sembunyi");

 }

}
nextBtn.onclick = () => {
    const page =
    CONFIG.pages[currentPage];
    // Jangan lanjut otomatis
    // saat game berlangsung

    if(page.type === "memory"){
        return;
    }
    if(page.type === "gift"){
        return;
    }
    pindahHal(currentPage + 1);

};
    
    const scrollContainer = document.getElementById("containerPesan");
    function autoScroll() {scrollContainer.scrollTop += 10;} 
    const scrollInterval = setInterval(autoScroll, 30); 

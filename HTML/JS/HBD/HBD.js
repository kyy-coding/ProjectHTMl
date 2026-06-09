/* ==========================
   CONFIG
========================== */

const CONFIG = {

music:"https://kyy-coding.github.io/ProjectHTMl/Music/Mantra-Hujan-Kobo-Kanaeru.mp3",

pages:[
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background1.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker1.gif",
title:"HEEH KAMU",
text:"Ini html pertamaku. Tolong tekan tombol lanjutnya pelan-pelan yaaa. Terus kalo pergantian sticker nya lambat, harap dimaklumi yak, soalnya performa hp sedikit ngaruh.",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background2.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker2.gif",
title:"Aurellia Carissa",
text:"Hari ini tanggal 10 Juni 2026 yaa. Hari spesial bagi seseorang nih. Daripada penasaran, yuk diklik tombol lanjutnya.",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background3.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker3.gif",
title:"Ini Apa?",
text:"Ini hadiah dari anak Informatika. Walaupun hanya berupa html, buatnya tentunya gak sebentar sih. I hope you liked this project.",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background4.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker4.gif",
text:"Catatan sedikit sebelum lanjut yak. Aku gak bermaksud apa-apa hanya teman biasa yang memberikan hadiah berupa html yang sederhana :D",
typewriter: true
},   
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background5.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker5.gif",
title:"Tujuan buat ini apa?",
text:"Aku dapat ide ini, ketika lagi mainan koordinat cartesius. Daripada penasaran, jadi mulai belajar pemrograman css, html, dan js deh. Semua itu tidak gampang, jika tidak berusaha.",
typewriter: true
},   
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background6.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker6.gif",
text:"Awalnya bingung mau buat html apa. Waktu itu ada dikirimin full data tanggal lahir kelas IX-A. Salah satunya tanggal lahir kamu, jadi aku buat ini deh. Project sederhana yang bertujuan sebagai kenangan, walaupun enggak berwujud.",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background7.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker7.gif",
text:"Projek ini pun masih berkisaran mid-hard. Jadi, ada bantuan dari beberapa tools juga, tapi gak semuanya. Dari projek ini tentunya aku banyak belajar tentang coding, so that's it.",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background8.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker8.gif",
text:"Kalo diliat-liat kamu ini seseorang yang ramah ya, mudah bergaul, jarang kehabisan topik, dan asyik. That's from my opinion :D",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background9.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker9.gif",
text:"Sebelum masuk ke bagian akhir halaman, aku juga mau minta maaf yaa, kalo aku ada salah ke kamu baik dari kelas 7-9. Kedepannya aku usahakan jadi orang yang lebih baik. Btw, server nya belum jadi cik :), karena ngestuck di JavaScript.",
typewriter: true
},      
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background10.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker10.gif",
title:"Kebanyakan Yapping",
text:"Yaudah. Daripada berlama-lama tekan tombol kado ini yak. Ingat i don't mean anything from this project.",
typewriter: true   
}
],
finalPage:{
background:"assets/bg1.jpg",
title:"HAPPY BIRTHDAY NAMA KAMU",
text:"Semoga sehat selalu, panjang umur, jadi anak yang berbakti kepada orang tua, dan keterima disekolah favorit yaaaa."
}

};

/* ==========================
   MUSIC
========================== */

const music =
document.getElementById("music");

music.src =
CONFIG.music;

document.body.addEventListener(
"click",
()=>{
music.play().catch(()=>{});
},
{once:true}
);

/* ==========================
   ELEMENT
========================== */
const bg =
document.getElementById("bg");
const sticker =
document.getElementById("sticker");
const title =
document.getElementById("title");
const text =
document.getElementById("text");
const nextBtn =
document.getElementById("nextBtn");
const giftBtn =
document.getElementById("giftBtn");

/* ==========================
   PAGE SYSTEM
========================== */

function loadPage(index){

const page = CONFIG.pages[index];

if(!page) return;

bg.style.backgroundImage =
`url(${page.background})`;

sticker.src =
page.sticker;

title.textContent =
page.title;

/* TYPEWRITER */

if(page.typewriter === true){

text.textContent = "";

typeWriter(
text,
page.text,
35
);

}else{

text.textContent =
page.text;

}

/* BUTTON */

if(index >= CONFIG.pages.length - 1){

nextBtn.style.display =
"none";

giftBtn.style.display =
"block";

}else{

nextBtn.style.display =
"block";

giftBtn.style.display =
"none";

}

}


/* ==========================
   TYPEWRITER
========================== */

function typeWriter(element,textValue,speed){
let i = 0;
function typing(){
if(i < textValue.length){
element.textContent +=
textValue.charAt(i);
i++;
setTimeout(
typing,
speed
);
}
}
typing();

}

let current = 0;

nextBtn.onclick = ()=>{

if(current < CONFIG.pages.length - 1){

current++;

loadPage(current);

}

};

/* ==========================
   GIFT
========================== */
giftBtn.onclick = ()=>{
    showFlowers();
};

/* ==========================
   RAIN EFFECT
========================== */

const rainContainer =
document.getElementById("rain");

if(rainContainer){

for(let i=0;i<120;i++){

const drop =
document.createElement("div");

drop.className =
"rain-drop";

drop.style.left =
Math.random()*100 + "vw";

drop.style.animationDuration =
(0.8 + Math.random()*0.7) + "s";

drop.style.animationDelay =
Math.random()*2 + "s";

drop.style.opacity =
0.3 + Math.random()*0.7;

rainContainer.appendChild(drop);

}

}

/* ==========================
   PARTICLES
========================== */

const particles =
document.getElementById("particles");

if(particles){

for(let i=0;i<40;i++){

const p =
document.createElement("div");

p.className =
"particle";

p.style.left =
Math.random()*100+"vw";

p.style.top =
Math.random()*100+"vh";

p.style.animationDuration =
(4+Math.random()*6)+"s";

p.style.animationDelay =
Math.random()*5+"s";

particles.appendChild(p);

}

}
/* ==========================
   START
========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.classList.remove(
"not-loaded"
);

},300);

});

loadPage(0);

/* ==========================
   CONFIG
========================== */

const CONFIG = {

music:"https://kyy-coding.github.io/ProjectHTMl/Music/Mantra-Hujan-Kobo-Kanaeru.mp3",

pages:[
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background1.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/kobo-kanaeru-こぼ.gif",
title:"HEEH KAMU",
text:"Ini html pertamaku. Tolong tekan tombol lanjutnya pelan-pelan yaaa. Terus kalo pergantian sticker nya lambat, harap dimaklumi yak, soalnya performa hp sedikit ngaruh.",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background2.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/gura-uwu-gura.gif",
title:"NAMA KAMU",
text:"Hari ini tanggal 10 Juni 2026 yaa. Hari spesial bagi seseorang nih. Daripada penasaran, yuk diklik tombol lanjutnya.",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background3.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker2.gif",
title:"Ini Apa?",
text:"Ini hadiah dari anak Informatika. Walaupun hanya berupa html, buatnya tentunya gak sebentar sih. Catatan sedikit yak, gak bermaksud apa-apa hanya teman biasa yang memberikan hasil projeknya :D",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background4.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/Sticker4.gif",
title:"Tujuan buat ini apa?",
text:"Aku buat ini, karena untuk mengisi waktu luangku. Awalnya tuh, mainan koordinat cartesius, baru tiba-tiba dapat ide buat bikin html gitu. Milih konsep html ini pun, karena keliatan standar untuk memulai pemrograman.",
typewriter: true
},   
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/Kobo/Background5.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Kobo/kobo-こぼ.gif",
title:"Kebanyakan Yapping",
text:"Yaudah. Daripada lama-lama tekan tombol kado ini yak."
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

/* ==========================
   CONFIG
========================== */

const CONFIG = {

music:"https://kyy-coding.github.io/ProjectHTMl/Music/music.mp3",

pages:[
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/background1.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Sticker2.gif",
title:"Halo 👋",
text:"Ini adalah halaman pertama dengan background dan stiker yang berbeda."
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/background5.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Sticker1.gif",
title:"Terima Kasih ❤️",
text:"Halaman kedua menggunakan efek mengetik. Setiap huruf akan muncul satu per satu.",
typewriter: true
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/background3.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Sticker3.gif",
title:"NEGRO",
text:"Ibaratnya itu kayak hukum coulomb, tau kan yak definisi nya hukum coulomb",
typewriter: false
},
{
background:"https://kyy-coding.github.io/ProjectHTMl/background/background4.jpeg",
sticker:"https://kyy-coding.github.io/ProjectHTMl/Sticker/Sticker4.gif",
title:"Hadiah Untukmu 🎁",
text:"Klik tombol kado untuk melihat pesan terakhir."
}
],
finalPage:{
background:"assets/bg1.jpg",
title:"🎉 Selamat 🎉",
text:"Terima kasih sudah mencoba demo ini. Kamu bisa menambahkan halaman sebanyak yang kamu mau."
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
    createConfetti();
    setTimeout(()=>{
        showFlowers();
    },1500);
};

/* ==========================
   PARTICLES
========================= */
for(let i=0;i<40;i++){
const p =
document.createElement("div");
p.className =
"particle";
p.style.left =
Math.random()*100+"vw";
p.style.animationDuration =
(4+Math.random()*6)+"s";
p.style.animationDelay =
Math.random()*5+"s";
document
.getElementById("particles")
.appendChild(p);
}

/* ==========================
   CONFETTI
========================== */
function createConfetti(){
const container =
document.getElementById("confetti");
for(let i=0;i<150;i++){
const c =
document.createElement("div");
c.className =
"confetti";
c.style.left =
Math.random()*100+"vw";
c.style.background =
`hsl(${Math.random()*360},100%,50%)`;
container.appendChild(c);
setTimeout(()=>{
c.remove();
},3000);
}
}
/* ==========================
   START
========================== */
loadPage(0);

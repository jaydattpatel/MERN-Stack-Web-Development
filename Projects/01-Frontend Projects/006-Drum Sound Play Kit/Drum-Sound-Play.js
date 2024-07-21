// Create eventListener to all the button 
let wSound = "https://files.codingninjas.in/tom-1-28537.mp3?_ga=2.185889129.1354753439.1716388116-1655841848.1716180105"; 
let aSound = "https://files.codingninjas.in/tom-2-28541.mp3?_ga=2.185889129.1354753439.1716388116-1655841848.1716180105"; 
let sSound = "https://files.codingninjas.in/tom-3-28542.mp3?_ga=2.185889129.1354753439.1716388116-1655841848.1716180105"; 
let dSound = "https://files.codingninjas.in/tom-4-28543.mp3?_ga=2.185889129.1354753439.1716388116-1655841848.1716180105"; 
let jSound = "https://files.codingninjas.in/snare-28545.mp3?_ga=2.139942643.1354753439.1716388116-1655841848.1716180105"; 
let kSound = "https://files.codingninjas.in/crash-28546.mp3?_ga=2.139942643.1354753439.1716388116-1655841848.1716180105"; 
let lSound = "https://files.codingninjas.in/kick-bass-28547.mp3?_ga=2.139942643.1354753439.1716388116-1655841848.1716180105"; 


function play(sound){
  let song = new Audio(sound);
  song.play();
}

let wBtn = document.querySelector('.w');
wBtn.addEventListener('click', () => {play(wSound);} );

let aBtn = document.querySelector('.a');
aBtn.addEventListener('click', () => {play(aSound);} );

let sBtn = document.querySelector('.s');
sBtn.addEventListener('click', () => {play(sSound);} );

let dBtn = document.querySelector('.d');
dBtn.addEventListener('click', () => {play(dSound);} );

let jBtn = document.querySelector('.j');
jBtn.addEventListener('click', () => {play(jSound);} );

let kBtn = document.querySelector('.k');
kBtn.addEventListener('click', () => {play(kSound);} );

let lBtn = document.querySelector('.l');
lBtn.addEventListener('click', () => {play(lSound);} );


// All button should be able to play a different sound.
window.addEventListener('keydown', (event) => {
   switch(event.key){
     case 'w': play(wSound); break;
     case 'a': play(aSound); break;
     case 's': play(sSound); break;
     case 'd': play(dSound); break;
     case 'j': play(jSound); break;
     case 'k': play(kSound); break;
     case 'l': play(lSound); break;
   }
});





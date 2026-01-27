const title = document.getElementById("title");
const cat = document.getElementById("cat");
const btn = document.getElementById("btn");

// Si alguno sale null, tu HTML no coincide o el script no está cargando bien
console.log("JS OK:", { title, cat, btn });

const messages = [
  { text: "Hola Mundo", flag: "🇪🇸" },
  { text: "Hello world", flag: "🇬🇧" },
  { text: "Bonjour le monde", flag: "🇫🇷" },
  { text: "Hallo Welt", flag: "🇩🇪" },
  { text: "Ciao mondo", flag: "🇮🇹" },
  { text: "Olá mundo", flag: "🇵🇹" },
  { text: "こんにちは世界", flag: "🇯🇵" },
  { text: "안녕하세요 세계", flag: "🇰🇷" },
  { text: "مرحبا بالعالم", flag: "🇸🇦" },
  { text: "Привет, мир", flag: "🇷🇺" },
];

const cats = [
` /\\_/\\  
( o.o ) 
 > ^ <`,
` /\\_/\\  
( -.- ) 
 > ^ <  zZz`,
` /\\_/\\      
( o.o )  meow!
 /   \\`,
` /\\_/\\   _
( o.o ) ( )
 > ^ <  /`,
` /\\_/\\  ___
( o.o )/   \\
 > ^ < \\___/`,
` /\\_/\\   __
( o.o ) (  )
 > ^ <  ||`,
` /\\_/\\  ~~
( o.o )  ))
 > ^ <`,
` /\\_/\\   /\\ 
( o.o ) //\\\\
 > ^ <  \\_/`,
` /\\_/\\   .-.
( o.o ) ( )
 > ^ <  '-'`,
` /\\_/\\   ____
( o.o ) / __ \\
 > ^ <  \\____/`,
];

let i = 0;

function render(idx) {
  const m = messages[idx];
  title.textContent = `${m.text} ${m.flag}`;
  cat.textContent = cats[idx];
}

btn.addEventListener("click", () => {
  i = (i + 1) % messages.length;
  render(i);
});

render(0);

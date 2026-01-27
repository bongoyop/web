const title = document.getElementById("title");
const cat = document.getElementById("cat");
const btn = document.getElementById("btn");

// 10 mensajes (el primero SIEMPRE español)
const messages = [
  { text: "Hola Mundo", flag: "🇪🇸" },              // Español
  { text: "Hello world", flag: "🇬🇧" },             // Inglés (UK)
  { text: "Bonjour le monde", flag: "🇫🇷" },        // Francés
  { text: "Hallo Welt", flag: "🇩🇪" },              // Alemán
  { text: "Ciao mondo", flag: "🇮🇹" },              // Italiano
  { text: "Olá mundo", flag: "🇵🇹" },               // Portugués (PT)
  { text: "こんにちは世界", flag: "🇯🇵" },            // Japonés
  { text: "안녕하세요 세계", flag: "🇰🇷" },            // Coreano
  { text: "مرحبا بالعالم", flag: "🇸🇦" },           // Árabe (Arabia Saudita)
  { text: "Привет, мир", flag: "🇷🇺" },             // Ruso
];

// 10 gatitos ASCII (uno por mensaje)
const cats = [
  String.raw` /\_/\  
( o.o ) 
 > ^ <`,
  String.raw` /\_/\  
( -.- ) 
 > ^ <  zZz`,
  String.raw` /\_/\      
( o.o )  meow!
 /   \`,
  String.raw` /\_/\   _
( o.o ) ( )
 > ^ <  /`,
  String.raw` /\_/\  ___
( o.o )/   \
 > ^ < \___/`,
  String.raw` /\_/\   __
( o.o ) (  )
 > ^ <  ||`,
  String.raw` /\_/\  ~~
( o.o )  ))
 > ^ <`,
  String.raw` /\_/\   /\ 
( o.o ) //\\
 > ^ <  \_/`,
  String.raw` /\_/\   .-.
( o.o ) ( )
 > ^ <  `-’`,
  String.raw` /\_/\   ____
( o.o ) / __ \
 > ^ <  \____/`,
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

// Estado inicial: Español
render(0);

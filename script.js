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
  { text: "你好，世界", flag: "🇨🇳" },        // Chino (China)
  { text: "नमस्ते दुनिया", flag: "🇮🇳" },    // Hindi (India)
  { text: "Merhaba Dünya", flag: "🇹🇷" },    // Turco (Turquía)
  { text: "Hej världen", flag: "🇸🇪" },      // Sueco (Suecia)
  { text: "Hei verden", flag: "🇳🇴" },       // Noruego (Noruega)
  { text: "Cześć, świecie", flag: "🇵🇱" },   // Polaco (Polonia)
  { text: "Γεια σου κόσμε", flag: "🇬🇷" },   // Griego (Grecia)
  { text: "שלום עולם", flag: "🇮🇱" },        // Hebreo (Israel)
  { text: "Salut lume", flag: "🇷🇴" },       // Rumano (Rumania)
  { text: "สวัสดีชาวโลก", flag: "🇹🇭" },     // Tailandés (Tailandia)
  { text: "سلام دنیا", flag: "🇮🇷" },          // Persa (Irán)
  { text: "Xin chào thế giới", flag: "🇻🇳" },  // Vietnamita (Vietnam)
  { text: "Halo dunia", flag: "🇮🇩" },         // Indonesio (Indonesia)
  { text: "Hej verden", flag: "🇩🇰" },         // Danés (Dinamarca)
  { text: "Hallo wereld", flag: "🇳🇱" },       // Neerlandés (Países Bajos)
  { text: "Hei maailma", flag: "🇫🇮" },        // Finés (Finlandia)
  { text: "Ahoj světe", flag: "🇨🇿" },         // Checo (Chequia)
  { text: "Helló világ", flag: "🇭🇺" },        // Húngaro (Hungría)
  { text: "Привіт, світе", flag: "🇺🇦" },      // Ucraniano (Ucrania)
  { text: "Sawubona mhlaba", flag: "🇿🇦" },    // Zulú (Sudáfrica)
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
` /\\_/\\  
( ^.^ ) 
 > ^ <`,
` /\\_/\\   ♡
( o.o )  )
 > ^ < (`,
` /\\_/\\  
( >.< ) 
 > ^ <`,
` /\\_/\\  
( o_O ) 
 > ^ <`,
` /\\_/\\  
( u.u ) 
 > ^ <  z`,
` /\\_/\\  
( ¡.¡ )  B)
 > ^ <`,
` /\\_/\\  
( o.- )  ~
 > ^ <`,
` /\\_/\\  
( =.= ) 
 > ^ <`,
` /\\_/\\  
( o.o )  ?
 > ^ <`,
` /\\_/\\  
( *.* )  !!
 > r <`,
` /\\_/\\  
( ~.~ )  ~~
 > o <`,

` /\\_/\\  
( o.o )  //
 > ^ <`,

` /\\_/\\  
( -.- )  <<
 > ^ <`,

` /\\_/\\  
( o.o )  >>
 > ^ <`,

` /\\_/\\  
( o.o )  !!
 > ^ <  ^^`,

` /\\_/\\  
( @.@ )  __
 > ^ < /_/`,

` /\\_/\\  
( o.o )  *
 > ^ < /|\\`,

` /\\_/\\  
( ¬.¬ )  =
 > ^ <  ≡`,

` /\\_/\\  
( o.o )  @
 > ^ <  #`,

` /\\_/\\  
( o.o )  ✓
 > ^ <`,
];

let lastIdx = 0; // parte en español (índice 0)

function render(idx) {
  const m = messages[idx];
  title.textContent = `${m.text} ${m.flag}`;
  cat.textContent = cats[idx];
}

function randomIdxExcluding(exclude, max) {
  if (max <= 1) return 0;
  let r = exclude;
  while (r === exclude) {
    r = Math.floor(Math.random() * max);
  }
  return r;
}

btn.addEventListener("click", () => {
  const next = randomIdxExcluding(lastIdx, messages.length);
  lastIdx = next;
  render(next);
});

// Estado inicial: Español
render(0);

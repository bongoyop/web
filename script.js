const title = document.getElementById("title");
const cat = document.getElementById("cat");
const btn = document.getElementById("btn");

// Si alguno sale null, tu HTML no coincide o el script no está cargando bien
console.log("JS OK:", { title, cat, btn });

const messages = [
  { text: "Hola Mundo", flag: "🇪🇸" },
  { text: "Hello world", flag: "🇬🇧" },
  { text: "Bonjour le monde", flag: "🇫🇷" },
  { text: "test", flag: "🇫🇷" },
];

const cats = [
` /\\_/\\  
( o.o ) 
 > ^ <`,
` /\\_/\\  
( -.- ) 
 > ^ <  zZz`,
` /\\_/\\        
 ( o.o )  grrre!
!
/   \\       `,
`=:--.                               =-=
-:..:=-                          .+::-=
-::...:*:                      :*=:---=
- ::::.:=+:                  :*=:::-:.- 
 .  :.  .-*+++--++***++---=+*#-:.:::.:
      ...:-=**=+*+*===-=+=+====--::
  -   .: -=:-=-+ *%*#+--:+=:-+:--:
       .-:.:. *+.=+*==+.%.=:.:-.:..
    =----: +: .:.:.-..=:- =@:.=:--+
    -:=++.%.==*=.+=---+.@:=@: .=+=-
    ---:=. :::.@.----=+##.-. -=++=*
    -=+.:====:.:==+--=+=+::+*+*=***
     =-::-==-:..=#+==##=-==++#=-+*:
     -::..=+-.--.-@==@-.-..=*+=*+#
      =::::. .:-   *@.  ...:++ *-
      =+.:... .:.:%@@%+:=:=:--:.+
       .-.:    =@@%+**@@=.:.:-+-
       :=.  .  .   .. ..:::-=-*#
       +=-=+-:-+#-:::-*%%%#%**=*
      -+-*+=*==-++*######%%#+##=+
      -+=+++**+=-+====*=*+#######
     :=+=***++=:=-==---=+=#*#%%##-
     --=+***+:+==:=+:++==+#+*##***
    --+=-+++++*-=--+-+=*=+*##*++=+:
    -====++==+++++**+=+++***==++**=
    :-+-+++*++=*++++++=+++==+=+**+*
    =.-=++*+**+=+++*==+=++-++**++=+
    ===::-:+++:++++=++=+++=+**+-:+%`,
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

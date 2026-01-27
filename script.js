const title = document.getElementById("title");
const btn = document.getElementById("btn");

let toggled = false;

btn.addEventListener("click", () => {
  toggled = !toggled;
  title.textContent = toggled ? "¡Funciona! 🚀" : "Hola mundo 👋";
});
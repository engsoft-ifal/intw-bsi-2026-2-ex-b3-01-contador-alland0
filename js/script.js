const total = document.querySelector("#total");
const somar = document.querySelector("#somar");
const zerar = document.querySelector("#zerar");

let contador = 0;

total.textContent = contador;

somar.addEventListener("click", () => {
  contador += 1;
  total.textContent = contador;
});

zerar.addEventListener("click", () => {
  contador = 0;
  total.textContent = contador;
});
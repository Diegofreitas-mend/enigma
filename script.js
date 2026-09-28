const input = document.getElementById("resposta");
const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const resposta = input.value.trim().replace(/\s+/g, " ").toLowerCase();

  if (!resposta) {
    mensagem.textContent = "Digite uma resposta antes de confirmar.";
    input.focus();
  } else if (resposta === "leopardus tilcayo") {
    mensagem.textContent = "Quase!";
  } else if (resposta === "oyaclit sudrapoel") {
    mensagem.textContent = "Resposta correta!";
  } else {
    mensagem.textContent = "Eduardo Eizirik";
  }
});

input.addEventListener("input", function () {
  mensagem.textContent = "";
});

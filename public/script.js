const botaoEnviar = document.getElementById("enviar");
const texto = document.getElementById("texto");
const chat = document.getElementById("mensagens");

const socket = io();

botaoEnviar.addEventListener("click", () => {
  if (texto.value !== "") {
    socket.emit("nova mensagem", texto.value);
    texto.value = "";
  }
});

socket.addEventListener("nova mensagem", (msg) => {
  const novaMensagem = document.createElement("li"); //<li></li>
  novaMensagem.classList.add("mensagem"); //<li class="mensagem"></li>
  novaMensagem.textContent = msg; //<li class="mensagem">msg</li>
  chat.appendChild(novaMensagem);
});

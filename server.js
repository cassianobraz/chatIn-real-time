const http = require("http");
const express = require("express");
const app = express();

const servidorHTTP = http.createServer(app);
const io = require("socket.io")(servidorHTTP);

app.use(express.static("public"));

io.addListener("connection", (socket) => {
  console.log("um usuário acabou de conectar");
  socket.addListener("nova mensagem", (msg) => {
    io.emit("nova mensagem", msg);
  });
});

servidorHTTP.listen(4040, /*"IPV4"*/);
// * para acessar é o ip:4040 que é a porta
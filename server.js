const http = require("http")
const host = "localhost";
const port = 3000;

const listaTareas = [
    { id: 1, description: "Hacer la tarea", estado: "completado"},
    { id: 2, description: "Hacer la comida", estado: "pendiente"}

];

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify(listaTareas));
});

server.listen(port, () => {
    console.log("Servidor listening on port" + port);
})
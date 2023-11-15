const http = require("http");
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `http://localhost:${port}`);
  
  if (url.pathname === "/user") {
    const name = url.searchParams.get("name") || null;
    const email = url.searchParams.get("email") || null;

    const jsonResponse = {
      "name": name,
      "email": email
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(jsonResponse));
  } else {
    res.writeHead(200);
    res.end();
  }
};

const server = http.createServer(requestListener);
module.exports = server;

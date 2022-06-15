const http = require("http");
const { runInNewContext } = require("vm");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome Valoria");
  } else if (req.url === "/about") {
    res.end("Here is our short histroy");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>Can't find page you are looking for</p>
    <a href="/">back to home</a>
  `);
  }
});

server.listen(3000);

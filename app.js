const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end(
    "Hello! My First DevOps Internship Task — Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)"
  );
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
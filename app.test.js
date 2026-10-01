const http = require("http");

test("server should return the correct message", (done) => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello! My First DevOps Internship Task — Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)");
  });

  server.listen(3001, () => {
    http.get("http://localhost:3001", (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe(
          "Hello! My First DevOps Internship Task — Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)"
        );

        server.close();
        done();
      });
    });
  });
});
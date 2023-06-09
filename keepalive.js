var http = require("http")

http.createServer(function (req, res) {
  res.write("Harmon.com.tr - Aktif Tutuluyor.");
  res.end();
}).listen(8080);

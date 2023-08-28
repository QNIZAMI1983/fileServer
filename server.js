const net = require("net");
const fs = require("fs");

const PORT = 8000;

const server = net.createServer(client => {
  console.log("Client connected!");

  client.on("data", data => {
    const filename = data.toString().trim();

    fs.readFile(filename, (err, fileData) => {
      if (err) {
        console.log(`Error reading file: ${err.message}`);
        client.write("Error: File not found or could not be read");
      } else {
        client.write(fileData);
      }

      client.end();
    });
  });

  client.on("end", () => {
    console.log("Client disconnected.");
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

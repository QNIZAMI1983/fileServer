const net = require("net");

const PORT = 8000;
const HOST = "127.0.0.1"; // Change to the server's IP address if needed

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log("Connected to server!");

  // Replace "filename.txt" with the desired filename
  client.write("filename.txt");
});

client.on("data", data => {
  console.log(`Received data: ${data}`);
});

client.on("close", () => {
  console.log("Connection closed.");
});

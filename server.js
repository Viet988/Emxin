const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;  // Bắt buộc dùng PORT của Render

// Serve file HTML + JS
app.use(express.static(path.join(__dirname, "public")));

// API key check (ví dụ)
let validKeys = ["thuy2008"];
app.get("/api/checkkey/:key", (req, res) => {
  const key = req.params.key;
  if(validKeys.includes(key)) res.json({ok:true, mode: key==="thuy2008"?"admin":"user"});
  else res.json({ok:false});
});

// Ping test
app.get("/", (req, res) => res.sendFile(path.join(__dirname,"public/index.html")));

app.listen(PORT, () => console.log(`Server chạy trên port ${PORT}`));

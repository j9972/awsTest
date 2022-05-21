const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ text: "HELLO" });
});

app.listen(8800, () => {
  console.log(`Server on port 8800`);
});

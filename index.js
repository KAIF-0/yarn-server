const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







// STEPS:
// 1. yarn init
// 2. yarn install / yarn
// 3. yarn start {after writing start script}
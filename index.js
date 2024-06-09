import express from "express";

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Code Column Server!");
});

const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "auth-service" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});

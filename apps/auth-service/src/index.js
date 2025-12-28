const express = require("express");
const { logger, response } = require("@devflow/common");

const app = express();
app.use(express.json());

const users = [];

app.get("/health", (req, res) => {
  logger.info("Health check called on auth service");

  response.sendSuccess(res, {
    service: "auth-service",
    status: "ok"
  });
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  logger.info("Register request received");

  if (!email || !password) {
    return response.sendError(res, "Email and password are required", 400);
  }

  users.push({ email, password });

  response.sendSuccess(res, {
    message: "User registered successfully"
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  logger.info("Login request received");

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return response.sendError(res, "Invalid credentials", 401);
  }

  response.sendSuccess(res, {
    message: "Login successful"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Auth service running on port ${PORT}`);
});

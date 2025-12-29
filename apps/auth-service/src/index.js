const express = require("express");
const { logger, response } = require("@devflow/common");
const authRoutes = require("./routes/auth.routes");
const authenticate = require("./middlewares/auth.middleware");
const userRoutes = require("./routes/user.routes.js"); 

require("dotenv").config();
const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  logger.info("Health check called on auth service");

  response.sendSuccess(res, {
    service: "auth-service",
    status: "ok"
  });
});

app.get("/me", authenticate, (req, res) => {
  res.json({
    message: "Protected route",
    user: req.user
  });
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Auth service running on port ${PORT}`);
});

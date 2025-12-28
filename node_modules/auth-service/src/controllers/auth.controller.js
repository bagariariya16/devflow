const users = require("../data/users");
const { logger, response } = require("@devflow/common");

function register(req, res) {
  const { email, password } = req.body;

  logger.info("Register request received");

  if (!email || !password) {
    return response.sendError(res, "Email and password are required", 400);
  }

  users.push({ email, password });

  response.sendSuccess(res, {
    message: "User registered successfully"
  });
}

function login(req, res) {
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
}

module.exports = {
  register,
  login
};

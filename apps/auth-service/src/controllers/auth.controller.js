const prisma = require("../db/prisma");
const { logger, response } = require("@devflow/common");

async function register(req, res) {
  const { email, password } = req.body;

  //logger.info("Register request received");

  if (!email || !password) {
    return response.sendError(res, "Email and password are required", 400);
  }
  try{
    const user = await prisma.user.create({
      data: {
        email,
        password
      }
    });
    return response.sendSuccess(res, {
      message: "User registered successfully",
      userId: user.id
    });
}catch (error){
    if (error.code === 'P2002') {
      return response.sendError(res, "Email already registered", 400);
    }
  }
  return response.sendError(res, "Registration failed", 500);
}

async function login(req, res) {
  const { email, password } = req.body;

  //logger.info("Login request received");

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user || user.password !== password) {
    return response.sendError(res, "Invalid credentials", 401);
  }

  return response.sendSuccess(res, {
    message: "Login successful",
    userId: user.id
  });
}

module.exports = {
  register,
  login
};

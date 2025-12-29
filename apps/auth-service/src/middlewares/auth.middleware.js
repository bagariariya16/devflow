const jwt = require("jsonwebtoken");
const {response} = require("@devflow/common");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return response.sendError(res, "Missing token", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return response.sendError(res, "Invalid or expired token", 401);
  }
}

module.exports = authenticate;

const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const { response } = require("@devflow/common");

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  return response.sendSuccess(res,
    { message: "Profile fetched", user: req.user });
});

module.exports = router;

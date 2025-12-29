const prisma = require("../db/prisma");
const { logger, response } = require("@devflow/common");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res) {
    const { email, password } = req.body;

    logger.info("Register request received");

    if (!email || !password) {
        return response.sendError(res, "Email and password are required", 400);
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });
        return response.sendSuccess(res, {
            message: "User registered successfully",
            userId: user.id
        });
    } catch (error) {
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
        where: { email }
    });

    if (!user) {
        return response.sendError(res, "User not found", 404);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!user || !isValidPassword) {
        return response.sendError(res, "Invalid credentials", 401);
    }

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return response.sendSuccess(res, {
        message: "Login successful",
        userId: user.id,
        token
    });
}

module.exports = {
    register,
    login
};

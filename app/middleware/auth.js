require("dotenv").config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token não enviado" });
  }

  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "chave-secreta");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}

module.exports = { authMiddleware, secret };
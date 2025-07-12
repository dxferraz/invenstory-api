const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const secret = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, 8);

  try {
    const user = await User.create({ email, passwordHash });
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (err) {
    res.status(400).json({
      message: "E-mail já cadastrado ou erro ao salvar",
      error: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ message: "E-mail ou senha inválidos" });
  }

  const token = jwt.sign({ email: user.email }, secret, { expiresIn: "1h" });

  res.json({ token });
};

module.exports = {
  registerUser,
  loginUser,
};

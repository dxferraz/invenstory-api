require("dotenv").config();

const secretApiKeys = process.env.API_KEYS.split(",");

const authenticateToken = (req, res, next) => {
  const reqToken = req.headers["authorization"];

  if (secretApiKeys.includes(reqToken)) {
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = { authenticateToken };

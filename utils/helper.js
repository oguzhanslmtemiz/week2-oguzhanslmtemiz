const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const getUserAgentFromHeader = (req) => {
  return {
    agent: req.headers["user-agent"],
  };
};

const generateToken = ({ _id, username }, agent) => {
  const payload = {
    _id,
    username,
    agent,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const getTokenFromHeader = (req) => {
  return (token = req.headers.authorization?.split(" ")[1] || null);
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    return { err, decoded };
  });
};

module.exports = {
  hashPassword,
  comparePassword,
  getUserAgentFromHeader,
  generateToken,
  getTokenFromHeader,
  verifyToken,
};

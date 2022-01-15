const httpStatus = require("http-status");
const { read } = require("../services/users");
const {
  comparePassword,
  getUserAgentFromHeader,
  generateToken,
} = require("../utils/helper");

module.exports.getUser = async (req, res) => {
  try {
    const user = await read(req.body.username);
    !user && res.status(httpStatus.NOT_FOUND).send({ error: "User Not Found" });
    if (user) {
      const match = await comparePassword(req.body.password, user.password);
      if (match) {
        req.session.user = getUserAgentFromHeader(req);

        const response = {
          ...user.toObject(),
          token: generateToken(user, req.session.user?.agent),
        };
        delete response.password;

        res.status(httpStatus.FOUND).send(response);
      } else {
        res
          .status(httpStatus.NOT_FOUND)
          .send({ error: "Your password is not correct!" });
      }
    }
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

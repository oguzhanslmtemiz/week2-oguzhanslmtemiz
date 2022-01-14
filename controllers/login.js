const httpStatus = require("http-status");
const { read } = require("../services/users");

module.exports.getUser = async (req, res) => {
  try {
    const user = await read(req.body.username);
    !user && res.status(httpStatus.NOT_FOUND).send("USER NOT FOUND");
    user && res.status(httpStatus.FOUND).send(user);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

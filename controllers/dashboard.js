const httpStatus = require("http-status");
const { list } = require("../services/users");

module.exports.listUsers = async (req, res) => {
  try {
    const users = await list();
    res.status(httpStatus.OK).send(users);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

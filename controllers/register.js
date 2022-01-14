const httpStatus = require("http-status");
const { create } = require("../services/users");

module.exports.index = (req, res) => {
  res.status(httpStatus.OK).send("Register Page");
};

module.exports.createUser = async (req, res) => {
  try {
    const user = await create(req.body);
    res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

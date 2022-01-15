const httpStatus = require("http-status");
const { create } = require("../services/users");

module.exports.createUser = async (req, res) => {
  try {
    const user = await create(req.body);
    res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(httpStatus.NOT_ACCEPTABLE)
        .send({ error: "Username already in use" });
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};

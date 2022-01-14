const User = require("../models/User");

const create = async (data) => {
  return await User.create(data);
};

const read = async (username) => {
  return await User.findOne(username);
};

const list = async () => {
  return await User.find({});
};

module.exports = {
  create,
  read,
  list,
};

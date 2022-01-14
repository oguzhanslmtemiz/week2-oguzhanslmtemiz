const express = require("./express");
const connectDB = require("./mongoose");

module.exports = async ({ app }) => {
  express({ app });
  await connectDB();
};

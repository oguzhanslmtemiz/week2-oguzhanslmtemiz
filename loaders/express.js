const helmet = require("helmet");
const cors = require("cors");
const { registerRoute, dashboardRoute } = require("../routes");

module.exports = ({ app }) => {
  app.use(helmet());
  app.use(cors());

  app.use("/register", registerRoute);
  app.use("/dashboard", dashboardRoute);
};

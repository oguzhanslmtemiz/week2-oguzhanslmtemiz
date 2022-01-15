const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const { loginRoute, registerRoute, dashboardRoute } = require("../routes");

module.exports = ({ app }) => {
  app.use(helmet());
  app.use(cors());
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 1 }, // 1 hour
    })
  );

  app.use("/login", loginRoute);
  app.use("/register", registerRoute);
  app.use("/dashboard", dashboardRoute);
};

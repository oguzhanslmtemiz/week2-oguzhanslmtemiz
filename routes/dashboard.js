const { listUsers } = require("../controllers/dashboard");
const { userAuth } = require("../middlewares/authentication");

const router = require("express").Router();

router.get("/", userAuth, listUsers);

module.exports = router;
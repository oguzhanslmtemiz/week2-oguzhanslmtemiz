const { getUser } = require("../controllers/login");
const { validate } = require("../middlewares/validation");

const router = require("express").Router();

router.post("/", validate("login"), getUser);

module.exports = router;
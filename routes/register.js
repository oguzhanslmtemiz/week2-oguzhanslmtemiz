const { index, createUser } = require("../controllers/register");
const { validate } = require("../middlewares/validation");

const router = require("express").Router();

router.post("/", validate("register"), createUser);

module.exports = router;
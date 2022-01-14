const { index, createUser } = require("../controllers/register");

const router = require("express").Router();

router.get("/", index);
router.post("/", createUser);

module.exports = router;

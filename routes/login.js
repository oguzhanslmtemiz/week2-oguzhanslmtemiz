const { getUser } = require("../controllers/login");

const router = require("express").Router();

router.post("/", getUser);

module.exports = router;
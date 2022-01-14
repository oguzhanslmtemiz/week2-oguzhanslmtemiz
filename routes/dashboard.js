const { listUsers } = require("../controllers/dashboard");

const router = require("express").Router();

router.get("/", listUsers);

module.exports = router;
const express = require("express");
const router = express.Router();
const CreateUserData = require("../Controller/UserController");

router.post("/post", CreateUserData);

module.exports = router;

const express = require("express");
const { route } = require("express/lib/application");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);


module.exports = router;

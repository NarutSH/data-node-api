const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", userController.index);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;

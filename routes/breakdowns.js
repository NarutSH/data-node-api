const express = require("express");
const router = express.Router();
const breakdownController = require("../controllers/breakdownController");

/* GET users listing. */
router.get("/", breakdownController.index);
router.post("/", breakdownController.insert);

module.exports = router;

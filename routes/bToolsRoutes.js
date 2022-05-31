const express = require("express");
const toolControllers = require("../controllers/toolsController");
const router = express.Router();

router.get("/tools", toolControllers.getAllTools);
router.get("/tools/:cat", toolControllers.getToolsbyCat);
router.get("/tools/id/:tid", toolControllers.getToolById);

module.exports = router;

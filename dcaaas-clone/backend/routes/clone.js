const express = require("express");
const { createCloneResponse } = require("../controllers/cloneController");

const router = express.Router();

// POST /api/clone/message
router.post("/message", createCloneResponse);

module.exports = router;

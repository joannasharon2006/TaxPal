const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { addExpense } = require("../controllers/expenseController");

router.post("/", protect, addExpense);

module.exports = router;
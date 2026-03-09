const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  source: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Income", incomeSchema);
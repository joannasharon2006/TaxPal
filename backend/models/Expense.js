const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  category: {
  type: String,
  enum: [
    "Software",
    "Office Rent",
    "Internet",
    "Travel",
    "Marketing",
    "Equipment",
    "Food"
  ]
},
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expense", expenseSchema);
const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  try {
    const { amount, category } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    const expense = await Expense.create({
      user: req.user,
      amount,
      category
    });

    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
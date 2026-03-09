const Income = require("../models/Income");

exports.addIncome = async (req, res) => {
  try {
    const { amount, source } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    const income = await Income.create({
      user: req.user,
      amount,
      source
    });

    res.status(201).json(income);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
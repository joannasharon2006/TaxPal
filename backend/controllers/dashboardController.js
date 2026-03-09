const Income = require("../models/Income");
const Expense = require("../models/Expense");

exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user;

    const incomes = await Income.find({ user: userId });
    const expenses = await Expense.find({ user: userId });

   const totalIncome = incomes.reduce((a, b) => a + b.amount, 0);

// categories that reduce tax
const deductibleCategories = [
  "Software",
  "Office Rent",
  "Internet",
  "Travel",
  "Marketing",
  "Equipment"
];

// calculate deductible expenses only
const deductibleExpenses = expenses
  .filter((e) => deductibleCategories.includes(e.category))
  .reduce((sum, e) => sum + e.amount, 0);

const taxableIncome = totalIncome - deductibleExpenses;
const estimatedTax = taxableIncome * 0.15;

const totalExpense = expenses.reduce((a, b) => a + b.amount, 0);

    // Expense category aggregation
    const expenseByCategory = {};
    expenses.forEach((e) => {
      expenseByCategory[e.category] =
        (expenseByCategory[e.category] || 0) + e.amount;
    });

    res.json({
      totalIncome,
      totalExpense,
      estimatedTax,
      netSavings: taxableIncome - estimatedTax,
      recentIncomes: incomes.slice(-5).reverse(),
      recentExpenses: expenses.slice(-5).reverse(),
      chartData: {
        incomeVsExpense: {
          income: totalIncome,
          expense: totalExpense
        },
        expenseCategories: expenseByCategory
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
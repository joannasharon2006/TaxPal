import { useEffect, useState } from "react";
import { fetchDashboard } from "../api/dashboardApi";
import { addIncome, addExpense } from "../api/financeApi";
import "../styles/dashboard.css";
import DashboardNavbar from "../components/DashboardNavbar";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    estimatedTax: 0,
    netSavings: 0,
    chartData: {
      incomeVsExpense: { income: 0, expense: 0 },
      expenseCategories: {},
    },
  });

  const [income, setIncome] = useState({ amount: "", source: "" });
  const [expense, setExpense] = useState({ amount: "", category: "" });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const res = await fetchDashboard();
    setData(res);
  };

  const submitIncome = async (e) => {
    e.preventDefault();
    await addIncome(income);
    setIncome({ amount: "", source: "" });
    loadDashboard();
  };

  const submitExpense = async (e) => {
    e.preventDefault();
    await addExpense(expense);
    setExpense({ amount: "", category: "" });
    loadDashboard();
  };

  /* ================= CHART OPTIONS ================= */

  const barOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255,255,255,0.15)",
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255,255,255,0.15)",
        },
      },
    },
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        bodyColor: "#ffffff",
        titleColor: "#ffffff",
      },
    },
  };

 if (
  !data ||
  data.totalIncome === undefined ||
  data.totalExpense === undefined ||
  data.estimatedTax === undefined ||
  data.netSavings === undefined
) {
  return <p className="loading">Loading dashboard...</p>;
}

  return (
    <>
      <DashboardNavbar />

      <div className="dashboard-container">

        {/* ================= SUMMARY ================= */}
        <div className="summary-grid">
          <div className="summary-card">💰 Income<br />₹{data.totalIncome}</div>
          <div className="summary-card">🧾 Expenses<br />₹{data.totalExpense}</div>
          <div className="summary-card">📊 Tax<br />₹{data.estimatedTax}</div>
          <div className="summary-card">💡 Savings<br />₹{data.netSavings}</div>
        </div>

        {/* ================= ADD FORMS ================= */}
        <div className="form-grid">

          <form className="form-card" onSubmit={submitIncome}>
            <h3>Add Income</h3>
            <input
              placeholder="Amount"
              value={income.amount}
              onChange={(e) =>
                setIncome({ ...income, amount: e.target.value })
              }
              required
            />
            <input
              placeholder="Source"
              value={income.source}
              onChange={(e) =>
                setIncome({ ...income, source: e.target.value })
              }
            />
            <button type="submit">Add Income</button>
          </form>

          <form className="form-card" onSubmit={submitExpense}>
            <h3>Add Expense</h3>
            <input
              placeholder="Amount"
              value={expense.amount}
              onChange={(e) =>
                setExpense({ ...expense, amount: e.target.value })
              }
              required
            />
            <select
  value={expense.category}
  onChange={(e) =>
    setExpense({ ...expense, category: e.target.value })
  }
>
  <option value="">Select Category</option>
  <option value="Software">Software</option>
  <option value="Office Rent">Office Rent</option>
  <option value="Internet">Internet</option>
  <option value="Travel">Travel</option>
  <option value="Marketing">Marketing</option>
  <option value="Equipment">Equipment</option>
  <option value="Food">Food</option>
</select>
            <button type="submit">Add Expense</button>
          </form>

        </div>

        {/* ================= CHARTS ================= */}
        <div className="chart-grid">

          <div className="chart-card">
            <h3>Income vs Expense</h3>
            <Bar
              data={{
                labels: ["Income", "Expense"],
                datasets: [
                  {
                    label: "Amount",
                    data: [
                      data.chartData?.incomeVsExpense?.income || 0,
                      data.chartData?.incomeVsExpense?.expense || 0,
                    ],
                    backgroundColor: ["#4ade80", "#f87171"],
                  },
                ],
              }}
              options={barOptions}
            />
          </div>

          <div className="chart-card">
            <h3>Expense Breakdown</h3>
            <Pie
              data={{
                labels: Object.keys(
                  data.chartData?.expenseCategories || {}
                ),
                datasets: [
                  {
                    data: Object.values(
                      data.chartData?.expenseCategories || {}
                    ),
                    backgroundColor: [
                      "#60a5fa",
                      "#fbbf24",
                      "#f87171",
                      "#34d399",
                      "#a78bfa",
                    ],
                  },
                ],
              }}
              options={pieOptions}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
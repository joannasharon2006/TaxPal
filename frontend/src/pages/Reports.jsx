import { useState } from "react";
import "../styles/report.css";
import { downloadReport } from "../api/reportApi";
import DashboardNavbar from "../components/DashboardNavbar";

const Reports = () => {
  const [type, setType] = useState("monthly");
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <>
    <DashboardNavbar/>
    <div className="report-container">
      <h1>Reports</h1>

      <div className="rform-card" style={{ maxWidth: "400px" }}>
        <h3>Generate Report</h3>

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>

        {type === "monthly" && (
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Month {i + 1}
              </option>
            ))}
          </select>
        )}

        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
        />

        <button
          className="rreport-btn"
          onClick={() => downloadReport({ type, month, year })}
        >
          Download PDF
        </button>
      </div>
    </div>
    </>
  );
};

export default Reports;
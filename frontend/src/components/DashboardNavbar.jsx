import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import logo from "../assets/logo.png";
import "../styles/dashboardNavbar.css";

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // clear token
    navigate("/");     // redirect to landing page
  };

  return (
    <nav className="dashboard-nav">
      <div className="dashboard-nav-inner">

        <div className="dashboard-logo">
          <img src={logo} alt="TaxPal Logo" />
        </div>

        <div className="dashboard-actions">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/reports" className="nav-link">Reports</Link>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default DashboardNavbar;
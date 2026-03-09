import { Link } from "react-router-dom";
import "../styles/landing.css";
import Lottie from "lottie-react";
import heroAnimation from "../assets/revenuee.json";
import logo from "../assets/logo.png";
import incomeImg from "../assets/features/incomee.png";
import expenseImg from "../assets/features/expense.png";
import taxImg from "../assets/features/tax.png";
import savingsImg from "../assets/features/savings.png";
import alertsImg from "../assets/features/alerts.png";
import reportsImg from "../assets/features/reports.png";
const Landing = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="landing-nav-inner">
        <div className="logo-container">
            <img src={logo} alt="TaxPal Logo" className="logo-img" />
        </div>

        <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/signup" className="nav-btn primary">Get Started</Link>
        </div>
        </div>
    </nav>

      {/* Hero Section */}
    <section className="hero">
        <div className="hero-lottie-bg">
        <Lottie
            animationData={heroAnimation}
            loop
            autoplay
        />
    </div>

    {/* Hero Content */}
    <div className="hero-text">
        <h1>Smart Finance & Tax Planning for Freelancers</h1>
    <p>
      Track income, manage expenses, and estimate taxes in real-time —
      without spreadsheets or stress.
    </p>

    <div className="hero-actions">
      <Link to="/signup" className="primary-btn">Create Free Account</Link>
      <Link to="/login" className="secondary-btn">Login</Link>
    </div>
    </div>

    </section>

      {/* Features */}
    <section className="features" id="features">
    <h2>Everything You Need in One Place</h2>

    <div className="features-grid">

    <div className="feature-box">
      <img src={incomeImg} alt="Income Tracking" />
      <h3>Income Tracking</h3>
      <p>Log and categorize freelance income for clear cashflow visibility.</p>
    </div>

    <div className="feature-box">
      <img src={expenseImg} alt="Expense Management" />
      <h3>Expense Management</h3>
      <p>Track and categorize expenses to understand where your money goes.</p>
    </div>

    <div className="feature-box">
      <img src={taxImg} alt="Tax Estimation" />
      <h3>Real-Time Tax Estimation</h3>
      <p>See your tax liability calculated instantly as data is added.</p>
    </div>

    <div className="feature-box">
      <img src={savingsImg} alt="Savings Planner" />
      <h3>Smart Savings Planner</h3>
      <p>Plan tax-saving investments with personalized suggestions.</p>
    </div>

    <div className="feature-box">
      <img src={alertsImg} alt="Alerts" />
      <h3>Alerts & Reminders</h3>
      <p>Never miss tax deadlines with timely alerts and notifications.</p>
    </div>

    <div className="feature-box">
      <img src={reportsImg} alt="Reports" />
      <h3>Downloadable Reports</h3>
      <p>Generate monthly or yearly reports to analyze financial health.</p>
    </div>

    </div>
    </section>

      {/* How it Works */}
      {/* How it Works */}
<section className="how-it-works" id="how">
  <h2>How TaxPal Works</h2>

  <div className="how-steps">

    <div className="how-step">
      <div className="step-icon">📝</div>
      <div className="step-number">01</div>
      <h3>Sign Up</h3>
      <p>Create your free TaxPal account in minutes.</p>
    </div>

    <div className="step-connector"></div>

    <div className="how-step">
      <div className="step-icon">💼</div>
      <div className="step-number">02</div>
      <h3>Track Finances</h3>
      <p>Log income and expenses effortlessly.</p>
    </div>

    <div className="step-connector"></div>

    <div className="how-step">
      <div className="step-icon">📊</div>
      <div className="step-number">03</div>
      <h3>Get Insights</h3>
      <p>View tax estimates and savings recommendations.</p>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 TaxPal. Built for freelancers.</p>
      </footer>
    </div>
  );
};

export default Landing;
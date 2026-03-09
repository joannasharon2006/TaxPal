import { useState } from "react";
import { loginUser } from "../api/authApi";
import { setToken } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css"
import Lottie from "lottie-react";
import animationData from "../assets/bg.json";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData);
      setToken(data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
        <div className="bg-animation">
        <Lottie animationData={animationData} loop />
        </div>

      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome back 👋</h2>
        <p className="auth-subtitle">Sign in to continue</p>

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Log in</button>

        <p className="auth-footer">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>

        <p className="login-trust">🔒 Secure login · Your data is safe</p>
      </form>
    </div>
  );
};

export default Login;
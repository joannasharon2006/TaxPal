import { useState } from "react";
import { signupUser } from "../api/authApi";
import { setToken } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/auth-animation.json";
import "../styles/signup.css"
import animationData1 from "../assets/bg.json";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
    country: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signupUser(formData);
      setToken(data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
        <div className="bg-animation">
        <Lottie animationData={animationData1} loop />
        </div>
      <div className="auth-wrapper">
        
        {/* LEFT: FORM */}
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input name="profession" placeholder="Profession (optional)" onChange={handleChange} />
          <input name="country" placeholder="Country" onChange={handleChange} required />

          <button type="submit">Sign Up</button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>

        {/* RIGHT: LOTTIE */}
        <div className="auth-animation">
          <Lottie animationData={animationData} loop={true} />
        </div>

      </div>
    </div>
  );
};

export default Signup;
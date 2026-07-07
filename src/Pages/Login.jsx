import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import "../styles/Auth.css";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      await login(email, password);

      toast.success("Welcome Back 🎉");

      navigate("/dashboard");

    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="logo-circle">💰</div>

        <h1>Expense Tracker</h1>

        <h2>with Budget Insights</h2>

        <p className="subtitle">
          Track • Analyze • Save Smart
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="📧 Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="🔒 Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>

          </div>

          <button
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Please Wait..." : "Login"}
          </button>

        </form>

        <p>
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </p>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
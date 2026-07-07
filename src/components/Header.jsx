import {
  FaMoon,
  FaSun,
  FaWallet,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

function Header({ darkMode, setDarkMode }) {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const today = new Date();

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  async function handleLogout() {
    try {
      await logout();
      toast.success("Logged Out Successfully");
      navigate("/");
    } catch {
      toast.error("Logout Failed");
    }
  }

  return (
    <header className="header">

      <div className="header-left">

        <div className="logo">
          <FaWallet />
        </div>

        <div>

          <h1>
            Expense Tracker
            <br />
            <span className="heading-highlight">
              with Budget Insights
            </span>
          </h1>

          <p>
            Track • Analyze • Save Smart 💰
          </p>

          <span className="date">
            📅 {date}
          </span>

        </div>

      </div>

      <div className="header-right">

        <div className="user-box">

          <FaUserCircle />

          <span>
            {currentUser?.email || "Guest"}
          </span>

        </div>

        <button
          className="theme-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}

          {darkMode ? " Light" : " Dark"}

        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />

          Logout
        </button>

      </div>

    </header>
  );
}

export default Header;
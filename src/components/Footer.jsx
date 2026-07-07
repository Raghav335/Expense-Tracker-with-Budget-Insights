import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h3>Expense Tracker with Budget Insights</h3>

      <p>
        Made with <FaHeart style={{ color: "red" }} /> by
        <strong> Raghav Gupta</strong>
      </p>

      <p>Frontend Developer</p>

      <div className="footer-icons">
        <a
          href="https://github.com/Raghav335"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/raghav-gupta-8a9152328?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="copyright">
        © 2026 All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;
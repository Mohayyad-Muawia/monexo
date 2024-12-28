import { Link } from "react-router-dom";
import "./consts.css";
import { useEffect } from "react";
const Sidebar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".sidebar a");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector("a.active").classList.remove("active");
        link.classList.add("active");
      });
    });
  });
  return (
    <div className="sidebar">
      <Link to="/" className="home active">
        <i className="bi bi-house-fill"></i> <span>home</span>
      </Link>
      <Link to="/profile">
        <i className="bi bi-person-fill"></i> <span>profile</span>
      </Link>

      <Link to="/calender">
        <i className="bi bi-calendar-date-fill"></i> <span>calender</span>
      </Link>

      <Link to="/sittings">
        <i className="bi bi-gear-fill"></i> <span>sittings</span>
      </Link>

      <Link to="/trans">
        <i className="bi bi-arrow-down-up"></i>
        <span>transactions</span>
      </Link>

      <Link to="/sources">
        <i class="bi bi-collection-play-fill"></i>
        <span>sources</span>
      </Link>

      <a>
        <i class="bi bi-bell-fill"></i>
        <span>notifications</span>
      </a>

      <Link to="/login" style={{ marginTop: "auto" }}>
        <i className="bi bi-box-arrow-left"></i> <span>log out</span>
      </Link>
    </div>
  );
};

export default Sidebar;

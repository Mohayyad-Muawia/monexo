import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./consts.css";

const Sidebar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".sidebar a");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        const activeLink = document.querySelector(".sidebar a.active");

        if (activeLink) {
          activeLink.classList.remove("active");
        }

        link.classList.add("active");
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="sidebar">
      <Link to="/" className="home">
        <i className="bi bi-house-fill"></i> <span>home</span>
      </Link>
      <Link to="/profile">
        <i className="bi bi-person-fill"></i> <span>profile</span>
      </Link>

      <Link to="/settings">
        <i className="bi bi-gear-fill"></i> <span>settings</span>
      </Link>

      <Link to="/trans">
        <i className="bi bi-arrow-down-up"></i>
        <span>transactions</span>
      </Link>

      <Link to="/sources">
        <i className="bi bi-collection-play-fill"></i>
        <span>sources</span>
      </Link>

      <Link to="/notifications">
        <i className="bi bi-bell-fill"></i> <span>notifications</span>
      </Link>

      <Link to="/login" style={{ marginTop: "auto" }}>
        <i className="bi bi-box-arrow-left"></i> <span>log out</span>
      </Link>
    </div>
  );
};

export default Sidebar;

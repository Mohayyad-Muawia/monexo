import { Link } from "react-router-dom";
import "./pages.css";
import { useState } from "react";
import EditProfile from "./settings components/EditProfile";
import ChangePass from "./settings components/ChangePass";
import Goals from "./settings components/Goals";

const Settings = () => {
  const [content, setContent] = useState("profile");
  const [activeLink, setActiveLink] = useState("profile");

  // Click handler for menu items
  const handleLinkClick = (option) => {
    setContent(option);
    setActiveLink(option);
  };

  return (
    <div className="container">
      <div className="settings">
        <div className="menu">
          <h1>Account settings</h1>

          <div className="options">
            <a
              className={activeLink === "profile" ? "active" : ""}
              data-opt="profile"
              onClick={() => handleLinkClick("profile")}
            >
              <i className="bi bi-person-fill"></i> <span>Edit Profile</span>{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6L15 12L9 18" stroke="#33363F" strokeWidth="2" />
              </svg>
            </a>
            <a
              className={activeLink === "password" ? "active" : ""}
              data-opt="password"
              onClick={() => handleLinkClick("password")}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 30 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 14.6951V11.7561C7.5 6.89198 8.75 2.93896 15 2.93896C21.25 2.93896 22.5 6.89198 22.5 11.7561V14.6951"
                  stroke="#032A61"
                  strokeWidth="2.44889"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 27.186C16.7259 27.186 18.125 25.5412 18.125 23.5122C18.125 21.4832 16.7259 19.8384 15 19.8384C13.2741 19.8384 11.875 21.4832 11.875 23.5122C11.875 25.5412 13.2741 27.186 15 27.186Z"
                  stroke="#032A61"
                  strokeWidth="2.44889"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.25 32.3296H8.75C3.75 32.3296 2.5 30.8601 2.5 24.982V22.0429C2.5 16.1648 3.75 14.6953 8.75 14.6953H21.25C26.25 14.6953 27.5 16.1648 27.5 22.0429V24.982C27.5 30.8601 26.25 32.3296 21.25 32.3296Z"
                  stroke="#032A61"
                  strokeWidth="2.44889"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Password</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6L15 12L9 18" stroke="#33363F" strokeWidth="2" />
              </svg>
            </a>
            <a
              className={activeLink === "goals" ? "active" : ""}
              data-opt="goals"
              onClick={() => handleLinkClick("goals")}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 22.5L8.75 5"
                  stroke="#032A61"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M25 22.5L21.25 5"
                  stroke="#032A61"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 13.75L15 11.25"
                  stroke="#032A61"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 7.5L15 5"
                  stroke="#032A61"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11.1576 25.04L14.2761 18.4132C14.5072 17.9222 14.6227 17.6767 14.7814 17.5996C14.9194 17.5325 15.0806 17.5325 15.2186 17.5996C15.3773 17.6767 15.4928 17.9222 15.7239 18.4132L18.8424 25.04L18.8424 25.04C19.1894 25.7774 19.3628 26.1461 19.2969 26.3379C19.24 26.5035 19.1006 26.6273 18.9294 26.6642C18.7311 26.7069 18.3856 26.491 17.6945 26.0591L15.424 24.64L15.424 24.64C15.2702 24.5439 15.1933 24.4958 15.1108 24.4771C15.0379 24.4605 14.9621 24.4605 14.8892 24.4771C14.8067 24.4958 14.7298 24.5439 14.576 24.64L14.576 24.64L12.3055 26.0591C11.6144 26.491 11.2689 26.7069 11.0706 26.6642C10.8994 26.6273 10.76 26.5035 10.7031 26.3379C10.6372 26.1461 10.8106 25.7774 11.1576 25.04Z"
                  fill="#032A61"
                />
              </svg>
              <span>Goals</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6L15 12L9 18" stroke="#33363F" strokeWidth="2" />
              </svg>
            </a>
            <Link to="/login" className="logout">
              <i style={{ fontSize: 20 }} className="bi bi-box-arrow-left"></i>{" "}
              Log out
            </Link>
          </div>
        </div>

        <div className="content">
          {content === "goals" ? (
            <Goals />
          ) : content === "password" ? (
            <ChangePass />
          ) : (
            <EditProfile />
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;

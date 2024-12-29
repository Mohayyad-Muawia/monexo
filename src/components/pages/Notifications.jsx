import { useState } from "react";
import "./pages.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      type: "Payment",
      message:
        "Your account balance has dropped below the set limit of $50. Please deposit funds to avoid overdraft fees.",
      time: "9:00 PM",
      date: "24-12-2024",
    },
    {
      type: "Save",
      message:
        "A purchase of $120.00 has been made using your debit card ending in 1234 at Amazon on December 26, 2024.",
      time: "9:00 PM",
      date: "24-12-2024",
    },
    {
      type: "Payment",
      message:
        "Your account balance has dropped below the set limit of $50. Please deposit funds to avoid overdraft fees.",
      time: "9:00 PM",
      date: "24-12-2024",
    },
    {
      type: "Security",
      message:
        "Suspicious login attempt detected on your account. If this wasn't you, please change your password immediately.",
      time: "9:00 PM",
      date: "24-12-2024",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  const handleDelete = (indexToDelete) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="container">
      <div className="notifications">
        <div className="header">
          <h1>Notification</h1>
          <div className="filter">
            <a
              className={filter === "All" ? "active" : ""}
              onClick={() => setFilter("All")}
            >
              All <span>{notifications.length}</span>
            </a>
            <a
              className={filter === "Payment" ? "active" : ""}
              onClick={() => setFilter("Payment")}
            >
              Payment{" "}
              <span>
                {notifications.filter((n) => n.type === "Payment").length}
              </span>
            </a>
            <a
              className={filter === "Save" ? "active" : ""}
              onClick={() => setFilter("Save")}
            >
              Save{" "}
              <span>
                {notifications.filter((n) => n.type === "Save").length}
              </span>
            </a>
          </div>
        </div>
        <div className="list">
          {filteredNotifications.map((notification, index) => (
            <div key={index} className="item new">
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
              <p className="message">"{notification.message}"</p>
              <div className="meta">
                <span>{notification.time}</span> |{" "}
                <span>{notification.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

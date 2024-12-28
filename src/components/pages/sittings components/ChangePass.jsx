import React, { useState } from "react";

const ChangePass = () => {
  // State for form inputs
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "old_password") {
      setOldPassword(value);
    } else if (name === "new_password") {
      setNewPassword(value);
    } else if (name === "new_password_confirmation") {
      setConfirmPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match. Please try again.");
      return;
    }
    // Handle password reset logic here (e.g., API call)
    setError("");
    alert("Password changed successfully!");
  };

  return (
    <div className="change-pass" style={{ position: "relative" }}>
      <div className="header">
        <h1>Password Reset</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="input-box">
          <label htmlFor="oldPassword">Old password</label>
          <input
            id="oldPassword"
            name="old_password"
            type="password"
            value={oldPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="newPassword">New password</label>
          <input
            id="newPassword"
            name="new_password"
            type="password"
            value={newPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="confirmPassword">Confirm new password</label>
          <input
            id="confirmPassword"
            name="new_password_confirmation"
            type="password"
            value={confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="center">
          <button className="pry-btn mt-30" type="submit">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePass;

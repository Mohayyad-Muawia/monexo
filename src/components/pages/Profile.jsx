const Profile = () => {
  return (
    <div className="container">
      <div className="profile">
        <div className="left">
          <h1>Day Statistice</h1>

          <div className="day">
            <div className="income">
              <h2>Income</h2>
              <h2>$10,000.00</h2>
            </div>
            <div className="expense">
              <h2>Expense</h2>
              <h2>$23,000.00</h2>
            </div>
          </div>

          <h1>Month Statistice</h1>

          <div className="month">
            <div className="income">
              <h2>Income</h2>
              <h2>$130,000.00</h2>
            </div>
            <div className="expense">
              <h2>Expense</h2>
              <h2>$90,000.00</h2>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>Profile</h1>
          <div className="card">
            <div className="pfp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>{" "}
            </div>

            <div className="info">
              <p>
                <span>Name</span>
                <span>:</span>
                <span>FlushCode</span>
              </p>
              <p>
                <span>Email</span>
                <span>:</span>
                <span>FluchCode910gmail.com</span>
              </p>
              <p>
                <span>Number</span>
                <span>:</span>
                <span>+249 111-22-333</span>
              </p>
              <p>
                <span>Balance</span>
                <span>:</span>
                <span>$580,000.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

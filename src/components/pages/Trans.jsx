import { useState } from "react";
import "./pages.css";
const Trans = () => {
  let transArray = [
    {
      name: "Salary",
      type: "income",
      amount: 5000,
      date: "2024-12-01",
    },
    {
      name: "Groceries",
      type: "expense",
      amount: 300,
      date: "2024-12-02",
    },
    {
      name: "Freelance Project",
      type: "income",
      amount: 1200,
      date: "2024-12-03",
    },
    {
      name: "Electricity Bill",
      type: "expense",
      amount: 150,
      date: "2024-12-04",
    },
    {
      name: "Gym Membership",
      type: "expense",
      amount: 50,
      date: "2024-12-05",
    },
    {
      name: "Dividend Payment",
      type: "income",
      amount: 200,
      date: "2024-12-06",
    },
    {
      name: "Dividend Payment",
      type: "income",
      amount: 200,
      date: "2024-12-06",
    },
    {
      name: "Dividend Payment",
      type: "income",
      amount: 200,
      date: "2024-12-06",
    },
    {
      name: "Dividend Payment",
      type: "income",
      amount: 200,
      date: "2024-12-06",
    },
  ];

  const close_form = () => {
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".add-form").classList.remove("show");
  };
  const open_form = () => {
    document.querySelector(".overlay").classList.add("show");
    document.querySelector(".add-form").classList.add("show");
  };

  const [type, setType] = useState("income");

  return (
    <div className="container">
      <div className="trans">
        <div className="top">
          <h1 className="center">Transactions</h1>
          <div className="filter">
            <a className="active">All Transactions</a>
            <a>Income</a>
            <a>Expense</a>
          </div>
          <div className="box">
            <a className="hov add-trans" onClick={open_form}>
              <i className="bi bi-plus-lg"></i>
            </a>
          </div>
        </div>

        <div className="actions">
          {transArray.map((t, i) => (
            <div key={i} className="t">
              <p>{t.name}</p>
              <p>${t.amount}</p>
              <p>
                {t.type === "income" ? (
                  <>
                    income <i className="bi bi-arrow-down"></i>
                  </>
                ) : (
                  <>
                    expense <i className="bi bi-arrow-up"></i>
                  </>
                )}
              </p>
              <p>{t.date}</p>
              <div className="opt">
                <a className="hov2">
                  <i className="bi bi-three-dots"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <form className="add-form">
          <div className="top">
            <h1>Add Transaction</h1>
            <a className="close-form" onClick={close_form}>
              <i className="bi bi-x-circle-fill"></i>
            </a>
          </div>

          <div className="feilds">
            <div className="input-box half">
              <div className="input-box">
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" required />
              </div>

              <div className="input-box">
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="number" required />
              </div>
            </div>

            <div className="input-box half">
              <div className="input-box">
                <label htmlFor="type">Type</label>
                <select
                  name=""
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                  id="type"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="input-box">
                <label htmlFor="cati">Catigory</label>
                <select name="" id="cati">
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                  <option value="6"></option>
                </select>
              </div>
            </div>

            <div className="input-box half">
              <div className="input-box">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" required />
              </div>

              <div className="input-box">
                <label htmlFor="desc">Description</label>
                <input id="desc" name="" type="text" required />
              </div>
            </div>

            <button className="pry-btn" type="submit">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div> // container
  );
};

export default Trans;

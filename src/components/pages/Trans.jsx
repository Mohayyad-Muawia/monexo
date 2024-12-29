import { useState } from "react";
import "./pages.css";

const Trans = () => {
  const [transArray, setTransArray] = useState([
    {
      title: "Salary",
      type: "income",
      amount: 5000,
      date: "2024-12-01",
      categoryId: 1,
      description: "Monthly salary",
    },
    {
      title: "Groceries",
      type: "expense",
      amount: 300,
      date: "2024-12-02",
      categoryId: 2,
      description: "Weekly groceries",
    },
    {
      title: "Freelance Project",
      type: "income",
      amount: 1200,
      date: "2024-12-03",
      categoryId: 3,
      description: "Web development project",
    },
    {
      title: "Electricity Bill",
      type: "expense",
      amount: 150,
      date: "2024-12-04",
      categoryId: 4,
      description: "Monthly electricity bill",
    },
    {
      title: "Gym Membership",
      type: "expense",
      amount: 50,
      date: "2024-12-05",
      categoryId: 5,
      description: "Monthly gym subscription",
    },
    {
      title: "Dividend Payment",
      type: "income",
      amount: 200,
      date: "2024-12-06",
      categoryId: 6,
      description: "Stock dividend payout",
    },
  ]);
  const [type, setType] = useState("income");
  const [filter, setFilter] = useState("all");
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    type: "",
    amount: "",
    date: "",
    categoryId: "",
    description: "",
  });

  const closeForm = (formType) => {
    document.querySelector(`.${formType}-form`).classList.remove("show");
    document.querySelector(".overlay").classList.remove("show");
  };

  const openForm = (formType) => {
    document.querySelector(`.${formType}-form`).classList.add("show");
    document.querySelector(".overlay").classList.add("show");
  };

  const toggleDropdown = (e, index) => {
    e.stopPropagation();
    setSelectedDropdown(selectedDropdown === index ? null : index);
  };

  const deleteTransaction = (index) => {
    setTransArray(transArray.filter((_, i) => i !== index));
    setSelectedDropdown(null);
  };

  const openEditForm = (index) => {
    const transaction = transArray[index];
    setEditFormData({ ...transaction });
    setEditingIndex(index);
    openForm("edit");
    setSelectedDropdown(null);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedTransactions = [...transArray];
    updatedTransactions[editingIndex] = { ...editFormData };
    setTransArray(updatedTransactions);
    closeForm("edit");
    setEditingIndex(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const filteredTransArray =
    filter === "all" ? transArray : transArray.filter((t) => t.type === filter);

  return (
    <div className="container">
      <div className="trans">
        <div className="top">
          <h1 className="center">Transactions</h1>
          <div className="filter">
            <a
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All Transactions
            </a>
            <a
              className={filter === "income" ? "active" : ""}
              onClick={() => setFilter("income")}
            >
              Income
            </a>
            <a
              className={filter === "expense" ? "active" : ""}
              onClick={() => setFilter("expense")}
            >
              Expense
            </a>
          </div>
          <div className="box">
            <a className="hov add-trans" onClick={() => openForm("add")}>
              <i className="bi bi-plus-lg"></i>
            </a>
          </div>
        </div>

        <div className="actions">
          {filteredTransArray.map((t, i) => (
            <div key={i} className="t">
              <p>{t.title}</p>
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
                <a
                  className="open-menu hov2"
                  onClick={(e) => toggleDropdown(e, i)}
                >
                  <i className="bi bi-three-dots"></i>
                </a>
                {selectedDropdown === i && (
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item delete"
                      onClick={() => deleteTransaction(i)}
                    >
                      Delete
                    </a>
                    <a
                      className="dropdown-item edit"
                      onClick={() => openEditForm(i)}
                    >
                      Edit
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Form */}
        <form className="add-form">
          <div className="top">
            <h1>Add Transaction</h1>
            <a className="close-form" onClick={() => closeForm("add")}>
              <i className="bi bi-x-circle-fill"></i>
            </a>
          </div>
          <div className="fields">
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
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                  id="type"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="input-box">
                <label htmlFor="cati">Category</label>
                <select id="cati">
                  <option value="1">salary</option>
                  <option value="2">gift</option>
                  <option value="3">food</option>
                  <option value="4">other</option>
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
                <input id="desc" name="" type="text" />
              </div>
            </div>
          </div>
          <div className="center">
            <button className="pry-btn" type="submit">
              Add Transaction
            </button>
          </div>
        </form>

        {/* Edit Form */}
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <div className="top">
            <h1>Edit Transaction</h1>
            <a className="close-form" onClick={() => closeForm("edit")}>
              <i className="bi bi-x-circle-fill"></i>
            </a>
          </div>
          <div className="fields">
            <div className="input-box half">
              <div className="input-box">
                <label htmlFor="editDate">Date</label>
                <input
                  id="editDate"
                  name="date"
                  type="date"
                  value={editFormData.date}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="editAmount">Amount</label>
                <input
                  id="editAmount"
                  name="amount"
                  type="number"
                  value={editFormData.amount}
                  onChange={handleEditChange}
                  required
                />
              </div>
            </div>

            <div className="input-box half">
              <div className="input-box">
                <label htmlFor="editType">Type</label>
                <select
                  id="editType"
                  name="type"
                  value={editFormData.type}
                  onChange={handleEditChange}
                  required
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div className="input-box">
                <label htmlFor="editCategoryId">Category</label>
                <input
                  id="editCategoryId"
                  name="categoryId"
                  type="number"
                  value={editFormData.categoryId}
                  onChange={handleEditChange}
                  required
                />
              </div>
            </div>

            <div className="input-box half">
              <div className="input-box">
                <label htmlFor="editTitle">Title</label>
                <input
                  id="editTitle"
                  name="title"
                  type="text"
                  value={editFormData.title}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="editDescription">Description</label>
                <input
                  id="editDescription"
                  name="description"
                  type="text"
                  value={editFormData.description}
                  onChange={handleEditChange}
                />
              </div>
            </div>
          </div>
          <div className="center">
            <button className="pry-btn" type="submit">
              Save Changes
            </button>
          </div>
        </form>
        <div
          className="overlay"
          onClick={() => closeForm(editingIndex !== null ? "edit" : "add")}
        ></div>
      </div>
    </div>
  );
};

export default Trans;

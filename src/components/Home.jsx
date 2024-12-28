import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Home = () => {
  // Data for all
  const allData = {
    labels: ["Transaction", "Expenses", "Income"],
    datasets: [
      {
        data: [120, 20, 100], // Data for Total Transaction
        backgroundColor: ["#FFC107", "#C62626", " #B156B8"], // Colors for Total Transaction
      },
    ],
  };

  // Data for Total Transaction Doughnut Chart
  const transactionData = {
    labels: ["Completed", "Pending", "Canseled"],
    datasets: [
      {
        data: [60, 30, 10], // Data for Total Transaction
        backgroundColor: ["#032A61", "#FFC107", "#FF6347"], // Colors for Total Transaction
      },
    ],
  };

  // Data for Total Expenses Doughnut Chart
  const expensesData = {
    labels: ["Food", "Rent", "Utilities"],
    datasets: [
      {
        data: [200, 500, 300], // Data for Total Expenses
        backgroundColor: ["#FF6347", "#FFC107", "#8A2BE2"], // Colors for Total Expenses
      },
    ],
  };

  // Data for Total Income Doughnut Chart
  const incomeData = {
    labels: ["Salary", "GIfts", "Freelance"],
    datasets: [
      {
        data: [500, 300, 150], // Data for Total Income
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107"], // Colors for Total Income
      },
    ],
  };

  // Data for Bar chart (Income and Savings per month)
  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Pending Transactions",
        data: [500, 300, 700, 400, 650, 750, 800, 600, 550, 400, 600, 700], // Data for Pending Transactions
        backgroundColor: "#1431D7",
      },
      {
        label: "Savings",
        data: [200, 250, 350, 400, 300, 450, 500, 550, 500, 400, 300, 350], // Data for Savings
        backgroundColor: "#9EDAE0",
      },
    ],
  };

  return (
    <div className="container">
      <div className="home">
        <div className="charts">
          <div
            className="donts"
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
            }}
          >
            <div className="box">
              <h3>Total Transaction</h3>
              <div className="dnt">
                <Doughnut data={transactionData} />
              </div>
            </div>

            <div className="box">
              <h3>Total Expenses</h3>
              <div className="dnt">
                <Doughnut data={expensesData} />
              </div>
            </div>

            <div className="box">
              <h3>Total Income</h3>
              <div className="dnt">
                <Doughnut data={incomeData} />
              </div>
            </div>
          </div>

          <div className="bars">
            <div>
              <Doughnut data={allData} />
            </div>

            <div className="bar" style={{ marginTop: "10px", width: "450px" }}>
              <Bar data={barData} />
            </div>
          </div>
        </div>

        <div className="states">
          <h2>States</h2>
          <div className="tran">
            <h4>Total Transactions</h4>
            <div className="num">$120,000</div>
          </div>
          <div className="exp">
            <h4>Total Expense</h4>
            <div className="num">$20,000</div>
          </div>
          <div className="inc">
            <h4>Total Income</h4>
            <div className="num">$100,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

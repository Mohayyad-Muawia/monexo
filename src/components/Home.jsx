<<<<<<< HEAD
const Home = () => {
  return (
    <>
      <div className="home"></div>
    </>
=======
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
  // Data for Total Transaction Doughnut Chart
  const transactionData = {
    labels: ["Completed", "Pending", "Canseled"],
    datasets: [
      {
        data: [60, 30, 10], // Data for Total Transaction
        backgroundColor: ["#032A61", "#FCE919", "#FF6347"], // Colors for Total Transaction
      },
    ],
  };

  // Data for Total Expenses Doughnut Chart
  const expensesData = {
    labels: ["Food", "Rent", "Utilities"],
    datasets: [
      {
        data: [200, 500, 300], // Data for Total Expenses
        backgroundColor: ["#FF6347", "#FFD700", "#8A2BE2"], // Colors for Total Expenses
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
            <div className="dnt">
              <h3>Total Transaction</h3>
              <Doughnut data={transactionData} />
            </div>
            <div className="dnt">
              <h3>Total Expenses</h3>
              <Doughnut data={expensesData} />
            </div>
            <div className="dnt">
              <h3>Total Income</h3>
              <Doughnut data={incomeData} />
            </div>
          </div>
          <div style={{ marginTop: "20px", width: "400px", height: "400px" }}>
            <Bar data={barData} />
          </div>
        </div>

        <div className="states"></div>
      </div>
    </div>
>>>>>>> cd9377f (charts)
  );
};

export default Home;

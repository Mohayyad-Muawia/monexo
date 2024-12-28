import { useState } from "react";
import "./pages.css";
import Books from "./sources components/Books";
import Channels from "./sources components/Channels";

const Sources = () => {
  const [filter, setFilter] = useState("y");

  return (
    <div className="container">
      <div className="sources">
        <div className="title">
          <h1>Let your money weaken alone </h1>
          <p>
            Money is a tool; you either use it to build a better future or waste
            it chasing temporary desires.
          </p>
        </div>

        <div className="swich">
          <a
            className={filter === "y" ? "active" : ""}
            onClick={() => setFilter("y")}
          >
            YouTube Channels
          </a>
          <a
            className={filter === "b" ? "active" : ""}
            onClick={() => setFilter("b")}
          >
            Books & Articles
          </a>
        </div>

        <div className="content">
          {filter === "b" ? <Books /> : <Channels />}
        </div>
      </div>
    </div>
  );
};

export default Sources;

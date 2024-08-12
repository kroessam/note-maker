import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => {
    setIsAdding(!isAdding);
  };

  return (
    <>
      <main>
        <Link className="btn" to="/">
          Back to Home
        </Link>
        <h1>Dashboard</h1>
        <button
          className={"btn" + (isAdding ? " btn-cancel" : "")}
          onClick={handleAddClick}
        >
          {isAdding ? "Cancel" : "Add New"}
        </button>
      </main>
    </>
  );
};

export default Dashboard;

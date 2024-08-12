import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [note, setNote] = useState("Write Here!");
  const [notesList, setNotesList] = useState([]);

  const getDate = () => {
    let date = new Date();

    let formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  };

  const [date, setDate] = useState(getDate());

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
          className={"btn text-center" + (isAdding ? " btn-cancel" : "")}
          onClick={handleAddClick}
        >
          {isAdding ? "Cancel" : "Add New"}
        </button>
        <textarea
          className="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <h2 className="text-center">Note Preview</h2>
        <h3>{date}</h3>
        <p>{note}</p>
      </main>
    </>
  );
};

export default Dashboard;

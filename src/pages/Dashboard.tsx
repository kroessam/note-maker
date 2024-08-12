import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [note, setNote] = useState("Write Here!");
  const [notesList, setNotesList] = useState<string[]>([]);

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

  const handleSave = () => {
    setDate(getDate); // Update date (and time!) on save
    setNotesList([...notesList, `${date}: ${note}`]); // Add note w/ date to list
  };

  return (
    <>
      <main>
        <Link className="btn" to="/">
          Back to Home
        </Link>
        <h1>Dashboard</h1>
        <textarea
          className="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
        <hr />
        <h2 className="text-center">Note Preview</h2>
        <h3>{date}</h3>
        <p>{note}</p>
        <hr />
        <h2 className="text-center">Past Notes</h2>
        {notesList.map((thisNote) => (
          <p>{thisNote}</p>
        ))}
      </main>
    </>
  );
};

export default Dashboard;

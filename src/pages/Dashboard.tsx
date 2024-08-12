import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [note, setNote] = useState("(Example Text)");
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
    if (note === "") {
      alert("Note must not be blank!");
    } else {
      setDate(getDate); // Update date (and time!) on save
      setNotesList([...notesList, `${date}: ${note}`]); // Add note w/ date to list
      setNote(""); // Reset text input
    }
  };

  return (
    <>
      <main>
        <Link className="btn" to="/">
          Back to Home
        </Link>
        <h1>Dashboard</h1>
        <div className="write-container">
          <div className="note-box">
            <textarea
              className="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <div className="preview-box">
            <h2 className="text-center">Note Preview</h2>
            <h3>{date}</h3>
            <p>{note}</p>
          </div>
        </div>
        <button id="btn-save" className="btn" onClick={handleSave}>
          Save
        </button>
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

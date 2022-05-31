import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineRestorePage } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { deleteNoteDef, addNote } from "../redux/noteSlice";

export default function PostitDeleted({ note, title, id }) {
  // to take only the date without the time:
  const current_date = new Date().toLocaleDateString();
  const deletedList = useSelector((state) => state.note.deletedList);
  const length = deletedList.length;

  const dispatch = useDispatch();

  const deleteDef = () => {
    dispatch(deleteNoteDef(id));
  };

  const restoreNote = () => {
    const restoredPostit = {
      note: note,
      title: title,
      id: id, //to generate a unique id
      time: current_date,
    };
    dispatch(addNote(restoredPostit));
    // to quite the note form the trash page
    dispatch(deleteNoteDef(id));
  };

  return (
    // To change the className when there are more than 3 notes
    // so the align content change from left to center

    <div className="postit">
      <textarea
        className="note-title"
        placeholder="Title..."
        maxLength="40"
        value={title}
      ></textarea>

      <textarea
        className="note-text"
        placeholder="My note..."
        maxLength="230"
        // to associate the state value
        value={note}
      ></textarea>

      <footer className="note-footer">
        <p id="date">{current_date}</p>
        {/* to make the restore button redirect to the home page 
        when there is only one post it in the trash page */}
        {length === 1 ? (
          <Link to="/">
            <MdOutlineRestorePage
              className="button"
              id="restore-button"
              color="#7f7f81"
              size="1.7em"
              onMouseOver={({ target }) => (target.style.color = "#535354")}
              onMouseOut={({ target }) => (target.style.color = "#7f7f81")}
              onClick={restoreNote}
            />
          </Link>
        ) : (
          <MdOutlineRestorePage
            className="button"
            id="restore-button"
            color="#7f7f81"
            size="1.7em"
            onMouseOver={({ target }) => (target.style.color = "#535354")}
            onMouseOut={({ target }) => (target.style.color = "#7f7f81")}
            onClick={restoreNote}
          />
        )}

        <MdDeleteForever
          className="button"
          color="#7f7f81"
          size="1.7em"
          onMouseOver={({ target }) => (target.style.color = "#535354")}
          onMouseOut={({ target }) => (target.style.color = "#7f7f81")}
          onClick={deleteDef}
        />
      </footer>
    </div>
  );
}

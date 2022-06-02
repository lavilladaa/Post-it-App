import React from "react";
import { useDispatch } from "react-redux";
import { addNote, createColorsId } from "../../redux/noteSlice";
import { BiSave } from "react-icons/bi";
import { useState } from "react";

export default function NewPostit() {
  // to take only the date without the time:
  const current_date = new Date().toLocaleDateString();

  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  // To take the text in the note:
  const noteInfo = (event) => {
    setText(event.target.value);
  };

  // To take the title in the note:
  const titleInfo = (event) => {
    setTitle(event.target.value);
  };

  // To update the new note
  const saveNote = (event) => {
    // to prevent save a note in blank even if the user type spaces
    if (text.trim() !== "") {
      event.preventDefault();
      const newPostit = {
        note: text,
        title: title,
        id: Math.random(), //to generate a unique id
        time: current_date,
      };

      dispatch(addNote(newPostit));
      dispatch(createColorsId({ id: newPostit.id, color: "#D8A9C4" }));
      // to reset the note
      setText("");
      setTitle("");
    }
  };

  return (
    <div style={{ backgroundColor: "#D8A9C4" }}>
      <div className="postit">
        <textarea
          className="note-title"
          placeholder="Title..."
          maxLength="40"
          onChange={titleInfo}
          value={title}
        ></textarea>

        <textarea
          className="note-text"
          placeholder="My note..."
          maxLength="230"
          onChange={noteInfo}
          // to associate the state value
          value={text}
        ></textarea>

        <footer className="note-footer">
          <p id="date">{current_date}</p>
          <BiSave
            className="button"
            color="#656565"
            size="1.7em"
            onMouseOver={({ target }) => (target.style.color = "black")}
            onMouseOut={({ target }) => (target.style.color = "#656565")}
            onClick={saveNote}
          />
        </footer>
      </div>
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNoteAction } from "../redux/actions";
// import { RiSave2Fill } from 'react-icons/ri';
import { BiSave } from "react-icons/bi";

import { useState } from "react";
// import  Postit from "./Postit"

// export default function NewPostit({ newNote }) {
export default function NewPostit() {
  const current_date = new Date();
  const notesList = useSelector((state) => state.postits);

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
      const newPostit = { note: text, title: title, id: notesList.length };
      // newNote(text,title);
      dispatch(addNoteAction(newPostit));
      // to reset the note
      setText("");
      setTitle("");
    }
  };

  return (
    <div className="postit">
      <textarea
        className="note-title"
        placeholder="Title..."
        maxlength="40"
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
        <p id="date">{current_date.toLocaleDateString()}</p>
        <BiSave
          className="button"
          color="#7f7f81"
          size="1.7em"
          onMouseOver={({ target }) => (target.style.color = "#535354")}
          onMouseOut={({ target }) => (target.style.color = "#7f7f81")}
          onClick={saveNote}
        />
      </footer>
    </div>
  );
}

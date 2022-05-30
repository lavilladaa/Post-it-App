import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/noteSlice";
import { MdOutlineRestorePage } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

export default function NewPostit() {
  // to take only the date without the time:
  const current_date = new Date().toLocaleDateString();
  const deletedList = useSelector((state) => state.note.deletedList);
  const dispatch = useDispatch();

  // const [text, setText] = useState("");
  // const [title, setTitle] = useState("");

  // To take the text in the note:
  // const noteInfo = (event) => {
  //   setText(event.target.value);
  // };

  // // To take the title in the note:
  // const titleInfo = (event) => {
  //   setTitle(event.target.value);
  // };

  // To update the new note
  // const saveNote = (event) => {
  //   // to prevent save a note in blank even if the user type spaces
  //   if (text.trim() !== "") {
  //     event.preventDefault();
  //     const newPostit = {
  //       note: text,
  //       title: title,
  //       id: Math.random(), //to generate a unique id
  //       time: current_date,
  //     };
  //     dispatch(addNote(newPostit));
  //     // to reset the note
  //     setText("");
  //     setTitle("");
  //   }
  // };

  return (

    
    {deletedList.map((element) => (
      <div className="postit">
      <textarea
        className="note-title"
        placeholder="Title..."
        maxLength="40"
        onChange={titleInfo}
        value={element.title}
      ></textarea>

      <textarea
        className="note-text"
        placeholder="My note..."
        maxLength="230"
        onChange={noteInfo}
        // to associate the state value
        value={element.note}
      ></textarea>

      <footer className="note-footer">
        <p id="date">{current_date}</p>
        <MdOutlineRestorePage
          className="button"
          color="#7f7f81"
          size="1.7em"
          onMouseOver={({ target }) => (target.style.color = "#535354")}
          onMouseOut={({ target }) => (target.style.color = "#7f7f81")}
          // onClick={saveNote}
        />
        <MdDeleteForever
          className="button"
          color="#7f7f81"
          size="1.7em"
          onMouseOver={({ target }) => (target.style.color = "#535354")}
          onMouseOut={({ target }) => (target.style.color = "#7f7f81")}
          // onClick={saveNote}
        />
      </footer>
    </div>
    ))}


  );
}

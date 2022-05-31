import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/noteSlice";
import { editNote } from "../redux/noteSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { BiSave } from "react-icons/bi";

export default function Postit({ note, title, id }) {
  //to set the current date in the postit
  const current_date = new Date().toLocaleDateString();

  const dispatch = useDispatch();

  const [editState, setEditState] = useState(false);

  // In the initial value of the states is taken the original value in the postit.
  const [editedText, setEditedText] = useState(note);
  const [editedTitle, setEditedTitle] = useState(title);

  // taking the edited info from the textarea
  const titleNew = (event) => {
    setEditedTitle(event.target.value);
  };

  const noteNew = (event) => {
    setEditedText(event.target.value);
  };

  // onClick function for the edit button
  const edit = () => {
    setEditState(true);
  };

  const saveNew = (event) => {
    if (editedText.trim() !== "") {
      // to prevent the website refresh
      event.preventDefault();

      const editedPostit = {
        note: editedText,
        title: editedTitle,
        id: id,
        time: current_date,
      };

      dispatch(editNote(editedPostit));

      // to render the original format note editState is updated to false
      setEditState(false);
    }
  };

  const deleteFun = (event) => {
    event.preventDefault();
    dispatch(deleteNote(id));
  };

  // to quit the title if the user does not insert it
  if (title === "") {
    title = "   ";
  }

  return (
    <div>
      {/* In case the mode edit is off, should render the original format postit */}
      {!editState ? (
        <div className="postit">
          <textarea
            className="note-title"
            placeholder="Title..."
            maxLength="40"
            // to take the title from the NewPostit component.
            value={title}
            onChange={titleNew}
          ></textarea>

          <textarea
            className="note-text"
            placeholder="My note..."
            maxLength="150"
            // to take the note text from the NewPostit component.
            value={note}
            onChange={noteNew}
          ></textarea>

          <footer className="note-footer">
            <p id="date">{current_date}</p>
            <FaEdit
              className="button"
              id="edit-button"
              size="1.6em"
              color="#656565"
              onMouseOver={({ target }) => (target.style.color = "black")}
              onMouseOut={({ target }) => (target.style.color = "#656565")}
              // to change the edit state
              onClick={edit}
            />

            <RiDeleteBin5Line
              className="button"
              size="1.7em"
              color="#656565"
              onMouseOver={({ target }) => (target.style.color = "black")}
              onMouseOut={({ target }) => (target.style.color = "#656565")}
              onClick={deleteFun}
            />
          </footer>
        </div>
      ) : (
        <>
          <div className="postit">
            <textarea
              className="note-title"
              placeholder="Title..."
              maxLength="40"
              onChange={titleNew}
              // to set the edited title
              value={editedTitle}
            ></textarea>

            <textarea
              className="note-text"
              placeholder="My note..."
              maxLength="230"
              onChange={noteNew}
              // to set the edited text in the note
              value={editedText}
            ></textarea>

            <footer className="note-footer">
              <p id="date">{current_date}</p>
              <BiSave
                className="button"
                color="#656565"
                size="1.7em"
                onMouseOver={({ target }) => (target.style.color = "black")}
                onMouseOut={({ target }) => (target.style.color = "#656565")}
                onClick={saveNew}
              />
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

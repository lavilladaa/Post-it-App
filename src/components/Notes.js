import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNoteAction } from "../redux/actions";

import NewPostit from "./NewPostit";
import Postit from "./Postit";
import DeletedNotes from "./DeletedNotes";

export default function Notes() {
  // creating the array to render all the notes
  // const [notesList, setNotesList] = useState([]);
  // const [titleList, setTitleList] = useState([]);
  const notesList = useSelector((state) => state.postits);

  // const [deletedPostits, setDeletedPostits] = useState([]);
  // const [deletedTitles, setDeletedTitles] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("deletedPostits", JSON.stringify(deletedPostits));
  // }, [deletedPostits]);

  // function to add a new note
  // const newNote = (note, title) => {
  //   //In this way the last note created is added at the end
  //   setNotesList([...notesList, note]);
  //   setTitleList([...titleList, title]);
  // };

  // // function to edit an existing note
  // const editNote = (id, editTitle, editText) => {
  //   const listNotesUpdated = notesList.map((element, index) => {
  //     //
  //     if (index === id) {
  //       element = editText;
  //     }
  //     // to return all the elements the return has to be outside the if
  //     return element;
  //   });
  //   setNotesList(listNotesUpdated);

  //   const listTitleUpdated = titleList.map((element, index) => {
  //     if (index === id) {
  //       element = editTitle;
  //     }
  //     return element;
  //   });
  //   setTitleList(listTitleUpdated);
  // };

  // const deleteNote = (id) => {
  //   // filter method to take all the notes except that one
  //   //where the user clicked the delete button
  //   const notesDisplayed = notesList.filter((element, index) => index !== id);

  //   setNotesList(notesDisplayed);

  //   const titlesDisplayed = titleList.filter((element, index) => index !== id);
  //   setTitleList(titlesDisplayed);
  // };

  return (
    // To change the className when there are more than 3 notes
    // so the align content change from left to center
    // <div className={notesList.length >= 3 ? "multiple-notes" : "few-notes"}>
    <div className="multiple-notes">
      <NewPostit />

      {/* to render all the notes created */}
      {notesList.map((element, index) => (
        <Postit
          note={element.note}
          title={element.title}
          id={index}
          // editNote={editNote}
          // deleteNote={deleteNote}
        />
      ))}

      {/* <DeletedNotes
        deletedPostits={deletedPostits}
        deletedTitles={deletedTitles}
        editNote={editNote}
        deleteNote={deleteNote}
      /> */}
    </div>
  );
}

import React from "react";
// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { deleteNoteAction } from "../redux/actions";

import NewPostit from "./NewPostit";
import Postit from "./Postit";
// import DeletedNotes from "./DeletedNotes";

export default function Notes() {
  // creating the array to render all the notes
  // const [notesList, setNotesList] = useState([]);
  // const [titleList, setTitleList] = useState([]);
  const notesList = useSelector((state) => state.note.notesList);
  // notesList.shift();
  // to avoid render the initial state from the store
  // const notesList = notesListOri.slice(1);
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

  // function to edit an existing note
  // const editNote = (id, editText, editTitle) => {
  //   notesList.slice(1).map((element) => {
  //     console.log("soy el id del argumento:" + id);
  //     console.log(element.id);
  //     if (element.id === id) {
  //      return {...element, }
  //       console.log("entreeee");
  //     }
  //     // to return all the elements the return has to be outside the if
  //     return element;
  //   });
  //   console.log("soy el notesListUpdated");
  //   console.log(notesList);
  // };

  const editNote = (id, editedText, editedTitle) => {
    notesList.map((element) => {
      //
      if (element.id === id) {
        console.log("ENTREEEE");
        element.note = editedText;
        element.title = editedTitle;
        return element;
      }
      // to return all the elements the return has to be outside the if
      return element;
    });
  };
  console.log("Lista Actualizada es:" + notesList);
  // const deleteNote = (id) => {
  //   // filter method to take all the notes except that one
  //   //where the user clicked the delete button
  //   const notesDisplayed = notesList.filter((element, index) => index !== id);

  //   setNotesList(notesDisplayed);

  //   const titlesDisplayed = titleList.filter((element, index) => index !== id);
  //   setTitleList(titlesDisplayed);
  // };
  console.log("RENDERIZANDO PRINCIPAL");
  console.log(notesList);
  return (
    // To change the className when there are more than 3 notes
    // so the align content change from left to center
    <div className={notesList.length >= 3 ? "multiple-notes" : "few-notes"}>
      {/* <div className="multiple-notes"> */}
      <NewPostit />

      {/* to render all the notes created */}
      {/* <div key={notesList.id}> */}
      {notesList.map((element) => (
        <Postit
          key={element.id}
          note={element.note}
          title={element.title}
          id={element.id}
          editNote={editNote}
          // deleteNote={deleteNote}
        />
      ))}
    </div>
    // </div>
  );
}

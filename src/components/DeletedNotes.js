import React from "react";
import Postit from "./Postit";

export default function DeletedNotes(note, title, id, editNote, deleteNote) {
  // const deletedPostits_p = localStorage.getItem("deletedPostits");
  // const deletedPostits_p = ["hola", "me", "llamo", "lauea"];
  return (
    <div>
      <p>me estoy ejecutando</p>

      <Postit
        note={note}
        title={title}
        id={id}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

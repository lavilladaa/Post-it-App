import React from "react";
import { useSelector } from "react-redux";
import PostitDeleted from "./PostitDeleted";

export default function DeletedNotes() {
  // to take only the date without the time:
  // const current_date = new Date().toLocaleDateString();
  const deletedList = useSelector((state) => state.note.deletedList);
  // const notesList = useSelector((state) => state.note.notesList);

  return (
    // To change the className when there are more than 3 notes
    // so the align content change from left to center

    <div className={deletedList.length >= 3 ? "multiple-notes" : "few-notes"}>
      {/* to render all the notes created */}

      {deletedList.map((element) => (
        <PostitDeleted
          note={element.note}
          title={element.title}
          id={element.id}
        />
      ))}
    </div>
  );
}

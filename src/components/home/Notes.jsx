import React from 'react';
import { useSelector } from 'react-redux';
import NewPostit from './NewPostit';
import Postit from './Postit';

export default function Notes() {
  // to take the notesList from the global state:
  const notesList = useSelector((state) => state.note.notesList);

  return (
    /* to change the className when there are more than 3 notes (including the NewPost-it element)
    so the align content change from left to center */
    <div className={notesList.length >= 3 ? 'notes-list  justify-center' : 'notes-list'}>
      <NewPostit />

      {/* to render all the notes created */}
    
      {notesList.map((element) => (
        <Postit
          key={element.id}
          note={element.note}
          title={element.title}
          id={element.id}
          time={element.time}
        />
      ))}
    </div>
  );
}

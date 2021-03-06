import React from 'react';
import { useSelector } from 'react-redux';
import PostitDeleted from './PostitDeleted';

export default function DeletedNotes() {

  // to take only the date without the time:
  const deletedList = useSelector((state) => state.note.deletedList);

  return (

    // To change the className when there are more than 3 notes
    // so the align content change from left to center
    <div className={deletedList.length >= 3 ? 'notes-list justify-center' : 'notes-list'}>

      {/* to render all the notes deleted */}

      {deletedList.map((element) => (
        <PostitDeleted
          note={element.note}
          title={element.title}
          id={element.id}
          time={element.time}
          key={element.id}
        />
      ))}
    </div>
  );
}

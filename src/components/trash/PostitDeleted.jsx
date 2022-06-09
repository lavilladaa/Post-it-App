/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdOutlineRestorePage, MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteDef, addNote } from '../../redux/noteSlice';

export default function PostitDeleted({ note, title, id, time }) {
  const deletedList = useSelector((state) => state.note.deletedList);
  const colorList = useSelector((state) => state.note.colorList);

  const dispatch = useDispatch();

  PostitDeleted.propTypes = {
    note: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    time: PropTypes.string,
  };

  // length = deletedList.length;
  const { length } = deletedList; 


  const deleteDef = () => {
    dispatch(deleteNoteDef(id));
  };

  const restoreNote = () => {
    const restoredPostit = {
      note,
      title,
      id,
      time,
    };

    // is is used the same function to add a New Note
    dispatch(addNote(restoredPostit));

    // to delete the note from the Trash page
    dispatch(deleteNoteDef(id));
  };

  // to quit the title if the user does not insert it
  if (title === '') {
    // eslint-disable-next-line no-param-reassign
    title = '   ';
  }

  let colorP = '#D8A9C4';

  // to take the color of the post-it with the id in the props
  colorList.forEach((element) => {
    if (element.id === id) {
      colorP = element.color;
    }
  });

  return (
    <div style={{ backgroundColor: colorP }} className='postit-container'>
      <div className='postit'>
        <textarea
          className='note-title'
          placeholder='Title...'
          maxLength='25'
          value={title}
          /* "readOnly" is used to avoid the warning
          "You provided a `value` prop to a form field without an `onChange` handler." */
          readOnly
        />

        <textarea
          className='note-text'
          placeholder='My note...'
          maxLength='200'
          // to associate the state value
          value={note}
          readOnly
        />

        <footer className='flex flex-row justify-between items-center pl-2 h-9'>
          <p id='date' className='text-sm font-handlee mr-36 md:mr-0'>
            {time}
          </p>
          {/* to make the restore button redirect to the home page 
        when there is only one post it in the trash page */}
          {length === 1 ? (
            <Link to='/'>
              <MdOutlineRestorePage
                className='cursor-pointer md:ml-40 '
                color='#7f7f81'
                size='1.7em'
                onMouseOver={({ target }) => (target.style.color = '#535354')}
                onMouseOut={({ target }) => (target.style.color = '#7f7f81')}
                onClick={restoreNote}
              />
            </Link>
          ) : (
            <MdOutlineRestorePage
              className='cursor-pointer md:ml-40'
              color='#7f7f81'
              size='1.7em'
              onMouseOver={({ target }) => (target.style.color = '#535354')}
              onMouseOut={({ target }) => (target.style.color = '#7f7f81')}
              onClick={restoreNote}
            />
          )}
          {length === 1 ? (
            <Link to='/'>
              <MdDeleteForever
                className='cursor-pointer'
                color='#7f7f81'
                size='1.9em'
                onMouseOver={({ target }) => (target.style.color = '#535354')}
                onMouseOut={({ target }) => (target.style.color = '#7f7f81')}
                onClick={deleteDef}
              />
            </Link>
          ) : (
            <MdDeleteForever
              className='cursor-pointer'
              color='#7f7f81'
              size='1.9em'
              onMouseOver={({ target }) => (target.style.color = '#535354')}
              onMouseOut={({ target }) => (target.style.color = '#7f7f81')}
              onClick={deleteDef}
            />
          )}
        </footer>
      </div>
    </div>
  );
}

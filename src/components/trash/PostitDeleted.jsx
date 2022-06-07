/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineRestorePage, MdDeleteForever } from 'react-icons/md';
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

  const { length } = deletedList; // length = deletedList.length;
  // to take only the date without the time:

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
    dispatch(addNote(restoredPostit));
    // to quite the note form the trash page
    dispatch(deleteNoteDef(id));
  };

  // to quit the title if the user does not insert it
  if (title === '') {
    // eslint-disable-next-line no-param-reassign
    title = '   ';
  }

  let colorP = '#D8A9C4';
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
          maxLength='40'
          value={title}
          // to avoid the warning
          // "You provided a `value` prop to a form field without an `onChange` handler."
          readOnly
        />

        <textarea
          className='note-text'
          placeholder='My note...'
          maxLength='230'
          // to associate the state value
          value={note}
          readOnly
        />

        <footer className='flex flex-row justify-between items-center pl-2 h-9'>
          <p id='date' className='text-sm font-handlee mr-date-deleted'>
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

/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineRestorePage, MdDeleteForever } from 'react-icons/md';
import { deleteNoteDef, addNote } from '../../redux/noteSlice';

export default function PostitDeleted({ note, title, id }) {
  const deletedList = useSelector((state) => state.note.deletedList);
  const colorList = useSelector((state) => state.note.colorList);
  const dispatch = useDispatch();

  PostitDeleted.propTypes = {
    // eslint-disable-next-line react/require-default-props
    note: PropTypes.string,
    // eslint-disable-next-line react/require-default-props
    title: PropTypes.string,
    // eslint-disable-next-line react/require-default-props
    id: PropTypes.number,
  };

  const {length} = deletedList; // length = deletedList.length;
  // to take only the date without the time:
  const currentDate = new Date().toLocaleDateString();
  const deleteDef = () => {
    dispatch(deleteNoteDef(id));
  };

  const restoreNote = () => {
    const restoredPostit = {
      note,
      title,
      id, 
      time: currentDate,
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
    <div style={{ backgroundColor: colorP }}>
      <div className='flex flex-col justify-between min-h-260 p-0'>
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
          <p id='date' className='text-sm font-handlee'>{currentDate}</p>
          {/* to make the restore button redirect to the home page 
        when there is only one post it in the trash page */}
          {length === 1 ? (
            <Link to='/'>
              <MdOutlineRestorePage
                className='cursor-pointer ml-40'
                // id='restore-button'
                color='#7f7f81'
                size='1.7em'
                onMouseOver={({ target }) => (target.style.color = '#535354')}
                onMouseOut={({ target }) => (target.style.color = '#7f7f81')}
                onClick={restoreNote}
              />
            </Link>
          ) : (
            <MdOutlineRestorePage
              className='cursor-pointer ml-40'
              // id='restore-button'
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
                size='1.7em'
                onMouseOver={({ target }) => (target.style.color = '#535354')}
                onMouseOut={({ target }) => (target.style.color = '#7f7f81')}
                onClick={deleteDef}
              />
            </Link>
          ) : (
            <MdDeleteForever
              className='cursor-pointer'
              color='#7f7f81'
              size='1.7em'
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

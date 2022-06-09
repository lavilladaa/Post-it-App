/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { React, useState } from 'react';
import { BiSave } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { addNote, createColorsId } from '../../redux/noteSlice';

export default function NewPostit() {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  // to take only the date without the time:
  const currentDate = new Date().toLocaleDateString();

  const dispatch = useDispatch();

  // To take the text in the note:
  const noteInfo = (event) => {
    setText(event.target.value);
  };

  // To take the title in the note:
  const titleInfo = (event) => {
    setTitle(event.target.value);
  };

  // To update the new note
  const saveNote = (event) => {
    // to prevent save a note in blank even if the user type spaces
    if (text.trim() !== '') {
      event.preventDefault();
      const newPostit = {
        note: text,
        // title: title, (object-shorthand)
        title, 
        // to generate a unique id
        id: Math.random(), 
        time: currentDate,
      };

      dispatch(addNote(newPostit));
      dispatch(createColorsId({ id: newPostit.id, color: '#F7EF99' }));

      // to reset the note
      setText('');
      setTitle('');

    } else {
      // Using swal to make the alert prettier
      Swal.fire({
        text: 'Please enter a text in the Post-it',
        icon: 'error',
        confirmButtonColor: '#7A056F',
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#F7EF99' }} className='postit-container'>
      <div className='postit'>
        <textarea
          className='note-title placeholder-zinc-400'
          placeholder='Title...'
          // limiting the number of characters for the title
          maxLength='25'
          onChange={titleInfo}
          value={title}
        />
        <textarea
          className='note-text placeholder-zinc-400'
          placeholder='My note...'
          /* Limiting the number of characters trying to avoid the note generate the scroll bar,
          so is more similar to how works a postit in the real life */
          maxLength='200'
          onChange={noteInfo}
          // to associate the state value
          value={text}
        />

        <footer className='flex flex-row justify-between items-center pl-2 h-9'>
          <p id='date' className='text-sm font-handlee font-medium'>
            {currentDate}
          </p>
          <BiSave
            className='cursor-pointer mr-1'
            color='#656565'
            size='1.7em'
            // For react icons the hover is set like this:
            onMouseOver={({ target }) => (target.style.color = 'black')}
            onMouseOut={({ target }) => (target.style.color = '#656565')}
            onClick={saveNote}
          />
        </footer>
      </div>
    </div>
  );
}

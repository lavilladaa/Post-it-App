/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import {React,useState} from 'react';
import { useDispatch } from 'react-redux';
import { BiSave } from 'react-icons/bi';
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
        title, // title: title, (object-shorthand)
        id: Math.random(), // to generate a unique id
        time: currentDate,
      };

      dispatch(addNote(newPostit));
      dispatch(createColorsId({ id: newPostit.id, color: '#D8A9C4' }));
      // to reset the note
      setText('');
      setTitle('');
    } else {
      alert('Please enter a text in the Post-it');
    }
  };

  return (
    <div style={{ backgroundColor: '#D8A9C4' }}>
      <div className='postit'>
        <textarea
          className='note-title'
          placeholder='Title...'
          maxLength='25'
          onChange={titleInfo}
          value={title}
         />

        <textarea
          className='note-text'
          placeholder='My note...'
          // trying to avoid the note generate the scroll bar
          // so is more similar to how works a postit in the real life
          maxLength='190'
          onChange={noteInfo}
          // to associate the state value
          value={text}
         />

        <footer className='note-footer'>
          <p id='date'>{currentDate}</p>
          <BiSave
            className='button'
            color='#656565'
            size='1.7em'
            onMouseOver={({ target }) => (target.style.color = 'black')}
            onMouseOut={({ target }) => (target.style.color = '#656565')}
            onClick={saveNote}
          />
        </footer>
      </div>
    </div>
  );
}

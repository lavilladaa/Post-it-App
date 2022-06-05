/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import {React,useState} from 'react';
import { BiSave } from 'react-icons/bi';
import swal from 'sweetalert';
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
        title, // title: title, (object-shorthand)
        id: Math.random(), // to generate a unique id
        time: currentDate,
      };

      dispatch(addNote(newPostit));
      dispatch(createColorsId({ id: newPostit.id, color: '#F7EF99' }));
      // to reset the note
      setText('');
      setTitle('');
    } else {
      // using swal to make the alert prettier
      swal({
        text:'Please enter a text in the Post-it',
        icon:'error',
      })
    }
  };

  return (
    <div style={{ backgroundColor: '#F7EF99' }}>
      <div className='flex flex-col justify-between min-h-260 p-0'>
        <textarea
          className=' box-border flex flex-col m-0 p-2 border-b border-zinc-500 border-dashed resize-none outline-none w-full h-12 text-center text-xl font-bold font-handlee bg-transparent placeholder-zinc-400'
          placeholder='Title...'
          maxLength='25'
          onChange={titleInfo}
          value={title}
          lang="en"
         />

        <textarea
          className='note-text placeholder-zinc-400'
          placeholder='My note...'
          // trying to avoid the note generate the scroll bar
          // so is more similar to how works a postit in the real life
          maxLength='190'
          onChange={noteInfo}
          // to associate the state value
          value={text}
          lang="en"
         />

        <footer className='flex flex-row justify-between items-center pl-2 h-9'>
          <p id='date' className='text-sm font-handlee font-medium'>{currentDate}</p>
          <BiSave
            className='cursor-pointer mr-1'
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

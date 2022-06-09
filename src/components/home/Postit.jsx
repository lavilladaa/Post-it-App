/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { React, useState } from 'react';
import { PropTypes } from 'prop-types';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { BiSave } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, colorChange, editNote } from '../../redux/noteSlice';


export default function Postit({ note, title, id, time }) {
  // In the initial value of the states is taken the stored value in the postit.
  const [editedText, setEditedText] = useState(note);
  const [editedTitle, setEditedTitle] = useState(title);

  // to know what kind of post-it has to be rendered:
  const [editState, setEditState] = useState(false);

  // the colors from the global state taken from the localStorage:
  const colorList = useSelector((state) => state.note.colorList);

  const dispatch = useDispatch();

  // ESLint requirement for the types of the props:
  Postit.propTypes = {
    note: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    time: PropTypes.string,
  };

  // taking the edited info from the textarea
  const titleNew = (event) => {
    setEditedTitle(event.target.value);
  };

  // taking the new text when the note is edited
  const noteNew = (event) => {
    setEditedText(event.target.value);
  };

  // onClick function for the edit button
  const edit = () => {
    setEditState(true);
  };

  const saveNew = (event) => {
    if (editedText.trim() !== '') {

      // to prevent the website refresh
      event.preventDefault();

      const editedPostit = {
        note: editedText,
        title: editedTitle,
        // id: id, (object-shorthand)
        id, 
        // to update the date when the post-it is edited
        time: new Date().toLocaleDateString(),
      };

      dispatch(editNote(editedPostit));

      // to render the original format post-it, editState is updated to false
      setEditState(false);
    }
  };

  const deleteFun = (event) => {
    event.preventDefault();
    dispatch(deleteNote(id));
  };

  const colorFun = () => {
    /* to take the input color of each postit
    is taken the id of the postit in the id of the color input */
    const color = document.getElementById(id).value;

    dispatch(colorChange({ id, color }));
  };

  // to rid off the title if the user does not insert it
  if (title === '') {
    title = '   ';
  }

  // the default color when the post-it is created is set to yellow
  let colorP = '#D8A9C4';

  // taking the colors of the post-its already created
  colorList.forEach((element) => {
    if (element.id === id) {
      colorP = element.color;
    }
  });

  return (
    <div style={{ backgroundColor: colorP }} className='postit-container'>

      {/* In case the mode edit is off, should render the original format postit */}
      {!editState ? (
        <div className='postit'>
          <textarea
            className='note-title'
            placeholder='Title...'
            maxLength='25'
            // to take the title from the NewPostit component.
            value={title}
            onChange={titleNew}
            /* "readOnly" is used to avoid the warning:
            "You provided a `value` prop to a form field without an `onChange` handler." */
            readOnly
          />

          <textarea
            className='note-text'
            placeholder='My note...'
            maxLength='200'
            // to take the note text from the NewPostit component.
            value={note}
            onChange={noteNew}
            readOnly
          />

          <footer className='flex flex-row justify-between items-center pl-2 h-9'>
            <p id='date' className='text-sm font-handlee'>
              {time}
            </p>
            <input
              type='color'
              className='w-12 h-5 p-0 md:ml-24 bg-stone-400 rounded border border-black cursor-pointer'
              // showing a list of colors presets
              list='defaultColors'
              /*  the same id as the id in the post-it, so when is deleted 
              keeps the set color when was in the home page */
              id={id}
              onChange={colorFun}
              value={colorP}
            />
            <datalist id='defaultColors'>
              {/* yellow */}
              <option>#F7EF99</option> 
              {/* purple */}
              <option>#D8A9C4</option> 
              {/* blue */}
              <option>#93E1D8</option> 
              {/* green */}
              <option>#BBEB9C</option> 
              {/* orange */}
              <option>#FEC18B</option> 
              {/* pink */}
              <option>#EFAAC0</option> 
              {/* light blue */}
              <option>#D1EAF9</option> 
              {/* white */}
              <option>#FEF9C7</option> 
            </datalist>
            <FaEdit
              className='cursor-pointer ml-2.5 '
              size='1.6em'
              color='#656565'
              onMouseOver={({ target }) => (target.style.color = 'black')}
              onMouseOut={({ target }) => (target.style.color = '#656565')}
              // to change the edit state
              onClick={edit}
            />

            <RiDeleteBin5Line
              className='cursor-pointer mr-1'
              size='1.7em'
              color='#656565'
              onMouseOver={({ target }) => (target.style.color = 'black')}
              onMouseOut={({ target }) => (target.style.color = '#656565')}
              onClick={deleteFun}
            />
          </footer>
        </div>
      ) : (
        <div className='postit'>
          <textarea
            className='note-title'
            placeholder='Title...'
            maxLength='25'
            onChange={titleNew}
            // to set the edited title
            value={editedTitle}
          />

          <textarea
            className='note-text'
            placeholder='My note...'
            maxLength='200'
            onChange={noteNew}
            // to set the edited text in the note
            value={editedText}
          />

          <footer className='flex flex-row justify-between items-center pl-2 h-9'>
            <p id='date' className='text-sm font-handlee'>
              {time}
            </p>

            <BiSave
              className='cursor-pointer'
              color='#656565'
              size='1.7em'
              onMouseOver={({ target }) => (target.style.color = 'black')}
              onMouseOut={({ target }) => (target.style.color = '#656565')}
              onClick={saveNew}
            />
          </footer>
        </div>
      )}
    </div>
  );
}

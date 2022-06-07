/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/require-default-props */
import { React, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { BiSave } from 'react-icons/bi';
import { deleteNote, colorChange, editNote } from '../../redux/noteSlice';

export default function Postit({ note, title, id, time }) {
  // In the initial value of the states is taken the original value in the postit.
  const [editedText, setEditedText] = useState(note);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editState, setEditState] = useState(false);

  const colorList = useSelector((state) => state.note.colorList);

  const dispatch = useDispatch();

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
        id, // id: id, (object-shorthand)
        // to update the date when the post-it is edited
        time: new Date().toLocaleDateString(),
      };

      dispatch(editNote(editedPostit));

      // to render the original format note editState is updated to false
      setEditState(false);
    }
  };

  const deleteFun = (event) => {
    event.preventDefault();
    dispatch(deleteNote(id));
  };

  const colorFun = () => {
    // to take the input color of each postit
    // is taken the id of the postit in the id of the color input
    const color = document.getElementById(id).value;
    dispatch(colorChange({ id, color }));
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
            // to avoid the warning
            // "You provided a `value` prop to a form field without an `onChange` handler."
            readOnly
          />

          <textarea
            className='note-text'
            placeholder='My note...'
            maxLength='10'
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
              list='defaultColors'
              id={id}
              onChange={colorFun}
              value={colorP}
            />
            <datalist id='defaultColors'>
              <option>#F7EF99</option> {/* yellow */}
              <option>#D8A9C4</option> {/* purple */}
              <option>#93E1D8</option> {/* blue */}
              <option>#BBEB9C</option> {/* green */}
              <option>#FEC18B</option> {/* orange */}
              <option>#EFAAC0</option> {/* pink */}
              <option>#D1EAF9</option> {/* light blue */}
              <option>#C0C0C0</option> {/* gray */}
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
            maxLength='190'
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

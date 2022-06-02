import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import trash from '../assets/trash.png';

export default function Footer() {
  const deletedList = useSelector((state) => state.note.deletedList);
  const { length } = deletedList;

  const alertTrash = () => {
    alert('The Trash is empty');
  };

  return (
    <>
    {/* to know if there are any postit deleted */}
      {length > 0 ? (
        <footer className='footer-section'>
          <Link to='/trash'>
            <button className='image-button' type="button">
              <div className='trash-count'>{length}</div>
            </button>
          </Link>
        </footer>
      ) : (
        <footer className='footer-section'>
          {/* <Link to="/trash"> */}
          <button className='icon-button' onClick={alertTrash} type="button">
            <img src={trash} width='70px' alt='Trash' />
          </button>
          {/* </Link> */}
        </footer>
      )}
    </>
  );
}

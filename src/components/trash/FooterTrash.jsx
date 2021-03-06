import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostitsDef } from '../../redux/noteSlice';
import home from '../assets/home.png';
import deleteForever from '../assets/deleteForever.png';

export default function FooterTrash() {
  const deletedList = useSelector((state) => state.note.deletedList);

  const dispatch = useDispatch();

  const deleteAllPostits = () => {    
    Swal.fire({
      text: 'Are you sure you want to delete all the Post-its?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7A056F',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePostitsDef());
        // when the post-its are deleted permanently the use is redirecting to the Home page.
        window.location = '/';
      }
    });
  };

  return (
    // the position of the footer depends on the screen size:
    <footer className={deletedList.length > 4 ? 'footer xl:relative' : 'footer xl:fixed md:relative'}>
      <button
        className='border-none bg-transparent mr-3.5 cursor-pointer'
        type='button'
        onClick={deleteAllPostits}
      >
        <img src={deleteForever} width='70px' alt='Home Icon' />
      </button>

      <Link to='/'>
        <button
          className='border-none bg-transparent mr-3.5 cursor-pointer'
          type='button'
        >
          <img src={home} width='70px' alt='Home Icon' />
        </button>
      </Link>
    </footer>
  );
}

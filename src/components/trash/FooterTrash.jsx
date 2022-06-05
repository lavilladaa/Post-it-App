import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import home from '../assets/home.png';

export default function FooterTrash() {
  const deletedList = useSelector((state) => state.note.deletedList);
  
  return (
    <footer className={deletedList.length>4 ? 'footer pos-rel':'footer pos-fix'}>
      <Link to='/'>
        <button className='border-none bg-transparent mr-3.5 cursor-pointer' type='button'>
          <img src={home} width='70px' alt='Home Icon' />
        </button>
      </Link>
    </footer>
  );
}

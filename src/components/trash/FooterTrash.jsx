import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/home.png';

export default function FooterTrash() {
  return (
    <footer className='text-right w-full py-2 px-1 fixed bottom-0 justify-right'>
      <Link to='/'>
        <button className='border-none bg-transparent mr-3.5 cursor-pointer' type='button'>
          <img src={home} width='70px' alt='Home Icon' />
        </button>
      </Link>
    </footer>
  );
}

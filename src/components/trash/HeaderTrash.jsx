import React from 'react';
import pencil from '../assets/pencil.png';

export default function HeaderTrash() {
  return (
    <header>
      <span>
        <h1 className='app-title mb-5 mt-10 md:mt-0 p-1 mx-auto h-20 w-full text-center text-6xl font-leckerli-one text-blue-aqua'>
          Trash{' '}
          <img
            className='inline-block mb-8 -ml-2 h-70 rotate-30'
            src={pencil}
            alt='pencil-icon'
            height='70px'
          />
        </h1>
      </span>
    </header>
  );
}

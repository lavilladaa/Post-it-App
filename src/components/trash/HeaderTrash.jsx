import React from 'react';

import pencil from '../assets/pencil.png';



export default function HeaderTrash() {


  return (
    <header>
      <span>
        <h1 className='app-title p-1 mb-5 mx-auto h-20 w-full text-blue-aqua text-center font-leckerli-one text-6xl' >
          Trash{' '}
          <img
            className='mb-8 -ml-2 h-70 rotate-30 inline-block'
            src={pencil}
            alt='pencil-icon'
            height='70px'
          />
        </h1>
        {/* <img className="header-pencil" src={pencil} alt="pencil-icon" height="50px"/> */}
      </span>
    </header>
  );
}

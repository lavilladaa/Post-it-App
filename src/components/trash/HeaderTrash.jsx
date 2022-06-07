import React from 'react';
import {useSelector } from 'react-redux';
import pencil from '../assets/pencil.png';
import wallDark from '../assets/wallDark.jpg';
import wallLight from '../assets/wallLight.jpg'


export default function HeaderTrash() {
  // to make the background renders in case the page is refreshed
  const backState = useSelector((state) => state.note.backState);
 
  document.body.style.backgroundImage = `url(${wallDark})`;

  if (backState===true){
    
    document.body.style.backgroundImage = `url(${wallDark})`;
    
  } else{
    
    document.body.style.backgroundImage = `url(${wallLight})`;
  }

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

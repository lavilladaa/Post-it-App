import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackground } from '../../redux/noteSlice';
import pencil from '../assets/pencil.png';

export default function Header() {
  
  /* The background state has to be a global state to keep the background
  when the user is redirecting from the trash to the home page */
  const backState = useSelector((state) => state.note.backState);

  const dispatch = useDispatch();

  const changeBack = () => {
    dispatch(changeBackground(!backState));
  };

  return (
    <header className='block mx-auto md:flex'>
      <h1 className='app-title mb-5 mx-auto p-1 h-20 w-full text-center text-6xl font-leckerli-one text-blue-aqua '>
        My notes
        <img
          className='inline-block mb-8 ml-1 h-70 rotate-30 '
          src={pencil}
          alt='pencil-icon'
        />
      </h1>

      <button type='button' className='button-background' onClick={changeBack}>
        Background
      </button>
    </header>
  );
}

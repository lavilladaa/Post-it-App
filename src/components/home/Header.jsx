import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackground } from '../../redux/noteSlice';
import pencil from '../assets/pencil.png';

export default function Header() {
  // the background state has to be a global state to keep the background
  // when the user is redirecting from the trash to the home page
  const backState = useSelector((state) => state.note.backState);

  const dispatch = useDispatch();

  const changeBack = () => {
    dispatch(changeBackground(!backState));
  };

  return (
    <header className='block md:flex mx-auto'>
      <h1 className='app-title p-1 mb-5 mx-auto h-20 w-full text-blue-aqua text-center font-leckerli-one text-6xl'>
        My notes
        <img
          className='mb-8 ml-1 h-70 rotate-30 inline-block'
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

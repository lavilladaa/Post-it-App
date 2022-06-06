import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackground } from  '../../redux/noteSlice';
import pencil from '../assets/pencil.png';
import wallDark from '../assets/wallDark.jpg';
import wallLight from '../assets/wallLight.jpg'

// import wall from '../assets/wall.png';


export default function Header() {
  // the background state has to be a global state to keep the background 
  // when the user is redirecting from the trash to the home page
  const backState = useSelector((state) => state.note.backState);
  const dispatch = useDispatch();
   
  const changeBack =()=> {
      dispatch(changeBackground(backState));
         
  }

  if (backState===true){
    
    document.body.style.backgroundImage = `url(${wallDark})`;
    
  } else{
    
    document.body.style.backgroundImage = `url(${wallLight})`;
  }

  return (
    <header  className='flex flex-cols mx-auto'>
      
        {/* <h1 className='app-title'> */}
        <h1 className='app-title p-1 mb-5 mx-auto h-20 w-full text-blue-aqua text-center font-leckerli-one text-6xl'>
          My notes
          <img
            className='mb-8 ml-1 h-70 rotate-30 inline-block'
            src={pencil}
            alt='pencil-icon'
          />
          
        </h1>
        <button type='button' className='mr-3 -ml-8 mt-5 px-2  bg-stone-400 rounded-lg font-bold font-handlee text-black w-auto h-10 border border-black' onClick={changeBack}>Background</button>

              
    </header>
  );
}

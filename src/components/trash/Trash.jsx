import React from 'react';
import {useSelector } from 'react-redux';
import HeaderTrash from './HeaderTrash';
import FooterTrash from './FooterTrash';
import DeletedNotes from './DeletedNotes';
import wallDark from '../assets/wallDark.jpg';
import wallLight from '../assets/wallLight.jpg'

// import {BrowserRouter, Route, Routes} from "react-router-dom"

function Trash () {
    // to make the background renders in case the page is refreshed
    const backState = useSelector((state) => state.note.backState);
 
    document.body.style.backgroundImage = `url(${wallDark})`;
  
    if (backState===true){
      
      document.body.style.backgroundImage = `url(${wallDark})`;
      
    } else{
      
      document.body.style.backgroundImage = `url(${wallLight})`;
    }

  return (
    <>
    <HeaderTrash />
      <DeletedNotes />
      <FooterTrash />
    </>
  );
};

export default Trash;

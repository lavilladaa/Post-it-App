import React from 'react';
import { useSelector } from 'react-redux';
import HeaderTrash from './HeaderTrash';
import FooterTrash from './FooterTrash';
import DeletedNotes from './DeletedNotes';
import wallDark from '../assets/wallDark.jpg';
import wallLight from '../assets/wallLight.jpg';

function Trash() {
  // to make the background renders in case the page is refreshed
  const backState = useSelector((state) => state.note.backState);

  if (backState === true) {
    document.body.style.backgroundImage = `url(${wallLight})`;
  } else {
    document.body.style.backgroundImage = `url(${wallDark})`;
  }

  return (
    <>
      <HeaderTrash />
      <DeletedNotes />
      <FooterTrash />
    </>
  );
}

export default Trash;

import React from 'react';
import HeaderTrash from './HeaderTrash';
import FooterTrash from './FooterTrash';
import DeletedNotes from './DeletedNotes';
// import {BrowserRouter, Route, Routes} from "react-router-dom"

function Trash () {
  return (
    <>
      <HeaderTrash />
      <DeletedNotes />
      <FooterTrash />
    </>
  );
};

export default Trash;

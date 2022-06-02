import React from "react";
import HeaderTrash from "./HeaderTrash";
import FooterTrash from "./FooterTrash";
import DeletedNotes from "./DeletedNotes";
// import {BrowserRouter, Route, Routes} from "react-router-dom"

const Trash = () => {
  return (
    <>
      <HeaderTrash />
      <DeletedNotes />
      {/* <div id="notes-footer-space"> </div> */}
      <FooterTrash />
    </>
  );
};

export default Trash;

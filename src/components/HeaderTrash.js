// import React from "react";
import pencil from "./assets/pencil.png";

export default function HeaderTrash() {
  return (
    <header className="header">
      <span>
        <h1 className="app-title">
          Trash{" "}
          <img
            className="header-pencil-trash"
            src={pencil}
            alt="pencil-icon"
            height="70px"
          />
        </h1>
        {/* <img className="header-pencil" src={pencil} alt="pencil-icon" height="50px"/> */}
      </span>
    </header>
  );
}

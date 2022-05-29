// import React from "react";
import pencil from "./assets/pencil.png";

export default function Header() {
  return (
    <header className="header">
      <span>
        <h1 className="app-title">
          My notes{" "}
          <img
            className="header-pencil"
            src={pencil}
            alt="pencil-icon"
            height="40px"
          />
        </h1>
        {/* <img className="header-pencil" src={pencil} alt="pencil-icon" height="50px"/> */}
      </span>
    </header>
  );
}

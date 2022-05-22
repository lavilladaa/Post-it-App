import React from "react";
// import { RiSave2Fill } from 'react-icons/ri';
import{BiSave} from "react-icons/bi";

import {useState} from "react"
// import  Postit from "./Postit"
 
 const NewPostit =({newNote})=>{
    
    const current_date=new Date();
    
    const [text,setText]=useState("");

    // To take te text in the note:
    const noteInfo=(event)=>{
        setText(event.target.value);
        
    }

    // To update the new note
    const saveNote=(event)=>{
        // to prevent save a note in blank even if the user type spaces
         if (text.trim() !== ""){
        event.preventDefault();
        newNote(text);
        // to reset the note 
        setText("");
        }
         
    }



    return (
        <div className="postit">
                        
            <textarea  className="note-title" placeholder="Title..." maxlength="40"></textarea>

            <textarea 
            className="note-text" 
            placeholder="My note..." 
            maxLength="230"
            onChange={noteInfo}
            // to associate the state value
            value={text}
            >
            </textarea>
            
            <footer className="note-footer">
                <p id="date">{current_date.toLocaleDateString()}</p>
                <BiSave 
                id="save-button" 
                size="1.7em" 
                onMouseOver={({target})=>target.style.color="#535354"}
                onMouseOut={({target})=>target.style.color="#7f7f81"}
                onClick={saveNote}
                />
                            
            </footer>
        
        </div>

    )
};

export default NewPostit;
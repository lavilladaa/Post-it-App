import React from "react";
import { RiSave2Fill } from 'react-icons/ri';
import {useState} from "react"
 
 const NewPostit =()=>{
    
    const current_date=new Date();
    
    const [note,setNote]=useState('');
    // To take te text in the note:
    const noteInfo=(event)=>{
        setNote(event.target.value);
    }
    
    // To update the new note
    const saveNote=()=>{

    }
   

    return (
        <div className="postit">
                        
            <textarea  className="note-title" placeholder="Title..." maxlength="40"></textarea>

            <textarea 
            className="note-text" 
            placeholder="My note..." 
            maxlength="250"
            onChange={noteInfo}
            value={note}
            >
            </textarea>
            
            <footer className="note-footer">
                <p id="date">{current_date.toLocaleDateString()}</p>
                <RiSave2Fill 
                id="save-button" 
                size="1.5em" 
                onMouseOver={({target})=>target.style.color="#535354"}
                onMouseOut={({target})=>target.style.color="#7f7f81"}
                onClick={saveNote}
                />
            
            </footer>

        </div>

    )
};

export default NewPostit;
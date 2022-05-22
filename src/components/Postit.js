import React from "react";
import { RiDeleteBin5Line } from 'react-icons/ri';

const Postit=({note})=>{

    const current_date=new Date();
    return (
        <div className="postit">

            
            <textarea  className="note-title" placeholder="Title..." maxlength="40"></textarea>

            <textarea 
            className="note-text" 
            placeholder="My note..." 
            maxlength="150"
            // to place the text from the newPostit component
            value={note}
            >
           
            </textarea>
            
            <footer className="note-footer">
                <p id="date">{current_date.toLocaleDateString()}</p>
                <RiDeleteBin5Line size="1.5em"/>
            
            </footer>
    


        </div>
    )
}

export default Postit;
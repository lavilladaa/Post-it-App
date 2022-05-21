import React from "react";
import { RiDeleteBin5Line } from 'react-icons/ri';

const Postit=()=>{

    const current_date=new Date();
    return (
        <div className="postit">

            
            <textarea  className="note-title" placeholder="Title..." maxlength="40"></textarea>
            
            <footer className="note-footer">
                <p id="date">{current_date.toLocaleDateString()}</p>
                <RiDeleteBin5Line size="1.5em"/>
            
            </footer>
    


        </div>
    )
}

export default Postit;
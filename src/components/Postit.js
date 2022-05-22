import React from "react";
// import {useState} from "react";
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

export default function Postit({note,title}){

    const current_date=new Date();
    // const [textEdit, setTextEdit]=useState();

    // const noteNewInfo=(event)=>{
    //     setTextEdit(event.target.value);
        
    // }

    // const editText=(event)=>{
    //     editNote(textEdit)

    // }
    return (
        <div className="postit">

            
            <textarea  
            className="note-title" 
            placeholder="Title..." 
            maxlength="40"
            value={title}
            >

            </textarea>

            <textarea 
            className="note-text" 
            placeholder="My note..." 
            maxlength="150"
            // onChange={noteNewInfo}
            // to place the text from the newPostit component
            value={note}
            >
           
            </textarea>
            
            <footer className="note-footer">
                <p id="date">{current_date.toLocaleDateString()}</p>
                <FaEdit
                className="button" 
                id="edit-button"
                size="1.6em" 
                color= "#7f7f81"
                onMouseOver={({target})=>target.style.color="#535354"}
                onMouseOut={({target})=>target.style.color="#7f7f81"}
                // onClick={editText}
                />

                <RiDeleteBin5Line 
                className="button" 
                size="1.7em" 
                color= "#7f7f81"
                onMouseOver={({target})=>target.style.color="#535354"}
                onMouseOut={({target})=>target.style.color="#7f7f81"}
                />


            
            </footer>
    


        </div>
    )
}


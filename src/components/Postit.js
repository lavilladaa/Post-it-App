import React from "react";
import {useState} from "react";
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import{BiSave} from "react-icons/bi";

export default function Postit({note,title,id,editNote,deleteNote}){

    //to set the current date in the postit
    const current_date=new Date();

    const [editState, setEditState]=useState(false);
    // In the initial value of the states is taken the original value in the postit.
    const [editedText, setEditedText] = useState(note); 
    const [editedTitle, setEditedTitle]=useState(title);

    // taking the edited info from the textarea
    const titleNew=(event)=>{
        setEditedTitle(event.target.value);
    }

    const noteNew=(event)=>{
        setEditedText(event.target.value);
    }

    // const [note, setNote] = useState(note); 
    // const [title, setTitle]=useState(title);

    // // taking the edited info from the textarea
    // const titleNew=(event)=>{
    //     setTitle(event.target.value);
    // }

    // const noteNew=(event)=>{
    //     setNote(event.target.value);
    // }

    // onClick function for the edit button
    const edit=()=>{
        setEditState(true);
        // to take the original values
        setEditedText(note);
        setEditedTitle(title);
    }

    const saveNew=(event)=>{
         // to prevent the website refresh
         if (editedText.trim() !== ""){
        event.preventDefault();
        editNote(id,editedTitle,editedText)
        // to render the original format note editState is updated to false
        setEditState(false);}
    
    }

    const deleteFun=(event)=>{
        event.preventDefault();
        deleteNote(id)
    }
    // to quit the title if the user does not insert it
    if (title===""){
        title="   ";
    }

    if (editedTitle===""){
        setEditedTitle("  ");
    }

    return (
        <div>
        {/* In case the mode edit is off, should render the original format postit */}
        { !editState ? 

        <div className="postit">

            <textarea  
            className="note-title" 
            placeholder="Title..." 
            maxlength="40"
            // to take the title from the NewPostit component.
            value={title}
            // onChange={titleNew}
            // value={editedTitle}
            >

            </textarea>

            <textarea 
            className="note-text" 
            placeholder="My note..." 
            maxlength="150"
            // to take the note text from the NewPostit component.
            value={note}
            // onChange={noteNew}
            // value={editedText}
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
                // to change the edit state
                onClick={edit}
                />

                <RiDeleteBin5Line 
                className="button" 
                size="1.7em" 
                color= "#7f7f81"
                onMouseOver={({target})=>target.style.color="#535354"}
                onMouseOut={({target})=>target.style.color="#7f7f81"}
                onClick={deleteFun}
                />

            </footer>
                 
        </div> :
        
        <>

        <div className="postit">
                    
                <textarea  
                className="note-title" 
                placeholder="Title..." 
                maxlength="40"
                onChange={titleNew}
                // to set the edited title
                value={editedTitle}
                // value={title}
                >
    
                </textarea>
    
                <textarea 
                className="note-text" 
                placeholder="My note..." 
                maxLength="230"
                onChange={noteNew}
                // to set the edited text in the note
                value={editedText}
                // value={note}
                >
                </textarea>
                
                <footer className="note-footer">
                    <p id="date">{current_date.toLocaleDateString()}</p>
                    <BiSave 
                    className="button" 
                    color= "#7f7f81"
                    size="1.7em" 
                    onMouseOver={({target})=>target.style.color="#535354"}
                    onMouseOut={({target})=>target.style.color="#7f7f81"}
                    onClick={saveNew}
                    />
                                
                </footer>
                
        </div>
            
        </>
        }
        </div>
        
    )
}

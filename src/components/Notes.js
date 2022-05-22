// import Postit from './Postit'
import React from "react"
import {useState} from "react"
import NewPostit from "./NewPostit"
import Postit from "./Postit"


const Notes=()=>{
    
    const [notesList,setNotesList] =useState([]);

    const newNote=(note)=>{
        setNotesList([...notesList,note])
    }

    return (
    <div className="Notes">
    <NewPostit newNote={newNote}/>
        
    {/* to render all the notes created */}
    {notesList.map(element => <Postit note={element}/>)}
    </div>
    )
};

export default Notes;
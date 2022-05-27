import React from "react"
import {useState} from "react"

import NewPostit from "./NewPostit"
import Postit from "./Postit"


export default function Notes(){
    
    const [notesList,setNotesList] =useState([]);
    const [titleList,setTitleList]=useState([]);

    // function to add a new note
    const newNote=(note,title)=>{
        setNotesList([...notesList,note])
        setTitleList([...titleList,title])
    }

    // function to edit a note
    // const editNote=(id)=>{
    //     notesList.map((element,index)=>
    //     if(id===index){
    //         notesList[id]={textEdit}
    //     }
    //     )
    // }


    return (
    // To change the className when there are more than 3 notes
    // so the align content change from left to center
    <div className={notesList.length >=3 ? "multiple-notes": "few-notes"}>
   
  
        <NewPostit newNote={newNote}/>

    {/* to render all the notes created */}
    {notesList.map((element,index) => <Postit note={element} title={titleList[index]}/>)}


   
    </div>
    )
};

